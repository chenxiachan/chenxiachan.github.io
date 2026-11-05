---
layout: archive
title: "Publications and works"
permalink: /publications/
author_profile: true
redirect_from:
  - /projects/
---

{% include base_path %}


<h2 class="pub-group pub-first" id="tools">Open-source tools</h2>
<div class="hv" markdown="0">
{% include tools.html %}
</div>

<div class="pub-viewbar" markdown="0"><span class="xr-mode" role="group" aria-label="Order publications"><button type="button" data-view="topic" aria-pressed="true">by alignment</button><button type="button" data-view="year" aria-pressed="false">by year</button></span><a class="pub-scholar" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener" data-tip="All publications on Google Scholar" aria-label="Google Scholar"><i class="ai ai-google-scholar"></i></a></div>

<div class="pub-view" id="view-topic" markdown="0">
{% for g in site.data.alignments %}
{% assign pubs = site.publications | where: "alignment", g.key | sort: "date" | reverse %}
{% if pubs.size > 0 %}
<h2 class="pub-group" id="alignment-{{ g.key | downcase }}">{{ g.name }}{% if g.intro != "" %} <i class="fas fa-info-circle pub-gi" data-tip="{{ g.intro }}" tabindex="0" aria-label="{{ g.intro }}"></i>{% endif %}</h2>
{% for post in pubs %}{% include publication-item.html %}{% endfor %}
{% endif %}
{% endfor %}
</div>

<div class="pub-view" id="view-year" hidden markdown="0">
{% assign bydate = site.publications | sort: "date" | reverse %}{% assign current = "" %}
{% for post in bydate %}{% if post.status %}{% assign y = "Under review" %}{% else %}{% capture y %}{{ post.date | date: "%Y" }}{% endcapture %}{% endif %}{% if y != current %}<h2 class="pub-group">{{ y }}</h2>{% assign current = y %}{% endif %}{% include publication-item.html %}{% endfor %}
</div>

<script>
(function () {
  var views = {topic: document.getElementById('view-topic'), year: document.getElementById('view-year')};
  var btns = document.querySelectorAll('.pub-viewbar [data-view]');
  function show(v) {
    for (var k in views) views[k].hidden = k !== v;
    btns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.view === v)); });
  }
  btns.forEach(function (b) { b.addEventListener('click', function () { show(b.dataset.view); history.replaceState(null, '', b.dataset.view === 'year' ? '#by-year' : location.pathname); }); });
  if (location.hash === '#by-year') show('year');
  else if (/^#alignment-/.test(location.hash)) show('topic');
})();
</script>
