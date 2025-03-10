import { C as ColorVariantI, A as AdditionalColorItem, c as ColorVariantConfigI, H as HexColor } from './color-variant-uYRwhhZI.js';

interface AlternateItem {
    name: string;
    theme: AlternateThemableStatesConfig;
}
interface AlternateI {
    components: Array<AlternateItem>;
}
interface AlternateConfigI {
    components?: Array<AlternateItem>;
}
interface AlternateThemableStates {
    Init: AlternateThemable;
    Hover: AlternateThemable;
    Active: AlternateThemable;
}
interface AlternateThemable {
    Color: string;
    BackgroundColor: string;
    Border: string;
    BorderRaw: AlternateThemableBorder;
    Font: string;
}
interface AlternateThemableBorder {
    Color: string;
    Style: string;
    Width: number;
}
interface AlternateThemableStatesConfig {
    Init?: AlternateThemableConfig;
    Hover?: AlternateThemableConfig;
    Active?: AlternateThemableConfig;
}
interface AlternateThemableConfig {
    Color?: string;
    BackgroundColor?: string;
    Border?: AlternateThemableBorderConfig;
    FontWeightAdjustment?: number;
}
interface AlternateThemableBorderConfig {
    Color?: string;
    Style?: string;
    Width?: number;
}
interface AlternateThemableBorderConfig {
    Color?: string;
    Style?: string;
    Width?: number;
}

interface ColorsI {
    danger: ColorVariantI;
    warning: ColorVariantI;
    success: ColorVariantI;
    info: ColorVariantI;
    skeletons: ColorVariantI;
    neutrals: ColorVariantI;
    border: ColorVariantI;
    text: ColorVariantI;
    surfaces: ColorVariantI;
    primary: ColorVariantI;
    accent: ColorVariantI;
    accent2: ColorVariantI;
    accent3: ColorVariantI;
    accent4: ColorVariantI;
    accent5: ColorVariantI;
    supporting: ColorVariantI;
    additional: AdditionalColorItem[];
}
interface ColorsConfigI {
    danger?: ColorVariantConfigI;
    warning?: ColorVariantConfigI;
    success?: ColorVariantConfigI;
    info?: ColorVariantConfigI;
    skeletons?: ColorVariantConfigI;
    neutrals?: ColorVariantConfigI;
    border?: ColorVariantConfigI;
    text?: ColorVariantConfigI;
    surfaces?: ColorVariantConfigI;
    primary?: ColorVariantConfigI;
    accent?: ColorVariantConfigI;
    accent2?: ColorVariantConfigI;
    accent3?: ColorVariantConfigI;
    accent4?: ColorVariantConfigI;
    accent5?: ColorVariantConfigI;
    supporting?: ColorVariantConfigI;
    additional?: AdditionalColorItem[];
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
    sm: number;
    md: number;
    lg: number;
    xl: number;
    "2xl": number;
}

interface UtilityI {
    spacing: SpacingI;
    breakpoints: BreakpointI;
}

interface ShadowI {
    none: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
}
interface ShadowConfigI {
    sm: string;
    xs: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
}

interface ThemeI {
    settings: Record<string, string>;
    alternate: Array<AlternateItem>;
    colors: ColorsI;
    typography: TypographyI;
    radius: RadiusI;
    utility: UtilityI;
    shadow: ShadowI;
}
interface ThemeConfigI {
    /**
     * Additional settings for a certain theme that are not structural things to apply in every theme.
     * These are settings that are not part of the base theme, but related to the theme.
     *
     * This can be anything, but the theme needs to provide a fallback when setting is not set.
     * The same principle as .env settings it used, therefor all values are strings and need to be parsed by the consumer.
     *
     * Example:
     * {
     *     "iconLibrary": "nucleo",
     *     "reducedVisuals": "true",
     * }
     *
     */
    settings?: Record<string, string>;
    /**
     * The optional alternate items to override specific component styles of the theme.
     * @see useAlternateTheme();
     *
     * Example:
     *
     * {
     *   "name": "Component.ELEMENT",
     *   "theme": {
     *     "Init": {
     *       "BackgroundColor": "#e0ebf6",
     *       "Border": {
     *         "Width": 1,
     *         "Color": "#e0ebf6",
     *         "Style": "solid"
     *       }
     *     },
     * }
     *
     */
    alternate?: Array<AlternateItem>;
    /**
     * The main color config of the theme.
     */
    colors?: ColorsConfigI;
    /**
     * The typography config of the theme.
     */
    typography?: TypographyConfigI;
    /**
     * The different radius sizes of the theme.
     */
    radius?: RadiusConfigI;
    /**
     * The different shadow sizes of the theme.
     */
    shadow?: ShadowConfigI;
}

interface ILookupAdditionalColor {
    name: string;
    colors: AdditionalColorItem[];
    fallback: HexColor | "transparent";
}
declare const LookupAdditionalColor: ({ name, colors, fallback, }: ILookupAdditionalColor) => HexColor | "transparent";

interface ILookupAlternateTheme {
    name: string;
    alternates: Array<AlternateItem>;
}
declare const LookupAlternateTheme: ({ name, alternates, }: ILookupAlternateTheme) => AlternateThemableStatesConfig | undefined;

export { type AlternateItem as A, TypographyFontsKeys as B, type ColorsI as C, TypographyFonts as D, type TypographyFontsScaleConfigI as E, type TypographyFontsScaleSizeConfigI as F, type TypographyI as G, type TypographyConfigI as H, type SpacingKey as I, SpacingKeys as J, Spacing as K, type ILookupAdditionalColor as L, type ILookupAlternateTheme as M, type ShadowI as N, LookupAlternateTheme as O, LookupAdditionalColor as P, type RadiusI as R, type SpacingI as S, type ThemeI as T, type UtilityI as U, type ThemeConfigI as a, type AlternateI as b, type AlternateConfigI as c, type AlternateThemable as d, type AlternateThemableStates as e, type AlternateThemableStatesConfig as f, type AlternateThemableConfig as g, type ColorsConfigI as h, type ColorKey as i, ColorKeys as j, Color as k, type RadiusConfigI as l, type RadiusKey as m, RadiusKeys as n, Radius as o, type TypographyFontsFamilyConfigI as p, type TypographyFontI as q, type TypographyFontKey as r, type TypographyFontWeightKey as s, TypographyFontKeys as t, TypographyFont as u, TypographyFontWeightKeys as v, TypographyFontWeight as w, type TypographyFontsI as x, type TypographyFontsConfigI as y, type TypographyFontsKey as z };
