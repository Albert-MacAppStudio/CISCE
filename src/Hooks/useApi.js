import axios from "axios";
import { useState } from "react";

const useApi = (url, options) => {
  const [status, setStatus] = useState({
    loading: true,
    data: [],
    error: "",
    time: 0,
  });

  const config = {
    url: url,
    ...options,
    config: {
      onUploadProgress: (e) => console.log(e),
    },
  };
  const sendRequest = () => {
    setStatus((prev) => ({ ...prev, time: performance.now() }));
    axios(config)
      .then((res) => {
        setStatus((prev) => ({
          loading: false,
          data: res.data,
          error: "",
          time: performance.now() - prev.time,
        }));
      })
      .catch((err) => {
        setStatus((prev) => ({
          loading: false,
          err: err?.message,
          data: [],
          time: performance.now() - prev.time,
        }));
      });
  };
  return { status, sendRequest };
};

export default useApi;
