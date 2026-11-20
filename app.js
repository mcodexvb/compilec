(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var stdin = $('stdin'), outp = $('outp'), statusEl = $('status'), problems = $('problems');
  var runBtn = $('run'), stopBtn = $('stop'), select = $('example');
  var prog = $('prog'), bar = $('bar'), progLabel = $('proglabel');
  var worker = null, running = false, examples = [], loaded = false;

  var HELLO = '#include <stdio.h>\n\nint main(void)\n{\n    int n;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    printf("Its square is %d\\n", n * n);\n    return 0;\n}\n';

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  var editor = CEditor.createEditor($('code'), load('compilec.code') || HELLO, run);
  stdin.value = load('compilec.stdin') || '7\n';

  function setStatus(text, cls) { statusEl.textContent = text; statusEl.className = 'status' + (cls ? ' ' + cls : ''); }
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
      b.addEventListener('click', function () { editor.goTo(p.line, p.col); });
      li.appendChild(b);
      problems.appendChild(li);
    });
    problems.hidden = list.length === 0;
  }

  function showResult(r) {
    outp.textContent = '';
    clearProblems();
    if (r.errors && r.errors.length) {
      var span = document.createElement('span');
      span.className = 'e';
      span.textContent = r.errors.join('\n');
      outp.appendChild(span);
      showProblems(r.errors);
      setStatus('Compilation failed.', 'err');
      return;
    }
    outp.textContent = r.output || '';
    var t = 'Compiled in ' + Math.round(r.compileMs) + ' ms';
    if (r.runMs != null) t += ', ran in ' + Math.round(r.runMs) + ' ms';
    t += '. Exit status ' + r.exitCode + '.';
    setStatus(t, r.exitCode === 0 ? 'ok' : 'err');
  }

  function run() {
    if (running) return;
    var src = editor.get();
    store('compilec.code', src);
    store('compilec.stdin', stdin.value);
    outp.textContent = '';
    clearProblems();
    setRunning(true);
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
      type: 'run', code: src, input: stdin.value,
      flags: [$('opt').value, '-Wall', '-std=' + $('std').value]
    });
  }

  function stop() {
    if (!running) return;
    startWorker();
    loaded = false;
    finish();
    setStatus('Stopped.');
  }

  function useExample(id) {
    var e = examples.filter(function (x) { return x.id === id; })[0];
    if (!e) return;
    fetch('examples/' + e.id + '.c').then(function (r) { return r.text(); }).then(function (text) {
      editor.set(text);
      stdin.value = e.input;
      outp.textContent = '';
      clearProblems();
      setStatus('');
    });
  }

  runBtn.addEventListener('click', run);
  stopBtn.addEventListener('click', stop);
  select.addEventListener('change', function () {
    if (select.value === '') { editor.set(HELLO); stdin.value = '7\n'; outp.textContent = ''; clearProblems(); setStatus(''); return; }
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
  $('save').addEventListener('click', function () {
    var blob = new Blob([editor.get()], { type: 'text/plain' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'main.c';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  });

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
})();
