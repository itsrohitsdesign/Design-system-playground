/** Numeric font-size/line-height scale from the "AI Design System" Figma library. Ant Design's theme computation needs bare numbers (see [[typographyTheme]]), so these mirror the `--size-*`/`--leading-*` custom properties as numbers rather than CSS var references. */
export const fontSizeScale = {
  '2xs': 11,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 40,
  '6xl': 48,
  '7xl': 56,
  '8xl': 64,
} as const;
export type FontSizeKey = keyof typeof fontSizeScale;

export const lineHeightScale = {
  '2xs': 14,
  xs: 16,
  sm: 20,
  md: 24,
  lg: 24,
  xl: 28,
  '2xl': 32,
  '3xl': 36,
  '4xl': 40,
  '5xl': 48,
  '6xl': 52,
  '7xl': 56,
  '8xl': 72,
} as const;
export type LineHeightKey = keyof typeof lineHeightScale;

export const fontWeightScale = {
  regular: 400,
  medium: 500,
  semibold: 600,
} as const;
export type FontWeightKey = keyof typeof fontWeightScale;

export const fontFamily = {
  sans: 'var(--family-sans), "Geist", sans-serif',
} as const;
