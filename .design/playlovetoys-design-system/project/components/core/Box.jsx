import React from 'react';

/**
 * PlayLoveToys Box — wraps the b-style `b-box`: a white, softly-shadowed,
 * rounded surface for grouping content. The brand's default card surface.
 */
export function Box({ className = '', children, ...rest }) {
  const cls = ['b-box'];
  if (className) cls.push(className);
  return (
    <div className={cls.join(' ')} {...rest}>
      {children}
    </div>
  );
}
