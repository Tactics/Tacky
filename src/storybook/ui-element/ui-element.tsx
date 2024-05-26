import React from "react";
import {
  StorybookUiContainer,
  StorybookUiContent,
} from "@/storybook/ui-element/ui-element.style";
import { useThemeFonts } from "@/hooks/use-theme-fonts";
import { useThemeColor } from "@/hooks/use-theme-colors";

export const StorybookUiElement = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const typography = useThemeFonts();
  const color = useThemeColor();

  return (
    <StorybookUiContainer>
      <StorybookUiContent>{children}</StorybookUiContent>
    </StorybookUiContainer>
  );
};
