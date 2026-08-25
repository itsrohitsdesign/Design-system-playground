import { Button, type ButtonKind, type ButtonSize } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { Radio } from '@/components/Radio';
import { Notification, type NotificationStatus } from '@/components/Notification';
import { BellSimple } from '@/assets/icons/BellSimple';

const statuses: NotificationStatus[] = ['info', 'success', 'warning', 'error'];

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

      <h1 style={{ font: 'var(--leading-4xl) var(--family-sans)', fontSize: 'var(--size-4xl)', color: 'var(--text-primary)' }}>
        Checkbox &amp; Radio
      </h1>

      <section>
        <h2 style={{ fontSize: 'var(--size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-16)' }}>
          Checkbox
        </h2>
        <div style={{ display: 'flex', gap: 'var(--space-24)', flexWrap: 'wrap', marginBottom: 'var(--space-16)' }}>
          <Checkbox />
          <Checkbox defaultChecked />
          <Checkbox indeterminate />
          <Checkbox disabled />
          <Checkbox disabled defaultChecked />
          <Checkbox size="md" defaultChecked />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
          <Checkbox text="Remember me" />
          <Checkbox text="Remember me" defaultChecked />
          <Checkbox
            text="Remember me"
            supportingText="Save my login details for next time."
          />
          <Checkbox
            text="Remember me"
            supportingText="Save my login details for next time."
            defaultChecked
          />
          <Checkbox
            text="Remember me"
            supportingText="Save my login details for next time."
            disabled
          />
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 'var(--size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-16)' }}>
          Radio
        </h2>
        <Radio.Group defaultValue="a" style={{ display: 'flex', gap: 'var(--space-24)', marginBottom: 'var(--space-16)' }}>
          <Radio value="a" />
          <Radio value="b" />
          <Radio value="c" disabled />
        </Radio.Group>
        <Radio.Group defaultValue="a" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
          <Radio value="a" text="Remember me" />
          <Radio value="b" text="Remember me" />
          <Radio
            value="c"
            text="Remember me"
            supportingText="Save my login details for next time."
          />
          <Radio
            value="d"
            text="Remember me"
            supportingText="Save my login details for next time."
            disabled
          />
        </Radio.Group>
      </section>

      <h1 style={{ font: 'var(--leading-4xl) var(--family-sans)', fontSize: 'var(--size-4xl)', color: 'var(--text-primary)' }}>
        Notification
      </h1>

      <section>
        <h2 style={{ fontSize: 'var(--size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-16)' }}>
          Inline short
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          {statuses.map((status) => (
            <Notification key={status} type="Inline short" status={status} />
          ))}
          {statuses.map((status) => (
            <Notification key={`${status}-action`} type="Inline short" status={status} actionable />
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 'var(--size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-16)' }}>
          Inline long
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          {statuses.map((status) => (
            <Notification key={status} type="Inline long" status={status} />
          ))}
          {statuses.map((status) => (
            <Notification key={`${status}-action`} type="Inline long" status={status} actionable />
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 'var(--size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-16)' }}>
          Toast
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          {statuses.map((status) => (
            <Notification key={status} type="Toast" status={status} timeText="Time stamp [00:00:00]" />
          ))}
          {statuses.map((status) => (
            <Notification key={`${status}-action`} type="Toast" status={status} actionable />
          ))}
        </div>
      </section>
    </div>
  );
}
