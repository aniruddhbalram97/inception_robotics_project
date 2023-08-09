import React from "react";
import styles from "./style.module.css";
function NiceDCV() {
  return (
    <div className={`${styles["nicedcv-container"]}`}>
      <iframe
        height={"98%"}
        width={"100%"}
        title={"nice_dcv"}
        src="https://127.0.0.1:5502/index.html"
      />
    </div>
  );
}

export default NiceDCV;
