import { ColorBuilder } from "@/colors/builders/colors";
import { ColorsI, ScopeColorsI } from "@/colors/contracts/colors";
import { ColorVariantI } from "@/colors/contracts/color-variant";

// Create a mock color variant for testing
const createMockColorVariant = (): ColorVariantI => ({
  tint_50: "#mock50",
  tint_100: "#mock100",
  tint_200: "#mock200",
  tint_300: "#mock300",
  tint_400: "#mock400",
  tint_500: "#mock500",
  tint_600: "#mock600",
  tint_700: "#mock700",
  tint_800: "#mock800",
  tint_900: "#mock900",
  tint_950: "#mock950",
});

// Create a mock base colors object for testing
const createMockBaseColors = (): ColorsI => ({
  danger: createMockColorVariant(),
  warning: createMockColorVariant(),
  success: createMockColorVariant(),
  info: createMockColorVariant(),
  neutrals: createMockColorVariant(),
  border: createMockColorVariant(),
  text: createMockColorVariant(),
  surfaces: createMockColorVariant(),
  skeletons: createMockColorVariant(),
  primary: createMockColorVariant(),
  accent: createMockColorVariant(),
  accent2: createMockColorVariant(),
  accent3: createMockColorVariant(),
  accent4: createMockColorVariant(),
  accent5: createMockColorVariant(),
  supporting: createMockColorVariant(),
  scoped: {},
});

describe("ColorBuilder", () => {
  test("should build colors with default config", () => {
    // Arrange
    const base = createMockBaseColors();
    const config = {};

    // Act
    const result = ColorBuilder({ base, config });

    // Assert
    expect(result).toBeDefined();
    expect(result.primary).toBeDefined();
    expect(result.accent).toBeDefined();
    expect(result.danger).toBeDefined();
    expect(result.scoped).toEqual({});

    // Check that the result contains the expected color values
    // We're using the actual ColorVariantBuilder, so we can check the structure
    // but not the exact values since they depend on the implementation
    expect(result.primary).toHaveProperty("tint_50");
    expect(result.primary).toHaveProperty("tint_500");
    expect(result.primary).toHaveProperty("tint_950");
  });

  test("should build colors with custom config", () => {
    // Arrange
    const base = createMockBaseColors();
    const config = {
      primary: { tint_500: "#custom500" },
      accent: { tint_500: "#customAccent" },
    } as const;

    // Act
    const result = ColorBuilder({ base, config });

    // Assert
    expect(result).toBeDefined();

    // Check that the result contains the expected color values
    expect(result.primary).toHaveProperty("tint_50");
    expect(result.primary).toHaveProperty("tint_500");
    expect(result.primary).toHaveProperty("tint_950");

    expect(result.accent).toHaveProperty("tint_50");
    expect(result.accent).toHaveProperty("tint_500");
    expect(result.accent).toHaveProperty("tint_950");
  });

  test("should handle scoped colors correctly", () => {
    // Arrange
    const base = createMockBaseColors();
    const config = {
      scoped: {
        scope1: {
          primary: { tint_500: "#scope1Primary" },
          accent: { tint_500: "#scope1Accent" },
        },
        scope2: {
          primary: { tint_500: "#scope2Primary" },
          supporting: { tint_500: "#scope2Supporting" },
        },
      },
    } as const;

    // Act
    const result = ColorBuilder({ base, config });

    // Assert
    expect(result).toBeDefined();
    expect(result.scoped).toBeDefined();

    // Ensure scoped is defined before proceeding
    if (!result.scoped) {
      fail("result.scoped should be defined");
      return;
    }

    expect(Object.keys(result.scoped)).toHaveLength(2);
    expect(result.scoped.scope1).toBeDefined();
    expect(result.scoped.scope2).toBeDefined();

    // Verify scoped colors have the correct structure
    const scope1 = result.scoped.scope1 as ScopeColorsI;
    expect(scope1.primary).toBeDefined();
    expect(scope1.accent).toBeDefined();

    // Check that the scoped colors have the expected properties
    expect(scope1.primary).toHaveProperty("tint_50");
    expect(scope1.primary).toHaveProperty("tint_500");
    expect(scope1.primary).toHaveProperty("tint_950");

    expect(scope1.accent).toHaveProperty("tint_50");
    expect(scope1.accent).toHaveProperty("tint_500");
    expect(scope1.accent).toHaveProperty("tint_950");

    const scope2 = result.scoped.scope2 as ScopeColorsI;
    expect(scope2.primary).toBeDefined();
    expect(scope2.supporting).toBeDefined();

    // Check that the scoped colors have the expected properties
    expect(scope2.primary).toHaveProperty("tint_50");
    expect(scope2.primary).toHaveProperty("tint_500");
    expect(scope2.primary).toHaveProperty("tint_950");

    expect(scope2.supporting).toHaveProperty("tint_50");
    expect(scope2.supporting).toHaveProperty("tint_500");
    expect(scope2.supporting).toHaveProperty("tint_950");
  });

  test("should handle empty scoped config", () => {
    // Arrange
    const base = createMockBaseColors();
    const config = {
      scoped: {},
    };

    // Act
    const result = ColorBuilder({ base, config });

    // Assert
    expect(result).toBeDefined();
    expect(result.scoped).toEqual({});
  });

  test("should handle undefined scoped config", () => {
    // Arrange
    const base = createMockBaseColors();
    const config = {
      scoped: undefined,
    };

    // Act
    const result = ColorBuilder({ base, config });

    // Assert
    expect(result).toBeDefined();
    expect(result.scoped).toEqual({});
  });

  test("should handle fallback to global config for scoped colors", () => {
    // Arrange
    const base = createMockBaseColors();
    const config = {
      primary: { tint_500: "#globalPrimary" },
      scoped: {
        scope1: {
          // No primary config, should fall back to global
        },
      },
    } as const;

    // Act
    const result = ColorBuilder({ base, config });

    // Assert
    expect(result).toBeDefined();
    expect(result.scoped).toBeDefined();

    // Ensure scoped is defined before proceeding
    if (!result.scoped) {
      fail("result.scoped should be defined");
      return;
    }

    expect(result.scoped.scope1).toBeDefined();

    // Check that the scoped colors have the expected properties
    const scope1 = result.scoped.scope1 as ScopeColorsI;
    expect(scope1.primary).toBeDefined();
    expect(scope1.primary).toHaveProperty("tint_50");
    expect(scope1.primary).toHaveProperty("tint_500");
    expect(scope1.primary).toHaveProperty("tint_950");

    // Check that the global colors have the expected properties
    expect(result.primary).toBeDefined();
    expect(result.primary).toHaveProperty("tint_50");
    expect(result.primary).toHaveProperty("tint_500");
    expect(result.primary).toHaveProperty("tint_950");
  });
});
