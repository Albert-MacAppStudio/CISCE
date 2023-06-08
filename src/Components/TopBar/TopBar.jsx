import React, { useEffect, useRef, useState } from "react";
import "./TopBar.css";
import {
  BurgerMenu,
  NextArrow,
  Profile,
  Setting,
  Support,
} from "../../Assets/Icon/Icons";
const TopBar = () => {
  return (
    <div className="topbar">
      <button>
        <BurgerMenu />
      </button>
      <div className="topbar-left">
        <TopBarItem Icon={Support} text="help" />
        <TopBarItem Icon={Setting} text="settings" />
        <TopBarItem Icon={Profile} text="profile" />
      </div>
    </div>
  );
};

export default TopBar;

export const TopBarItem = (props) => {
  const { Icon, text, menuItems } = props;
  const [view, setView] = useState(false);
  console.log(view);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!ref?.current?.contains(e.target)) {
        setView(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [setView]);
  return (
    <div className="topbar-item">
      <button
        onClick={() => setView((prev) => !prev)}
        className="topbar-item-btn"
      >
        <Icon />
        <span>{text}</span>
        <NextArrow />
      </button>
      <TopBarMenu menuref={ref} view={view} onClose={() => setView(false)} />
    </div>
  );
};

export const TopBarMenu = (props) => {
  const { view, children, menuref } = props;
  if (!view) return null;
  return (
    <div ref={menuref} className="topbar-menu">
      <ul>
        <li>list item</li>
        <li>list item</li>
      </ul>
    </div>
  );
};
