import { useContext } from "react";
import { ThemeI } from "@/theme/contracts/theme";
import { ThemeCtx } from "@/contexts/theme-context";
import { BaseTheme } from "@/base/theme";

const useTheme = (): ThemeI => {
  try {
    return useContext(ThemeCtx);
  } catch (error) {
    // Return the default value if an error occurs
    return BaseTheme;
  }
};

export { useTheme };
