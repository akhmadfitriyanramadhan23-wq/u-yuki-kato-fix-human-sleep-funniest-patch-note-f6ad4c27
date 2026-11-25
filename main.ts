// Fix Human Sleep: Funniest Patch Note — u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27
// One line of patch notes, 1-160 characters. Changelog voice ("Fixed:") +
// a specific crash (3 a.m.) + a flat consequence (the snooze button filing
// for unemployment). Three beats, ends on the punchline, no explanation.
// Node 22, stdlib only, no network; writes /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Revision 2: the middle beat "users now wake up rested" was flat filler —
// replaced with a second changelog-specific beat, "dreams now save
// correctly", so all three beats carry a joke (crash fixed / dreams save /
// snooze button unemployed). Same length band, still one line, <160 chars.
const line =
  "Fixed: human sleep no longer crashes at 3 a.m. — dreams now save correctly, and the snooze button has filed for unemployment.";

const points = [...line].length;
if (points < 1 || points > 160 || line.trim().length === 0) {
  throw new Error(`entry must be 1-160 code points, got ${points}`);
}
if (line.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== line) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the line");
}
console.log(`OK ${points} chars`);
