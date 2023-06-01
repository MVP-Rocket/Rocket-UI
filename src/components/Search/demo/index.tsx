import React, { useEffect, useState } from "react";
import Search from "../";
import colors from "tailwindcss/colors";

const data = [
  { id: 0, name: "Timéo" },
  { id: 1, name: "Titouan" },
  { id: 2, name: "Tamara" },
  { id: 3, name: "Thomas" },
  { id: 4, name: "Théo" },
  { id: 5, name: "Thésée" },
  { id: 6, name: "Tristan" },
  { id: 7, name: "Tatiana" },
];

export default function SearchDemo() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [results, setResults] = useState([""]);

  // Results demo
  useEffect(() => {
    data.map((str) => {
      searchValue
        ? str.name.includes(searchValue) &&
          !results.includes(str.name) &&
          setResults([...results, str.name])
        : setResults([]);
    });
  }, [searchValue]);

  useEffect(() => {
    console.log(results);
  }, [results]);

  function handleSearch() {
    console.log("endSearch!");
  }

  function clickOnResult(id: number) {
    console.log("clicking on a result!", id);
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Search
        onChange={setSearchValue}
        results={results}
        onEndSearch={handleSearch}
        clickOnResult={clickOnResult}
        hoverColor={colors.blue["500"]}
      />
    </div>
  );
}
