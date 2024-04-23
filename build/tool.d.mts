import { A as AlternateItem } from './alternate-BrA5MzCI.mjs';
import { A as AdditionalColorItem, H as HexColor } from './color-additional-DIwNv1S9.mjs';

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
