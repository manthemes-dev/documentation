import { Button, ButtonProps, Divider, Group, Stack } from "@mantine/core";

export default function Buttons() {
  const filled = "Filled";
  const outline = "Outline";
  const light = "Light";
  const subtle = "Subtle";

  const filledButtons: Array<ButtonProps<"button">> = [
    {
      children: filled,
      color: "neutral",
    },
    {
      children: filled,
      color: "primary",
    },
    {
      children: filled,
      color: "secondary",
    },
    {
      children: filled,
      color: "accent",
    },
    {
      children: filled,
      color: "info",
    },
    {
      children: filled,
      color: "success",
    },
    {
      children: filled,
      color: "warning",
    },
    {
      children: filled,
      color: "error",
    },
  ];

  const outlineButtons: Array<ButtonProps<"button">> = [
    {
      children: outline,
      color: "neutral",
      variant: "outline",
    },
    {
      children: outline,
      color: "primary",
      variant: "outline",
    },
    {
      children: outline,
      color: "secondary",
      variant: "outline",
    },
    {
      children: outline,
      color: "accent",
      variant: "outline",
    },
    {
      children: outline,
      color: "info",
      variant: "outline",
    },
    {
      children: outline,
      color: "success",
      variant: "outline",
    },
    {
      children: outline,
      color: "warning",
      variant: "outline",
    },
    {
      children: outline,
      color: "error",
      variant: "outline",
    },
  ];

  const lightButtons: Array<ButtonProps<"button">> = [
    {
      children: light,
      color: "neutral",
      variant: "light",
    },
    {
      children: light,
      color: "primary",
      variant: "light",
    },
    {
      children: light,
      color: "secondary",
      variant: "light",
    },
    {
      children: light,
      color: "accent",
      variant: "light",
    },
    {
      children: light,
      color: "info",
      variant: "light",
    },
    {
      children: light,
      color: "success",
      variant: "light",
    },
    {
      children: light,
      color: "warning",
      variant: "light",
    },
    {
      children: light,
      color: "error",
      variant: "light",
    },
  ];

  const subtleButtons: Array<ButtonProps<"button">> = [
    {
      children: subtle,
      color: "neutral",
      variant: "subtle",
    },
    {
      children: subtle,
      color: "primary",
      variant: "subtle",
    },
    {
      children: subtle,
      color: "secondary",
      variant: "subtle",
    },
    {
      children: subtle,
      color: "accent",
      variant: "subtle",
    },
    {
      children: subtle,
      color: "info",
      variant: "subtle",
    },
    {
      children: subtle,
      color: "success",
      variant: "subtle",
    },
    {
      children: subtle,
      color: "warning",
      variant: "subtle",
    },
    {
      children: subtle,
      color: "error",
      variant: "subtle",
    },
  ];

  return (
    <Stack>
      <Group>
        {filledButtons.map((button) => (
          <Button key={`filled-${button.color}`} {...button}>
            {button.children}
          </Button>
        ))}
      </Group>

      <Divider />

      <Group>
        {outlineButtons.map((button) => (
          <Button key={`outline-${button.color}`} {...button}>
            {button.children}
          </Button>
        ))}
      </Group>

      <Divider />

      <Group>
        {lightButtons.map((button) => (
          <Button key={`light-${button.color}`} {...button}>
            {button.children}
          </Button>
        ))}
      </Group>

      <Divider />

      <Group>
        {subtleButtons.map((button) => (
          <Button key={`subtle-${button.color}`} {...button}>
            {button.children}
          </Button>
        ))}
      </Group>
    </Stack>
  );
}
