import { T as ThemeI, a as ThemeConfigI } from './alternate-BFQspUNF.js';
export { c as AlternateConfigI, b as AlternateI, A as AlternateItem, d as AlternateThemable, g as AlternateThemableConfig, e as AlternateThemableStates, f as AlternateThemableStatesConfig, k as Color, i as ColorKey, j as ColorKeys, h as ColorsConfigI, C as ColorsI, L as ILookupAdditionalColor, M as ILookupAlternateTheme, o as Radius, l as RadiusConfigI, R as RadiusI, m as RadiusKey, n as RadiusKeys, K as Spacing, S as SpacingI, I as SpacingKey, J as SpacingKeys, H as TypographyConfigI, u as TypographyFont, q as TypographyFontI, r as TypographyFontKey, t as TypographyFontKeys, w as TypographyFontWeight, s as TypographyFontWeightKey, v as TypographyFontWeightKeys, D as TypographyFonts, y as TypographyFontsConfigI, p as TypographyFontsFamilyConfigI, x as TypographyFontsI, z as TypographyFontsKey, B as TypographyFontsKeys, E as TypographyFontsScaleConfigI, F as TypographyFontsScaleSizeConfigI, G as TypographyI, U as UtilityI } from './alternate-BFQspUNF.js';
import { H as HexColor } from './color-variant-uYRwhhZI.js';
export { a as AdditionalColorI, b as AdditionalColorIConfigI, A as AdditionalColorItem, f as ColorVariant, c as ColorVariantConfigI, C as ColorVariantI, d as ColorVariantKey, e as ColorVariantKeys } from './color-variant-uYRwhhZI.js';

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
