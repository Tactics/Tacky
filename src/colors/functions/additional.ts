import { HexColor } from "@/colors/contracts/hex";
import { AdditionalColorItem } from "@/colors/contracts/color-additional";

const LookupAdditionalColor = ({
  name,
  colors,
  fallback,
}: {
  name: string;
  colors: AdditionalColorItem[];
  fallback: HexColor;
}): HexColor => {
  const lookup = colors.find((item) => item.name === name);
  return lookup ? lookup.color : fallback;
};

export { LookupAdditionalColor };
