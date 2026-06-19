import React from 'react';

/**
 * PlayLoveToys StarRating — compact star rating with optional review count.
 * No b-style primitive exists for ratings, so this is a bespoke component
 * built only from brand tokens (the pink accent for filled stars).
 */
export function StarRating({ value = 0, max = 5, count, size = 15, className = '', ...rest }) {
  const full = Math.round(value);
  const stars = Array.from({ length: max }, (_, i) => (i < full ? '★' : '☆'));
  return (
    <span
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
      {...rest}
    >
      <span style={{ color: 'var(--plt-pink)', fontSize: `${size}px`, letterSpacing: '1px', lineHeight: 1 }}>
        {stars.join('')}
      </span>
      {count != null && (
        <span style={{ fontSize: `${size - 3}px`, color: 'var(--plt-text-muted)' }}>({count})</span>
      )}
    </span>
  );
}
