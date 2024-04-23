import * as React from 'react';
import * as styled_components from 'styled-components';
import { C as ColorVariantI, a as ColorVariantConfigI } from './color-variant-DBg3dKH0.mjs';
import { A as AdditionalColorItem } from './color-additional-DIwNv1S9.mjs';
import { A as AlternateItem } from './alternate-BrA5MzCI.mjs';

declare const StyleProviderAnimation: React.NamedExoticComponent<styled_components.ExecutionProps & {
    animations?: string[] | undefined;
}>;

declare const StyleProviderFontFace: React.NamedExoticComponent<styled_components.ExecutionProps & {
    resources?: string[] | undefined;
}>;

declare const StyleProviderPreFlight: React.NamedExoticComponent<styled_components.ExecutionProps & object>;

interface TypographyFontI {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
    "7xl": string;
    "8xl": string;
    "9xl": string;
}

interface TypographyFontsScaleSizeConfigI {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    "2xl"?: string;
    "3xl"?: string;
    "4xl"?: string;
    "5xl"?: string;
    "6xl"?: string;
    "7xl"?: string;
    "8xl"?: string;
    "9xl"?: string;
}

interface TypographyFontsScaleConfigI {
    size?: TypographyFontsScaleSizeConfigI;
}

interface TypographyFontsFamilyConfigI {
    primary?: string;
    accent?: string;
    supporting?: string;
}

interface TypographyFontsI {
    primary: TypographyFontI;
    accent: TypographyFontI;
    supporting: TypographyFontI;
}
interface TypographyFontsConfigI {
    family?: TypographyFontsFamilyConfigI;
    scale?: TypographyFontsScaleConfigI;
}

interface TypographyI {
    resources: string[];
    fonts: TypographyFontsI;
}
interface TypographyConfigI {
    resources?: string[];
    fonts?: TypographyFontsConfigI;
}

interface ColorsI {
    danger: ColorVariantI;
    warning: ColorVariantI;
    success: ColorVariantI;
    info: ColorVariantI;
    neutrals: ColorVariantI;
    primary: ColorVariantI;
    accent: ColorVariantI;
    supporting: ColorVariantI;
    additional: AdditionalColorItem[];
}
interface ColorsConfigI {
    danger?: ColorVariantConfigI;
    warning?: ColorVariantConfigI;
    success?: ColorVariantConfigI;
    info?: ColorVariantConfigI;
    neutrals?: ColorVariantConfigI;
    primary?: ColorVariantConfigI;
    accent?: ColorVariantConfigI;
    supporting?: ColorVariantConfigI;
    additional?: AdditionalColorItem[];
}

interface RadiusI {
    none: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    full: string;
}
interface RadiusConfigI {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
}

interface SpacingI {
    0: string;
    px: string;
    0.5: string;
    1: string;
    1.5: string;
    2: string;
    2.5: string;
    3: string;
    3.5: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    14: string;
    16: string;
    20: string;
    24: string;
    28: string;
    32: string;
    36: string;
    40: string;
    44: string;
    48: string;
    52: string;
    56: string;
    60: string;
    64: string;
    72: string;
    80: string;
    96: string;
}

interface UtilityI {
    spacing: SpacingI;
}

interface ThemeI {
    alternate: Array<AlternateItem>;
    colors: ColorsI;
    typography: TypographyI;
    radius: RadiusI;
    utility: UtilityI;
}
interface ThemeConfigI {
    alternate?: Array<AlternateItem>;
    colors?: ColorsConfigI;
    typography?: TypographyConfigI;
    radius?: RadiusConfigI;
}

declare const ThemeBuilder: ({ config }: {
    config: ThemeConfigI;
}) => ThemeI;

declare enum ThemeMode {
    STANDARD = "STANDARD",
    INVERTED = "INVERTED",
    CONTRAST = "CONTRAST"
}

declare const ThemeCtx: React.Context<ThemeI>;

declare const ThemeModeCtx: React.Context<ThemeMode>;

declare const useTheme: () => ThemeI;

declare const useThemeColor: () => ColorsI;

declare const useThemeFonts: () => TypographyFontsI;

declare const useThemeAlternate: () => Array<AlternateItem>;

export { StyleProviderAnimation, StyleProviderFontFace, StyleProviderPreFlight, ThemeBuilder, ThemeCtx, ThemeMode, ThemeModeCtx, useTheme, useThemeAlternate, useThemeColor, useThemeFonts };
