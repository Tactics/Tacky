"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorybookUiThemeColorList = void 0;
const react_1 = __importDefault(require("react"));
const ui_color_style_1 = require("./ui-color.style");
const ui_color_1 = require("./ui-color");
const StorybookUiThemeColorList = ({ colors }) => {
    return (<ui_color_style_1.StorybookUiColorPreviewList>
            <ui_color_1.StorybookUiColor color={colors.tint_50} title="50"/>
            <ui_color_1.StorybookUiColor color={colors.tint_100} title="100"/>
            <ui_color_1.StorybookUiColor color={colors.tint_200} title="200"/>
            <ui_color_1.StorybookUiColor color={colors.tint_300} title="300"/>
            <ui_color_1.StorybookUiColor color={colors.tint_400} title="400"/>
            <ui_color_1.StorybookUiColor color={colors.tint_500} title="500"/>
            <ui_color_1.StorybookUiColor color={colors.tint_600} title="600"/>
            <ui_color_1.StorybookUiColor color={colors.tint_700} title="700"/>
            <ui_color_1.StorybookUiColor color={colors.tint_800} title="800"/>
            <ui_color_1.StorybookUiColor color={colors.tint_900} title="900"/>
            <ui_color_1.StorybookUiColor color={colors.tint_950} title="950"/>
        </ui_color_style_1.StorybookUiColorPreviewList>);
};
exports.StorybookUiThemeColorList = StorybookUiThemeColorList;
