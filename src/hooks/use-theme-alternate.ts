import {
  AlternateThemable,
  AlternateThemableConfig,
  AlternateThemableDefaultConfig,
  AlternateThemableStates,
  AlternateThemableStatesConfig,
} from "@/alternate/contracts/alternate";
import { useTheme } from "@/hooks/use-theme";
import { LookupAlternateTheme } from "@/alternate/functions/alternate";

export const useAlternateTheme = ({
  component,
  font,
  default: defaultThemable,
}: {
  component: string;
  font: string;
  default?: AlternateThemableStatesConfig;
}): AlternateThemableStates => {
  const Theme = useTheme();
  const AlternateTheme = LookupAlternateTheme({
    name: component,
    alternates: Theme.alternate,
  });

  // CSS Default fallback values
  const defaultCSSValues: AlternateThemableDefaultConfig = {
    Color: "inherit",
    BackgroundColor: "transparent",
    Border: {
      Color: "transparent",
      Width: 0,
      Style: "solid",
    },
    FontWeightAdjustment: 0,
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
    Border: toCssBorder(
      configState?.Border?.Width ||
        defaultState?.Border?.Width ||
        defaultCSSValues.Border.Width,
      configState?.Border?.Color ||
        defaultState?.Border?.Color ||
        defaultCSSValues.Border.Color,
      configState?.Border?.Style ||
        defaultState?.Border?.Style ||
        defaultCSSValues.Border.Style,
    ),
    Font: toCssFont(
      font,
      configState?.FontWeightAdjustment ||
        defaultState?.FontWeightAdjustment ||
        defaultCSSValues.FontWeightAdjustment,
    ),
  });

  const mergedInit = mergeThemable(defaultThemable?.Init, AlternateTheme?.Init);
  const mergedHover = mergeThemable(
    defaultThemable?.Hover === undefined && defaultThemable?.Init
      ? defaultThemable?.Init // If Hover is undefined and Init is set, use Init for Hover
      : defaultThemable?.Hover,
    AlternateTheme?.Hover,
  );

  const mergedActive = mergeThemable(
    defaultThemable?.Active === undefined && defaultThemable?.Init
      ? defaultThemable?.Init // If Active is undefined and Init is set, use Init for Active
      : defaultThemable?.Active,
    AlternateTheme?.Active,
  );

  return {
    Init: mergedInit,
    Hover: mergedHover,
    Active: mergedActive,
  };
};

export const toCssBorder = (width: number, color: string, style?: string) => {
  const borderStyle = style ? style : "solid";
  return width + "px" + " " + borderStyle + " " + color;
};

export const toCssFont = (font: string, adjustment: number) => {
  // Define valid font weights
  const validWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  // Extract the current weight from the font string
  const weightMatch = font.match(/(\d+)/);
  if (!weightMatch) return font; // If no weight found, return original font

  const currentWeight = parseInt(weightMatch[0], 10);

  // Find the index of the current weight in validWeights
  const currentIndex = validWeights.indexOf(currentWeight);

  // If weight not found in validWeights, return original font
  if (currentIndex === -1) {
    return font;
  }

  // Calculate the new index based on adjustment
  let newIndex = currentIndex + adjustment / 100; // Adjust by 100 (e.g., +200, -200)

  // Ensure the new index is within the bounds of validWeights
  newIndex = Math.max(0, Math.min(validWeights.length - 1, newIndex));

  // Get the new weight from validWeights
  const newWeight = validWeights[newIndex];

  // Replace the old weight with the new weight in the font string
  return font.replace(/(\d+)/, String(newWeight));
};
