Wraps a control with label + help text using the canonical `b-field` > `b-label` + `b-control` + `b-help` structure. The standard way to build forms.

```jsx
<Field label="Email" help="Order updates only — no spam." helpState="info">
  <TextInput type="email" placeholder="you@example.com" />
</Field>

<Field label="Size">
  <Select fullWidth><option>Small</option><option>Large</option></Select>
</Field>
```
