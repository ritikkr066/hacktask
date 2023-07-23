import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="flex justify-center my-4 ">
      <input
        type="text"
        className="w-1/2 p-2 border border-gray-300 rounded shadow-sm bg-slate-200 focus:ring focus:ring-blue-200 focus:border-blue-500"
        placeholder="Search By Roll No. . . . "
        onChange={(e) => handleSearch(e.target.value)}
        
      />
    </div>
  );
};

export default SearchBar;
