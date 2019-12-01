import React from "react";
import ReactDOM from "react-dom";
import { FirstComponent } from "./mainComponent.jsx";
import "./mainStyle.scss";
import logoImg from "./content/logo_1.png";
import logoMoon from "./content/moon.jpg";

// const logoImg = require("./content/logo_1.png");
// const logoMoon = require("./content/moon.jpg");

const nameProjectProgrammer = "Laura";
const messageToDisplay = `This project is created by ${nameProjectProgrammer}`;
document.write(messageToDisplay);

const img = document.createElement("img");
const imgMoon = document.createElement("img");

img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);
imgMoon.src = logoMoon;
document.getElementById("imageToMoon").appendChild(imgMoon);

ReactDOM.render(
  <div>
    <h1>My First component with React </h1>
    <FirstComponent />
  </div>,
  document.getElementById("root")
);
