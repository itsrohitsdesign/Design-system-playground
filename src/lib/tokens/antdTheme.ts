import type { ThemeConfig } from 'antd';
import { typographyTheme } from '@/lib/tokens/typographyTheme';
import { primitives } from '@/lib/tokens/primitives';
import { spacing } from '@/lib/tokens/scale';
import { buttonTheme } from '@/lib/tokens/buttonTheme';

/**
 * Root Ant Design theme for the "AI Design System" library. Component-level
 * overrides (e.g. Button) live in their own wrapper components instead of
 * here, so this stays the global baseline — brand color, radius, and the
 * typography slice from [[typographyTheme]].
 */
export const antdTheme: ThemeConfig = {
  token: {
    ...typographyTheme,
    colorPrimary: primitives.primary[500],
    colorError: primitives.red[600],
    borderRadius: 8, // radius-md
    controlHeight: parseInt(spacing[40].match(/\d+/)?.[0] ?? '40', 10),
  },
  components: {
    Button: buttonTheme,
  },
};
