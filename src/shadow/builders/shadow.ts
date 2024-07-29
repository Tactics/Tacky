import { ShadowConfigI, ShadowI } from "@/shadow/contracts/shadow";

const ShadowBuilder = ({
  base,
  config,
}: {
  base: ShadowI;
  config?: ShadowConfigI;
}): ShadowI => {
  return {
    none: "0 0 #0000",
    xs: config ? config.xs : base.xs,
    sm: config ? config.sm : base.sm,
    md: config ? config.md : base.md,
    lg: config ? config.lg : base.lg,
    xl: config ? config.xl : base.xl,
    "2xl": config ? config["2xl"] : base["2xl"],
  };
};

export { ShadowBuilder };
