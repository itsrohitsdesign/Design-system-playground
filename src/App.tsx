import { Button, type ButtonKind, type ButtonSize } from '@/components/Button';
import { BellSimple } from '@/assets/icons/BellSimple';

const kinds: ButtonKind[] = [
  'Primary',
  'Secondary',
  'Dashed',
  'Ghost',
  'Danger',
  'Danger secondary',
  'Danger dashed',
  'Danger ghost',
];

const sizes: ButtonSize[] = ['Small', 'Medium', 'Large'];

export default function App() {
  return (
    <div style={{ padding: 'var(--space-32)', display: 'flex', flexDirection: 'column', gap: 'var(--space-32)' }}>
      <h1 style={{ font: 'var(--leading-4xl) var(--family-sans)', fontSize: 'var(--size-4xl)', color: 'var(--text-primary)' }}>
        Button
      </h1>

      {sizes.map((size) => (
        <section key={size}>
          <h2 style={{ fontSize: 'var(--size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-16)' }}>
            Size = {size}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, max-content)', gap: 'var(--space-16)' }}>
            {kinds.map((kind) => (
              <Button key={kind} kind={kind} size={size} label={kind} />
            ))}
          </div>
        </section>
      ))}

      <section>
        <h2 style={{ fontSize: 'var(--size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-16)' }}>
          States
        </h2>
        <div style={{ display: 'flex', gap: 'var(--space-16)', flexWrap: 'wrap' }}>
          <Button kind="Primary" label="Default" />
          <Button kind="Primary" label="Disabled" disabled />
          <Button kind="Primary" label="Loading" loading />
          <Button
            kind="Primary"
            label="With icons"
            showLeadingIcon
            leadingIcon={<BellSimple />}
            showTrailingIcon
            trailingIcon={<BellSimple />}
          />
        </div>
      </section>
    </div>
  );
}
