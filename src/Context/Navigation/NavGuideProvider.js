import React, { createContext, useContext, useState } from "react";
const NavGuideContext = createContext();
const NavGuideProvider = (props) => {
  const { children } = props;
  const [guideData, setGuideData] = useState("");
  return (
    <NavGuideContext.Provider value={{ guideData, setGuideData }}>
      {children}
    </NavGuideContext.Provider>
  );
};

export default NavGuideProvider;

export const useNavGuideData = () => useContext(NavGuideContext);
