import { TypographyFontI } from "./font";
import { TypographyFontsScaleConfigI } from "./scale";
import { TypographyFontsFamilyConfigI } from "./family";

interface TypographyFontsI {
  primary: TypographyFontI;
  accent: TypographyFontI;
  supporting: TypographyFontI;
}

interface TypographyFontsConfigI {
  family?: TypographyFontsFamilyConfigI;
  scale?: TypographyFontsScaleConfigI;
}

export type { TypographyFontsI, TypographyFontsConfigI };
