import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

import "./layout.scss";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Layout = () => {
  return (
    <div className="ml-5 layout-container">
      {/* This is like a `children` in older version of react router */}
      <Outlet />
    </div>
  );
};

Layout.propTypes = propTypes;

export default Layout;
