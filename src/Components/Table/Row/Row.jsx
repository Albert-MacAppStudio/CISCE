import { useDataProvider } from "../../../Context/Table/Data/DataProvider";
import { Link } from "react-router-dom";
import { RadioButton } from "../../FormElements/FormElements";

const Row = (props) => {
  const { data, searchStr, options, selected } = props;
  const dataKeys = Object?.keys(data ?? {});
  const {
    data: { columns },
  } = useDataProvider();
  // function that highlight's text accoriding to search string
  const higlightText = (text) => {
    let string = String(data[text])?.toLowerCase();
    if (searchStr && options?.searchKey?.includes(text))
      return string
        ?.replace(searchStr, `,${searchStr},`)
        .split(",")
        .map((str, i) =>
          str === searchStr ? (
            <mark key={i}>{str}</mark>
          ) : (
            str && <span key={i}>{str}</span>
          )
        );
    return string;
  };

  // function that renders different type of items according to column type

  const renderRowItems = (item, i) => {
    let currentColumn = columns.find((col) => col.name === item);

    switch (currentColumn?.type) {
      case "boolean":
        return data[item] === false ? "no" : "yes";
      case "link":
        return (
          <Link draggable="false" to={currentColumn?.getPath(undefined, data)}>
            {higlightText(item)}
          </Link>
        );
      default:
        return higlightText(item);
    }
  };
  return (
    <div className="tr">
      {options?.checkboxSelection && (
        <div className="td w-xxx-s-pc">
          <RadioButton
            data={{ name: "header name" }}
            state={{}}
            onChange={() => selected?.handleSelectedRows(data?.index_number)}
            variant="square"
          />
        </div>
      )}
      {dataKeys.map((key, i) => {
        let currentColumn = columns[i]?.name;
        const columnWidth = columns?.find(
          (col) => col.name === currentColumn
        )?.width;
        const columnNameArray = columns?.map((col) => col?.name);
        return (
          columnNameArray.find((col) => col === currentColumn) && (
            <div className={`td ${columnWidth}`} key={i}>
              {renderRowItems(currentColumn, i)}
            </div>
          )
        );
      })}
    </div>
  );
};

export default Row;
