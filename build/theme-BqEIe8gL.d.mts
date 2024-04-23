import { C as ColorVariantI, a as ColorVariantConfigI } from './color-variant-m5nQj-fP.mjs';
import { A as AdditionalColorItem } from './color-additional-_M7QfRi_.mjs';
import { A as AlternateItem } from './alternate-j1k3Yp03.mjs';

interface TypographyFontI {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
    "7xl": string;
    "8xl": string;
    "9xl": string;
}

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

export type { ColorsI as C, RadiusI as R, SpacingI as S, ThemeConfigI as T, UtilityI as U, ThemeI as a, TypographyFontsI as b, ColorsConfigI as c, RadiusConfigI as d, TypographyFontsFamilyConfigI as e, TypographyFontI as f, TypographyFontsConfigI as g, TypographyFontsScaleConfigI as h, TypographyFontsScaleSizeConfigI as i, TypographyI as j, TypographyConfigI as k };
