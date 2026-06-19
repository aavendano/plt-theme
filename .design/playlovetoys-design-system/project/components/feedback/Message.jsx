import React from 'react';

/**
 * PlayLoveToys Message — wraps the b-style `b-message` block (header + body).
 */
export function Message({
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
  return (
    <article className={cls.join(' ')} {...rest}>
      {title && (
        <div className="b-message-header">
          <p>{title}</p>
          {onDelete && <button className="b-delete" aria-label="dismiss" onClick={onDelete} />}
        </div>
      )}
      <div className="b-message-body">{children}</div>
    </article>
  );
}
