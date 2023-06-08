import { createPortal } from "react-dom";
import {
  DateInputGroup,
  RadioButtonGroup,
} from "../../../FormElements/FormElements";
import useControlInput from "../../../../Hooks/useControlInput";
import "./FilterOverlay.css";
import { useFilterProvider } from "../../../../Context/Table/Filter/FilterProvider";
import { useId } from "react";
import { Add } from "../../../../Assets/Icon/Icons";
const FilterOverlay = (props) => {
  const { onClose, view, columns } = props;
  const id = useId();
  const { setFilter } = useFilterProvider();
  // initalize state using columns type
  const initializeState = () => {
    const initialStateObject = {};
    columns.forEach((col) => {
      if (col?.type === "date") {
        initialStateObject[col?.name + "from"] = "";
        initialStateObject[col?.name + "to"] = "";
      }
      if (col?.type === "singleSelect") {
        initialStateObject[col?.name] = col?.valueOptions[0];
      }
      if (col?.type === "boolean") {
        initialStateObject[col?.name] = false;
      }
    });
    return initialStateObject;
  };

  // controlling filter inputs using custom hook
  const { state, onChange, resetState } = useControlInput(initializeState);

  // function that updates filter on submit event
  const submit = (e) => {
    e.preventDefault();
    setFilter(state);
    onClose();
  };

  // function that render's differernt filter-items according to column type
  const renderFilterItem = (col, i) => {
    switch (col?.type) {
      case "singleSelect":
        return (
          <RadioButtonGroup
            key={id + i}
            data={col}
            onChange={onChange}
            state={state}
          />
        );
      case "boolean":
        return (
          <RadioButtonGroup
            key={id + i}
            data={col}
            onChange={onChange}
            state={state}
            variant="square"
          />
        );

      case "date":
        return (
          <DateInputGroup
            key={id + i}
            data={col}
            onChange={onChange}
            state={state}
          />
        );

      default:
        return false;
    }
  };

  // funciton clearing filter state, closes filter overlay and resets to intial state
  const clearFilters = () => {
    resetState();
    setFilter("");
    onClose();
  };

  // rendering modal according to view prop

  if (!view) return null;

  // creating a portal and rendering the pop up out side of #root , so that it does not disturb the component tree architecture,
  return createPortal(
    <div className="filter" onClick={onClose}>
      <form
        autoComplete="off"
        draggable="false"
        className="filter-content"
        onKeyUp={(e) => console.log(e)}
        onSubmit={submit}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="filter-content-header">
          <h2>filters</h2>
          <button type="button" onClick={onClose}>
            <Add />
          </button>
        </div>
        <div className="filter-content-main">
          {columns?.map((col, i) => renderFilterItem(col, i))}
        </div>
        <div className="filter-content-footer">
          <button type="submit">apply</button>
          <button type="button" onClick={clearFilters}>
            cancel
          </button>
        </div>
      </form>
    </div>,
    document.getElementById("modal")
  );
};

export default FilterOverlay;
