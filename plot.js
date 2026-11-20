// A small, dependency-free plotter for the numbers a program prints or writes to a file,
// and for functions typed as formulas. It is independent of the C compiler.
(function () {
  'use strict';

  /* ---------- formulas: y = f(x) ---------- */
  var FN1 = {
    sin: Math.sin, cos: Math.cos, tan: Math.tan, asin: Math.asin, acos: Math.acos, atan: Math.atan,
    sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh, exp: Math.exp, ln: Math.log, log: Math.log10,
    log10: Math.log10, log2: Math.log2, sqrt: Math.sqrt, cbrt: Math.cbrt, abs: Math.abs,
    floor: Math.floor, ceil: Math.ceil, round: Math.round, sign: Math.sign
  };
  var FN2 = { pow: Math.pow, atan2: Math.atan2, min: Math.min, max: Math.max, mod: function (a, b) { return a - b * Math.floor(a / b); } };
  var CONST = { pi: Math.PI, e: Math.E };

  function compile(src) {
    var toks = [], re = /\s*(?:(\d+\.?\d*(?:[eE][-+]?\d+)?|\.\d+(?:[eE][-+]?\d+)?)|([A-Za-z_][A-Za-z_0-9]*)|(\*\*|[-+*\/^(),]))/y, m, pos = 0;
    src = String(src).trim();
    while (pos < src.length) {
      re.lastIndex = pos;
      m = re.exec(src);
      if (!m) throw new Error('Unexpected "' + src.charAt(pos).trim() + src.slice(pos + 1, pos + 6) + '"');
      pos = re.lastIndex;
      if (m[1] !== undefined) toks.push({ t: 'n', v: parseFloat(m[1]) });
      else if (m[2] !== undefined) toks.push({ t: 'i', v: m[2].toLowerCase() });
      else toks.push({ t: 'o', v: m[3] === '**' ? '^' : m[3] });
      if (/^\s*$/.test(src.slice(pos))) break;
    }
    var i = 0;
    function peek() { return toks[i]; }
    function isOp(v) { var t = toks[i]; return t && t.t === 'o' && t.v === v; }
    function expect(v) { if (!isOp(v)) throw new Error('Expected "' + v + '"'); i++; }
    function expr() {
      var l = term();
      while (isOp('+') || isOp('-')) {
        var op = toks[i++].v, r = term(), a = l;
        l = op === '+' ? (function (a, r) { return function (x) { return a(x) + r(x); }; })(a, r)
                       : (function (a, r) { return function (x) { return a(x) - r(x); }; })(a, r);
      }
      return l;
    }
    function startsFactor() {
      var t = peek();
      return t && (t.t === 'n' || t.t === 'i' || (t.t === 'o' && t.v === '('));
    }
    function term() {
      var l = unary();
      for (;;) {
        if (isOp('*') || isOp('/')) {
          var op = toks[i++].v, r = unary(), a = l;
          l = op === '*' ? (function (a, r) { return function (x) { return a(x) * r(x); }; })(a, r)
                         : (function (a, r) { return function (x) { return a(x) / r(x); }; })(a, r);
        } else if (startsFactor()) {
          var r2 = unary(), a2 = l;
          l = (function (a, r) { return function (x) { return a(x) * r(x); }; })(a2, r2);
        } else return l;
      }
    }
    function unary() {
      if (isOp('-')) { i++; var u = unary(); return function (x) { return -u(x); }; }
      if (isOp('+')) { i++; return unary(); }
      return power();
    }
    function power() {
      var b = atom();
      if (isOp('^')) { i++; var e = unary(); return function (x) { return Math.pow(b(x), e(x)); }; }
      return b;
    }
    function atom() {
      var t = toks[i++];
      if (!t) throw new Error('The formula ends too early');
      if (t.t === 'n') { var v = t.v; return function () { return v; }; }
      if (t.t === 'o' && t.v === '(') { var e = expr(); expect(')'); return e; }
      if (t.t === 'i') {
        if (t.v === 'x') return function (x) { return x; };
        if (isOp('(')) {
          i++;
          var args = [expr()];
          while (isOp(',')) { i++; args.push(expr()); }
          expect(')');
          if (FN1[t.v] && args.length === 1) { var f = FN1[t.v], a = args[0]; return function (x) { return f(a(x)); }; }
          if (FN2[t.v] && args.length === 2) { var g = FN2[t.v], p = args[0], q = args[1]; return function (x) { return g(p(x), q(x)); }; }
          throw new Error('Unknown function ' + t.v);
        }
        if (CONST.hasOwnProperty(t.v)) { var c = CONST[t.v]; return function () { return c; }; }
        throw new Error('Unknown name ' + t.v + ' (use x as the variable)');
      }
      throw new Error('Unexpected "' + t.v + '"');
    }
    var f = expr();
    if (i < toks.length) throw new Error('Unexpected "' + toks[i].v + '"');
    return f;
  }

  /* ---------- parsing numbers out of text ---------- */
  var NUM = /^[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?$/;
  var NUMG = /[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/g;

  function parseTable(text) {
    var lines = String(text || '').split(/\r?\n/);
    var rows = [], heads = [];
    var strict = [];
    lines.forEach(function (ln, idx) {
      var toks = ln.trim().split(/[\s,;|]+/).filter(Boolean);
      if (toks.length && toks.every(function (t) { return NUM.test(t); })) strict.push({ idx: idx, v: toks.map(Number) });
    });
    var chosen = strict;
    if (strict.length < 2) {
      chosen = [];
      lines.forEach(function (ln, idx) {
        var found = ln.match(NUMG);
        if (found && found.length >= 1) chosen.push({ idx: idx, v: found.map(Number) });
      });
    }
    if (!chosen.length) return { names: [], rows: [] };
    var count = {};
    chosen.forEach(function (r) { count[r.v.length] = (count[r.v.length] || 0) + 1; });
    var width = 0, best = 0;
    Object.keys(count).forEach(function (k) { if (count[k] > best || (count[k] === best && +k > width)) { best = count[k]; width = +k; } });
    chosen = chosen.filter(function (r) { return r.v.length === width; });
    rows = chosen.map(function (r) { return r.v; });
    var names = [];
    for (var c = 0; c < width; c++) names.push('column ' + (c + 1));
    var first = chosen[0].idx;
    for (var k = first - 1; k >= 0 && k >= first - 2; k--) {
      var t = lines[k].trim().split(/[\s,;|]+/).filter(Boolean);
      if (t.length === width && t.every(function (s) { return !NUM.test(s); })) { names = t; break; }
    }
    return { names: names, rows: rows };
  }

  /* ---------- plotting ---------- */
  var PALETTE = ['#0072B2', '#D55E00', '#009E73', '#CC79A7', '#E69F00', '#56B4E9', '#8c564b', '#7f7f7f'];

  function niceStep(span, target) {
    var raw = span / Math.max(target, 1), p = Math.pow(10, Math.floor(Math.log10(raw))), f = raw / p;
    return (f < 1.5 ? 1 : f < 3.5 ? 2 : f < 7.5 ? 5 : 10) * p;
  }
  function fmt(v, step) {
    if (v === 0) return '0';
    var a = Math.abs(v);
    if (a >= 1e6 || a < 1e-4) return v.toExponential(2).replace(/\.?0+e/, 'e');
    var d = Math.max(0, -Math.floor(Math.log10(step || a)) + 1);
    return String(+v.toFixed(Math.min(d, 8)));
  }

  function create(o) {
    var canvas = o.canvas, wrap = o.wrap, tip = o.tip;
    var ctx = canvas.getContext('2d');
    var state = {
      table: { names: [], rows: [] }, xcol: -1, ycols: [], style: 'both', fns: [], fnErr: '',
      view: null, userView: false, forceRange: false, w: 0, h: 0, dpr: 1, marker: null, xmin: -10, xmax: 10, hasData: false
    };
    var PAD = { l: 56, r: 14, t: 14, b: 34 };

    function setSize() {
      var r = wrap.getBoundingClientRect();
      state.dpr = window.devicePixelRatio || 1;
      state.w = Math.max(160, Math.floor(r.width));
      state.h = Math.max(160, Math.floor(r.height));
      canvas.width = Math.round(state.w * state.dpr);
      canvas.height = Math.round(state.h * state.dpr);
      canvas.style.width = state.w + 'px';
      canvas.style.height = state.h + 'px';
    }

    function seriesData() {
      var t = state.table, out = [];
      state.ycols.forEach(function (c, k) {
        var pts = [];
        t.rows.forEach(function (row, i) {
          var x = state.xcol < 0 ? i + 1 : row[state.xcol], y = row[c];
          if (isFinite(x) && isFinite(y)) pts.push([x, y]);
        });
        out.push({ name: t.names[c] || ('column ' + (c + 1)), pts: pts, color: PALETTE[k % PALETTE.length], fn: null });
      });
      return out;
    }

    function fnPoints(f, x0, x1, n) {
      var pts = [], i, x, y;
      for (i = 0; i <= n; i++) {
        x = x0 + (x1 - x0) * i / n;
        try { y = f(x); } catch (e) { y = NaN; }
        pts.push([x, isFinite(y) ? y : NaN]);
      }
      return pts;
    }

    function fit() {
      var all = seriesData(), xs0 = Infinity, xs1 = -Infinity, ys0 = Infinity, ys1 = -Infinity;
      all.forEach(function (s) {
        s.pts.forEach(function (p) {
          if (p[0] < xs0) xs0 = p[0]; if (p[0] > xs1) xs1 = p[0];
          if (p[1] < ys0) ys0 = p[1]; if (p[1] > ys1) ys1 = p[1];
        });
      });
      state.hasData = isFinite(xs0);
      var useRange = state.forceRange || !state.hasData;
      var fx0 = useRange ? state.xmin : xs0, fx1 = useRange ? state.xmax : xs1;
      if (fx0 === fx1) { fx0 -= 1; fx1 += 1; }
      if (state.fns.length) {
        var ys = [];
        state.fns.forEach(function (fn) {
          fnPoints(fn.f, fx0, fx1, 400).forEach(function (p) { if (isFinite(p[1])) ys.push(p[1]); });
        });
        ys.sort(function (a, b) { return a - b; });
        if (ys.length) {
          var lo = ys[Math.floor(ys.length * 0.01)], hi = ys[Math.ceil(ys.length * 0.99) - 1];
          if (lo < ys0) ys0 = lo; if (hi > ys1) ys1 = hi;
        }
      }
      if (!isFinite(ys0)) { ys0 = -1; ys1 = 1; }
      if (ys0 === ys1) { ys0 -= 1; ys1 += 1; }
      var mx = (fx1 - fx0) * 0.05, my = (ys1 - ys0) * 0.08;
      state.view = { x0: fx0 - mx, x1: fx1 + mx, y0: ys0 - my, y1: ys1 + my };
      state.userView = false;
      state.marker = null; hideTip();
    }

    function sx(x) { return PAD.l + (x - state.view.x0) / (state.view.x1 - state.view.x0) * (state.w - PAD.l - PAD.r); }
    function sy(y) { return state.h - PAD.b - (y - state.view.y0) / (state.view.y1 - state.view.y0) * (state.h - PAD.t - PAD.b); }
    function ux(px) { return state.view.x0 + (px - PAD.l) / (state.w - PAD.l - PAD.r) * (state.view.x1 - state.view.x0); }
    function uy(py) { return state.view.y0 + (state.h - PAD.b - py) / (state.h - PAD.t - PAD.b) * (state.view.y1 - state.view.y0); }

    function colors() {
      var cs = getComputedStyle(document.documentElement);
      return { fg: cs.getPropertyValue('--fg').trim() || '#222', mute: cs.getPropertyValue('--mute').trim() || '#666', line: cs.getPropertyValue('--line').trim() || '#ddd', pane: cs.getPropertyValue('--pane').trim() || '#fff' };
    }

    function allSeries() {
      var v = state.view, list = seriesData();
      var n = Math.max(200, Math.floor(state.w));
      state.fns.forEach(function (fn, k) {
        list.push({ name: fn.src, pts: fnPoints(fn.f, v.x0, v.x1, n), color: PALETTE[(state.ycols.length + k) % PALETTE.length], fn: fn });
      });
      return list;
    }

    function draw() {
      if (!state.view) fit();
      var c = colors(), v = state.view, W = state.w, H = state.h;
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
      ctx.fillStyle = c.pane; ctx.fillRect(0, 0, W, H);
      ctx.font = '12px ui-monospace, Menlo, Consolas, monospace';
      ctx.textBaseline = 'middle';
      var gridOn = o.grid ? o.grid() : true;
      var xs = niceStep(v.x1 - v.x0, (W - PAD.l - PAD.r) / 70), ys = niceStep(v.y1 - v.y0, (H - PAD.t - PAD.b) / 42);
      var i, t;
      ctx.lineWidth = 1;
      ctx.textAlign = 'center';
      for (t = Math.ceil(v.x0 / xs) * xs, i = 0; t <= v.x1 && i < 200; t += xs, i++) {
        var px = Math.round(sx(t)) + 0.5;
        if (gridOn) { ctx.strokeStyle = c.line; ctx.beginPath(); ctx.moveTo(px, PAD.t); ctx.lineTo(px, H - PAD.b); ctx.stroke(); }
        ctx.fillStyle = c.mute; ctx.fillText(fmt(Math.abs(t) < xs * 1e-9 ? 0 : t, xs), px, H - PAD.b + 14);
      }
      ctx.textAlign = 'right';
      for (t = Math.ceil(v.y0 / ys) * ys, i = 0; t <= v.y1 && i < 200; t += ys, i++) {
        var py = Math.round(sy(t)) + 0.5;
        if (gridOn) { ctx.strokeStyle = c.line; ctx.beginPath(); ctx.moveTo(PAD.l, py); ctx.lineTo(W - PAD.r, py); ctx.stroke(); }
        ctx.fillStyle = c.mute; ctx.fillText(fmt(Math.abs(t) < ys * 1e-9 ? 0 : t, ys), PAD.l - 6, py);
      }
      ctx.save();
      ctx.beginPath(); ctx.rect(PAD.l, PAD.t, W - PAD.l - PAD.r, H - PAD.t - PAD.b); ctx.clip();
      ctx.strokeStyle = c.mute; ctx.lineWidth = 1.2;
      if (v.x0 < 0 && v.x1 > 0) { var ax = Math.round(sx(0)) + 0.5; ctx.beginPath(); ctx.moveTo(ax, PAD.t); ctx.lineTo(ax, H - PAD.b); ctx.stroke(); }
      if (v.y0 < 0 && v.y1 > 0) { var ay = Math.round(sy(0)) + 0.5; ctx.beginPath(); ctx.moveTo(PAD.l, ay); ctx.lineTo(W - PAD.r, ay); ctx.stroke(); }
      var list = allSeries(), style = state.style;
      list.forEach(function (s) {
        var drawLine = s.fn || style !== 'points', drawPts = !s.fn && style !== 'lines';
        ctx.strokeStyle = s.color; ctx.fillStyle = s.color; ctx.lineWidth = 2; ctx.lineJoin = 'round';
        if (drawLine) {
          ctx.beginPath();
          var pen = false, last = null;
          s.pts.forEach(function (p) {
            if (!isFinite(p[1])) { pen = false; last = null; return; }
            var X = sx(p[0]), Y = sy(p[1]);
            if (last !== null && Math.abs(Y - last) > H * 3 && s.fn) { pen = false; }
            if (!pen) { ctx.moveTo(X, Y); pen = true; } else ctx.lineTo(X, Y);
            last = Y;
          });
          ctx.stroke();
        }
        if (drawPts) {
          var r = s.pts.length > 400 ? 1.6 : 3;
          s.pts.forEach(function (p) { ctx.beginPath(); ctx.arc(sx(p[0]), sy(p[1]), r, 0, 6.2832); ctx.fill(); });
        }
      });
      if (state.marker) {
        var mk = state.marker, X = sx(mk.x), Y = sy(mk.y);
        ctx.strokeStyle = c.fg; ctx.lineWidth = 1; ctx.setLineDash([4, 3]);
        ctx.beginPath(); ctx.moveTo(X, PAD.t); ctx.lineTo(X, H - PAD.b); ctx.moveTo(PAD.l, Y); ctx.lineTo(W - PAD.r, Y); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = mk.color; ctx.strokeStyle = c.pane; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(X, Y, 5, 0, 6.2832); ctx.fill(); ctx.stroke();
      }
      ctx.restore();
      ctx.strokeStyle = c.mute; ctx.lineWidth = 1;
      ctx.strokeRect(PAD.l + 0.5, PAD.t + 0.5, W - PAD.l - PAD.r - 1, H - PAD.t - PAD.b - 1);
      // legend
      if (list.length) {
        ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
        var lw = 0, shown = list.slice(0, 8);
        shown.forEach(function (s) { lw = Math.max(lw, ctx.measureText(s.name).width); });
        var bx = W - PAD.r - lw - 34, by = PAD.t + 6, bh = shown.length * 17 + 6;
        if (bx > PAD.l + 20) {
          ctx.globalAlpha = 0.9; ctx.fillStyle = c.pane; ctx.fillRect(bx - 6, by - 2, lw + 36, bh); ctx.globalAlpha = 1;
          shown.forEach(function (s, k) {
            var yy = by + 9 + k * 17;
            ctx.strokeStyle = s.color; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(bx, yy); ctx.lineTo(bx + 18, yy); ctx.stroke();
            ctx.fillStyle = c.fg; ctx.fillText(s.name, bx + 24, yy);
          });
        }
      }
      if (o.xlabel) { ctx.fillStyle = c.mute; ctx.textAlign = 'center'; ctx.fillText(o.xlabel(), PAD.l + (W - PAD.l - PAD.r) / 2, H - 8); }
    }

    function hideTip() { tip.hidden = true; }

    function nearest(px, py) {
      var best = null, bd = 28 * 28, list = allSeries();
      list.forEach(function (s) {
        if (s.fn) {
          var x = ux(px), y;
          try { y = s.fn.f(x); } catch (e) { y = NaN; }
          if (isFinite(y)) { var d = Math.pow(sy(y) - py, 2); if (d < bd) { bd = d; best = { x: x, y: y, color: s.color, name: s.name }; } }
        } else {
          s.pts.forEach(function (p) {
            var d = Math.pow(sx(p[0]) - px, 2) + Math.pow(sy(p[1]) - py, 2);
            if (d < bd) { bd = d; best = { x: p[0], y: p[1], color: s.color, name: s.name }; }
          });
        }
      });
      return best;
    }

    function showTip(m) {
      if (!m) { state.marker = null; hideTip(); draw(); return; }
      state.marker = m;
      tip.hidden = false;
      tip.textContent = m.name + ':  x = ' + (+m.x.toPrecision(7)) + ',  y = ' + (+m.y.toPrecision(7));
      draw();
    }

    /* pointer interaction: drag to pan, wheel or pinch to zoom, tap for a readout */
    var ptrs = new Map(), startPan = null, moved = 0, pinch = null;
    function pos(e) { var r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
    function zoomAt(px, py, fx, fy) {
      var v = state.view, X = ux(px), Y = uy(py);
      v.x0 = X - (X - v.x0) * fx; v.x1 = X + (v.x1 - X) * fx;
      v.y0 = Y - (Y - v.y0) * fy; v.y1 = Y + (v.y1 - Y) * fy;
      state.userView = true;
    }
    canvas.addEventListener('pointerdown', function (e) {
      canvas.setPointerCapture(e.pointerId);
      ptrs.set(e.pointerId, pos(e));
      moved = 0;
      if (ptrs.size === 1) { startPan = { p: pos(e), v: Object.assign({}, state.view) }; }
      if (ptrs.size === 2) { var a = Array.from(ptrs.values()); pinch = { d: Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y) }; startPan = null; }
    });
    canvas.addEventListener('pointermove', function (e) {
      if (!ptrs.has(e.pointerId)) return;
      var p = pos(e); ptrs.set(e.pointerId, p);
      if (ptrs.size === 2 && pinch) {
        var a = Array.from(ptrs.values()), d = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y);
        if (pinch.d > 0 && d > 0) { var f = pinch.d / d; zoomAt((a[0].x + a[1].x) / 2, (a[0].y + a[1].y) / 2, f, f); pinch.d = d; moved = 99; draw(); }
      } else if (startPan) {
        var dx = p.x - startPan.p.x, dy = p.y - startPan.p.y;
        moved = Math.max(moved, Math.hypot(dx, dy));
        if (moved > 5) {
          var v0 = startPan.v, kx = (v0.x1 - v0.x0) / (state.w - PAD.l - PAD.r), ky = (v0.y1 - v0.y0) / (state.h - PAD.t - PAD.b);
          state.view = { x0: v0.x0 - dx * kx, x1: v0.x1 - dx * kx, y0: v0.y0 + dy * ky, y1: v0.y1 + dy * ky };
          state.userView = true; state.marker = null; hideTip(); draw();
        }
      }
    });
    function end(e) {
      var wasTap = ptrs.size === 1 && moved <= 5 && startPan;
      var p = ptrs.get(e.pointerId);
      ptrs.delete(e.pointerId);
      if (ptrs.size < 2) pinch = null;
      if (ptrs.size === 0) startPan = null;
      if (wasTap && p) showTip(nearest(p.x, p.y));
    }
    canvas.addEventListener('pointerup', end);
    canvas.addEventListener('pointercancel', function (e) { ptrs.delete(e.pointerId); pinch = null; startPan = null; });
    canvas.addEventListener('wheel', function (e) {
      e.preventDefault();
      var p = pos(e), f = Math.exp(e.deltaY * 0.0015);
      if (e.shiftKey) zoomAt(p.x, p.y, f, 1); else if (e.altKey) zoomAt(p.x, p.y, 1, f); else zoomAt(p.x, p.y, f, f);
      state.marker = null; hideTip(); draw();
    }, { passive: false });
    canvas.addEventListener('dblclick', function () { fit(); draw(); });

    if (window.ResizeObserver) new ResizeObserver(function () { if (wrap.offsetParent !== null) { setSize(); draw(); } }).observe(wrap);

    return {
      resize: function () { setSize(); draw(); },
      draw: draw,
      fit: function () { fit(); draw(); },
      setTable: function (t, keepView) { state.table = t; if (!keepView) state.view = null; },
      setColumns: function (x, ys) { state.xcol = x; state.ycols = ys; state.view = null; },
      setStyle: function (s) { state.style = s; },
      setRange: function (a, b, force) { if (isFinite(a) && isFinite(b) && a < b) { state.xmin = a; state.xmax = b; state.forceRange = !!force; state.view = null; } },
      setFunctions: function (text) {
        state.fns = []; state.fnErr = '';
        String(text || '').split(/[;\n]+/).forEach(function (s) {
          s = s.trim().replace(/^y\s*=\s*/i, '').replace(/^f\s*\(\s*x\s*\)\s*=\s*/i, '');
          if (!s) return;
          try { state.fns.push({ src: s, f: compile(s) }); } catch (e) { state.fnErr = s + ': ' + e.message; }
        });
        state.view = null;
        return state.fnErr;
      },
      hasContent: function () { return state.fns.length > 0 || state.ycols.length > 0; },
      png: function (cb) { draw(); canvas.toBlob(cb, 'image/png'); }
    };
  }

  window.Plot = { create: create, parseTable: parseTable, compile: compile };
})();
