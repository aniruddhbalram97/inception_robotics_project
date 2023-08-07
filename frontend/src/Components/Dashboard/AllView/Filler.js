import React from "react";
import { useSelector } from "react-redux";

import styles from "./style.module.css";

function Filler() {
  const theme = useSelector((state) => state.appReducer.theme);
  return (
    <div className={`${styles["filler"]} ${theme}-ter-color`}>
      Please Select a Robot for Details
    </div>
  );
}

export default Filler;
