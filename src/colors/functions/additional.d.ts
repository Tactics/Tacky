import { HexColor } from "../contracts/hex";
import { AdditionalColorItem } from "../contracts/color-additional";
declare const LookupAdditionalColor: ({ name, colors, fallback, }: {
    name: string;
    colors: AdditionalColorItem[];
    fallback: HexColor;
}) => HexColor;
export { LookupAdditionalColor };
