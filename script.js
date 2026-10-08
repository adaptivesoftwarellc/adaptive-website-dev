// Mobile menu + footer year. Everything else is CSS.

(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.hidden;
      menu.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // The section reveal deliberately does NOT live here. It is inline
  // in the <head> of index.html, because the CSS that hides a section
  // and the JS that shows it again must ship in the same cached file.
  // Split across two files, a stale copy of one of them leaves the
  // page blank. Don't move it back.
})();
