interface BreakpointI {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
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
