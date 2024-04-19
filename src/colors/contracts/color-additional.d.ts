import { HexColor } from "./hex";
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
