import { H as HexColor, C as ColorVariantI, A as AdditionalColorItem, c as ColorVariantConfigI } from './color-additional-FqWzzv3w.mjs';

interface TypographyFontI {
    xs: TypographyFontWeightI;
    sm: TypographyFontWeightI;
    md: TypographyFontWeightI;
    lg: TypographyFontWeightI;
    xl: TypographyFontWeightI;
    "2xl": TypographyFontWeightI;
    "3xl": TypographyFontWeightI;
    "4xl": TypographyFontWeightI;
    "5xl": TypographyFontWeightI;
    "6xl": TypographyFontWeightI;
    "7xl": TypographyFontWeightI;
    "8xl": TypographyFontWeightI;
    "9xl": TypographyFontWeightI;
}
interface TypographyFontWeightI {
    thin: string;
    xlight: string;
    light: string;
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
    xbold: string;
    black: string;
}
declare enum TypographyFontWeight {
    THIN = "thin",
    XLIGHT = "xlight",
    LIGHT = "light",
    NORMAL = "normal",
    MEDIUM = "medium",
    SEMIBOLD = "semibold",
    BOLD = "bold",
    XBOLD = "xbold",
    BLACK = "black"
}
declare const TypographyFontWeightKeys: TypographyFontWeight[];
type TypographyFontWeightKey = TypographyFontWeight.THIN | TypographyFontWeight.XLIGHT | TypographyFontWeight.LIGHT | TypographyFontWeight.NORMAL | TypographyFontWeight.MEDIUM | TypographyFontWeight.SEMIBOLD | TypographyFontWeight.BOLD | TypographyFontWeight.XBOLD | TypographyFontWeight.BLACK;
declare enum TypographyFont {
    XS = "xs",
    SM = "sm",
    MD = "md",
    LG = "lg",
    XL = "xl",
    XL2 = "2xl",
    XL3 = "3xl",
    XL4 = "4xl",
    XL5 = "5xl",
    XL6 = "6xl",
    XL7 = "7xl",
    XL8 = "8xl",
    XL9 = "9xl"
}
declare const TypographyFontKeys: TypographyFont[];
type TypographyFontKey = TypographyFont.XS | TypographyFont.SM | TypographyFont.MD | TypographyFont.LG | TypographyFont.XL | TypographyFont.XL2 | TypographyFont.XL3 | TypographyFont.XL4 | TypographyFont.XL5 | TypographyFont.XL6 | TypographyFont.XL7 | TypographyFont.XL8 | TypographyFont.XL9;

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
declare enum TypographyFonts {
    PRIMARY = "primary",
    SUPPORTING = "supporting",
    ACCENT = "accent"
}
declare const TypographyFontsKeys: TypographyFonts[];
type TypographyFontsKey = TypographyFonts.PRIMARY | TypographyFonts.SUPPORTING | TypographyFonts.ACCENT;

interface TypographyI {
    external_resources: string[];
    fonts: TypographyFontsI;
}
interface TypographyConfigI {
    external_resources?: string[];
    fonts?: TypographyFontsConfigI;
}

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

interface ColorsI {
    danger: ColorVariantI;
    warning: ColorVariantI;
    success: ColorVariantI;
    info: ColorVariantI;
    neutrals: ColorVariantI;
    surfaces: ColorVariantI;
    primary: ColorVariantI;
    accent: ColorVariantI;
    supporting: ColorVariantI;
    additional: AdditionalColorItem[];
    map: ColorMapI;
}
interface ColorsConfigI {
    danger?: ColorVariantConfigI;
    warning?: ColorVariantConfigI;
    success?: ColorVariantConfigI;
    info?: ColorVariantConfigI;
    neutrals?: ColorVariantConfigI;
    surfaces?: ColorVariantConfigI;
    primary?: ColorVariantConfigI;
    accent?: ColorVariantConfigI;
    supporting?: ColorVariantConfigI;
    additional?: AdditionalColorItem[];
    map?: ColorMapConfigI;
}
declare enum Color {
    DANGER = "danger",
    WARNING = "warning",
    SUCCESS = "success",
    INFO = "info",
    NEUTRALS = "neutrals",
    SURFACES = "surfaces",
    PRIMARY = "primary",
    SUPPORTING = "supporting",
    ACCENT = "accent"
}
declare const ColorKeys: Color[];
type ColorKey = Color.DANGER | Color.WARNING | Color.SUCCESS | Color.INFO | Color.NEUTRALS | Color.SURFACES | Color.PRIMARY | Color.SUPPORTING | Color.ACCENT;

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
declare enum Radius {
    NONE = "none",
    XS = "xs",
    SM = "sm",
    MD = "md",
    LG = "lg",
    XL = "xl",
    XL2 = "2xl",
    XL3 = "3xl",
    FULL = "full"
}
declare const RadiusKeys: Radius[];
type RadiusKey = Radius.NONE | Radius.XS | Radius.SM | Radius.MD | Radius.LG | Radius.XL | Radius.XL2 | Radius.XL3 | Radius.FULL;

interface AlternateItem {
    name: string;
    style: object;
}
interface AlternateI {
    components: Array<AlternateItem>;
}
interface AlternateConfigI {
    components?: Array<AlternateItem>;
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
declare enum Spacing {
    S0 = "0",
    PX = "px",
    S05 = "0.5",
    S10 = "1",
    S15 = "1.5",
    S20 = "2",
    S25 = "2.5",
    S30 = "3",
    S40 = "4",
    S50 = "5",
    S60 = "6",
    S70 = "7",
    S80 = "8",
    S90 = "9",
    S100 = "10",
    S110 = "11",
    S120 = "12",
    S140 = "14",
    S160 = "16",
    S200 = "20",
    S320 = "32",
    S360 = "36",
    S400 = "40",
    S440 = "44",
    S480 = "48",
    S520 = "52",
    S560 = "56",
    S600 = "60",
    S640 = "64",
    S720 = "72",
    S800 = "80",
    S960 = "96"
}
declare const SpacingKeys: Spacing[];
type SpacingKey = Spacing.S0 | Spacing.PX | Spacing.S05 | Spacing.S10 | Spacing.S15 | Spacing.S20 | Spacing.S25 | Spacing.S30 | Spacing.S40 | Spacing.S50 | Spacing.S60 | Spacing.S70 | Spacing.S80 | Spacing.S90 | Spacing.S100 | Spacing.S110 | Spacing.S120 | Spacing.S140 | Spacing.S160 | Spacing.S200 | Spacing.S320 | Spacing.S360 | Spacing.S400 | Spacing.S440 | Spacing.S480 | Spacing.S520 | Spacing.S560 | Spacing.S600 | Spacing.S640 | Spacing.S720 | Spacing.S800 | Spacing.S960;

interface BreakpointI {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
}

interface UtilityI {
    spacing: SpacingI;
    breakpoints: BreakpointI;
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

interface ILookupAlternate {
    name: string;
    alternates: Array<AlternateItem>;
}
declare const LookupAlternate: ({ name, alternates, }: ILookupAlternate) => AlternateItem | undefined;

interface ILookupAdditionalColor {
    name: string;
    colors: AdditionalColorItem[];
    fallback: HexColor | "transparent";
}
declare const LookupAdditionalColor: ({ name, colors, fallback, }: ILookupAdditionalColor) => HexColor | "transparent";

export { type AlternateItem as A, TypographyFont as B, type ColorsI as C, TypographyFontWeightKeys as D, TypographyFontWeight as E, type TypographyFontsConfigI as F, type TypographyFontsKey as G, TypographyFontsKeys as H, TypographyFonts as I, type TypographyFontsScaleConfigI as J, type TypographyFontsScaleSizeConfigI as K, LookupAlternate as L, type TypographyI as M, type TypographyConfigI as N, type SpacingKey as O, SpacingKeys as P, Spacing as Q, type RadiusI as R, type SpacingI as S, type ThemeConfigI as T, type UtilityI as U, type ILookupAdditionalColor as V, type ILookupAlternate as W, type ThemeI as a, type TypographyFontsI as b, LookupAdditionalColor as c, type AlternateI as d, type AlternateConfigI as e, type ColorsConfigI as f, type ColorKey as g, ColorKeys as h, Color as i, type ColorMapI as j, type ColorMapConfigI as k, type ColorMapLabelsI as l, type ColorMapLabelsConfigI as m, type ColorMapBordersI as n, type ColorMapBordersConfigI as o, type ColorMapLandscapeI as p, type ColorMapLandscapeConfigI as q, type RadiusConfigI as r, type RadiusKey as s, RadiusKeys as t, Radius as u, type TypographyFontsFamilyConfigI as v, type TypographyFontI as w, type TypographyFontKey as x, type TypographyFontWeightKey as y, TypographyFontKeys as z };
