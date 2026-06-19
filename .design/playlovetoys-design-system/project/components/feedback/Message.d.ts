import * as React from 'react';

export interface MessageProps extends React.HTMLAttributes<HTMLElement> {
  /** Semantic color. */
  color?: 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger' | 'dark';
  /** Optional header title — renders the `b-message-header` bar. */
  title?: React.ReactNode;
  /** Render a dismiss button in the header. */
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
}

/** Titled callout block (b-style `b-message`) for tips and policy notes. */
export function Message(props: MessageProps): JSX.Element;
