"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypographyFontsBuilder = void 0;
const theme_1 = require("../../base/theme");
const or_default_1 = require("../../tooling/or-default");
const font_1 = require("./font");
const TypographyFontsBuilder = ({ base, config, }) => {
    // Base
    const primaryFont = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigPrimaryFont, [
        "family",
        "primary",
    ]);
    const accentFont = (0, or_default_1.orDefault)(config, (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigAccentFont, ["family", "primary"]), ["family", "accent"]);
    const supportingFont = (0, or_default_1.orDefault)(config, (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigSupportingFont, ["family", "primary"]), ["family", "supporting"]);
    const mdScale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScaleMd, ["scale", "md"]);
    const smScale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScaleSm, ["scale", "sm"]);
    const xsScale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScaleXs, ["scale", "xs"]);
    const lgScale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScaleLg, ["scale", "lg"]);
    const xlScale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScaleXl, ["scale", "xl"]);
    const xl2Scale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScale2Xl, ["scale", "2xl"]);
    const xl3Scale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScale3Xl, ["scale", "3xl"]);
    const xl4Scale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScale4Xl, ["scale", "4xl"]);
    const xl5Scale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScale5Xl, ["scale", "5xl"]);
    const xl6Scale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScale6Xl, ["scale", "6xl"]);
    const xl7Scale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScale7Xl, ["scale", "7xl"]);
    const xl8Scale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScale8Xl, ["scale", "8xl"]);
    const xl9Scale = (0, or_default_1.orDefault)(config, theme_1.baseThemeConfigScale9Xl, ["scale", "9xl"]);
    return {
        primary: {
            xs: (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xsScale,
            }),
            sm: (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: smScale,
            }),
            md: (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: mdScale,
            }),
            lg: (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: lgScale,
            }),
            xl: (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xlScale,
            }),
            "2xl": (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xl2Scale,
            }),
            "3xl": (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xl3Scale,
            }),
            "4xl": (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xl4Scale,
            }),
            "5xl": (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xl5Scale,
            }),
            "6xl": (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xl6Scale,
            }),
            "7xl": (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xl7Scale,
            }),
            "8xl": (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xl8Scale,
            }),
            "9xl": (0, font_1.FontBuilder)({
                family: primaryFont,
                scale: xl9Scale,
            }),
        },
        accent: {
            xs: (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xsScale,
            }),
            sm: (0, font_1.FontBuilder)({
                family: accentFont,
                scale: smScale,
            }),
            md: (0, font_1.FontBuilder)({
                family: accentFont,
                scale: mdScale,
            }),
            lg: (0, font_1.FontBuilder)({
                family: accentFont,
                scale: lgScale,
            }),
            xl: (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xlScale,
            }),
            "2xl": (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xl2Scale,
            }),
            "3xl": (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xl3Scale,
            }),
            "4xl": (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xl4Scale,
            }),
            "5xl": (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xl5Scale,
            }),
            "6xl": (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xl6Scale,
            }),
            "7xl": (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xl7Scale,
            }),
            "8xl": (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xl8Scale,
            }),
            "9xl": (0, font_1.FontBuilder)({
                family: accentFont,
                scale: xl9Scale,
            }),
        },
        supporting: {
            xs: (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xsScale,
            }),
            sm: (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: smScale,
            }),
            md: (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: mdScale,
            }),
            lg: (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: lgScale,
            }),
            xl: (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xlScale,
            }),
            "2xl": (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xl2Scale,
            }),
            "3xl": (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xl3Scale,
            }),
            "4xl": (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xl4Scale,
            }),
            "5xl": (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xl5Scale,
            }),
            "6xl": (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xl6Scale,
            }),
            "7xl": (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xl7Scale,
            }),
            "8xl": (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xl8Scale,
            }),
            "9xl": (0, font_1.FontBuilder)({
                family: supportingFont,
                scale: xl9Scale,
            }),
        },
    };
};
exports.TypographyFontsBuilder = TypographyFontsBuilder;
