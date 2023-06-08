import React, { useEffect } from "react";
import ProgressBar from "../Components/Loaders/ProgressBar/ProgressBar";
import Spinner from "../Components/Loaders/Spinner/Spinner";

const WithLoading = (props) => {
  const { Component, Request } = props;
  const NewComponent = () => {
    const { status, sendRequest } = Request();
    useEffect(() => sendRequest(), []);
    if (status?.loading) return <Spinner />;
    if (status?.data)
      return React.cloneElement(Component, { rows: status?.data });
    if (status?.error) return <h1>{status?.error}</h1>;
  };
  return <NewComponent />;
};

export default WithLoading;
