import { ColorVariantConfigI, ColorVariantI } from "./color-variant";
import { AdditionalColorItem } from "./color-additional";

// A common interface for defining a color scheme for a theme.
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

export type { ColorsI, ColorsConfigI };
