import { mkdirSync, writeFileSync } from "node:fs";

// One line, 140 characters max: the funniest out-of-office auto-reply.
// The joke is an inbox gone rogue — it has started a podcast about its
// owner, then closes like a celebrity at a press conference, refusing
// questions. The twist lands on the last words ("will not be taking
// questions"): the inbox is now too famous to answer email.
// The file holds exactly this line: no trailing newline, so the gate
// counts the line alone.
const LINE =
  "Out of office until Monday. My inbox has started a podcast about me and will not be taking questions.";

// No network, no randomness, no environment reads: the same bytes every run.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
