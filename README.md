# Writing Systems

**Make AI write clearly.** Cut the filler words, keep sentences short, and always lead with the answer.

[![CI](https://github.com/chama-x/writing-systems/actions/workflows/ci.yml/badge.svg)](https://github.com/chama-x/writing-systems/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-success.svg)](#)

---

## The Problem

AI assistants waste time and burn tokens with conversational fluff. They open with corporate buzzwords and robotic formality before reaching the point.

Writing Systems fixes this immediately. Drop a single rules file into your project. AI reads it and writes short, direct answers.

---

## See the Difference

```text
┌── ❌ BEFORE: Typical AI response (312 tokens) ─────────────────────────────────┐
│ "Certainly! In today's fast-paced cloud landscape, it is increasingly crucial  │
│ to delve into our system architecture. While microservices offer a seamless    │
│ tapestry of modular components, they are not merely flexible, but also         │
│ introduce complex operational dynamics. After carefully examining our          │
│ ingestion pipeline, we have come to the realization that migrating to a        │
│ monolithic binary could foster significant performance improvements..."        │
└────────────────────────────────────────────────────────────────────────────────┘

┌── ✅ AFTER: With Writing Systems (78 tokens - 75% shorter) ───────────────────┐
│ Migrate event ingestion from microservices to a single Go daemon.             │
│                                                                                │
│ Microservices added 42ms of latency and three network failure points.         │
│ A single daemon delivers three improvements:                                  │
│ - Cut AWS data transfer fees by $18,000/month.                                │
│ - Lower 99th-percentile latency from 58ms to 6ms.                             │
│ - Remove cross-service serialization so logs stay local.                      │
└────────────────────────────────────────────────────────────────────────────────┘
```

Same information. 75% fewer words. The answer comes first.

---

## Get Started in One Command

Run this inside any project folder:

```bash
npx writing-systems init
```

This copies the writing rules into your project. No packages are installed permanently - you own the files, and you can edit them however you like.

> Think of it like a template. The command drops files into your project, then gets out of the way.

---

## What Gets Added to Your Project

| File | What It Does |
| :--- | :--- |
| `AGENTS.md` | The main rules file. AI tools read this and follow its writing instructions. |
| `docs/*.md` | Detailed guides for different writing situations (documentation, UI text, prompts, etc.). |
| `.vale/` | Optional config for [Vale](https://vale.sh), a prose-checking tool that can flag rule violations automatically. |
| `scripts/check_writing.py` | A small Python script that checks your writing against the rules. No installs needed beyond Python 3. |

---

## The 5 Writing Rules (Plain English)

These five rules are the core of the system. Every rule exists to save the reader's time and tokens.

### 1. Lead with the Answer

> Start immediately with the conclusion, decision, or status in sentence 1. Never write the word "BLUF" or generate artificial summary headers.

**Bad:** *"After careful consideration of various factors…"*  
**Good:** *"Use PostgreSQL. Here is why."*

### 2. Speak Plain Human English

> Talk like a pragmatic engineer discussing systems with a teammate. Ban corporate buzzwords, pseudo-academic jargon, robotic formality, and unprompted tutorials.

### 3. Keep Sentences Short

> Instructions: 20 words max. Descriptions: 25 words max. Cap paragraphs at 3 sentences. If a sentence needs a deep breath to read aloud, split it.

### 4. Write Natural Bullet Points

> Lead list items directly with verbs or facts. Never prefix items with redundant bold category labels like `- **Deleted:** Removed the file...`.

### 5. Say What You Mean

> State operational facts directly without decorative metaphors. Pick one canonical name for each component and maintain it consistently across all documents.

<details>
<summary><strong>📘 Core rule mapping and descriptions</strong></summary>

Here is how these five rules map to operational constraints:

| Plain Name | Core Invariant | Operational Rule |
| :--- | :--- | :--- |
| Lead with the Answer | Natural Direct Answers | Deliver the verdict in sentence 1; omit artificial headers |
| Speak Plain English | Plain Human English | Pragmatic engineering tone; ban AI slop and tutorials |
| Keep Sentences Short | Controlled Syntax | Concise cognitive bounds (<20w procedural, <25w descriptive) |
| Natural Bullet Points | Natural List Items | Lead with verbs/facts; eliminate bold label stutters |
| Say What You Mean | Literal Precision | Concrete mechanics and canonical entity naming |

</details>

---

## Who Is This For?

### 🟢 Beginners - "I just want AI to write better"

1. Run `npx writing-systems init` in your project.
2. Open the `AGENTS.md` file it creates.
3. Paste that file's contents into your AI tool's system prompt (or place it at your project root - many AI coding tools read it automatically).
4. Done. Your AI writes shorter, clearer answers from now on.

### 🟡 Intermediate - "I want automated checks in my workflow"

Add the linter to your CI pipeline so pull requests get checked automatically:

```yaml
# .github/workflows/ci.yml
- name: Check Writing Quality
  uses: chama-x/writing-systems@v1
  with:
    path: 'docs/**/*.md'
```

Or run checks locally before pushing:

```bash
python3 scripts/check_writing.py
```

Run the linter locally to catch errors. The script flags long clauses and banned filler words using zero external dependencies.

### 🔴 Expert - "I want to customize the rules for my team"

Explore the `docs/` directory to tailor individual guides for your team's specific workflow:

| Guide | Covers |
| :--- | :--- |
| [core-principles.md](docs/core-principles.md) | Operational rules, thresholds, and rationale |
| [human-prose.md](docs/human-prose.md) | Technical documents: architecture decisions, RFCs, code reviews, specifications |
| [ui-microcopy.md](docs/ui-microcopy.md) | Button labels, error messages, CLI help text, form validation messages |
| [prompt-engineering.md](docs/prompt-engineering.md) | Writing system prompts for AI agents and assistants |
| [inter-agent-protocols.md](docs/inter-agent-protocols.md) | Structured JSON communication between AI agents in multi-agent systems |

Every rule in `AGENTS.md` traces back to an operational invariant in `docs/core-principles.md`. Change the principle, and you change the rule.

---

## Project Structure

```text
writing-systems/
├── AGENTS.md               # The writing rules - AI tools read this file
├── bin/cli.js              # The "npx writing-systems init" scaffolder
├── docs/                   # Detailed guides for each writing context
│   ├── core-principles.md  # Core rules, thresholds, and operational constraints
│   ├── human-prose.md      # Rules for technical documentation
│   ├── ui-microcopy.md     # Rules for UI text and error messages
│   ├── prompt-engineering.md   # Rules for AI system prompts
│   └── inter-agent-protocols.md # Rules for machine-to-machine messages
├── skills/                 # Portable skill file for AI coding agents
│   └── writing-systems/
│       └── SKILL.md        # Drop-in skill for tools that support agentskills.io
├── scripts/
│   └── check_writing.py    # Standalone linter - only needs Python 3
├── .vale/                  # Config for the Vale prose-checking tool
├── action.yml              # GitHub Action for automated CI checks
└── package.json            # npm package config (for npx distribution)
```

---

## Frequently Asked Questions

<details>
<summary><strong>Does this actually change how AI writes?</strong></summary>

Yes. AI language models follow the instructions in their system prompt. When you give them clear writing rules - short sentences, answer-first structure, no filler - they follow them. The before/after example at the top of this page is a real output comparison.

</details>

<details>
<summary><strong>What AI tools does this work with?</strong></summary>

Any tool that reads an `AGENTS.md` or `CLAUDE.md` file from your project root, or any tool where you can set a system prompt. This includes Claude Code, GitHub Copilot, Cursor, Windsurf, Google Antigravity, and others. You can also paste the rules into ChatGPT or Gemini's custom instructions.

</details>

<details>
<summary><strong>Do I need Node.js or Python?</strong></summary>

- Node.js is needed only for the one-time `npx writing-systems init` setup command. After that, you can delete Node if you want - the generated files are plain Markdown.
- Python 3 is needed only if you want to run the automated linter (`check_writing.py`). The linter has zero dependencies beyond the Python standard library.
- Neither is required if you just copy the `AGENTS.md` file manually.

</details>

<details>
<summary><strong>Will this break my existing documentation?</strong></summary>

No. The `init` command only adds new files. It does not modify any of your existing files. You choose which rules to adopt and when to adopt them.

</details>

<details>
<summary><strong>Can I change the rules?</strong></summary>

Yes - that's the point. You own every file. Edit `AGENTS.md` to relax sentence limits, add domain-specific terms, or remove rules that don't fit your team. The `docs/core-principles.md` file explains why each rule exists, so you can make informed changes.

</details>

---

## Standards & Compatibility

This project follows two open standards:

- **[AAIF `AGENTS.md`](https://agents.md)** - A Linux Foundation specification that defines how AI agents discover project-level instructions. Place an `AGENTS.md` file at your repo root and compatible tools read it automatically.
- **[agentskills.io](https://agentskills.io)** - A specification for portable AI agent skills. The `skills/writing-systems/SKILL.md` file lets any compatible coding agent load these writing rules on demand.

---

## Contributing

Read the [Contribution Guide](CONTRIBUTING.md) before opening a pull request. The short version:

1. Don't weaken the core rules without evidence.
2. Run `python3 scripts/check_writing.py` and fix all warnings before submitting.
3. Tag your review comments with severity: `[Blocker]`, `[Warning]`, `[Nit]`, or `[Question]`.

---

## License

[MIT](LICENSE) - use it however you like, commercially or otherwise.
