import { useTheme } from "@/hooks/use-theme";
import { ShadowI } from "@/shadow/contracts/shadow";

export const useThemeShadow = (): ShadowI => {
  const theme = useTheme();
  return theme.shadow;
};
