import * as React from "react";
import { DarkModeToggle } from "../src";
import * as Storybook from "@storybook/react";

export default {
  title: "Toggle",
  component: DarkModeToggle,
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
  },
} as Storybook.Meta;

const Template: Storybook.Story<Omit<DarkModeToggle.Props, "onChange">> = ({
  checked,
  ...rest
}) => {
  const [isDarkMode, setIsDarkMode] = React.useState(checked);

  return (
    <DarkModeToggle {...rest} checked={isDarkMode} onChange={setIsDarkMode} />
  );
};

export const StartingInLightMode = Template.bind({});
StartingInLightMode.args = {
  checked: false,
  speed: 1.3,
  size: 85,
};

export const StartingInDarkMode = Template.bind({});
StartingInDarkMode.args = {
  checked: true,
  speed: 1.3,
  size: 85,
};

export const Fast = Template.bind({});
Fast.args = {
  checked: false,
  speed: 2.3,
  size: 85,
};

export const Slow = Template.bind({});
Slow.args = {
  checked: false,
  speed: 0.3,
  size: 85,
};

export const SizeInPixels = Template.bind({});
SizeInPixels.args = {
  checked: false,
  speed: 1.3,
  size: "150px",
};

export const SizeInPercent = Template.bind({});
SizeInPercent.args = {
  checked: false,
  speed: 1.3,
  size: "35%",
};
