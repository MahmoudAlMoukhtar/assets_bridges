import React from "react";
import {Redirect} from "react-router-dom";

const PrivaitRoute = ({children}) => {
  const user = JSON.parse(localStorage.getItem("assetsBridges"));

  if (!user) {
    return <Redirect to="/admin/auth" />;
  }

  return children;
};

export default PrivaitRoute;
