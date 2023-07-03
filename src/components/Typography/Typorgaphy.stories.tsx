import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { TypographyVariant, Color, TextAlign } from '../../utils/constants';

import Typography from "./Typography";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "HumusJS/Typography",
  component: Typography,
} as Meta<typeof Typography>;

const Template: StoryFn<typeof Typography> = (args) => <Typography {...args} />;

export const Lorem = Template.bind({});
Lorem.args = {
  variant: TypographyVariant.Text,
  color: Color.p0,
  textAlign: TextAlign.center,
  upperCase: false,
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  style: {},
  className: '',
};