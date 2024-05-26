import React from "react";

import { StorybookUiFontPreview } from "@/storybook/ui-font/ui-font.style";

export const StorybookUiFont = ({
  text,
  font,
}: {
  text: string;
  font: string;
}) => {
  return <StorybookUiFontPreview font={font}>{text}</StorybookUiFontPreview>;
};
