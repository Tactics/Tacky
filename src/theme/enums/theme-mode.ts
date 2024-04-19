enum ThemeMode {
  STANDARD = "STANDARD",
  INVERTED = "INVERTED",
  CONTRAST = "CONTRAST",
}

type ThemeModeOptionKey =
  | ThemeMode.STANDARD
  | ThemeMode.INVERTED
  | ThemeMode.CONTRAST;
type ThemeModeOptions = Record<ThemeModeOptionKey, ThemeMode>;

export { ThemeMode };

export type { ThemeModeOptionKey, ThemeModeOptions };
