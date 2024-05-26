import { ColorsI } from "@/colors/contracts/colors";
import { useTheme } from "@/hooks/use-theme";

const useThemeColor = (): ColorsI => {
  const theme = useTheme();
  return theme.colors;
};

export { useThemeColor };
