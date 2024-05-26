import { useTheme } from "@/hooks/use-theme";
import { RadiusI } from "@/radius/contracts/radius";

export const useThemeRadius = (): RadiusI => {
  const theme = useTheme();
  return theme.radius;
};
