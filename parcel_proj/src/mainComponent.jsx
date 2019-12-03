import React from "react";
import { getDataMoon } from "./mainService";

export const FirstComponent = () => {
  const dataMoon = getDataMoon();

  return (
    <div>
      <span>Hello :) {dataMoon}</span>
    </div>
  );
};

//export const FirstComponent: React.FunctionComponent = () => {
