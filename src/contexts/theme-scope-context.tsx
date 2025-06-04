import { createContext, PropsWithChildren } from "react";

export const RootScope = "root";

export interface IContextProviderThemeScope {
  scope: string;
}

export interface IContextProviderThemeScope extends PropsWithChildren {
  scope: string;
}

export const ContextThemeScope = createContext<IContextProviderThemeScope>({
  scope: RootScope,
});

export const ContextProviderThemeScope = (
  props: IContextProviderThemeScope,
) => {
  const { scope, children } = props;

  return (
    <ContextThemeScope.Provider value={{ scope: scope }}>
      {children}
    </ContextThemeScope.Provider>
  );
};
