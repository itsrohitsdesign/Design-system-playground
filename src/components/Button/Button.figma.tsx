import figma from '@figma/code-connect';
import { Button } from './Button';

figma.connect(
  Button,
  'https://www.figma.com/design/VfGG0qWAdchBv5YfAVekRZ/AI-Design-System?node-id=36-614',
  {
    props: {
      kind: figma.enum('Kind', {
        'Primary':          'Primary',
        'Secondary':        'Secondary',
        'Danger':           'Danger',
        'Dashed':           'Dashed',
        'Ghost':            'Ghost',
        'Danger secondary': 'Danger secondary',
        'Danger dashed':    'Danger dashed',
        'Danger ghost':     'Danger ghost',
      }),

      size: figma.enum('Size', {
        'Small':  'Small',
        'Medium': 'Medium',
        'Large':  'Large',
      }),

      // Hover/Pressed are CSS-only — only Disabled maps to a real prop
      state: figma.enum('State', {
        'Default':  'Default',
        'Hover':    'Default',
        'Pressed':  'Default',
        'Disabled': 'Disabled',
      }),

      label: figma.string('Label'),
      showLeadingIcon: figma.boolean('Show Leading Icon'),
      showTrailingIcon: figma.boolean('Show Trailing Icon'),
    },

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