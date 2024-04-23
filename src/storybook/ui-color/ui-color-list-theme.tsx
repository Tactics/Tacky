import React from "react";
import { StorybookUiColorPreviewList } from "./ui-color.style";
import { ColorVariantI } from "../../colors/contracts/color-variant";
import { StorybookUiColor } from "./ui-color";

export const StorybookUiThemeColorList = ({
  colors,
}: {
  colors: ColorVariantI;
}) => {
  return (
    <StorybookUiColorPreviewList>
      <StorybookUiColor color={colors.tint_50} title="50" />
      <StorybookUiColor color={colors.tint_100} title="100" />
      <StorybookUiColor color={colors.tint_200} title="200" />
      <StorybookUiColor color={colors.tint_300} title="300" />
      <StorybookUiColor color={colors.tint_400} title="400" />
      <StorybookUiColor color={colors.tint_500} title="500" />
      <StorybookUiColor color={colors.tint_600} title="600" />
      <StorybookUiColor color={colors.tint_700} title="700" />
      <StorybookUiColor color={colors.tint_800} title="800" />
      <StorybookUiColor color={colors.tint_900} title="900" />
      <StorybookUiColor color={colors.tint_950} title="950" />
    </StorybookUiColorPreviewList>
  );
};
