import {
  Container,
  Title,
  Text,
  useMantineTheme,
  Highlight,
  Mark,
  Stack,
  Code,
  Space,
  Divider,
} from "@mantine/core";
import { Prism } from "@mantine/prism";

export default function Functions() {
  const theme = useMantineTheme();

  const codes = {
    override: `
import { synthwave } from "manthemes/daisyui";

function App() {
  const overridedSynthwave = synthwave.override({
    dir: "rtl",
    colors: {
      red: [/* ... */]
    },
    
    /* ... */
  })

  return (
    <MantineProvider theme={overridedSynthwave} withGlobalStyles withNormalizeCSS>
      <Outlet />
    </MantineProvider>
  );
}
    `,

    getColor: `
import { synthwave } from "manthemes/daisyui";

function App() {
  // Returns the shades of the blue color
  const synthwavePrimaryColor = synthwave.getColor("blue");
  
  return (
    <MantineProvider theme={synthwave} withGlobalStyles withNormalizeCSS>
      <Outlet />
    </MantineProvider>
  );
}
    `,

    getColors: `
import { synthwave } from "manthemes/daisyui";

function App() {
  // Returns all colors of the synthwave theme
  const allColors = synthwave.getColors();
  
  return (
    <MantineProvider theme={synthwave} withGlobalStyles withNormalizeCSS>
      <Outlet />
    </MantineProvider>
  );
}
    `,
  };

  return (
    <Container>
      <Title
        style={{
          fontSize: 40,
          marginTop: theme.spacing.xl,
          marginBottom: theme.spacing.xl,
        }}
        align="center"
      >
        <Text
          variant="gradient"
          component="span"
          gradient={{
            from: theme.colors[theme.primaryColor][7],
            to: theme.colors.red[7],
            deg: 45,
          }}
          inherit
        >
          Functions (API)
        </Text>
      </Title>
      <h2
        style={{
          fontSize: 30,
          marginBottom: theme.spacing.sm,
        }}
        id="override"
      >
        override
      </h2>
      <Text>
        <Code sx={{ fontSize: 16 }}>
          override(overrideOptions: MantineThemeOverride, theme?: any)
        </Code>
        - To override or to add theme options
      </Text>
      <Space h="md" />
      <Prism language="jsx" sx={{ marginBottom: theme.spacing.xl }}>
        {codes.override}
      </Prism>
      <Divider />
      <h2
        style={{
          fontSize: 30,
          marginBottom: theme.spacing.sm,
        }}
        id="get-color"
      >
        getColor
      </h2>
      <Text>
        <Code sx={{ fontSize: 16 }}>
          getColor(color: MantineColor, theme?: any)
        </Code>{" "}
        - To get a color of a theme
      </Text>{" "}
      <Space h="md" />
      <Prism language="jsx" sx={{ marginBottom: theme.spacing.xl }}>
        {codes.getColor}
      </Prism>
      <Divider />
      <h2
        style={{
          fontSize: 30,
          marginBottom: theme.spacing.sm,
        }}
        id="get-colors"
      >
        getColors
      </h2>
      <Text>
        <Code sx={{ fontSize: 16 }}>getColors(theme?: any)</Code> - Get all
        colors of a theme
      </Text>{" "}
      <Space h="md" />
      <Prism language="jsx" sx={{ marginBottom: theme.spacing.xl }}>
        {codes.getColors}
      </Prism>
    </Container>
  );
}
