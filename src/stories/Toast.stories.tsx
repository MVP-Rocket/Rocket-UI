import React from "react";
import Toast from "../components/Toast/toastDemo";

export default {
  component: Toast,
  argTypes: {
    type: {
      options: ["success", "error", "info"],
      control: "radio",
    },
    theme: {
      options: ["light", "dark"],
      control: "radio",
    },
    animation: {
      options: ["slide-up", "zoom-in"],
      control: "radio",
    },
  },
};

const Template = (args: any) => <Toast {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: "success",
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
};

export const Info = Template.bind({});
Info.args = {
  type: "info",
};

export const Light = Template.bind({});
Light.args = {
  theme: "light",
};

export const Dark = Template.bind({});
Dark.args = {
  theme: "dark",
};

export const SlideUp = Template.bind({});
SlideUp.args = {
  animation: "slide-up",
};

export const ZoomIn = Template.bind({});
ZoomIn.args = {
  animation: "zoom-in",
};
