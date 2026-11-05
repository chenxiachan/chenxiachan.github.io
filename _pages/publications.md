---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

Publications are grouped by the four alignments of my research. A paper can serve more than one alignment; it is listed under its main one. The full list is also on <a href="{{ site.author.googlescholar }}">Google Scholar</a>.

{% for g in site.data.alignments %}
{% assign pubs = site.publications | where: "alignment", g.key | sort: "date" | reverse %}
{% if pubs.size > 0 %}
<h2 class="pub-group" id="alignment-{{ g.key | downcase }}">{{ g.name }}</h2>
{% if g.intro != "" %}<p class="pub-intro">{{ g.intro }}</p>{% endif %}
{% for post in pubs %}{% include publication-item.html %}{% endfor %}
{% endif %}
{% endfor %}
