import * as React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Controlled checked state. */
  checked?: boolean;
  /** Label content. */
  children?: React.ReactNode;
}

/** Checkbox styled with the b-style `b-checkbox` label pattern. */
export function Checkbox(props: CheckboxProps): JSX.Element;
