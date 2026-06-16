/* ── Language handling for legal subpages ─────────────────────────────────
   Reuses the EN/ES preference saved by the main site (localStorage 'als-lang').
   Nav + footer chrome is translated via translations.js [data-i18n] keys;
   the long legal body lives in [data-lang="en"] / [data-lang="es"] blocks,
   so updating legal copy never means touching translation keys.            */
(function () {
  function apply(lang) {
    if (lang !== 'es') lang = 'en';
    localStorage.setItem('als-lang', lang);
    document.documentElement.lang = lang;

    var enBtn = document.getElementById('btn-en');
    var esBtn = document.getElementById('btn-es');
    if (enBtn) enBtn.classList.toggle('active', lang === 'en');
    if (esBtn) esBtn.classList.toggle('active', lang === 'es');

    var dict = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : {};
    var t = dict;
    var year = new Date().getFullYear();
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key].replace('{year}', year);
    });

    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.style.display = el.getAttribute('data-lang') === lang ? '' : 'none';
    });
  }

  window.setLang = apply;
  apply(localStorage.getItem('als-lang') || 'en');
})();
