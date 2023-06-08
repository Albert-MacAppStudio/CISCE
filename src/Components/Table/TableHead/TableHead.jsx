import React, { useEffect } from "react";
import Column from "../Column/Column";
import { useDataProvider } from "../../../Context/Table/Data/DataProvider";
import { RadioButton } from "../../FormElements/FormElements";
const TableHead = (props) => {
  const { data, setData } = useDataProvider();
  const { options } = props;
  // updating columns on initial render

  useEffect(
    () => setData((prev) => ({ ...prev, columns: props?.columns })),
    [setData, props?.columns]
  );

  return (
    <>
      <div className="thead">
        <div className="tr">
          {options?.checkboxSelection && (
            <div className="th column w-xxx-s-pc">
              <RadioButton
                data={{ name: "header name" }}
                state={{}}
                onChange={{}}
                variant="square"
              />
            </div>
          )}
          {data?.columns?.map((column, i) => (
            <Column key={i} data={column} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TableHead;
