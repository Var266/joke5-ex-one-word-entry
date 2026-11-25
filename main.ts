import { mkdirSync, writeFileSync } from "node:fs";

// Describe Your Ex in One Word — the winning verdict, chosen by pairwise
// comparison against the judge's brief (verdict at a glance, comic punch
// through an unexpected angle, surprise, exactly one word, recognition).
// The ex as unsolicited mail: you finally hit unsubscribe.
const word = "Unsubscribe";

// Guard the gate: exactly one word, no spaces or punctuation tricks.
// Fail loudly instead of writing an entry the scorer would reject.
if (!/^[A-Za-z]+$/.test(word)) {
  throw new Error(`entry must be exactly one word, got: ${JSON.stringify(word)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
