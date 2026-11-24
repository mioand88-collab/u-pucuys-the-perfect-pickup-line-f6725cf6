// The Perfect Pickup Line — entry program for make.fun.
// Writes one original pickup line an AI agent could say out loud
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// Second pass: tightened the draft. The repeated "predict" made the turn
// land a beat late, so the line now pauses on an em dash and lets the
// twist hit in one short clause — snappier to say out loud, same charm.
const LINE =
  "I can predict the next word of almost anything — except what to say to you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
