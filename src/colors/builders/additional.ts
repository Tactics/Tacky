import { AdditionalColorItem } from "@/colors/contracts/color-additional";

const AdditionalColorBuilder = ({
  base,
  config,
}: {
  base: AdditionalColorItem[];
  config?: AdditionalColorItem[];
}): AdditionalColorItem[] => {
  return config ? config : base;
};

export { AdditionalColorBuilder };
