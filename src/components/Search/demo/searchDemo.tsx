import React, { useEffect, useState } from "react";
import Search from "../search";

const data = ["Paul", "Anna", "Eléonore", "Thomas", "Théo"];

export default function SearchDemo() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [results, setResults] = useState([""]);

  // Results demo
  useEffect(() => {
    data.map((str) => {
      searchValue
        ? str.includes(searchValue) &&
          !results.includes(str) &&
          setResults([...results, str])
        : setResults([]);
    });
  }, [searchValue]);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Search onChange={setSearchValue} results={results} />
    </div>
  );
}
