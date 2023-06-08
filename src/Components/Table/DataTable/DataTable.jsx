import React, { useState } from "react";
import TableHead from "../TableHead/TableHead";
import TableBody from "../TableBody/TableBody";
import TableFoot from "../TableFoot/TableFoot";
import DataProvider from "../../../Context/Table/Data/DataProvider";
import PageProvider from "../../../Context/Table/Pagination/PageProvider";
import FilterProvider from "../../../Context/Table/Filter/FilterProvider";
import SortProvider from "../../../Context/Table/Sort/SortProvider";
import TableTitle from "../TableTitle/TableTitle";
import "./DataTable.css";
const DataTable = (props) => {
  const { columns, rows, options } = props;
  const [state, onChange] = useState("");

  return (
    <div className="table">
      <DataProvider>
        <SortProvider>
          <FilterProvider>
            <PageProvider>
              <TableTitle
                options={options}
                searchStr={state}
                columns={columns}
                onChange={onChange}
              />
              <div className="table-main">
                <TableHead options={options} columns={columns} />
                <TableBody options={options} searchStr={state} rows={rows} />
              </div>
              <TableFoot pageSize={options?.pageSize} />
            </PageProvider>
          </FilterProvider>
        </SortProvider>
      </DataProvider>
    </div>
  );
};

export default DataTable;
