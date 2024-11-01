import * as React from 'react';
import { PropsWithChildren, FC } from 'react';
import * as styled_components from 'styled-components';
import { T as ThemeConfigI, a as ThemeI, C as ColorsI, b as TypographyFontsI, A as AlternateThemableStatesConfig, c as AlternateThemableStates, R as RadiusI, U as UtilityI, S as ShadowI } from './additional-DXXLklIW.mjs';
export { d as LookupAdditionalColor, L as LookupAlternateTheme } from './additional-DXXLklIW.mjs';
import './color-additional-FqWzzv3w.mjs';

declare const StyleProviderAnimation: React.NamedExoticComponent<styled_components.ExecutionProps & {
    animations?: string[];
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
declare namespace ThemeMode {
    function from(value: string, fallback: ThemeMode): ThemeMode;
    function tryFrom(value: string): ThemeMode | null;
}

declare const ThemeCtx: React.Context<ThemeI>;

declare const ThemeModeCtx: React.Context<ThemeMode>;

declare const useTheme: () => ThemeI;

declare const useThemeColor: () => ColorsI;

declare const useThemeFonts: () => TypographyFontsI;

declare const useAlternateTheme: ({ component, font, default: defaultThemable, }: {
    component: string;
    font: string;
    default?: AlternateThemableStatesConfig;
}) => AlternateThemableStates;

declare const useThemeRadius: () => RadiusI;

declare const useThemeUtility: () => UtilityI;

declare const useThemeShadow: () => ShadowI;

declare const BuildProvidersTree: (componentsWithProps: any) => any;

declare function orDefault(json: any, standard: any, keys: string[]): any;

interface ExternalStylesheetLoaderI extends PropsWithChildren {
    sheets: string[];
}
declare const ExternalStylesheetLoader: FC<ExternalStylesheetLoaderI>;

export { BuildProvidersTree, ExternalStylesheetLoader, type ExternalStylesheetLoaderI, StyleProviderAnimation, StyleProviderPreFlight, ThemeBuilder, ThemeCtx, ThemeMode, ThemeModeCtx, orDefault, useAlternateTheme, useTheme, useThemeColor, useThemeFonts, useThemeRadius, useThemeShadow, useThemeUtility };
