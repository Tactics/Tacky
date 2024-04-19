import { HexColor } from "./hex";

// interface for defining how additional project-specific colors should be defined.
interface AdditionalColorItem {
  name: string;
  color: HexColor;
}

interface AdditionalColorI {
  list: AdditionalColorItem[];
}

interface AdditionalColorIConfigI {
  list?: AdditionalColorItem[];
}

export type { AdditionalColorItem, AdditionalColorI, AdditionalColorIConfigI };
