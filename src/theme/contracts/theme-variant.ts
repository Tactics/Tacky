import { ThemeI } from "./theme";

interface ThemeVariantsI {
  label: string;
  standard: ThemeI;
  inverted: ThemeI;
  contrast: ThemeI;
}

export type { ThemeVariantsI };
