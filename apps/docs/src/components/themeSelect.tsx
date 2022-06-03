import {
  Select,
  SelectContent,
  SelectTriggerButton,
  SelectItem,
  styled,
  Stack,
  StackDirection,
} from "@pear-ui/core";

import { useTheme } from "next-themes";

const ColorBox = styled("div", {
  size: "$3",
  borderRadius: "$2",
  variants: {
    color: {
      default: {
        background:
          "linear-gradient(100deg, $mauve12, $violet11)",
      },
      orange: {
        background: "linear-gradient(100deg, $sand12, $orange11)",
      },
      grass: {
        background: "linear-gradient(100deg, $sage12, $grass11)",
      },
      indigo: {
        background: "linear-gradient(100deg, $slate12, $indigo11)",
      },
      gold: {
        background: "linear-gradient(100deg, $sand12, $gold11)",
      },
    },
  },
});
export const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Select
      defaultValue={theme}
      onValueChange={(value) => {
        setTheme(value);
      }}
    >
      <SelectTriggerButton></SelectTriggerButton>
      <SelectContent>
        <SelectItem value={"light"}>
          <Stack
            direction={StackDirection.horizontal}
            style={{ alignItems: "center" }}
          >
            <ColorBox color={"default"} />
            Purple
          </Stack>
        </SelectItem>
        <SelectItem value={"dark"}>
          <Stack
            direction={StackDirection.horizontal}
            style={{ alignItems: "center" }}
          >
            <ColorBox color={"default"} />
            Purple-Dark
          </Stack>
        </SelectItem>
        <SelectItem value={"orange"}>
          <Stack
            direction={StackDirection.horizontal}
            style={{ alignItems: "center" }}
          >
            <ColorBox color={"orange"} />
            Orange
          </Stack>
        </SelectItem>
        <SelectItem value={"grass"}>
          <Stack
            direction={StackDirection.horizontal}
            style={{ alignItems: "center" }}
          >
            <ColorBox color={"grass"} />
            Grass
          </Stack>
        </SelectItem>
        <SelectItem value={"indigo"}>
          <Stack
            direction={StackDirection.horizontal}
            style={{ alignItems: "center" }}
          >
            <ColorBox color={"indigo"} />
            Indigo
          </Stack>
        </SelectItem>
        <SelectItem value={"gold"}>
          <Stack
            direction={StackDirection.horizontal}
            style={{ alignItems: "center" }}
          >
            <ColorBox color={"gold"} />
            Gold
          </Stack>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
