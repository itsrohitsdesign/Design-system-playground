import type { ReactNode } from 'react';
import {
  Info,
  CheckCircle,
  Warning,
  XCircle,
  X,
} from '@phosphor-icons/react';
import { notificationStatusColors, type NotificationStatus } from '@/lib/tokens/notificationTheme';
import styles from './Notification.module.css';

export type { NotificationStatus };

export type NotificationType = 'Inline short' | 'Inline long' | 'Toast';

export interface NotificationProps {
  /** Matching the Figma "Type" property — layout shape of the card. */
  type?: NotificationType;
  /** Matching the Figma "Status" property — drives color and icon. */
  status?: NotificationStatus;
  /** Matching the Figma "Title" text layer. */
  titleText?: ReactNode;
  /** Matching the Figma "Message" text layer. */
  messageText?: ReactNode;
  /** Matching the Figma "Time stamp" text layer — only rendered for type="Toast". */
  timeText?: ReactNode;
  /** Matching the Figma "Actionable" property — shows the action button when true. */
  actionable?: boolean;
  /** Label for the action button, shown when `actionable` is true. */
  actionLabel?: ReactNode;
  onAction?: () => void;
  /** Matching the Figma "Close" boolean property. */
  close?: boolean;
  onClose?: () => void;
  /** Matching the Figma "Show heading" property (Inline short only). */
  showHeading?: boolean;
  className?: string;
}

const STATUS_ICON: Record<NotificationStatus, typeof Info> = {
  info: Info,
  success: CheckCircle,
  warning: Warning,
  error: XCircle,
};

/**
 * Notification / inline-alert card bound to the "AI Design System" Figma
 * component (node 331:2335), itself based on Carbon Design System's
 * Notification pattern. Not a wrapper around an existing Ant Design
 * component — AntD's `Alert` doesn't support the left accent bar, the
 * bordered action button, or the Toast timestamp row, so this is built
 * directly from tokens (see [[notificationTheme]]) to match Figma exactly.
 *
 * `highContrast` isn't implemented: the Figma frame only has
 * High contrast=False instances built, so there's no reference to match.
 */
export function Notification({
  type = 'Inline short',
  status = 'info',
  titleText = 'Title',
  messageText = 'Message',
  timeText,
  actionable = false,
  actionLabel = 'Button',
  onAction,
  close = true,
  onClose,
  showHeading = true,
  className,
}: NotificationProps) {
  const palette = notificationStatusColors[status];
  const StatusIcon = STATUS_ICON[status];
  const isInlineShort = type === 'Inline short';
  const isToast = type === 'Toast';

  return (
    <div
      className={[
        styles.card,
        isInlineShort ? styles.short : styles.tall,
        isToast ? styles.toast : undefined,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        // @ts-expect-error -- CSS custom properties aren't in React's CSSProperties type
        '--notification-bg': palette.bg,
        '--notification-border': palette.border,
        '--notification-text': palette.text,
      }}
      role="alert"
    >
      <div className={styles.accent} />
      <div className={styles.icon}>
        <StatusIcon size={20} weight="fill" />
      </div>

      <div className={styles.body}>
        {isInlineShort ? (
          <>
            {showHeading && <span className={styles.titleInline}>{titleText}</span>}
            <span className={styles.messageInline}>{messageText}</span>
          </>
        ) : (
          <>
            {isToast ? (
              <div className={styles.titleMessageGroup}>
                <p className={styles.title}>{titleText}</p>
                <p className={styles.message}>{messageText}</p>
              </div>
            ) : (
              <>
                <p className={styles.title}>{titleText}</p>
                <p className={styles.message}>{messageText}</p>
              </>
            )}
            {isToast && timeText && <p className={styles.timestamp}>{timeText}</p>}
            {isToast && actionable && (
              <button type="button" className={styles.actionButton} onClick={onAction}>
                {actionLabel}
              </button>
            )}
          </>
        )}
      </div>

      <div className={styles.actions}>
        {!isToast && actionable && (
          <button type="button" className={styles.actionButton} onClick={onAction}>
            {actionLabel}
          </button>
        )}
        {close && (
          <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close">
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
