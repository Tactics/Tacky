"use strict";
exports.__esModule = true;
exports.RadiusBuilder = void 0;
var RadiusBuilder = function (_a) {
    var base = _a.base, config = _a.config;
    return {
        none: base.none,
        xs: config ? config.xs : base.xs,
        sm: config ? config.sm : base.sm,
        md: config ? config.md : base.md,
        lg: config ? config.lg : base.lg,
        xl: config ? config.xl : base.xl,
        "2xl": config ? config["2xl"] : base["2xl"],
        "3xl": config ? config["3xl"] : base["3xl"],
        full: "9999px"
    };
};
exports.RadiusBuilder = RadiusBuilder;
