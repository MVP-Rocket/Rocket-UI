import React from "react";

import { Step, Stepper, StepperProps } from "../components/Stepper";

export default {
  component: Stepper,
};

const steps = [
  {
    name: "Stepper start",
    active: true,
  },
  {
    name: "Stepper middle",
    active: false,
  },
  {
    name: "Stepper end",
    active: false,
  },
];

export const StepperStory = {
  render: () => <Stepper steps={steps} />,
};
