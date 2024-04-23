type HexColor = `#${string}`;

interface AdditionalColorItem {
    name: string;
    color: HexColor;
}

export type { AdditionalColorItem as A, HexColor as H };
