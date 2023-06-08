import { useState } from "react";

const useControlInput = (initial) => {
  const [state, setState] = useState(initial);
  const onChange = (e, valueType) => {
    const { name, value } = e.target;
    if (valueType === "boolean") {
      setState((prev) => ({
        ...prev,
        [name]: value === "false" ? false : true,
      }));
    } else {
      setState((prev) => ({ ...prev, [name]: value }));
    }
  };
  const resetState = () =>
    setState(() => (typeof initial === "function" ? initial() : initial));
  return { state, onChange, resetState };
};

export default useControlInput;
