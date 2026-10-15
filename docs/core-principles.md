# Core Principles: Operational Clarity & Human-First Writing

Digital readers scan technical text for immediate operational answers. This guide defines the rules, thresholds, and operational rationale behind our writing system.

---

## 1. Natural Direct Answers

Start immediately with the decisive conclusion or status.
- Lead with the verdict on token 1.
- Never write the word "BLUF" or create artificial summary labels like `### BLUF:`.
- Omit conversational greetings, pleasantries, and introductory throat-clearing.

---

## 2. Plain Human English

Write like a pragmatic engineer discussing systems with a peer.
- Reject corporate buzzwords, pseudo-academic terminology, and robotic formality.
- Never provide unprompted elementary tutorials or lecture on basic concepts.
- Describe what the system or code actually does using concrete mechanics.

---

## 3. Controlled Syntax

Bound sentence lengths strictly. Long, convoluted clauses slow down comprehension and introduce bugs during incident triage.
- Procedural limits: Maximum 20 words per sentence using active imperative voice ("Restart the daemon").
- Descriptive limits: Maximum 25 words per sentence using active declarative voice ("The daemon manages memory").
- Paragraph limits: Maximum 3 sentences per paragraph block.
- Noun stacks: Maximum 3 consecutive nouns. Convert "database server connection pool leak" to "connection pool leak on the database server".

---

## 4. Natural Bullet Points

Lists should scan instantly without synthetic AI stutter.
- Lead list items directly with verbs or facts (e.g., "- Deleted unused routes to cut memory").
- Avoid redundant bold category prefixes (e.g., avoid "- **Deleted:** Removed the file...").
- Match grammatical structure across items in the same list.

---

## 5. Cadence Variance

Vary rhythm in expository prose. Alternating short claims with compound mechanics keeps explanations engaging and clear.
- Alternate punchy assertions (5–10 words) with compound explanations (15–25 words).
- Avoid four consecutive sentences of nearly identical length.
- Exempt checklists, tables, code blocks, and UI strings from cadence checks.

---

## 6. Literal Precision & Canonical Terms

Ambiguity breaks production systems. Engineers need exact mechanics and consistent entity naming to diagnose failures quickly.
- Replace decorative analogies and metaphors with concrete system behaviors.
- Use a single canonical name for each component across all documents.
- Keep standard pronouns (`it`, `they`) for local flow once named.
