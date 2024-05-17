import { A as AlternateItem } from './alternate-j1k3Yp03.mjs';
import { A as AdditionalColorItem, H as HexColor } from './color-additional-_M7QfRi_.mjs';

declare const BuildProvidersTree: (componentsWithProps: any) => any;

declare function orDefault(json: any, standard: any, keys: string[]): any;

declare const LookupAlternate: ({ name, alternates, }: {
    name: string;
    alternates: Array<AlternateItem>;
}) => AlternateItem | undefined;

declare const LookupAdditionalColor: ({ name, colors, fallback, }: {
    name: string;
    colors: AdditionalColorItem[];
    fallback: HexColor;
}) => HexColor;

export { BuildProvidersTree, LookupAdditionalColor, LookupAlternate, orDefault };
