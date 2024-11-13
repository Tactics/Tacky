import { useContext } from "react";
import { ThemeCtx } from "@/contexts/theme-context";

const useThemeSetting = (setting: string): string | null => {
  try {
    const context = useContext(ThemeCtx);
    return context.settings[setting] ?? null;
  } catch (error) {
    // Return the default value if an error occurs
    return null;
  }
};

export { useThemeSetting };
