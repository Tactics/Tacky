import { ColorsI } from "@/colors/contracts/colors";
import { useTheme } from "@/hooks/use-theme";
import { useThemeScope } from "@/hooks/use-theme-scope";
import { RootScope } from "@/contexts/theme-scope-context";

const useThemeColor = (): ColorsI => {
  const theme = useTheme();
  const scope = useThemeScope();

  if (scope !== RootScope) {
    if (theme.colors.scoped && theme.colors.scoped[scope]) {
      return theme.colors.scoped[scope];
    } else {
      // Return a new object without the 'scoped' key since we don't want to expose it to components
      const { scoped, ...colorsWithoutScoped } = theme.colors;
      return colorsWithoutScoped;
    }
  }

  // Return a new object without the 'scoped' key since we don't want to expose it to components
  const { scoped, ...colorsWithoutScoped } = theme.colors;
  return colorsWithoutScoped;
};

export { useThemeColor };
