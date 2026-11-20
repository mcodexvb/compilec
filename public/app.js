(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var code = $('code'), stdin = $('stdin'), out = $('out'), statusEl = $('status');
  var runBtn = $('run'), stopBtn = $('stop'), select = $('example');
  var prog = $('prog'), bar = $('bar'), progLabel = $('proglabel');
  var worker = null, running = false, examples = [], loaded = false;

  var HELLO = '#include <stdio.h>\n\nint main(void)\n{\n    int n;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    printf("Its square is %d\\n", n * n);\n    return 0;\n}\n';

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function fetchStore(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  function setStatus(text, cls) { statusEl.textContent = text; statusEl.className = 'status' + (cls ? ' ' + cls : ''); }

  function setRunning(on) {
    running = on;
    runBtn.disabled = on;
    stopBtn.disabled = !on;
  }

  function startWorker() {
    if (worker) worker.terminate();
    worker = new Worker('worker.js');
    worker.onmessage = onMessage;
    worker.onerror = function (e) { finish(); setStatus('The compiler could not start: ' + (e.message || 'unknown error'), 'err'); };
  }

  function finish() { setRunning(false); prog.classList.remove('on'); }

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

  function showResult(r) {
    out.textContent = '';
    if (r.errors && r.errors.length) {
      var span = document.createElement('span');
      span.className = 'e';
      span.textContent = r.errors.join('\n');
      out.appendChild(span);
      setStatus('Compilation failed.', 'err');
      return;
    }
    out.textContent = r.output || '';
    var t = 'Compiled in ' + Math.round(r.compileMs) + ' ms';
    if (r.runMs != null) t += ', ran in ' + Math.round(r.runMs) + ' ms';
    t += '. Exit status ' + r.exitCode + '.';
    setStatus(t, r.exitCode === 0 ? 'ok' : 'err');
  }

  function run() {
    if (running) return;
    store('compilec.code', code.value);
    store('compilec.stdin', stdin.value);
    out.textContent = '';
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
    worker.postMessage({ type: 'run', code: code.value, input: stdin.value, flags: ['-O1', '-Wall'] });
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
      code.value = text;
      stdin.value = e.input;
      out.textContent = '';
      setStatus('');
    });
  }

  runBtn.addEventListener('click', run);
  stopBtn.addEventListener('click', stop);
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); run(); }
  });
  code.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      var s = code.selectionStart, t = code.selectionEnd;
      code.value = code.value.slice(0, s) + '    ' + code.value.slice(t);
      code.selectionStart = code.selectionEnd = s + 4;
    }
  });
  select.addEventListener('change', function () {
    if (select.value === '') { code.value = HELLO; stdin.value = '7\n'; out.textContent = ''; setStatus(''); return; }
    useExample(select.value);
  });

  fetch('examples/examples.json').then(function (r) { return r.json(); }).then(function (list) {
    examples = list;
    var blank = document.createElement('option');
    blank.value = ''; blank.textContent = 'A small program';
    select.appendChild(blank);
    list.forEach(function (x, i) {
      var o = document.createElement('option');
      o.value = x.id; o.textContent = (i + 1) + '. ' + x.title;
      select.appendChild(o);
    });
    var want = new URLSearchParams(location.search).get('example');
    if (want && list.some(function (x) { return x.id === want; })) {
      select.value = want; useExample(want);
    } else if (fetchStore('compilec.code')) {
      code.value = fetchStore('compilec.code');
      stdin.value = fetchStore('compilec.stdin') || '';
    } else {
      code.value = HELLO; stdin.value = '7\n';
    }
  }).catch(function () {
    code.value = HELLO; stdin.value = '7\n';
  });
})();
