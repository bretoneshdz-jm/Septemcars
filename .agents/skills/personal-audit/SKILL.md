---
name: personal-audit
description: Use when asked to audit or review how this repo uses the Personal design system, to look for drift, or to check a UI change before calling it done. Runs a deterministic script and explains each finding.
---

# Audit Personal design-system usage

## Run the script

From the repo root:

    node .claude/skills/personal-audit/scripts/audit.mjs [folder] --json

Use `.agents/skills/...` if that is where this skill was loaded from. Without a folder it scans the whole repo. It needs Node 18+ and nothing else, never changes files, and exits with code 1 when there are findings.

## What it reports

| type | meaning | how to fix |
|---|---|---|
| `hardcoded-color` | A colour written by hand. | Use one of `suggestions` (tokens with the same value) only if its meaning fits; otherwise pick a semantic token by intent. Never use a primitive. |
| `primitive-token` | A primitive colour token used directly. | Replace it with one of the semantic tokens in `suggestions` that fits the intent. |
| `unknown-token` | A token that does not exist in v0.1.1: invented, misspelled, or removed in a newer version. | Use the closest valid token in `suggestions`, or ask the user. |
| `unknown-component` | Imported from `@personal/design-system`, but the package does not export it. | Use an existing component (see `suggestions`) or tell the user it is missing. |
| `edited-package-file` | A file in `design-system/` differs from what DS Generator published. | Tell the user: local edits are lost on the next publish, so the change has to be made in DS Generator. Do not keep editing the file. |

## How to report

Group findings by type, most frequent first. For each one give `file:line`, what was found and the proposed fix. Suggestions are candidates with the same value, not certainties: check that the token's meaning fits before applying it. Apply fixes only if the user asks, then run the script again. `usage` in the JSON counts imports per component; use it if asked about adoption. If the JSON has `notes`, pass them on to the user.
