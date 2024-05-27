import React from "react";

const BuildProvidersTree = (componentsWithProps: any) => {
  const initialComponent = ({ children }: any) => <> {children} </>;
  return componentsWithProps.reduce(
    (AccumulatedComponents: any, [Provider, props = {}]: any) => {
      return ({ children }: any) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
    },
    initialComponent,
  );
};

export { BuildProvidersTree };
