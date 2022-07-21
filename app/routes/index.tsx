import { Stack, Text, Title } from "@mantine/core";

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
      </div>
    </div>
  );
}
