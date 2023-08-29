"use client";
import React, { useEffect, useState } from "react";
import { MainTable } from "./table";
import { SearchBar } from "./search";
import { FilterByGender, SortByAge } from "./filter";
import { Toggle } from "./Toggle";

export const TableMainComponents = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [sortAge, setSortAge] = useState("");
  const [users, setUsers] = useState([]);
  const [toggleData, setToggleData] = useState([]);

  const isMasking = toggleData?.includes("masking");
  const isSearch = toggleData?.includes("search");
  const isFilter = toggleData?.includes("filter");
  const isSort = toggleData?.includes("sort");
  const isDelete = toggleData?.includes("delete");
  const isNotFoundAndLoading = toggleData?.includes("notfound");

  const isAsc = sortAge === "asc";
  const isDesc = sortAge === "desc";

  const FetchData = () => {
    try {
      fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((res) => setUsers(res.users));
    } catch (error) {
      console.log("error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  const filterSearch = users?.filter(
    ({ firstName, lastName }) =>
      firstName?.toLowerCase().includes(search?.toLowerCase()) ||
      lastName?.toLowerCase().includes(search?.toLowerCase())
  );

  const filterGender = !gender
    ? filterSearch
    : filterSearch?.filter(({ gender: genderRaw }) => genderRaw === gender);

  const sortedNumbers = [...filterGender].sort((a, b) => {
    if (isAsc) return a.age - b.age;
    if (isDesc) return b.age - a.age;
    return a.id - b.id;
  });

  const handleDelete = (id) => {
    const filtered = users.filter((item) => item.id !== id);
    setUsers(filtered);
  };

  const isNotFound = !sortedNumbers.length;

  return (
    <div>
      <Toggle setToggleData={setToggleData} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          margin: "20px 0px",
        }}
      >
        {isSearch && <SearchBar setSearch={setSearch} />}
        {isFilter && <FilterByGender setGender={setGender} />}
        {isSort && <SortByAge setSortAge={setSortAge} />}
      </div>
      {loading ? (
        <h1>Loading.....</h1>
      ) : isNotFoundAndLoading && isNotFound ? (
        <h1>Not Found .....</h1>
      ) : (
        <MainTable
          users={sortedNumbers}
          handleDelete={handleDelete}
          isMasking={isMasking}
          isDelete={isDelete}
        />
      )}
    </div>
  );
};
