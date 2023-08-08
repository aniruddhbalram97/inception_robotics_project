import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { resetState } from "../../Redux/appReducer";

import { CgLogOut } from "react-icons/cg";

import styles from "./style.module.css";
function Signout({ isOpen, setAuth }) {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      dispatch(resetState());
      setAuth(false);

      console.log("Logout successfully");
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
