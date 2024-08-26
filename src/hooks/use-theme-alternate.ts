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

  const mergedInit = mergeThemable(defaultThemable?.Init, AlternateTheme?.Init);
  const mergedHover = mergeThemable(
    defaultThemable?.Hover === undefined && defaultThemable?.Init
      ? defaultThemable?.Init // If Hover is undefined and Init is set, use Init for Hover
      : defaultThemable?.Hover,
    AlternateTheme?.Hover,
  );

  const mergedLoading = mergeThemable(
    defaultThemable?.Loading === undefined && defaultThemable?.Init
      ? defaultThemable?.Init // If Loading is undefined and Init is set, use Init for Loading
      : defaultThemable?.Loading,
    AlternateTheme?.Loading,
  );

  return {
    Init: mergedInit,
    Hover: mergedHover,
    Loading: mergedLoading,
  };
};
