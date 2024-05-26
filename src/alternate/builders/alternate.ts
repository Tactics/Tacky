import { AlternateItem } from "@/alternate/contracts/alternate";

const AlternateBuilder = ({
  base,
  config,
}: {
  base: Array<AlternateItem>;
  config?: Array<AlternateItem>;
}): Array<AlternateItem> => {
  return config ? config : base;
};

export { AlternateBuilder };
