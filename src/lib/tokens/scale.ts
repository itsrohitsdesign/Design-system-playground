/** Spacing, radius, elevation and other scale tokens from the "AI Design System" Figma library, bound to CSS custom properties in [[figma-export.tokens-bound.css]]. */
export const spacing = {
  0: 'var(--space-0)',
  2: 'var(--space-2)',
  4: 'var(--space-4)',
  8: 'var(--space-8)',
  12: 'var(--space-12)',
  16: 'var(--space-16)',
  20: 'var(--space-20)',
  24: 'var(--space-24)',
  32: 'var(--space-32)',
  40: 'var(--space-40)',
  48: 'var(--space-48)',
  64: 'var(--space-64)',
  80: 'var(--space-80)',
  96: 'var(--space-96)',
} as const;
export type SpacingToken = keyof typeof spacing;

export const radius = {
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
  '2xl': 'var(--radius-2xl)',
  full: 'var(--radius-full)',
} as const;
export type RadiusToken = keyof typeof radius;

export const elevation = {
  base: 'none',
  raised: '0px 2px 4px rgba(0,0,0,0.10)',
  overlay: '0px 8px 16px rgba(0,0,0,0.15)',
  modal: '0px 16px 32px rgba(0,0,0,0.20)',
  sticky: '0px 12px 24px rgba(0,0,0,0.18)',
} as const;
export type ElevationToken = keyof typeof elevation;

export const strokeWidth = {
  thin: 'var(--stroke-thin)',
  medium: 'var(--stroke-medium)',
  thick: 'var(--stroke-thick)',
} as const;
export type StrokeWidthToken = keyof typeof strokeWidth;

export const opacity = {
  0: 0,
  disabled: 0.5,
  loading: 0.6,
  subtle: 0.7,
  semi: 0.8,
  full: 1,
} as const;
export type OpacityToken = keyof typeof opacity;

export const zIndex = {
  dropdown: 100,
  sticky: 500,
  modal: 1000,
  tooltip: 1100,
  notification: 1200,
} as const;
export type ZIndexToken = keyof typeof zIndex;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
export type BreakpointsToken = keyof typeof breakpoints;

export const iconSize = {
  xs: 'var(--icon-xs)',
  sm: 'var(--icon-sm)',
  md: 'var(--icon-md)',
  lg: 'var(--icon-lg)',
  xl: 'var(--icon-xl)',
  '2xl': 'var(--icon-2xl)',
} as const;
export type IconSizeToken = keyof typeof iconSize;
