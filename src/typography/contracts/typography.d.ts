import { TypographyFontsConfigI, TypographyFontsI } from "./fonts";
interface TypographyI {
    resources: string[];
    fonts: TypographyFontsI;
}
interface TypographyConfigI {
    resources?: string[];
    fonts?: TypographyFontsConfigI;
}
export type { TypographyI, TypographyConfigI };
