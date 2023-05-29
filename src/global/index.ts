import { DefaultColors } from "tailwindcss/types/generated/colors";

export type FlattenObject<T> = T extends object
  ? T[keyof T] extends object
    ? FlattenObject<T[keyof T]>
    : T[keyof T]
  : T;

export type TailwindColorsType = FlattenObject<
  DefaultColors[keyof DefaultColors]
>;
