import React from 'react';

/**
 * PlayLoveToys TextInput — wraps the b-style `b-input`.
 */
export function TextInput({
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
  return <input className={cls.join(' ')} type={type} {...rest} />;
}
