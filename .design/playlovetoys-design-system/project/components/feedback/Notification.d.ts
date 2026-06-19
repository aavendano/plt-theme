import * as React from 'react';

export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Semantic color. */
  color?: 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger';
  /** Soft tinted background. */
  light?: boolean;
  /** Render a dismiss (×) button; pass a handler. */
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * Inline banner for promos, shipping notices and alerts (b-style `b-notification`).
 * @startingPoint section="Feedback" subtitle="Banners & inline messages" viewport="700x260"
 */
export function Notification(props: NotificationProps): JSX.Element;
