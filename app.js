(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var ide = $('ide'), stdin = $('stdin'), outp = $('outp'), statusEl = $('status'), problems = $('problems');
  var runBtn = $('run'), stopBtn = $('stop');
  var prog = $('prog'), bar = $('bar'), progLabel = $('proglabel');
  var mqMobile = window.matchMedia('(max-width:860px)');
  var worker = null, running = false, examples = [], loaded = false, currentExample = null;
  var exampleId = new URLSearchParams(location.search).get('example');
  var incomingShare = location.hash.startsWith('#s=');
  var practice = /^learn-[a-z0-9-]+$/.test(exampleId || '');
  var openingPractice = practice;
  var canLiveInput = window.crossOriginIsolated && typeof SharedArrayBuffer === 'function';
  var terminalForm = $('terminalInput'), inputSignal = null, inputBytes = null, inlineForm = null, inlineField = null;

  var HELLO = '#include <stdio.h>\n\nint main(void)\n{\n    int n;\n    printf("Enter an integer from -100 to 100: ");\n    fflush(stdout);\n    if (scanf("%4d", &n) != 1 || n < -100 || n > 100) {\n        fputs("Expected an integer from -100 to 100.\\n", stderr);\n        return 1;\n    }\n    printf("Its square is %d\\n", n * n);\n    return 0;\n}\n';

  function store(k, v) { if (!practice) { try { localStorage.setItem(k, v); } catch (e) {} } }
  function load(k) { if (practice) return null; try { return localStorage.getItem(k); } catch (e) { return null; } }
  function loadJSON(k, d) { try { var v = JSON.parse(load(k)); return v == null ? d : v; } catch (e) { return d; } }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function setStatus(text, cls) { statusEl.textContent = text; statusEl.className = 'status' + (cls ? ' ' + cls : ''); }
  function fmtSize(n) { return n < 1024 ? n + ' B' : n < 1048576 ? (n / 1024).toFixed(1) + ' KB' : (n / 1048576).toFixed(1) + ' MB'; }

  /* ---------- editor, text size ---------- */
  var fontPx = +load('compilec.fs') || (mqMobile.matches ? 16 : 14.5);
  document.documentElement.style.setProperty('--fs', fontPx + 'px');
  var acOn = load('compilec.ac') !== '0';
  var dirty = false, fileName = load('compilec.name') || 'main.c';
  var editor = CEditor.createEditor($('code'), load('compilec.code') || HELLO, function () { run(false); }, fontPx, {
    change: function () { dirty = true; },
    autocomplete: load('compilec.ac') !== '0',
    isCpp: function () { return language.value === 'CPP'; },
    cursor: function (l, c) { var p = document.getElementById('pos'); if (p) p.textContent = 'Ln ' + l + ', Col ' + c; }
  });
  document.querySelector('#pEditor .ttl').textContent = fileName;
  function setProgram(text, name) {
    editor.set(text);
    fileName = name || 'main.c';
    dirty = false;
    document.querySelector('#pEditor .ttl').textContent = fileName;
    store('compilec.name', fileName);
    if (progs[activeTab]) { progs[activeTab].dirty = false; renderTabs(); }
  }
  var progs = [], activeTab = 0, MAXTABS = 12;
  var language = $('language');
  var cppFile = /\.(cpp|cc|cxx)$/i;
  function setLanguage(mode) {
    language.value = mode === 'CPP' ? 'CPP' : 'C';
    $('cStandard').hidden = language.value === 'CPP';
    $('cppStandard').hidden = language.value !== 'CPP';
  }
  setLanguage(practice ? 'C' : load('compilec.language') || (cppFile.test(fileName) ? 'CPP' : 'C'));
  if (load('compilec.cppStd')) $('cppStd').value = load('compilec.cppStd');

  function sourceExtension() { return language.value === 'CPP' ? '.cpp' : '.c'; }
  language.addEventListener('change', function () {
    setLanguage(language.value);
    fileName = fileName.replace(/\.(?:c|cpp|cc|cxx)$/i, '') + sourceExtension();
    document.querySelector('#pEditor .ttl').textContent = fileName;
    store('compilec.name', fileName);
    renderTabs();
    saveSettings();
  });

  var installPrompt;
  window.addEventListener('beforeinstallprompt', function (event) {
    event.preventDefault();
    installPrompt = event;
  });
  var installed = matchMedia('(display-mode: standalone)');
  $('installApp').hidden = installed.matches || navigator.standalone === true;
  window.addEventListener('appinstalled', function () {
    installPrompt = null;
    $('installApp').hidden = true;
  });
  $('installApp').addEventListener('click', async function () {
    if (!installPrompt) {
      $('dlgInstall').showModal();
      return;
    }
    var prompt = installPrompt;
    installPrompt = null;
    try {
      await prompt.prompt();
    } catch {
      $('dlgInstall').showModal();
    }
  });

  function okToReplace() { return !dirty || window.confirm('Replace the program in the editor? Changes since you last saved will be lost.'); }
  stdin.value = load('compilec.stdin') ?? '';
  $('args').value = load('compilec.args') || '';
  if (load('compilec.opt')) $('opt').value = load('compilec.opt');
  if (load('compilec.std')) $('std').value = load('compilec.std');
  if (load('compilec.warn')) $('warn').value = load('compilec.warn');
  if (canLiveInput) $('inputHelp').textContent = 'Leave blank to type in Output when the program asks for input.';

  /* ---------- progs: several programs, each with its own input ---------- */
  var tabbar = $('tabbar');
  function captureTab() {
    var t = progs[activeTab];
    if (!t) return;
    t.name = fileName; t.code = editor.get(); t.input = stdin.value; t.lang = language.value; t.dirty = dirty; t.state = editor.getState();
  }
  function persistTabs() {
    if (practice || !progs.length) return;
    captureTab();
    store('compilec.tabs', JSON.stringify({ a: activeTab, t: progs.map(function (t) { return { n: t.name, c: t.code, i: t.input, l: t.lang, d: t.dirty }; }) }));
  }
  function uniqueName(name) {
    var taken = progs.map(function (t, i) { return i === activeTab ? fileName : t.name; });
    if (taken.indexOf(name) < 0) return name;
    var m = /^(.*?)(\.[A-Za-z]+)?$/.exec(name), k = 2;
    while (taken.indexOf(m[1] + k + (m[2] || '')) >= 0) k++;
    return m[1] + k + (m[2] || '');
  }
  function loadTab(i) {
    activeTab = i;
    var t = progs[i];
    fileName = t.name; setLanguage(t.lang || 'C'); stdin.value = t.input || '';
    editor.setState(t.state || null, t.code);
    dirty = !!t.dirty;
    document.querySelector('#pEditor .ttl').textContent = fileName;
    store('compilec.name', fileName);
    resetOutput(); clearProblems(); renderTabs(); persistTabs();
  }
  function showTab(i) {
    if (i === activeTab || !progs[i]) return;
    if (running) { setStatus('Stop the program before switching progs.'); return; }
    captureTab(); loadTab(i); editor.focus();
  }
  function newTab(text, name, lang) {
    if (practice) return false;
    if (running) { setStatus('Stop the program before opening a new tab.'); return false; }
    if (progs.length >= MAXTABS) { setStatus('At most ' + MAXTABS + ' progs. Close one first.'); return false; }
    captureTab();
    var l = lang || language.value;
    progs.push({ name: uniqueName(name || ('main' + (l === 'CPP' ? '.cpp' : '.c'))), code: text || '', input: '', lang: l, dirty: false, state: null });
    loadTab(progs.length - 1); editor.focus();
    return true;
  }
  // Open a program: reuse the current tab if it holds nothing of the user's, otherwise open a new tab.
  function openProgram(text, name, lang) {
    lang = lang === 'CPP' ? 'CPP' : 'C';
    if (!practice) {
      for (var k = 0; k < progs.length; k++) {
        var nm = k === activeTab ? fileName : progs[k].name, cd = k === activeTab ? editor.get() : progs[k].code;
        if (nm === name && cd === text) { if (k !== activeTab) showTab(k); return; }
      }
    }
    if (practice || !dirty || progs.length >= MAXTABS || running) { setLanguage(lang); setProgram(text, name); return; }
    newTab(text, name, lang);
  }
  function closeTab(i) {
    if (progs.length < 2) return;
    if (running && i === activeTab) { setStatus('Stop the program before closing its tab.'); return; }
    if (i === activeTab) captureTab();
    var t = progs[i], nm = i === activeTab ? fileName : t.name;
    if (t.dirty && String(t.code).trim() && !window.confirm('Close ' + nm + '? Its code is kept only in this browser and will be lost.')) return;
    if (i !== activeTab) captureTab();
    progs.splice(i, 1);
    if (i < activeTab) { activeTab--; renderTabs(); persistTabs(); }
    else if (i === activeTab) loadTab(Math.min(i, progs.length - 1));
    else { renderTabs(); persistTabs(); }
  }
  function renameTab(i) {
    var cur = i === activeTab ? fileName : progs[i].name;
    var name = window.prompt('Rename this tab', cur);
    if (!name) return;
    name = cleanName(name);
    if (!name) return;
    if (!/\.[A-Za-z]+$/.test(name)) name += (cppFile.test(cur) ? '.cpp' : '.c');
    var lang = cppFile.test(name) ? 'CPP' : 'C';
    if (i === activeTab) { fileName = name; setLanguage(lang); document.querySelector('#pEditor .ttl').textContent = name; store('compilec.name', name); }
    else { progs[i].name = name; progs[i].lang = lang; }
    renderTabs(); persistTabs();
  }
  function renderTabs() {
    if (!tabbar) return;
    tabbar.hidden = practice;
    if (practice) return;
    tabbar.textContent = '';
    progs.forEach(function (t, i) {
      var on = i === activeTab, nm = on ? fileName : t.name;
      var box = document.createElement('div');
      box.className = 'tab' + (on ? ' on' : '');
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'tl'; b.textContent = nm; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.title = nm + ' (double-click to rename)';
      b.addEventListener('click', function () { showTab(i); });
      b.addEventListener('dblclick', function () { renameTab(i); });
      box.appendChild(b);
      if (progs.length > 1) {
        var x = document.createElement('button');
        x.type = 'button'; x.className = 'tx'; x.textContent = '×'; x.setAttribute('aria-label', 'Close ' + nm); x.title = 'Close ' + nm;
        x.addEventListener('click', function () { closeTab(i); });
        box.appendChild(x);
      }
      tabbar.appendChild(box);
    });
    var plus = document.createElement('button');
    plus.type = 'button'; plus.className = 'plus'; plus.textContent = '+'; plus.setAttribute('aria-label', 'New tab'); plus.title = 'New tab';
    plus.addEventListener('click', function () { newTab('', ''); });
    tabbar.appendChild(plus);
    var cur = tabbar.querySelector('.tab.on');
    if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  progs = [{ name: fileName, code: editor.get(), input: stdin.value, lang: language.value, dirty: false, state: null }];
  if (!practice) {
    var savedTabs = loadJSON('compilec.tabs', null);
    if (savedTabs && savedTabs.t && savedTabs.t.length) {
      progs = savedTabs.t.slice(0, MAXTABS).map(function (x) { return { name: x.n || 'main.c', code: String(x.c || ''), input: String(x.i || ''), lang: x.l === 'CPP' ? 'CPP' : 'C', dirty: !!x.d, state: null }; });
      activeTab = clamp(savedTabs.a | 0, 0, progs.length - 1);
      var t0 = progs[activeTab];
      fileName = t0.name; setLanguage(t0.lang); stdin.value = t0.input; editor.setState(null, t0.code); dirty = t0.dirty;
      document.querySelector('#pEditor .ttl').textContent = fileName;
    }
  }
  renderTabs();

  if (practice) {
    runBtn.disabled = true;
    $('std').value = 'c17';
    $('warn').value = 'extra';
    $('tutorialLink').href = 'tutorial/#' + exampleId.slice(6);
    $('tutorialLink').textContent = 'Back to lesson';
    setStatus('Opening tutorial example...');
  }
  function setFont(px) {
    fontPx = clamp(px, 11, 28);
    document.documentElement.style.setProperty('--fs', fontPx + 'px');
    editor.fontSize(fontPx);
    store('compilec.fs', String(fontPx));
  }
  $('undo').addEventListener('click', function () { editor.undo(); });
  $('redo').addEventListener('click', function () { editor.redo(); });

  /* ---------- pages (phones) and tabs ---------- */
  var tabs = { 'in': 'stdin', out: 'output' };
  function selectTab(group, name) {
    var panel = $(group === 'in' ? 'pIn' : 'pOut');
    tabs[group] = name;
    panel.querySelectorAll('[role=tab]').forEach(function (b) {
      var on = b.getAttribute('data-t') === name;
      b.setAttribute('aria-selected', String(on));
      var tp = $('tp-' + b.getAttribute('data-t'));
      if (tp) tp.hidden = !on;
    });
    if (group === 'out' && mqMobile.matches && ide.dataset.page !== 'code') setPage('output', true);
    if (group === 'in' && mqMobile.matches && ide.dataset.page !== 'code') setPage('input', true);
  }
  document.querySelectorAll('.tabs [role=tab]').forEach(function (b) {
    b.addEventListener('click', function () {
      selectTab(b.closest('#pIn') ? 'in' : 'out', b.getAttribute('data-t'));
      if (mqMobile.matches) setPage(b.closest('#pIn') ? 'input' : 'output', true);
    });
  });
  function setPage(p, quiet) {
    ide.dataset.page = p;
    document.querySelectorAll('#nav button').forEach(function (b) {
      if (b.getAttribute('data-page') === p) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
    });
    if (quiet) return;
    if (p === 'input') selectTab('in', tabs['in']);
    else if (p === 'output') selectTab('out', 'output');
  }
  document.querySelectorAll('#nav button').forEach(function (b) {
    b.addEventListener('click', function () { setPage(b.getAttribute('data-page')); });
  });
  mqMobile.addEventListener('change', function () { if (ide.dataset.max) delete ide.dataset.max; });

  // The visible height shrinks when a phone keyboard opens; follow it so the bars stay on screen.
  if (window.visualViewport) {
    var vv = window.visualViewport;
    var fitHeight = function () {
      if (Math.abs(vv.scale - 1) < 0.01) ide.style.setProperty('--vh', Math.round(vv.height) + 'px');
      if (mqMobile.matches) window.scrollTo(0, 0);
    };
    vv.addEventListener('resize', fitHeight);
    fitHeight();
  }

  /* ---------- adjustable panels ---------- */
  var DEF = { sideA: 60, sideB: 34, stackA: 55, stackB: 40 };
  var sizes = loadJSON('compilec.sizes', {});
  ide.dataset.layout = load('compilec.layout') === 'stack' ? 'stack' : 'side';
  function sizeOf(key) { var k = ide.dataset.layout + key; return sizes[k] != null ? sizes[k] : DEF[k]; }
  function applySizes() {
    ide.style.setProperty('--a', sizeOf('A') + '%');
    ide.style.setProperty('--b', sizeOf('B') + '%');
    ['A', 'B'].forEach(function (k) { $('split' + k).setAttribute('aria-valuenow', String(Math.round(sizeOf(k)))); });
    var stack = ide.dataset.layout === 'stack';
    $('splitA').setAttribute('aria-orientation', stack ? 'horizontal' : 'vertical');
    $('splitB').setAttribute('aria-orientation', stack ? 'vertical' : 'horizontal');
  }
  function setSize(key, pct) {
    sizes[ide.dataset.layout + key] = clamp(pct, 10, 90);
    applySizes();
  }
  function makeSplit(el, key) {
    var dragging = false;
    function axisX() { return (key === 'A') === (ide.dataset.layout === 'side'); }
    function box() { return (key === 'A' ? $('panes') : $('side')).getBoundingClientRect(); }
    el.setAttribute('aria-valuemin', '10');
    el.setAttribute('aria-valuemax', '90');
    el.addEventListener('pointerdown', function (e) {
      dragging = true; el.setPointerCapture(e.pointerId); el.classList.add('drag'); e.preventDefault();
    });
    el.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var r = box();
      setSize(key, axisX() ? (e.clientX - r.left) / r.width * 100 : (e.clientY - r.top) / r.height * 100);
    });
    function stop() { if (!dragging) return; dragging = false; el.classList.remove('drag'); store('compilec.sizes', JSON.stringify(sizes)); }
    el.addEventListener('pointerup', stop);
    el.addEventListener('pointercancel', stop);
    el.addEventListener('keydown', function (e) {
      var step = e.shiftKey ? 8 : 2, cur = sizeOf(key), d = 0;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') d = -step;
      else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') d = step;
      else if (e.key === 'Home' || e.key === 'Enter') { delete sizes[ide.dataset.layout + key]; applySizes(); store('compilec.sizes', JSON.stringify(sizes)); e.preventDefault(); return; }
      else return;
      e.preventDefault();
      setSize(key, cur + d);
      store('compilec.sizes', JSON.stringify(sizes));
    });
    el.addEventListener('dblclick', function () { delete sizes[ide.dataset.layout + key]; applySizes(); store('compilec.sizes', JSON.stringify(sizes)); });
  }
  makeSplit($('splitA'), 'A');
  makeSplit($('splitB'), 'B');
  applySizes();
  function setLayout(v) {
    ide.dataset.layout = v === 'stack' ? 'stack' : 'side';
    store('compilec.layout', ide.dataset.layout);
    applySizes();
  }
  function resetSizes() {
    sizes = {}; store('compilec.sizes', '{}'); delete ide.dataset.max; applySizes();
  }
  function toggleMax(m) { if (ide.dataset.max === m) delete ide.dataset.max; else ide.dataset.max = m; }
  document.querySelectorAll('.max').forEach(function (b) {
    b.addEventListener('click', function () {
      toggleMax(b.getAttribute('data-max'));
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (pop) { closeMenu(true); return; }
    if (ide.dataset.max) delete ide.dataset.max;
  });

  /* ---------- symbol bar for typing on a phone ---------- */
  [['Tab', '    '], ['{', '{'], ['}', '}'], ['(', '('], [')', ')'], ['[', '['], [']', ']'], [';', ';'], ['"', '"'], ["'", "'"],
   ['<', '<'], ['>', '>'], ['=', '='], ['&', '&'], ['*', '*'], ['#', '#'], ['%', '%'], ['\\', '\\'], ['!', '!'],
   ['|', '|'], ['+', '+'], ['-', '-'], ['/', '/'], [',', ','], ['_', '_']].forEach(function (s) {
    var b = document.createElement('button');
    b.type = 'button'; b.textContent = s[0]; b.setAttribute('aria-label', 'Insert ' + (s[0] === 'Tab' ? 'a tab' : s[0]));
    b.addEventListener('mousedown', function (e) { e.preventDefault(); });
    b.addEventListener('click', function () { editor.insert(s[1]); });
    $('symbols').appendChild(b);
  });

  /* ---------- input files ---------- */
  var files = [];            // { name, bytes: Uint8Array, text: boolean }
  var outFiles = [];         // files the last run wrote
  var editing = null;
  function isText(bytes) {
    var n = Math.min(bytes.length, 4096);
    for (var i = 0; i < n; i++) if (bytes[i] === 0) return false;
    return true;
  }
  function cleanName(n) { return String(n || '').replace(/[\\\/]+/g, '_').replace(/^\.+/, '').trim().slice(0, 80); }
  function addFile(name, bytes) {
    name = cleanName(name);
    if (!name || name === 'tmp') return false;
    var f = { name: name, bytes: bytes, text: isText(bytes) };
    var i = files.findIndex(function (x) { return x.name === name; });
    if (i >= 0) files[i] = f; else files.push(f);
    return true;
  }
  function persistFiles() {
    var list = [], total = 0;
    files.forEach(function (f) { if (f.text && total + f.bytes.length < 300000) { total += f.bytes.length; list.push({ name: f.name, text: new TextDecoder().decode(f.bytes) }); } });
    store('compilec.files', JSON.stringify(list));
  }
  function btn(label, fn, aria) {
    var b = document.createElement('button');
    b.type = 'button'; b.textContent = label; if (aria) b.setAttribute('aria-label', aria);
    b.addEventListener('click', fn);
    return b;
  }
  function download(name, bytes, type) {
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([bytes], { type: type || 'application/octet-stream' }));
    a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
  }
  function renderFiles() {
    var ul = $('flist');
    ul.textContent = '';
    files.forEach(function (f) {
      var li = document.createElement('li');
      var n = document.createElement('span'); n.className = 'fn'; n.textContent = f.name;
      var s = document.createElement('span'); s.className = 'fs'; s.textContent = fmtSize(f.bytes.length);
      li.appendChild(n); li.appendChild(s);
      if (f.text) li.appendChild(btn('Edit', function () { openEditor(f); }, 'Edit ' + f.name));
      li.appendChild(btn('Download', function () { download(f.name, f.bytes); }, 'Download ' + f.name));
      li.appendChild(btn('Remove', function () {
        files = files.filter(function (x) { return x !== f; });
        if (editing === f) closeEditor();
        renderFiles(); persistFiles();
      }, 'Remove ' + f.name));
      ul.appendChild(li);
    });
    $('fcount').textContent = files.length ? '(' + files.length + ')' : '';
    $('fhint').hidden = files.length > 0 && !!editing;
  }
  function openEditor(f) {
    editing = f;
    $('fename').textContent = f.name;
    $('fetext').value = new TextDecoder().decode(f.bytes);
    $('fedit').hidden = false;
    $('fetext').focus();
  }
  function closeEditor() { editing = null; $('fedit').hidden = true; }
  $('fesave').addEventListener('click', function () {
    if (editing) { editing.bytes = new TextEncoder().encode($('fetext').value); editing.text = true; }
    closeEditor(); renderFiles(); persistFiles();
  });
  $('addfiles').addEventListener('click', function () { $('filesin').click(); });
  $('filesin').addEventListener('change', function () {
    var list = Array.from(this.files || []);
    this.value = '';
    Promise.all(list.map(function (f) { return f.arrayBuffer().then(function (b) { addFile(f.name, new Uint8Array(b)); }); })).then(function () {
      renderFiles(); persistFiles();
      setStatus('Added ' + list.length + (list.length === 1 ? ' file.' : ' files.'));
    });
  });
  $('newfile').addEventListener('click', function () {
    var name = cleanName(window.prompt('Name of the new file', 'input.txt'));
    if (!name) return;
    if (!files.some(function (f) { return f.name === name; })) addFile(name, new Uint8Array(0));
    renderFiles();
    openEditor(files.filter(function (f) { return f.name === name; })[0]);
  });
  loadJSON('compilec.files', []).forEach(function (f) { if (f && f.name) addFile(f.name, new TextEncoder().encode(String(f.text || ''))); });
  renderFiles();

  // Drop files on the page: a .c file opens in the editor, anything else goes to Files.
  document.addEventListener('dragover', function (e) { if (e.dataTransfer && Array.from(e.dataTransfer.types || []).indexOf('Files') >= 0) e.preventDefault(); });
  document.addEventListener('drop', function (e) {
    if (!e.dataTransfer || !e.dataTransfer.files || !e.dataTransfer.files.length) return;
    e.preventDefault();
    Array.from(e.dataTransfer.files).forEach(function (f) {
      f.arrayBuffer().then(function (b) {
        var bytes = new Uint8Array(b);
        if (/\.c$/i.test(f.name) || cppFile.test(f.name)) {
          if (practice && !okToReplace()) return;
          openProgram(new TextDecoder().decode(bytes), f.name, cppFile.test(f.name) ? 'CPP' : 'C');
          setStatus('Opened ' + f.name + '.');
        }
        else { addFile(f.name, bytes); renderFiles(); persistFiles(); setStatus('Added ' + f.name + ' to Files.'); }
      });
    });
  });

  /* ---------- output ---------- */
  var out = { std: '', shown: 0, truncated: false };
  function resetOutput() {
    outp.textContent = ''; out.std = ''; out.shown = 0; out.truncated = false;
    outFiles = []; $('outfiles').hidden = true; $('oflist').textContent = ''; $('ofview').hidden = true;
  }
  function appendOut(text, err, echo) {
    if (!err && !echo && out.std.length < 8e6) out.std += text;
    var sc = $('tp-output'), atEnd = sc.scrollHeight - sc.scrollTop - sc.clientHeight < 60;
    if (out.shown > 1e6) {
      if (!out.truncated) { out.truncated = true; var t = document.createElement('span'); t.className = 'se'; t.textContent = '\n[Output is too long to show here. The program is still running.]'; outp.appendChild(t); }
      return;
    }
    out.shown += text.length;
    if (err || echo) { var s = document.createElement('span'); s.className = err ? 'se' : 'input-echo'; s.textContent = text; outp.appendChild(s); }
    else outp.appendChild(document.createTextNode(text));
    if (atEnd) sc.scrollTop = sc.scrollHeight;
  }
  $('copyout').addEventListener('click', function () {
    var text = outp.textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { setStatus('Output copied.'); }, function () { setStatus('Could not copy the output.', 'err'); });
  });
  $('saveout').addEventListener('click', function () { download('output.txt', new TextEncoder().encode(outp.textContent), 'text/plain'); });

  function showOutFiles() {
    var ul = $('oflist');
    ul.textContent = '';
    outFiles.forEach(function (f) {
      var li = document.createElement('li');
      var n = document.createElement('span'); n.className = 'fn'; n.textContent = f.name;
      var s = document.createElement('span'); s.className = 'fs'; s.textContent = fmtSize(f.bytes.length);
      li.appendChild(n); li.appendChild(s);
      if (f.text) li.appendChild(btn('View', function () {
        var v = $('ofview');
        v.textContent = new TextDecoder().decode(f.bytes.length > 200000 ? f.bytes.subarray(0, 200000) : f.bytes);
        v.hidden = false;
      }, 'View ' + f.name));
      li.appendChild(btn('Download', function () { download(f.name, f.bytes); }, 'Download ' + f.name));
      if (f.text) {
        li.appendChild(btn('Use as input', function () {
          addFile(f.name, new Uint8Array(f.bytes)); renderFiles(); persistFiles();
          setStatus(f.name + ' is now an input file.');
        }, 'Use ' + f.name + ' as an input file'));
      }
      ul.appendChild(li);
    });
    $('outfiles').hidden = outFiles.length === 0;
  }

  function collectOutFiles(list) {
    outFiles = [];
    (list || []).forEach(function (f) {
      var name = f.path.replace(/^\//, '');
      var same = files.filter(function (x) { return x.name === name; })[0];
      var bytes = f.bytes;
      if (same && same.bytes.length === bytes.length && same.bytes.every(function (v, i) { return v === bytes[i]; })) return;
      outFiles.push({ name: name, bytes: bytes, text: isText(bytes) });
    });
    outFiles.sort(function (a, b) { return a.name < b.name ? -1 : 1; });
    showOutFiles();
  }

  /* ---------- running ---------- */
  function setRunning(on) {
    running = on;
    runBtn.disabled = on || openingPractice;
    stopBtn.disabled = !on;
    $('reloadLive').disabled = on;
    language.disabled = on;
  }
  function finish() {
    inputSignal = inputBytes = null;
    terminalForm.hidden = true;
    removeInline();
    setRunning(false);
    prog.classList.remove('on');
  }

  // The input box sits inline at the end of the output, like the cursor in a terminal.
  function removeInline() {
    if (inlineForm && inlineForm.parentNode) inlineForm.parentNode.removeChild(inlineForm);
    inlineForm = inlineField = null;
  }
  function showInline() {
    removeInline();
    inlineForm = document.createElement('form');
    inlineForm.className = 'inline-in';
    inlineField = document.createElement('input');
    inlineField.type = 'text';
    inlineField.size = 1;
    inlineField.setAttribute('aria-label', 'Program input. Press Enter to send it.');
    inlineField.spellcheck = false;
    inlineField.autocomplete = 'off';
    inlineField.autocapitalize = 'off';
    inlineField.addEventListener('input', function () { inlineField.size = Math.max(1, inlineField.value.length + 1); });
    inlineField.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'd' || e.key === 'D')) { e.preventDefault(); sendInput(true); }
    });
    inlineForm.appendChild(inlineField);
    inlineForm.addEventListener('submit', function (e) { e.preventDefault(); sendInput(false); });
    outp.appendChild(inlineForm);
    outp.addEventListener('click', focusInline);
  }
  function focusInline(e) {
    if (inlineField && !(window.getSelection && String(window.getSelection()))) inlineField.focus();
  }

  function sendInput(eof) {
    if (!inputSignal || !inlineField) return;
    var line = inlineField.value + '\n';
    var encoded = eof ? null : new TextEncoder().encode(line);
    if (encoded && encoded.length > inputBytes.length) {
      setStatus('That input line exceeds the 16 KiB limit. Shorten it and send it again.', 'err');
      return;
    }
    removeInline();
    if (encoded) {
      inputBytes.set(encoded);
      appendOut(line, false, true);
    } else {
      appendOut('^D\n', false, true);
    }
    terminalForm.hidden = true;
    setStatus('Running...');
    Atomics.store(inputSignal, 0, eof ? -1 : encoded.length);
    Atomics.notify(inputSignal, 0);
  }
  terminalForm.addEventListener('submit', function (e) { e.preventDefault(); });
  $('terminalEof').addEventListener('click', function () { sendInput(true); });
  $('reloadLive').addEventListener('click', function () {
    if (practice && !okToReplace()) return;
    saveSettings();
    location.reload();
  });

  function startWorker() {
    if (worker) worker.terminate();
    worker = new Worker('worker.js');
    worker.onmessage = onMessage;
    worker.onerror = function (e) { finish(); setStatus('The compiler could not start: ' + (e.message || 'unknown error'), 'err'); };
  }

  function onMessage(ev) {
    var m = ev.data;
    if (m.type === 'progress') {
      bar.value = m.value;
      progLabel.textContent = 'Downloading the compiler: ' + Math.round(m.value * 100) + '%';
    } else if (m.type === 'ready') {
      loaded = true;
      prog.classList.remove('on');
      setStatus('Compiling and running...');
    } else if (m.type === 'cpp-loading') {
      setStatus('Loading the C++ standard library...');
    } else if (m.type === 'running') {
      setStatus('Running...');
    } else if (m.type === 'out') {
      appendOut(m.text, m.err);
    } else if (m.type === 'input') {
      if (!inputSignal) return;
      if (mqMobile.matches) setPage('output', true);
      terminalForm.hidden = false;
      showInline();
      $('tp-output').scrollTop = $('tp-output').scrollHeight;
      inlineField.focus();
      setStatus('Waiting for input. Type in the output and press Enter.');
    } else if (m.type === 'result') {
      showResult(m.result);
      finish();
    } else if (m.type === 'failure') {
      finish();
      setStatus(m.message, 'err');
    }
  }

  function clearProblems() { problems.hidden = true; problems.textContent = ''; editor.markers([]); }

  function showProblems(lines) {
    var re = /^[^:\s]+:(\d+):(\d+): (error|warning|note): (.*)$/;
    var list = [];
    lines.forEach(function (l) {
      var m = re.exec(l);
      if (m && m[3] !== 'note') list.push({ line: +m[1], col: +m[2], severity: m[3], message: m[4] });
    });
    editor.markers(list);
    problems.textContent = '';
    list.forEach(function (p) {
      var li = document.createElement('li');
      if (p.severity === 'warning') li.className = 'w';
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = 'Line ' + p.line + ', column ' + p.col + ': ' + p.message;
      b.addEventListener('click', function () {
        if (mqMobile.matches) setPage('code');
        editor.goTo(p.line, p.col);
      });
      li.appendChild(b);
      problems.appendChild(li);
    });
    problems.hidden = list.length === 0;
  }

  function showResult(r) {
    clearProblems();
    if (r.errors && r.errors.length) {
      outp.textContent = '';
      var span = document.createElement('span');
      span.className = 'e';
      span.textContent = r.errors.join('\n');
      outp.appendChild(span);
      showProblems(r.errors);
      selectTab('out', 'output');
      setStatus('Compilation failed.', 'err');
      return;
    }
    if (r.warnings && r.warnings.length) showProblems(r.warnings);
    if (r.compileOnly) {
      outp.textContent = '';
      var ok = document.createElement('span');
      ok.textContent = 'Compiled successfully' + (r.warnings && r.warnings.length ? ', with warnings (listed above).' : ', with no errors or warnings.') + '\n';
      outp.appendChild(ok);
      selectTab('out', 'output');
      setStatus('Compiled in ' + Math.round(r.compileMs) + ' ms. Nothing was run.', 'ok');
      return;
    }
    if (r.crash) {
      var why = /unreachable|out of bounds|memory access|stack/i.test(r.crash)
        ? 'The program crashed (for example an array index outside its bounds, or too deep a recursion).'
        : 'The program stopped: ' + r.crash;
      appendOut('\n[' + why + ']\n', true);
    }
    collectOutFiles(r.files);
    var t = 'Compiled in ' + Math.round(r.compileMs) + ' ms';
    if (r.runMs != null) t += ', ran in ' + Math.round(r.runMs) + ' ms';
    t += r.exitCode == null ? '.' : '. Exit status ' + r.exitCode + '.';
    if (outFiles.length) t += ' ' + outFiles.length + (outFiles.length === 1 ? ' file' : ' files') + ' written.';
    setStatus(t, r.exitCode === 0 ? 'ok' : 'err');
      }

  function splitArgs(s) {
    var out = [], re = /"([^"]*)"|'([^']*)'|(\S+)/g, m;
    while ((m = re.exec(s))) out.push(m[1] !== undefined ? m[1] : m[2] !== undefined ? m[2] : m[3]);
    return out;
  }

  function saveSettings() {
    persistTabs();
    store('compilec.code', editor.get());
    store('compilec.stdin', stdin.value);
    store('compilec.args', $('args').value);
    store('compilec.opt', $('opt').value);
    store('compilec.std', $('std').value);
    store('compilec.language', language.value);
    store('compilec.cppStd', $('cppStd').value);
    store('compilec.warn', $('warn').value);
  }

  function run(compileOnly) {
    compileOnly = compileOnly === true;
    if (running || openingPractice) return;
    saveSettings();
    if (editing) { editing.bytes = new TextEncoder().encode($('fetext').value); }
    resetOutput();
    clearProblems();
    setRunning(true);
    if (mqMobile.matches) { selectTab('out', 'output'); setPage('output', true); }
    else selectTab('out', 'output');
    if (!worker) startWorker();
    if (!loaded) {
      bar.value = 0;
      progLabel.textContent = 'Downloading the compiler';
      prog.classList.add('on');
      setStatus('Loading the compiler. This happens once.');
    } else {
      setStatus('Compiling and running...');
    }
    // A synchronous WASI read blocks this worker. Shared memory lets the page
    // hand it a line or EOF without waiting for the worker's event loop.
    var inputBuffer = null;
    var liveMode = canLiveInput && !compileOnly && stdin.value.trim() === '';
    if (liveMode) {
      inputBuffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT + 16384);
      inputSignal = new Int32Array(inputBuffer, 0, 1);
      inputBytes = new Uint8Array(inputBuffer, Int32Array.BYTES_PER_ELEMENT);
    }
    worker.postMessage({
      type: 'run', code: editor.get(), input: liveMode ? '' : stdin.value, args: splitArgs($('args').value),
      compileOnly: compileOnly, inputBuffer: inputBuffer, language: language.value,
      flags: [$('opt').value].concat(warnFlags(), ['-std=' + $(language.value === 'CPP' ? 'cppStd' : 'std').value]),
      files: files.map(function (f) { return { name: f.name, bytes: f.bytes.slice().buffer }; })
    });
  }

  function stop() {
    if (!running) return;
    if (worker) worker.terminate();
    worker = null;
    loaded = false;
    finish();
    setStatus('Stopped. The output so far is kept above.');
  }
  function warnFlags() { var w = $('warn').value; return w === 'none' ? [] : w === 'extra' ? ['-Wall', '-Wextra'] : ['-Wall']; }
  runBtn.addEventListener('click', function () { run(false); });
  stopBtn.addEventListener('click', stop);
  window.addEventListener('pagehide', saveSettings);
  document.addEventListener('visibilitychange', function () { if (document.hidden) saveSettings(); });

  /* ---------- sharing ---------- */
  function toB64(bytes) {
    var s = '';
    for (var i = 0; i < bytes.length; i += 8192) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 8192));
    return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  function fromB64(str) {
    var s = atob(str.replace(/-/g, '+').replace(/_/g, '/')), b = new Uint8Array(s.length);
    for (var i = 0; i < s.length; i++) b[i] = s.charCodeAt(i);
    return b;
  }
  function pipe(bytes, stream) {
    var w = stream.writable.getWriter();
    w.write(bytes); w.close();
    return new Response(stream.readable).arrayBuffer().then(function (b) { return new Uint8Array(b); });
  }
  function encodeShare() {
    var data = new TextEncoder().encode(JSON.stringify({ c: editor.get(), i: stdin.value, a: $('args').value, o: $('opt').value, s: $('std').value, l: language.value, cpp: $('cppStd').value }));
    if (window.CompressionStream) return pipe(data, new CompressionStream('deflate-raw')).then(function (z) { return 'z' + toB64(z); });
    return Promise.resolve('p' + toB64(data));
  }
  function decodeShare(h) {
    var kind = h.charAt(0), bytes = fromB64(h.slice(1));
    var p = kind === 'z' ? pipe(bytes, new DecompressionStream('deflate-raw')) : Promise.resolve(bytes);
    return p.then(function (b) { return JSON.parse(new TextDecoder().decode(b)); });
  }
  function shareLink() {
    encodeShare().then(function (code) {
      var url = location.origin + location.pathname + '#s=' + code;
      if (url.length > 12000) { setStatus('This program is too long to share as a link. Use Save .c instead.', 'err'); return; }
      if (mqMobile.matches && navigator.share) { navigator.share({ title: 'C program', url: url }).catch(function () {}); return; }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(function () { setStatus('Link copied. It holds your code and input; the files in the Files tab are not included.'); }, function () { window.prompt('Copy this link', url); });
      else window.prompt('Copy this link', url);
    });
  }
  if (incomingShare) {
    decodeShare(location.hash.slice(3)).then(function (d) {
      var shareLang = d.l === 'CPP' ? 'CPP' : 'C';
      if (d.cpp && Array.from($('cppStd').options).some(function (o) { return o.value === d.cpp; })) $('cppStd').value = d.cpp;
      openProgram(String(d.c || ''), 'main' + (shareLang === 'CPP' ? '.cpp' : '.c'), shareLang); stdin.value = d.i || ''; $('args').value = d.a || '';
      if (d.o) $('opt').value = d.o;
      if (d.s) $('std').value = d.s;
      history.replaceState(null, '', location.pathname + location.search);
      setStatus('Opened a shared program.');
    }).catch(function () { setStatus('That link could not be read.', 'err'); });
  }

  /* ---------- examples, open and save ---------- */
  function useExample(id) {
    var e = examples.filter(function (x) { return x.id === id; })[0];
    if (!e) return Promise.reject(new Error('Example not found.'));
    return fetch('examples/' + e.id + '.c').then(function (r) {
      if (!r.ok) throw new Error('Example unavailable.');
      return r.text();
    }).then(function (text) {
      if (openingPractice && !okToReplace()) return;
      openProgram(text, e.id + '.c', 'C');
      stdin.value = e.input;
      (e.files || []).forEach(function (f) { addFile(f.name, new TextEncoder().encode(f.text)); });
      if (e.files) { renderFiles(); persistFiles(); }
      resetOutput(); clearProblems();
      if (practice) {
        setStatus(e.files ? 'Practice tab. The sample file is under Files.' : 'Practice tab. Download your program to keep changes.');
      } else {
        setStatus(e.files ? 'The input file ' + e.files.map(function (f) { return f.name; }).join(', ') + ' was added under Files.' : '');
      }
    });
  }
  function newProgram() {
    if (!practice) { newTab('', ''); setStatus(''); return; }
    if (!okToReplace()) return;
    setProgram('', 'main' + sourceExtension()); stdin.value = ''; resetOutput(); clearProblems(); setStatus('');
    editor.focus();
  }
  function saveC(askName) {
    var name = fileName;
    if (askName === true) {
      name = window.prompt('Save as', fileName);
      if (!name) return;
      name = cleanName(name);
      if (!/\.[A-Za-z]+$/.test(name)) name += sourceExtension();
    }
    fileName = name;
    document.querySelector('#pEditor .ttl').textContent = name;
    store('compilec.name', name);
    renderTabs();
    download(name, new TextEncoder().encode(editor.get()), 'text/plain');
    dirty = false;
    setStatus('Saved ' + name + ' to your downloads.');
  }
  $('file').addEventListener('change', function () {
    var f = this.files[0];
    this.value = '';
    if (!f || (practice && !okToReplace())) return;
    var rd = new FileReader();
    rd.onload = function () { openProgram(String(rd.result), f.name, cppFile.test(f.name) ? 'CPP' : 'C'); clearProblems(); setStatus('Opened ' + f.name + '.'); };
    rd.readAsText(f);
  });
  fetch('examples/examples.json').then(function (r) { return r.json(); }).then(function (list) {
    examples = list;
    if (exampleId && !incomingShare) return useExample(exampleId);
  }).catch(function () {
    if (exampleId) setStatus('Could not open that example.', 'err');
  }).finally(function () {
    openingPractice = false;
    runBtn.disabled = running;
  });

  /* ---------- menu bar ---------- */
  function clip(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(text);
    return Promise.reject();
  }
  var MENUS = [
    { label: 'File', items: function () { return [
      { t: 'New tab', f: newProgram },
      { t: 'Open source file...', k: 'Ctrl+O', f: function () { $('file').click(); } },
      { t: 'Save', k: 'Ctrl+S', f: function () { saveC(false); } },
      { t: 'Save as...', f: function () { saveC(true); } },
      '-',
      { t: 'Add input files...', f: function () { selectTab('in', 'files'); if (mqMobile.matches) setPage('input'); $('filesin').click(); } },
      { t: 'New input file...', f: function () { selectTab('in', 'files'); if (mqMobile.matches) setPage('input'); $('newfile').click(); } },
      '-',
      { t: 'Share link', f: shareLink }
    ]; } },
    { label: 'Edit', items: function () { return [
      { t: 'Undo', k: 'Ctrl+Z', f: function () { editor.undo(); } },
      { t: 'Redo', k: 'Ctrl+Y', f: function () { editor.redo(); } },
      '-',
      { t: 'Cut', k: 'Ctrl+X', f: function () { var t = editor.selected(); if (t) clip(t).then(function () { editor.replaceSelection(''); }, function () { setStatus('Use Ctrl+X to cut.'); }); } },
      { t: 'Copy', k: 'Ctrl+C', f: function () { var t = editor.selected(); if (t) clip(t).catch(function () { setStatus('Use Ctrl+C to copy.'); }); } },
      { t: 'Paste', k: 'Ctrl+V', f: function () {
        if (navigator.clipboard && navigator.clipboard.readText) navigator.clipboard.readText().then(function (t) { editor.replaceSelection(t); }, function () { setStatus('Your browser did not allow pasting from the menu. Use Ctrl+V.'); });
        else setStatus('Use Ctrl+V to paste.');
      } },
      { t: 'Select all', k: 'Ctrl+A', f: function () { editor.selectAll(); } },
      '-',
      { t: 'Comment or uncomment lines', k: 'Ctrl+/', f: function () { editor.comment(); } },
      { t: 'Auto-indent the program', f: function () { editor.indent(); } },
      '-',
      { t: 'Autocomplete suggestions', k: 'Ctrl+Space', checked: acOn, f: function () { acOn = !acOn; store('compilec.ac', acOn ? '1' : '0'); editor.autocomplete(acOn); setStatus('Autocomplete is ' + (acOn ? 'on' : 'off') + '.'); } }
    ]; } },
    { label: 'Search', items: function () { return [
      { t: 'Find and replace...', k: 'Ctrl+F', f: function () { if (mqMobile.matches) setPage('code'); editor.find(); } },
      { t: 'Go to line...', k: 'Ctrl+Alt+G', f: function () { if (mqMobile.matches) setPage('code'); editor.gotoLine(); } }
    ]; } },
    { label: 'View', items: function () {
      var stack = ide.dataset.layout === 'stack', mob = mqMobile.matches;
      var list = [
        { t: 'Larger text', f: function () { setFont(fontPx + 1); } },
        { t: 'Smaller text', f: function () { setFont(fontPx - 1); } },
        { t: 'Reset text size', f: function () { setFont(mob ? 16 : 14.5); } }
      ];
      if (!mob) list.push('-',
        { t: 'Side by side', checked: !stack, f: function () { setLayout('side'); } },
        { t: 'Stacked', checked: stack, f: function () { setLayout('stack'); } },
        { t: 'Reset panel sizes', f: resetSizes },
        '-',
        { t: 'Enlarge the editor', checked: ide.dataset.max === 'editor', f: function () { toggleMax('editor'); } },
        { t: 'Enlarge the input panel', checked: ide.dataset.max === 'in', f: function () { toggleMax('in'); } },
        { t: 'Enlarge the output panel', checked: ide.dataset.max === 'out', f: function () { toggleMax('out'); } });
      return list;
    } },
    { label: 'Execute', items: function () { return [
      { t: 'Compile and run', k: 'F10', f: function () { run(false); }, disabled: running },
      { t: 'Compile only', k: 'F9', f: function () { run(true); }, disabled: running },
      { t: 'Stop', f: stop, disabled: !running }
    ]; } },
    { label: 'Examples', items: function () {
      var list = [{ t: 'Blank program (new tab)', f: newProgram }];
      var add = function (group, label) {
        if (label) list.push('-', { t: label, disabled: true });
        group.forEach(function (x, i) {
          list.push({ t: (i + 1) + '. ' + x.title, f: function () {
            if (!practice || okToReplace()) useExample(x.id).catch(function () { setStatus('Could not open that example.', 'err'); });
          } });
        });
      };
      add(examples.filter(function (x) { return !x.id.startsWith('learn-') && !x.id.startsWith('prob-'); }));
      add(examples.filter(function (x) { return x.id.startsWith('prob-'); }), 'Sample problems');
      return list;
    } },
    { label: 'Tools', items: function () { return [
      { t: 'Compiler options...', f: function () { $('dlgOpts').showModal(); } },
      '-',
      { t: 'Clear output', f: function () { resetOutput(); clearProblems(); setStatus(''); } },
      { t: 'Clear saved program, files and settings', disabled: practice, f: function () {
        if (!window.confirm('Remove the saved program, input files and settings from this browser?')) return;
        Object.keys(localStorage).forEach(function (k) { if (k.indexOf('compilec.') === 0) localStorage.removeItem(k); });
        location.href = location.pathname;
      } }
    ]; } },
    { label: 'Help', items: function () { return [
      { t: 'Help and shortcuts...', f: function () { $('dlgHelp').showModal(); } },
      { t: 'About C Lab...', f: function () { $('dlgAbout').showModal(); } }
    ]; } }
  ];

  var bar = $('menubar'), pop = null, openIdx = -1, hoverOpened = -1, barBtns = [];
  MENUS.forEach(function (m, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.textContent = m.label; b.setAttribute('role', 'menuitem');
    b.setAttribute('aria-haspopup', 'menu'); b.setAttribute('aria-expanded', 'false');
    b.addEventListener('click', function (e) { e.stopPropagation(); if (openIdx === i && hoverOpened !== i) closeMenu(true); else openMenu(i, false); hoverOpened = -1; });
    b.addEventListener('mouseenter', function () { if (openIdx >= 0 && openIdx !== i && !mqMobile.matches) { openMenu(i, false); hoverOpened = i; } });
    b.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openMenu(i, true); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); barBtns[(i + 1) % barBtns.length].focus(); if (openIdx >= 0) openMenu((i + 1) % barBtns.length, true); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); var j = (i + barBtns.length - 1) % barBtns.length; barBtns[j].focus(); if (openIdx >= 0) openMenu(j, true); }
    });
    barBtns.push(b); bar.appendChild(b);
  });
  function closeMenu(refocus) {
    if (pop) { pop.remove(); pop = null; }
    if (openIdx >= 0) { barBtns[openIdx].setAttribute('aria-expanded', 'false'); if (refocus) barBtns[openIdx].focus(); }
    openIdx = -1;
  }
  function openMenu(i, focusFirst) {
    closeMenu(false);
    openIdx = i;
    var btn = barBtns[i];
    btn.setAttribute('aria-expanded', 'true');
    pop = document.createElement('div');
    pop.className = 'mpop'; pop.setAttribute('role', 'menu'); pop.setAttribute('aria-label', MENUS[i].label);
    MENUS[i].items().forEach(function (it) {
      if (it === '-') { pop.appendChild(document.createElement('hr')); return; }
      var b = document.createElement('button');
      b.type = 'button'; b.setAttribute('role', it.checked === undefined ? 'menuitem' : 'menuitemradio');
      if (it.checked !== undefined) b.setAttribute('aria-checked', String(!!it.checked));
      if (it.checked) b.classList.add('on');
      b.disabled = !!it.disabled;
      if (it.checked !== undefined) { var ck = document.createElement('span'); ck.className = 'ck'; ck.textContent = it.checked ? '\u2713' : ''; b.appendChild(ck); }
      var l = document.createElement('span'); l.textContent = it.t; l.style.flex = '1'; b.appendChild(l);
      if (it.k) { var k = document.createElement('span'); k.className = 'sc'; k.textContent = it.k; b.appendChild(k); }
      b.addEventListener('click', function () { closeMenu(false); it.f(); });
      pop.appendChild(b);
    });
    document.body.appendChild(pop);
    var r = btn.getBoundingClientRect(), w = pop.offsetWidth;
    pop.style.left = Math.max(4, Math.min(r.left, window.innerWidth - w - 4)) + 'px';
    pop.style.top = r.bottom + 'px';
    pop.style.maxHeight = Math.max(160, window.innerHeight - r.bottom - 8) + 'px';
    if (focusFirst) { var f = pop.querySelector('button:not(:disabled)'); if (f) f.focus(); }
    pop.addEventListener('keydown', function (e) {
      var items = Array.from(pop.querySelectorAll('button:not(:disabled)')), at = items.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); items[(at + 1) % items.length].focus(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); items[(at + items.length - 1) % items.length].focus(); }
      else if (e.key === 'Home') { e.preventDefault(); items[0].focus(); }
      else if (e.key === 'End') { e.preventDefault(); items[items.length - 1].focus(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); openMenu((openIdx + 1) % barBtns.length, true); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); openMenu((openIdx + barBtns.length - 1) % barBtns.length, true); }
      else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closeMenu(true); }
      else if (e.key === 'Tab') { closeMenu(false); }
    });
  }
  document.addEventListener('click', function (e) { if (pop && !pop.contains(e.target)) closeMenu(false); });
  window.addEventListener('resize', function () { closeMenu(false); });
  document.addEventListener('keydown', function (e) {
    var mod = e.ctrlKey || e.metaKey;
    if (e.key === 'F9') { e.preventDefault(); run(true); }
    else if (e.key === 'F10') { e.preventDefault(); run(false); }
    else if (mod && !e.shiftKey && !e.altKey && (e.key === 's' || e.key === 'S')) { e.preventDefault(); saveC(false); }
    else if (mod && !e.shiftKey && !e.altKey && (e.key === 'o' || e.key === 'O')) { e.preventDefault(); $('file').click(); }
  });
  $('dlgOpts').addEventListener('close', saveSettings);
  [$('dlgOpts'), $('dlgHelp'), $('dlgAbout'), $('dlgInstall')].forEach(function (d) {
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
    d.querySelectorAll('[data-close]').forEach(function (b) { b.addEventListener('click', function () { d.close(); }); });
    d.addEventListener('close', function () { var bd = d.querySelector('.dbody'); if (bd) bd.scrollTop = 0; });
  });

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
      if (!canLiveInput && typeof Atomics.wait === 'function') {
        var showReload = function () {
          $('reloadLive').hidden = !navigator.serviceWorker.controller;
        };
        navigator.serviceWorker.addEventListener('controllerchange', showReload);
        showReload();
      }
    });
  }
})();
