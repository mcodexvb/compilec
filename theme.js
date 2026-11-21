(function () {
  'use strict';

  const key = 'compilec.theme';
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const root = document.documentElement;
  let preference = 'system';
  let controls = [];
  let themeColor;

  function valid(value) {
    return value === 'light' || value === 'dark' ? value : 'system';
  }

  function apply() {
    const theme = preference === 'system' ? (system.matches ? 'dark' : 'light') : preference;
    const changed = root.dataset.theme !== theme;
    root.dataset.theme = theme;
    if (!themeColor) themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = theme === 'dark' ? '#141e39' : '#f4f6ff';
    controls.forEach(control => { control.value = preference; });
    if (changed) window.dispatchEvent(new Event('clabthemechange'));
  }

  try {
    preference = valid(localStorage.getItem(key));
  } catch {}
  apply();

  document.addEventListener('DOMContentLoaded', () => {
    controls = Array.from(document.querySelectorAll('[data-theme-choice]'));
    controls.forEach(control => {
      control.hidden = false;
      control.addEventListener('change', () => {
        preference = valid(control.value);
        try {
          if (preference === 'system') localStorage.removeItem(key);
          else localStorage.setItem(key, preference);
        } catch {}
        apply();
      });
    });
    apply();
  });

  system.addEventListener('change', apply);
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) {
      preference = valid(event.newValue);
      apply();
    }
  });
}());
