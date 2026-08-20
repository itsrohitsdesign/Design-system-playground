import type { ThemeConfig } from 'antd';
import { primitives } from '@/lib/tokens/primitives';

/**
 * Ant Design `Button` component token overrides, bound to the Figma
 * "Button" component (node 36:614) in the "AI Design System" library.
 * Kind → AntD `type` (+`danger` for the four Danger* kinds), Size → AntD
 * `size`. Height/padding/gap per size and the primary/danger solid + inset
 * shadow ("Button-elevation") come directly from the Figma variants; AntD's
 * own `default`/`dashed`/`text` tokens already match the Secondary/Dashed/
 * Ghost kinds closely enough that only the diffs are overridden here.
 */
export const buttonTheme: NonNullable<ThemeConfig['components']>['Button'] = {
  borderRadius: 8, // radius-md, same for all sizes per Figma
  fontWeight: 500, // weight-medium

  controlHeight: 40, // Size=Medium
  controlHeightSM: 32, // Size=Small
  controlHeightLG: 48, // Size=Large

  paddingInline: 16, // Size=Medium → space-16
  paddingInlineSM: 12, // Size=Small → space-12
  paddingInlineLG: 20, // Size=Large → space-20

  contentFontSize: 16, // Label/Large — size-md
  contentFontSizeSM: 14, // Label/Medium — size-sm
  contentFontSizeLG: 16, // Large uses Label/Large too

  contentLineHeight: 20 / 16, // leading-sm / size-md
  contentLineHeightSM: 16 / 14, // leading-xs / size-sm
  contentLineHeightLG: 20 / 16,

  // Kind=Primary / Kind=Danger solid fills + inset "Button-elevation" shadow
  primaryShadow: 'inset 0px -2px 0px 0px rgba(0,0,0,0.15), inset 0px 2px 1px 0px rgba(243,240,254,0.15)',
  dangerShadow: 'inset 0px -2px 0px 0px rgba(0,0,0,0.15), inset 0px 2px 1px 0px rgba(243,240,254,0.15)',

  colorPrimary: primitives.primary[500], // primary/solid
  colorPrimaryHover: primitives.primary[600], // primary/solid-hover
  colorPrimaryActive: primitives.primary[700], // primary/solid-active

  colorError: primitives.red[600], // error/solid
  colorErrorHover: primitives.red[700], // error/solid-hover
  colorErrorActive: primitives.red[800], // error/solid-active
  colorErrorBorder: primitives.red[300], // error/border
  colorErrorBg: primitives.neutral['00'],

  // Kind=Secondary / Kind=Dashed
  defaultBorderColor: primitives.neutral[200], // border/primary
  defaultColor: primitives.neutral[900], // text/primary
  defaultBg: primitives.neutral['00'], // bg/base
  defaultHoverBorderColor: primitives.primary[400],
  defaultHoverColor: primitives.primary[500],
  defaultActiveBorderColor: primitives.primary[700],
  defaultActiveColor: primitives.primary[700],

  // Kind=Ghost (AntD `text` type) — transparent bg, text/primary label
  textTextColor: primitives.neutral[900],
  textHoverBg: 'rgba(26, 29, 34, 0.04)', // bg/state/hover

  borderColorDisabled: primitives.neutral[200], // border/disabled
  colorTextDisabled: primitives.neutral[300], // text/disabled
  colorBgContainerDisabled: 'rgba(26, 29, 34, 0.04)', // bg/state/disabled
};
