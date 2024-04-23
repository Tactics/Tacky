import * as React from 'react';
import * as styled_components from 'styled-components';
import { T as ThemeConfigI, a as ThemeI, C as ColorsI, b as TypographyFontsI } from './theme-BqEIe8gL.mjs';
import { A as AlternateItem } from './alternate-j1k3Yp03.mjs';
import './color-variant-m5nQj-fP.mjs';
import './color-additional-_M7QfRi_.mjs';

declare const StyleProviderAnimation: React.NamedExoticComponent<styled_components.ExecutionProps & {
    animations?: string[] | undefined;
}>;

declare const StyleProviderFontFace: React.NamedExoticComponent<styled_components.ExecutionProps & {
    resources?: string[] | undefined;
}>;

declare const StyleProviderPreFlight: React.NamedExoticComponent<styled_components.ExecutionProps & object>;

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
