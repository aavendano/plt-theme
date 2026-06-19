import React from 'react';

/**
 * PlayLoveToys Button — wraps the b-style `b-button` element.
 * Renders only framework classes (b-button, b-is-*); never custom CSS.
 */
export function Button({
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
  const extra = Tag === 'button' ? { disabled } : {};
  return (
    <Tag className={cls.join(' ')} {...extra} {...rest}>
      {children}
    </Tag>
  );
}
