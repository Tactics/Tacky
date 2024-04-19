export interface RadiusI {
  none: string; // 0px
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  full: string; // 9999px
}

// When setting 1 radius config, you must set all to prevent generated strange config.
// Since they are all relevant to one another.
export interface RadiusConfigI {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
}
