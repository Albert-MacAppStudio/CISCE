import Dashboard from "./Dashboard/Dashboard";

const PageElements = () => {
  const pages = [
    {
      route: "registration/dashboard",
      Component: Dashboard,
    },
  ];
  return { pages };
};

export default PageElements;
