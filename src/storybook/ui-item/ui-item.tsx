import React from "react";
import { useThemeFonts } from "@/hooks/use-theme-fonts";
import { useThemeColor } from "@/hooks/use-theme-colors";
import {
  StorybookUiItemContainer,
  StorybookUiItemContent,
} from "@/storybook/ui-item/ui-item.style";

export const StorybookUiItem = ({
  caption,
  children,
}: {
  caption: string;
  children: React.ReactNode;
}) => {
  const typography = useThemeFonts();
  const color = useThemeColor();

  return (
    <StorybookUiItemContainer>
      <StorybookUiItemContent>{children}</StorybookUiItemContent>
    </StorybookUiItemContainer>
  );
};
