/* Cross-retrieval over papers that belong to several alignments (A to D). */
(function () {
  var NAMES = {A: 'Decision-making', B: 'Prior knowledge', C: 'Interaction', D: 'Mechanism'};
  document.querySelectorAll('.xr').forEach(function (root) {
    var items = [].slice.call(root.querySelectorAll('.xr-list > li'));
    var limit = +root.dataset.limit || 0, sel = [], mode = 'all', combo = null, expanded = false, dom = null;
    var DOMS = {}; root.querySelectorAll('.hex').forEach(function (h) { DOMS[h.dataset.d] = h.querySelector('span').textContent.toLowerCase(); });
    var doms = function (li) { return li.dataset.dom ? li.dataset.dom.split(' ') : []; };
    var als = function (li) { return li.dataset.al ? li.dataset.al.split(' ') : []; };
    var keyOf = function (a) { return a.join('') || '-'; };
    var status = root.querySelector('.xr-status'), clear = root.querySelector('.xr-clear'), more = root.querySelector('.xr-more');
    var toggles = [].slice.call(root.querySelectorAll('[data-k].xr-card, [data-k].xm-set'));

    function label() {
      if (combo !== null) return combo === '-' ? 'none of the four alignments' : 'only ' + combo.split('').join(' + ');
      if (!sel.length) return '';
      return sel.join(mode === 'all' ? ' and ' : ' or ');
    }
    function apply() {
      var match = 0, shown = 0, filtering = sel.length || combo !== null || dom !== null;
      items.forEach(function (li) {
        var a = als(li), ok = true;
        if (combo !== null) ok = keyOf(a) === combo;
        else if (sel.length) ok = mode === 'all' ? sel.every(function (k) { return a.indexOf(k) > -1; }) : sel.some(function (k) { return a.indexOf(k) > -1; });
        if (ok && dom !== null) ok = doms(li).indexOf(dom) > -1;
        if (ok) match++;
        var vis = ok && (filtering || expanded || !limit || match <= limit);
        li.hidden = !vis;
        if (vis) shown++;
        li.querySelectorAll('.xr-s i').forEach(function (b) { b.classList.toggle('on', sel.indexOf(b.dataset.k) > -1 || (combo !== null && combo.indexOf(b.dataset.k) > -1)); });
      });
      toggles.forEach(function (t) { t.setAttribute('aria-pressed', String(sel.indexOf(t.dataset.k) > -1)); });
      root.querySelectorAll('.xm-c').forEach(function (c) { c.setAttribute('aria-pressed', String(c.dataset.combo === combo)); });
      root.querySelectorAll('[data-mode]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.mode === mode)); });
      root.classList.toggle('is-filtering', !!filtering);
      root.querySelectorAll('.hex').forEach(function (h) { h.setAttribute('aria-pressed', String(h.dataset.d === dom)); });
      var lab = label(), where = dom !== null ? ' in ' + DOMS[dom] : '';
      status.textContent = filtering ? match + ' work' + (match === 1 ? '' : 's') + (lab ? ' involving ' + lab : '') + where
        : (shown < items.length ? 'Latest ' + shown + ' of ' + items.length + ' works' : 'All ' + items.length + ' works');
      clear.hidden = !filtering;
      if (more) more.hidden = filtering || expanded;
    }
    toggles.forEach(function (t) {
      t.addEventListener('click', function () {
        combo = null;
        var k = t.dataset.k, i = sel.indexOf(k);
        if (i > -1) sel.splice(i, 1); else sel.push(k);
        sel.sort();
        apply();
      });
      t.addEventListener('mouseenter', function () { root.classList.add('hl-' + t.dataset.k); });
      t.addEventListener('mouseleave', function () { root.classList.remove('hl-' + t.dataset.k); });
    });
    root.querySelectorAll('[data-mode]').forEach(function (b) { b.addEventListener('click', function () { mode = b.dataset.mode; apply(); }); });
    clear.addEventListener('click', function () { sel = []; combo = null; dom = null; apply(); });
    root.querySelectorAll('.hex').forEach(function (h) {
      h.addEventListener('click', function () { dom = dom === h.dataset.d ? null : h.dataset.d; apply(); });
    });
    var all = root.querySelector('.xr-all');
    if (all) all.addEventListener('click', function () { expanded = true; apply(); });
    items.forEach(function (li) {
      li.addEventListener('mouseenter', function () { doms(li).forEach(function (d) { root.querySelectorAll('.hex[data-d="' + d + '"]').forEach(function (h) { h.classList.add('hit'); }); }); als(li).forEach(function (k) { root.querySelectorAll('[data-k="' + k + '"].xr-card, [data-k="' + k + '"].xm-set').forEach(function (c) { c.classList.add('hit'); }); }); });
      li.addEventListener('mouseleave', function () { root.querySelectorAll('.hit').forEach(function (c) { c.classList.remove('hit'); }); });
    });

    // UpSet-style combinations
    var box = root.querySelector('.xm-combos');
    if (box) {
      var counts = {};
      items.forEach(function (li) { var k = keyOf(als(li)); counts[k] = (counts[k] || 0) + 1; });
      var keys = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a] || a.length - b.length || (a < b ? -1 : 1); });
      var max = Math.max.apply(null, keys.map(function (k) { return counts[k]; }));
      keys.forEach(function (k) {
        var b = document.createElement('button');
        b.type = 'button'; b.className = 'xm-c'; b.dataset.combo = k; b.setAttribute('aria-pressed', 'false');
        b.title = (k === '-' ? 'Outside the four alignments' : 'Only ' + k.split('').map(function (x) { return x + ' ' + NAMES[x]; }).join(' + ')) + ': ' + counts[k];
        var on = 'ABCD'.split('').map(function (x) { return k.indexOf(x) > -1; });
        var first = on.indexOf(true), last = on.lastIndexOf(true);
        b.innerHTML = '<span class="xm-bar"><span style="height:' + Math.round(100 * counts[k] / max) + '%"><em>' + counts[k] + '</em></span></span>' +
          '<span class="xm-dots">' + (first > -1 && last > first ? '<span class="xm-link" style="top:' + (first * 26 + 13) + 'px;height:' + ((last - first) * 26) + 'px"></span>' : '') +
          on.map(function (v) { return '<i class="' + (v ? 'in' : '') + '"></i>'; }).join('') + '</span>';
        b.addEventListener('click', function () { combo = combo === k ? null : k; sel = []; apply(); });
        box.appendChild(b);
      });
    }
    apply();
  });
})();
