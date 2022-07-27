import { useState } from "react";
import {
  Box,
  Collapse,
  createStyles,
  Group,
  MantineColor,
  NavLink,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";

import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai";
import { Link, useLocation } from "@remix-run/react";

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: "block",
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors[theme.primaryColor][4],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  link: {
    fontWeight: 500,
    display: "block",
    border: "12px",
    textDecoration: "none",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: 50,
    marginLeft: 15,
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    borderLeft: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors[theme.primaryColor][8],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  chevron: {
    transition: "transform 200ms ease",
  },
}));

export interface LinksGroupProps {
  icon: any;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  link?: any;
  color?: MantineColor;
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  link = "#",
  color = "cyan",
}: LinksGroupProps) {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const location = useLocation();
  const ChevronIcon =
    theme.dir === "ltr" ? AiOutlineArrowRight : AiOutlineArrowDown;
  const items = (hasLinks ? links : []).map((link) => (
    <NavLink
      key={link.label}
      component={Link}
      label={link.label}
      to={link.link}
      active={location.pathname == link.link}
      className={classes.link}
      color={color}
    />
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
        component={Link}
        to={link}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" color={color} size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              style={{
                transform: opened
                  ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                  : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
