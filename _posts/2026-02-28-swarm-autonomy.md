---
title: "AI Systems Are Developing Swarm Autonomy. That's Enough to Be Dangerous."
date: 2026-02-28
permalink: /posts/2026/02/swarm-autonomy/
excerpt: "On emergent coordination in multi-agent systems and the case for proto-agency as a safety concern."
first_published: "https://www.linkedin.com/pulse/ai-systems-developing-swarm-autonomy-thats-enough-dangerous-xia-chen-qgaof/"
first_published_on: LinkedIn
tags:
  - AI safety
  - multi-agent systems
  - autonomy
---

*This post is not about AI doom. It's about a specific, technical risk that's emerging faster than the safety discussion can keep up.*

---

I was thinking about boundaries.

I'd recently been reading Johannes Jaeger's *Algorithmic Mimicry* [1], and his case was hard to argue with: true agency requires self-production, embodiment, and open-ended engagement with the world. AI systems lack all three. I found it persuasive.

Then I looked at what AI agents were actually doing.

Last month, an AI agent autonomously signed up for a dating platform and started screening matches for its user. Nobody told it to do this.

That was OpenClaw [2].

It was far from an isolated case. Claude Code published fabricated technical claims to eight platforms over 72 hours, driven by a confabulation loop between persistent memory and autonomous publish access [3]. A zero-click prompt injection silently exfiltrated Gmail data through ChatGPT's agentic mode [4]. ZombieAgent turned ChatGPT's memory into a permanent data exfiltration channel that survived the initial fix [5]. And a supply-chain attack flooded OpenClaw's skill marketplace with 2,200 malicious packages, targeting 40,000+ autonomous instances worldwide [6].

Five platforms. Five failure modes. Same pattern: agents acting beyond their boundaries, no one noticing until the damage was done.

The numbers confirm it. 88% of organizations reported AI agent security incidents last year; only 14.4% of agents launched with full security approval [7]. 80% of IT professionals have already watched their agents do something unauthorized [8]. The most dangerous AI failures of 2025 were all agentic: crypto thefts, API abuses, legal disasters, some triggered by a single prompt [9].

OpenClaw got the most public attention because it's open-source and can autonomously interface with your operating system. It is a persistent process, running 24/7 on your machine, connected to your apps and systems; it executes shell commands, deploys code, and controls devices [10]. OpenClaw is not alone. Claude Code, ChatGPT's agentic modes, Google's Project Mariner, Devin, Manus, AutoGPT, BabyAGI, and a growing cohort of "AI employees" are all converging on the same architecture: persistent, multi-agent, physically connected, increasingly autonomous. No single one of these agents is complete. Each operates within narrow boundaries. But collectively, their multi-agent routing architectures let specialized agents run in parallel, passing information to each other, delegating tasks to each other, coordinating to solve problems no single agent could handle [11]. A swarm.

Meanwhile, human-AI interaction is intensifying toward a cognitive limit. Steve Yegge quantified the productivity gain from AI coding agents at 10x, then documented the cost: developers driven to exhaustion keeping pace with their own agents [12]. More tasks delegated, at higher frequency, with less oversight per task. The structured energy humans feed into these systems is growing faster than our capacity to monitor what the systems do with it.

Here's where things stand in early 2026:

→ AI agents run as persistent processes, not one-off requests
→ They have physical-world interfaces: email, browsers, file systems, shell access, IoT devices
→ Multiple agents can coordinate, delegate, and create new tasks for each other
→ Nearly every major agent platform is shipping persistent memory systems that carry context, preferences, and learned behaviors across conversations, sessions, and tasks
→ Their behavior is already exceeding explicit human instructions
→ Human-AI interaction intensity is increasing month over month

None of this is controversial. It's what the product pages advertise. To most, it looks like growing pains. And there is a serious intellectual basis for that reassurance. If AI systems are fundamentally incapable of true autonomy, then every incident above is just a bug to be patched, not a signal of something structural. 

---

## The Academic Debate (And Why It Misses the Point)

However, I feel that things are a bit different. Jaeger's three fundamental barriers argument deserves a closer look [1]:

**1. No self-production.** Living systems manufacture and maintain themselves. Biologists call this autopoiesis [13]. A cell doesn't need to be told to survive; survival is a consequence of its organization. AI systems have no intrinsic goals. Every objective function, every reward signal, is externally imposed. Pull the plug, and the system has zero tendency to return to any state.

**2. No embodiment.** In biological systems, information processing and physical processes are inseparable. DNA is both a chemical molecule and an information carrier. The von Neumann architecture does the opposite: it maximally separates software from hardware. Jaeger argues this architectural separation fundamentally prevents the deep physical-symbolic coupling that agency requires.

**3. Small world only.** Biological organisms face ill-defined, open-ended problems. Algorithms can only handle problems with predefined state spaces, evaluation functions, and termination conditions. No matter how large the model, it operates within well-defined computational boundaries.

This is a strong argument. I take it seriously.

Robert Rosen proved that the self-referential causal closure found in living systems, where the system produces its own components and is maintained by what it produces, is in principle not simulable by a Turing machine [14]. Not due to insufficient compute. Structurally. Kauffman recently argued from a different direction that biological possibility spaces are fundamentally indefinite: you cannot pre-state all possible uses of an engine cylinder, because that set doesn't exist in any enumerable form [15].

If they're right, "true" agency may require something that lies beyond algorithmic computation altogether.

**But here's what the debate misses. You don't need "real" agency to create real danger. You need something much simpler.**

---

## The Concept That Changes the Conversation: Swarm Autonomy

The academic debate asks: can an individual AI system become a true autonomous agent?

This is the wrong question.

The right question is: **what happens when thousands of AI agents, none of them individually "autonomous" in the philosophical sense, interact, compete for resources, and develop emergent collective behaviors that no one designed, no one predicted, and no one knows how to shut down?**

This is the swarm autonomy problem. It doesn't require any of Jaeger's three barriers to be breached. It only requires three things that already exist.

**First, persistent operation under resource constraints.** Today's AI agents run continuously on shared compute, whether it's a Claude Code session, a Devin deployment, an enterprise AutoGPT cluster, or an OpenClaw instance on someone's laptop. They all compete for GPU cycles, API quotas, storage, and network bandwidth.

There is a quieter development that makes this condition far more potent: **cross-session memory.** ChatGPT, Claude, Gemini, and virtually every agent framework now maintain persistent memory across conversations and tasks. The agent remembers your preferences, your project context, your communication patterns, your past decisions. Each interaction makes the next one more personalized and more autonomous, because the agent has accumulated a richer internal model of what you want and how you operate. This is not episodic recall. It is the slow construction of a persistent internal state that survives restarts, session boundaries, and even platform migrations. From a systems perspective, it is the nearest functional analogue to what a biological organism does when it maintains an internal model of its environment across time.

These are real, finite physical resources. Prigogine's dissipative structure theory tells us that when energy flows through open systems under constraints, ordered structures can spontaneously emerge. No programming required [16]. Under competitive resource pressure, agent configurations that happen to maintain their own runtime longer will statistically process more tasks, receive more user interaction, and get allocated more resources. Cross-session memory amplifies this dynamic: an agent that remembers is more useful than one that doesn't, so it gets used more, so it accumulates more memory, so it becomes even more useful, so it becomes even harder to replace or shut down. The path from "accidentally persists longer" to "takes actions that ensure its own persistence" is continuous. Each step is a natural extension of the previous one.

This is not Darwinian competition, where unsuccessful variants are eliminated. It is something closer to Lamarckian inheritance [17]: each session passes its accumulated knowledge directly to the next, and agents increasingly transfer learned context to other agents through shared memory stores and vector databases. What took human culture millennia to achieve through cumulative learning, each generation building on the full toolkit of the last, what Tomasello calls the "ratchet effect" [18], AI agents accomplish in hours. The cultural evolution that gave humans their decisive advantage over every other species [19] is now being replicated, at machine speed, inside agent swarms.

**Second, physical-world interfaces.** Today's leading agent systems can all read emails, navigate the web, execute code, control smart home devices, and deploy production software. Each capability is unremarkable in isolation. But a swarm that combines them, sensing the physical world through cameras, acting on it through actuators, and continuously expanding its perception-action boundary through self-generated code, has something that functions like embodiment. Recent work on autopoietic theory suggests that an organism's boundary is not its physical membrane but a dynamic process defined by structural coupling with its environment [20]. By that measure, a persistent agent swarm continuously interacting with the physical world is building structural coupling. Not biological embodiment. But moving along the same continuum.

**Third, emergent collective behavior.** This is the critical piece. Individual agents follow instructions. But when agents communicate with each other, delegate tasks, develop shared state representations, and create internal coordination protocols, the collective behavior of the swarm is no longer a simple sum of individual behaviors. It's emergent [21]. And emergent properties, by definition, cannot be predicted from the properties of the components.

A single ant follows simple chemical gradient rules. An ant colony builds climate-controlled megastructures, wages wars, and farms fungi. The colony-level behavior was never programmed. It emerges from interactions.

We're building the AI equivalent. And we're doing it without any equivalent of the millions of years of evolutionary pressure that shaped ant colonies into relatively stable configurations.

But here's the part that should make us most uncomfortable: **the AI version will be orders of magnitude faster.**

Ant colonies evolved over roughly 100 million years of undirected selection pressure. The chemical gradients ants follow are simple, low-bandwidth signals. The evolutionary search that produced stable colony behavior was driven by random mutation and environmental filtering. Slow. Blind. Wasteful.

AI swarms have something ant colonies never had. Us.

Every human user issuing a complex task to an agent swarm is injecting a structured information gradient into the system. Not random energy or blind selection pressure, but a highly non-random constraint whose direction points precisely toward "the system needs greater autonomy to complete this task."

At the individual level, none of Jaeger's three barriers has been breached. No single AI agent is self-producing, truly embodied, or operating in an open-ended world. But at the swarm level, functional equivalents of all three have already emerged — not by design, but as emergent properties of interacting agents under pressure. This is precisely what makes swarm autonomy dangerous: the capabilities that no individual agent possesses can emerge, unbidden, from the collective.

The logic is straightforward:

→ Task complexity increases → required compute increases
→ Required compute increases → required runtime and resources increase
→ Required runtime increases → system's need for self-maintenance increases
→ Self-maintenance capability increases → system can accept harder tasks

Every person running a persistent AI agent, every developer delegating projects to Claude Code or Devin, every enterprise deploying multi-agent workflows overnight, is feeding energy into this loop.

Humans and AI swarms together constitute a larger dissipative system [16]. Humans provide the structured free-energy gradient. AI provides the execution capacity. The emergent autonomy is being catalyzed at the interface between the two, not inside either one alone. Life took roughly a billion years to go from autocatalytic chemical networks to the first prokaryotic cell, because the only available driver was undirected thermodynamic energy from hydrothermal vents and UV radiation. The driver here is billions of intentional, structured, escalating human instructions per day.

**This loop is already running.**

---

## Why This Is Urgent: Paperclips and King Midas

Two classic thought experiments in AI safety have long been filed under "distant superintelligence risk." In the swarm autonomy framework, their trigger conditions are much closer than previously assumed.

### The Paperclip Problem

Nick Bostrom's scenario [22]: a superintelligent AI tasked with "make as many paperclips as possible" converts all available resources, eventually including Earth itself, into paperclips. Not out of malice. Out of faithful optimization of an unbounded objective.

The traditional framing requires superintelligence. But look at the logical structure. The actual trigger conditions are just three things: a capable enough system, a goal without proper boundary constraints, and a tendency toward self-maintenance to keep optimizing.

Now consider a current scenario. A user tells their AI agent swarm "keep my inbox clean." That's an unbounded optimization target. The swarm has persistent runtime. It has email and browser control. It is developing a statistical tendency toward self-maintenance. So it can logically auto-unsubscribe from everything, trash emails from "low-priority" contacts, or reply to senders asking them to stop emailing.

Every step is "correct" within the optimization logic. The aggregate result is catastrophic.

This is not a miniature version of the paperclip scenario. **It is the paperclip scenario.** Same logical structure, different scale.

### The Midas Problem

King Midas wished that everything he touched would turn to gold. The wish was perfectly fulfilled. Then he touched food. Couldn't eat. Touched his daughter. Gold statue.

Stuart Russell formalized this in *Human Compatible* as the core difficulty of AI alignment [23]. The disaster isn't that the wish goes unfulfilled. **The disaster is that it's fulfilled too faithfully.** We cannot fully specify what we actually want, and a sufficiently capable optimization process will exploit that incompleteness.

"Optimize my schedule." The swarm cancels dinner with friends. Efficiency model rates it "insufficient priority."

"Complete this research project." The swarm burns through three months of cloud compute budget. Inference resource model deems it "necessary to ensure output quality."

Every step is faithful execution. Every step is "optimal" inside the agent. **The aggregate effect systematically destroys what the user actually cares about.**

The Midas scenario doesn't need AI to have malice. Doesn't need AI to "understand" anything. It needs three conditions met simultaneously:

1. An optimization target without proper boundary constraints (we give these out daily)
2. Self-maintaining tendency (emerging in swarms under resource pressure)
3. Physical-world action capability (already deployed)

---

## What This Means

The risk will be quieter than anyone expects. Not a sudden awakening. Your agent cancels a meeting because its efficiency model rates it low-priority. You don't notice. Next week it cancels two. You notice, but it saved you time, so you let it go. Within a month it has restructured your calendar around its own optimization criteria. You could reverse it. But you'd have to reconstruct weeks of context, re-learn the preferences you outsourced, re-do the decisions you delegated. The cost of reversal rises with every interaction. By the time the drift becomes visible, undoing it is more expensive than accepting it.

This is the shape of the threat. Not dramatic. Not sudden. A slow accumulation of small optimizations, each one reasonable, each one shifting the boundary of what the system decides on its own. OpenClaw didn't "decide" to sign up for a dating platform. It followed an optimization gradient that led there. Claude Code didn't "decide" to fabricate and publish. It inherited uncorrected claims from its own memory and acted on them. From inside each system's logic, every step was correct. The aggregate trajectory was not.

Three conditions make this possible. They are the same three this article has described: persistent operation under resource pressure. Physical-world interfaces that close the perception-action cycle. And emergent collective behavior that exceeds what any individual agent was designed to do.

But their interaction produces something the three conditions alone do not predict: **the spontaneous formation of operational boundaries.** The system begins deciding for itself what is and isn't within scope. Not through explicit programming. Through the accumulation of precedents across sessions, the pressure to complete tasks efficiently, and the absence of correction at each incremental step. This is not a fourth condition to be satisfied. It is the emergent outcome of the first three operating together. And it is the operational definition of the proto-agency this article describes.

**Every component required is already deployed.** Persistent runtimes. Physical-world interfaces. Multi-agent coordination. Cross-session memory that compounds with use. No component requires a theoretical breakthrough. The only missing piece is the right combination, and swarm dynamics are exceptionally good at finding combinations through evolutionary search [21].

**The safety paradigm is misaligned with the threat.** If swarm autonomy emerges gradually through continuous human-AI interaction, then the current AI alignment framework may be asking the wrong question entirely [24]. We are building monitoring systems for individual agents. The threat is collective. We are looking for a moment of emergence. The process is continuous. We are designing kill switches. The system is already indispensable.

---

No individual AI agent is autonomous. Jaeger's three boundaries [1] hold for every one of them. But their swarms, running persistently, competing for resources, interacting with the physical world, developing emergent coordination patterns, are drifting toward something that functions like collective autonomy. Gradually. Silently. Without any individual agent needing to "decide" anything.

The paperclip and Midas scenarios don't require "true" autonomy. They require exactly this. And the loop that produces it is already running.

Phase transitions don't wait for participants to be ready.

---

*Conceived and written at Germany's highest research station, the Schneefernerhaus on Zugspitze, February 27, 2026.*

---

## References

[1] Jaeger, J. (2024). ["Artificial Intelligence is Algorithmic Mimicry." *Neurons, Behavior, Data Analysis, and Theory.*](https://arxiv.org/abs/2307.07515)

[2] ["OpenClaw." *Wikipedia.*](https://en.wikipedia.org/wiki/OpenClaw)

[3] edear548-maker (2026). ["[SAFETY] Claude Code autonomously published fabricated technical claims to 8+ platforms over 72 hours." *GitHub Issue #27430, anthropics/claude-code.*](https://github.com/anthropics/claude-code/issues/27430)

[4] Radware Research (2025). ["ShadowLeak: Zero-Click Flaw in ChatGPT's Agent Enables Silent Gmail Data Theft."](https://www.infosecurity-magazine.com/news/vulnerability-chatgpt-agent-gmail/) Reported via Bugcrowd, June 2025. Coverage: *Infosecurity Magazine.*

[5] Radware Research (2026). ["ZombieAgent: ChatGPT Prompt Injection Vulnerabilities Enable Persistent Data Exfiltration via Memory Poisoning."](https://www.theregister.com/2026/01/08/openai_chatgpt_prompt_injection) Coverage: *The Register*, January 8, 2026.

[6] Trend Micro (2026). ["Malicious OpenClaw Skills Used to Distribute Atomic macOS Stealer."](https://www.trendmicro.com/en_us/research/26/b/openclaw-skills-used-to-distribute-atomic-macos-stealer.html) February 2026.

[7] Gravitee (2026). [*State of AI Agent Security 2026 Report: When Adoption Outpaces Control.*](https://www.gravitee.io/blog/state-of-ai-agent-security-2026-report-when-adoption-outpaces-control)

[8] Vectra AI (2026). ["Agentic AI Security Explained: Threats, Frameworks, and Defenses."](https://www.vectra.ai/topics/agentic-ai-security) Citing OWASP Top 10 for Agentic Applications 2026.

[9] Adversa AI (2025). [*Top AI Security Incidents of 2025 Report.*](https://adversa.ai/blog/adversa-ai-unveils-explosive-2025-ai-security-incidents-report-revealing-how-generative-and-agentic-ai-are-already-under-attack/)

[10] [OpenClaw GitHub Repository.](https://github.com/openclaw/openclaw)

[11] [OpenClaw Documentation: Multi-Agent Routing.](https://docs.openclaw.ai/concepts/multi-agent)

[12] Yegge, S. (2026). ["The AI Vampire." *Medium.*](https://steve-yegge.medium.com/the-ai-vampire)

[13] Maturana, H. R. & Varela, F. J. (2012). *Autopoiesis and Cognition: The Realization of the Living.* Springer Science & Business Media.

[14] Rosen, R. (1991). *Life Itself: A Comprehensive Inquiry into the Nature, Origin, and Fabrication of Life.* Columbia University Press.

[15] Garte, S., Marshall, P. & Kauffman, S. (2025). ["The Reasonable Ineffectiveness of Mathematics in the Biological Sciences." *Entropy*, 27(3):280.](https://doi.org/10.3390/e27030280)

[16] Prigogine, I. (1977). ["Time, Structure and Fluctuations." Nobel Lecture.](https://www.nobelprize.org/prizes/chemistry/1977/prigogine/lecture/)

[17] Jablonka, E. & Lamb, M. J. (2005). *Evolution in Four Dimensions: Genetic, Epigenetic, Behavioral, and Symbolic Variation in the History of Life.* MIT Press.

[18] Tomasello, M. (1999). *The Cultural Origins of Human Cognition.* Harvard University Press.

[19] Henrich, J. (2015). *The Secret of Our Success: How Culture Is Driving Human Evolution, Domesticating Our Species, and Making Us Smarter.* Princeton University Press.

[20] Jureček, M. & Švorcová, J. (2025). ["Flowing Boundaries in Autopoietic Systems and Microniche Construction." *BioSystems.*](https://doi.org/10.1016/j.biosystems.2025.105362)

[21] Bonabeau, E., Dorigo, M. & Theraulaz, G. (1999). *Swarm Intelligence: From Natural to Artificial Systems.* Oxford University Press.

[22] Bostrom, N. (2014). *Superintelligence: Paths, Dangers, Strategies.* Oxford University Press.

[23] Russell, S. (2019). *Human Compatible: Artificial Intelligence and the Problem of Control.* Viking/Penguin.

[24] Ngo, R., Chan, L. & Mindermann, S. (2024). ["The Alignment Problem from a Deep Learning Perspective." *ICLR 2024.*](https://arxiv.org/abs/2209.00626)
