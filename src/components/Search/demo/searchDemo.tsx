import React, { useState } from "react";
import Search from "../search";
import { heights, widths } from "../types/size";

export default function SearchDemo() {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="flex">
        <Search onChange={setSearchValue} />
      </div>
      <p className="mt-2">Recherche: {searchValue}</p>
    </div>
  );
}
