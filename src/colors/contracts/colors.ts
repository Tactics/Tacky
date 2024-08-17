import {
  ColorVariantConfigI,
  ColorVariantI,
} from "@/colors/contracts/color-variant";
import { AdditionalColorItem } from "@/colors/contracts/color-additional";

// A common interface for defining a color scheme for a theme.
export interface ColorsI {
  danger: ColorVariantI;
  warning: ColorVariantI;
  success: ColorVariantI;
  info: ColorVariantI;
  neutrals: ColorVariantI;
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

export interface ColorsConfigI {
  danger?: ColorVariantConfigI;
  warning?: ColorVariantConfigI;
  success?: ColorVariantConfigI;
  info?: ColorVariantConfigI;
  neutrals?: ColorVariantConfigI;
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
