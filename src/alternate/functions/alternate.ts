import { AlternateItem } from "../contracts/alternate";

export const LookupAlternate = ({
  name,
  alternates,
}: {
  name: string;
  alternates: Array<AlternateItem>;
}): AlternateItem | undefined => {
  return alternates.find((item) => item.name === name);
};
