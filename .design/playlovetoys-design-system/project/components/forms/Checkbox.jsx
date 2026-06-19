import React from 'react';

/**
 * PlayLoveToys Checkbox — wraps the b-style `b-checkbox` label+input pattern.
 */
export function Checkbox({ checked, defaultChecked, onChange, disabled = false, className = '', children, ...rest }) {
  const cls = ['b-checkbox'];
  if (disabled) cls.push('b-is-disabled');
  if (className) cls.push(className);
  return (
    <label className={cls.join(' ')}>
      <input
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />{' '}
      {children}
    </label>
  );
}
