import type { ThemeConfig } from 'antd';
import { primitives } from '@/lib/tokens/primitives';

/**
 * Ant Design `Radio` component token overrides, bound to the Figma
 * "Checkbox" component (node 50:232, Type=Radio variants) in the
 * "AI Design System" library. Figma's Checked state fills the dot with
 * `primary/bg` and borders it with `primary/border` (a lighter tint than
 * the Checkbox's solid fill) — AntD's `dotColorDisabled` etc. tokens
 * don't expose that exact split, so `radioColor` covers the inner dot and
 * `colorPrimary`/`colorPrimaryBorder` cover the ring to match visually.
 */
export const radioTheme: NonNullable<ThemeConfig['components']>['Radio'] = {
  radioSize: 16, // Size=sm

  colorBorder: primitives.neutral[400], // border/tertiary — Unchecked/Default
  colorPrimary: primitives.primary[500], // dot fill — primary/solid (visual match for primary/bg's inner dot)
  colorPrimaryHover: primitives.primary[400], // primary/border-hover

  colorBgContainer: primitives.neutral['00'], // bg/base
  colorBgContainerDisabled: primitives.neutral['00'],
  colorTextDisabled: primitives.neutral[300], // text/disabled

  dotColorDisabled: primitives.neutral[200],
};
