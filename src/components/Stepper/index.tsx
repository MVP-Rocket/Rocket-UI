import React, { useEffect } from "react";
import { colors, getBgColors } from "../../global";
import styled from "styled-components";

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
  const StepIndexDiv = styled.div`
    background-color: ${activeColor};
  `;
  return (
    <div>
      {steps.map((step) => (
        <div>
          <StepIndexDiv className="w-8 relative h-8 text-xs rounded-full">
            <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              1
            </span>
          </StepIndexDiv>
          <p>{step.name}</p>
        </div>
      ))}
    </div>
  );
}
