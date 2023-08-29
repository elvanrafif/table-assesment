"use client";
import React, { useEffect, useState } from "react";

export const Toggle = ({ setToggleData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [array, setArray] = useState(["table"]);

  const onOffFilter = (val) => {
    const value = val.target.value;
    const isIncludes = array.includes(value);
    const removeFilter = array.filter((item) => item !== value);

    if (isIncludes) return setArray(removeFilter);
    return setArray((p) => [...p, value]);
  };

  useEffect(() => {
    setToggleData(array);
  }, [array.length]);

  return (
    <div>
      <div
        style={{
          position: "fixed",
          zIndex: 99,
          bottom: 12,
          right: 12,
          border: "1px solid black",
          backgroundColor: "black",
          color: "white",
          padding: 12,
          borderRadius: 12,
          cursor: "pointer",
        }}
        onClick={() => setIsOpen((p) => !p)}
      >
        OBJECTIVE
      </div>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            zIndex: 99,
            bottom: 70,
            right: 12,
            backgroundColor: "white",
            border: "1px solid black",
            padding: 8,
          }}
        >
          <input
            type="checkbox"
            id="table"
            name="table"
            value="Bike"
            checked
            disabled
          />
          <label for="table"> Fetch Table</label>
          <br />
          <input
            type="checkbox"
            id="masking"
            name="masking"
            value="masking"
            onClick={onOffFilter}
          />
          <label for="masking"> Masking value</label>
          <br />
          <input
            type="checkbox"
            id="search"
            name="search"
            value="search"
            onClick={onOffFilter}
          />
          <label for="search"> Searchbar</label>
          <br />
          <input
            type="checkbox"
            id="notfound"
            name="notfound"
            value="notfound"
            onClick={onOffFilter}
          />
          <label for="notfound"> Not Found</label>
          <br />
          <input
            type="checkbox"
            id="filter"
            name="filter"
            value="filter"
            onClick={onOffFilter}
          />
          <label for="filter"> Filter</label>
          <br />
          <input
            type="checkbox"
            id="sort"
            name="sort"
            value="sort"
            onClick={onOffFilter}
          />
          <label for="sort"> Sort</label>
          <br />
          <input
            type="checkbox"
            id="delete"
            name="delete"
            value="delete"
            onClick={onOffFilter}
          />
          <label for="delete"> Delete</label>

          <br />
        </div>
      )}
    </div>
  );
};
