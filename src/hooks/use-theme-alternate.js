"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeAlternate = void 0;
const use_theme_1 = require("./use-theme");
const useThemeAlternate = () => {
    const theme = (0, use_theme_1.useTheme)();
    return theme.alternate;
};
exports.useThemeAlternate = useThemeAlternate;
