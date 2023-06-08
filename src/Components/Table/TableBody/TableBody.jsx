import React, { useEffect, useId } from "react";
import Row from "../Row/Row";
import { useSortProvider } from "../../../Context/Table/Sort/SortProvider";
import { PageStateProvider } from "../../../Context/Table/Pagination/PageProvider";
import {
  UPDATE_CURRENT_PAGE,
  UPDATE_PAGE_LENGTH,
} from "../../../Context/Table/Pagination/pageConstants";
import { useFilterProvider } from "../../../Context/Table/Filter/FilterProvider";
import { useDataProvider } from "../../../Context/Table/Data/DataProvider";

const TableBody = (props) => {
  const { rows, options, searchStr, selected } = props;
  const { sort } = useSortProvider();
  const { page, dispatch } = PageStateProvider();
  const { filter } = useFilterProvider();
  const {
    data: { columns },
    setData,
  } = useDataProvider();
  const id = useId();

  // filtering data according to filters-state and search-state

  const filteredData = rows?.filter(
    (item) => checkSearchCondition(item) && filterItems(item)
  );
  // sorting the filtered data according to the sort state

  const sortedFilteredData = filteredData
    .slice()
    ?.sort((a, b) => sortItems(a, b));

  // finalising which two of data to paginate depending on sort state

  const finalData = sort ? sortedFilteredData : filteredData;

  // paginating data using filter method

  const paginatedData = finalData?.filter(
    (item, i) =>
      i >= page?.current * page?.size - page?.size &&
      i <= page?.current * page?.size - 1
  );

  //  updating rows on initial render
  useEffect(
    () => setData((prev) => ({ ...prev, rows: rows })),
    [setData, rows]
  );

  //updating final data according to filters state and search state
  useEffect(
    () => dispatch({ type: UPDATE_PAGE_LENGTH, payload: finalData?.length }),
    [finalData?.length, dispatch]
  );

  // changes current page to 1 when sort or search changes
  useEffect(
    () => dispatch({ type: UPDATE_CURRENT_PAGE, payload: 1 }),
    [dispatch, searchStr, sort]
  );

  //function checks the search condition and returns true or false

  function checkSearchCondition(data) {
    let result;
    options?.searchKey?.forEach((key) => {
      const str = String(data[key])?.toLowerCase();
      result = result || str?.startsWith(searchStr) || str?.includes(searchStr);
    });
    return result;
  }

  // function that uses filter state to filters items according to the item type

  function filterItems(item) {
    let result = true;
    if (filter) {
      const filterKeys = Object.keys(filter);
      filterKeys?.forEach((key) => {
        const type = columns?.find(
          (col) => col?.name === key || key?.includes(col?.name)
        )?.type;
        switch (type) {
          case "string":
          case "link":
          case "singleSelect":
            result = result && item[key]?.toLowerCase() === filter[key];
            break;
          case "boolean":
            result = result && item[key] === filter[key];
            break;

          case "date":
            if (key.includes("from")) {
              let extractedKey = key?.replace("from", "");
              result =
                result && new Date(item[extractedKey]) > new Date(filter[key]);
            }
            if (key.includes("to")) {
              let extractedKey = key?.replace("to", "");
              result =
                result && new Date(item[extractedKey]) < new Date(filter[key]);
            }
            break;
          default:
            return false;
        }
      });
      return result;
    }
    return true;
  }

  //  function that uses sortState to sort items according to the type

  function sortItems(a, b) {
    if (sort) {
      const currentKey = Object?.keys(sort);
      const type = columns?.find((col) => col.name === currentKey[0])?.type;

      const isAscending = sort[currentKey[0]] === "ASC";
      const isDescending = sort[currentKey[0]] === "DESC";

      switch (type) {
        case "number":
        case "boolean":
          if (isAscending) return a[currentKey[0]] - b[currentKey[0]];
          if (isDescending) return b[currentKey[0]] - a[currentKey[0]];
          break;

        case "singleSelect":
        case "link":
        case "string":
          if (isAscending)
            return a[currentKey[0]].localeCompare(b[currentKey[0]]);
          if (isDescending)
            return b[currentKey[0]].localeCompare(a[currentKey[0]]);
          break;

        case "date":
          if (isAscending)
            return new Date(a[currentKey[0]]) - new Date(b[currentKey[0]]);

          if (isDescending)
            return new Date(b[currentKey[0]]) - new Date(a[currentKey[0]]);
          break;

        default:
          return null;
      }
    }
  }

  return (
    <div className="tbody">
      {paginatedData?.length > 0 ? (
        paginatedData?.map((row, i) => (
          <Row
            selected={selected}
            key={id + i}
            searchStr={searchStr}
            options={options}
            data={row}
          />
        ))
      ) : (
        <div className="text-exception">no data found</div>
      )}
    </div>
  );
};

export default TableBody;
