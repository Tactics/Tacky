import * as react_jsx_runtime from 'react/jsx-runtime';
import { A as AdditionalColorItem, C as ColorVariantI } from './color-variant-uYRwhhZI.mjs';
import react__default, { FunctionComponent } from 'react';

declare const StorybookUiColor: ({ title, color, }: {
    title: string;
    color: string;
}) => react_jsx_runtime.JSX.Element;

declare const StorybookUiAdditionalColorList: ({ colors, }: {
    colors: AdditionalColorItem[];
}) => react_jsx_runtime.JSX.Element;

declare const StorybookUiThemeColorList: ({ colors, }: {
    colors: ColorVariantI;
}) => react_jsx_runtime.JSX.Element;

declare const StorybookUiElement: ({ title, children, }: {
    title: string;
    children: react__default.ReactNode;
}) => react_jsx_runtime.JSX.Element;

declare const StorybookUiItem: ({ caption, children, }: {
    caption: string;
    children: react__default.ReactNode;
}) => react_jsx_runtime.JSX.Element;

declare const StorybookUiFont: ({ text, font, }: {
    text: string;
    font: string;
}) => react_jsx_runtime.JSX.Element;

interface StorybookIconGalleryProps {
    children?: react__default.ReactNode;
}
declare const StorybookUiIconGallery: FunctionComponent<StorybookIconGalleryProps>;
interface StorybookIconItemProps {
    name: string;
    children?: react__default.ReactNode;
}
/**
 * An individual icon with a caption and an example (passed as `children`).
 */
declare const StorybookUiIconGalleryItem: FunctionComponent<StorybookIconItemProps>;

export { StorybookUiAdditionalColorList, StorybookUiColor, StorybookUiElement, StorybookUiFont, StorybookUiIconGallery, StorybookUiIconGalleryItem, StorybookUiItem, StorybookUiThemeColorList };
