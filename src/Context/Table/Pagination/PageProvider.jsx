import React, { createContext, useContext, useReducer } from "react";
import pageReducer from "./pageReducer";
const PageContext = createContext();
const PageProvider = (props) => {
  const initialState = {
    size: 1,
    current: 1,
    length: 1,
  };
  const { children } = props;
  const [page, dispatch] = useReducer(pageReducer, initialState);
  return (
    <PageContext.Provider value={{ page, dispatch }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;

export const PageStateProvider = () => useContext(PageContext);
