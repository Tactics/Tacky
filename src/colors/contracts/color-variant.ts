import { HexColor } from "@/colors/contracts/hex";

// Every color in a color scheme will need different tints of the same color.
// This makes the theme more vibrant and helps us create contrast and depth.
export interface ColorVariantI {
  tint_50: HexColor;
  tint_100: HexColor;
  tint_200: HexColor;
  tint_300: HexColor;
  tint_400: HexColor;
  tint_500: HexColor;
  tint_600: HexColor;
  tint_700: HexColor;
  tint_800: HexColor;
  tint_900: HexColor;
  tint_950: HexColor;
}

export interface ColorVariantConfigI {
  tint_50?: HexColor;
  tint_100?: HexColor;
  tint_200?: HexColor;
  tint_300?: HexColor;
  tint_400?: HexColor;
  tint_500?: HexColor;
  tint_600?: HexColor;
  tint_700?: HexColor;
  tint_800?: HexColor;
  tint_900?: HexColor;
  tint_950?: HexColor;
}

export const ColorVariantKeys = [
  "tint_50",
  "tint_100",
  "tint_200",
  "tint_300",
  "tint_400",
  "tint_500",
  "tint_600",
  "tint_700",
  "tint_800",
  "tint_900",
];
export type ColorVariantKey =
  | "tint_50"
  | "tint_100"
  | "tint_200"
  | "tint_300"
  | "tint_400"
  | "tint_500"
  | "tint_600"
  | "tint_700"
  | "tint_800"
  | "tint_900";
