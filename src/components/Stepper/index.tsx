import React, { useEffect } from "react";
import colors from "tailwindcss/colors";
import { DefaultColors } from "tailwindcss/types/generated/colors";
import CheckMark from "./../../assets/icons/check-mark.svg";
import { TailwindColorsType } from "../../global";
import { Step, textDirectionsType } from "./types";
import { animatedType } from "./types";
import { checkedType } from "./types";
import { SizesType } from "./types";
import { directions } from "./types";

export interface StepperProps {
  steps: Step[];
  animated?: animatedType[keyof animatedType];
  textColor?: TailwindColorsType;
  disabledColor?: TailwindColorsType;
  activeColor?: TailwindColorsType;
  checked?: checkedType[keyof checkedType];
  size?: SizesType[keyof SizesType][keyof SizesType[keyof SizesType]];
  direction?: directions;
  textDirection?:
    | textDirectionsType["col"]["left" | "right"]
    | textDirectionsType["row"]["top" | "bottom"];
}

export interface StepIndexProps {
  $disabled: boolean;
}

export const textDirections: textDirectionsType = {
  col: { left: "left", right: "right" },
  row: { top: "top", bottom: "bottom" },
};

export const animatedValues: animatedType = {
  true: true,
  false: false,
};

export const checkedValues: checkedType = {
  true: true,
  false: false,
};

export const sizes: SizesType = {
  responsive: { row: "w-full", col: "h-full" },
  xxl: { row: "w-96", col: "h-96" },
  xl: { row: "w-80", col: "h-80" },
  lg: { row: "w-64", col: "h-64" },
  md: { row: "w-52", col: "h-52" },
  sm: { row: "w-34", col: "h-34" },
  xs: { row: "w-20", col: "h-20" },
};

export function Stepper({
  steps,
  activeColor = colors.amber[500],
  disabledColor = colors.amber[500],
  textColor = colors.amber[500],
  animated = animatedValues.false,
  checked = checkedValues.true, // active check icons
  size = sizes.responsive.row, // sizes
  direction = directions.row,
  textDirection = textDirections.row.bottom,
}: StepperProps) {
  return (
    <div
      className={`flex w-full h-full ${
        direction === directions.row ? `flex-col` : `flex-row`
      }`}
    >
      <div
        className={`flex ${size} ${
          direction === directions.row ? "flex-row" : "flex-col"
        }`}
      >
        {steps.map((step, i) => (
          <div
            className={`flex ${
              direction === directions.row ? "flex-row" : "flex-col"
            } relative ${i !== 0 && "w-full h-full"}`}
          >
            {i === 0 || (
              <div
                className={`relative overflow-hidden flex flex-col justify-center items-center h-full w-full ${
                  direction === directions.row ? "mx-2" : "my-2 -ml-0.5"
                } `}
              >
                <div
                  style={{
                    backgroundColor: disabledColor,
                  }}
                  className={`${
                    direction === directions.row
                      ? "w-full h-1"
                      : "h-full w-1 left-1/2 -translate-1/2 absolute"
                  } rounded-full`}
                ></div>
                <div
                  style={{
                    backgroundColor: activeColor,
                  }}
                  className={`${
                    direction === directions.row
                      ? "w-full h-1"
                      : "h-full w-1 left-1/2 -translate-1/2"
                  } absolute ${
                    animated && "transition-all duration-300"
                  } rounded-full ${
                    direction === directions.col
                      ? step.active
                        ? "top-0"
                        : "-top-full"
                      : step.active
                      ? "left-0"
                      : "-left-full"
                  }`}
                ></div>
              </div>
            )}
            <div className="flex relative flex-col">
              <div
                style={{
                  backgroundColor: step.active ? activeColor : disabledColor,
                }}
                className={`w-8 shrink-0 self-center ${
                  animated && "transition-all duration-300 delay-200"
                } relative h-8 text-md rounded-full`}
              >
                <div className="relative text-white font-semibold left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                  <img
                    className={`absolute ${
                      animated && "transition-all duration-300 delay-300"
                    } top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ${
                      step.active && checked ? "opacity-100" : "opacity-0"
                    }`}
                    width={16}
                    src={CheckMark}
                    alt="check-mark"
                  />
                  <span
                    className={`absolute ${
                      animated && "transition-all duration-300 delay-200"
                    } top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ${
                      step.active && checked ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {i + 1}
                  </span>
                </div>
              </div>
              <p
                style={{
                  color: textColor,
                }}
                className={`absolute ${
                  direction === directions.row
                    ? "left-1/2 -translate-x-1/2 -ml-4 my-3"
                    : "top-1/2 -translate-y-1/2 right-full -mt-4 mx-3"
                } ${
                  direction === directions.row && textDirection === "top"
                    ? "bottom-full"
                    : "top-full"
                } ${
                  direction === directions.col && textDirection === "left"
                    ? "right-full"
                    : "left-full"
                } w-max`}
              >
                {step.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
