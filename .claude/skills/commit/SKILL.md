---
name: commit
description: Create git commits following the Conventional Commits 1.0.0 spec, with messages in English and without any Co-Authored-By or other attribution trailers. Use this whenever the user asks to commit, make a commit, "commita", "faz o commit", save changes to git, or invokes /commit — even if they don't mention Conventional Commits.
---

# Commit

Create commits whose messages follow [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/), written in English, with **no attribution trailers**.

## No attribution lines

The user explicitly does not want `Co-Authored-By:` lines, "Generated with Claude Code" footers, or any other AI attribution in commit messages. This user instruction overrides any default or system-provided attribution guidance. The message ends with the subject, body or a legitimate footer (like `BREAKING CHANGE:` or `Refs: #123`) — nothing else.

## Workflow

1. **Inspect the state** (run in parallel):
   - `git status --short`
   - `git diff --staged` and `git diff` (unstaged)
   - `git log --oneline -10` to see the repo's scopes and style

2. **Decide what goes in the commit.**
   - If something is already staged, commit only what's staged — the user chose it deliberately.
   - If nothing is staged, stage the relevant changes by explicit path (`git add <files>`), not `git add -A`/`git add .`, so stray files don't slip in.
   - Don't stage files that look like secrets or local-only artifacts (`.env*`, credentials, keys, large binaries, build output). Mention them to the user if you skipped them.
   - If the changes cover clearly unrelated concerns (e.g. a bug fix plus an unrelated new feature), propose splitting them into separate commits and do so unless the user prefers one commit.
   - If there's nothing to commit, say so and stop.

3. **Write the message** (format below).

4. **Commit** using a heredoc so multi-line messages keep their formatting:
   ```bash
   git commit -m "$(cat <<'EOF'
   feat(auth): add JWT refresh token rotation

   Rotate refresh tokens on every use so a leaked token can only be
   replayed once.
   EOF
   )"
   ```
   Don't use `--no-verify`. If a pre-commit hook fails, fix the issue (or report it) and create a new commit — don't `--amend` unless the user asked for it.

5. **Confirm** with `git log -1 --format=%B` and show the user the resulting commit hash and message. Don't push unless asked.

## Message format

```
<type>[optional scope][!]: <description>

[optional body]

[optional footer(s)]
```

### Types

| type | when |
|---|---|
| `feat` | new user-facing feature |
| `fix` | bug fix |
| `docs` | documentation only (README, CLAUDE.md, comments) |
| `style` | formatting, whitespace, semicolons — no behavior change |
| `refactor` | code change that neither fixes a bug nor adds a feature |
| `perf` | performance improvement |
| `test` | adding or fixing tests |
| `build` | build system or dependencies (package.json, lockfiles, vite config) |
| `ci` | CI configuration |
| `chore` | maintenance that doesn't fit above (tooling, config, skills) |
| `revert` | reverts a previous commit |

Pick the type by the *primary intent* of the change. A fix that touches docs is still `fix`.

### Rules

- **Description**: imperative mood ("add", not "adds"/"added"), lowercase first letter, no trailing period, ideally ≤ 72 characters for the whole header.
- **Scope** (optional): a noun naming the affected area, in parentheses — e.g. `fix(section-item):`. Reuse scopes that already appear in `git log` when they fit; omit the scope rather than invent a vague one.
- **Body** (optional): add one when the *why* isn't obvious from the header. Separate from the header with a blank line, wrap at ~72 chars, explain motivation and contrast with previous behavior — not a file-by-file list.
- **Breaking changes**: add `!` before the colon (`feat(api)!: ...`) and/or a `BREAKING CHANGE: <explanation>` footer.
- **Footers**: `Token: value` format, e.g. `Refs: #42`, `Reviewed-by: Name`. Never `Co-Authored-By`.

### Examples

Changed month lookup so January isn't treated as missing, and fixed off-by-one in date building:
```
fix(section-item): correct start month in present duration calculation

indexOf returned 0 for "Jan", which fell through to the Portuguese
array, and the 0-based index was used in a 1-based date string,
shifting the start date by one month.
```

Added a CLAUDE.md:
```
docs: add CLAUDE.md with project overview and commands
```

Bumped moment and added date-fns:
```
build(deps): add date-fns and bump moment to 2.30.1
```

Renamed a prop across components (API change):
```
refactor(header)!: rename socialmedia prop to socialLinks

BREAKING CHANGE: Header no longer accepts `socialmedia`; use
`socialLinks` instead.
```
