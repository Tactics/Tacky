"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = void 0;
const react_1 = require("react");
const theme_context_1 = require("../contexts/theme-context");
const theme_1 = require("../base/theme");
const useTheme = () => {
    try {
        return (0, react_1.useContext)(theme_context_1.ThemeCtx);
    }
    catch (error) {
        // Return the default value if an error occurs
        return theme_1.BaseTheme;
    }
};
exports.useTheme = useTheme;
