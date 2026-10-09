<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Tailwind CSS v4 classes

- Use Tailwind's built-in scale instead of arbitrary bracket values whenever one exists. Tailwind IntelliSense flags these as `suggestCanonicalClasses` warnings.
  - Spacing and sizing utilities (`p`, `m`, `gap`, `w`, `h`, `size`, `min-*`/`max-*`, `inset`, `top`/`left`/etc.): value = px / 4, fractions allowed. `p-[30px]` → `p-7.5`, `h-[330px]` → `h-82.5`, `max-w-[1180px]` → `max-w-295`.
  - Named theme tokens over raw values: `tracking-[-0.025em]` → `tracking-tight`.
- Keep arbitrary values only when no scale equivalent exists: `clamp(...)`, multi-value `inset-[12px_-12px_...]`, custom `rounded-[...]`, `clip-path`, gradients, one-off colors not in the theme.
- Applies to `@apply` in `app/globals.css` too, not just `className` strings.
