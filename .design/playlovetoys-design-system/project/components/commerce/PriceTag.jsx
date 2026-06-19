import React from 'react';

/**
 * PlayLoveToys PriceTag — current price with optional was-price + save badge.
 * Uses the storefront's real price classes (price-item, custom-price-text-was).
 */
export function PriceTag({ price, compareAt, saveLabel, className = '', ...rest }) {
  const onSale = compareAt != null;
  return (
    <span
      className={className}
      style={{ display: 'inline-flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap' }}
      {...rest}
    >
      <span className="price-item" style={onSale ? { color: 'var(--plt-pink)' } : undefined}>
        {price}
      </span>
      {onSale && (
        <span className="custom-price-text-was">
          <s>{compareAt}</s>
        </span>
      )}
      {onSale && saveLabel && <span className="b-tag b-is-danger b-is-light b-is-small">{saveLabel}</span>}
    </span>
  );
}
