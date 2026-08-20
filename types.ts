import type { ColorToken } from './colors';
import type { PrimitiveToken } from './primitives';
import type { SpacingToken, RadiusToken, ElevationToken, StrokeWidthToken, OpacityToken, ZIndexToken, BreakpointsToken, IconSizeToken } from './scale';
import type { FontSizeKey, LineHeightKey, FontWeightKey } from './typography';
import type { TextStyleName } from './typeSystem';

export type {
  ColorToken,
  PrimitiveToken,
  SpacingToken,
  RadiusToken,
  ElevationToken,
  StrokeWidthToken,
  OpacityToken,
  ZIndexToken,
  BreakpointsToken,
  IconSizeToken,
  FontSizeKey,
  LineHeightKey,
  FontWeightKey,
  TextStyleName,
};

/** Every token name across every category — useful for a generic `getToken(name)` audit utility. */
export type AnyDesignToken =
  | ColorToken
  | SpacingToken
  | RadiusToken
  | ElevationToken
  | StrokeWidthToken
  | OpacityToken
  | ZIndexToken
  | BreakpointsToken
  | IconSizeToken
  | TextStyleName;

/**
 * Narrows a plain string (e.g. a value read from a Figma property, or a prop
 * passed into a primitive) to a known token name at compile time. Prefer this
 * over `as ColorToken` casts in primitive wrappers — it fails loudly on typos
 * instead of silently falling through to Ant Design's raw default, which is
 * exactly the failure mode the DatePicker audit caught.
 */
export function isColorToken(value: string, colors: Record<string, unknown>): value is ColorToken {
  return value in colors;
}
