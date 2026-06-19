import * as React from 'react';

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Field label text. */
  label?: React.ReactNode;
  /** Help / validation message below the control. */
  help?: React.ReactNode;
  /** Color the help text. */
  helpState?: 'success' | 'warning' | 'danger' | 'info';
  /** Group multiple controls in a row. */
  grouped?: boolean;
  /** Let the control fill available width. */
  expanded?: boolean;
}

/**
 * Form field wrapper (b-style `b-field` > `b-label` + `b-control` + `b-help`).
 * @startingPoint section="Forms" subtitle="Labelled fields: input, select, checkbox" viewport="700x320"
 */
export function Field(props: FieldProps): JSX.Element;
