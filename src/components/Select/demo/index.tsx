import React, { useState } from "react";
import { heights, widths } from "../";
import Select from "../";

export default function SelectDemo() {
  const options = ["Wade Cooper", "Arlene Mccoy", "Devon Webb", "Tom Cook"];
  const [chosenOption, setChosenOption] = useState<string>("");
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col">
        <p className="mb-3 ml-1">Option choisie: {chosenOption}</p>
        <Select
          value={chosenOption}
          onChange={setChosenOption}
          height={heights.md}
          width={widths.md}
          placeholder="Choisissez un nom"
          noBorder
        >
          <Select.Options disconnected>{options}</Select.Options>
        </Select>
      </div>
    </div>
  );
}
