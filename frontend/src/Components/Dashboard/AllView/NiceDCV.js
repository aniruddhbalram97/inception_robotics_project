import React from "react";
import styles from "./style.module.css";
function NiceDCV() {
  return (
    <div className={`${styles["nicedcv-container"]}`}>
      <iframe height={"100%"} width={"100%"} src="https://127.0.0.1:5501" />
    </div>
  );
}

export default NiceDCV;
