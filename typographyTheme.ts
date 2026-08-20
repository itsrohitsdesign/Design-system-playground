import type { ThemeConfig } from 'antd';
import { fontSizeScale, lineHeightScale, fontFamily } from '@/lib/tokens/typography';
import { typeSystem } from '@/lib/tokens/typeSystem';

/**
 * Typography slice of the Ant Design theme token, built from the real
 * Heading/H1–H6 and Body/Large-Medium-Small text styles in the
 * "AI Design System" library. Unlike the wrong-library version, H1–H6 here
 * are properly ordered (H1 = largest, 40px → H6 = smallest, 18px), so this
 * mapping is a straightforward, low-risk translation rather than a guess:
 *
 * - Base body = Body/Medium (14/20) → AntD's default `fontSize`, matching
 *   both AntD's own 14px default and the density principle.
 * - Body/Small (12/16) → fontSizeSM, for AG Grid / dense table cells.
 * - Body/Large (16/24) → fontSizeLG, for forms and dialogs.
 * - Heading/H1–H5 → AntD's fontSizeHeading1–5 directly, 1:1, no reordering
 *   needed. Heading/H6 (18px) has no AntD slot (AntD only goes to H5) —
 *   left out of the theme token; use typeSystem['heading/h6'] directly in
 *   components that need it (e.g. AG Grid group headers).
 *
 * AntD needs bare numbers here (it derives component paddings, SM/LG
 * variants, etc. from these) — it can't resolve `var(--size-md)` at
 * theme-computation time. That's exactly the class of bug the DatePicker
 * audit caught, so the numeric values are pulled from fontSizeScale /
 * lineHeightScale (typography.ts), not typed in by hand.
 */
export const typographyTheme: ThemeConfig['token'] = {
  fontFamily: fontFamily.sans,

  fontSize: fontSizeScale.sm, // Body/Medium — 14
  lineHeight: lineHeightScale.sm / fontSizeScale.sm, // 20/14

  fontSizeSM: fontSizeScale.xs, // Body/Small — 12
  fontSizeLG: fontSizeScale.md, // Body/Large — 16

  fontSizeHeading1: fontSizeScale['5xl'], // Heading/H1 — 40
  fontSizeHeading2: fontSizeScale['4xl'], // Heading/H2 — 32
  fontSizeHeading3: fontSizeScale['3xl'], // Heading/H3 — 28
  fontSizeHeading4: fontSizeScale['2xl'], // Heading/H4 — 24
  fontSizeHeading5: fontSizeScale.xl, // Heading/H5 — 20

  lineHeightHeading1: lineHeightScale['5xl'] / fontSizeScale['5xl'],
  lineHeightHeading2: lineHeightScale['4xl'] / fontSizeScale['4xl'],
  lineHeightHeading3: lineHeightScale['3xl'] / fontSizeScale['3xl'],
  lineHeightHeading4: lineHeightScale['2xl'] / fontSizeScale['2xl'],
  lineHeightHeading5: lineHeightScale.xl / fontSizeScale.xl,

  // No true Bold (700) exists in the type system — weight-semibold (600) is
  // the heaviest weight actually in use (every "-Bold" style resolves to it).
  fontWeightStrong: typeSystem['body/large-bold'].fontWeight,
};
