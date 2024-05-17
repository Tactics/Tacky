interface AlternateItem {
    name: string;
    style: object;
}
interface AlternateI {
    components: Array<AlternateItem>;
}
interface AlternateConfigI {
    components?: Array<AlternateItem>;
}

export type { AlternateItem as A, AlternateI as a, AlternateConfigI as b };
