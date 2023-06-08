import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import "./BreadCrumb.css";

const BreadCrumb = () => {
  const location = useLocation();
  const formatPath = () => {
    let arr = location.pathname.split("/");
    arr.shift();
    arr.pop();
    return arr;
  };
  const currentPath = formatPath();
  return (
    <div className="bread-crumb">
      {currentPath?.map((path, i) => (
        <Fragment key={i}>
          <Link> {path} </Link>
          <span>/</span>
        </Fragment>
      ))}
    </div>
  );
};

export default BreadCrumb;
