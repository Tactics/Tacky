import React, { FunctionComponent } from "react";
import {
  StyledUiIconGallery,
  StyledUiIconGalleryItem,
  StyledUiIconGalleryItemLabel,
  StyledUiIconGalleryItemSpecimen,
  StyledUiIconGalleryList,
} from "@/storybook/ui-icon/ui-icon-gallery.style";

interface StorybookIconGalleryProps {
  children?: React.ReactNode;
}

export const StorybookUiIconGallery: FunctionComponent<
  StorybookIconGalleryProps
> = ({ children, ...props }) => (
  <StyledUiIconGallery>
    <StyledUiIconGalleryList
      {...props}
      className="docblock-icongallery sb-unstyled"
    >
      {children}
    </StyledUiIconGalleryList>
  </StyledUiIconGallery>
);

interface StorybookIconItemProps {
  name: string;
  children?: React.ReactNode;
}

/**
 * An individual icon with a caption and an example (passed as `children`).
 */
export const StorybookUiIconGalleryItem: FunctionComponent<
  StorybookIconItemProps
> = ({ name, children }) => (
  <StyledUiIconGalleryItem>
    <StyledUiIconGalleryItemSpecimen>
      {children}
    </StyledUiIconGalleryItemSpecimen>
    <StyledUiIconGalleryItemLabel>{name}</StyledUiIconGalleryItemLabel>
  </StyledUiIconGalleryItem>
);
