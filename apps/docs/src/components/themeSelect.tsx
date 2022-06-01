import {
  Select,
  SelectContent,
  SelectTriggerButton,
  SelectItem,
  styled,
  Stack,
  StackDirection,
} from "@pear-ui/core";
const ColorBox = styled("div", {
  size: "$3",
  borderRadius: "$2",
  variants: {
    color: {
      default: {
        background: "linear-gradient(100deg, $mauve12, $violet11)",
      },
      oranje: {
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
  return (
    <Select defaultValue={"default"}>
      <SelectTriggerButton></SelectTriggerButton>
      <SelectContent>
        <SelectItem value={"default"}>
          <Stack
            direction={StackDirection.horizontal}
            style={{ alignItems: "center" }}
          >
            <ColorBox color={"default"} />
            Default
          </Stack>
        </SelectItem>
        <SelectItem value={"oranje"}>
          <Stack
            direction={StackDirection.horizontal}
            style={{ alignItems: "center" }}
          >
            <ColorBox color={"oranje"} />
            Oranje
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
        <SelectItem value={"Gold"}>
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
