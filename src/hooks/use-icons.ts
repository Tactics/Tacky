import { useContext } from "react";
import { ThemeCtx } from "@/contexts/theme-context";
import { BaseTheme } from "@/base/theme";

const useIcons = (): string => {
  try {
    const context = useContext(ThemeCtx);
    return context.icons;
  } catch (error) {
    // Return the default value if an error occurs
    return BaseTheme.icons;
  }
};

export { useIcons };
