import {
  AlternateItem,
  AlternateThemable,
  AlternateThemableConfig,
  AlternateThemableStates,
  AlternateThemableStatesConfig,
} from "@/alternate/contracts/alternate";
import { useTheme } from "@/hooks/use-theme";
import { LookupAlternateTheme } from "@/alternate/functions/alternate";

export const useAlternateTheme = ({
  component,
  default: defaultThemable,
}: {
  component: string;
  default?: AlternateThemableStatesConfig;
}): AlternateThemableStates => {
  const Theme = useTheme();
  const AlternateTheme = LookupAlternateTheme({
    name: component,
    alternates: Theme.alternate,
  });

  // CSS Default fallback values
  const defaultCSSValues: AlternateThemable = {
    Color: "inherit",
    BackgroundColor: "transparent",
    BorderColor: "transparent",
  };

  const mergeThemable = (
    defaultState?: AlternateThemableConfig,
    configState?: AlternateThemableConfig,
  ): AlternateThemable => ({
    Color: configState?.Color || defaultState?.Color || defaultCSSValues.Color,
    BackgroundColor:
      configState?.BackgroundColor ||
      defaultState?.BackgroundColor ||
      defaultCSSValues.BackgroundColor,
    BorderColor:
      configState?.BorderColor ||
      defaultState?.BorderColor ||
      defaultCSSValues.BorderColor,
  });

  return {
    Init: mergeThemable(defaultThemable?.Init, AlternateTheme?.Init),
    Hover: mergeThemable(defaultThemable?.Hover, AlternateTheme?.Hover),
  };
};
