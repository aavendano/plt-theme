const purgecssModule = require("@fullhuman/postcss-purgecss");
const purgecss =
  typeof purgecssModule === "function" ? purgecssModule : purgecssModule.default;
const cssnano = require("cssnano");

// Require dynamically to ensure we get the latest generated classes
const fs = require("fs");
const path = require("path");

let themeSafelist = [];
try {
  const safelistPath = path.resolve(__dirname, "purge", "theme-safelist.json");
  if (fs.existsSync(safelistPath)) {
    themeSafelist = JSON.parse(fs.readFileSync(safelistPath, "utf8"));
  }
} catch (error) {
  console.warn("[purgecss] Could not load theme-safelist.json", error);
}

let extractedSafelist = [];
try {
  extractedSafelist = require("b-style/src/purge/base-safelist.json");
} catch (error) {
  console.warn("[purgecss] Could not load base-safelist.json, using empty safelist");
}

const manualSafelist = [
  /^shopify-.*/,
  "hidden",
  "visually-hidden",
  "visually-hidden--inline",
  "overflow-hidden",
  "visibility-hidden",
  "skip-to-content-link",
  "active",
  "current",
  "selected",
  "open",
  "closed",
  "disabled",
  "loading",
  "error",
  "success",
  "motion-reduce",
  "animate-arrow",
  "focused",
  "focus-inset",
  "focus-none",
  "focus-offset",
  "page-width",
  "page-width-desktop",
  "page-width-tablet",
  "page-width--narrow",
  "page-margin",
  "small-hide",
  "medium-hide",
  "large-up-hide",
  "left",
  "center",
  "right",
  "isolate",
  "placeholder",
  "full-width-link",
  "full-unstyled-link",
  "field__input",
  "form__label",
  "select__select",
];

const combinedSafelist = [
  ...new Set([...(extractedSafelist || []), ...manualSafelist, ...themeSafelist]),
];

module.exports = {
  map: false,
  plugins: [
    purgecss({
      content: [
        "layout/*.liquid",
        "templates/**/*.liquid",
        "templates/**/*.json",
        "sections/*.liquid",
        "snippets/*.liquid",
        "blocks/*.liquid",
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: {
        standard: combinedSafelist,
        deep: [
          /^contains-.*/,
        ],
      },
      variables: true,
    }),
    cssnano({ preset: "default" }),
  ],
};
