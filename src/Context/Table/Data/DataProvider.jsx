import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();
const DataProvider = (props) => {
  const { children } = props;
  const [data, setData] = useState({ columns: [], rows: [] });
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

export const useDataProvider = () => useContext(DataContext);
