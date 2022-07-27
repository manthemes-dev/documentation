import { ReactNode } from "react";
import {
  ActionIcon,
  AppShell,
  Button,
  Divider,
  Group,
  Header,
  Menu,
  Navbar,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Form, Link, useFetcher, useLocation } from "@remix-run/react";
import MantineLogo from "./MantineLogo";

import { BsGithub } from "react-icons/bs";
import { MdFunctions, MdKeyboardArrowDown } from "react-icons/md";
import { ImNpm } from "react-icons/im";
import { IoRocketSharp } from "react-icons/io5";
import { LinksGroup, LinksGroupProps } from "./NavbarLinksGroup";
import { useLocalStorage } from "@mantine/hooks";
import { AiFillHome } from "react-icons/ai";
import { FaBook } from "react-icons/fa";

export type AppShellProps = {
  children: ReactNode;
  navLinks: Array<{
    children: ReactNode;
    link: any;
    props: {};
  }>;
};

const mockdata: LinksGroupProps[] = [
  {
    label: "Home",
    icon: AiFillHome,
    link: "/",
  },
  {
    label: "Getting Started",
    icon: IoRocketSharp,
    color: "violet",
    link: "/getting-started",
  },
  {
    label: "Guides",
    icon: FaBook,
    color: "orange",
    links: [
      {
        label: "Creating a menu theme",
        link: "/guides/menu-theme",
      },
      {
        label: "Saving themes in local storage",
        link: "/guides/saving-themes-in-localstorage",
      },
    ],
  },
  {
    label: "Functions (API)",
    icon: MdFunctions,
    color: "red",
    link: "/functions",
    links: [
      { label: "override", link: "/functions/#override" },
      { label: "getColor", link: "/functions/#get-color" },
      { label: "getColors", link: "/functions/#get-colors" },
    ],
  },
];

export default function Appshell({ children, navLinks }: AppShellProps) {
  const theme = useMantineTheme();
  const location = useLocation();

  const links = mockdata.map((item) => (
    <LinksGroup key={item.label} {...item} />
  ));

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar height={700} width={{ sm: 300 }} p="md">
          <Navbar.Section grow>{links}</Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Group spacing="xs">
              <MantineLogo height="35" />
              <Title order={3}>
                <Text component={Link} to="/" inherit>
                  Manthemes
                </Text>
              </Title>
            </Group>
            <Group
              spacing={5}
              position="center"
              sx={{ [theme.fn.smallerThan("sm")]: { display: "none" } }}
            >
              {navLinks.map((link) => (
                <Button
                  component={Link}
                  to={link.link}
                  key={link.link}
                  {...link.props}
                >
                  {link.children}
                </Button>
              ))}
            </Group>
            <Group>
              <Menu
                closeOnItemClick={false}
                position="bottom-end"
                transition="skew-up"
                styles={{ dropdown: { height: "80vh", overflowY: "auto" } }}
                withArrow
              >
                <Menu.Target>
                  <Button
                    color="primary"
                    variant="subtle"
                    rightIcon={<MdKeyboardArrowDown size={16} />}
                  >
                    Theme
                  </Button>
                </Menu.Target>
                <form method="post">
                  <input
                    type="hidden"
                    name="redirect"
                    value={location.pathname}
                  />
                  <Menu.Dropdown>
                    <Menu.Label>DaisyUI</Menu.Label>
                    <Menu.Item
                      icon="🌞"
                      name="theme"
                      value="daisyui-light"
                      type="submit"
                    >
                      Light
                    </Menu.Item>
                    <Menu.Item
                      icon="🧁"
                      name="theme"
                      value="daisyui-cupcake"
                      type="submit"
                    >
                      Cupcake
                    </Menu.Item>
                    <Menu.Item
                      icon="🐝"
                      name="theme"
                      value="daisyui-bumblebee"
                      type="submit"
                    >
                      Bumblebee
                    </Menu.Item>
                    <Menu.Item
                      icon="🌛"
                      name="theme"
                      value="daisyui-dark"
                      type="submit"
                    >
                      Dark
                    </Menu.Item>
                    <Menu.Item
                      icon="🧛"
                      name="theme"
                      value="daisyui-dracula"
                      type="submit"
                    >
                      Dracula
                    </Menu.Item>
                    <Menu.Item
                      icon="🚗"
                      name="theme"
                      value="daisyui-retro"
                      type="submit"
                    >
                      Retro
                    </Menu.Item>
                    <Menu.Item
                      icon="🌊"
                      name="theme"
                      value="daisyui-synthwave"
                      type="submit"
                    >
                      Synthwave
                    </Menu.Item>
                    <Menu.Item
                      icon="♒"
                      name="theme"
                      value="daisyui-aqua"
                      type="submit"
                    >
                      Aqua
                    </Menu.Item>

                    <Divider />

                    <Menu.Label>Material</Menu.Label>
                    <Menu.Item
                      icon="🌞"
                      name="theme"
                      value="material-light"
                      type="submit"
                    >
                      Light
                    </Menu.Item>
                    <Menu.Item
                      icon="🌓"
                      name="theme"
                      value="material-dark"
                      type="submit"
                    >
                      Dark
                    </Menu.Item>

                    <Divider />

                    <Menu.Label>Nightfox</Menu.Label>
                    <Menu.Item
                      icon="🦊"
                      name="theme"
                      type="submit"
                      value="nightfox-nightfox"
                    >
                      Nightfox
                    </Menu.Item>

                    <Divider />

                    <Menu.Label>Extras</Menu.Label>
                    <Menu.Item
                      icon="🌜"
                      name="theme"
                      value="moonlight-moonlight"
                      type="submit"
                    >
                      Moonlight
                    </Menu.Item>
                  </Menu.Dropdown>
                </form>
              </Menu>

              <ActionIcon
                component="a"
                href="https://github.com/manthemes-dev/manthemes"
                target="_blank"
                size="lg"
                radius="md"
                variant="default"
              >
                <BsGithub size={18} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href="https://npmjs.com/package/manthemes"
                target="_blank"
                size="lg"
                radius="md"
                variant="default"
              >
                <ImNpm size={18} />
              </ActionIcon>
            </Group>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
