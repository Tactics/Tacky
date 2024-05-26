import {
  TypographyFontsConfigI,
  TypographyFontsI,
} from "@/typography/contracts/fonts";

export interface TypographyI {
  resources: string[];
  fonts: TypographyFontsI;
}

export interface TypographyConfigI {
  resources?: string[];
  fonts?: TypographyFontsConfigI;
}
