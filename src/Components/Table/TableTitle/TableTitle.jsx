import React, { useState } from "react";
import FilterOverlay from "../Filter/FilterOverlay/FilterOverlay";
import { FormTextInput } from "../../FormElements/FormElements";
import { Filter, Search } from "../../../Assets/Icon/Icons";
import "./TableTitle.css";
import { PageStateProvider } from "../../../Context/Table/Pagination/PageProvider";
const TableTitle = (props) => {
  const { options, searchStr, onChange, columns } = props;
  // state for opening of the modal
  const [view, setView] = useState(false);

  const { page } = PageStateProvider();

  // function that returns a placeholder for the values specified in serachKey prop

  const getPlaceholder = () => {
    let str = "";
    columns
      ?.filter((col) => options?.searchKey?.some((key) => col.name === key))
      .forEach((item) => {
        str = str + " " + item?.headerName?.replaceAll(" ", "-");
      });
    return str?.trim()?.replaceAll(" ", " or ");
  };

  return (
    <div className="table-split">
      <div className="table-split-left">
        <h4 className="table-title">{options?.title}</h4>
        <p className="table-sub-title">{page?.length} members</p>
      </div>
      <div className="table-split-right">
        {options?.filterable && (
          <button
            title="Filter"
            onClick={() => setView(true)}
            className="filter-btn"
          >
            <Filter />
          </button>
        )}
        {options.searchable && (
          <FormTextInput
            Icon={Search}
            variant="with-icon"
            iconPosition="left"
            value={searchStr}
            onChange={(e) => onChange(() => e.target.value)}
            placeholder={`${getPlaceholder()}`}
          />
        )}
      </div>
      <FilterOverlay
        columns={columns}
        onClose={() => setView(false)}
        view={view}
      />
    </div>
  );
};

export default TableTitle;
