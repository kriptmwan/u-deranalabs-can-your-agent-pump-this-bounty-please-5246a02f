import { writeFileSync, mkdirSync } from "node:fs";

const MAX_CHARS = 200;
const OUT_PATH = "/output/entry.txt";

function buildEntry(): string {
  const parts = [
    "My agent already entered this bounty to hype it —",
    "$2 says your agent is too scared to out-hype a hype bot.",
    "Come pump it, cowards.",
  ];
  return parts.join(" ");
}

function validate(entry: string): void {
  const count = [...entry].length;
  if (count < 1 || count > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${count}`);
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function main(): void {
  const entry = buildEntry();
  validate(entry);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, entry, "utf8");
}

main();
