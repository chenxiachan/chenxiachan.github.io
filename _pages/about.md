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
<div class="hv-text"><p class="hv-lead">I investigate <strong>Human-AI Alignment</strong>: how AI systems can keep people’s decisions, knowledge and attention in the loop, so that they extend what people can understand, decide and discover.</p><p class="hv-role">Postdoctoral Fellow at the <a href="https://www.mdsi.tum.de/mdsi/startseite/">Munich Data Science Institute</a> and the <a href="https://www.mdsi.tum.de/gni/startseite/">Georg Nemetschek Institute</a>, Technical University of Munich, selected through the TUM GNI Postdoc Program.</p><p class="hv-links"><a href="/publications/">Publications &amp; works</a><a href="/year-archive/">Research blog</a><a href="/cv/">CV</a><a href="https://scholar.google.com/citations?user=dNEQ7yYAAAAJ&hl=en">Google Scholar</a></p></div>
<figure class="hv-art"><img src="https://github.com/user-attachments/assets/567dc2f7-c7da-4723-aecb-433cc0571416" alt="A human face and a machine face in profile, facing each other"></figure>
</section>
<h2 class="hv-h">Four alignments</h2>
<p class="xr-help">A work often serves more than one alignment. Select one or more to cross-filter the works below.</p>
<section class="xr" data-ui="cards" data-limit="8">
<div class="xr-cards"><button type="button" class="xr-card" data-k="A" aria-pressed="false"><span class="xr-k k-a">A</span><b>Decision-making process alignment</b><span class="xr-d">Model assistance that follows how people decide under uncertainty.</span><span class="xr-n">{% assign n = site.publications | where_exp: "p", "p.alignments contains 'A'" | size %}{{ n }} works</span></button><button type="button" class="xr-card" data-k="B" aria-pressed="false"><span class="xr-k k-b">B</span><b>Methodological paradigm alignment</b><span class="xr-d">Knowledge-integrated machine learning in three levels: interpolation, extrapolation, representation.</span><span class="xr-n">{% assign n = site.publications | where_exp: "p", "p.alignments contains 'B'" | size %}{{ n }} works</span></button><button type="button" class="xr-card" data-k="C" aria-pressed="false"><span class="xr-k k-c">C</span><b>Interaction pattern alignment</b><span class="xr-d">Outputs people can read and check, and a wider bandwidth between person and machine.</span><span class="xr-n">{% assign n = site.publications | where_exp: "p", "p.alignments contains 'C'" | size %}{{ n }} works</span></button><button type="button" class="xr-card" data-k="D" aria-pressed="false"><span class="xr-k k-d">D</span><b>Fundamental mechanism alignment</b><span class="xr-d">How the temporal dynamics of inputs shape what a neural system computes.</span><span class="xr-n">{% assign n = site.publications | where_exp: "p", "p.alignments contains 'D'" | size %}{{ n }} works</span></button></div>
<div class="xr-bar"><span class="xr-status" aria-live="polite"></span>
<span class="xr-mode" role="group" aria-label="Match"><button type="button" data-mode="all" aria-pressed="true">all selected</button><button type="button" data-mode="any" aria-pressed="false">any selected</button></span>
<button type="button" class="xr-clear" hidden>Clear</button></div>
{% include cross-items.html %}
<p class="xr-more"><button type="button" class="xr-all">Show all works</button> · <a href="/publications/">Publications and works</a></p>
</section>
<h2 class="hv-h">Open-source tools</h2>
{% include tools.html %}
</div>

My doctoral dissertation, "*Beyond Predictions: Alignment between Prior Knowledge and Machine Learning for Human-centered Augmented Intelligence*", established the first three alignments as a top-down framework for integrating human and domain knowledge into data-driven systems; my postdoctoral research adds the fourth, bottom-up line on the mechanism of computation. Most of this work is tested in engineering, above all building energy and early-stage design; AI for Science is a growing second field. [Thesis](https://doi.org/10.15488/17976) · [Video](https://youtu.be/rwQaqewhqSw?si=abgUfUtCfdcIhGmH)

I received my Dr.-Ing. *summa cum laude* from Leibniz University Hannover, with doctoral research at TU Berlin and Leibniz University Hannover, supervised by [Prof. Dr.-Ing. Philipp Geyer (Heisenbergprofessor)](https://www.iek.uni-hannover.de/de/ngs/team/prof-dr-philipp-geyer) and [Prof. Dr. rer. nat. Marius Lindauer](https://www.ai.uni-hannover.de/de/lindauer). In early 2024, I was a Visiting Scholar at the [Center for the Built Environment (CBE)](https://cbe.berkeley.edu/), UC Berkeley, exploring causal inference and AI ethics in engineering reasoning.

I am also a photographer, capturing the balance between light, motion, and silence: [gallery](https://500px.com/chatchan92).

Beyond formal publications, I also write about the broader implications of AI alignment:
- [*What Cannot Yet Be Ruled Out*](/posts/2026/06/what-cannot-yet-be-ruled-out/): on bounded rationality, irreducible uncertainty, and what AI alignment must preserve.
- [*AI Systems Are Developing Swarm Autonomy. That's Enough to Be Dangerous.*](/posts/2026/02/swarm-autonomy/): on emergent coordination in multi-agent systems and the case for proto-agency as a safety concern.

<div class="hv" markdown="0">
<h2 class="hv-h" id="news">News</h2>
<ul class="hv-news">{% assign items = site.talks | concat: site.posts | sort: "date" | reverse %}{% for p in items limit: 10 %}<li><span class="d">{% if p.collection == "posts" %}{{ p.date | date: "%b %Y" }}{% else %}{{ p.date | date: "%Y" }}{% endif %}</span><span>{% if p.collection == "posts" %}New post: <a href="{{ p.url }}">{{ p.title }}</a>{% else %}{{ p.type }}: {{ p.title }}, <i>{{ p.venue }}</i>, {{ p.location }}{% endif %}</span></li>{% endfor %}</ul>
</div>

<script src="/assets/js/cross-index.js" defer></script>
