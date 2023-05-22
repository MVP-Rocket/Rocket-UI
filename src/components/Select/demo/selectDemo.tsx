import React, { useState } from "react";
import Select from "../select";

export default function SelectDemo() {
  const options = ["Wade Cooper", "Arlene Mccoy", "Devon Webb", "Tom Cook"];
  const [chosenOption, setChosenOption] = useState<string>(options[0]);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col">
        <Select value={chosenOption} onChange={setChosenOption}>
          <Select.Options>{options}</Select.Options>
        </Select>
        <p className="mt-2 ml-1">Option choisie: {chosenOption}</p>
      </div>
    </div>
  );
}
