import React from "react";

import { CgLogOut } from "react-icons/cg";

import styles from "./style.module.css";
function Signout({ isOpen, setAuth }) {
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      console.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div
      className={`${styles["logout-button"]} font-icon`}
      onClick={handleLogout}
    >
      <CgLogOut />
      {isOpen ? <span>Logout</span> : null}
    </div>
  );
}

export default Signout;
