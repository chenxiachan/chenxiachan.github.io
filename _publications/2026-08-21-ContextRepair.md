---
title: "Context Repair for LLMs: Pilot v2"
collection: publications
permalink: /publication/2026-08-21-ContextRepair
excerpt: 'How a wrong claim keeps steering an LLM conversation after its source turn is deleted, and which graph edits remove it, tested on nine model endpoints with exact-match scoring.'
date: 2026-08-21
venue: 'Research report, ThoughtDAG'
kind: report
alignment: C
authors: 'Chen, X.'
paper: 'https://chenxiachan.github.io/thoughtdag/research/context-repair-pilot-v2/'
code: 'https://github.com/chenxiachan/thoughtdag/tree/main/benchmark'
citation: 'Chen, X. (2026). Context repair for LLMs: Pilot v2. Research report, ThoughtDAG. https://chenxiachan.github.io/thoughtdag/research/context-repair-pilot-v2/'
alignments: [A, C]
domains: []
---

**Summary**: <br>
Suppose an LLM conversation contains a wrong correction and you remove that turn. By then, later turns may already have repeated the error and calculated from it. This pilot measures what it takes to undo such an error. Each task is a short multi-turn conversation with one verifiable answer, built in five versions: clean, polluted, and three repairs a person can make on the conversation's dependency graph. Scoring is exact match on nine model endpoints from four vendors, with no model acting as judge.

Conflicting statements derailed every endpoint, while irrelevant asides carrying similar numbers never did. Among the 162 derailed outcomes, deleting only the source turn repaired 152, regenerating the downstream turns in dependency order repaired 161, and removing the contaminated subgraph repaired all 162. In a controlled ablation on one endpoint, switching reasoning off dropped source-only repair from 16 of 18 to 2 of 18, while regeneration stayed at 18 of 18. ThoughtDAG served as the reference interface for the graph edits.

[[Report]](https://chenxiachan.github.io/thoughtdag/research/context-repair-pilot-v2/)<br>
[[Case study]](https://chenxiachan.github.io/thoughtdag/stories/context-repair/)<br>
[[Benchmark and data]](https://github.com/chenxiachan/thoughtdag/tree/main/benchmark)<br>

**Citation**: <i>Chen, X. (2026). Context repair for LLMs: Pilot v2. Research report, ThoughtDAG. https://chenxiachan.github.io/thoughtdag/research/context-repair-pilot-v2/</i>
