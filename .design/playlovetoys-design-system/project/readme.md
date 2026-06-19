# PlayLoveToys Design System

A playful, modern, body-positive design system for **PlayLoveToys** — an online
store selling pleasure toys and intimacy products for adults. The system is a
branded layer on top of **b-style**, a Bulma 1.x fork with a custom `b-` class
prefix. The golden rule of this brand: **style real UI with the `b-*` framework
classes**; author bespoke CSS only when no framework class can do the job.

> 18+ retail context. Copy is frank but never crude; the brand is confident,
> warm and inclusive — "refreshingly un-awkward."

---

## Sources (store for reference — reader may not have access)

- **Codebase:** `plt-theme/` — the live Shopify theme (Liquid + Alpine + compiled b-style CSS). Brand tokens are baked into `assets/b-style.source.css`.
- **Framework:** [`github.com/aavendano/b-style`](https://github.com/aavendano/b-style) — the Bulma fork. Its `LLM.md` is the authoritative class reference; `index.html` is the visual catalog. Explore this repo to build more faithfully.
- **Brand sheet:** `uploads/play.pdf` — the canonical palette (`533278 · F4436C · B4B4B4 · 0C7489 · 545C52`).
- **Logo:** `uploads/PlayLoveToys-Logo.svg` + PNG (devil-heart mark + wordmark).
- Related repos by the same owner worth a look: `aavendano/plt-theme`, `aavendano/bulma`.

Vendored into this project: `vendor/b-style.css` (the compiled framework, brand
tokens included) and `vendor/plt-custom.css` (storefront overrides). Consumers
link a single file: **`playlovetoys.css`** (framework + overrides + tokens).
`styles.css` is the tokens-only entry the tooling scans.

---

## Brand snapshot

- **What:** Curated adult pleasure toys (vibrators, products for him, couples, wellness/lube).
- **Promise:** Discreet plain packaging · 100% body-safe materials · free shipping over $59 · 30-day happiness guarantee.
- **Personality:** Playful, modern, sex-positive, unashamed, friendly. Pink + purple, never clinical, never seedy.

---

## CONTENT FUNDAMENTALS

**Voice:** Confident, warm, plain-spoken, a little cheeky. Talks to the customer
as a peer, never a patient. Sex-positive and inclusive; zero shame, zero euphemistic hand-wringing.

- **Person:** Second person ("you", "your bag"). Brand is "we".
- **Casing:** Sentence case for UI and body. Display headlines may use a punchy
  two-line cadence ("Play more. / Love louder."). ALL-CAPS reserved for tiny
  overlay badges (`NEW`, `SALE`, `BESTSELLER`) and overline labels.
- **Tone examples (use these as a guide):**
  - Hero: *"Play more. Love louder."* · *"Toys for grown-ups who get it."*
  - Reassurance: *"Plain packaging — no branding on the box, ever."*
  - Stock nudge: *"Only 3 left — selling fast."*
  - Shipping: *"Free discreet shipping over $59."*
  - Empty cart: *"Your bag is empty."*
- **Product titles:** `Vendor` eyebrow (uppercase) + plain product name ("We-Vibe" → "Chorus Couples Vibrator"). No clickbait.
- **Emoji:** Sparingly, as functional accents in trust/utility microcopy (🚚 📦 🔋 🎉) — never in headlines or product names.
- **Punctuation:** Em dashes and middots ("·") for rhythm; exclamation marks rare and earned.
- **Multilingual:** Storefront ships EN + ES + FR (see `plt-theme/locales`). Keep copy short so it translates cleanly.

---

## VISUAL FOUNDATIONS

**Colors.** Three brand hues do the heavy lifting:
- **Purple `#533278`** — `primary`. Structure, brand voice, headings, secondary buttons.
- **Hot pink `#F4436C`** — `link`. The CTA color: add-to-cart, sale, key links, filled stars, cart badge.
- **Teal `#0C7489`** — `info`. Secondary accents, wellness category.
- Neutrals are a **cool, faintly purple-tinted grey** scale (scheme hue 221°). Text is a warm grey ink `#545C52`.
- Status: success `#48C78E`, warning `#FFB70F`, danger `#FF5A78`. Solids for emphasis; `b-is-light` soft tints for calm states.
- **Signature gradient** `linear-gradient(115°, #231F20 → #533278 → #F4436C)` for heroes, sale banners and the announcement bar. A warm pink→magenta variant for promo cards.

**Type.**
- **Body / UI:** **Roboto Condensed** (the live storefront font, `--b-family-primary`). Condensed keeps dense PLP/PDP layouts tight. Weights 400–800; 600–700 for emphasis and buttons.
- **Display:** **Fredoka** (rounded, friendly, playful) for hero headlines and brand moments. *Substitution flag:* the logo wordmark is bespoke hand-lettering; Fredoka is the nearest playful Google Font stand-in. Provide the real face if you have it.
- Overlines: uppercase, `letter-spacing: .12–.16em`, 600 weight.

**Shape & depth.**
- **Radius:** 0.375rem base (buttons, cards). Inputs 4px. Cards/panels 12–20px. Badges are **sharp (2px)**. Pills (9999px) for chips and rounded CTAs.
- **Shadows:** soft, low, cool-tinted (`hsla(268 …)`). A dedicated **pink glow** for hero CTAs. Cards rest on a subtle shadow + 1px hairline border (`--plt-line`), not heavy elevation.
- **Cards:** white surface, 12px radius, hairline border, soft shadow; image on top (1:1), overlay badge top-left, content padded 1rem, CTA pinned to the bottom.

**Backgrounds & imagery.**
- Page background is white / `#FAFAFB` paper. Sections alternate white ↔ paper for rhythm.
- Heroes & banners use the **gradient**; trust strip uses charcoal.
- Product imagery sits on brand-tinted blocks (soft purple/pink/teal) — this kit uses **abstract brand-tinted placeholders** (no explicit imagery) via `ProductCard`'s `imageBg`. Drop in real photography through the `image` prop.

**Motion.** Quick and lightly springy. `--plt-duration: 240ms`, ease `cubic-bezier(.34,1.56,.64,1)` for playful overshoot; `cubic-bezier(.22,1,.36,1)` for drawers/slide-overs. Buttons shrink slightly on press (`:active scale(.97)`), brighten on hover. No infinite decorative loops.

**Hover / press.** Buttons: hover `brightness(1.1)` / darken lightness; active `scale(.97)`. Links → pink. Cards lift subtly. Tags are static.

**Layout.** `b-container` (max 90rem) inside `b-section`. Grids via `b-columns b-is-multiline` + `b-column b-is-3/4`. Sticky header with announcement bar. Mega-menu on "Shop". Cart is a right-hand slide-over drawer.

---

## ICONOGRAPHY

- The storefront ships a **small set of single-purpose SVG icons** (copied into `assets/icons/`): `person`, `account`, `cart`, `shopping-bag`, `filter`, `caret`. Line style, ~22–24px in the navbar.
- These are referenced as `<img src>` (not an icon font). There is **no built-in icon font**.
- **Functional emoji** appear in trust/utility microcopy only (🚚 📦 🔋 ♡ 🎉). The heart `♡` doubles as the wishlist glyph, echoing the devil-heart logo.
- Unicode stars `★ ☆` power the `StarRating` component (pink fill).
- The **devil-heart mark** from the logo is the hero brand icon; knock it out to white on the gradient.
- Need a broader set? Match the existing thin line weight (Lucide/Heroicons outline are close) and **flag the substitution**.

---

## INDEX / manifest

**Root**
- `playlovetoys.css` — **consumer entry** (link this): framework + overrides + tokens.
- `styles.css` — tokens-only entry the tooling scans (`@import`s fonts + tokens). Keeps the brand-token index clean by excluding the ~5k vendor Bulma vars.
- `readme.md` — this guide. · `SKILL.md` — Agent Skills wrapper.

**Tokens** (`tokens/`)
- `colors.css` · `typography.css` · `spacing.css` · `fonts.css` (Roboto Condensed + Fredoka via Google Fonts).

**Vendor** (`vendor/`)
- `b-style.css` (compiled framework, brand tokens baked in) · `plt-custom.css` (storefront overrides).

**Foundation cards** (`guidelines/`) — Colors (brand / neutrals / status), Type (display / scale / weights), Spacing (scale / radius / shadow), Brand (logo / gradient / iconography).

**Components** (`components/`) — render `b-*` markup:
- `core/` — **Button**, **Tag** / **Tags**, **Box**
- `forms/` — **Field**, **TextInput**, **Select**, **Checkbox**
- `feedback/` — **Notification**, **Message**
- `commerce/` — **ProductCard**, **PriceTag**, **StarRating**

**UI kit** (`ui_kits/storefront/`) — interactive recreation: Header (mega menu + search + cart), Home, Collection (PLP + filters), Product (PDP + tabs), Cart drawer, Footer. Entry: `ui_kits/storefront/index.html`.

**Assets** (`assets/`) — `logo/` (SVG + PNG), `icons/` (6 SVGs).

---

## Using the framework (the one rule)

```html
<!-- ✅ framework classes, semantic colors -->
<button class="b-button b-is-link b-is-large">Add to cart</button>
<span class="b-tag b-is-danger">-30%</span>

<!-- ❌ never: unprefixed Bulma, Tailwind, invented classes, inline color -->
<button class="button is-primary">…</button>
```

Pink = `b-is-link` (CTA). Purple = `b-is-primary`. Teal = `b-is-info`. Link
**`playlovetoys.css`** to load the framework + brand tokens in one file. See
b-style's `LLM.md` for the full class vocabulary and anti-patterns.
