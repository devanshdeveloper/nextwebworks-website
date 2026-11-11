---
name: verify
description: Runs the repository's verification test suite (check:structure, check:assets, lint, and build), checks UI rendering, and compiles a comprehensive walkthrough report with measured evidence.
---

# Verification & Quality Assurance Procedure

Execute this procedure after making changes to verify the entire site without regressing existing features or violating constraints.

## 1. Automated Test Suite Execution
Run the following commands verbatim from the repository root:
1. `pnpm --dir site check:structure`: Assert 0 line ceiling violations (page <= 80 lines, section <= 250 lines) and 0 RSC boundary errors.
2. `pnpm --dir site check:assets`: Assert all SVGs are within byte budget (<= 5.0 KB / 15 KB) and declared in `site/public/assets/manifest.json`.
3. `pnpm --dir site lint`: Assert ESLint passes with 0 errors and 0 warnings.
4. `pnpm --dir site build`: Assert Next.js compiles and prerenders all 27+ static and ISR routes with 0 errors.

## 2. Invariant & Policy Verification
- **Zero Rates Check:** Search codebase for accidental rate disclosures or dollar signs.
- **Stock Photo Check:** Verify `stock_ceiling: 0` is strictly maintained.
- **Page Bottom Stack:** Verify FAQ -> CTA Banner -> Contact Form -> Footer stack order.

## 3. Walkthrough Report
Produce a structured before/after evidence table:
- Files modified or created.
- Measured command outputs and timestamps.
- Unverified items (if any, with clear reasons).

