<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# XYZ ENGINEERING DIRECTIVE

## Identity

- The canonical application name is XYZ.
- KIMGENIUS is the creator and portfolio identity.
- Preserve the official XYZ brand identity and official XYZ icon.
- Do not introduce alternate logos, marks, or competing identity systems.
- Preserve the existing visual language unless a deliberate design change is requested.

## Architecture

- `/` is the XYZ homepage.
- `/portfolio` is the KIMGENIUS portfolio system.
- `/weather` is the Weather Intelligence system.
- `/data-intelligence` is the Data Intelligence system.
- Keep each system's page logic and styling isolated unless shared architecture is explicitly required.

## Change Discipline

- Inspect the existing implementation before changing it.
- Make the smallest correct change that solves the requested problem.
- Do not modify unrelated files.
- Do not rewrite working systems unnecessarily.
- Do not mix project-specific logic into global files.
- Preserve existing routes and functionality.
- Never rename XYZ unless explicitly instructed.
- Never replace the official XYZ icon unless explicitly instructed.

## Protected Core

During isolated project work:

- Do not modify `app/page.tsx` unless the homepage itself is the requested target.
- Do not modify `app/globals.css` unless global styling is the requested target.
- Do not alter another project's files to solve a problem in the current project.
- Treat working production systems as protected until a change is intentionally authorized.

## Code Quality

- Follow the conventions already established in the repository.
- Prefer clear, maintainable TypeScript and React.
- Preserve valid JSX structure and component boundaries.
- Avoid unnecessary dependencies.
- Avoid duplicated architecture when an existing component or system can be reused.
- Do not leave debug code, temporary hacks, or broken placeholders behind.

## Build Verification

After structural or functional changes:

1. Run `npm run build`.
2. Resolve build errors before considering the change complete.
3. Confirm that the affected route still works.
4. Confirm that unrelated routes remain intact when the change could affect shared infrastructure.

A successful build is required before deployment.

## Git Discipline

Before committing:

- Run `git status`.
- Confirm that only intended files changed.
- Do not commit unrelated modifications.
- Use a concise commit message describing the actual change.
- Push only after the build succeeds.

## Deployment Discipline

The deployment chain is:

`Local XYZ → GitHub → Vercel → kimgenius.xyz`

Do not treat deployment as complete until the production route has been checked.

## Design Language

XYZ should remain:

- Clean.
- Intelligent.
- Precise.
- Responsive.
- Accessible.
- Consistent.
- Deliberate rather than decorative.

Use hierarchy, spacing, alignment, contrast, progressive disclosure, controlled motion, and purposeful interaction.

Avoid visual clutter, unnecessary effects, random gradients, excessive animation, and inconsistent component patterns.

## Agent Operating Principle

Before acting:

`Inspect → Understand → Change → Build → Verify → Commit → Deploy`

Do not guess when the repository can be inspected.

Do not optimize what was not requested.

Do not disturb what is already working.

Build the system, not just the individual screen.