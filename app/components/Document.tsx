import { getCache, MantineProvider } from "@mantine/core";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useContext, useEffect } from "react";
import { ClientStyleContext } from "~/context";

import * as manthemes from "manthemes";
import { LoaderFunction } from "@remix-run/node";
import { themeCookie } from "~/themeCookie.server";

export const loader: LoaderFunction = async ({ request }) => {
  const theme_cookie = request.headers.get("Cookie");

  return (
    (await themeCookie.parse(theme_cookie)) || {
      group: "daisyui",
      theme: "dark",
    }
  );
};

export function Document({ children }: { children: React.ReactNode }) {
  const { group, theme } = useLoaderData();

  // @ts-ignore
  const manTheme = manthemes[group][theme];

  const clientStyleData = useContext(ClientStyleContext);

  useEffect(() => {
    const cache = getCache({ key: "mantine" });
    cache.sheet.container = document.head;
    const tags = cache.sheet.tags;
    cache.sheet.flush();
    tags.forEach((tag) => {
      (cache.sheet as any)._insertTag(tag);
    });
    clientStyleData?.reset();
  }, []);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <MantineProvider theme={manTheme} withGlobalStyles withNormalizeCSS>
          {children}
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
