import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { BsFilePersonFill } from "react-icons/bs";

import styles from "./style.module.css";
function ProfileName({ isOpen }) {
  const theme = useSelector((state) => state.appReducer.theme);
  const profileName = useSelector((state) => state.appReducer.email);
  return (
    <div
      className={`${styles["profile-icon"]} font-icon ${theme}-ter-color text-align`}
    >
      <BsFilePersonFill className={"font-icon"} />
      {isOpen ? (
        <span>{profileName ? profileName.split("@")[0] : null}</span>
      ) : null}
    </div>
  );
}

export default ProfileName;
