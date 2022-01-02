import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

import LayoutHeader from "./LayoutHeader/LayoutHeader";
import LayoutFooter from "./LayoutFooter/LayoutFooter";

import "./layout.scss";

const propTypes = {
  isButtonPressed: PropTypes.bool,
  setIsButtonPressed: PropTypes.func,
};

const Layout = ({ isButtonPressed, setIsButtonPressed }) => {
  return (
    <div className="layout-container">
      {isButtonPressed && <LayoutHeader />}
      {/* Outlet is like a `children` in older version of react router */}
      <Outlet />
      {isButtonPressed && (
        <LayoutFooter setIsButtonPressed={setIsButtonPressed} />
      )}
    </div>
  );
};

Layout.propTypes = propTypes;

Layout.defaultProps = {
  isButtonPressed: false,
  setIsButtonPressed: () => null,
};

export default Layout;
