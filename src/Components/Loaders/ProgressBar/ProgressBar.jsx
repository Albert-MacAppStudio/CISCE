import React, { useEffect, useState } from "react";
import "./ProgressBar.css";
const ProgressBar = (props) => {
  const { loading } = props;
  console.log(loading);
  useEffect(() => {
    let time = 1;
    let value = 0.000001;
    const interval = setInterval(() => {
      if (loading) {
        setTimer((prev) => prev + value);
        value = value + 0.000001;
        time = time + 1;
      }
      console.log(time);
    }, time);
    return () => clearInterval(interval);
  }, []);
  const [timer, setTimer] = useState(0);
  console.log(timer);
  // if (Math.round(timer * 100) >= 101) return null;
  if (!loading) return null;
  return (
    <div className="progress-bar">
      <progress value={timer} />
      <p>loading {Math.round(timer * 100000)}% </p>
    </div>
  );
};

export default React.memo(ProgressBar);
