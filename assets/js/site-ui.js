/* Tooltips for [data-tip], copy-citation buttons, nav aligned to the content column, tool demos. */
(function () {
  var tip = document.createElement('div');
  tip.className = 'tipx'; tip.setAttribute('role', 'tooltip');
  document.body.appendChild(tip);
  var cur = null;
  function show(el) {
    var t = el.getAttribute('data-tip'); if (!t) return;
    cur = el; tip.textContent = t; tip.classList.add('on');
    var r = el.getBoundingClientRect(), tw = tip.offsetWidth, th = tip.offsetHeight;
    var x = Math.max(8, Math.min(r.left + r.width / 2 - tw / 2, innerWidth - tw - 8)), y = r.top - th - 8;
    if (y < 8) y = r.bottom + 8;
    tip.style.left = x + scrollX + 'px'; tip.style.top = y + scrollY + 'px';
  }
  function hide() { cur = null; tip.classList.remove('on'); }
  document.addEventListener('mouseover', function (e) {
    var el = e.target.closest && e.target.closest('[data-tip]');
    if (el && el !== cur) show(el); else if (!el && cur) hide();
  });
  document.addEventListener('focusin', function (e) { var el = e.target.closest && e.target.closest('[data-tip]'); if (el) show(el); });
  document.addEventListener('focusout', hide);
  addEventListener('scroll', hide, {passive: true});

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-cite]'); if (!b) return;
    var done = function () { var o = b.textContent; b.textContent = 'Copied'; setTimeout(function () { b.textContent = o; }, 1400); };
    if (navigator.clipboard) navigator.clipboard.writeText(b.getAttribute('data-cite')).then(done, done); else done();
  });

  // the nav ends where the content column ends, on every page (a visual shift; the theme's own nav fitting is untouched)
  function align() {
    var links = [].slice.call(document.querySelectorAll('#site-nav .visible-links > li:not(.masthead__menu-item--lg)'));
    links.forEach(function (li) { li.style.left = ''; });
    var wrap = document.querySelector('.masthead__inner-wrap');
    if (!links.length || !wrap || !matchMedia('(min-width: 64em)').matches) return;
    var r = wrap.getBoundingClientRect(), pr = parseFloat(getComputedStyle(wrap).paddingRight) || 0;
    var last = links[links.length - 1].querySelector('a').getBoundingClientRect().right;
    var btn = document.querySelector('#site-nav button');
    var target = r.right - pr - (btn && btn.offsetParent && !btn.classList.contains('hidden') ? btn.offsetWidth + 16 : 0);
    var shift = target - last;
    if (shift > 0) links.forEach(function (li) { li.style.position = 'relative'; li.style.left = shift + 'px'; });
  }
  align(); addEventListener('resize', function () { setTimeout(align, 0); }); addEventListener('load', align);

  // tool demos: a tab picks the clip; clips play only while visible
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (en) { var v = en.target; if (en.isIntersecting && !reduce) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else v.pause(); });
  }, {threshold: .25}) : null;
  document.querySelectorAll('.tl-full').forEach(function (t) {
    var media = t.querySelector('.tl-media'), tabs = [].slice.call(t.querySelectorAll('.tl-tab'));
    function pick(b) {
      tabs.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      var cap = b.getAttribute('data-tip') || '';
      if (b.dataset.video) {
        media.innerHTML = '<video muted loop playsinline preload="metadata"' + (reduce ? ' controls' : '') + ' poster="' + b.dataset.poster + '" src="' + b.dataset.video + '" aria-label="' + cap + '"></video>';
        var v = media.querySelector('video'); if (io) io.observe(v); else if (!reduce) v.play();
      } else media.innerHTML = '<img src="' + b.dataset.img + '" alt="' + cap + '" loading="lazy">';
    }
    tabs.forEach(function (b) { b.addEventListener('click', function () { pick(b); }); });
    // nothing loads until the reader opens the demos
    var box = t.querySelector('.tl-more');
    if (box) box.addEventListener('toggle', function () {
      if (box.open && tabs.length && !media.firstChild) pick(tabs[0]);
      if (!box.open) media.querySelectorAll('video').forEach(function (v) { v.pause(); });
    });
    else if (tabs.length) pick(tabs[0]);
  });
})();
