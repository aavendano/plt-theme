Inline pill for statuses, categories and filters. Use `light` tints for calm states (In stock), solid for emphasis (NEW). Wrap several in `<Tags>`; `addons` fuses a label+value pair.

```jsx
<Tag color="link">New</Tag>
<Tag color="success" light>In stock</Tag>
<Tag color="warning" light rounded>Low stock</Tag>

<Tags addons>
  <Tag color="dark">Size</Tag>
  <Tag color="link">Large</Tag>
</Tags>

<Tag color="primary" deletable onDelete={remove}>Waterproof</Tag>
```

Colors: primary · link · info · success · warning · danger · dark · light.
