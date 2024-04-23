"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorybookUiItem = void 0;
const react_1 = __importDefault(require("react"));
const use_theme_fonts_1 = require("./../../hooks/use-theme-fonts");
const use_theme_colors_1 = require("./../../hooks/use-theme-colors");
const ui_item_style_1 = require("./../ui-item/ui-item.style");
const StorybookUiItem = ({ caption, children }) => {
    const typography = (0, use_theme_fonts_1.useThemeFonts)();
    const color = (0, use_theme_colors_1.useThemeColor)();
    return (<ui_item_style_1.StorybookUiItemContainer>
            <ui_item_style_1.StorybookUiItemCaption font={typography.primary.sm} color={color.neutrals.tint_900}>
                {caption}
            </ui_item_style_1.StorybookUiItemCaption>
            <ui_item_style_1.StorybookUiItemContent>
                {children}
            </ui_item_style_1.StorybookUiItemContent>
        </ui_item_style_1.StorybookUiItemContainer>);
};
exports.StorybookUiItem = StorybookUiItem;
