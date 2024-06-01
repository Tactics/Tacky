export interface RadiusI {
  none: string; // 0px
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  full: string; // 9999px
}

// When setting 1 radius config, you must set all to prevent generated strange config.
// Since they are all relevant to one another.
export interface RadiusConfigI {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
}

export enum Radius {
  NONE = "none",
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
  XL2 = "2xl",
  XL3 = "3xl",
  FULL = "full",
}

export const RadiusKeys = [
  Radius.NONE,
  Radius.XS,
  Radius.SM,
  Radius.MD,
  Radius.LG,
  Radius.XL,
  Radius.XL2,
  Radius.XL3,
  Radius.FULL,
];
export type RadiusKey =
  | Radius.NONE
  | Radius.XS
  | Radius.SM
  | Radius.MD
  | Radius.LG
  | Radius.XL
  | Radius.XL2
  | Radius.XL3
  | Radius.FULL;
