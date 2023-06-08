import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationLink.css";
const NavigationLink = (props) => {
  const { item, path, Icon } = props;

  return (
    <li title={item?.name} className="nav-link">
      <NavLink to={path.split(" ").join("/")}>
        <div className="nav-row">
          {Icon && item?.variant && (
            <span>
              <Icon />
            </span>
          )}
          <span className="link-text">{item?.name}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default NavigationLink;
