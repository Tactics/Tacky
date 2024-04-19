"use strict";
exports.__esModule = true;
exports.ThemeBuilder = void 0;
var alternate_1 = require("../../alternate/builders/alternate");
var typography_1 = require("../../typography/builder/typography");
var colors_1 = require("../../colors/builders/colors");
var radius_1 = require("../../radius/builders/radius");
var ThemeBuilder = function (_a) {
    var _b, _c;
    var base = _a.base, config = _a.config;
    return {
        alternate: (0, alternate_1.AlternateBuilder)({
            base: base.alternate,
            config: (config === null || config === void 0 ? void 0 : config.alternate) ? config.alternate : []
        }),
        typography: (config === null || config === void 0 ? void 0 : config.typography)
            ? (0, typography_1.TypographyBuilder)({
                base: base.typography,
                config: {
                    resources: ((_b = config.typography) === null || _b === void 0 ? void 0 : _b.resources)
                        ? config.typography.resources
                        : [],
                    fonts: ((_c = config.typography) === null || _c === void 0 ? void 0 : _c.fonts) ? config.typography.fonts : {}
                }
            })
            : base.typography,
        colors: (config === null || config === void 0 ? void 0 : config.colors)
            ? (0, colors_1.ColorBuilder)({
                base: base.colors,
                config: config.colors ? config.colors : {}
            })
            : base.colors,
        utility: base.utility,
        radius: (0, radius_1.RadiusBuilder)({
            base: base.radius,
            config: config.radius
        })
    };
};
exports.ThemeBuilder = ThemeBuilder;
