export interface ShadowI {
  none: string; // 0px
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
}

// When setting 1 shadow config, you must set all to prevent generated strange config.
// Since they are all relevant to one another.
export interface ShadowConfigI {
  sm: string;
  xs: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
}
