import React from 'react';

/**
 * PlayLoveToys Tag — wraps the b-style `b-tag` element.
 * Inline status/label pill. Optional delete button and addon grouping.
 */
export function Tag({
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

  return (
    <span className={cls.join(' ')} {...rest}>
      {children}
      {deletable && (
        <button className="b-delete b-is-small" aria-label="remove" onClick={onDelete} />
      )}
    </span>
  );
}

/** Group tags with `b-tags`; pass `addons` to fuse them into a single pill pair. */
export function Tags({ addons = false, className = '', children, ...rest }) {
  const cls = ['b-tags'];
  if (addons) cls.push('b-has-addons');
  if (className) cls.push(className);
  return (
    <div className={cls.join(' ')} {...rest}>
      {children}
    </div>
  );
}
