/* Filter of the works on the homepage: one filter at a time, either an alignment (A to D) or a field of application.
   Choosing one clears the other (the user, 2026-11-18: the two used to combine, which the page did not make clear).
   Public tools are works too: they join the results of a filter, and the list without a filter shows publications. */
(function () {
  document.querySelectorAll('.xr').forEach(function (root) {
    var items = [].slice.call(root.querySelectorAll('.xr-list > li'));
    var limit = +root.dataset.limit || 0, expanded = false;
    var f = null;   // null, {k: 'A'} or {d: 'ese'}
    var NAMES = {}, DOMS = {};
    root.querySelectorAll('.xr-card').forEach(function (c) { NAMES[c.dataset.k] = c.querySelector('b').textContent; });
    root.querySelectorAll('.hex').forEach(function (h) { DOMS[h.dataset.d] = h.querySelector('span').textContent.toLowerCase(); });
    var list = function (li, key) { return li.dataset[key] ? li.dataset[key].split(' ') : []; };
    var isTool = function (li) { return li.dataset.kind === 'tool'; };
    var pubs = items.filter(function (li) { return !isTool(li); }).length;
    var status = root.querySelector('.xr-status'), clear = root.querySelector('.xr-clear'), more = root.querySelector('.xr-more');
    var cards = [].slice.call(root.querySelectorAll('.xr-card')), hexes = [].slice.call(root.querySelectorAll('.hex'));

    function matches(li) {
      if (!f) return !isTool(li);
      return f.k ? list(li, 'al').indexOf(f.k) > -1 : list(li, 'dom').indexOf(f.d) > -1;
    }
    function apply() {
      var match = 0, tools = 0, shown = 0;
      items.forEach(function (li) {
        var ok = matches(li);
        if (ok) { match++; if (isTool(li)) tools++; }
        var vis = ok && (f || expanded || !limit || match <= limit);
        li.hidden = !vis;
        if (vis) shown++;
        li.querySelectorAll('.xr-s i[data-k]').forEach(function (b) { b.classList.toggle('on', !!f && b.dataset.k === f.k); });
      });
      cards.forEach(function (c) { c.setAttribute('aria-pressed', String(!!f && c.dataset.k === f.k)); });
      hexes.forEach(function (h) { h.setAttribute('aria-pressed', String(!!f && h.dataset.d === f.d)); });
      root.classList.toggle('is-filtering', !!f);
      var n = match + ' work' + (match === 1 ? '' : 's');
      var t = tools ? ', including ' + tools + ' public tool' + (tools === 1 ? '' : 's') : '';
      status.textContent = f ? (f.k ? n + ' in ' + f.k + ' · ' + NAMES[f.k] : n + ' applied in ' + DOMS[f.d]) + t
        : (shown < pubs ? 'Latest ' + shown + ' of ' + pubs + ' publications' : 'All ' + pubs + ' publications');
      clear.hidden = !f;
      if (more) more.hidden = !!f || expanded;
    }
    cards.forEach(function (c) {
      c.addEventListener('click', function () { f = f && f.k === c.dataset.k ? null : {k: c.dataset.k}; apply(); });
      c.addEventListener('mouseenter', function () { root.classList.add('hl-' + c.dataset.k); });
      c.addEventListener('mouseleave', function () { root.classList.remove('hl-' + c.dataset.k); });
    });
    hexes.forEach(function (h) {
      h.addEventListener('click', function () { f = f && f.d === h.dataset.d ? null : {d: h.dataset.d}; apply(); });
    });
    clear.addEventListener('click', function () { f = null; apply(); });
    var all = root.querySelector('.xr-all');
    if (all) all.addEventListener('click', function () { expanded = true; apply(); });
    // hovering a work lights up its alignments and fields
    items.forEach(function (li) {
      li.addEventListener('mouseenter', function () {
        list(li, 'dom').forEach(function (d) { root.querySelectorAll('.hex[data-d="' + d + '"]').forEach(function (h) { h.classList.add('hit'); }); });
        list(li, 'al').forEach(function (k) { root.querySelectorAll('.xr-card[data-k="' + k + '"]').forEach(function (c) { c.classList.add('hit'); }); });
      });
      li.addEventListener('mouseleave', function () { root.querySelectorAll('.hit').forEach(function (c) { c.classList.remove('hit'); }); });
    });
    apply();
  });
})();
