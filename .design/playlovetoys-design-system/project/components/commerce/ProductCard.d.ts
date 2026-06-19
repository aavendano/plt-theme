import * as React from 'react';

export interface ProductCardProps {
  /** Product name. */
  title: React.ReactNode;
  /** Brand / vendor, shown as an uppercase eyebrow. */
  vendor?: React.ReactNode;
  /** Current price, pre-formatted. */
  price: React.ReactNode;
  /** Original price — renders the sale treatment. */
  compareAt?: React.ReactNode;
  /** Savings label (e.g. "Save 30%"). */
  saveLabel?: React.ReactNode;
  /** Overlay badge text (e.g. "NEW", "BESTSELLER"). */
  badge?: React.ReactNode;
  /** Overlay badge color. @default "link" */
  badgeColor?: 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger' | 'dark';
  /** Badge corner. @default "top-left" */
  badgePosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  /** Star rating value. */
  rating?: number;
  /** Review count. */
  reviewCount?: number;
  /** Product image URL. Falls back to a brand-tinted block. */
  image?: string;
  /** Placeholder background when no image (solid or gradient). */
  imageBg?: string;
  /** Add-to-cart button label. @default "Add to cart" */
  ctaLabel?: React.ReactNode;
  /** Add-to-cart handler. */
  onAdd?: React.MouseEventHandler<HTMLButtonElement>;
  /** When set, the image and title become clickable (opens product detail). */
  onOpen?: React.MouseEventHandler<HTMLElement>;
  className?: string;
}

/**
 * Storefront product tile — image with overlay badge, title, rating, price, CTA.
 * @startingPoint section="Commerce" subtitle="Product tiles with badges, ratings & sale prices" viewport="760x440"
 */
export function ProductCard(props: ProductCardProps): JSX.Element;
