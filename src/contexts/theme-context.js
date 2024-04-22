"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeCtx = void 0;
const react_1 = require("react");
const theme_1 = require("../base/theme");
exports.ThemeCtx = (0, react_1.createContext)(theme_1.BaseTheme);
