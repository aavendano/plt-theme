import React from 'react';

/**
 * PlayLoveToys Notification — wraps the b-style `b-notification` banner.
 */
export function Notification({
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
  return (
    <div className={cls.join(' ')} {...rest}>
      {onDelete && <button className="b-delete" aria-label="dismiss" onClick={onDelete} />}
      {children}
    </div>
  );
}
