// Autocomplete for C (and a little C++) in the CLab editor: keywords, types, snippets, the
// standard library with signatures, header names, printf format codes, and names from the program.
import { autocompletion, snippet, acceptCompletion } from '@codemirror/autocomplete';
import { syntaxTree } from '@codemirror/language';
import { keymap } from '@codemirror/view';
import { Prec } from '@codemirror/state';

const KEYWORDS = ['auto', 'break', 'case', 'const', 'continue', 'default', 'do', 'else', 'enum', 'extern', 'goto', 'return',
  'sizeof', 'static', 'struct', 'switch', 'typedef', 'union', 'volatile', 'register', 'inline'];
const TYPES = ['int', 'char', 'float', 'double', 'long', 'short', 'unsigned', 'signed', 'void', 'size_t'];
const CPP_KEYWORDS = ['class', 'namespace', 'using', 'template', 'typename', 'new', 'delete', 'public', 'private', 'protected', 'nullptr', 'true', 'false', 'bool', 'auto', 'std'];

// [name, signature, header, description]
const LIB = [
  ['printf', 'int printf(const char *format, ...)', 'stdio.h', 'Print formatted output.'],
  ['scanf', 'int scanf(const char *format, ...)', 'stdio.h', 'Read formatted input. Give the address of each variable (&x). Returns the number of values read.'],
  ['puts', 'int puts(const char *s)', 'stdio.h', 'Print a string and a new line.'],
  ['putchar', 'int putchar(int c)', 'stdio.h', 'Print one character.'],
  ['getchar', 'int getchar(void)', 'stdio.h', 'Read one character.'],
  ['fgets', 'char *fgets(char *s, int size, FILE *stream)', 'stdio.h', 'Read a line (at most size-1 characters) into s. Use stdin for the keyboard.'],
  ['fputs', 'int fputs(const char *s, FILE *stream)', 'stdio.h', 'Write a string to a stream (stdout, stderr or a file).'],
  ['fprintf', 'int fprintf(FILE *stream, const char *format, ...)', 'stdio.h', 'printf to a stream or file.'],
  ['fscanf', 'int fscanf(FILE *stream, const char *format, ...)', 'stdio.h', 'scanf from a file.'],
  ['sprintf', 'int sprintf(char *s, const char *format, ...)', 'stdio.h', 'printf into a string. Make sure s is large enough.'],
  ['snprintf', 'int snprintf(char *s, size_t n, const char *format, ...)', 'stdio.h', 'Like sprintf but writes at most n characters.'],
  ['sscanf', 'int sscanf(const char *s, const char *format, ...)', 'stdio.h', 'scanf from a string.'],
  ['fopen', 'FILE *fopen(const char *name, const char *mode)', 'stdio.h', 'Open a file: "r" read, "w" write, "a" append. Returns NULL on failure.'],
  ['fclose', 'int fclose(FILE *stream)', 'stdio.h', 'Close a file.'],
  ['fflush', 'int fflush(FILE *stream)', 'stdio.h', 'Send buffered output now, for example fflush(stdout).'],
  ['feof', 'int feof(FILE *stream)', 'stdio.h', 'Non-zero once the end of the file has been reached.'],
  ['perror', 'void perror(const char *s)', 'stdio.h', 'Print s and the last error message.'],
  ['sqrt', 'double sqrt(double x)', 'math.h', 'Square root. Needs <math.h> (and -lm with gcc).'],
  ['pow', 'double pow(double x, double y)', 'math.h', 'x to the power y. C has no ^ operator for powers.'],
  ['fabs', 'double fabs(double x)', 'math.h', 'Absolute value of a real number.'],
  ['exp', 'double exp(double x)', 'math.h', 'e to the power x.'],
  ['log', 'double log(double x)', 'math.h', 'Natural logarithm.'],
  ['log10', 'double log10(double x)', 'math.h', 'Logarithm to base 10.'],
  ['log2', 'double log2(double x)', 'math.h', 'Logarithm to base 2.'],
  ['sin', 'double sin(double x)', 'math.h', 'Sine, x in radians.'],
  ['cos', 'double cos(double x)', 'math.h', 'Cosine, x in radians.'],
  ['tan', 'double tan(double x)', 'math.h', 'Tangent, x in radians.'],
  ['asin', 'double asin(double x)', 'math.h', 'Inverse sine, result in radians.'],
  ['acos', 'double acos(double x)', 'math.h', 'Inverse cosine, result in radians.'],
  ['atan', 'double atan(double x)', 'math.h', 'Inverse tangent, result in radians.'],
  ['atan2', 'double atan2(double y, double x)', 'math.h', 'Angle of the point (x, y), in radians.'],
  ['sinh', 'double sinh(double x)', 'math.h', 'Hyperbolic sine.'],
  ['cosh', 'double cosh(double x)', 'math.h', 'Hyperbolic cosine.'],
  ['tanh', 'double tanh(double x)', 'math.h', 'Hyperbolic tangent.'],
  ['ceil', 'double ceil(double x)', 'math.h', 'Smallest integer not less than x (as a double).'],
  ['floor', 'double floor(double x)', 'math.h', 'Largest integer not greater than x (as a double).'],
  ['round', 'double round(double x)', 'math.h', 'Nearest integer, halves away from zero.'],
  ['trunc', 'double trunc(double x)', 'math.h', 'Remove the fractional part.'],
  ['fmod', 'double fmod(double x, double y)', 'math.h', 'Remainder of x / y for reals.'],
  ['cbrt', 'double cbrt(double x)', 'math.h', 'Cube root.'],
  ['hypot', 'double hypot(double x, double y)', 'math.h', 'sqrt(x*x + y*y).'],
  ['strlen', 'size_t strlen(const char *s)', 'string.h', 'Length of a string, not counting the final \\0.'],
  ['strcpy', 'char *strcpy(char *dest, const char *src)', 'string.h', 'Copy src into dest. dest must be large enough.'],
  ['strncpy', 'char *strncpy(char *dest, const char *src, size_t n)', 'string.h', 'Copy at most n characters.'],
  ['strcat', 'char *strcat(char *dest, const char *src)', 'string.h', 'Append src to the end of dest.'],
  ['strncat', 'char *strncat(char *dest, const char *src, size_t n)', 'string.h', 'Append at most n characters.'],
  ['strcmp', 'int strcmp(const char *a, const char *b)', 'string.h', '0 if the strings are equal, negative if a < b, positive if a > b.'],
  ['strncmp', 'int strncmp(const char *a, const char *b, size_t n)', 'string.h', 'Compare at most n characters.'],
  ['strchr', 'char *strchr(const char *s, int c)', 'string.h', 'First occurrence of a character, or NULL.'],
  ['strrchr', 'char *strrchr(const char *s, int c)', 'string.h', 'Last occurrence of a character, or NULL.'],
  ['strstr', 'char *strstr(const char *s, const char *sub)', 'string.h', 'First occurrence of a substring, or NULL.'],
  ['strtok', 'char *strtok(char *s, const char *delims)', 'string.h', 'Split a string into tokens.'],
  ['memset', 'void *memset(void *p, int c, size_t n)', 'string.h', 'Set n bytes to c.'],
  ['memcpy', 'void *memcpy(void *dest, const void *src, size_t n)', 'string.h', 'Copy n bytes.'],
  ['memcmp', 'int memcmp(const void *a, const void *b, size_t n)', 'string.h', 'Compare n bytes.'],
  ['isalpha', 'int isalpha(int c)', 'ctype.h', 'Non-zero if c is a letter.'],
  ['isdigit', 'int isdigit(int c)', 'ctype.h', 'Non-zero if c is a digit 0 to 9.'],
  ['isalnum', 'int isalnum(int c)', 'ctype.h', 'Non-zero if c is a letter or a digit.'],
  ['isupper', 'int isupper(int c)', 'ctype.h', 'Non-zero if c is a capital letter.'],
  ['islower', 'int islower(int c)', 'ctype.h', 'Non-zero if c is a small letter.'],
  ['isspace', 'int isspace(int c)', 'ctype.h', 'Non-zero for space, tab, new line and similar.'],
  ['ispunct', 'int ispunct(int c)', 'ctype.h', 'Non-zero for punctuation characters.'],
  ['toupper', 'int toupper(int c)', 'ctype.h', 'Convert a letter to a capital.'],
  ['tolower', 'int tolower(int c)', 'ctype.h', 'Convert a letter to a small letter.'],
  ['abs', 'int abs(int n)', 'stdlib.h', 'Absolute value of an integer.'],
  ['labs', 'long labs(long n)', 'stdlib.h', 'Absolute value of a long.'],
  ['atoi', 'int atoi(const char *s)', 'stdlib.h', 'Convert a string to an int.'],
  ['atof', 'double atof(const char *s)', 'stdlib.h', 'Convert a string to a double.'],
  ['strtol', 'long strtol(const char *s, char **end, int base)', 'stdlib.h', 'Convert a string to a long, with error checking.'],
  ['strtod', 'double strtod(const char *s, char **end)', 'stdlib.h', 'Convert a string to a double, with error checking.'],
  ['rand', 'int rand(void)', 'stdlib.h', 'A pseudo-random integer from 0 to RAND_MAX.'],
  ['srand', 'void srand(unsigned seed)', 'stdlib.h', 'Seed the random number generator.'],
  ['qsort', 'void qsort(void *base, size_t n, size_t size, int (*cmp)(const void *, const void *))', 'stdlib.h', 'Sort an array with a comparison function.'],
  ['malloc', 'void *malloc(size_t size)', 'stdlib.h', 'Allocate size bytes. Check for NULL and free() afterwards.'],
  ['calloc', 'void *calloc(size_t n, size_t size)', 'stdlib.h', 'Allocate n items of the given size, set to zero.'],
  ['realloc', 'void *realloc(void *p, size_t size)', 'stdlib.h', 'Change the size of an allocated block.'],
  ['free', 'void free(void *p)', 'stdlib.h', 'Release memory obtained with malloc.'],
  ['exit', 'void exit(int status)', 'stdlib.h', 'End the program at once.'],
  ['time', 'time_t time(time_t *t)', 'time.h', 'Seconds since 1 January 1970.'],
  ['clock', 'clock_t clock(void)', 'time.h', 'Processor time used; divide by CLOCKS_PER_SEC for seconds.']
];
// [name, header, kind, description]
const CONSTS = [
  ['NULL', 'stdio.h', 'The null pointer.'], ['EOF', 'stdio.h', 'End of input (-1).'],
  ['stdin', 'stdio.h', 'Standard input (the keyboard).'], ['stdout', 'stdio.h', 'Standard output.'], ['stderr', 'stdio.h', 'Standard error output.'],
  ['M_PI', 'math.h', 'The constant pi.'], ['M_E', 'math.h', 'The constant e.'],
  ['INT_MAX', 'limits.h', 'Largest int.'], ['INT_MIN', 'limits.h', 'Smallest int.'], ['LONG_MAX', 'limits.h', 'Largest long.'],
  ['UINT_MAX', 'limits.h', 'Largest unsigned int.'], ['CHAR_BIT', 'limits.h', 'Bits in a char.'],
  ['DBL_MAX', 'float.h', 'Largest double.'], ['DBL_EPSILON', 'float.h', 'Smallest x with 1 + x != 1 for double.'], ['DBL_DIG', 'float.h', 'Decimal digits a double holds.'],
  ['RAND_MAX', 'stdlib.h', 'Largest value of rand().'], ['EXIT_SUCCESS', 'stdlib.h', 'Success status for exit().'], ['EXIT_FAILURE', 'stdlib.h', 'Failure status for exit().'],
  ['CLOCKS_PER_SEC', 'time.h', 'Clock ticks per second.']
];
const BOOLS = [['bool', 'stdbool.h', 'type', 'True or false (0 or 1). Needs <stdbool.h> before C23.'], ['true', 'stdbool.h', 'constant', 'The value 1.'], ['false', 'stdbool.h', 'constant', 'The value 0.']];
const STDINT = ['int8_t', 'int16_t', 'int32_t', 'int64_t', 'uint8_t', 'uint16_t', 'uint32_t', 'uint64_t'];
const HEADERS = ['stdio.h', 'stdlib.h', 'string.h', 'math.h', 'ctype.h', 'stdbool.h', 'limits.h', 'float.h', 'time.h', 'stdint.h', 'stddef.h', 'errno.h', 'assert.h', 'stdarg.h'];
const DIRECTIVES = [['include', '#include <stdio.h>'], ['define', '#define NAME value'], ['ifdef', 'conditional compilation'], ['ifndef', 'conditional compilation'], ['if', 'conditional compilation'], ['else', ''], ['elif', ''], ['endif', 'end of conditional compilation'], ['undef', ''], ['pragma', '']];
const FORMATS = [
  ['%d', 'int'], ['%i', 'int'], ['%u', 'unsigned int'], ['%ld', 'long'], ['%lld', 'long long'], ['%f', 'double (printf)'], ['%lf', 'double (scanf)'], ['%.2f', 'double, 2 decimals'],
  ['%.4f', 'double, 4 decimals'], ['%e', 'double, exponent form'], ['%g', 'double, shortest form'], ['%c', 'char'], ['%s', 'string'], ['%x', 'hexadecimal'], ['%o', 'octal'],
  ['%5d', 'int in a field of width 5'], ['%05d', 'int, zero-filled to width 5'], ['%-5d', 'int, left-aligned in width 5'], ['%8.3f', 'double, width 8, 3 decimals'], ['%zu', 'size_t'], ['%p', 'pointer'], ['%%', 'the sign %']
];
// Snippets; the placeholders are ${name}. Four spaces are used for indentation, as in the examples.
const SNIPPETS = [
  ['main', 'int main(void)\n{\n    ${}\n    return 0;\n}', 'main function'],
  ['for', 'for (int ${i} = 0; ${i} < ${n}; ${i}++) {\n    ${}\n}', 'counting loop'],
  ['while', 'while (${condition}) {\n    ${}\n}', 'while loop'],
  ['do', 'do {\n    ${}\n} while (${condition});', 'do-while loop'],
  ['if', 'if (${condition}) {\n    ${}\n}', 'if statement'],
  ['ifelse', 'if (${condition}) {\n    ${}\n} else {\n    \n}', 'if-else statement'],
  ['switch', 'switch (${value}) {\n    case ${1}:\n        ${}\n        break;\n    default:\n        break;\n}', 'switch statement'],
  ['func', '${int} ${name}(${void})\n{\n    ${}\n}', 'function definition'],
  ['scanfd', 'scanf("%d", &${n});', 'read an int'],
  ['scanflf', 'scanf("%lf", &${x});', 'read a double'],
  ['array', 'int ${a}[${10}];', 'array declaration']
];

// Standard functions that insert a template, so that the cursor lands inside the quotes.
const FUNC_SNIPPETS = { printf: 'printf("${}"${});', scanf: 'scanf("${}", ${});' };

function snip(template) { return snippet(template); }

function ensureInclude(view, hdr) {
  const text = view.state.doc.toString();
  const esc = hdr.replace('.', '\\.');
  if (new RegExp('^\\s*#\\s*include\\s*[<"]' + esc + '[>"]', 'm').test(text)) return 0;
  let last = 0, m;
  const rx = /^[ \t]*#[ \t]*include[^\n]*\n?/gm;
  while ((m = rx.exec(text))) last = m.index + m[0].length;
  let ins = '#include <' + hdr + '>\n';
  if (last > 0 && text[last - 1] !== '\n') ins = '\n' + ins;
  if (last === 0 && text.length && !/^\s*\n/.test(text)) ins += '\n';
  view.dispatch({ changes: { from: last, insert: ins } });
  return ins.length;
}

function withInclude(hdr, inner) {
  return (view, c, from, to) => {
    const shift = ensureInclude(view, hdr);
    from += shift; to += shift;
    if (inner) inner(view, c, from, to);
    else view.dispatch({ changes: { from, to, insert: c.label }, selection: { anchor: from + c.label.length }, userEvent: 'input.complete', scrollIntoView: true });
  };
}

function build(cpp) {
  const o = [];
  KEYWORDS.forEach((k) => o.push({ label: k, type: 'keyword', boost: -1 }));
  TYPES.forEach((t) => o.push({ label: t, type: 'type' }));
  if (cpp) CPP_KEYWORDS.forEach((k) => o.push({ label: k, type: 'keyword' }));
  SNIPPETS.forEach(([label, tpl, detail]) => o.push({ label, detail, type: 'text', boost: 0, apply: snip(tpl), info: tpl.replace(/\$\{(\w*)\}/g, '$1') }));
  LIB.forEach(([name, sig, hdr, desc]) => {
    const tpl = FUNC_SNIPPETS[name];
    const inner = tpl ? snip(tpl) : undefined;
    o.push({ label: name, type: 'function', detail: '<' + hdr + '>', info: sig + '\n\n' + desc, apply: cpp ? inner : withInclude(hdr, inner) });
  });
  CONSTS.forEach(([name, hdr, desc]) => o.push({ label: name, type: 'constant', detail: '<' + hdr + '>', info: desc, apply: cpp ? undefined : withInclude(hdr) }));
  if (!cpp) {
    BOOLS.forEach(([name, hdr, kind, desc]) => o.push({ label: name, type: kind === 'type' ? 'type' : 'constant', detail: '<' + hdr + '>', info: desc, apply: withInclude(hdr) }));
    STDINT.forEach((n) => o.push({ label: n, type: 'type', detail: '<stdint.h>', apply: withInclude('stdint.h') }));
  }
  return o;
}

const HEADER_OPTS = HEADERS.map((h) => ({ label: h, type: 'text', apply: h + '>' }));
const DIRECTIVE_OPTS = DIRECTIVES.map(([n, d]) => ({ label: n, type: 'keyword', detail: d }));
const FORMAT_OPTS = FORMATS.map(([f, d]) => ({ label: f, type: 'constant', detail: d, boost: f === '%d' || f === '%f' ? 1 : 0 }));

const NOT_FUNCS = new Set(['if', 'for', 'while', 'switch', 'return', 'sizeof', 'else', 'do']);
const FUNC_RX = /^(?:(?:static|inline|extern|const|unsigned|signed|long|short|struct\s+\w+)\s+)*[A-Za-z_]\w*[ \t*]+\*?([A-Za-z_]\w*)\s*\(([^;{)]*)\)\s*(?:\{|$)/gm;

function localOptions(state, word, taken) {
  const text = state.doc.toString();
  const seen = new Set(), out = [];
  let m;
  FUNC_RX.lastIndex = 0;
  while ((m = FUNC_RX.exec(text))) {
    const name = m[1];
    if (NOT_FUNCS.has(name) || taken.has(name) || seen.has(name) || name === word) continue;
    seen.add(name);
    out.push({ label: name, type: 'function', detail: '(' + m[2].trim().replace(/\s+/g, ' ') + ')', boost: 3 });
  }
  const rx = /[A-Za-z_]\w*/g;
  let n = 0;
  while ((m = rx.exec(text)) && n < 600) {
    const w = m[0];
    if (w.length < 2 || taken.has(w) || seen.has(w) || w === word || (m.index + w.length === state.selection.main.head)) continue;
    seen.add(w); out.push({ label: w, type: 'variable', boost: 1 }); n++;
  }
  return out;
}

export function cCompletions(isCpp) {
  const cOpts = build(false), cppOpts = build(true);
  const taken = (opts) => new Set(opts.map((x) => x.label));
  const takenC = taken(cOpts), takenCpp = taken(cppOpts);
  return function source(ctx) {
    const { state, pos } = ctx;
    const line = state.doc.lineAt(pos);
    const before = line.text.slice(0, pos - line.from);

    let m = /^\s*#\s*include\s*<([\w./]*)$/.exec(before);
    if (m) return { from: pos - m[1].length, options: HEADER_OPTS, validFor: /^[\w./]*$/ };
    m = /^\s*#\s*(\w*)$/.exec(before);
    if (m) return { from: pos - m[1].length, options: DIRECTIVE_OPTS, validFor: /^\w*$/ };

    const node = syntaxTree(state).resolveInner(pos, -1);
    if (/Comment/.test(node.name)) return null;
    if (/String|Char|Raw/.test(node.name)) {
      const f = /%[-+ #0-9.lhzjt]*$/.exec(before);
      return f ? { from: pos - f[0].length, options: FORMAT_OPTS, validFor: /^%[-+ #0-9.lhzjt]*[a-z%]*$/ } : null;
    }

    const w = ctx.matchBefore(/[A-Za-z_]\w*/);
    if (!w && !ctx.explicit) return null;
    if (w && !ctx.explicit && w.text.length < 2) return null;
    const from = w ? w.from : pos;
    const prev = state.sliceDoc(Math.max(0, from - 2), from);
    if (/\.$|->$/.test(prev)) return null;                 // member access: nothing useful to offer
    if (/\d$/.test(state.sliceDoc(Math.max(0, from - 1), from))) return null;
    const cpp = !!(isCpp && isCpp());
    const base = cpp ? cppOpts : cOpts;
    return { from, options: base.concat(localOptions(state, w ? w.text : '', cpp ? takenCpp : takenC)), validFor: /^\w*$/ };
  };
}

export function autocompleteExtension(isCpp) {
  return [
    autocompletion({ override: [cCompletions(isCpp)], maxRenderedOptions: 14, icons: true, closeOnBlur: true }),
    Prec.high(keymap.of([{ key: 'Tab', run: acceptCompletion }]))
  ];
}
