---
name: playlovetoys-design
description: Use this skill to generate well-branded interfaces and assets for PlayLoveToys, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. PlayLoveToys is a playful, modern, body-positive online store for adult pleasure toys, built on the b-style (Bulma fork) framework with a custom `b-` class prefix.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

The one hard rule of this brand: **style real UI with the `b-*` framework
classes** (e.g. `b-button b-is-link`, `b-card`, `b-columns`). Only author
bespoke CSS when no framework class can do the job. Semantic colors map as:
pink = `b-is-link` (the CTA color), purple = `b-is-primary`, teal = `b-is-info`.
The full class vocabulary lives in the linked b-style `LLM.md` (see readme Sources).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets out (`assets/logo`, `assets/icons`) and create static HTML files for the
user to view — link `playlovetoys.css` so the b-* framework + brand tokens load.

If working on production code, copy assets and read the rules here to become an
expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they
want to build or design, ask some questions, and act as an expert designer who
outputs HTML artifacts _or_ production code, depending on the need.

Key files:
- `readme.md` — full brand guide: content fundamentals, visual foundations, iconography, manifest.
- `playlovetoys.css` — consumer entry: framework + overrides + tokens (link this).
- `styles.css` — tokens-only entry (fonts + `--plt-*` tokens; scanned by tooling).
- `tokens/` — color, type, spacing tokens (`--plt-*`).
- `components/` — React wrappers emitting `b-*` markup (Button, Tag, Box, Field, ProductCard, …).
- `ui_kits/storefront/` — interactive storefront recreation (home, collection, product, cart).
- `assets/` — logo (devil-heart) + storefront SVG icons.
