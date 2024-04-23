import React from "react";

import { StorybookUiFontPreview } from "./ui-font.style";

export const StorybookUiFont = ({
  text,
  font,
}: {
  text: string;
  font: string;
}) => {
  return <StorybookUiFontPreview font={font}>{text}</StorybookUiFontPreview>;
};
