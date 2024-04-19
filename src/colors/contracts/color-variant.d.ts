import { HexColor } from "./hex";
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
export type { ColorVariantI, ColorVariantConfigI };
