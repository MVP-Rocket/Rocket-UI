import React from "react";
import ToastCardDemo from "../components/Toast/demo/toastCardDemo";

export default {
  component: ToastCardDemo,
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
      options: ["slide", "zoom"],
      control: "radio",
    },
  },
};

const Template = (args: any) => <ToastCardDemo {...args} />;

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

export const Slide = Template.bind({});
Slide.args = {
  animation: "slide",
};

export const ZoomIn = Template.bind({});
ZoomIn.args = {
  animation: "zoom",
};
