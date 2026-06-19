Brand-styled button — the pink `link` color is the storefront's primary CTA; purple `primary` is for secondary brand actions. Always renders `b-button` + `b-is-*` framework classes.

```jsx
<Button color="link" size="large">Add to cart</Button>
<Button color="primary" variant="outlined">Save for later</Button>
<Button color="link" rounded>Shop now</Button>
<Button color="primary" variant="ghost" size="small">Details</Button>
```

Variants: `outlined`, `light`, `ghost`, `text`, `inverted`. Sizes: `small` · default · `medium` · `large`. Flags: `rounded`, `loading`, `fullWidth`, `disabled`. Use `as="a"` for link buttons.
