import React from "react";
import ToastContainerDemo from "../../components/Toast/demo/toastContainerDemo";

export default {
  component: ToastContainerDemo,
  argTypes: {
    position: {
      options: ["top-left", "top-right", "bottom-left", "bottom-right"],
      control: "radio",
    },
  },
};

const Template = (args: any) => <ToastContainerDemo {...args} />;

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
