import type { ThemeConfig } from 'antd';
import { primitives } from '@/lib/tokens/primitives';

/**
 * Ant Design `Checkbox` component token overrides, bound to the Figma
 * "Checkbox" component (node 50:232, Type=Checkbox variants) in the
 * "AI Design System" library. AntD draws the check/indeterminate mark
 * itself (no custom icon slot), so only color/size/border tokens are
 * overridden here rather than swapping in Figma's check-mark SVG.
 *
 * Figma's Size=sm (16px) is AntD's baseline `controlInteractiveSize`;
 * Size=md (20px) isn't exposed as a separate AntD size variant — render
 * it via a `.checkbox-md` className override in the wrapper instead.
 */
export const checkboxTheme: NonNullable<ThemeConfig['components']>['Checkbox'] = {
  borderRadiusSM: 4, // radius-sm

  colorBorder: primitives.neutral[400], // border/tertiary — Unchecked/Default
  colorPrimary: primitives.primary[500], // Checked/Default fill — primary/solid
  colorPrimaryHover: primitives.primary[600], // Checked/Hover fill — primary/solid-hover
  controlInteractiveSize: 16, // Size=sm

  colorBgContainer: primitives.neutral['00'], // bg/base
  colorBgContainerDisabled: primitives.neutral['00'], // Disabled keeps white bg per Figma
  colorTextDisabled: primitives.neutral[300], // text/disabled

  colorWhite: primitives.neutral['00'], // check-mark color
};
