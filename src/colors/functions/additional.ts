import { HexColor } from "@/colors/contracts/hex";
import { AdditionalColorItem } from "@/colors/contracts/color-additional";

interface ILookupAdditionalColor {
  name: string;
  colors: AdditionalColorItem[];
  fallback: HexColor | "transparent";
}

const LookupAdditionalColor = ({
  name,
  colors,
  fallback,
}: ILookupAdditionalColor): HexColor | "transparent" => {
  const lookup = colors.find((item) => item.name === name);
  return lookup ? lookup.color : fallback;
};

export { LookupAdditionalColor };
export type { ILookupAdditionalColor };
