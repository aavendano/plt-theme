import * as React from 'react';

export type TagColor =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'light';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Semantic color. Omit for neutral grey. */
  color?: TagColor;
  /** Size modifier. */
  size?: 'small' | 'medium' | 'large';
  /** Soft tinted background instead of solid fill. */
  light?: boolean;
  /** Pill shape. */
  rounded?: boolean;
  /** Render a trailing delete (×) button. */
  deletable?: boolean;
  /** Click handler for the delete button. */
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface TagsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fuse two child tags into one addon pair (e.g. label + value). */
  addons?: boolean;
}

/**
 * Inline status / category pill, styled with the b-style `b-tag` element.
 * @startingPoint section="Core" subtitle="Status & category tags + addon pairs" viewport="700x160"
 */
export function Tag(props: TagProps): JSX.Element;
export function Tags(props: TagsProps): JSX.Element;
