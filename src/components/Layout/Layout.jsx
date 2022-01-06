import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import LayoutHeader from "./LayoutHeader/LayoutHeader";
import LayoutFooter from "./LayoutFooter/LayoutFooter";

import "./layout.scss";

const Layout = () => {
  // if you want to share states with nested routes
  // create state on parent routes and pass as `context`
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  return (
    <div className="layout-container">
      {isButtonPressed && <LayoutHeader />}
      {/* Outlet is like a `children` in older version of react router */}
      {/* Pass context props to share states */}
      <Outlet context={[isButtonPressed, setIsButtonPressed]} />
      {isButtonPressed && (
        <LayoutFooter setIsButtonPressed={setIsButtonPressed} />
      )}
    </div>
  );
};

export default Layout;
