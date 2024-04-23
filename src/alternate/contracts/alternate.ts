export interface AlternateItem {
  name: string;
  style: object;
}

export interface AlternateI {
  components: Array<AlternateItem>;
}

export interface AlternateConfigI {
  components?: Array<AlternateItem>;
}
