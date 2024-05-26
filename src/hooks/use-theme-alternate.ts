import { AlternateItem } from "@/alternate/contracts/alternate";
import { useTheme } from "@/hooks/use-theme";

export const useThemeAlternate = (): Array<AlternateItem> => {
  const theme = useTheme();
  return theme.alternate;
};
