import React from "react";
import { getDataMoon } from "./mainService";

export const FirstComponent: React.FunctionComponent = () => {
  const dataMoon = getDataMoon();

  return (
    <div>
      <span>{dataMoon}</span>
    </div>
  );
};
