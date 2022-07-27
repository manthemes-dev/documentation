import { Button, Stack, Text, Title } from "@mantine/core";

export default function Index() {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ margin: "auto" }}>
        <Stack>
          <Title sx={{ fontSize: 55 }}>
            <Text
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan", deg: 45 }}
              inherit
            >
              Man Themes
            </Text>
          </Title>

          <Text size="xl" align="center">
            Mantine package made themes
          </Text>
        </Stack>
        <Button size="lg">Click Me</Button>
        <Button size="lg" color="cyan">
          Click Me
        </Button>
        <Button size="lg" color="grape">
          Click Me
        </Button>
        <Button size="lg" color="yellow">
          Click Me
        </Button>
        <Button size="lg" color="blue">
          Click Me
        </Button>
        <Button size="lg" color="green">
          Click Me
        </Button>
        <Button size="lg" color="orange">
          Click Me
        </Button>
        <Button size="lg" color="red">
          Click Me
        </Button>
      </div>
    </div>
  );
}
