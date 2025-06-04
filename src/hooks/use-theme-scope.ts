import { ContextThemeScope, RootScope } from "@/contexts/theme-scope-context";
import { useContext } from "react";

export const useThemeScope = (): string => {
  const context = useContext(ContextThemeScope);
  if (context === undefined || context.scope === "") {
    return RootScope;
  }
  return context.scope;
};
