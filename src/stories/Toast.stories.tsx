import React from "react";
import Toast from "../components/Toast/toast";

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
    position: {
      options: ["top-left", "top-right", "bottom-left", "bottom-right"],
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

export const TopLeft = Template.bind({});
TopLeft.args = {
  position: "top-left",
};

export const TopRight = Template.bind({});
TopRight.args = {
  position: "top-right",
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  position: "bottom-left",
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  position: "bottom-right",
};

export const SlideUp = Template.bind({});
SlideUp.args = {
  animation: "slide-up",
};

export const ZoomIn = Template.bind({});
ZoomIn.args = {
  animation: "zoom-in",
};
