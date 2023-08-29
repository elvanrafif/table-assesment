import React from "react";

export const FilterByGender = ({ setGender }) => {
  return (
    <div>
      <select
        name="gender"
        id="gender"
        onChange={(val) => setGender(val.target.value)}
        style={{ padding: "4px 8px" }}
      >
        <option value="" defaultChecked>
          Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

export const SortByAge = ({ setSortAge }) => {
  return (
    <div>
      <select
        name="gender"
        id="gender"
        onChange={(val) => setSortAge(val.target.value)}
        style={{ padding: "4px 8px" }}
      >
        <option value="def" defaultChecked>
          Sort age
        </option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};
