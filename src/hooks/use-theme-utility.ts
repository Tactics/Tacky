import { useTheme } from "@/hooks/use-theme";
import { UtilityI } from "@/utility/contracts/utility";

export const useThemeUtility = (): UtilityI => {
  const theme = useTheme();
  return theme.utility;
};
