import { ColorsI } from "../colors/contracts/colors";
import { useTheme } from "./use-theme";

const useThemeColor = (): ColorsI => {
  const theme = useTheme();
  return theme.colors;
};

export { useThemeColor };
