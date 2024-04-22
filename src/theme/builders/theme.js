"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeBuilder = void 0;
const alternate_1 = require("../../alternate/builders/alternate");
const typography_1 = require("../../typography/builder/typography");
const colors_1 = require("../../colors/builders/colors");
const radius_1 = require("../../radius/builders/radius");
const ThemeBuilder = ({ base, config, }) => {
    var _a, _b;
    return {
        alternate: (0, alternate_1.AlternateBuilder)({
            base: base.alternate,
            config: (config === null || config === void 0 ? void 0 : config.alternate) ? config.alternate : [],
        }),
        typography: (config === null || config === void 0 ? void 0 : config.typography)
            ? (0, typography_1.TypographyBuilder)({
                base: base.typography,
                config: {
                    resources: ((_a = config.typography) === null || _a === void 0 ? void 0 : _a.resources)
                        ? config.typography.resources
                        : [],
                    fonts: ((_b = config.typography) === null || _b === void 0 ? void 0 : _b.fonts) ? config.typography.fonts : {},
                },
            })
            : base.typography,
        colors: (config === null || config === void 0 ? void 0 : config.colors)
            ? (0, colors_1.ColorBuilder)({
                base: base.colors,
                config: config.colors ? config.colors : {},
            })
            : base.colors,
        utility: base.utility,
        radius: (0, radius_1.RadiusBuilder)({
            base: base.radius,
            config: config.radius,
        }),
    };
};
exports.ThemeBuilder = ThemeBuilder;
