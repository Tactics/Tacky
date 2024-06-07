import {
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
