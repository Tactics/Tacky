import React from "react";
import { StorybookUiColorPreviewList } from "./ui-color.style";
import { StorybookUiColor } from "./ui-color";
import { AdditionalColorItem } from "../../colors/contracts/color-additional";

export const StorybookUiAdditionalColorList = ({
  colors,
}: {
  colors: AdditionalColorItem[];
}) => {
  return (
    <>
      {colors.map(function (item: AdditionalColorItem) {
        return (
          <StorybookUiColorPreviewList>
            <StorybookUiColor color={item.color} title={item.name} />
          </StorybookUiColorPreviewList>
        );
      })}
    </>
  );
};
