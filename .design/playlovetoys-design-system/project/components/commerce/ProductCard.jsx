import React from 'react';
import { PriceTag } from './PriceTag.jsx';
import { StarRating } from './StarRating.jsx';

/**
 * PlayLoveToys ProductCard — the storefront product tile.
 * Composes b-card + the overlay-badge toolkit (b-has-image-overlay /
 * b-badge-{color} / b-tag-top-left) with PriceTag, StarRating and a
 * pink add-to-cart button (b-button b-is-link).
 */
export function ProductCard({
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
  const openable = onOpen ? { onClick: onOpen, style: { cursor: 'pointer' } } : {};
  const cls = ['b-card'];
  if (className) cls.push(className);
  return (
    <div className={cls.join(' ')} style={{ display: 'flex', flexDirection: 'column', height: '100%' }} {...rest}>
      <div className="b-card-image" {...openable}>
        <div className="b-has-image-overlay">
          <figure className="b-image b-is-1by1" style={{ margin: 0, background: imageBg || 'var(--plt-purple-soft)' }}>
            {image && <img src={image} alt={title} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />}
          </figure>
          {badge && <span className={`b-badge-${badgeColor} b-tag-${badgePosition}`}>{badge}</span>}
        </div>
      </div>
      <div
        className="b-card-content"
        style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, padding: '1rem' }}
      >
        {vendor && (
          <p style={{ textTransform: 'uppercase', letterSpacing: '.12em', fontSize: '11px', color: 'var(--plt-text-muted)', fontWeight: 600, margin: '0 0 4px' }}>
            {vendor}
          </p>
        )}
        <p className="b-title b-is-6" style={{ marginBottom: '6px', ...(onOpen ? { cursor: 'pointer' } : {}) }} {...(onOpen ? { onClick: onOpen } : {})}>{title}</p>
        {rating != null && (
          <div style={{ marginBottom: '10px' }}>
            <StarRating value={rating} count={reviewCount} />
          </div>
        )}
        <div style={{ marginTop: 'auto' }}>
          <PriceTag price={price} compareAt={compareAt} saveLabel={saveLabel} />
        </div>
        <button className="b-button b-is-link b-is-fullwidth" style={{ marginTop: '12px' }} onClick={onAdd}>
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
