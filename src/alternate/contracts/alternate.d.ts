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
export type { AlternateItem, AlternateI, AlternateConfigI };
