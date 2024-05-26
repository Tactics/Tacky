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
  primary: ColorVariantI;
  accent: ColorVariantI;
  supporting: ColorVariantI;
  additional: AdditionalColorItem[];
}

export interface ColorsConfigI {
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
