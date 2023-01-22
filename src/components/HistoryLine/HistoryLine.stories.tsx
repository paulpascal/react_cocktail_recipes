import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import HistoryLine from "./HistoryLine";

export default {
  title: "HistoryLine",
  component: HistoryLine,
} as ComponentMeta<typeof HistoryLine>;

const Template: ComponentStory<typeof HistoryLine> = (args) => (
  <HistoryLine {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  date: new Date().toString(),
  search: "island",
  url: "www.site?s=island",
};
