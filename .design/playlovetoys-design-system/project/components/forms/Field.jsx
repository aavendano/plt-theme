import React from 'react';

/**
 * PlayLoveToys Field — the b-style `b-field` wrapper: label + control + help.
 * Compose any form control (TextInput, Select, Checkbox) as children.
 */
export function Field({
  label,
  help,
  helpState,
  grouped = false,
  expanded = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['b-field'];
  if (grouped) cls.push('b-is-grouped');
  if (className) cls.push(className);
  const controlCls = ['b-control'];
  if (expanded) controlCls.push('b-is-expanded');
  const helpCls = ['b-help'];
  if (helpState) helpCls.push(`b-is-${helpState}`);
  return (
    <div className={cls.join(' ')} {...rest}>
      {label && <label className="b-label">{label}</label>}
      <div className={controlCls.join(' ')}>{children}</div>
      {help && <p className={helpCls.join(' ')}>{help}</p>}
    </div>
  );
}
