import React from "react";



const DataContainer = ({ data }) => {
   
  return (
    <div className="grid grid-cols-1 gap-4 text-black sm:grid-cols-2 md:grid-cols-3">
      {data.map((item) => (
        <div
          key={item.id}
          className="p-4 text-blue-600 bg-white border border-gray-300 rounded shadow"
        >
          {/* Render your data fields here */}
          <p>{item.Roll}</p>
          <p>{item.Name}</p>
        </div>
      ))}
    </div>
  );
};

export default DataContainer;
