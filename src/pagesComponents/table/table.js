"use client";
import React, { useState } from "react";

export const MainTable = ({ users, handleDelete, isMasking, isDelete }) => {
  const [idHover, setIdHover] = useState(false);
  return (
    <div style={{ textAlign: "center" }}>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Photo</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Company</th>
            <th>Title</th>
            {isDelete && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {users?.map((item, index) => {
            const { id, firstName, lastName, image, gender, company, age } =
              item || {};
            const isHover = id === idHover;
            const maskingGender = () => {
              if (isMasking) {
                if (gender === "male") return "M";
                return "F";
              }
              return gender;
            };
            return (
              <tr
                key={index}
                onMouseEnter={() => setIdHover(id)}
                onMouseLeave={() => setIdHover(false)}
                style={{
                  backgroundColor: isHover && "#d1d1d1",
                  transition: "all 300ms",
                }}
              >
                <td>{id}</td>
                <td>
                  {firstName} {lastName}
                </td>
                <td>
                  <img src={image} style={{ width: 40 }} />
                </td>
                <td>{age}</td>
                <td>{maskingGender()}</td>
                <td>{company?.name}</td>
                <td>{company?.title}</td>
                {isDelete && (
                  <td
                    onClick={() => handleDelete(id)}
                    style={{ cursor: "pointer" }}
                  >
                    <h5>X</h5>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
