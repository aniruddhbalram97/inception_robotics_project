import React from "react";
import styles from "./style.module.css";
function NiceDCV() {
  return (
    <div className={`${styles["nicedcv-container"]}`}>
      <iframe width={"100%"} height={"100%"} src="https://127.0.0.1:5501" />
    </div>
  );
}

export default NiceDCV;
