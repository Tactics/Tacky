import { ThemeConfigI, ThemeI } from "./theme";

export interface ThemeVariantsI {
  standard: ThemeI;
  inverted: ThemeI;
  contrast: ThemeI;
}

export interface ThemeVariantsConfigI {
  standard?: ThemeConfigI;
  inverted?: ThemeConfigI;
  contrast?: ThemeConfigI;
}
