import { createContext, useContext, useState } from "react";

const FilterContext = createContext();
const FilterProvider = (props) => {
  const { children } = props;
  const [filter, setFilter] = useState("");
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;

export const useFilterProvider = () => useContext(FilterContext);
