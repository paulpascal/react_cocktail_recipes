import { ComponentMeta } from "@storybook/react";

import Logo from "./Logo";

export default {
  title: "Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const Primary = () => <Logo />;
