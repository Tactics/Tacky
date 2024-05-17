import React__default, { FunctionComponent } from 'react';
import { A as AdditionalColorItem } from './color-additional-_M7QfRi_.js';
import { C as ColorVariantI } from './color-variant-CC91dWNE.js';

declare const StorybookUiColor: ({ title, color, }: {
    title: string;
    color: string;
}) => React__default.JSX.Element;

declare const StorybookUiAdditionalColorList: ({ colors, }: {
    colors: AdditionalColorItem[];
}) => React__default.JSX.Element;

declare const StorybookUiThemeColorList: ({ colors, }: {
    colors: ColorVariantI;
}) => React__default.JSX.Element;

declare const StorybookUiElement: ({ title, children, }: {
    title: string;
    children: React__default.ReactNode;
}) => React__default.JSX.Element;

declare const StorybookUiItem: ({ caption, children, }: {
    caption: string;
    children: React__default.ReactNode;
}) => React__default.JSX.Element;

declare const StorybookUiFont: ({ text, font, }: {
    text: string;
    font: string;
}) => React__default.JSX.Element;

interface StorybookIconGalleryProps {
    children?: React__default.ReactNode;
}
declare const StorybookUiIconGallery: FunctionComponent<StorybookIconGalleryProps>;
interface StorybookIconItemProps {
    name: string;
    children?: React__default.ReactNode;
}
/**
 * An individual icon with a caption and an example (passed as `children`).
 */
declare const StorybookUiIconGalleryItem: FunctionComponent<StorybookIconItemProps>;

export { StorybookUiAdditionalColorList, StorybookUiColor, StorybookUiElement, StorybookUiFont, StorybookUiIconGallery, StorybookUiIconGalleryItem, StorybookUiItem, StorybookUiThemeColorList };
