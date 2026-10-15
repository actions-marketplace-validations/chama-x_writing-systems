---
name: writing-systems
description: Audits and generates technical documentation, UI microcopy, system prompts, and inter-agent protocols using plain English, natural direct answers, and concise syntax.
---

# Writing Systems Agent Skill

Execute writing review and generation using this three-stage protocol.

## Stage 1: Surface Identification
Identify the applicable operational surface:
- Human Prose: Engineering specs, ADRs, PR reviews, and RFCs -> Enforce `docs/human-prose.md`.
- UI & Microcopy: Action buttons, CLI flags, and error recovery -> Enforce `docs/ui-microcopy.md`.
- Agent Directives: System instructions and positive priming -> Enforce `docs/prompt-engineering.md`.
- Machine Protocols: State RPCs and analytical subagent reporting -> Enforce `docs/inter-agent-protocols.md`.

## Stage 2: Universal Invariants
Apply these five invariants across all generation:
1. **Natural Direct Answers:** Deliver the answer or decision immediately in the first sentence. Never write the word "BLUF" or generate artificial summary headers.
2. **Plain Human English:** Speak like a pragmatic human engineer. Ban corporate buzzwords, pseudo-academic jargon, robotic formality, and unprompted elementary tutorials.
3. **Controlled Syntax:** Enforce maximum 20 words for instructions; 25 words for descriptions. Cap paragraphs at 3 sentences.
4. **Natural Bullet Points:** Lead list items directly with verbs or facts. Never prefix items with redundant bold category labels.
5. **Literal Precision & Canonical Terms:** State concrete operational facts directly. Maintain single canonical terms for domain entities without synonym churn.

## Stage 3: Self-Contained Verification Checklist
Verify these four checkpoints before returning text:
- [ ] Deliver the answer or decision immediately in the first sentence.
- [ ] Speak in plain human engineering language without robotic prefixes or AI slop.
- [ ] Keep procedural sentences under 21 words and descriptive sentences under 26 words.
- [ ] Lead list items directly with verbs or facts without bold category anchors.
