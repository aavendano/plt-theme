import * as React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Stretch to container width. */
  fullWidth?: boolean;
  /** Size modifier. */
  size?: 'small' | 'medium' | 'large';
  /** Validation state. */
  state?: 'success' | 'warning' | 'danger';
  /** Pill shape. */
  rounded?: boolean;
}

/** Dropdown styled with the b-style `b-select` wrapper. */
export function Select(props: SelectProps): JSX.Element;
