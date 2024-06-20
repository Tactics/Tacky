import * as React from 'react';
import * as styled_components from 'styled-components';
import { T as ThemeConfigI, a as ThemeI, C as ColorsI, b as TypographyFontsI, A as AlternateItem, R as RadiusI, U as UtilityI } from './additional-DaFBnT29.js';
export { c as LookupAdditionalColor, L as LookupAlternate } from './additional-DaFBnT29.js';
import './color-additional-FqWzzv3w.js';

declare const StyleProviderAnimation: React.NamedExoticComponent<styled_components.ExecutionProps & {
    animations?: string[];
}>;

declare const StyleProviderFontFace: React.NamedExoticComponent<styled_components.ExecutionProps & {
    resources?: string[];
}>;

declare const StyleProviderPreFlight: React.NamedExoticComponent<styled_components.ExecutionProps & object>;

declare const StyleProviderRouter: React.NamedExoticComponent<styled_components.ExecutionProps & object>;

declare const ThemeBuilder: ({ config }: {
    config: ThemeConfigI;
}) => ThemeI;

declare enum ThemeMode {
    STANDARD = "STANDARD",
    INVERTED = "INVERTED",
    CONTRAST = "CONTRAST"
}
declare namespace ThemeMode {
    function from(value: string, fallback: ThemeMode): ThemeMode;
    function tryFrom(value: string): ThemeMode | null;
}

declare const ThemeCtx: React.Context<ThemeI>;

declare const ThemeModeCtx: React.Context<ThemeMode>;

declare const useTheme: () => ThemeI;

declare const useThemeColor: () => ColorsI;

declare const useThemeFonts: () => TypographyFontsI;

declare const useThemeAlternate: () => Array<AlternateItem>;

declare const useThemeRadius: () => RadiusI;

declare const useThemeUtility: () => UtilityI;

type prefersReducedMotion = "no-preference" | "reduce";
type prefersContrast = "no-preference" | "more" | "less" | "custom";
type prefersReducedTransparency = "no-preference" | "reduce";
type prefersColorSchema = "light" | "dark";
type invertedColors = "none" | "inverted";
declare class BrowserAccessibilityPreferences {
    readonly prefersReducedMotion: prefersReducedMotion;
    readonly prefersContrast: prefersContrast;
    readonly prefersReducedTransparency: prefersReducedTransparency;
    readonly prefersColorSchema: prefersColorSchema;
    readonly invertedColors: invertedColors;
    constructor(prefersReducedMotion: prefersReducedMotion, prefersContrast: prefersContrast, prefersReducedTransparency: prefersReducedTransparency, prefersColorSchema: prefersColorSchema, invertedColors: invertedColors);
    prefersDarkMode(): boolean;
    prefersHighContrast(): boolean;
    prefersLowContrast(): boolean;
}
declare const useBrowserAccessibilityPreferences: () => BrowserAccessibilityPreferences;

declare const BuildProvidersTree: (componentsWithProps: any) => any;

declare function orDefault(json: any, standard: any, keys: string[]): any;

export { BrowserAccessibilityPreferences, BuildProvidersTree, StyleProviderAnimation, StyleProviderFontFace, StyleProviderPreFlight, StyleProviderRouter, ThemeBuilder, ThemeCtx, ThemeMode, ThemeModeCtx, type invertedColors, orDefault, type prefersColorSchema, type prefersContrast, type prefersReducedMotion, type prefersReducedTransparency, useBrowserAccessibilityPreferences, useTheme, useThemeAlternate, useThemeColor, useThemeFonts, useThemeRadius, useThemeUtility };
