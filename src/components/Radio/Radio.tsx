import { forwardRef } from 'react';
import { Radio as AntRadio } from 'antd';
import type { RadioProps as AntRadioProps } from 'antd';
import type { CheckboxRef } from 'antd/es/checkbox';
import styles from './Radio.module.css';

export type RadioSize = 'sm' | 'md';

export interface RadioProps extends AntRadioProps {
  /** Matching the Figma "Size" property (sm = 16px, md = 20px). */
  size?: RadioSize;
  /** Matching the Figma "Text" property — the label shown next to the dot. */
  text?: string;
  /** Matching the Figma "Supporting text" property — the secondary description line. */
  supportingText?: string;
}

/**
 * Wrapper around Ant Design's `Radio`, bound to the "AI Design System"
 * Figma component (node 50:232, Type=Radio variants). Prop names mirror
 * the Figma component properties (Size, Text, Supporting text) so this
 * maps 1:1 back to the design; visual tokens live in [[radioTheme]].
 */
const RadioInner = forwardRef<CheckboxRef, RadioProps>(function Radio(
  { size = 'sm', text, supportingText, className, children, ...rest }: RadioProps,
  ref,
) {
  const label = text ?? children;

  const dot = (
    <AntRadio
      ref={ref}
      className={[styles.radio, size === 'md' ? styles.md : undefined, className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {!supportingText ? label : undefined}
    </AntRadio>
  );

  if (!supportingText) {
    return dot;
  }

  return (
    <label className={styles.withSupportingText}>
      {dot}
      <span className={styles.textColumn}>
        <span className={styles.label}>{label}</span>
        <span className={styles.supportingText}>{supportingText}</span>
      </span>
    </label>
  );
});

export const Radio = Object.assign(RadioInner, { Group: AntRadio.Group });
