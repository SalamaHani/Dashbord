import React from "react";
import { useRouteError } from "react-router";

function Errors() {
  const error = useRouteError();
  console.log(error);
  return <></>;
}

export default Errors;
