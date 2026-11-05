---
layout: archive
title: "Publications and works"
permalink: /publications/
author_profile: true
redirect_from:
  - /projects/
---

{% include base_path %}

Open-source tools first, then publications grouped by the four alignments of my research. A paper can serve more than one alignment; it is listed under its main one. The full list is also on <a href="{{ site.author.googlescholar }}">Google Scholar</a>.

<h2 class="pub-group" id="tools">Open-source tools</h2>
<div class="hv" markdown="0">
{% include tools.html %}
</div>

{% for g in site.data.alignments %}
{% assign pubs = site.publications | where: "alignment", g.key | sort: "date" | reverse %}
{% if pubs.size > 0 %}
<h2 class="pub-group" id="alignment-{{ g.key | downcase }}">{{ g.name }}</h2>
{% if g.intro != "" %}<p class="pub-intro">{{ g.intro }}</p>{% endif %}
{% for post in pubs %}{% include publication-item.html %}{% endfor %}
{% endif %}
{% endfor %}
