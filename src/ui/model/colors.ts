export const COLORS = {
  BASIC: 'basic',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ACCENT: 'accent',
  WARN: 'warn',
  LINK: 'link',
  DISABLED: 'disabled',
} as const;

export type COLORS = typeof COLORS[keyof typeof COLORS];
