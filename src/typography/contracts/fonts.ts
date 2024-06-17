import { TypographyFontI } from "@/typography/contracts/font";
import { TypographyFontsScaleConfigI } from "@/typography/contracts/scale";
import { TypographyFontsFamilyConfigI } from "@/typography/contracts/family";

export interface TypographyFontsI {
  primary: TypographyFontI;
  accent: TypographyFontI;
  supporting: TypographyFontI;
}

export interface TypographyFontsConfigI {
  family?: TypographyFontsFamilyConfigI;
  scale?: TypographyFontsScaleConfigI;
}

export enum TypographyFonts {
  PRIMARY = "primary",
  SUPPORTING = "supporting",
  ACCENT = "accent",
}

export const TypographyFontsKeys = [
  TypographyFonts.PRIMARY,
  TypographyFonts.SUPPORTING,
  TypographyFonts.ACCENT,
];
export type TypographyFontsKey =
  | TypographyFonts.PRIMARY
  | TypographyFonts.SUPPORTING
  | TypographyFonts.ACCENT;
