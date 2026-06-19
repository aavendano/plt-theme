import React from 'react';

/**
 * PlayLoveToys Select — wraps the b-style `b-select` container + native select.
 */
export function Select({
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
  return (
    <div className={cls.join(' ')}>
      <select {...rest}>{children}</select>
    </div>
  );
}
