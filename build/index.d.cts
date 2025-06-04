import * as react from 'react';
import { PropsWithChildren, FC } from 'react';
import * as styled_components from 'styled-components';
import { a as ThemeConfigI, T as ThemeI, C as ColorsI, x as TypographyFontsI, f as AlternateThemableStatesConfig, e as AlternateThemableStates, R as RadiusI, U as UtilityI, M as ShadowI } from './alternate-I7zBCSNd.cjs';
export { N as LookupAlternateTheme } from './alternate-I7zBCSNd.cjs';
import * as react_jsx_runtime from 'react/jsx-runtime';
import './color-variant-Dkz8HCHn.cjs';

declare const StyleProviderAnimation: react.NamedExoticComponent<styled_components.ExecutionProps & {
    animations?: string[];
}>;

declare const StyleProviderPreFlight: react.NamedExoticComponent<styled_components.ExecutionProps & object>;

declare const StyleProviderScrollbar: react.NamedExoticComponent<styled_components.ExecutionProps & object>;

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

declare const ThemeCtx: react.Context<ThemeI>;

declare const ThemeModeCtx: react.Context<ThemeMode>;

declare const useTheme: () => ThemeI;

declare const useThemeColor: () => ColorsI;

declare const useThemeFonts: () => TypographyFontsI;

declare const useAlternateTheme: ({ component, font, default: defaultThemable, }: {
    component: string;
    font: string;
    default?: AlternateThemableStatesConfig;
}) => AlternateThemableStates;

declare const useThemeSetting: (setting: string) => string | null;

declare const useThemeRadius: () => RadiusI;

declare const useThemeUtility: () => UtilityI;

declare const useThemeShadow: () => ShadowI;

declare const BuildProvidersTree: (componentsWithProps: any) => any;

declare function orDefault(json: any, standard: any, keys: string[]): any;

interface ExternalStylesheetLoaderI extends PropsWithChildren {
    sheets: string[];
}
declare const ExternalStylesheetLoader: FC<ExternalStylesheetLoaderI>;

declare function Opacity(hex: string, a: number, backgroundColor?: {
    r: number;
    g: number;
    b: number;
}): string;

declare const RootScope = "root";
interface IContextProviderThemeScope {
    scope: string;
}
interface IContextProviderThemeScope extends PropsWithChildren {
    scope: string;
}
declare const ContextProviderThemeScope: (props: IContextProviderThemeScope) => react_jsx_runtime.JSX.Element;

export { BuildProvidersTree, ContextProviderThemeScope, ExternalStylesheetLoader, type ExternalStylesheetLoaderI, Opacity, RootScope, StyleProviderAnimation, StyleProviderPreFlight, StyleProviderScrollbar, ThemeBuilder, ThemeCtx, ThemeMode, ThemeModeCtx, orDefault, useAlternateTheme, useTheme, useThemeColor, useThemeFonts, useThemeRadius, useThemeSetting, useThemeShadow, useThemeUtility };
