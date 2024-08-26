import {
  AlternateItem,
  AlternateThemableStatesConfig,
} from "@/alternate/contracts/alternate";

interface ILookupAlternateTheme {
  name: string;
  alternates: Array<AlternateItem>;
}

const LookupAlternateTheme = ({
  name,
  alternates,
}: ILookupAlternateTheme): AlternateThemableStatesConfig | undefined => {
  const lookup = alternates.find((item) => item.name === name);
  return lookup ? lookup.theme : lookup;
};

export { LookupAlternateTheme };
export type { ILookupAlternateTheme };
