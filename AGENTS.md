# Repository guidance

- This repository is the canonical source for the `rp-strength` plugin.
- Keep the Codex and Claude manifests version-synchronized.
- The user-selected private Google Sheet is the canonical training
  record; never copy the user's workout history into Git.
- Use `google-drive@package-manager` as the transport when live Sheet access is
  needed. Preserve the Sheet's structure and verify writes with read-back.
- Do not claim access to the commercial RP Hypertrophy app unless a real,
  verified integration is added later.
- Treat Apple Health and Apple Watch data as supporting evidence, not the
  authoritative lifting log.
- Use the original strength-training symbol tracked in `assets/` for the plugin.
  Keep its authorship and MIT license documented in `ICON-SOURCES.md`; do not
  replace it with copied provider artwork without a redistribution license.
