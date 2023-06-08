import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PageElements from "./PageElements";
import "./Layout.css";
import Navigation from "../Components/Navigation/Navigation";
import NavGuideProvider from "../Context/Navigation/NavGuideProvider";
import { BurgerMenu } from "../Assets/Icon/Icons";
import TopBar from "../Components/TopBar/TopBar";
const Layout = () => {
  const { pages } = PageElements();
  const [state, setState] = useState(false);
  console.log(state);
  return (
    <div className="app-container">
      <NavGuideProvider>
        <Navigation state={state} onClose={() => setState(false)} />
      </NavGuideProvider>
      <main className="content">
        <div className="main-container">
          <TopBar />
          <button onClick={() => setState(true)}>
            <BurgerMenu />
          </button>
          <Routes>
            {pages?.map(({ route, Component }, i) => {
              return <Route key={i} path={route} element={<Component />} />;
            })}
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Layout;
