import {
  ActionFunction,
  json,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  redirect,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { getCache, MantineProvider } from "@mantine/core";
import Appshell from "./components/Appshell";

// import { Document } from "~/components/Document";

import { useContext, useEffect } from "react";
import { themeCookie } from "./themeCookie";
import { ClientStyleContext } from "./context";

import * as manthemes from "manthemes";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Manthemes",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  {
    rel: "icon",
    href: "favicon.svg",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap",
  },
];

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const url = formData.get("redirect") || "/";

  const theme = formData.get("theme") as string;
  const splitted = theme.split("-");

  return redirect(url as string, {
    headers: {
      "Set-Cookie": await themeCookie.serialize({
        group: splitted[0],
        theme: splitted[1],
      }),
    },
  });
};

export const loader: LoaderFunction = async ({ request }) => {
  const theme_cookie = request.headers.get("Cookie");
  const cookie = (await themeCookie.parse(theme_cookie)) || {
    group: "nightfox",
    theme: "nightfox",
  };

  return json(cookie);
};

type ThemeData = { group: string; theme: string };

export function Document({ children }: { children: React.ReactNode }) {
  const { group, theme } = useLoaderData<ThemeData>();

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

export default function App() {
  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      alert(
        "Hey! Seems like you're using a device that doesn't support/or doesn't have any responsive available components by this website yet."
      );
    }
  }, []);

  return (
    <Document>
      <Appshell
        navLinks={[
          {
            children: "Home",
            link: "/",
            props: {
              color: "dark",
              variant: "subtle",
            },
          },
          {
            children: `Getting Started`,
            link: "/getting-started",
            props: {
              color: "dark",
              variant: "subtle",
            },
          },
          {
            children: `Functions (API)`,
            link: "/functions",
            props: {
              color: "dark",
              variant: "subtle",
            },
          },
        ]}
      >
        <Outlet />
      </Appshell>
    </Document>
  );
}
