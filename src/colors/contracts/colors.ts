import {
  ColorVariant,
  ColorVariantConfigI,
  ColorVariantI,
} from "@/colors/contracts/color-variant";
import { AdditionalColorItem } from "@/colors/contracts/color-additional";
import { ColorMapConfigI, ColorMapI } from "@/colors/contracts/color-map";

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
  supporting: ColorVariantI;
  additional: AdditionalColorItem[];
  map: ColorMapI;
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
  supporting?: ColorVariantConfigI;
  additional?: AdditionalColorItem[];
  map?: ColorMapConfigI;
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
