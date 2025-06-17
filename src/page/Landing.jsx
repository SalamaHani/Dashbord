import React from "react";
import CartStata from "../components/CartStata";
import ContenerChart from "../components/ContenerChart";
import { Outlet } from "react-router";

function Landing() {
  return (
    <div className="dark:bg-gray-900">
      <CartStata />
      <ContenerChart />
      <Outlet />
    </div>
  );
}

export default Landing;
