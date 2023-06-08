import React, { createContext, useContext, useState } from "react";
const SortContext = createContext();
const SortProvider = (props) => {
  const { children } = props;
  const [sort, setSort] = useState("");
  return (
    <SortContext.Provider value={{ sort, setSort }}>
      {children}
    </SortContext.Provider>
  );
};

export default SortProvider;

export const useSortProvider = () => useContext(SortContext);
