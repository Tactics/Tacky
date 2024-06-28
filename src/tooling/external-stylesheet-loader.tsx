import { FC, PropsWithChildren, useEffect, useState } from "react";

export interface ExternalStylesheetLoaderI extends PropsWithChildren {
  sheets: string[];
}

export const ExternalStylesheetLoader: FC<ExternalStylesheetLoaderI> = (
  props: ExternalStylesheetLoaderI,
) => {
  const { children, sheets } = props;

  useEffect(() => {
    // React dev mode calls this twice so a link is added twice.
    // Fix this to prevent doubles. But no prio since it won't happen in production mode.
    sheets.map(function (resource) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = resource;
      document.head.appendChild(link);
    });
  }, [sheets]);

  return children ?? null;
};
