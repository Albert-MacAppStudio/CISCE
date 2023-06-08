import { useEffect, useState } from "react";
import { PageStateProvider } from "../../../Context/Table/Pagination/PageProvider";
import {
  NEXT_PAGE,
  PREVIOUS_PAGE,
  UPDATE_CURRENT_PAGE,
  UPDATE_PAGE_SIZE,
} from "../../../Context/Table/Pagination/pageConstants";
import { NextArrow, TArrow } from "../../../Assets/Icon/Icons";
import "./TableFoot.css";
import { FormTextInput } from "../../FormElements/FormElements";
const TableFoot = (props) => {
  const { pageSize } = props;
  const { page, dispatch } = PageStateProvider();
  const [currentPage, setCurrentPage] = useState(1);

  // calulating total pages
  const totalPages = Math.ceil(page?.length / page?.size);

  //  calculating start of the page

  const rowStart =
    page?.length === 0 ? 0 : page.current * page.size - page?.size + 1;

  // calculating end of the page
  const rowEnd =
    page.current * page.size < page?.length
      ? page.current * page.size
      : page?.length;

  // updating page state on initial render
  useEffect(() => {
    dispatch({ type: UPDATE_PAGE_SIZE, payload: pageSize[0] });
  }, [dispatch, pageSize]);

  // updating current page when page size changes

  useEffect(() => {
    if (page?.current * page?.size > page?.length)
      return dispatch({
        type: UPDATE_CURRENT_PAGE,
        payload: Math.ceil(totalPages),
      });
  }, [page?.size, dispatch]); // eslint-disable-line

  useEffect(() => {
    if (currentPage > 0 && currentPage <= totalPages) {
      dispatch({ type: UPDATE_CURRENT_PAGE, payload: currentPage });
    }
  }, [dispatch, currentPage]); // eslint-disable-line

  // updating page size on onChange event
  const handleOnChange = (e, CONSTANT) => {
    const { value } = e.target;
    if (value > 0 && value <= totalPages && value === "") return;
    dispatch({ type: CONSTANT, payload: value && parseInt(value) });
  };

  // function that dispatches the type and size given as a parameter
  const handleOnClick = (type, size) => {
    dispatch({
      type: type,
      size: size,
    });
  };

  return (
    <div className="tfoot">
      <div className="tfoot-left">
        <p className="tfoot-text"> Rows per page :</p>
        <select
          value={page?.size}
          onChange={(e) => handleOnChange(e, UPDATE_PAGE_SIZE)}
          className="tfoot-select"
        >
          {pageSize?.map((page, i) => (
            <option key={i} value={page}>
              {page}
            </option>
          ))}
        </select>
        <p className="tfoot-text">
          {rowStart} - {rowEnd} of {page.length}
        </p>
      </div>
      <div className="tfoot-btns">
        <button
          onClick={() => {
            handleOnClick(PREVIOUS_PAGE, page.current <= 5 ? 1 : 5);
            setCurrentPage(() => (page.current <= 5 ? 1 : page.current - 5));
          }}
          disabled={page?.current <= 1 ? true : false}
          className="t-arrow-btn"
        >
          <TArrow />
        </button>
        <button
          disabled={page?.current <= 1 ? true : false}
          onClick={() => {
            handleOnClick(PREVIOUS_PAGE, 1);
            setCurrentPage(() => page?.current - 1);
          }}
          className="arrow-btn"
          id="arrow-btn-left"
          title="previous page"
        >
          <NextArrow />
        </button>
        <FormTextInput
          value={currentPage}
          onChange={(e) => {
            if (e.target.value <= totalPages) {
              setCurrentPage(() => e.target.value);
            }
          }}
        />
        <p>of {totalPages} pages</p>
        <button
          className="arrow-btn"
          disabled={page?.current * page?.size >= page?.length ? true : false}
          onClick={() => {
            handleOnClick(NEXT_PAGE, 1);
            setCurrentPage(() => page?.current + 1);
          }}
          title="next page"
        >
          <NextArrow />
        </button>

        <button
          onClick={() => {
            handleOnClick(
              NEXT_PAGE,
              page?.current + 5 > totalPages ? totalPages - page?.current : 5
            );
            setCurrentPage(() =>
              page?.current + 5 > totalPages
                ? page.current + totalPages - page?.current
                : page?.current + 5
            );
          }}
          className="t-arrow-btn"
          disabled={page?.current * page?.size >= page?.length ? true : false}
        >
          <TArrow />
        </button>
      </div>
    </div>
  );
};
export default TableFoot;
