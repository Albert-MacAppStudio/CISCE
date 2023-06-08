import useApi from "../Hooks/useApi";

const GetUser = () =>
  useApi("https://jsonplaceholder.typicode.com/users", { method: "GET" });

export { GetUser };
