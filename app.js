(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var ide = $('ide'), stdin = $('stdin'), outp = $('outp'), statusEl = $('status'), problems = $('problems');
  var runBtn = $('run'), stopBtn = $('stop'), select = $('example');
  var prog = $('prog'), bar = $('bar'), progLabel = $('proglabel');
  var mqMobile = window.matchMedia('(max-width:860px)');
  var worker = null, running = false, examples = [], loaded = false, currentExample = null;

  var HELLO = '#include <stdio.h>\n\nint main(void)\n{\n    int n;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    printf("Its square is %d\\n", n * n);\n    return 0;\n}\n';

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function loadJSON(k, d) { try { var v = JSON.parse(load(k)); return v == null ? d : v; } catch (e) { return d; } }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function setStatus(text, cls) { statusEl.textContent = text; statusEl.className = 'status' + (cls ? ' ' + cls : ''); }
  function fmtSize(n) { return n < 1024 ? n + ' B' : n < 1048576 ? (n / 1024).toFixed(1) + ' KB' : (n / 1048576).toFixed(1) + ' MB'; }

  /* ---------- editor, text size ---------- */
  var fontPx = +load('compilec.fs') || (mqMobile.matches ? 16 : 14.5);
  document.documentElement.style.setProperty('--fs', fontPx + 'px');
  var editor = CEditor.createEditor($('code'), load('compilec.code') || HELLO, run, fontPx);
  stdin.value = load('compilec.stdin') || '7\n';
  $('args').value = load('compilec.args') || '';
  if (load('compilec.opt')) $('opt').value = load('compilec.opt');
  if (load('compilec.std')) $('std').value = load('compilec.std');
  function setFont(px) {
    fontPx = clamp(px, 11, 28);
    document.documentElement.style.setProperty('--fs', fontPx + 'px');
    editor.fontSize(fontPx);
    store('compilec.fs', String(fontPx));
  }
  $('fsm').addEventListener('click', function () { setFont(fontPx - 1); });
  $('fbg').addEventListener('click', function () { setFont(fontPx + 1); });
  $('undo').addEventListener('click', function () { editor.undo(); });
  $('redo').addEventListener('click', function () { editor.redo(); });

  /* ---------- menu and header layout ---------- */
  var menu = $('menu'), menuBtn = $('menubtn');
  menuBtn.addEventListener('click', function () {
    var open = menu.hidden;
    menu.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  var exRow = document.createElement('div');
  exRow.className = 'mrow';
  function placeExample() {
    if (mqMobile.matches) { exRow.appendChild($('exwrap')); menu.insertBefore(exRow, menu.firstChild); }
    else { $('exslot').appendChild($('exwrap')); if (exRow.parentNode) exRow.remove(); }
  }
  placeExample();

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
    if (group === 'out' && mqMobile.matches && ide.dataset.page !== 'code') setPage(name === 'plot' ? 'plot' : 'output', true);
    if (group === 'in' && mqMobile.matches && ide.dataset.page !== 'code') setPage('input', true);
    if (name === 'plot') plotShow();
  }
  document.querySelectorAll('.tabs [role=tab]').forEach(function (b) {
    b.addEventListener('click', function () {
      selectTab(b.closest('#pIn') ? 'in' : 'out', b.getAttribute('data-t'));
      if (mqMobile.matches) setPage(b.closest('#pIn') ? 'input' : (b.getAttribute('data-t') === 'plot' ? 'plot' : 'output'), true);
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
    else if (p === 'plot') selectTab('out', 'plot');
  }
  document.querySelectorAll('#nav button').forEach(function (b) {
    b.addEventListener('click', function () { setPage(b.getAttribute('data-page')); });
  });
  mqMobile.addEventListener('change', function () { placeExample(); if (ide.dataset.max) delete ide.dataset.max; plotShow(); });

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
  $('layout').value = ide.dataset.layout;
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
  $('layout').addEventListener('change', function () {
    ide.dataset.layout = this.value === 'stack' ? 'stack' : 'side';
    store('compilec.layout', ide.dataset.layout);
    applySizes();
  });
  $('resetlayout').addEventListener('click', function () {
    sizes = {}; store('compilec.sizes', '{}'); delete ide.dataset.max; applySizes();
  });
  document.querySelectorAll('.max').forEach(function (b) {
    b.addEventListener('click', function () {
      var m = b.getAttribute('data-max');
      if (ide.dataset.max === m) delete ide.dataset.max; else ide.dataset.max = m;
      if (m === 'out') plotShow();
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && ide.dataset.max) { delete ide.dataset.max; plotShow(); }
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
        renderFiles(); persistFiles(); refreshPlotData();
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
    closeEditor(); renderFiles(); persistFiles(); refreshPlotData();
  });
  $('addfiles').addEventListener('click', function () { $('filesin').click(); });
  $('filesin').addEventListener('change', function () {
    var list = Array.from(this.files || []);
    this.value = '';
    Promise.all(list.map(function (f) { return f.arrayBuffer().then(function (b) { addFile(f.name, new Uint8Array(b)); }); })).then(function () {
      renderFiles(); persistFiles(); refreshPlotData();
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
        if (/\.c$/i.test(f.name)) { editor.set(new TextDecoder().decode(bytes)); setStatus('Opened ' + f.name + '.'); }
        else { addFile(f.name, bytes); renderFiles(); persistFiles(); refreshPlotData(); setStatus('Added ' + f.name + ' to Files.'); }
      });
    });
  });

  /* ---------- output ---------- */
  var out = { std: '', shown: 0, truncated: false };
  function resetOutput() {
    outp.textContent = ''; out.std = ''; out.shown = 0; out.truncated = false;
    outFiles = []; $('outfiles').hidden = true; $('oflist').textContent = ''; $('ofview').hidden = true;
  }
  function appendOut(text, err) {
    if (!err && out.std.length < 8e6) out.std += text;
    var sc = $('tp-output'), atEnd = sc.scrollHeight - sc.scrollTop - sc.clientHeight < 60;
    if (out.shown > 1e6) {
      if (!out.truncated) { out.truncated = true; var t = document.createElement('span'); t.className = 'se'; t.textContent = '\n[Output is too long to show here. The program is still running.]'; outp.appendChild(t); }
      return;
    }
    out.shown += text.length;
    if (err) { var s = document.createElement('span'); s.className = 'se'; s.textContent = text; outp.appendChild(s); }
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
          addFile(f.name, new Uint8Array(f.bytes)); renderFiles(); persistFiles(); refreshPlotData();
          setStatus(f.name + ' is now an input file.');
        }, 'Use ' + f.name + ' as an input file'));
        li.appendChild(btn('Plot', function () { selectTab('out', 'plot'); plotPick('w:' + f.name); }, 'Plot ' + f.name));
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
  function setRunning(on) { running = on; runBtn.disabled = on; stopBtn.disabled = !on; }
  function finish() { setRunning(false); prog.classList.remove('on'); }

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
    } else if (m.type === 'running') {
      setStatus('Running...');
    } else if (m.type === 'out') {
      appendOut(m.text, m.err);
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
    refreshPlotData(true);
    if (currentExample && currentExample.plot) {
      if (typeof currentExample.plot === 'string') plotPick('w:' + currentExample.plot);
      selectTab('out', 'plot');
      currentExample = null;
    }
  }

  function splitArgs(s) {
    var out = [], re = /"([^"]*)"|'([^']*)'|(\S+)/g, m;
    while ((m = re.exec(s))) out.push(m[1] !== undefined ? m[1] : m[2] !== undefined ? m[2] : m[3]);
    return out;
  }

  function saveSettings() {
    store('compilec.code', editor.get());
    store('compilec.stdin', stdin.value);
    store('compilec.args', $('args').value);
    store('compilec.opt', $('opt').value);
    store('compilec.std', $('std').value);
  }

  function run() {
    if (running) return;
    saveSettings();
    if (editing) { editing.bytes = new TextEncoder().encode($('fetext').value); }
    resetOutput();
    clearProblems();
    setRunning(true);
    if (mqMobile.matches) { selectTab('out', 'output'); setPage('output', true); }
    else if (tabs.out !== 'plot') selectTab('out', 'output');
    if (!worker) startWorker();
    if (!loaded) {
      bar.value = 0;
      progLabel.textContent = 'Downloading the compiler';
      prog.classList.add('on');
      setStatus('Loading the compiler. This happens once.');
    } else {
      setStatus('Compiling and running...');
    }
    worker.postMessage({
      type: 'run', code: editor.get(), input: stdin.value, args: splitArgs($('args').value),
      flags: [$('opt').value, '-Wall', '-std=' + $('std').value],
      files: files.map(function (f) { return { name: f.name, bytes: f.bytes.slice().buffer }; })
    });
  }

  function stop() {
    if (!running) return;
    startWorker();
    loaded = false;
    finish();
    setStatus('Stopped. The output so far is kept above.');
  }
  runBtn.addEventListener('click', run);
  stopBtn.addEventListener('click', stop);
  window.addEventListener('pagehide', saveSettings);
  document.addEventListener('visibilitychange', function () { if (document.hidden) saveSettings(); });

  /* ---------- plotting (independent of the C compiler) ---------- */
  var plot = Plot.create({
    canvas: $('plot'), wrap: $('plotwrap'), tip: $('ptip'),
    grid: function () { return $('pgrid').checked; },
    xlabel: function () { var x = +$('px').value; return x < 0 ? 'row number' : (curTable.names[x] || ''); }
  });
  var curTable = { names: [], rows: [] }, plotSources = [], rangeEdited = false;
  $('pfn').value = load('compilec.formula') || '';

  function sourceList() {
    var list = [{ id: 'stdout', label: 'Program output', text: out.std }];
    outFiles.forEach(function (f) { if (f.text) list.push({ id: 'w:' + f.name, label: f.name + ' (written)', text: new TextDecoder().decode(f.bytes) }); });
    files.forEach(function (f) { if (f.text) list.push({ id: 'i:' + f.name, label: f.name + ' (input)', text: new TextDecoder().decode(f.bytes) }); });
    return list;
  }
  function plotVisible() { var tp = $('tp-plot'); return !tp.hidden && tp.offsetParent !== null; }
  function plotShow() {
    if (!plotVisible()) return;
    refreshPlotData();
    window.requestAnimationFrame(function () { plot.resize(); });
  }

  function refreshPlotData(auto) {
    var sel = $('pdata'), prev = sel.value;
    plotSources = sourceList();
    sel.textContent = '';
    plotSources.forEach(function (s) {
      var o = document.createElement('option'); o.value = s.id; o.textContent = s.label; sel.appendChild(o);
    });
    var pick = plotSources.some(function (s) { return s.id === prev; }) ? prev : 'stdout';
    if (auto) {
      var withData = plotSources.filter(function (s) { return Plot.parseTable(s.text).rows.length >= 2; });
      if (withData.length) pick = withData.some(function (s) { return s.id === 'stdout'; }) ? 'stdout' : withData[0].id;
    }
    sel.value = pick;
    loadTable();
  }
  function plotPick(id) {
    refreshPlotData();
    if (plotSources.some(function (s) { return s.id === id; })) { $('pdata').value = id; loadTable(); }
  }

  function loadTable() {
    var src = plotSources.filter(function (s) { return s.id === $('pdata').value; })[0];
    curTable = Plot.parseTable(src ? src.text : '');
    var px = $('px'), ys = $('pys');
    px.textContent = '';
    var o0 = document.createElement('option'); o0.value = '-1'; o0.textContent = 'row number'; px.appendChild(o0);
    curTable.names.forEach(function (n, i) { var o = document.createElement('option'); o.value = String(i); o.textContent = n; px.appendChild(o); });
    ys.querySelectorAll('label').forEach(function (l) { l.remove(); });
    curTable.names.forEach(function (n, i) {
      var l = document.createElement('label'), c = document.createElement('input');
      c.type = 'checkbox'; c.value = String(i);
      c.addEventListener('change', applyPlot);
      l.appendChild(c); l.appendChild(document.createTextNode(n));
      ys.appendChild(l);
    });
    var cols = curTable.names.length;
    px.value = cols >= 2 ? '0' : '-1';
    ys.querySelectorAll('input').forEach(function (c) {
      var i = +c.value;
      c.checked = cols >= 2 ? (i !== 0 && i <= 6) : i === 0;
    });
    plot.setTable(curTable);
    $('phint').textContent = cols
      ? curTable.rows.length + ' rows and ' + cols + ' columns found. Drag to pan, scroll or pinch to zoom, tap a point to read its value, double-click to fit.'
      : 'No table of numbers found here. Print numbers in rows (for example x and y separated by a space), or type a formula above.';
    applyPlot();
  }

  function applyPlot() {
    var ycols = [];
    $('pys').querySelectorAll('input').forEach(function (c) { if (c.checked) ycols.push(+c.value); });
    plot.setStyle($('pstyle').value);
    plot.setColumns(+$('px').value, ycols);
    var err = plot.setFunctions($('pfn').value);
    plot.setRange(parseFloat($('pxmin').value), parseFloat($('pxmax').value), rangeEdited);
    var pe = $('perr');
    pe.hidden = !err;
    pe.textContent = err ? 'Formula problem: ' + err : '';
    if (plotVisible()) plot.draw();
  }
  var fnTimer = 0;
  $('pfn').addEventListener('input', function () {
    window.clearTimeout(fnTimer);
    fnTimer = window.setTimeout(function () { store('compilec.formula', $('pfn').value); applyPlot(); }, 250);
  });
  ['pxmin', 'pxmax'].forEach(function (id) { $(id).addEventListener('input', function () { rangeEdited = true; applyPlot(); }); });
  $('pdata').addEventListener('change', loadTable);
  $('px').addEventListener('change', applyPlot);
  $('pstyle').addEventListener('change', function () { plot.setStyle(this.value); if (plotVisible()) plot.draw(); });
  $('pgrid').addEventListener('change', function () { if (plotVisible()) plot.draw(); });
  $('pfit').addEventListener('click', function () { rangeEdited = false; applyPlot(); plot.fit(); });
  $('ppng').addEventListener('click', function () { plot.png(function (blob) { if (blob) download('plot.png', blob, 'image/png'); }); });
  refreshPlotData();

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
    var data = new TextEncoder().encode(JSON.stringify({ c: editor.get(), i: stdin.value, a: $('args').value, o: $('opt').value, s: $('std').value }));
    if (window.CompressionStream) return pipe(data, new CompressionStream('deflate-raw')).then(function (z) { return 'z' + toB64(z); });
    return Promise.resolve('p' + toB64(data));
  }
  function decodeShare(h) {
    var kind = h.charAt(0), bytes = fromB64(h.slice(1));
    var p = kind === 'z' ? pipe(bytes, new DecompressionStream('deflate-raw')) : Promise.resolve(bytes);
    return p.then(function (b) { return JSON.parse(new TextDecoder().decode(b)); });
  }
  $('share').addEventListener('click', function () {
    encodeShare().then(function (code) {
      var url = location.origin + location.pathname + '#s=' + code;
      if (url.length > 12000) { setStatus('This program is too long to share as a link. Use Save .c instead.', 'err'); return; }
      if (mqMobile.matches && navigator.share) { navigator.share({ title: 'C program', url: url }).catch(function () {}); return; }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(function () { setStatus('Link copied. It holds your code and input; the files in the Files tab are not included.'); }, function () { window.prompt('Copy this link', url); });
      else window.prompt('Copy this link', url);
    });
  });
  if (/^#s=/.test(location.hash)) {
    decodeShare(location.hash.slice(3)).then(function (d) {
      editor.set(String(d.c || '')); stdin.value = d.i || ''; $('args').value = d.a || '';
      if (d.o) $('opt').value = d.o;
      if (d.s) $('std').value = d.s;
      history.replaceState(null, '', location.pathname + location.search);
      setStatus('Opened a shared program.');
    }).catch(function () { setStatus('That link could not be read.', 'err'); });
  }

  /* ---------- examples, open and save ---------- */
  function useExample(id) {
    var e = examples.filter(function (x) { return x.id === id; })[0];
    if (!e) return;
    fetch('examples/' + e.id + '.c').then(function (r) { return r.text(); }).then(function (text) {
      editor.set(text);
      stdin.value = e.input;
      (e.files || []).forEach(function (f) { addFile(f.name, new TextEncoder().encode(f.text)); });
      if (e.files) { renderFiles(); persistFiles(); }
      currentExample = e.plot ? e : null;
      resetOutput(); clearProblems(); refreshPlotData();
      setStatus(e.files ? 'The input file ' + e.files.map(function (f) { return f.name; }).join(', ') + ' was added under Files.' : '');
    });
  }
  select.addEventListener('change', function () {
    if (select.value === '') { editor.set(HELLO); stdin.value = '7\n'; currentExample = null; resetOutput(); clearProblems(); setStatus(''); return; }
    useExample(select.value);
  });

  $('open').addEventListener('click', function () { $('file').click(); });
  $('file').addEventListener('change', function () {
    var f = this.files[0];
    if (!f) return;
    var rd = new FileReader();
    rd.onload = function () { editor.set(String(rd.result)); select.value = ''; clearProblems(); setStatus('Opened ' + f.name + '.'); };
    rd.readAsText(f);
    this.value = '';
  });
  $('save').addEventListener('click', function () { download('main.c', new TextEncoder().encode(editor.get()), 'text/plain'); });

  var blank = document.createElement('option');
  blank.value = ''; blank.textContent = 'Blank program';
  select.appendChild(blank);
  fetch('examples/examples.json').then(function (r) { return r.json(); }).then(function (list) {
    examples = list;
    list.forEach(function (x, i) {
      var o = document.createElement('option');
      o.value = x.id; o.textContent = (i + 1) + '. ' + x.title;
      select.appendChild(o);
    });
    var want = new URLSearchParams(location.search).get('example');
    if (want && list.some(function (x) { return x.id === want; })) { select.value = want; useExample(want); }
  }).catch(function () {});

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
})();
