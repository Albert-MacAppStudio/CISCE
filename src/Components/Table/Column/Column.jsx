import React from "react";
import { useSortProvider } from "../../../Context/Table/Sort/SortProvider";
import { useDataProvider } from "../../../Context/Table/Data/DataProvider";
import { Sort } from "../../../Assets/Icon/Icons";
import "./Column.css";

const Column = (props) => {
  const {
    data: { name, headerName },
  } = props;

  const {
    data: { columns },
  } = useDataProvider();

  const { sort, setSort } = useSortProvider() || {};

  // finding column width using columns array

  const columnWidth = columns?.find((col) => col?.name === name)?.width;

  // function that conditionally adds property and updates sort state on Click event

  const handleOnClick = () => {
    setSort(() => ({
      ...(!sort[name] && { [name]: "ASC" }),
      ...(sort[name] === "ASC" && { [name]: "DESC" }),
      ...(sort[name] === "DESC" && { [name]: "" }),
    }));
  };

  return (
    <div className={`th column ${columnWidth}`}>
      <span>{headerName}</span>
      <button
        className={sort[name] === "DESC" ? "btn-reverse" : ""}
        title="Sort"
        onClick={handleOnClick}
      >
        <Sort
          className={`arrow-icon ${!sort[name] ? "arrow-icon-disabled" : ""}`}
        />
      </button>
      <br />
    </div>
  );
};

export default Column;
