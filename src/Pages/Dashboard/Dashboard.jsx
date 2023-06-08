import DataTable from "../../Components/Table/DataTable/DataTable";
import Page from "../../Components/Page/Page";

const columns = [
  {
    name: "name",
    headerName: "name",
    type: "link",
    width: "w-x-s-pc",
    getPath: (name = "name", data) => `somePath/${data[name]}`,
  },
  {
    name: "family",
    headerName: "family",
    type: "string",
    width: "w-x-s-pc",
  },
  { name: "email", headerName: "email", type: "string", width: "w-m-pc" },
  {
    name: "dob",
    headerName: "date of birth",
    type: "date",
    width: "w-s-pc",
  },
  {
    name: "gender",
    headerName: "gender",
    type: "singleSelect",
    valueOptions: ["male", "female"],

    width: "w-x-s-pc",
  },
  {
    name: "isNorthener",
    headerName: "Northener",
    type: "boolean",
    valueOptions: [true, false],

    width: "w-x-s-pc",
  },
];

const rows = [
  {
    name: "arya",
    email: "arya@winterfell.com",
    dob: "1996-12-29",
    gender: "female",
    family: "stark",
    isNorthener: true,
  },
  {
    name: "sansa",
    email: "sansa@winterfell.com",
    dob: "1992-2-3",
    gender: "female",
    family: "stark",
    isNorthener: true,
  },
  {
    name: "brandon",
    email: "brandon@winterfell.com",
    dob: "1999-10-19",
    gender: "male",
    family: "stark",
    isNorthener: true,
  },
  {
    name: "rickon",
    email: "rickon@winterfell.com",
    dob: "1999-12-29",
    gender: "male",
    family: "stark",
    isNorthener: true,
  },
  {
    name: "robb",
    email: "robb@winterfell.com",
    dob: "1981-4-20",
    family: "stark",
    gender: "male",
    isNorthener: true,
  },
  {
    name: "jon",
    email: "jon@winterfell.com",
    dob: "1982-1-9",
    family: "stark",
    gender: "male",
    isNorthener: true,
  },
  {
    name: "Eddard",
    email: "Eddard@winterfell.com",
    dob: "1956-1-2",
    family: "stark",
    gender: "male",
    isNorthener: true,
  },
  {
    name: "catelyn",
    email: "catelyn@winterfell.com",
    dob: "1960-6-2",
    family: "stark",
    gender: "female",
    isNorthener: true,
  },
  {
    name: "jaime",
    email: "jaime@lannister.com",
    dob: "1975-7-6",
    family: "lanister",
    gender: "male",
    isNorthener: false,
  },
  {
    name: "cersei",
    email: "cersei@lannister.com",
    dob: "1975-3-8",
    family: "lanister",
    gender: "female",
    isNorthener: false,
  },
  {
    name: "tyrion",
    email: "tyrion@lannister.com",
    dob: "1978-11-23",
    family: "lanister",
    gender: "male",
    isNorthener: false,
  },
  {
    name: "tywin",
    email: "tywin@lannister.com",
    dob: "1940-4-11",
    family: "lanister",
    gender: "male",
    isNorthener: false,
  },
  {
    name: "joffery",
    email: "joffery@lannister.com",
    dob: "1993-9-3",
    gender: "male",
    family: "baratheon",
    isNorthener: false,
  },
  {
    name: "robert",
    email: "robert@baratheon.com",
    dob: "1948-2-7",
    gender: "male",
    family: "baratheon",
    isNorthener: false,
  },
  {
    name: "stannis",
    email: "stannis@baratheon.com",
    dob: "1952-9-23",
    gender: "male",
    family: "baratheon",
    isNorthener: false,
  },
  {
    name: "renly",
    email: "robert@baratheon.com",
    dob: "1988-2-7",
    gender: "male",
    family: "baratheon",
    isNorthener: false,
  },
  {
    name: "gendry",
    email: "gendery@baratheon.com",
    gender: "male",
    dob: "1990-7-12",
    family: "baratheon",
    isNorthener: false,
  },
  {
    name: "aerys",
    email: "aerys@targaryen.com",
    gender: "male",
    dob: "1922-9-12",
    family: "targaryen",
    isNorthener: false,
  },
  {
    name: "rahegar",
    email: "rahegar@targaryen.com",
    gender: "male",
    dob: "1950-3-17",
    family: "targaryen",
    isNorthener: false,
  },

  {
    name: "aemon",
    email: "aemon@targaryen.com",
    gender: "male",
    dob: "1926-5-13",
    family: "targaryen",
    isNorthener: false,
  },
  {
    name: "denaerys",
    email: "denaerys@targaryen.com",
    gender: "female",
    dob: "1979-2-29",
    family: "targaryen",
    isNorthener: false,
  },
  {
    name: "viserys",
    email: "viserys@targaryen.com",
    gender: "male",
    dob: "1976-3-19",
    family: "targaryen",
    isNorthener: false,
  },
];
const options = {
  title: "Family of the 7 kingdoms",
  searchKey: ["name", "famliy"],
  pageSize: [10, 15],
  searchable: true,
  filterable: true,
};
const Dashboard = () => {
  return (
    <Page title="Dashboard">
      <DataTable rows={rows} columns={columns} options={options} />
    </Page>
  );
};

export default Dashboard;
