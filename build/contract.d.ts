import { a as ThemeI, T as ThemeConfigI } from './additional-CmUjF1SK.js';
export { g as AlternateConfigI, f as AlternateI, e as AlternateItem, h as AlternateThemable, i as AlternateThemableConfig, c as AlternateThemableStates, A as AlternateThemableStatesConfig, m as Color, k as ColorKey, l as ColorKeys, j as ColorsConfigI, C as ColorsI, O as ILookupAdditionalColor, P as ILookupAlternateTheme, q as Radius, n as RadiusConfigI, R as RadiusI, o as RadiusKey, p as RadiusKeys, N as Spacing, J as SpacingI, K as SpacingKey, M as SpacingKeys, I as TypographyConfigI, w as TypographyFont, s as TypographyFontI, t as TypographyFontKey, v as TypographyFontKeys, y as TypographyFontWeight, u as TypographyFontWeightKey, x as TypographyFontWeightKeys, E as TypographyFonts, z as TypographyFontsConfigI, r as TypographyFontsFamilyConfigI, b as TypographyFontsI, B as TypographyFontsKey, D as TypographyFontsKeys, F as TypographyFontsScaleConfigI, G as TypographyFontsScaleSizeConfigI, H as TypographyI, U as UtilityI } from './additional-CmUjF1SK.js';
import { H as HexColor } from './color-additional-FqWzzv3w.js';
export { a as AdditionalColorI, b as AdditionalColorIConfigI, A as AdditionalColorItem, f as ColorVariant, c as ColorVariantConfigI, C as ColorVariantI, d as ColorVariantKey, e as ColorVariantKeys } from './color-additional-FqWzzv3w.js';

interface ColorMapLabelsI {
    all: HexColor;
    water: HexColor;
    highway: HexColor;
    road: HexColor;
}
interface ColorMapBordersI {
    country: HexColor;
    highway: HexColor;
    road: HexColor;
}
interface ColorMapLandscapeI {
    all: HexColor;
    artificial: HexColor;
    terrain: HexColor;
    park: HexColor;
    poi: HexColor;
    water: HexColor;
    transit: HexColor;
    highway: HexColor;
    road: HexColor;
}
interface ColorMapLabelsConfigI {
    all?: HexColor;
    water?: HexColor;
    highway?: HexColor;
    road?: HexColor;
}
interface ColorMapBordersConfigI {
    country?: HexColor;
    highway?: HexColor;
    road?: HexColor;
}
interface ColorMapLandscapeConfigI {
    all?: HexColor;
    artificial?: HexColor;
    terrain?: HexColor;
    park?: HexColor;
    poi?: HexColor;
    water?: HexColor;
    transit?: HexColor;
    highway?: HexColor;
    road?: HexColor;
}
interface ColorMapI {
    label: ColorMapLabelsI;
    border: ColorMapBordersI;
    landscape: ColorMapLandscapeI;
}
interface ColorMapConfigI {
    label?: ColorMapLabelsConfigI;
    border?: ColorMapBordersConfigI;
    landscape?: ColorMapLandscapeConfigI;
}

interface ThemeVariantsI {
    standard: ThemeI;
    inverted: ThemeI;
    contrast: ThemeI;
}
interface ThemeVariantsConfigI {
    standard?: ThemeConfigI;
    inverted?: ThemeConfigI;
    contrast?: ThemeConfigI;
}

interface TypographyFontsScaleLineHeightConfigI {
    xs?: string | number;
    sm?: string | number;
    md?: string | number;
    lg?: string | number;
    xl?: string | number;
    "2xl"?: string | number;
    "3xl"?: string | number;
    "4xl"?: string | number;
    "5xl"?: string | number;
    "6xl"?: string | number;
    "7xl"?: string | number;
    "8xl"?: string | number;
    "9xl"?: string | number;
}

export { type ColorMapBordersConfigI, type ColorMapBordersI, type ColorMapConfigI, type ColorMapI, type ColorMapLabelsConfigI, type ColorMapLabelsI, type ColorMapLandscapeConfigI, type ColorMapLandscapeI, HexColor, ThemeConfigI, ThemeI, type ThemeVariantsConfigI, type ThemeVariantsI, type TypographyFontsScaleLineHeightConfigI };
