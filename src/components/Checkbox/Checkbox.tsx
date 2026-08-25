import { forwardRef } from 'react';
import { Checkbox as AntCheckbox } from 'antd';
import type { CheckboxProps as AntCheckboxProps, CheckboxRef } from 'antd/es/checkbox';
import styles from './Checkbox.module.css';

export type CheckboxSize = 'sm' | 'md';

export interface CheckboxProps extends Omit<AntCheckboxProps, 'indeterminate'> {
  /** Matching the Figma "Size" property (sm = 16px, md = 20px). */
  size?: CheckboxSize;
  /** Matching the Figma "Indeterminate" property. */
  indeterminate?: boolean;
  /** Matching the Figma "Text" property — the label shown next to the box. */
  text?: string;
  /** Matching the Figma "Supporting text" property — the secondary description line. */
  supportingText?: string;
}

/**
 * Wrapper around Ant Design's `Checkbox`, bound to the "AI Design System"
 * Figma component (node 50:232, Type=Checkbox variants). Prop names mirror
 * the Figma component properties (Size, Indeterminate, Text, Supporting
 * text) so this maps 1:1 back to the design; visual tokens (color, border,
 * radius) live in [[checkboxTheme]] rather than here.
 */
export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>(function Checkbox(
  { size = 'sm', indeterminate = false, text, supportingText, className, children, ...rest }: CheckboxProps,
  ref,
) {
  const label = text ?? children;

  const box = (
    <AntCheckbox
      ref={ref}
      indeterminate={indeterminate}
      className={[styles.checkbox, size === 'md' ? styles.md : undefined, className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {!supportingText ? label : undefined}
    </AntCheckbox>
  );

  if (!supportingText) {
    return box;
  }

  return (
    <label className={styles.withSupportingText}>
      {box}
      <span className={styles.textColumn}>
        <span className={styles.label}>{label}</span>
        <span className={styles.supportingText}>{supportingText}</span>
      </span>
    </label>
  );
});
