---
permalink: /
title: "About me"
excerpt: "Welcome"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
  - /talks/
---

<div class="hv hv-a" markdown="0">
<section class="hv-hero">
<div class="hv-text"><p class="hv-lead">I investigate <strong>Human-AI Alignment</strong>: how AI systems can keep people’s decisions, knowledge and attention in the loop, so that they extend what people can understand, decide and discover.</p><p class="hv-role">Postdoctoral Fellow at the <a href="https://www.mdsi.tum.de/mdsi/startseite/">Munich Data Science Institute</a> and the <a href="https://www.mdsi.tum.de/gni/startseite/">Georg Nemetschek Institute</a>, Technical University of Munich, selected through the TUM GNI Postdoc Program.</p><p class="hv-links"><a href="/year-archive/">Research blog</a><a href="/publications/">Publications &amp; works</a><a href="/cv/">CV</a><a href="https://scholar.google.com/citations?user=dNEQ7yYAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a></p></div>
<figure class="hv-art"><img src="/images/human-machine.png" width="438" height="438" alt="A human face and a machine face in profile, facing each other"></figure>
</section>
<h2 class="hv-h">Four alignments</h2>
<section class="xr" data-ui="cards" data-limit="8">
<div class="xr-cards"><button type="button" class="xr-card" data-k="A" aria-pressed="false" data-tip="Model assistance that follows how people decide under uncertainty."><span class="xr-k k-a">A</span><b>Decision-making process</b><span class="xr-n">{% assign n = site.publications | where_exp: "p", "p.alignments contains 'A'" | size %}{{ n }} works</span></button><button type="button" class="xr-card" data-k="B" aria-pressed="false" data-tip="Knowledge-integrated machine learning in three levels: interpolation, extrapolation, representation."><span class="xr-k k-b">B</span><b>Methodological paradigm</b><span class="xr-n">{% assign n = site.publications | where_exp: "p", "p.alignments contains 'B'" | size %}{{ n }} works</span></button><button type="button" class="xr-card" data-k="C" aria-pressed="false" data-tip="Outputs people can read and check, and a wider bandwidth between person and machine."><span class="xr-k k-c">C</span><b>Interaction pattern</b><span class="xr-n">{% assign n = site.publications | where_exp: "p", "p.alignments contains 'C'" | size %}{{ n }} works</span></button><button type="button" class="xr-card" data-k="D" aria-pressed="false" data-tip="Bringing the fundamental mechanisms of machine learning closer to those of the human brain."><span class="xr-k k-d">D</span><b>Fundamental mechanism</b><span class="xr-n">{% assign n = site.publications | where_exp: "p", "p.alignments contains 'D'" | size %}{{ n }} works</span></button></div>
<div class="xr-domains"><p class="xr-dh">Applied in</p><div class="hex-wrap"><div class="hex-map"><button type="button" class="hex hx-eng" data-d="ese" aria-pressed="false" data-tip="AI for engineering" style="left:0px;top:57px"><span>Energy system engineering</span><em>{% assign n = site.publications | where_exp: "p", "p.domains contains 'ese'" | size %}{{ n }}</em></button><button type="button" class="hex hx-eng" data-d="ad" aria-pressed="false" data-tip="AI for engineering" style="left:104px;top:0px"><span>Architecture design</span><em>{% assign n = site.publications | where_exp: "p", "p.domains contains 'ad'" | size %}{{ n }}</em></button><button type="button" class="hex hx-su" data-d="su" aria-pressed="false" data-tip="AI for sustainability and materials science" style="left:104px;top:114px"><span>Sustainability</span><em>{% assign n = site.publications | where_exp: "p", "p.domains contains 'su'" | size %}{{ n }}</em></button><button type="button" class="hex hx-be" data-d="be" aria-pressed="false" data-tip="AI for the built environment" style="left:208px;top:57px"><span>Built environment</span><em>{% assign n = site.publications | where_exp: "p", "p.domains contains 'be'" | size %}{{ n }}</em></button><button type="button" class="hex hx-su" data-d="md" aria-pressed="false" data-tip="AI for sustainability and materials science" style="left:208px;top:171px"><span>Material discovery</span><em>{% assign n = site.publications | where_exp: "p", "p.domains contains 'md'" | size %}{{ n }}</em></button><button type="button" class="hex hx-be" data-d="hf" aria-pressed="false" data-tip="AI for the built environment" style="left:312px;top:0px"><span>Human factor analysis</span><em>{% assign n = site.publications | where_exp: "p", "p.domains contains 'hf'" | size %}{{ n }}</em></button><button type="button" class="hex hx-bm" data-d="bm" aria-pressed="false" data-tip="AI for medicine" style="left:312px;top:114px"><span>Biomedical application</span><em>{% assign n = site.publications | where_exp: "p", "p.domains contains 'bm'" | size %}{{ n }}</em></button></div><ul class="hex-legend"><li class="hx-eng"><i></i>AI for engineering</li><li class="hx-be"><i></i>AI for the built environment</li><li class="hx-su"><i></i>AI for sustainability and materials science</li><li class="hx-bm"><i></i>AI for medicine</li></ul></div></div>
<div class="xr-bar"><span class="xr-status" aria-live="polite"></span>
<span class="xr-mode" role="group" aria-label="Match" hidden><button type="button" data-mode="all" aria-pressed="true">all selected</button><button type="button" data-mode="any" aria-pressed="false">any selected</button></span>
<button type="button" class="xr-clear" hidden>Clear</button></div>
{% include cross-items.html %}
<p class="xr-more"><button type="button" class="xr-all">Show all {{ site.publications.size }} works</button></p>
</section>
<h2 class="hv-h">Open-source tools</h2>
{% include tools.html %}
</div>


I received my Dr.-Ing. *summa cum laude* from Leibniz University Hannover, after doctoral research at TU Berlin and Leibniz University Hannover with [Prof. Dr.-Ing. Philipp Geyer](https://www.iek.uni-hannover.de/de/ngs/team/prof-dr-philipp-geyer) and [Prof. Dr. rer. nat. Marius Lindauer](https://www.ai.uni-hannover.de/de/lindauer); the dissertation, *Beyond Predictions* ([thesis](https://doi.org/10.15488/17976) · [video](https://youtu.be/rwQaqewhqSw?si=abgUfUtCfdcIhGmH)), set out the first three alignments. In early 2024, I was a Visiting Scholar at the [Center for the Built Environment (CBE)](https://cbe.berkeley.edu/), UC Berkeley, exploring causal inference and AI ethics in engineering reasoning. In 2026, I was an Invited Scholar at the Summer Institute on Bounded Rationality, [Max Planck Institute for Human Development](https://www.mpib-berlin.mpg.de/en), Berlin.

I am also a photographer, capturing the balance between light, motion, and silence: [gallery](https://500px.com/chatchan92).

<div class="hv" markdown="0">
<h2 class="hv-h" id="news">News</h2>
<ul class="hv-news">{% assign items = site.talks | concat: site.posts | concat: site.news | sort: "date" | reverse %}{% for p in items limit: 10 %}<li><span class="d">{% if p.collection == "posts" or p.collection == "news" %}{{ p.date | date: "%b %Y" }}{% else %}{{ p.date | date: "%Y" }}{% endif %}</span><span class="ni">{% if p.collection == "posts" %}<i class="fas fa-pen-nib" data-tip="Blog post" aria-label="Blog post"></i>{% elsif p.collection == "news" %}<i class="fas fa-flask" data-tip="{{ p.kind }}" aria-label="{{ p.kind }}"></i>{% else %}<i class="fas fa-microphone-alt" data-tip="{{ p.type }}" aria-label="{{ p.type }}"></i>{% endif %}</span><span>{% if p.collection == "news" %}<a href="{{ p.link }}" target="_blank" rel="noopener">{{ p.title }}</a>{% if p.note %}<span class="ne">{{ p.note }}</span>{% endif %}{% elsif p.collection == "posts" %}<a href="{{ p.url }}">{{ p.title }}</a>{% if p.excerpt %}<span class="ne">{{ p.excerpt | strip_html | strip }}</span>{% endif %}{% else %}{{ p.title }}, <i>{{ p.venue }}</i>{% endif %}</span></li>{% endfor %}</ul>
</div>

<script src="/assets/js/cross-index.js" defer></script>
