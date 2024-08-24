export interface AlternateItem {
  name: string;
  theme: AlternateThemableStatesConfig;
}

export interface AlternateI {
  components: Array<AlternateItem>;
}

export interface AlternateConfigI {
  components?: Array<AlternateItem>;
}

export interface AlternateThemableStates {
  Init: AlternateThemable;
  Hover: AlternateThemable;
  Skeleton: AlternateThemable;
}

export interface AlternateThemable {
  Color: string;
  BackgroundColor: string;
  BorderColor: string;
}

export interface AlternateThemableStatesConfig {
  Init?: AlternateThemableConfig;
  Hover?: AlternateThemableConfig;
  Skeleton?: AlternateThemableConfig;
}

export interface AlternateThemableConfig {
  Color?: string;
  BackgroundColor?: string;
  BorderColor?: string;
}
