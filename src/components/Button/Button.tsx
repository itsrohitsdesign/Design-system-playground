import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';
import styles from './Button.module.css';

export type ButtonKind =
  | 'Primary'
  | 'Secondary'
  | 'Dashed'
  | 'Ghost'
  | 'Danger'
  | 'Danger secondary'
  | 'Danger dashed'
  | 'Danger ghost';

export type ButtonSize = 'Small' | 'Medium' | 'Large';

export interface ButtonProps
  extends Omit<AntButtonProps, 'type' | 'danger' | 'size' | 'icon' | 'children'> {
  /** Visual style, matching the Figma "Kind" property. */
  kind?: ButtonKind;
  /** Matching the Figma "Size" property. */
  size?: ButtonSize;
  /** Matching the Figma "Label" property. */
  label?: ReactNode;
  children?: ReactNode;
  showLeadingIcon?: boolean;
  leadingIcon?: ReactNode;
  showTrailingIcon?: boolean;
  trailingIcon?: ReactNode;
}

const KIND_TO_ANTD: Record<ButtonKind, { type: AntButtonProps['type']; danger?: boolean }> = {
  Primary: { type: 'primary' },
  Secondary: { type: 'default' },
  Dashed: { type: 'dashed' },
  Ghost: { type: 'text' },
  Danger: { type: 'primary', danger: true },
  'Danger secondary': { type: 'default', danger: true },
  'Danger dashed': { type: 'dashed', danger: true },
  'Danger ghost': { type: 'text', danger: true },
};

const SIZE_TO_ANTD: Record<ButtonSize, AntButtonProps['size']> = {
  Small: 'small',
  Medium: 'middle',
  Large: 'large',
};

/**
 * Wrapper around Ant Design's `Button`, bound to the "AI Design System"
 * Figma component (node 36:614). Prop names mirror the Figma component
 * properties (Kind, Size, Label, Show Leading/Trailing Icon) so this maps
 * 1:1 back to the design; visual tokens (color, padding, radius, shadow)
 * live in [[buttonTheme]] rather than here.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    kind = 'Primary',
    size = 'Medium',
    label,
    showLeadingIcon = false,
    leadingIcon,
    showTrailingIcon = false,
    trailingIcon,
    className,
    children,
    ...rest
  }: ButtonProps,
  ref,
) {
  const { type, danger } = KIND_TO_ANTD[kind];

  return (
    <AntButton
      ref={ref}
      type={type}
      danger={danger}
      size={SIZE_TO_ANTD[size]}
      className={[styles.button, className].filter(Boolean).join(' ')}
      icon={showLeadingIcon ? leadingIcon : undefined}
      {...rest}
    >
      {label ?? children}
      {showTrailingIcon && trailingIcon ? (
        <span className={styles.trailingIcon}>{trailingIcon}</span>
      ) : null}
    </AntButton>
  );
});
