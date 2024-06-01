import { H as HexColor } from './color-additional-_M7QfRi_.mjs';

interface ColorVariantI {
    tint_50: HexColor;
    tint_100: HexColor;
    tint_200: HexColor;
    tint_300: HexColor;
    tint_400: HexColor;
    tint_500: HexColor;
    tint_600: HexColor;
    tint_700: HexColor;
    tint_800: HexColor;
    tint_900: HexColor;
    tint_950: HexColor;
}
interface ColorVariantConfigI {
    tint_50?: HexColor;
    tint_100?: HexColor;
    tint_200?: HexColor;
    tint_300?: HexColor;
    tint_400?: HexColor;
    tint_500?: HexColor;
    tint_600?: HexColor;
    tint_700?: HexColor;
    tint_800?: HexColor;
    tint_900?: HexColor;
    tint_950?: HexColor;
}
declare enum ColorVariant {
    TINT_50 = "tint_50",
    TINT_100 = "tint_100",
    TINT_200 = "tint_200",
    TINT_300 = "tint_300",
    TINT_400 = "tint_400",
    TINT_500 = "tint_500",
    TINT_600 = "tint_600",
    TINT_700 = "tint_700",
    TINT_800 = "tint_800",
    TINT_900 = "tint_900",
    TINT_950 = "tint_950"
}
declare const ColorVariantKeys: ColorVariant[];
type ColorVariantKey = ColorVariant.TINT_50 | ColorVariant.TINT_100 | ColorVariant.TINT_200 | ColorVariant.TINT_300 | ColorVariant.TINT_400 | ColorVariant.TINT_500 | ColorVariant.TINT_600 | ColorVariant.TINT_700 | ColorVariant.TINT_800 | ColorVariant.TINT_900 | ColorVariant.TINT_950;

export { type ColorVariantI as C, type ColorVariantConfigI as a, type ColorVariantKey as b, ColorVariant as c, ColorVariantKeys as d };
