type HexColor = `#${string}`;

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

export type { AdditionalColorItem as A, HexColor as H, AdditionalColorI as a, AdditionalColorIConfigI as b };
