import React, { useState } from "react";
import SearchBar from "@/components/Search";
import DataContainer from "@/components/Data";

const data = [
  { id: 1,Roll: "Roll No. 1", Name: "Name: Mohan" },
  { id: 2,Roll: "Roll No. 2", Name: "Name: Sohan" },
  { id: 3,Roll: "Roll No. 3", Name: "Name: Shyam" },
  { id: 4,Roll: "Roll No. 4", Name: "Name: Ram" },
  { id: 5,Roll: "Roll No. 5", Name: "Name: Hacky" },
  { id: 6,Roll: "Roll No. 6", Name: "Name: Amit" },
  // Add more sample data here
];

const App1 = () => {
  const [search, setSearch] = useState("");
  const filteredData = data.filter((item) =>
    item.Roll.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <div className="flex justify-center m-4 text-3xl text-blue-900">HACKSLASH TASK-01</div>
    <div className="container w-full h-[100vh] mx-auto my-8 bg-orange-300">
      <SearchBar handleSearch={setSearch} />
      <DataContainer data={filteredData} />
    </div>
    </>
  );
};

export default App1;
