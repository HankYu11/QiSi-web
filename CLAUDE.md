# QiSi-web

## Git workflow

- Never push to `main` directly. Work on a branch, push it, and open a pull request into `main`; merging the PR deploys the site (`.github/workflows/deploy.yml` builds every PR and deploys only when `main` changes).
- `.claude/hooks/block-main-push.mjs` enforces this for Claude Code sessions: it refuses any `git push` that targets `main`.
