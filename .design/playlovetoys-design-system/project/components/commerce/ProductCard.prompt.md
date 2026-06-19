The storefront product tile. Composes `b-card`, the overlay-badge toolkit, `PriceTag`, `StarRating` and a pink add-to-cart button. Provide `image` for real photography; otherwise a brand-tinted placeholder block is shown.

```jsx
<ProductCard
  vendor="We-Vibe"
  title="Chorus Couples Vibrator"
  rating={4.5} reviewCount={212}
  price="$34.30" compareAt="$49.00" saveLabel="Save 30%"
  badge="BESTSELLER" badgeColor="danger"
  imageBg="var(--plt-gradient-warm)"
/>
```

Lay tiles out in a `b-columns b-is-multiline` grid (`b-column b-is-3` for a 4-up shelf).
