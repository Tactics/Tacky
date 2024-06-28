import {
  TypographyFontsConfigI,
  TypographyFontsI,
} from "@/typography/contracts/fonts";

export interface TypographyI {
  external_resources: string[];
  fonts: TypographyFontsI;
}

export interface TypographyConfigI {
  external_resources?: string[];
  fonts?: TypographyFontsConfigI;
}
