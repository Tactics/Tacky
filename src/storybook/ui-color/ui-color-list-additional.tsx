import React from "react";
import { StorybookUiColorAdditionalPreviewList } from "./ui-color.style";
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
          <StorybookUiColorAdditionalPreviewList>
            <StorybookUiColor color={item.color} title={item.name} />
          </StorybookUiColorAdditionalPreviewList>
        );
      })}
    </>
  );
};
