export enum ThemeMode {
  STANDARD = "STANDARD",
  INVERTED = "INVERTED",
  CONTRAST = "CONTRAST",
}

export namespace ThemeMode {
  export function from(value: string, fallback: ThemeMode): ThemeMode {
    if (Object.values(ThemeMode).includes(value as ThemeMode)) {
      return value as ThemeMode;
    } else {
      return fallback;
    }
  }

  export function tryFrom(value: string): ThemeMode | null {
    if (Object.values(ThemeMode).includes(value as ThemeMode)) {
      return value as ThemeMode;
    } else {
      return null;
    }
  }
}

type ThemeModeOptionKey =
  | ThemeMode.STANDARD
  | ThemeMode.INVERTED
  | ThemeMode.CONTRAST;
type ThemeModeOptions = Record<ThemeModeOptionKey, ThemeMode>;

export type { ThemeModeOptionKey, ThemeModeOptions };
