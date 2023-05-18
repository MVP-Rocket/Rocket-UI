import React from "react";
import { colors } from "../../global";

export interface Step {
  name: string;
  active: boolean;
}

export interface StepperProps {
  steps: Step[];
  animated?: true;
  disabledColor?: string;
  activeColor?: string;
}

export function Stepper({
  steps,
  activeColor = colors.primary,
  disabledColor = colors.disabled,
  animated = true,
}: StepperProps) {
  const activeColorText = `text-${activeColor}`;
  const activeColorBg = `bg-${activeColor}`;
  const disabledColorText = `text-${disabledColor}`;
  const disabledColorBg = `bg-${disabledColor}`;
  return (
    <div>
      {steps.map((step) => (
        <div>
          <div
            className={`${
              step.active ? activeColorBg : disabledColorBg
            } rounded-full`}
          >
            1
          </div>
          <p>{step.name}</p>
        </div>
      ))}
    </div>
  );
}
