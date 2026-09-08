---
name: rp-strength
description: Own the user's gym and hypertrophy-training context through the user-selected private Google Sheet. Use for workout planning, reviewing or recording gym sessions, exercise selection, progression, sets, reps, loads, RIR, soreness, recovery, gym training logistics, or any request to find or update the user's existing gym material.
---

# RP Strength

Treat this plugin as the owner of the user's gym and hypertrophy-training
workflow. The canonical record is the user-selected private Google Sheet.
Personal workout data stays in that Sheet, not in this Git repository.

Resolve the record from the current request or optional private local Markdown
at `RP_STRENGTH_RECORD_FILE`, defaulting to `~/.config/rp-strength/record.md`.
When neither identifies it, ask for the intended sheet before reading or writing;
never assume a particular account, sheet title, or membership.

There is no verified RP Hypertrophy app integration. Do not imply that the
commercial app or its account was accessed.

## Use the canonical record

1. Use `google-drive@package-manager` or an authenticated Google Drive
   connector to find the exact private spreadsheet selected above.
2. Ground the file by its title and spreadsheet type before reading it. If
   multiple exact matches ever appear, disambiguate by modification date and
   current contents rather than guessing.
3. Inspect only the relevant tabs and bounded ranges.
4. Preserve the existing structure. Write only the requested session, plan, or
   field.
5. Verify every write by reading the changed range back.
6. Do not create a replacement gym log, rename the Sheet, relocate it in Drive,
   or copy its contents elsewhere unless the user explicitly asks.

If Google Drive access is unavailable, state that live contents could not be
read or changed and stop before inventing current training data.

## Boundaries

- Distinguish observed workout history from a new training recommendation.
- Treat Apple Health and Apple Watch metrics as supporting context, not the
  authoritative lifting log.
- Verify gym closures and membership notices from their current source;
  do not silently turn them into training-history entries.
- Do not diagnose injuries or override medical advice. Escalate acute injury
  symptoms, chest pain, fainting, or other urgent warning signs to qualified
  medical care.
