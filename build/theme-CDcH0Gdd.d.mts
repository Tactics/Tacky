import { C as ColorVariantI, a as ColorVariantConfigI } from './color-variant-DioyECWL.mjs';
import { A as AdditionalColorItem } from './color-additional-_M7QfRi_.mjs';
import { A as AlternateItem } from './alternate-j1k3Yp03.mjs';

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
type TypographyWeightKey = TypographyFontWeight.THIN | TypographyFontWeight.XLIGHT | TypographyFontWeight.LIGHT | TypographyFontWeight.NORMAL | TypographyFontWeight.MEDIUM | TypographyFontWeight.SEMIBOLD | TypographyFontWeight.BOLD | TypographyFontWeight.XBOLD | TypographyFontWeight.BLACK;
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
declare const TypographyFontsKeys: string[];
type TypographyFontsKey = "primary" | "supporting" | "accent";

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
    surfaces: ColorVariantI;
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
    surfaces?: ColorVariantConfigI;
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

export { type ColorsI as C, type RadiusI as R, type SpacingI as S, type ThemeConfigI as T, type UtilityI as U, type ThemeI as a, type TypographyFontsI as b, type ColorsConfigI as c, type RadiusConfigI as d, type RadiusKey as e, RadiusKeys as f, Radius as g, type TypographyFontsFamilyConfigI as h, type TypographyFontI as i, type TypographyFontKey as j, type TypographyWeightKey as k, TypographyFontKeys as l, TypographyFont as m, TypographyFontWeightKeys as n, TypographyFontWeight as o, type TypographyFontsConfigI as p, type TypographyFontsKey as q, TypographyFontsKeys as r, type TypographyFontsScaleConfigI as s, type TypographyFontsScaleSizeConfigI as t, type TypographyI as u, type TypographyConfigI as v, type SpacingKey as w, SpacingKeys as x, Spacing as y };
