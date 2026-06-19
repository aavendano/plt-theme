import * as React from 'react';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Validation state — colors the border. */
  state?: 'success' | 'warning' | 'danger' | 'info' | 'primary' | 'link';
  /** Size modifier. */
  size?: 'small' | 'medium' | 'large';
  /** Pill shape. */
  rounded?: boolean;
}

/** Text field styled with the b-style `b-input`. */
export function TextInput(props: TextInputProps): JSX.Element;
