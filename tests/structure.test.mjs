import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import test from "node:test";

const root = fileURLToPath(new URL("..", import.meta.url));
const expected = {
  name: "rp-strength",
  version: "0.1.3",
  url: "https://github.com/PedroAVJ/rp-strength",
};

async function json(...parts) {
  return JSON.parse(await readFile(join(root, ...parts), "utf8"));
}

test("plugin metadata and ownership stay synchronized", async () => {
  const codex = await json(".codex-plugin", "plugin.json");
  const claude = await json(".claude-plugin", "plugin.json");
  const pkg = await json("package.json");

  assert.equal(codex.name, expected.name);
  assert.equal(codex.version, expected.version);
  assert.equal(claude.name, expected.name);
  assert.equal(claude.version, expected.version);
  assert.equal(pkg.version, expected.version);
  assert.equal(codex.homepage, expected.url);
  assert.equal(codex.repository, expected.url);
  assert.equal(claude.homepage, expected.url);
  assert.equal(claude.repository, expected.url);
  assert.equal(codex.interface.category, "Health & Fitness");
  assert.equal(codex.interface.brandColor, "#000000");
  assert.equal(codex.interface.composerIcon, "./assets/rp-strength-icon.svg");
  assert.equal(codex.interface.logo, "./assets/rp-strength-icon.svg");
  assert.ok(claude.dependencies.includes("google-drive@package-manager"));

  const icon = await readFile(join(root, "assets", "rp-strength-icon.svg"));
  assert.ok(icon.byteLength > 0);
  assert.match(icon.toString("utf8"), /<svg[^>]+xmlns="http:\/\/www\.w3\.org\/2000\/svg"/);
  await access(join(root, "README.md"));
  await access(join(root, "AGENTS.md"));
  await access(join(root, "ICON-SOURCES.md"));
});

test("the skill routes gym work without embedding workout records", async () => {
  const skill = await readFile(join(root, "skills", "rp-strength", "SKILL.md"), "utf8");
  assert.match(skill, /user-selected private Google Sheet/);
  assert.match(skill, /RP_STRENGTH_RECORD_FILE/);
  assert.doesNotMatch(skill, /spreadsheet titled `Gym`/);
  assert.match(skill, /google-drive@package-manager/);
  assert.match(skill, /no verified RP Hypertrophy app integration/i);
  assert.doesNotMatch(skill, /\[TODO:/);
});
