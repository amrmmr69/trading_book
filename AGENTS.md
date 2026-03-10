## Skills
A skill is a set of local instructions to follow that is stored in a `SKILL.md` file. Below is the list of skills that can be used. Each entry includes a name, description, and file path so you can open the source for full instructions when using a specific skill.

### Available skills
- trading-book: Applies project conventions and structure for this Next.js landing repository. Use when changing `app/*`, `content/*`, `public/*`, SEO/static files, or npm scripts. (file: /home/d/projects/trading_book/.codex/skills/trading-book/SKILL.md)
- playwright: Browser automation and E2E verification for web apps. Use when validating UI behavior, writing/reworking browser tests, reproducing frontend bugs, or checking responsive pages before release. (file: /home/d/.codex/skills/playwright/SKILL.md)
- nextjs: Next.js App Router development workflow. Use when changing routes/layouts/components, data fetching/rendering mode, metadata, middleware, route handlers, or `next.config.*`. (file: /home/d/.codex/skills/nextjs/SKILL.md)
- gh-fix-ci: Diagnose and fix GitHub Actions failures. Use when CI/CD is red, workflow jobs fail, deploy pipeline breaks, or `.github/workflows/*` needs correction. (file: /home/d/.codex/skills/gh-fix-ci/SKILL.md)
- security-best-practices: Apply secure coding and secrets handling patterns. Use when editing `.env*`, deploy secrets, auth config, Docker/CI settings, or when assessing security risks in code changes. (file: /home/d/.codex/skills/security-best-practices/SKILL.md)
- skill-creator: Guide for creating effective skills. Use when creating or updating project-specific skills for this repository. (file: /home/d/.codex/skills/.system/skill-creator/SKILL.md)
- skill-installer: Install Codex skills from curated sources or GitHub repositories. Use when listing/installing additional skills for this project. (file: /home/d/.codex/skills/.system/skill-installer/SKILL.md)

### How to use skills
- Trigger rules: If the user names a skill (with `$SkillName` or plain text) or the task clearly matches a skill description, use that skill for that turn.
- After selecting a skill, open its `SKILL.md` and read only what is needed.
- Resolve relative paths from the skill directory first.
- Load only referenced files needed for the current request.
- Prefer scripts/templates from the skill when available.
- If multiple skills apply, use the minimal set and state order.
- If a skill cannot be applied cleanly, state the issue and continue with the best fallback.

### Skill storage policy
- Project-specific skills must live in `/home/d/projects/trading_book/.codex/skills`.
- Global `~/.codex/skills` is allowed only for generic cross-project skills.
- If local and global skills overlap, the local project skill is the source of truth.
