"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorVariantBuilder = void 0;
const or_default_1 = require("../../tooling/or-default");
const ColorVariantBuilder = ({ base, config, }) => {
    const tint_500 = (0, or_default_1.orDefault)(config, base.tint_500, ["tint_500"]);
    const isCustom = base.tint_500 != tint_500;
    const tint_400 = (0, or_default_1.orDefault)(config, isCustom ? tint_500 : base.tint_400, [
        "tint_400",
    ]);
    const tint_300 = (0, or_default_1.orDefault)(config, isCustom ? tint_400 : base.tint_300, [
        "tint_300",
    ]);
    const tint_200 = (0, or_default_1.orDefault)(config, isCustom ? tint_300 : base.tint_200, [
        "tint_200",
    ]);
    const tint_100 = (0, or_default_1.orDefault)(config, isCustom ? tint_200 : base.tint_100, [
        "tint_100",
    ]);
    const tint_50 = (0, or_default_1.orDefault)(config, isCustom ? tint_100 : base.tint_50, [
        "tint_50",
    ]);
    const tint_600 = (0, or_default_1.orDefault)(config, isCustom ? tint_500 : base.tint_600, [
        "tint_600",
    ]);
    const tint_700 = (0, or_default_1.orDefault)(config, isCustom ? tint_600 : base.tint_700, [
        "tint_700",
    ]);
    const tint_800 = (0, or_default_1.orDefault)(config, isCustom ? tint_700 : base.tint_800, [
        "tint_800",
    ]);
    const tint_900 = (0, or_default_1.orDefault)(config, isCustom ? tint_800 : base.tint_900, [
        "tint_900",
    ]);
    const tint_950 = (0, or_default_1.orDefault)(config, isCustom ? tint_900 : base.tint_950, [
        "tint_950",
    ]);
    return {
        tint_50: tint_50,
        tint_100: tint_100,
        tint_200: tint_200,
        tint_300: tint_300,
        tint_400: tint_400,
        tint_500: tint_500,
        tint_600: tint_600,
        tint_700: tint_700,
        tint_800: tint_800,
        tint_900: tint_900,
        tint_950: tint_950,
    };
};
exports.ColorVariantBuilder = ColorVariantBuilder;
