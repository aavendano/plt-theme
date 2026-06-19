import * as React from 'react';

export interface PriceTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Current price, pre-formatted (e.g. "$49.00"). */
  price: React.ReactNode;
  /** Original price — renders struck-through and turns the current price pink. */
  compareAt?: React.ReactNode;
  /** Optional savings label (e.g. "Save 30%"). */
  saveLabel?: React.ReactNode;
}

/** Price display with sale (was-price) treatment, using the live price classes. */
export function PriceTag(props: PriceTagProps): JSX.Element;
