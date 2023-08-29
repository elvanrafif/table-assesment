import React from "react";

export const SearchBar = ({ setSearch }) => {
  return (
    <div>
      <input
        onChange={(val) => setSearch(val.target.value)}
        style={{ padding: "4px 8px" }}
        placeholder="Search by Name"
      />
    </div>
  );
};
