import { AlternateItem } from "@/alternate/contracts/alternate";

interface ILookupAlternate {
  name: string;
  alternates: Array<AlternateItem>;
}

const LookupAlternate = ({
  name,
  alternates,
}: ILookupAlternate): AlternateItem | undefined => {
  return alternates.find((item) => item.name === name);
};

export { LookupAlternate };
export type { ILookupAlternate };
