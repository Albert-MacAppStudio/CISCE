import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

import "./Page.css";
const Page = (props) => {
  const { children, title } = props;
  return (
    <section className="page">
      <div className="page-header">
        <BreadCrumb />
        <h1 className="page-title">{title}</h1>
      </div>
      <div className="page-body">{children}</div>
    </section>
  );
};

export default Page;
