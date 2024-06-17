interface BreakpointI {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
}

export enum Breakpoint {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
  XLARGE = "xl",
  XXLARGE = "2xl",
}

export const BreakpointKeys = [
  Breakpoint.SMALL,
  Breakpoint.MEDIUM,
  Breakpoint.LARGE,
  Breakpoint.XLARGE,
  Breakpoint.XXLARGE,
];

export type BreakpointKey =
  | Breakpoint.SMALL
  | Breakpoint.MEDIUM
  | Breakpoint.LARGE
  | Breakpoint.XLARGE
  | Breakpoint.XXLARGE;

export type { BreakpointI };
