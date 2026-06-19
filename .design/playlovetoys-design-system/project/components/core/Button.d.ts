import * as React from 'react';

export type ButtonColor =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'light';

export type ButtonVariant = 'outlined' | 'light' | 'ghost' | 'text' | 'inverted';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Semantic color. Pink CTAs use `link`; brand-purple actions use `primary`.
   * @default "primary"
   */
  color?: ButtonColor;
  /** Size modifier. Omit for default. */
  size?: 'small' | 'medium' | 'large';
  /** Visual treatment. Omit for solid fill. */
  variant?: ButtonVariant;
  /** Pill shape. */
  rounded?: boolean;
  /** Show spinner + lock width. */
  loading?: boolean;
  /** Stretch to container width. */
  fullWidth?: boolean;
  /** Render as another element (e.g. "a"). @default "button" */
  as?: 'button' | 'a';
}

/**
 * Primary action control, styled with the b-style `b-button` element.
 * @startingPoint section="Core" subtitle="Brand buttons — solid, outlined, ghost, pill" viewport="700x220"
 */
export function Button(props: ButtonProps): JSX.Element;
