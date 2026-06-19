import * as React from 'react';

export interface StarRatingProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Rating value, 0–max. */
  value?: number;
  /** Maximum stars. @default 5 */
  max?: number;
  /** Review count shown in parentheses. */
  count?: number;
  /** Star pixel size. @default 15 */
  size?: number;
}

/** Pink star rating with optional review count. */
export function StarRating(props: StarRatingProps): JSX.Element;
