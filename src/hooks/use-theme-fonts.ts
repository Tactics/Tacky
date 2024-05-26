import { TypographyFontsI } from "@/typography/contracts/fonts";
import { useTheme } from "@/hooks/use-theme";

export const useThemeFonts = (): TypographyFontsI => {
  const theme = useTheme();
  return theme.typography.fonts;
};
