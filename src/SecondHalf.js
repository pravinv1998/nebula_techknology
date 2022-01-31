import React from "react";
import erp from "./assets/img/1.png";
import custom from "./assets/img/2.png";
import web from "./assets/img/3.png";
import product from "./assets/img/4.png";
import digital from "./assets/img/5.png";
import desktop from "./assets/img/6.png";
import android from "./assets/img/7.png";
import ios from "./assets/img/8.png";
import manpower from "./assets/img/9.png";

import "./App.css";

const data = [
  {
    id: 1,
    image: erp,
    name: "ERP Service",
  },
  {
    id: 2,
    image: custom,
    name: "Custom Software",
  },
  {
    id: 3,
    image: web,
    name: "Web Design and Development",
  },
  {
    id: 4,
    image: product,
    name: "Product Development",
  },
  {
    id: 5,
    image: digital,
    name: "Digital Marketing",
  },
  {
    id: 6,
    image: desktop,
    name: "Desktop Application",
  },
  {
    id: 7,
    image: android,
    name: "Android Application",
  },
  {
    id: 8,
    image: ios,
    name: "IOS Application",
  },
  {
    id: 9,
    image: manpower,
    name: "Manpower Provider",
  },
];

const SecondHalf = () => {
  return <div></div>;
};

export default data;
