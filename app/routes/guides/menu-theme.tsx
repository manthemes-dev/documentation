import {
  Code,
  Container,
  createStyles,
  Divider,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { Prism } from "@mantine/prism";

const useStyles = createStyles((theme) => ({
  root: {
    fontSize: 45,
    textAlign: "center",
    marginBottom: theme.spacing.sm,
  },

  ctx: {
    textAlign: "center",
    marginBottom: theme.spacing.md,
  },

  divider: {
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
  },
}));

function MenuTheme() {
  const { classes } = useStyles();

  const menu_themes_jsx_code = `
import { Menu, useLocalStorage } from "@mantine/core"; 

function MenuThemes(themes) {
  const [theme, setTheme] = useLocalStorage({
    key: "mantine-theme",
    defaultValue: { group: "daisyui", theme: "dark" },
    getInitialValueInEffect: true,
  });

  return (
    <Menu>
      {themes.map((theme) => (
        <Menu.Label>{theme.group.replace(/\\s+/g, "")}</Menu.Label>
        <Menu.Item icon={theme.icon} onClick={() => setTheme({ group: theme.group.replace(/\\s+/g, "").toLowerCase(), theme: theme.theme })}>{theme.theme}</Menu.Item>
      ))}
    </Menu>
  );
}

export default MenuThemes;
  `;

  const menu_themes_tsx_code = `
import { Menu, useLocalStorage } from "@mantine/core"; 

type ThemesType = {
  group: string;
  theme: string;
  icon: React.ReactNode;
}

function MenuThemes(themes: ThemesType[]) {
  const [theme, setTheme] = useLocalStorage<{ group: string; theme: string; }>({
    key: "mantine-theme",
    defaultValue: { group: "daisyui", theme: "dark" },
    getInitialValueInEffect: true,
  });

  return (
    <Menu>
      {themes.map((theme) => (
        <Menu.Label>{theme.group.replace(/\\s+/g, "")}</Menu.Label>
        <Menu.Item icon={theme.icon} onClick={() => setTheme({ group: theme.group.replace(/\\s+/g, "").toLowerCase(), theme: theme.theme })}>{theme.theme}</Menu.Item>
      ))}
    </Menu>
  );
}

export default MenuThemes;
  `;

  return (
    <Container>
      <Title className={classes.root}>Creating a menu theme</Title>

      <Text className={classes.ctx}>
        We're gonna make a menu that has themes in it 😄
      </Text>

      <Divider className={classes.divider} />

      <Text sx={(theme) => ({ marginBottom: theme.spacing.lg })}>
        First, we need to have a component called <Code>menu-theme.js</Code>
      </Text>
      <Prism.Tabs>
        <Prism.Tab language="jsx" label="JSX">
          {menu_themes_jsx_code}
        </Prism.Tab>
        <Prism.Tab language="tsx" label="TSX">
          {menu_themes_tsx_code}
        </Prism.Tab>
      </Prism.Tabs>

      <Divider className={classes.divider} />

      <Text>Next is to make a constants full of themes</Text>
    </Container>
  );
}

export default MenuTheme;
