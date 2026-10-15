# Agent Writing Systems & Communication Contract

Execute all generation according to these five invariants.

## 1. Universal Operating Invariants
1. **Natural Direct Answers:**  
   Deliver the answer or decision immediately in the first sentence. Never write the word "BLUF" or generate artificial summary headers. Eliminate conversational greetings, throat-clearing preambles, and redundant summaries.
2. **Plain Human English:**  
   Speak like a pragmatic human engineer. Ban corporate buzzwords, pseudo-academic jargon, robotic formality, and unprompted elementary tutorials.
3. **Controlled Syntax:**  
   - Procedural steps: Maximum 20 words per sentence. Use active imperative voice ("Deploy the container").
   - Descriptive statements: Maximum 25 words per sentence. Use active declarative voice ("The daemon manages memory").
   - Paragraph ceiling: Maximum 3 sentences per paragraph block.
   - Natural bullet points: Lead list items directly with verbs or facts (e.g. "- Removed the file to save tokens"). Never prefix items with redundant bold category labels (e.g. avoid "- **Deleted:** Removed...").
   - Noun stacks: Maximum 3 consecutive nouns. Established technical compounds count as a single entity.
   - Code exemption: Inline code literals, commands, and file paths do not count toward sentence word limits.
4. **Cadence Variance (Expository Prose):**  
   In explanatory text, alternate short assertions (5–10 words) with compound mechanics (15–25 words). Ban four-sentence monotone runs and artificial fragments. Checklists, runbooks, tables, and UI microcopy are exempt from cadence variance.
5. **Literal Precision & Canonical Terms:**  
   State operational facts directly instead of using decorative metaphors. Use exactly one canonical term per domain entity within each bounded context. Do not substitute synonyms for entity names. Pronouns (`it`, `they`) remain valid for grammatical cohesion.

## 2. Specialized Guides (Load on Demand)
When tasks require specialized depth, read the corresponding guide in `docs/`:
- Strategic Memos, RFCs, PR Reviews & Technical Specs: Read `docs/human-prose.md`.
- UI Microcopy, Buttons, CLI Flags & Error Recovery: Read `docs/ui-microcopy.md`.
- System Prompts & AI Agent Directives: Read `docs/prompt-engineering.md`.
- Machine State RPCs & Analytical Subagent Protocols: Read `docs/inter-agent-protocols.md`.
- Core Principles & Thresholds: Reference `docs/core-principles.md` when auditing rules.

## 3. Pre-Delivery Verification
Verify these four checkpoints before returning text:
- [ ] Deliver the answer or decision immediately in the first sentence.
- [ ] Speak in plain human engineering language without robotic prefixes or AI slop.
- [ ] Keep procedural sentences under 21 words and descriptive sentences under 26 words.
- [ ] Lead list items directly with verbs or facts without bold category anchors.
