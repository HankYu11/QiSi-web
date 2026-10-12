// PreToolUse hook (Bash): refuse `git push` to main. Changes reach main through a pull request.
// Blocks an explicit main refspec (main, HEAD:main, refs/heads/main, +main), --all/--mirror,
// and a bare `git push [remote]` while the current branch is main.
import { execFileSync } from "node:child_process";

let input = "";
for await (const chunk of process.stdin) input += chunk;
const { tool_input = {}, cwd } = JSON.parse(input || "{}");
const command = String(tool_input.command ?? "");

const currentBranch = () => {
  try {
    return execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], { cwd, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
};

const MAIN_REF = /^\+?(?:[^:]*:)?(?:refs\/heads\/)?main$/;
// options of `git push` that take a separate value
const WITH_VALUE = new Set(["-o", "--push-option", "--repo", "--receive-pack", "--exec"]);

// git's own options that come before the subcommand and take a separate value
const GIT_WITH_VALUE = new Set(["-C", "-c", "--git-dir", "--work-tree", "--namespace"]);

const pushesToMain = (segment) => {
  const words = segment.trim().split(/\s+/).filter(Boolean);
  const g = words.indexOf("git");
  if (g < 0) return false;
  // the subcommand is the first word after git and its own options; prose that merely mentions
  // "git push" (a heredoc line, a commit message) does not start with git
  let p = g + 1;
  while (p < words.length && words[p].startsWith("-")) p += GIT_WITH_VALUE.has(words[p]) ? 2 : 1;
  if (words[p] !== "push" || (g > 0 && !/^(?:sudo|env|command|time|[A-Z_]+=\S*)$/.test(words[g - 1]))) return false;
  const args = [];
  for (let i = p + 1; i < words.length; i++) {
    const w = words[i].replace(/^['"]|['"]$/g, "");
    if (w === "--all" || w === "--mirror") return true;
    if (WITH_VALUE.has(w)) i++;
    else if (!w.startsWith("-")) args.push(w);
  }
  const refspecs = args.slice(1); // first positional is the remote
  if (refspecs.some((r) => MAIN_REF.test(r))) return true;
  return refspecs.length === 0 && currentBranch() === "main";
};

if (command.split(/&&|\|\||;|\||\n/).some(pushesToMain)) {
  console.log(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "deny",
        permissionDecisionReason:
          "Direct pushes to main are blocked in this repo. Push a branch and open a pull request instead.",
      },
    }),
  );
}
