import { colors } from '@/lib/tokens/colors';

export type NotificationStatus = 'success' | 'error' | 'warning' | 'info';

/**
 * Status → color-role mapping for the Figma "Notification" component
 * (node 331:2335, based on Carbon Design System's Notification pattern).
 * Bound to the semantic [[colors]] tokens rather than raw primitives so
 * this stays in sync with the rest of the design system.
 */
export const notificationStatusColors: Record<
  NotificationStatus,
  { bg: string; border: string; text: string; solid: string }
> = {
  success: {
    bg: colors['success/bg'],
    border: colors['success/border'],
    text: colors['success/text'],
    solid: colors['success/solid'],
  },
  error: {
    bg: colors['error/bg'],
    border: colors['error/border'],
    text: colors['error/text'],
    solid: colors['error/solid'],
  },
  warning: {
    bg: colors['warning/bg'],
    border: colors['warning/border'],
    text: colors['warning/text'],
    solid: colors['warning/solid'],
  },
  info: {
    bg: colors['info/bg'],
    border: colors['info/border'],
    text: colors['info/text'],
    solid: colors['info/solid'],
  },
};
