import { ThemeI } from "@/theme/contracts/theme";
import { FontBuilder } from "@/typography/builder/font";

export const baseThemeConfigPrimaryFont: string =
  'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';
export const baseThemeConfigAccentFont: string =
  'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif';
export const baseThemeConfigSupportingFont: string =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const baseThemeConfigScaleXs: string = "0.75rem/1rem";
export const baseThemeConfigScaleSm: string = "0.875rem/1.25rem";
export const baseThemeConfigScaleMd: string = "1rem/1.5rem";
export const baseThemeConfigScaleLg: string = "1.125rem/1.75rem";
export const baseThemeConfigScaleXl: string = "1.25rem/1.75rem";
export const baseThemeConfigScale2Xl: string = "1.5rem/2rem";
export const baseThemeConfigScale3Xl: string = "1.875rem/2.25rem";
export const baseThemeConfigScale4Xl: string = "2.25rem/2.5rem";
export const baseThemeConfigScale5Xl: string = "3rem/1";
export const baseThemeConfigScale6Xl: string = "3.75rem/1";
export const baseThemeConfigScale7Xl: string = "4.5rem/1";
export const baseThemeConfigScale8Xl: string = "6rem/1";
export const baseThemeConfigScale9Xl: string = "8rem/1";

export const baseThemeConfigRadiusXs: string = "0.125rem";
export const baseThemeConfigRadiusSm: string = "0.25rem";
export const baseThemeConfigRadiusMd: string = "0.375rem";
export const baseThemeConfigRadiusLg: string = "0.5rem";
export const baseThemeConfigRadiusXl: string = "0.75rem";
export const baseThemeConfigRadius2Xl: string = "1rem";
export const baseThemeConfigRadius3Xl: string = "1.5rem";

export const BaseTheme: ThemeI = {
  alternate: [],
  typography: {
    resources: [],
    fonts: {
      primary: {
        xs: FontBuilder({
          scale: baseThemeConfigScaleXs,
          family: baseThemeConfigPrimaryFont,
        }),
        sm: FontBuilder({
          scale: baseThemeConfigScaleSm,
          family: baseThemeConfigPrimaryFont,
        }),
        md: FontBuilder({
          scale: baseThemeConfigScaleMd,
          family: baseThemeConfigPrimaryFont,
        }),
        lg: FontBuilder({
          scale: baseThemeConfigScaleLg,
          family: baseThemeConfigPrimaryFont,
        }),
        xl: FontBuilder({
          scale: baseThemeConfigScaleXl,
          family: baseThemeConfigPrimaryFont,
        }),
        "2xl": FontBuilder({
          scale: baseThemeConfigScale2Xl,
          family: baseThemeConfigPrimaryFont,
        }),
        "3xl": FontBuilder({
          scale: baseThemeConfigScale3Xl,
          family: baseThemeConfigPrimaryFont,
        }),
        "4xl": FontBuilder({
          scale: baseThemeConfigScale4Xl,
          family: baseThemeConfigPrimaryFont,
        }),
        "5xl": FontBuilder({
          scale: baseThemeConfigScale5Xl,
          family: baseThemeConfigPrimaryFont,
        }),
        "6xl": FontBuilder({
          scale: baseThemeConfigScale6Xl,
          family: baseThemeConfigPrimaryFont,
        }),
        "7xl": FontBuilder({
          scale: baseThemeConfigScale7Xl,
          family: baseThemeConfigPrimaryFont,
        }),
        "8xl": FontBuilder({
          scale: baseThemeConfigScale8Xl,
          family: baseThemeConfigPrimaryFont,
        }),
        "9xl": FontBuilder({
          scale: baseThemeConfigScale9Xl,
          family: baseThemeConfigPrimaryFont,
        }),
      },
      accent: {
        xs: FontBuilder({
          scale: baseThemeConfigScaleXs,
          family: baseThemeConfigAccentFont,
        }),
        sm: FontBuilder({
          scale: baseThemeConfigScaleSm,
          family: baseThemeConfigAccentFont,
        }),
        md: FontBuilder({
          scale: baseThemeConfigScaleMd,
          family: baseThemeConfigAccentFont,
        }),
        lg: FontBuilder({
          scale: baseThemeConfigScaleLg,
          family: baseThemeConfigAccentFont,
        }),
        xl: FontBuilder({
          scale: baseThemeConfigScaleXl,
          family: baseThemeConfigAccentFont,
        }),
        "2xl": FontBuilder({
          scale: baseThemeConfigScale2Xl,
          family: baseThemeConfigAccentFont,
        }),
        "3xl": FontBuilder({
          scale: baseThemeConfigScale3Xl,
          family: baseThemeConfigAccentFont,
        }),
        "4xl": FontBuilder({
          scale: baseThemeConfigScale4Xl,
          family: baseThemeConfigAccentFont,
        }),
        "5xl": FontBuilder({
          scale: baseThemeConfigScale5Xl,
          family: baseThemeConfigAccentFont,
        }),
        "6xl": FontBuilder({
          scale: baseThemeConfigScale6Xl,
          family: baseThemeConfigAccentFont,
        }),
        "7xl": FontBuilder({
          scale: baseThemeConfigScale7Xl,
          family: baseThemeConfigAccentFont,
        }),
        "8xl": FontBuilder({
          scale: baseThemeConfigScale8Xl,
          family: baseThemeConfigAccentFont,
        }),
        "9xl": FontBuilder({
          scale: baseThemeConfigScale9Xl,
          family: baseThemeConfigAccentFont,
        }),
      },
      supporting: {
        xs: FontBuilder({
          scale: baseThemeConfigScaleXs,
          family: baseThemeConfigSupportingFont,
        }),
        sm: FontBuilder({
          scale: baseThemeConfigScaleSm,
          family: baseThemeConfigSupportingFont,
        }),
        md: FontBuilder({
          scale: baseThemeConfigScaleMd,
          family: baseThemeConfigSupportingFont,
        }),
        lg: FontBuilder({
          scale: baseThemeConfigScaleLg,
          family: baseThemeConfigSupportingFont,
        }),
        xl: FontBuilder({
          scale: baseThemeConfigScaleXl,
          family: baseThemeConfigSupportingFont,
        }),
        "2xl": FontBuilder({
          scale: baseThemeConfigScale2Xl,
          family: baseThemeConfigSupportingFont,
        }),
        "3xl": FontBuilder({
          scale: baseThemeConfigScale3Xl,
          family: baseThemeConfigSupportingFont,
        }),
        "4xl": FontBuilder({
          scale: baseThemeConfigScale4Xl,
          family: baseThemeConfigSupportingFont,
        }),
        "5xl": FontBuilder({
          scale: baseThemeConfigScale5Xl,
          family: baseThemeConfigSupportingFont,
        }),
        "6xl": FontBuilder({
          scale: baseThemeConfigScale6Xl,
          family: baseThemeConfigSupportingFont,
        }),
        "7xl": FontBuilder({
          scale: baseThemeConfigScale7Xl,
          family: baseThemeConfigSupportingFont,
        }),
        "8xl": FontBuilder({
          scale: baseThemeConfigScale8Xl,
          family: baseThemeConfigSupportingFont,
        }),
        "9xl": FontBuilder({
          scale: baseThemeConfigScale9Xl,
          family: baseThemeConfigSupportingFont,
        }),
      },
    },
  },
  colors: {
    danger: {
      tint_50: "#fef2f2",
      tint_100: "#fee2e2",
      tint_200: "#fecaca",
      tint_300: "#fca5a5",
      tint_400: "#f87171",
      tint_500: "#ef4444",
      tint_600: "#dc2626",
      tint_700: "#b91c1c",
      tint_800: "#991b1b",
      tint_900: "#7f1d1d",
      tint_950: "#450a0a",
    },
    warning: {
      tint_50: "#fffbeb",
      tint_100: "#fef3c7",
      tint_200: "#fde68a",
      tint_300: "#fcd34d",
      tint_400: "#fbbf24",
      tint_500: "#f59e0b",
      tint_600: "#d97706",
      tint_700: "#b45309",
      tint_800: "#92400e",
      tint_900: "#78350f",
      tint_950: "#451a03",
    },
    success: {
      tint_50: "#f7fee7",
      tint_100: "#ecfccb",
      tint_200: "#d9f99d",
      tint_300: "#bef264",
      tint_400: "#a3e635",
      tint_500: "#84cc16",
      tint_600: "#65a30d",
      tint_700: "#4d7c0f",
      tint_800: "#3f6212",
      tint_900: "#365314",
      tint_950: "#1a2e05",
    },
    info: {
      tint_50: "#f0f9ff",
      tint_100: "#e0f2fe",
      tint_200: "#bae6fd",
      tint_300: "#7dd3fc",
      tint_400: "#38bdf8",
      tint_500: "#0ea5e9",
      tint_600: "#0284c7",
      tint_700: "#0369a1",
      tint_800: "#075985",
      tint_900: "#0c4a6e",
      tint_950: "#082f49",
    },
    neutrals: {
      tint_50: "#FFFFFF",
      tint_100: "#f8fafb",
      tint_200: "#F5F7FA",
      tint_300: "#E5E8EB",
      tint_400: "#E5E8EB",
      tint_500: "#E5E8EB",
      tint_600: "#E5E8EB",
      tint_700: "#E5E8EB",
      tint_800: "#9AA5B1",
      tint_900: "#515F6C",
      tint_950: "#343d45",
    },
    primary: {
      tint_50: "#E0FCFF",
      tint_100: "#E0FCFF",
      tint_200: "#BEF8FD",
      tint_300: "#87EAF2",
      tint_400: "#54D1DB",
      tint_500: "#38BEC9",
      tint_600: "#2CB1BC",
      tint_700: "#14919B",
      tint_800: "#0E7C86",
      tint_900: "#0A6C74",
      tint_950: "#044E54",
    },
    accent: {
      tint_50: "#fdf3f5",
      tint_100: "#ffe3ec",
      tint_200: "#ffb8d2",
      tint_300: "#ff8cba",
      tint_400: "#f364a2",
      tint_500: "#e8368f",
      tint_600: "#da127d",
      tint_700: "#bc0a6f",
      tint_800: "#a30664",
      tint_900: "#870557",
      tint_950: "#620042",
    },
    supporting: {
      tint_50: "#f1f4fb",
      tint_100: "#e0e8f9",
      tint_200: "#bed0f7",
      tint_300: "#98aeeb",
      tint_400: "#7b93db",
      tint_500: "#647acb",
      tint_600: "#4c63b6",
      tint_700: "#4055a8",
      tint_800: "#35469c",
      tint_900: "#2d3a8c",
      tint_950: "#19216c",
    },
    additional: [],
  },
  utility: {
    spacing: {
      0: "0px",
      px: "1px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
  },
  radius: {
    none: "0px",
    xs: baseThemeConfigRadiusXs,
    sm: baseThemeConfigRadiusSm,
    md: baseThemeConfigRadiusMd,
    lg: baseThemeConfigRadiusLg,
    xl: baseThemeConfigRadiusXl,
    "2xl": baseThemeConfigRadius2Xl,
    "3xl": baseThemeConfigRadius3Xl,
    full: "9999px",
  },
};
