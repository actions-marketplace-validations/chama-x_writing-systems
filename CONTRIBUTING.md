# Contributing to AI Writing Systems

We welcome contributions that improve cognitive clarity, reduce conversational token waste, and refine agent communication standards.

---

## 1. Ground Rules for Contributions

All proposals and documentation changes must satisfy these three requirements:
- No Invariant Dilution: Core invariants (Natural Direct Answers, Plain Human English, Controlled Syntax, Natural Bullet Points, Literal Precision) cannot be weakened.
- Evidence-Based Rationale: Cite operational ergonomics, real-world agent testing, or token efficiency for proposed rule changes.
- Zero Linter Violations: All markdown changes must pass `python3 scripts/check_writing.py` with zero errors and zero warnings.

---

## 2. Local Development & Verification

1. Clone the repository:
   ```bash
   git clone https://github.com/chama-x/writing-systems.git
   cd writing-systems
   ```

2. Run the standalone linter:
   ```bash
   python3 scripts/check_writing.py
   ```

3. Verify CLI packaging:
   ```bash
   node bin/cli.js info
   ```

---

## 3. Pull Request Review Protocol

This repository practices what it preaches. Review comments must use deterministic severity tags:
- `[Blocker]`: Halts the merge for architectural regressions, broken CLI syntax, or banned slop words.
- `[Warning]`: Flags readability hazards or non-standard entity synonyms without blocking the pull request.
- `[Nit]`: Suggests minor phrasing polish that the author may decline.
- `[Question]`: Inquires about design trade-offs without blocking the merge.
