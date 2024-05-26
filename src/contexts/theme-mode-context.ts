import { createContext } from "react";
import { ThemeMode } from "@/theme/enums/theme-mode";

export const ThemeModeCtx = createContext<ThemeMode>(ThemeMode.STANDARD);
