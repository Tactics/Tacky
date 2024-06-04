export interface TypographyFontI {
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

export interface TypographyFontWeightI {
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

export enum TypographyFontWeight {
  THIN = "thin",
  XLIGHT = "xlight",
  LIGHT = "light",
  NORMAL = "normal",
  MEDIUM = "medium",
  SEMIBOLD = "semibold",
  BOLD = "bold",
  XBOLD = "xbold",
  BLACK = "black",
}

export const TypographyFontWeightKeys = [
  TypographyFontWeight.THIN,
  TypographyFontWeight.XLIGHT,
  TypographyFontWeight.LIGHT,
  TypographyFontWeight.NORMAL,
  TypographyFontWeight.MEDIUM,
  TypographyFontWeight.SEMIBOLD,
  TypographyFontWeight.BOLD,
  TypographyFontWeight.XBOLD,
  TypographyFontWeight.BLACK,
];

export type TypographyFontWeightKey =
  | TypographyFontWeight.THIN
  | TypographyFontWeight.XLIGHT
  | TypographyFontWeight.LIGHT
  | TypographyFontWeight.NORMAL
  | TypographyFontWeight.MEDIUM
  | TypographyFontWeight.SEMIBOLD
  | TypographyFontWeight.BOLD
  | TypographyFontWeight.XBOLD
  | TypographyFontWeight.BLACK;

export enum TypographyFont {
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
  XL9 = "9xl",
}

export const TypographyFontKeys = [
  TypographyFont.XS,
  TypographyFont.SM,
  TypographyFont.MD,
  TypographyFont.LG,
  TypographyFont.XL,
  TypographyFont.XL2,
  TypographyFont.XL3,
  TypographyFont.XL4,
  TypographyFont.XL5,
  TypographyFont.XL6,
  TypographyFont.XL7,
  TypographyFont.XL8,
  TypographyFont.XL9,
];

export type TypographyFontKey =
  | TypographyFont.XS
  | TypographyFont.SM
  | TypographyFont.MD
  | TypographyFont.LG
  | TypographyFont.XL
  | TypographyFont.XL2
  | TypographyFont.XL3
  | TypographyFont.XL4
  | TypographyFont.XL5
  | TypographyFont.XL6
  | TypographyFont.XL7
  | TypographyFont.XL8
  | TypographyFont.XL9;
