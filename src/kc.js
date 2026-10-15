// ZMK keycode table: [canonical, hidValue(page<<16|usage, mods<<24), label, group, ...aliases]
const KC_RAW = [];
(function () {
  const P = 0x070000;
  const add = (n, u, l, g, ...a) => KC_RAW.push([n, u, l, g, ...a]);
  for (let i = 0; i < 26; i++) { const c = String.fromCharCode(65 + i); add(c, P + 4 + i, c, 'alpha'); }
  const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  nums.forEach((d, i) => add('N' + d, P + 30 + i, d, 'num', 'NUMBER_' + d));
  add('RET', P + 0x28, '⏎', 'edit', 'RETURN', 'ENTER');
  add('ESC', P + 0x29, 'Esc', 'edit', 'ESCAPE');
  add('BSPC', P + 0x2a, '⌫', 'edit', 'BACKSPACE');
  add('TAB', P + 0x2b, '⇥', 'edit');
  add('SPACE', P + 0x2c, '␣', 'edit', 'SPC');
  add('MINUS', P + 0x2d, '-', 'sym');
  add('EQUAL', P + 0x2e, '=', 'sym');
  add('LBKT', P + 0x2f, '[', 'sym', 'LEFT_BRACKET');
  add('RBKT', P + 0x30, ']', 'sym', 'RIGHT_BRACKET');
  add('BSLH', P + 0x31, '\\', 'sym', 'BACKSLASH');
  add('NUHS', P + 0x32, '#~', 'sym', 'NON_US_HASH');
  add('SEMI', P + 0x33, ';', 'sym', 'SEMICOLON');
  add('SQT', P + 0x34, "'", 'sym', 'SINGLE_QUOTE', 'APOS', 'APOSTROPHE');
  add('GRAVE', P + 0x35, '`', 'sym');
  add('COMMA', P + 0x36, ',', 'sym');
  add('DOT', P + 0x37, '.', 'sym', 'PERIOD');
  add('FSLH', P + 0x38, '/', 'sym', 'SLASH');
  add('CAPS', P + 0x39, 'Caps', 'edit', 'CAPSLOCK', 'CLCK');
  for (let i = 1; i <= 12; i++) add('F' + i, P + 0x39 + i, 'F' + i, 'fn');
  add('PSCRN', P + 0x46, 'PrtSc', 'edit', 'PRINTSCREEN');
  add('SLCK', P + 0x47, 'ScrLk', 'edit', 'SCROLLLOCK');
  add('PAUSE_BREAK', P + 0x48, 'Pause', 'edit');
  add('INS', P + 0x49, 'Ins', 'edit', 'INSERT');
  add('HOME', P + 0x4a, 'Home', 'nav');
  add('PG_UP', P + 0x4b, 'PgUp', 'nav', 'PAGE_UP');
  add('DEL', P + 0x4c, 'Del', 'edit', 'DELETE');
  add('END', P + 0x4d, 'End', 'nav');
  add('PG_DN', P + 0x4e, 'PgDn', 'nav', 'PAGE_DOWN');
  add('RIGHT', P + 0x4f, '→', 'nav', 'RIGHT_ARROW');
  add('LEFT', P + 0x50, '←', 'nav', 'LEFT_ARROW');
  add('DOWN', P + 0x51, '↓', 'nav', 'DOWN_ARROW');
  add('UP', P + 0x52, '↑', 'nav', 'UP_ARROW');
  add('K_APP', P + 0x65, 'Menu', 'edit', 'K_CONTEXT_MENU');
  for (let i = 13; i <= 24; i++) add('F' + i, P + 0x68 + (i - 13), 'F' + i, 'fn');
  add('INT1', P + 0x87, 'ろ', 'jp', 'INTERNATIONAL_1', 'INT_RO');
  add('INT2', P + 0x88, 'かな', 'jp', 'INTERNATIONAL_2', 'INT_KATAKANAHIRAGANA');
  add('INT3', P + 0x89, '¥', 'jp', 'INTERNATIONAL_3', 'INT_YEN');
  add('INT4', P + 0x8a, '変換', 'jp', 'INTERNATIONAL_4', 'INT_HENKAN');
  add('INT5', P + 0x8b, '無変換', 'jp', 'INTERNATIONAL_5', 'INT_MUHENKAN');
  add('LANG1', P + 0x90, 'かな', 'jp', 'LANGUAGE_1', 'LANG_HANGEUL');
  add('LANG2', P + 0x91, '英数', 'jp', 'LANGUAGE_2', 'LANG_HANJA');
  add('LCTRL', P + 0xe0, '⌃', 'mod', 'LEFT_CONTROL', 'LCTL');
  add('LSHFT', P + 0xe1, '⇧', 'mod', 'LEFT_SHIFT', 'LSHIFT');
  add('LALT', P + 0xe2, '⌥', 'mod', 'LEFT_ALT', 'LOPT');
  add('LGUI', P + 0xe3, '⌘', 'mod', 'LEFT_GUI', 'LCMD', 'LWIN', 'LEFT_COMMAND', 'LMETA');
  add('RCTRL', P + 0xe4, 'R⌃', 'mod', 'RIGHT_CONTROL', 'RCTL');
  add('RSHFT', P + 0xe5, 'R⇧', 'mod', 'RIGHT_SHIFT', 'RSHIFT');
  add('RALT', P + 0xe6, 'R⌥', 'mod', 'RIGHT_ALT', 'ROPT');
  add('RGUI', P + 0xe7, 'R⌘', 'mod', 'RIGHT_GUI', 'RCMD', 'RWIN', 'RIGHT_COMMAND', 'RMETA');
  const S = 0x02000000;
  add('EXCL', S + P + 0x1e, '!', 'shift', 'EXCLAMATION');
  add('AT', S + P + 0x1f, '@', 'shift', 'AT_SIGN');
  add('HASH', S + P + 0x20, '#', 'shift', 'POUND');
  add('DLLR', S + P + 0x21, '$', 'shift', 'DOLLAR');
  add('PRCNT', S + P + 0x22, '%', 'shift', 'PERCENT');
  add('CARET', S + P + 0x23, '^', 'shift');
  add('AMPS', S + P + 0x24, '&', 'shift', 'AMPERSAND');
  add('STAR', S + P + 0x25, '*', 'shift', 'ASTERISK', 'ASTRK');
  add('LPAR', S + P + 0x26, '(', 'shift', 'LEFT_PARENTHESIS');
  add('RPAR', S + P + 0x27, ')', 'shift', 'RIGHT_PARENTHESIS');
  add('UNDER', S + P + 0x2d, '_', 'shift', 'UNDERSCORE');
  add('PLUS', S + P + 0x2e, '+', 'shift');
  add('LBRC', S + P + 0x2f, '{', 'shift', 'LEFT_BRACE');
  add('RBRC', S + P + 0x30, '}', 'shift', 'RIGHT_BRACE');
  add('PIPE', S + P + 0x31, '|', 'shift');
  add('COLON', S + P + 0x33, ':', 'shift');
  add('DQT', S + P + 0x34, '"', 'shift', 'DOUBLE_QUOTES');
  add('TILDE', S + P + 0x35, '~', 'shift');
  add('LT', S + P + 0x36, '<', 'shift', 'LESS_THAN');
  add('GT', S + P + 0x37, '>', 'shift', 'GREATER_THAN');
  add('QMARK', S + P + 0x38, '?', 'shift', 'QUESTION');
  const C = 0x0c0000;
  add('C_VOL_UP', C + 0xe9, 'Vol+', 'media', 'C_VOLUME_UP');
  add('C_VOL_DN', C + 0xea, 'Vol−', 'media', 'C_VOLUME_DOWN');
  add('C_MUTE', C + 0xe2, 'Mute', 'media');
  add('C_PP', C + 0xcd, '⏯', 'media', 'C_PLAY_PAUSE');
  add('C_NEXT', C + 0xb5, '⏭', 'media');
  add('C_PREV', C + 0xb6, '⏮', 'media', 'C_PREVIOUS');
  add('C_BRI_UP', C + 0x6f, '☀+', 'media', 'C_BRIGHTNESS_INC');
  add('C_BRI_DN', C + 0x70, '☀−', 'media', 'C_BRIGHTNESS_DEC');
})();
const MOD_FNS = [['LC', 0x01, '⌃'], ['LS', 0x02, '⇧'], ['LA', 0x04, '⌥'], ['LG', 0x08, '⌘'], ['RC', 0x10, 'R⌃'], ['RS', 0x20, 'R⇧'], ['RA', 0x40, 'R⌥'], ['RG', 0x80, 'R⌘']];

const KC = { byName: {}, byVal: {}, list: [] };
for (const [n, u, l, g, ...a] of KC_RAW) {
  const e = { n, u, l, g, a };
  KC.list.push(e);
  KC.byName[n] = e;
  for (const x of a) if (!KC.byName[x]) KC.byName[x] = e;
  if (!(u in KC.byVal)) KC.byVal[u] = e;
}
// parse "LS(LC(A))" -> {mods:[...fn], base:'A'}
function kcParse(s) {
  s = (s || '').replace(/\s+/g, '');
  const mods = [];
  let m;
  while ((m = /^(L[CSAG]|R[CSAG])\((.*)\)$/.exec(s))) { mods.push(m[1]); s = m[2]; }
  return { mods, base: s };
}
function kcValue(s) {
  const { mods, base } = kcParse(s);
  const e = KC.byName[base];
  if (!e) return null;
  let v = e.u;
  for (const f of mods) v |= MOD_FNS.find(x => x[0] === f)[1] << 24;
  return v >>> 0;
}
// value -> preferred name (uses shifted aliases where available)
function kcFromValue(v) {
  v = v >>> 0;
  if (KC.byVal[v]) return KC.byVal[v].n;
  const mods = v >>> 24, base = v & 0xffffff;
  // try shift alias + other mods
  let rest = mods, inner = null;
  if ((mods & 0x02) && KC.byVal[(0x02000000 + base) >>> 0]) { inner = KC.byVal[(0x02000000 + base) >>> 0].n; rest &= ~0x02; }
  else if (KC.byVal[base]) inner = KC.byVal[base].n;
  else return '0x' + v.toString(16);
  for (const [f, bit] of MOD_FNS.slice().reverse()) if (rest & bit) inner = f + '(' + inner + ')';
  return inner;
}
function kcLabel(s) {
  const v = kcValue(s);
  if (v == null) return s;
  if (KC.byVal[v]) return KC.byVal[v].l;
  const mods = v >>> 24, base = v & 0xffffff;
  let pre = '', e;
  let rest = mods;
  if ((mods & 2) && (e = KC.byVal[(0x02000000 + base) >>> 0])) { rest &= ~2; }
  else e = KC.byVal[base];
  for (const [, bit, sym] of MOD_FNS) if (rest & bit) pre += sym;
  return pre + (e ? e.l : s);
}
function kcIsMod(s) { const e = KC.byName[kcParse(s).base]; return !!e && e.g === 'mod' && kcParse(s).mods.length === 0; }
if (typeof module !== 'undefined') module.exports = { KC, kcParse, kcValue, kcFromValue, kcLabel, kcIsMod, MOD_FNS };
