import {
  Container,
  Divider,
  List,
  Mark,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Prism } from "@mantine/prism";

import { ImNpm } from "react-icons/im";
import { FaYarn } from "react-icons/fa";
import { SiPnpm } from "react-icons/si";

export default function GettingStarted() {
  const theme = useMantineTheme();

  const code = `
import { retro } from "manthemes/daisyui";

function App() {
  return (
    <MantineProvider theme={retro} withGlobalStyles withNormalizeCSS>
      <Outlet /> {/* Replace this with your app's outlet */}
    </MantineProvider>
  );
}
  `;

  return (
    <Container>
      <Title
        sx={{ fontSize: 40, marginBottom: theme.spacing.xl }}
        align="center"
      >
        <Text
          variant="gradient"
          gradient={{ from: "green", to: "blue", deg: 45 }}
          component="span"
          inherit
        >
          Getting Started
        </Text>
      </Title>

      <Divider />

      <Title
        sx={{
          fontSize: 30,
          marginTop: theme.spacing.xl,
          marginBottom: theme.spacing.lg,
        }}
      >
        ⚠ Requirements
      </Title>

      <List sx={{ marginBottom: theme.spacing.xl }}>
        <List.Item>Node</List.Item>
        <List.Item>Npm</List.Item>
        <List.Item>Mantine (and of course manthemes)</List.Item>
      </List>

      <Divider />

      <Title
        sx={{
          fontSize: 30,
          marginTop: theme.spacing.xl,
          marginBottom: theme.spacing.lg,
        }}
      >
        🔌 Installation
      </Title>

      <Text>Install the manthemes package by using:</Text>

      <Prism.Tabs
        sx={{ marginTop: theme.spacing.xl, marginBottom: theme.spacing.xl }}
        defaultValue="npm"
      >
        <Prism.TabsList>
          <Prism.Tab value="npm" icon={<ImNpm color="red" />}>
            Npm
          </Prism.Tab>
          <Prism.Tab value="yarn" icon={<FaYarn color="cyan" />}>
            Yarn
          </Prism.Tab>
          <Prism.Tab value="pnpm" icon={<SiPnpm color="orange" />}>
            Pnpm
          </Prism.Tab>
        </Prism.TabsList>

        <Prism.Panel value="npm" language="bash">
          npm install manthemes
        </Prism.Panel>
        <Prism.Panel value="yarn" language="bash">
          yarn add manthemes
        </Prism.Panel>
        <Prism.Panel value="pnpm" language="bash">
          pnpm add manthemes
        </Prism.Panel>
      </Prism.Tabs>

      <Divider />

      <Title
        sx={{
          fontSize: 30,
          marginTop: theme.spacing.xl,
          marginBottom: theme.spacing.lg,
        }}
      >
        🦀 Usage
      </Title>

      <Text>
        Import the manthemes package and put it on the theme prop of the
        mantine-provider component
      </Text>
      <Prism
        language="jsx"
        sx={{
          marginTop: theme.spacing.xl,
          marginBottom: theme.spacing.xl,
        }}
      >
        {code}
      </Prism>

      <Divider />

      <Text
        sx={{
          marginTop: theme.spacing.xl,
          marginBottom: theme.spacing.xl,
        }}
      >
        <Mark color="orange">Congrats!</Mark> Now that you imported the package
        and the theme, it's time to go to the other pages :)
      </Text>
    </Container>
  );
}
