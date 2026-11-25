// Famous Last Words: The Funniest Epitaph
// Entry: a one-line tombstone epitaph of famous last words (<=150 chars).
// The joke's turn: death is supposed to end your bills, but the subscription
// outlives the subscriber — the dead person has to beg the living to cancel
// what even dying couldn't stop. Direct dying speech, no stage directions,
// short enough to carve in stone and repeat to a friend.
// Writes the entry text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Please cancel my subscriptions. I am dead and Netflix is still charging me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars)`);
