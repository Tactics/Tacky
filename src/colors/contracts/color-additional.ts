import { HexColor } from "@/colors/contracts/hex";

// interface for defining how additional project-specific colors should be defined.
export interface AdditionalColorItem {
  name: string;
  color: HexColor;
}

export interface AdditionalColorI {
  list: AdditionalColorItem[];
}

export interface AdditionalColorIConfigI {
  list?: AdditionalColorItem[];
}
