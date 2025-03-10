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
  Active: AlternateThemable;
}

export interface AlternateThemable {
  Color: string;
  BackgroundColor: string;
  Border: string;
  BorderRaw: AlternateThemableBorder;
  Font: string;
}

export interface AlternateThemableDefaultConfig {
  Color: string;
  BackgroundColor: string;
  Border: AlternateThemableBorder;
  FontWeightAdjustment: number;
}

export interface AlternateThemableBorder {
  Color: string;
  Style: string;
  Width: number;
}

export interface AlternateThemableBorderConfig {
  Color?: string;
  Style?: string;
  Width?: number;
}

export interface AlternateThemableStatesConfig {
  Init?: AlternateThemableConfig;
  Hover?: AlternateThemableConfig;
  Active?: AlternateThemableConfig;
}

export interface AlternateThemableConfig {
  Color?: string;
  BackgroundColor?: string;
  Border?: AlternateThemableBorderConfig;
  FontWeightAdjustment?: number;
}

export interface AlternateThemableBorderConfig {
  Color?: string;
  Style?: string;
  Width?: number;
}
