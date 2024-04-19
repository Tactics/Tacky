"use strict";
exports.__esModule = true;
exports.BaseTheme = exports.baseThemeConfigRadius3Xl = exports.baseThemeConfigRadius2Xl = exports.baseThemeConfigRadiusXl = exports.baseThemeConfigRadiusLg = exports.baseThemeConfigRadiusMd = exports.baseThemeConfigRadiusSm = exports.baseThemeConfigRadiusXs = exports.baseThemeConfigScale9Xl = exports.baseThemeConfigScale8Xl = exports.baseThemeConfigScale7Xl = exports.baseThemeConfigScale6Xl = exports.baseThemeConfigScale5Xl = exports.baseThemeConfigScale4Xl = exports.baseThemeConfigScale3Xl = exports.baseThemeConfigScale2Xl = exports.baseThemeConfigScaleXl = exports.baseThemeConfigScaleLg = exports.baseThemeConfigScaleMd = exports.baseThemeConfigScaleSm = exports.baseThemeConfigScaleXs = exports.baseThemeConfigSupportingFont = exports.baseThemeConfigAccentFont = exports.baseThemeConfigPrimaryFont = void 0;
var font_1 = require("../typography/builder/font");
exports.baseThemeConfigPrimaryFont = 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';
exports.baseThemeConfigAccentFont = 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif';
exports.baseThemeConfigSupportingFont = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
exports.baseThemeConfigScaleXs = "0.75rem/1rem";
exports.baseThemeConfigScaleSm = "0.875rem/1.25rem";
exports.baseThemeConfigScaleMd = "1rem/1.5rem";
exports.baseThemeConfigScaleLg = "1.125rem/1.75rem";
exports.baseThemeConfigScaleXl = "1.25rem/1.75rem";
exports.baseThemeConfigScale2Xl = "1.5rem/2rem";
exports.baseThemeConfigScale3Xl = "1.875rem/2.25rem";
exports.baseThemeConfigScale4Xl = "2.25rem/2.5rem";
exports.baseThemeConfigScale5Xl = "3rem/1";
exports.baseThemeConfigScale6Xl = "3.75rem/1";
exports.baseThemeConfigScale7Xl = "4.5rem/1";
exports.baseThemeConfigScale8Xl = "6rem/1";
exports.baseThemeConfigScale9Xl = "8rem/1";
exports.baseThemeConfigRadiusXs = "0.125rem";
exports.baseThemeConfigRadiusSm = "0.25rem";
exports.baseThemeConfigRadiusMd = "0.375rem";
exports.baseThemeConfigRadiusLg = "0.5rem";
exports.baseThemeConfigRadiusXl = "0.75rem";
exports.baseThemeConfigRadius2Xl = "1rem";
exports.baseThemeConfigRadius3Xl = "1.5rem";
var BaseTheme = {
    alternate: [],
    typography: {
        resources: [],
        fonts: {
            primary: {
                xs: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleXs,
                    family: exports.baseThemeConfigPrimaryFont
                }),
                sm: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleSm,
                    family: exports.baseThemeConfigPrimaryFont
                }),
                md: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleMd,
                    family: exports.baseThemeConfigPrimaryFont
                }),
                lg: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleLg,
                    family: exports.baseThemeConfigPrimaryFont
                }),
                xl: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleXl,
                    family: exports.baseThemeConfigPrimaryFont
                }),
                "2xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale2Xl,
                    family: exports.baseThemeConfigPrimaryFont
                }),
                "3xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale3Xl,
                    family: exports.baseThemeConfigPrimaryFont
                }),
                "4xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale4Xl,
                    family: exports.baseThemeConfigPrimaryFont
                }),
                "5xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale5Xl,
                    family: exports.baseThemeConfigPrimaryFont
                }),
                "6xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale6Xl,
                    family: exports.baseThemeConfigPrimaryFont
                }),
                "7xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale7Xl,
                    family: exports.baseThemeConfigPrimaryFont
                }),
                "8xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale8Xl,
                    family: exports.baseThemeConfigPrimaryFont
                }),
                "9xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale9Xl,
                    family: exports.baseThemeConfigPrimaryFont
                })
            },
            accent: {
                xs: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleXs,
                    family: exports.baseThemeConfigAccentFont
                }),
                sm: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleSm,
                    family: exports.baseThemeConfigAccentFont
                }),
                md: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleMd,
                    family: exports.baseThemeConfigAccentFont
                }),
                lg: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleLg,
                    family: exports.baseThemeConfigAccentFont
                }),
                xl: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleXl,
                    family: exports.baseThemeConfigAccentFont
                }),
                "2xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale2Xl,
                    family: exports.baseThemeConfigAccentFont
                }),
                "3xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale3Xl,
                    family: exports.baseThemeConfigAccentFont
                }),
                "4xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale4Xl,
                    family: exports.baseThemeConfigAccentFont
                }),
                "5xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale5Xl,
                    family: exports.baseThemeConfigAccentFont
                }),
                "6xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale6Xl,
                    family: exports.baseThemeConfigAccentFont
                }),
                "7xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale7Xl,
                    family: exports.baseThemeConfigAccentFont
                }),
                "8xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale8Xl,
                    family: exports.baseThemeConfigAccentFont
                }),
                "9xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale9Xl,
                    family: exports.baseThemeConfigAccentFont
                })
            },
            supporting: {
                xs: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleXs,
                    family: exports.baseThemeConfigSupportingFont
                }),
                sm: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleSm,
                    family: exports.baseThemeConfigSupportingFont
                }),
                md: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleMd,
                    family: exports.baseThemeConfigSupportingFont
                }),
                lg: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleLg,
                    family: exports.baseThemeConfigSupportingFont
                }),
                xl: (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScaleXl,
                    family: exports.baseThemeConfigSupportingFont
                }),
                "2xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale2Xl,
                    family: exports.baseThemeConfigSupportingFont
                }),
                "3xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale3Xl,
                    family: exports.baseThemeConfigSupportingFont
                }),
                "4xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale4Xl,
                    family: exports.baseThemeConfigSupportingFont
                }),
                "5xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale5Xl,
                    family: exports.baseThemeConfigSupportingFont
                }),
                "6xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale6Xl,
                    family: exports.baseThemeConfigSupportingFont
                }),
                "7xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale7Xl,
                    family: exports.baseThemeConfigSupportingFont
                }),
                "8xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale8Xl,
                    family: exports.baseThemeConfigSupportingFont
                }),
                "9xl": (0, font_1.FontBuilder)({
                    scale: exports.baseThemeConfigScale9Xl,
                    family: exports.baseThemeConfigSupportingFont
                })
            }
        }
    },
    colors: {
        danger: {
            tint_50: "#FBD9D9",
            tint_100: "#FBD9D9",
            tint_200: "#FBD9D9",
            tint_300: "#FBD9D9",
            tint_400: "#F99E9E",
            tint_500: "#F16868",
            tint_600: "#D25E5E",
            tint_700: "#D25E5E",
            tint_800: "#D25E5E",
            tint_900: "#D25E5E",
            tint_950: "#D25E5E"
        },
        warning: {
            tint_50: "#FEEFDB",
            tint_100: "#FEEFDB",
            tint_200: "#FEEFDB",
            tint_300: "#FEEFDB",
            tint_400: "#FFD398",
            tint_500: "#FCBF6F",
            tint_600: "#FAAC44",
            tint_700: "#FAAC44",
            tint_800: "#FAAC44",
            tint_900: "#FAAC44",
            tint_950: "#FAAC44"
        },
        success: {
            tint_50: "#E0F4DA",
            tint_100: "#E0F4DA",
            tint_200: "#E0F4DA",
            tint_300: "#E0F4DA",
            tint_400: "#ADE99C",
            tint_500: "#83D56C",
            tint_600: "#67C14E",
            tint_700: "#67C14E",
            tint_800: "#67C14E",
            tint_900: "#67C14E",
            tint_950: "#67C14E"
        },
        info: {
            tint_50: "#f0f9ff",
            tint_100: "#e0f2fe",
            tint_200: "#bae6fd",
            tint_300: "#7dd3fc",
            tint_400: "#38bdf8",
            tint_500: "#0ea5e9",
            tint_600: "#0284c7",
            tint_700: "#0369a1",
            tint_800: "#075985",
            tint_900: "#0c4a6e",
            tint_950: "#082f49"
        },
        neutrals: {
            tint_50: "#FFFFFF",
            tint_100: "#FFFFFF",
            tint_200: "#F5F7FA",
            tint_300: "#E5E8EB",
            tint_400: "#E5E8EB",
            tint_500: "#E5E8EB",
            tint_600: "#E5E8EB",
            tint_700: "#E5E8EB",
            tint_800: "#9AA5B1",
            tint_900: "#515F6C",
            tint_950: "#515F6C"
        },
        primary: {
            tint_50: "#E0FCFF",
            tint_100: "#E0FCFF",
            tint_200: "#BEF8FD",
            tint_300: "#87EAF2",
            tint_400: "#54D1DB",
            tint_500: "#38BEC9",
            tint_600: "#2CB1BC",
            tint_700: "#14919B",
            tint_800: "#0E7C86",
            tint_900: "#0A6C74",
            tint_950: "#044E54"
        },
        accent: {
            tint_50: "#fdf3f5",
            tint_100: "#ffe3ec",
            tint_200: "#ffb8d2",
            tint_300: "#ff8cba",
            tint_400: "#f364a2",
            tint_500: "#e8368f",
            tint_600: "#da127d",
            tint_700: "#bc0a6f",
            tint_800: "#a30664",
            tint_900: "#870557",
            tint_950: "#620042"
        },
        supporting: {
            tint_50: "#FFFFFF",
            tint_100: "#333333",
            tint_200: "#333333",
            tint_300: "#333333",
            tint_400: "#333333",
            tint_500: "#333333",
            tint_600: "#FFFFFF",
            tint_700: "#FFFFFF",
            tint_800: "#FFFFFF",
            tint_900: "#FFFFFF",
            tint_950: "#FFFFFF"
        },
        additional: []
    },
    utility: {
        spacing: {
            0: "0px",
            px: "1px",
            0.5: "0.125rem",
            1: "0.25rem",
            1.5: "0.375rem",
            2: "0.5rem",
            2.5: "0.625rem",
            3: "0.75rem",
            3.5: "0.875rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
            11: "2.75rem",
            12: "3rem",
            14: "3.5rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            28: "7rem",
            32: "8rem",
            36: "9rem",
            40: "10rem",
            44: "11rem",
            48: "12rem",
            52: "13rem",
            56: "14rem",
            60: "15rem",
            64: "16rem",
            72: "18rem",
            80: "20rem",
            96: "24rem"
        },
        opacity: {
            0: 0,
            5: 0.05,
            10: 0.1,
            15: 0.15,
            20: 0.2,
            25: 0.25,
            30: 0.3,
            35: 0.35,
            40: 0.4,
            45: 0.45,
            50: 0.5,
            55: 0.55,
            60: 0.6,
            65: 0.65,
            70: 0.7,
            75: 0.75,
            80: 0.8,
            85: 0.85,
            90: 0.9,
            95: 0.95,
            100: 1
        }
    },
    radius: {
        none: "0px",
        xs: exports.baseThemeConfigRadiusXs,
        sm: exports.baseThemeConfigRadiusSm,
        md: exports.baseThemeConfigRadiusMd,
        lg: exports.baseThemeConfigRadiusLg,
        xl: exports.baseThemeConfigRadiusXl,
        "2xl": exports.baseThemeConfigRadius2Xl,
        "3xl": exports.baseThemeConfigRadius3Xl,
        full: "9999px"
    }
};
exports.BaseTheme = BaseTheme;
/*
• Width
• Height
• Box shadows
• Border width •
 */
