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

export const TypographyFontsKeys = ["primary", "supporting", "accent"];
export type TypographyFontsKey = "primary" | "supporting" | "accent";
