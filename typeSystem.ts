
export interface TypeStyle {
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  /** CSS letter-spacing, converted from Figma's PERCENT-of-fontSize unit to em. */
  letterSpacing: string;
  textTransform?: 'uppercase';
}

/** Figma's weight-* variables are style-name strings, not CSS numbers. This is the real translation table, confirmed against bound values (no numeric weight variable exists upstream). */
const weight = {
  regular: 400, // weight-regular
  medium: 500, // weight-medium
  semibold: 600, // weight-semibold
} as const;

function style(
  fontSizeVar: string,
  lineHeightVar: string,
  weightKey: keyof typeof weight,
  letterSpacingPercent: number,
  textTransform?: 'uppercase',
): TypeStyle {
  return {
    fontFamily: 'var(--family-sans)',
    fontSize: `var(--${fontSizeVar})`,
    lineHeight: `var(--${lineHeightVar})`,
    fontWeight: weight[weightKey],
    letterSpacing: `${letterSpacingPercent / 100}em`,
    ...(textTransform ? { textTransform } : {}),
  };
}

/**
 * Direct mirror of the AI Design System text styles. Keys match Figma style
 * names exactly (lowercased, slash → path).
 */
export const typeSystem = {
  // ---- Heading/H1–H6 — bound to size-5xl..size-lg / leading-5xl..leading-lg, all weight-semibold ----
  'heading/h1': style('size-5xl', 'leading-5xl', 'semibold', -2),
  'heading/h2': style('size-4xl', 'leading-4xl', 'semibold', -2),
  'heading/h3': style('size-3xl', 'leading-3xl', 'semibold', -1.5),
  'heading/h4': style('size-2xl', 'leading-2xl', 'semibold', -1),
  'heading/h5': style('size-xl', 'leading-xl', 'semibold', -1),
  'heading/h6': style('size-lg', 'leading-lg', 'semibold', 0),

  // ---- Body/Large, Medium, Small — regular by default, -Bold variant is actually weight-semibold ----
  'body/large': style('size-md', 'leading-md', 'regular', 0),
  'body/large-bold': style('size-md', 'leading-md', 'semibold', 0),
  'body/medium': style('size-sm', 'leading-sm', 'regular', 0),
  'body/medium-bold': style('size-sm', 'leading-sm', 'semibold', 0),
  'body/small': style('size-xs', 'leading-xs', 'regular', 0),
  'body/small-bold': style('size-xs', 'leading-xs', 'semibold', 0),

  // ---- Caption — weight-medium, size-2xs/leading-2xs ----
  'caption/default': style('size-2xs', 'leading-2xs', 'medium', 0),
  'caption/all-caps': style('size-2xs', 'leading-2xs', 'medium', 0, 'uppercase'),

  // ---- Label — 
  'label/large': style('size-md', 'leading-md', 'medium', 0),  
  'label/large-bold': style('size-md', 'leading-md', 'semibold', 0), 
  'label/medium': style('size-sm', 'leading-sm', 'medium', 0), 
  'label/medium-bold': style('size-sm', 'leading-sm', 'semibold', 0), 
  'label/small': style('size-xs', 'leading-xs', 'medium', 0),
  'label/small-bold': style('size-xs', 'leading-xs', 'semibold', 0),
} as const;

export type TextStyleName = keyof typeof typeSystem;
