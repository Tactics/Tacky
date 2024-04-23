"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorybookUiAdditionalColorList = void 0;
const react_1 = __importDefault(require("react"));
const ui_color_style_1 = require("./ui-color.style");
const ui_color_1 = require("./ui-color");
const StorybookUiAdditionalColorList = ({ colors }) => {
    return (<ui_color_style_1.StorybookUiColorPreviewList>
            {colors.map(function (item) {
            return (<ui_color_1.StorybookUiColor color={item.color} title={item.name}/>);
        })}
        </ui_color_style_1.StorybookUiColorPreviewList>);
};
exports.StorybookUiAdditionalColorList = StorybookUiAdditionalColorList;
