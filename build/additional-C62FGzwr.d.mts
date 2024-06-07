import { A as AlternateItem } from './alternate-j1k3Yp03.mjs';
import { A as AdditionalColorItem, H as HexColor } from './color-additional-_M7QfRi_.mjs';

interface ILookupAlternate {
    name: string;
    alternates: Array<AlternateItem>;
}
declare const LookupAlternate: ({ name, alternates, }: ILookupAlternate) => AlternateItem | undefined;

interface ILookupAdditionalColor {
    name: string;
    colors: AdditionalColorItem[];
    fallback: HexColor | "transparent";
}
declare const LookupAdditionalColor: ({ name, colors, fallback, }: ILookupAdditionalColor) => HexColor | "transparent";

export { type ILookupAdditionalColor as I, LookupAlternate as L, LookupAdditionalColor as a, type ILookupAlternate as b };
