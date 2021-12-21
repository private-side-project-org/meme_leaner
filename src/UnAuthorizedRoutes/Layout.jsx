import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

Layout.propTypes = propTypes;

export default Layout;
