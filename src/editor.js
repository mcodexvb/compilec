import { EditorView, basicSetup } from 'codemirror';
import { EditorState, Compartment } from '@codemirror/state';
import { keymap } from '@codemirror/view';
import { indentWithTab, undo, redo } from '@codemirror/commands';
import { cpp } from '@codemirror/lang-cpp';
import { setDiagnostics } from '@codemirror/lint';
import { oneDark } from '@codemirror/theme-one-dark';

const themeSlot = new Compartment();
const mq = window.matchMedia('(prefers-color-scheme: dark)');

const baseTheme = EditorView.theme({
  '&': { height: '100%', fontSize: '14.5px', backgroundColor: 'var(--pane)', color: 'var(--fg)' },
  '.cm-scroller': { fontFamily: 'var(--code)', lineHeight: '1.5' },
  '.cm-gutters': { backgroundColor: 'var(--pane)', color: 'var(--mute)', borderRight: '1px solid var(--line)' },
  '.cm-activeLine, .cm-activeLineGutter': { backgroundColor: 'rgba(125,125,125,.10)' },
  '&.cm-focused': { outline: '2px solid var(--acc)', outlineOffset: '-2px' }
});

function themeFor(dark) { return dark ? oneDark : []; }

const sizeSlot = new Compartment();
const sizeTheme = (px) => EditorView.theme({ '&': { fontSize: px + 'px' } });

export function createEditor(parent, doc, onRun, fontPx) {
  const view = new EditorView({
    parent,
    state: EditorState.create({
      doc,
      extensions: [
        basicSetup,
        cpp(),
        keymap.of([
          { key: 'Mod-Enter', run: () => { onRun(); return true; } },
          indentWithTab
        ]),
        EditorState.tabSize.of(4),
        baseTheme,
        themeSlot.of(themeFor(mq.matches)),
        sizeSlot.of(sizeTheme(fontPx || 14.5)),
        EditorView.lineWrapping
      ]
    })
  });
  mq.addEventListener('change', (e) => {
    view.dispatch({ effects: themeSlot.reconfigure(themeFor(e.matches)) });
  });
  return {
    get: () => view.state.doc.toString(),
    set: (text) => {
      view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: text }, selection: { anchor: 0 } });
      view.dispatch(setDiagnostics(view.state, []));
    },
    focus: () => view.focus(),
    insert: (text) => {
      const r = view.state.selection.main;
      view.dispatch({ changes: { from: r.from, to: r.to, insert: text }, selection: { anchor: r.from + text.length }, scrollIntoView: true });
      view.focus();
    },
    undo: () => { undo(view); view.focus(); },
    redo: () => { redo(view); view.focus(); },
    fontSize: (px) => view.dispatch({ effects: sizeSlot.reconfigure(sizeTheme(px)) }),
    markers: (list) => {
      const doc = view.state.doc;
      const ds = [];
      list.forEach((d) => {
        if (d.line < 1 || d.line > doc.lines) return;
        const ln = doc.line(d.line);
        const from = Math.min(ln.from + Math.max(d.col - 1, 0), ln.to);
        const to = Math.min(from + 1 > ln.to ? ln.to : from + 1, ln.to);
        ds.push({ from, to: Math.max(to, from), severity: d.severity, message: d.message });
      });
      view.dispatch(setDiagnostics(view.state, ds));
    },
    goTo: (line, col) => {
      const doc = view.state.doc;
      if (line < 1 || line > doc.lines) return;
      const ln = doc.line(line);
      const pos = Math.min(ln.from + Math.max((col || 1) - 1, 0), ln.to);
      view.dispatch({ selection: { anchor: pos }, scrollIntoView: true });
      view.focus();
    }
  };
}
