import {
  ColorVariantConfigI,
  ColorVariantI,
} from "@/colors/contracts/color-variant";

export interface BrandingColorsI {
  primary: ColorVariantI;
  supporting: ColorVariantI;
  accent: ColorVariantI;
  accent2: ColorVariantI;
  accent3: ColorVariantI;
  accent4: ColorVariantI;
  accent5: ColorVariantI;
}

export interface BrandingColorsConfigI {
  primary?: ColorVariantConfigI;
  accent?: ColorVariantConfigI;
  accent2?: ColorVariantConfigI;
  accent3?: ColorVariantConfigI;
  accent4?: ColorVariantConfigI;
  accent5?: ColorVariantConfigI;
  supporting?: ColorVariantConfigI;
}

export interface UtilityColorsI {
  border?: ColorVariantI; // tmp optional, until neutrals are removed
  text?: ColorVariantI; // tmp optional, until neutrals are removed
  surfaces: ColorVariantI;
  skeletons: ColorVariantI;
}

export interface UtilityColorsConfigI {
  skeletons?: ColorVariantConfigI;
  border?: ColorVariantConfigI;
  text?: ColorVariantConfigI;
  surfaces?: ColorVariantConfigI;
}

export interface SemanticColorsI {
  danger: ColorVariantI;
  warning: ColorVariantI;
  success: ColorVariantI;
  info: ColorVariantI;
}

export interface SemanticColorsConfigI {
  danger?: ColorVariantConfigI;
  warning?: ColorVariantConfigI;
  success?: ColorVariantConfigI;
  info?: ColorVariantConfigI;
}

export interface ScopeColorsI extends UtilityColorsConfigI, BrandingColorsI {}
export interface ScopeColorsConfigI
  extends UtilityColorsConfigI,
    BrandingColorsConfigI {}

export interface AllColorsI
  extends UtilityColorsI,
    SemanticColorsI,
    BrandingColorsI {
  neutrals: ColorVariantI; // Deprecated
}

// A common interface for defining a color scheme for a theme.
export interface ColorsI extends AllColorsI {
  scoped?: Record<string, AllColorsI>; // scoped needs to be optional
}

export interface ColorsConfigI
  extends UtilityColorsConfigI,
    SemanticColorsConfigI,
    BrandingColorsConfigI {
  neutrals?: ColorVariantConfigI; // Deprecated
  scoped?: Record<string, ScopeColorsConfigI>;
}

export enum Color {
  DANGER = "danger",
  WARNING = "warning",
  SUCCESS = "success",
  INFO = "info",
  NEUTRALS = "neutrals",
  SURFACES = "surfaces",
  PRIMARY = "primary",
  SUPPORTING = "supporting",
  ACCENT = "accent",
}

export const ColorKeys = [
  Color.DANGER,
  Color.WARNING,
  Color.SUCCESS,
  Color.INFO,
  Color.NEUTRALS,
  Color.SURFACES,
  Color.PRIMARY,
  Color.SUPPORTING,
  Color.ACCENT,
];

export type ColorKey =
  | Color.DANGER
  | Color.WARNING
  | Color.SUCCESS
  | Color.INFO
  | Color.NEUTRALS
  | Color.SURFACES
  | Color.PRIMARY
  | Color.SUPPORTING
  | Color.ACCENT;
