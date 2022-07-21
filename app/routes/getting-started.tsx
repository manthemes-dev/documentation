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
      >
        <Prism.Tab label="Npm" language="bash" icon={<ImNpm color="red" />}>
          npm install manthemes
        </Prism.Tab>
        <Prism.Tab label="Yarn" language="bash" icon={<FaYarn color="cyan" />}>
          yarn add manthemes
        </Prism.Tab>
        <Prism.Tab
          label="Pnpm"
          language="bash"
          icon={<SiPnpm color="orange" />}
        >
          pnpm add manthemes
        </Prism.Tab>
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
