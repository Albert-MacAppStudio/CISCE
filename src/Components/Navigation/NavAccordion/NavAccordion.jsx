import React, { useState } from "react";
import { Add, Remove } from "../../../Assets/Icon/Icons";
const NavAccordion = (props) => {
  const { title, children, Icon } = props;
  const [state, setState] = useState(false);
  const handleOnClick = (e) => {
    e.stopPropagation();
    setState((prev) => !prev);
  };
  return (
    <>
      <li
        onClick={handleOnClick}
        className={`nav-accordion nav-link-row ${
          state ? "nav-accordion-active" : ""
        }`}
      >
        <div className="nav-row">
          {Icon && (
            <span>
              <Icon />
            </span>
          )}
          <span className="link-text">{title}</span>
        </div>
        <span className="nav-row-right"> {state ? <Remove /> : <Add />}</span>
      </li>
      {state && <ul>{children}</ul>}
    </>
  );
};

export default NavAccordion;
