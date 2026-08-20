/**
 * Button.figma.tsx — Code Connect mapping
 *
 * This file is NOT shipped to production. It is only read by the Figma CLI
 * (`figma connect publish`) and by AI tools like figma-generate-design when
 * they look up which code component maps to a Figma node.
 *
 * How to publish:
 *   FIGMA_ACCESS_TOKEN=your_token npx figma connect publish
 *
 * How to verify:
 *   Open the Figma file → click any Button instance → Dev Mode (</>)
 *   → Code tab → you should see the snippet from the `example` function below.
 *
 * Property names on the LEFT must match Figma EXACTLY (case-sensitive).
 * Prop values on the RIGHT are your code prop values.
 */

import figma from '@figma/code-connect';
import { Button } from './Button';

figma.connect(
  Button,
  // Master component URL — node-id 36:614 in AI Design System
  'https://www.figma.com/design/VfGG0qWAdchBv5YfAVekRZ/AI-Design-System?node-id=36-614',
  {
    props: {
      // ── Figma: "Kind" ─────────────────────────────────────────────────
      // Options in Figma: Primary | Secondary | Danger | Dashed | Ghost |
      //                   Danger secondary | Danger dashed | Danger ghost
      kind: figma.enum('Kind', {
        'Primary':        'Primary',
        'Secondary':      'Secondary',
        'Danger':         'Danger',
        'Dashed':         'Dashed',
        'Ghost':          'Ghost',
        'Danger secondary': 'Danger secondary',
        'Danger dashed':  'Danger dashed',
        'Danger ghost':   'Danger ghost',
      }),

      // ── Figma: "Size" ─────────────────────────────────────────────────
      // Options in Figma: Small | Medium | Large
      size: figma.enum('Size', {
        'Small':  'Small',
        'Medium': 'Medium',
        'Large':  'Large',
      }),

      // ── Figma: "State" ────────────────────────────────────────────────
      // Options in Figma: Default | Hover | Pressed | Disabled
      // Note: Hover and Pressed are visual-only in Figma. In code, only
      // Disabled changes behaviour — Hover/Pressed are CSS :hover/:active.
      state: figma.enum('State', {
        'Default':  'Default',
        'Hover':    'Default',   // no code equivalent — CSS handles it
        'Pressed':  'Default',   // no code equivalent — CSS handles it
        'Disabled': 'Disabled',
      }),

      // ── Figma: "Label" ────────────────────────────────────────────────
      label: figma.string('Label'),

      // ── Figma: "Show Leading Icon" ────────────────────────────────────
      showLeadingIcon: figma.boolean('Show Leading Icon'),

      // ── Figma: "Show Trailing Icon" ───────────────────────────────────
      showTrailingIcon: figma.boolean('Show Trailing Icon'),

      // ── Figma: "Focused" ──────────────────────────────────────────────
      focused: figma.boolean('Focused'),
    },

    // ── Code snippet shown in Figma Dev Mode ──────────────────────────────
    // This is exactly what an engineer sees when they inspect a Button in
    // Figma, and what figma-generate-design uses to emit code.
    example: ({ kind, size, state, label, showLeadingIcon, showTrailingIcon }) => (
      <Button
        kind={kind}
        size={size}
        label={label}
        showLeadingIcon={showLeadingIcon}
        showTrailingIcon={showTrailingIcon}
        disabled={state === 'Disabled'}
      />
    ),
  }
);
