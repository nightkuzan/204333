// เอกฤทธิ์ สุฤทธิ์ 630510607
// ธนดล ปัญญา 630510623

import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TableBootstrap from "react-bootstrap/Table";

const App = () => {
  const [hasError, setErrors] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(async () => {
    const response = await fetch("http://localhost:3000/teacher");
    const json = await response.json();
    setUser(json);
  });
  console.log(user);
  return (
    <div>
      <p> รายชื่ ออาจารย์ </p>
      <table>
        <th>
          {" "}
          คำนำหน้ า{" "}
          {user.map((row, index) => (
            <tr key={index}>
              <td> {row.title} </td>
            </tr>
          ))}{" "}
        </th>{" "}
        <th>
          {" "}
          ชื่ อ{" "}
          {user.map((row, index) => (
            <tr key={index}>
              <td> {row.firstName} </td>
            </tr>
          ))}{" "}
        </th>
        <th>
          {" "}
          นามสกุล{" "}
          {user.map((row, index) => (
            <tr key={index}>
              <td> {row.lastName} </td>
            </tr>
          ))}{" "}
        </th>{" "}
        <th>
          {" "}
          วิชา{" "}
          {user.map((row, index) => (
            <tr key={index}>
              <td> {row.subject} </td>
            </tr>
          ))}{" "}
        </th>{" "}
      </table>{" "}
    </div>
  );
};
export default App;
