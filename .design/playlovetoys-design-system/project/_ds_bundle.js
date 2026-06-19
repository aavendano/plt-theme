/* @ds-bundle: {"format":3,"namespace":"PlayLoveToysDesignSystem_88998d","components":[{"name":"PriceTag","sourcePath":"components/commerce/PriceTag.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"StarRating","sourcePath":"components/commerce/StarRating.jsx"},{"name":"Box","sourcePath":"components/core/Box.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Tags","sourcePath":"components/core/Tag.jsx"},{"name":"Message","sourcePath":"components/feedback/Message.jsx"},{"name":"Notification","sourcePath":"components/feedback/Notification.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"}],"sourceHashes":{"components/commerce/PriceTag.jsx":"c9a4df58ee44","components/commerce/ProductCard.jsx":"7cfa51a2cd16","components/commerce/StarRating.jsx":"d12a82ead8e2","components/core/Box.jsx":"dcd27500008e","components/core/Button.jsx":"59807c1cd0ea","components/core/Tag.jsx":"c1b8b23bb6d6","components/feedback/Message.jsx":"96da84211e73","components/feedback/Notification.jsx":"d75101ede6d5","components/forms/Checkbox.jsx":"e862a912dc06","components/forms/Field.jsx":"54c1a9429491","components/forms/Select.jsx":"7ff628c35a06","components/forms/TextInput.jsx":"0b80ff6fe7c9","ui_kits/storefront/CartDrawer.jsx":"d01d92ab1325","ui_kits/storefront/CollectionScreen.jsx":"0615a5763ab9","ui_kits/storefront/Footer.jsx":"eb8e08a2b4fe","ui_kits/storefront/Header.jsx":"b678bb8e3e10","ui_kits/storefront/HomeScreen.jsx":"6d9510456184","ui_kits/storefront/ProductScreen.jsx":"3f432007a97a","ui_kits/storefront/app.jsx":"b5b535044b89","ui_kits/storefront/data.jsx":"f317d96c22cc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PlayLoveToysDesignSystem_88998d = window.PlayLoveToysDesignSystem_88998d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/PriceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PlayLoveToys PriceTag — current price with optional was-price + save badge.
 * Uses the storefront's real price classes (price-item, custom-price-text-was).
 */
function PriceTag({
  price,
  compareAt,
  saveLabel,
  className = '',
  ...rest
}) {
  const onSale = compareAt != null;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '10px',
      flexWrap: 'wrap'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "price-item",
    style: onSale ? {
      color: 'var(--plt-pink)'
    } : undefined
  }, price), onSale && /*#__PURE__*/React.createElement("span", {
    className: "custom-price-text-was"
  }, /*#__PURE__*/React.createElement("s", null, compareAt)), onSale && saveLabel && /*#__PURE__*/React.createElement("span", {
    className: "b-tag b-is-danger b-is-light b-is-small"
  }, saveLabel));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/commerce/StarRating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PlayLoveToys StarRating — compact star rating with optional review count.
 * No b-style primitive exists for ratings, so this is a bespoke component
 * built only from brand tokens (the pink accent for filled stars).
 */
function StarRating({
  value = 0,
  max = 5,
  count,
  size = 15,
  className = '',
  ...rest
}) {
  const full = Math.round(value);
  const stars = Array.from({
    length: max
  }, (_, i) => i < full ? '★' : '☆');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--plt-pink)',
      fontSize: `${size}px`,
      letterSpacing: '1px',
      lineHeight: 1
    }
  }, stars.join('')), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: `${size - 3}px`,
      color: 'var(--plt-text-muted)'
    }
  }, "(", count, ")"));
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PlayLoveToys ProductCard — the storefront product tile.
 * Composes b-card + the overlay-badge toolkit (b-has-image-overlay /
 * b-badge-{color} / b-tag-top-left) with PriceTag, StarRating and a
 * pink add-to-cart button (b-button b-is-link).
 */
function ProductCard({
  title,
  vendor,
  price,
  compareAt,
  saveLabel,
  badge,
  badgeColor = 'link',
  badgePosition = 'top-left',
  rating,
  reviewCount,
  image,
  imageBg,
  ctaLabel = 'Add to cart',
  onAdd,
  onOpen,
  className = '',
  ...rest
}) {
  const openable = onOpen ? {
    onClick: onOpen,
    style: {
      cursor: 'pointer'
    }
  } : {};
  const cls = ['b-card'];
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls.join(' '),
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, rest), /*#__PURE__*/React.createElement("div", _extends({
    className: "b-card-image"
  }, openable), /*#__PURE__*/React.createElement("div", {
    className: "b-has-image-overlay"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "b-image b-is-1by1",
    style: {
      margin: 0,
      background: imageBg || 'var(--plt-purple-soft)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      objectFit: 'cover',
      width: '100%',
      height: '100%'
    }
  })), badge && /*#__PURE__*/React.createElement("span", {
    className: `b-badge-${badgeColor} b-tag-${badgePosition}`
  }, badge))), /*#__PURE__*/React.createElement("div", {
    className: "b-card-content",
    style: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      padding: '1rem'
    }
  }, vendor && /*#__PURE__*/React.createElement("p", {
    style: {
      textTransform: 'uppercase',
      letterSpacing: '.12em',
      fontSize: '11px',
      color: 'var(--plt-text-muted)',
      fontWeight: 600,
      margin: '0 0 4px'
    }
  }, vendor), /*#__PURE__*/React.createElement("p", _extends({
    className: "b-title b-is-6",
    style: {
      marginBottom: '6px',
      ...(onOpen ? {
        cursor: 'pointer'
      } : {})
    }
  }, onOpen ? {
    onClick: onOpen
  } : {}), title), rating != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StarRating, {
    value: rating,
    count: reviewCount
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    price: price,
    compareAt: compareAt,
    saveLabel: saveLabel
  })), /*#__PURE__*/React.createElement("button", {
    className: "b-button b-is-link b-is-fullwidth",
    style: {
      marginTop: '12px'
    },
    onClick: onAdd
  }, ctaLabel)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Box.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PlayLoveToys Box — wraps the b-style `b-box`: a white, softly-shadowed,
 * rounded surface for grouping content. The brand's default card surface.
 */
function Box({
  className = '',
  children,
  ...rest
}) {
  const cls = ['b-box'];
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls.join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Box });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Box.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PlayLoveToys Button — wraps the b-style `b-button` element.
 * Renders only framework classes (b-button, b-is-*); never custom CSS.
 */
function Button({
  color = 'primary',
  size,
  variant,
  rounded = false,
  loading = false,
  fullWidth = false,
  disabled = false,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  const cls = ['b-button'];
  if (color) cls.push(`b-is-${color}`);
  if (size) cls.push(`b-is-${size}`);
  if (variant === 'outlined') cls.push('b-is-outlined');
  if (variant === 'light') cls.push('b-is-light');
  if (variant === 'ghost') cls.push('b-is-ghost');
  if (variant === 'text') cls.push('b-is-text');
  if (variant === 'inverted') cls.push('b-is-inverted');
  if (rounded) cls.push('b-is-rounded');
  if (loading) cls.push('b-is-loading');
  if (fullWidth) cls.push('b-is-fullwidth');
  if (className) cls.push(className);
  const Tag = as;
  const extra = Tag === 'button' ? {
    disabled
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls.join(' ')
  }, extra, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PlayLoveToys Tag — wraps the b-style `b-tag` element.
 * Inline status/label pill. Optional delete button and addon grouping.
 */
function Tag({
  color,
  size,
  light = false,
  rounded = false,
  deletable = false,
  onDelete,
  className = '',
  children,
  ...rest
}) {
  const cls = ['b-tag'];
  if (color) cls.push(`b-is-${color}`);
  if (light) cls.push('b-is-light');
  if (size) cls.push(`b-is-${size}`);
  if (rounded) cls.push('b-is-rounded');
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls.join(' ')
  }, rest), children, deletable && /*#__PURE__*/React.createElement("button", {
    className: "b-delete b-is-small",
    "aria-label": "remove",
    onClick: onDelete
  }));
}

/** Group tags with `b-tags`; pass `addons` to fuse them into a single pill pair. */
function Tags({
  addons = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['b-tags'];
  if (addons) cls.push('b-has-addons');
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls.join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Tag, Tags });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Message.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PlayLoveToys Message — wraps the b-style `b-message` block (header + body).
 */
function Message({
  color,
  title,
  onDelete,
  className = '',
  children,
  ...rest
}) {
  const cls = ['b-message'];
  if (color) cls.push(`b-is-${color}`);
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement("article", _extends({
    className: cls.join(' ')
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    className: "b-message-header"
  }, /*#__PURE__*/React.createElement("p", null, title), onDelete && /*#__PURE__*/React.createElement("button", {
    className: "b-delete",
    "aria-label": "dismiss",
    onClick: onDelete
  })), /*#__PURE__*/React.createElement("div", {
    className: "b-message-body"
  }, children));
}
Object.assign(__ds_scope, { Message });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Message.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notification.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PlayLoveToys Notification — wraps the b-style `b-notification` banner.
 */
function Notification({
  color,
  light = false,
  onDelete,
  className = '',
  children,
  ...rest
}) {
  const cls = ['b-notification'];
  if (color) cls.push(`b-is-${color}`);
  if (light) cls.push('b-is-light');
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls.join(' ')
  }, rest), onDelete && /*#__PURE__*/React.createElement("button", {
    className: "b-delete",
    "aria-label": "dismiss",
    onClick: onDelete
  }), children);
}
Object.assign(__ds_scope, { Notification });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notification.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PlayLoveToys Checkbox — wraps the b-style `b-checkbox` label+input pattern.
 */
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['b-checkbox'];
  if (disabled) cls.push('b-is-disabled');
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement("label", {
    className: cls.join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), ' ', children);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PlayLoveToys Field — the b-style `b-field` wrapper: label + control + help.
 * Compose any form control (TextInput, Select, Checkbox) as children.
 */
function Field({
  label,
  help,
  helpState,
  grouped = false,
  expanded = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['b-field'];
  if (grouped) cls.push('b-is-grouped');
  if (className) cls.push(className);
  const controlCls = ['b-control'];
  if (expanded) controlCls.push('b-is-expanded');
  const helpCls = ['b-help'];
  if (helpState) helpCls.push(`b-is-${helpState}`);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls.join(' ')
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    className: "b-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: controlCls.join(' ')
  }, children), help && /*#__PURE__*/React.createElement("p", {
    className: helpCls.join(' ')
  }, help));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/**
 * PlayLoveToys Select — wraps the b-style `b-select` container + native select.
 */
function Select({
  fullWidth = false,
  size,
  state,
  rounded = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['b-select'];
  if (fullWidth) cls.push('b-is-fullwidth');
  if (size) cls.push(`b-is-${size}`);
  if (state) cls.push(`b-is-${state}`);
  if (rounded) cls.push('b-is-rounded');
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement("div", {
    className: cls.join(' ')
  }, /*#__PURE__*/React.createElement("select", rest, children));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PlayLoveToys TextInput — wraps the b-style `b-input`.
 */
function TextInput({
  state,
  size,
  rounded = false,
  className = '',
  type = 'text',
  ...rest
}) {
  const cls = ['b-input'];
  if (state) cls.push(`b-is-${state}`);
  if (size) cls.push(`b-is-${size}`);
  if (rounded) cls.push('b-is-rounded');
  if (className) cls.push(className);
  return /*#__PURE__*/React.createElement("input", _extends({
    className: cls.join(' '),
    type: type
  }, rest));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/CartDrawer.jsx
try { (() => {
/* PlayLoveToys storefront — Cart drawer (slide-over) */
function CartDrawer({
  open,
  items,
  onClose,
  onRemove
}) {
  const subtotal = items.reduce((s, it) => s + it.priceNum * it.qty, 0);
  const FREE = 59;
  const pct = Math.min(100, Math.round(subtotal / FREE * 100));
  const remaining = Math.max(0, FREE - subtotal);
  return /*#__PURE__*/React.createElement("div", {
    className: 'b-drawer' + (open ? ' b-is-active' : ''),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      pointerEvents: open ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(46,43,53,.5)',
      opacity: open ? 1 : 0,
      transition: 'opacity .24s'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '400px',
      maxWidth: '92vw',
      background: '#fff',
      boxShadow: 'var(--plt-shadow-lg)',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform .28s cubic-bezier(.22,1,.36,1)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px',
      borderBottom: '1px solid var(--plt-line)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--plt-font-display)',
      fontWeight: 600,
      fontSize: '20px',
      color: 'var(--plt-text-strong)'
    }
  }, "Your bag (", items.length, ")"), /*#__PURE__*/React.createElement("button", {
    className: "b-delete b-is-medium",
    onClick: onClose,
    "aria-label": "close"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      background: 'var(--plt-paper)',
      borderBottom: '1px solid var(--plt-line)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      margin: '0 0 8px',
      color: 'var(--plt-text)'
    }
  }, remaining > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, "Add ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--plt-pink)'
    }
  }, "$", remaining.toFixed(2)), " for free discreet shipping") : /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--plt-success)'
    }
  }, "You unlocked free shipping! \uD83C\uDF89")), /*#__PURE__*/React.createElement("progress", {
    className: "b-progress b-is-link b-is-small",
    value: pct,
    max: "100",
    style: {
      margin: 0
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 20px'
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--plt-text-muted)',
      textAlign: 'center',
      marginTop: '40px'
    }
  }, "Your bag is empty."), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '12px',
      padding: '14px 0',
      borderBottom: '1px solid var(--plt-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '64px',
      height: '64px',
      borderRadius: 'var(--plt-radius-md)',
      background: it.bg,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 700,
      fontSize: '14px',
      color: 'var(--plt-text-strong)',
      margin: 0
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '12px',
      color: 'var(--plt-text-muted)',
      margin: '2px 0 6px'
    }
  }, it.vendor, " \xB7 Qty ", it.qty), /*#__PURE__*/React.createElement("span", {
    className: "price-item",
    style: {
      fontSize: '1rem'
    }
  }, it.price)), /*#__PURE__*/React.createElement("button", {
    className: "b-delete",
    onClick: () => onRemove(i),
    "aria-label": "remove"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px',
      borderTop: '1px solid var(--plt-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    className: "price-item",
    style: {
      fontSize: '1.25rem'
    }
  }, "$", subtotal.toFixed(2))), /*#__PURE__*/React.createElement("button", {
    className: "b-button b-is-link b-is-large b-is-fullwidth b-is-rounded",
    disabled: items.length === 0
  }, "Checkout"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: '12px',
      color: 'var(--plt-text-muted)',
      margin: '10px 0 0'
    }
  }, "Taxes & shipping calculated at checkout"))));
}
window.CartDrawer = CartDrawer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/CollectionScreen.jsx
try { (() => {
/* PlayLoveToys storefront — Collection (product listing) screen */
function CollectionScreen({
  onProduct,
  onAdd
}) {
  const {
    ProductCard,
    Checkbox,
    Field,
    Select
  } = window.PlayLoveToysDesignSystem_88998d;
  const products = window.PLT_PRODUCTS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--plt-purple-soft)',
      padding: '34px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "b-breadcrumb",
    "aria-label": "breadcrumbs",
    style: {
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Shop")), /*#__PURE__*/React.createElement("li", {
    className: "b-is-active"
  }, /*#__PURE__*/React.createElement("a", {
    "aria-current": "page"
  }, "Vibrators")))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--plt-font-display)',
      fontWeight: 700,
      fontSize: '44px',
      color: 'var(--plt-purple-deep)',
      margin: '0 0 6px'
    }
  }, "Vibrators"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--plt-text)',
      margin: 0,
      maxWidth: '560px'
    }
  }, "From whisper-quiet bullets to iconic wands \u2014 our most-loved category, body-safe and rechargeable."))), /*#__PURE__*/React.createElement("section", {
    className: "b-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-columns"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-column b-is-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-box"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontWeight: 700,
      color: 'var(--plt-text-strong)',
      margin: '0 0 14px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/icon-filter.svg",
    alt: "",
    style: {
      width: '18px'
    }
  }), " Filters"), /*#__PURE__*/React.createElement("p", {
    className: "b-menu-label"
  }, "Category"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '16px'
    }
  }, ['Vibrators (24)', 'For Him (18)', 'Couples (12)', 'Wellness (9)'].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      marginBottom: '6px'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    defaultChecked: i === 0
  }, c)))), /*#__PURE__*/React.createElement("p", {
    className: "b-menu-label"
  }, "Price"), /*#__PURE__*/React.createElement("div", {
    className: "b-tags",
    style: {
      marginBottom: '16px'
    }
  }, ['Under $30', '$30–$75', '$75–$150', '$150+'].map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    className: "b-tag b-is-light",
    style: {
      cursor: 'pointer'
    }
  }, p))), /*#__PURE__*/React.createElement("p", {
    className: "b-menu-label"
  }, "Material"), /*#__PURE__*/React.createElement("div", null, ['Silicone', 'ABS plastic', 'Glass', 'Steel'].map(m => /*#__PURE__*/React.createElement("div", {
    key: m,
    style: {
      marginBottom: '6px'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, null, m)))))), /*#__PURE__*/React.createElement("div", {
    className: "b-column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-level b-is-mobile",
    style: {
      marginBottom: '18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-level-left"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--plt-text-muted)',
      fontSize: '14px'
    }
  }, products.length, " products")), /*#__PURE__*/React.createElement("div", {
    className: "b-level-right",
    style: {
      minWidth: '220px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    size: "small",
    defaultValue: "featured"
  }, /*#__PURE__*/React.createElement("option", {
    value: "featured"
  }, "Sort: Featured"), /*#__PURE__*/React.createElement("option", null, "Price: Low to High"), /*#__PURE__*/React.createElement("option", null, "Price: High to Low"), /*#__PURE__*/React.createElement("option", null, "Top rated"), /*#__PURE__*/React.createElement("option", null, "Newest")))), /*#__PURE__*/React.createElement("div", {
    className: "b-columns b-is-multiline"
  }, products.map(p => /*#__PURE__*/React.createElement("div", {
    className: "b-column b-is-4",
    key: p.id
  }, /*#__PURE__*/React.createElement(ProductCard, {
    vendor: p.vendor,
    title: p.title,
    rating: p.rating,
    reviewCount: p.reviews,
    price: p.price,
    compareAt: p.compareAt,
    saveLabel: p.save,
    badge: p.badge,
    badgeColor: p.badgeColor,
    imageBg: p.bg,
    onAdd: () => onAdd(p),
    onOpen: () => onProduct(p)
  })))), /*#__PURE__*/React.createElement("nav", {
    className: "b-pagination b-is-centered",
    style: {
      marginTop: '28px'
    }
  }, /*#__PURE__*/React.createElement("ul", {
    className: "b-pagination-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "b-pagination-link b-is-current"
  }, "1")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "b-pagination-link"
  }, "2")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "b-pagination-link"
  }, "3")))))))));
}
window.CollectionScreen = CollectionScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/CollectionScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Footer.jsx
try { (() => {
/* PlayLoveToys storefront — Footer */
function Footer() {
  const cols = [{
    h: 'Shop',
    items: ['Vibrators', 'For Him', 'Couples', 'Wellness', 'Sale']
  }, {
    h: 'Help',
    items: ['Shipping & returns', 'Discreet packaging', 'Track order', 'Contact us']
  }, {
    h: 'About',
    items: ['Our story', 'Body-safe promise', 'Sustainability', 'Affiliates']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--plt-charcoal)',
      color: 'rgba(255,255,255,.82)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container",
    style: {
      padding: '52px 0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-columns"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-column b-is-4"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/Logo-PlayLoveToys-3by2-800x534.png",
    alt: "PlayLoveToys",
    style: {
      height: '46px',
      filter: 'brightness(0) invert(1)',
      marginBottom: '14px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      maxWidth: '300px',
      lineHeight: 1.6
    }
  }, "Body-safe pleasure toys for grown-ups who get it. Discreet, curated, refreshingly un-awkward."), /*#__PURE__*/React.createElement("div", {
    className: "b-tags",
    style: {
      marginTop: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "b-tag b-is-dark"
  }, "18+"), /*#__PURE__*/React.createElement("span", {
    className: "b-tag b-is-dark"
  }, "Discreet"), /*#__PURE__*/React.createElement("span", {
    className: "b-tag b-is-dark"
  }, "Body-safe"))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    className: "b-column",
    key: c.h
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--plt-font-display)',
      fontWeight: 600,
      color: '#fff',
      margin: '0 0 12px'
    }
  }, c.h), c.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    style: {
      display: 'block',
      color: 'rgba(255,255,255,.78)',
      fontSize: '14px',
      padding: '4px 0',
      cursor: 'pointer'
    }
  }, it)))), /*#__PURE__*/React.createElement("div", {
    className: "b-column b-is-3"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--plt-font-display)',
      fontWeight: 600,
      color: '#fff',
      margin: '0 0 12px'
    }
  }, "Get 15% off"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      marginBottom: '10px'
    }
  }, "Early drops & members-only deals."), /*#__PURE__*/React.createElement("div", {
    className: "b-field b-has-addons"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-control b-is-expanded"
  }, /*#__PURE__*/React.createElement("input", {
    className: "b-input b-is-small",
    placeholder: "you@email.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "b-control"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b-button b-is-link b-is-small"
  }, "Join"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.14)',
      marginTop: '36px',
      paddingTop: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '8px',
      fontSize: '13px',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 PlayLoveToys. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 Your privacy choices"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Header.jsx
try { (() => {
/* PlayLoveToys storefront — Header (navbar + mega menu + search + cart) */
function Header({
  cartCount,
  onNav,
  onCart,
  active
}) {
  const [mega, setMega] = React.useState(false);
  const link = (key, label) => /*#__PURE__*/React.createElement("a", {
    className: 'b-navbar-item' + (active === key ? ' b-is-active' : ''),
    onClick: () => onNav(key),
    style: {
      cursor: 'pointer',
      fontWeight: 600
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--plt-gradient)',
      color: '#fff',
      textAlign: 'center',
      fontSize: '13px',
      fontWeight: 600,
      padding: '7px 16px',
      letterSpacing: '.02em'
    }
  }, "Free discreet shipping over $59 \xB7 Plain packaging, always"), /*#__PURE__*/React.createElement("nav", {
    className: "b-navbar",
    role: "navigation",
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--plt-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-navbar-brand",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "b-navbar-item",
    onClick: () => onNav('home'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/Logo-PlayLoveToys-3by2-800x534.png",
    alt: "PlayLoveToys",
    style: {
      maxHeight: '40px'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "b-navbar-menu b-is-active",
    style: {
      boxShadow: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-navbar-start",
    style: {
      alignItems: 'center',
      marginLeft: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-navbar-item",
    style: {
      position: 'relative',
      cursor: 'pointer',
      fontWeight: 600
    },
    onMouseEnter: () => setMega(true),
    onMouseLeave: () => setMega(false)
  }, /*#__PURE__*/React.createElement("a", {
    className: 'b-navbar-item' + (active === 'collection' ? ' b-is-active' : ''),
    onClick: () => onNav('collection'),
    style: {
      padding: 0
    }
  }, "Shop \u25BE"), mega && /*#__PURE__*/React.createElement(MegaMenu, {
    onPick: () => {
      setMega(false);
      onNav('collection');
    }
  })), link('collection', 'New'), link('collection', 'Best Sellers'), /*#__PURE__*/React.createElement("a", {
    className: "b-navbar-item b-has-text-link",
    style: {
      cursor: 'pointer',
      fontWeight: 700
    },
    onClick: () => onNav('collection')
  }, "Sale")), /*#__PURE__*/React.createElement("div", {
    className: "b-navbar-end",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-navbar-item",
    style: {
      minWidth: '230px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-control"
  }, /*#__PURE__*/React.createElement("input", {
    className: "b-input b-is-rounded b-is-small",
    placeholder: "Search toys, brands\u2026"
  }))), /*#__PURE__*/React.createElement("a", {
    className: "b-navbar-item",
    style: {
      cursor: 'pointer'
    },
    title: "Account"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/icon-person.svg",
    alt: "Account",
    style: {
      width: '22px',
      height: '22px'
    }
  })), /*#__PURE__*/React.createElement("a", {
    className: "b-navbar-item",
    style: {
      cursor: 'pointer',
      position: 'relative'
    },
    onClick: onCart,
    title: "Cart"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/icon-cart.svg",
    alt: "Cart",
    style: {
      width: '24px',
      height: '24px'
    }
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "b-badge-pill-link",
    style: {
      position: 'absolute',
      top: '6px',
      right: '2px',
      fontSize: '10px',
      padding: '1px 7px'
    }
  }, cartCount))))));
}
function MegaMenu({
  onPick
}) {
  const cols = [{
    h: 'Vibrators',
    items: ['Rabbit', 'Wand', 'Bullet', 'G-Spot']
  }, {
    h: 'For Him',
    items: ['Masturbators', 'Cock Rings', 'Sleeves', 'Prostate']
  }, {
    h: 'Couples',
    items: ['Games', 'Bondage', 'Kits', 'Remote Control']
  }, {
    h: 'Wellness',
    items: ['Lubricants', 'Toy Cleaner', 'Massage', 'Arousal']
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      background: '#fff',
      borderRadius: 'var(--plt-radius-lg)',
      boxShadow: 'var(--plt-shadow-lg)',
      padding: '22px 26px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,160px)',
      gap: '22px',
      border: '1px solid var(--plt-line)'
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--plt-font-display)',
      fontWeight: 600,
      color: 'var(--plt-purple)',
      margin: '0 0 8px',
      fontSize: '15px'
    }
  }, c.h), c.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    onClick: onPick,
    style: {
      display: 'block',
      padding: '4px 0',
      color: 'var(--plt-text)',
      fontSize: '14px',
      cursor: 'pointer'
    }
  }, it)))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/HomeScreen.jsx
try { (() => {
/* PlayLoveToys storefront — Home screen */
function HomeScreen({
  onShop,
  onProduct,
  onAdd
}) {
  const {
    ProductCard
  } = window.PlayLoveToysDesignSystem_88998d;
  const featured = window.PLT_PRODUCTS.slice(0, 4);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--plt-gradient)',
      color: '#fff',
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-columns b-is-vcentered"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-column b-is-7"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b-tag b-is-link",
    style: {
      marginBottom: '18px'
    }
  }, "New season drop"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--plt-font-display)',
      fontWeight: 700,
      fontSize: '64px',
      lineHeight: 1.02,
      margin: '0 0 18px',
      letterSpacing: '-0.01em'
    }
  }, "Play more.", /*#__PURE__*/React.createElement("br", null), "Love louder."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '19px',
      maxWidth: '440px',
      opacity: 0.92,
      margin: '0 0 28px'
    }
  }, "Body-safe pleasure toys for grown-ups who get it. Curated, discreet, and refreshingly un-awkward."), /*#__PURE__*/React.createElement("div", {
    className: "b-buttons"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b-button b-is-link b-is-large b-is-rounded",
    onClick: onShop
  }, "Shop the drop"), /*#__PURE__*/React.createElement("button", {
    className: "b-button b-is-large b-is-rounded b-is-inverted b-is-outlined",
    onClick: onShop,
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,.6)'
    }
  }, "Best sellers"))), /*#__PURE__*/React.createElement("div", {
    className: "b-column b-is-5"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      borderRadius: 'var(--plt-radius-xl)',
      background: 'rgba(255,255,255,.12)',
      border: '1px solid rgba(255,255,255,.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/Logo-PlayLoveToys-3by2-800x534.png",
    alt: "",
    style: {
      width: '70%',
      filter: 'brightness(0) invert(1)',
      opacity: 0.95
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--plt-charcoal)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-columns b-is-mobile b-has-text-centered",
    style: {
      padding: '14px 0'
    }
  }, ['Discreet plain packaging', '100% body-safe materials', 'Free shipping over $59', '30-day happiness guarantee'].map(t => /*#__PURE__*/React.createElement("div", {
    className: "b-column",
    key: t,
    style: {
      fontSize: '13.5px',
      fontWeight: 600,
      opacity: 0.9
    }
  }, t))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--plt-font-display)',
      fontWeight: 600,
      fontSize: '32px',
      color: 'var(--plt-text-strong)',
      margin: '0 0 22px'
    }
  }, "Shop by category"), /*#__PURE__*/React.createElement("div", {
    className: "b-columns b-is-multiline"
  }, window.PLT_CATEGORIES.map(c => /*#__PURE__*/React.createElement("div", {
    className: "b-column b-is-3",
    key: c.name
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onShop,
    style: {
      display: 'block',
      cursor: 'pointer',
      borderRadius: 'var(--plt-radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--plt-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '150px',
      background: c.bg
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--plt-text-strong)',
      fontSize: '17px'
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: c.accent,
      fontWeight: 700
    }
  }, "\u2192")))))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section",
    style: {
      background: 'var(--plt-paper)',
      paddingTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: '22px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--plt-font-display)',
      fontWeight: 600,
      fontSize: '32px',
      color: 'var(--plt-text-strong)',
      margin: 0
    }
  }, "Best sellers"), /*#__PURE__*/React.createElement("a", {
    onClick: onShop,
    className: "b-has-text-link",
    style: {
      cursor: 'pointer',
      fontWeight: 700
    }
  }, "View all \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "b-columns b-is-multiline"
  }, featured.map(p => /*#__PURE__*/React.createElement("div", {
    className: "b-column b-is-3",
    key: p.id
  }, /*#__PURE__*/React.createElement(ProductCard, {
    vendor: p.vendor,
    title: p.title,
    rating: p.rating,
    reviewCount: p.reviews,
    price: p.price,
    compareAt: p.compareAt,
    saveLabel: p.save,
    badge: p.badge,
    badgeColor: p.badgeColor,
    imageBg: p.bg,
    onAdd: () => onAdd(p),
    onOpen: () => onProduct(p)
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--plt-gradient-warm)',
      borderRadius: 'var(--plt-radius-xl)',
      padding: '46px',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--plt-font-display)',
      fontWeight: 700,
      fontSize: '30px',
      margin: '0 0 6px'
    }
  }, "First order? Take 15% off."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      opacity: 0.92,
      fontSize: '16px'
    }
  }, "Join the club for early drops and members-only deals.")), /*#__PURE__*/React.createElement("button", {
    className: "b-button b-is-large b-is-rounded",
    style: {
      background: '#fff',
      color: 'var(--plt-pink-deep)',
      fontWeight: 700
    },
    onClick: onShop
  }, "Get my code")))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductScreen.jsx
try { (() => {
/* PlayLoveToys storefront — Product detail screen */
function ProductScreen({
  product,
  onAdd,
  onShop,
  onProduct
}) {
  const {
    ProductCard,
    StarRating,
    PriceTag,
    Field,
    Select,
    Tag
  } = window.PlayLoveToysDesignSystem_88998d;
  const p = product || window.PLT_PRODUCTS[0];
  const [qty, setQty] = React.useState(1);
  const [tab, setTab] = React.useState('desc');
  const related = window.PLT_PRODUCTS.filter(x => x.id !== p.id).slice(0, 4);
  return /*#__PURE__*/React.createElement("section", {
    className: "b-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "b-breadcrumb",
    "aria-label": "breadcrumbs",
    style: {
      marginBottom: '18px'
    }
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: onShop,
    style: {
      cursor: 'pointer'
    }
  }, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: onShop,
    style: {
      cursor: 'pointer'
    }
  }, p.cat)), /*#__PURE__*/React.createElement("li", {
    className: "b-is-active"
  }, /*#__PURE__*/React.createElement("a", {
    "aria-current": "page"
  }, p.title)))), /*#__PURE__*/React.createElement("div", {
    className: "b-columns"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-column b-is-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-has-image-overlay",
    style: {
      borderRadius: 'var(--plt-radius-xl)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      background: p.bg
    }
  }), p.badge && /*#__PURE__*/React.createElement("span", {
    className: `b-badge-${p.badgeColor} b-tag-top-left`,
    style: {
      margin: '14px'
    }
  }, p.badge)), /*#__PURE__*/React.createElement("div", {
    className: "b-columns b-is-mobile",
    style: {
      marginTop: '10px'
    }
  }, [p.bg, 'var(--plt-purple-soft)', 'var(--plt-teal-soft)', 'var(--plt-pink-soft)'].map((b, i) => /*#__PURE__*/React.createElement("div", {
    className: "b-column b-is-3",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      background: b,
      borderRadius: 'var(--plt-radius-md)',
      border: i === 0 ? '2px solid var(--plt-pink)' : '1px solid var(--plt-line)',
      cursor: 'pointer'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "b-column b-is-6"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textTransform: 'uppercase',
      letterSpacing: '.14em',
      fontSize: '12px',
      color: 'var(--plt-text-muted)',
      fontWeight: 700,
      margin: '0 0 6px'
    }
  }, p.vendor), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--plt-font-display)',
      fontWeight: 600,
      fontSize: '40px',
      color: 'var(--plt-text-strong)',
      lineHeight: 1.05,
      margin: '0 0 12px'
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement(StarRating, {
    value: p.rating,
    count: p.reviews,
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '22px'
    }
  }, /*#__PURE__*/React.createElement(PriceTag, {
    price: p.price,
    compareAt: p.compareAt,
    saveLabel: p.save
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '18px',
      maxWidth: '440px'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Color"
  }, /*#__PURE__*/React.createElement(Select, {
    fullWidth: true,
    defaultValue: "Plum"
  }, /*#__PURE__*/React.createElement("option", null, "Plum"), /*#__PURE__*/React.createElement("option", null, "Black"), /*#__PURE__*/React.createElement("option", null, "Coral")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      alignItems: 'stretch',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1px solid var(--plt-line-strong)',
      borderRadius: 'var(--plt-radius)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "b-button b-is-ghost",
    onClick: () => setQty(q => Math.max(1, q - 1)),
    style: {
      borderRadius: 0
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: '40px',
      textAlign: 'center',
      fontWeight: 700
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    className: "b-button b-is-ghost",
    onClick: () => setQty(q => q + 1),
    style: {
      borderRadius: 0
    }
  }, "+")), /*#__PURE__*/React.createElement("button", {
    className: "b-button b-is-link b-is-large b-is-fullwidth",
    onClick: () => onAdd(p, qty),
    style: {
      flex: 1
    }
  }, "Add to cart \xB7 ", p.price)), /*#__PURE__*/React.createElement("button", {
    className: "b-button b-is-primary b-is-outlined b-is-fullwidth",
    style: {
      marginBottom: '22px'
    }
  }, "\u2661 Save to wishlist"), /*#__PURE__*/React.createElement("div", {
    className: "b-columns b-is-mobile b-has-text-centered",
    style: {
      borderTop: '1px solid var(--plt-line)',
      borderBottom: '1px solid var(--plt-line)',
      margin: 0
    }
  }, ['🚚 Free over $59', '📦 Plain packaging', '🔋 USB rechargeable'].map(t => /*#__PURE__*/React.createElement("div", {
    className: "b-column",
    key: t,
    style: {
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--plt-text)',
      padding: '14px 6px'
    }
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '40px',
      maxWidth: '760px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-tabs"
  }, /*#__PURE__*/React.createElement("ul", null, [['desc', 'Description'], ['specs', 'Specs'], ['care', 'Care']].map(([k, l]) => /*#__PURE__*/React.createElement("li", {
    key: k,
    className: tab === k ? 'b-is-active' : ''
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => setTab(k),
    style: {
      cursor: 'pointer'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "b-content",
    style: {
      paddingTop: '6px'
    }
  }, tab === 'desc' && /*#__PURE__*/React.createElement("p", null, "A whisper-quiet, body-safe favorite designed for solo or partnered play. Ten rumbly modes, fully waterproof, and rechargeable in 90 minutes. Made from premium phthalate-free silicone with a velvet-soft finish."), tab === 'specs' && /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Material: medical-grade silicone"), /*#__PURE__*/React.createElement("li", null, "Modes: 10 vibration patterns"), /*#__PURE__*/React.createElement("li", null, "Waterproof: IPX7"), /*#__PURE__*/React.createElement("li", null, "Battery: 2 hrs runtime \xB7 USB-C")), tab === 'care' && /*#__PURE__*/React.createElement("p", null, "Wash before and after use with warm water and toy cleaner. Use only water-based lubricants. Store in the included satin pouch, away from direct sunlight."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '44px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--plt-font-display)',
      fontWeight: 600,
      fontSize: '28px',
      color: 'var(--plt-text-strong)',
      margin: '0 0 20px'
    }
  }, "You might also like"), /*#__PURE__*/React.createElement("div", {
    className: "b-columns b-is-multiline"
  }, related.map(r => /*#__PURE__*/React.createElement("div", {
    className: "b-column b-is-3",
    key: r.id
  }, /*#__PURE__*/React.createElement(ProductCard, {
    vendor: r.vendor,
    title: r.title,
    rating: r.rating,
    reviewCount: r.reviews,
    price: r.price,
    compareAt: r.compareAt,
    saveLabel: r.save,
    badge: r.badge,
    badgeColor: r.badgeColor,
    imageBg: r.bg,
    onAdd: () => onAdd(r),
    onOpen: () => onProduct && onProduct(r)
  })))))));
}
window.ProductScreen = ProductScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/app.jsx
try { (() => {
/* PlayLoveToys storefront — interactive shell */
function App() {
  const [screen, setScreen] = React.useState('home');
  const [product, setProduct] = React.useState(null);
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const priceNum = s => parseFloat(String(s).replace(/[^0-9.]/g, '')) || 0;
  const add = (p, qty = 1) => {
    setCart(c => [...c, {
      ...p,
      qty,
      priceNum: priceNum(p.price)
    }]);
    setCartOpen(true);
  };
  const remove = i => setCart(c => c.filter((_, idx) => idx !== i));
  const nav = s => {
    window.scrollTo(0, 0);
    setScreen(s);
  };
  const openProduct = p => {
    setProduct(p);
    nav('product');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    cartCount: cart.length,
    active: screen,
    onNav: nav,
    onCart: () => setCartOpen(true)
  }), screen === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    onShop: () => nav('collection'),
    onProduct: openProduct,
    onAdd: add
  }), screen === 'collection' && /*#__PURE__*/React.createElement(CollectionScreen, {
    onProduct: openProduct,
    onAdd: add
  }), screen === 'product' && /*#__PURE__*/React.createElement(ProductScreen, {
    product: product,
    onAdd: add,
    onShop: () => nav('collection'),
    onProduct: openProduct
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(CartDrawer, {
    open: cartOpen,
    items: cart,
    onClose: () => setCartOpen(false),
    onRemove: remove
  }));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.jsx
try { (() => {
/* PlayLoveToys storefront — shared demo catalog */
window.PLT_PRODUCTS = [{
  id: 'chorus',
  vendor: 'We-Vibe',
  title: 'Chorus Couples Vibrator',
  price: '$34.30',
  compareAt: '$49.00',
  save: 'Save 30%',
  rating: 4.5,
  reviews: 212,
  badge: 'BESTSELLER',
  badgeColor: 'danger',
  bg: 'var(--plt-gradient-warm)',
  cat: 'Couples'
}, {
  id: 'sona',
  vendor: 'Lelo',
  title: 'Sona 2 Cruise',
  price: '$139.00',
  rating: 5,
  reviews: 89,
  badge: 'NEW',
  badgeColor: 'link',
  bg: 'var(--plt-purple-soft)',
  cat: 'Vibrators'
}, {
  id: 'tetra',
  vendor: 'Tenga',
  title: 'Spinner Tetra',
  price: '$28.00',
  rating: 4,
  reviews: 47,
  badge: 'LOW STOCK',
  badgeColor: 'warning',
  bg: 'var(--plt-teal-soft)',
  cat: 'For Him'
}, {
  id: 'magicwand',
  vendor: 'Magic Wand',
  title: 'Rechargeable Wand',
  price: '$124.95',
  rating: 5,
  reviews: 1043,
  badge: 'ICONIC',
  badgeColor: 'primary',
  bg: 'linear-gradient(135deg,#efeaf5,#fde7ed)',
  cat: 'Vibrators'
}, {
  id: 'satisfyer',
  vendor: 'Satisfyer',
  title: 'Pro 2 Generation 3',
  price: '$39.95',
  compareAt: '$59.95',
  save: 'Save 33%',
  rating: 4.5,
  reviews: 678,
  badge: 'SALE',
  badgeColor: 'danger',
  bg: 'var(--plt-pink-soft)',
  cat: 'Vibrators'
}, {
  id: 'tango',
  vendor: 'We-Vibe',
  title: 'Tango X Bullet',
  price: '$79.00',
  rating: 4.5,
  reviews: 156,
  bg: 'linear-gradient(135deg,#e0f1f4,#efeaf5)',
  cat: 'Vibrators'
}, {
  id: 'ringo',
  vendor: 'Screaming O',
  title: 'RingO Pro Set',
  price: '$19.99',
  rating: 4,
  reviews: 92,
  badge: 'NEW',
  badgeColor: 'link',
  bg: 'var(--plt-teal-soft)',
  cat: 'For Him'
}, {
  id: 'tiani',
  vendor: 'Lelo',
  title: 'Tiani Harmony',
  price: '$179.00',
  compareAt: '$199.00',
  save: 'Save 10%',
  rating: 4.5,
  reviews: 64,
  bg: 'var(--plt-gradient-warm)',
  cat: 'Couples'
}];
window.PLT_CATEGORIES = [{
  name: 'Vibrators',
  bg: 'var(--plt-purple-soft)',
  accent: 'var(--plt-purple)'
}, {
  name: 'For Him',
  bg: 'var(--plt-teal-soft)',
  accent: 'var(--plt-teal)'
}, {
  name: 'Couples',
  bg: 'var(--plt-pink-soft)',
  accent: 'var(--plt-pink)'
}, {
  name: 'Wellness',
  bg: 'linear-gradient(135deg,#efeaf5,#e0f1f4)',
  accent: 'var(--plt-purple)'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.Box = __ds_scope.Box;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Tags = __ds_scope.Tags;

__ds_ns.Message = __ds_scope.Message;

__ds_ns.Notification = __ds_scope.Notification;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextInput = __ds_scope.TextInput;

})();
