import React from "react";

import { CgLogOut } from "react-icons/cg";

import styles from "./style.module.css";
function Signout({ isOpen }) {
  return (
    <div className={`${styles["logout-button"]} font-icon`}>
      <CgLogOut />
      {isOpen ? <span>Logout</span> : null}
    </div>
  );
}

export default Signout;
