import { a as ThemeI, T as ThemeConfigI } from './additional-CNMMKmho.mjs';
export { e as AlternateConfigI, d as AlternateI, A as AlternateItem, i as Color, g as ColorKey, h as ColorKeys, f as ColorsConfigI, C as ColorsI, J as ILookupAdditionalColor, K as ILookupAlternate, m as Radius, j as RadiusConfigI, R as RadiusI, k as RadiusKey, l as RadiusKeys, I as Spacing, F as SpacingI, G as SpacingKey, H as SpacingKeys, E as TypographyConfigI, s as TypographyFont, o as TypographyFontI, p as TypographyFontKey, r as TypographyFontKeys, u as TypographyFontWeight, q as TypographyFontWeightKey, t as TypographyFontWeightKeys, y as TypographyFonts, v as TypographyFontsConfigI, n as TypographyFontsFamilyConfigI, b as TypographyFontsI, w as TypographyFontsKey, x as TypographyFontsKeys, z as TypographyFontsScaleConfigI, B as TypographyFontsScaleSizeConfigI, D as TypographyI, U as UtilityI } from './additional-CNMMKmho.mjs';
import { H as HexColor } from './color-additional-FqWzzv3w.mjs';
export { a as AdditionalColorI, b as AdditionalColorIConfigI, A as AdditionalColorItem, f as ColorVariant, c as ColorVariantConfigI, C as ColorVariantI, d as ColorVariantKey, e as ColorVariantKeys } from './color-additional-FqWzzv3w.mjs';

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
