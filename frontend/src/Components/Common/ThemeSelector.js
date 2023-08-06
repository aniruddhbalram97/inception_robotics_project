import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { themeSelector } from "./../../Redux/appReducer";

import { MdLightMode, MdDarkMode } from "react-icons/md";

import styles from "./style.module.css";
function ThemeSelector({ isOpen }) {
  const themes = ["dark", "light"];
  const theme = useSelector((state) => state.appReducer.theme);
  const dispatch = useDispatch();
  if (theme == "dark") {
    return (
      <div
        className={`${styles["theme-icon"]}`}
        onClick={() => dispatch(themeSelector("light"))}
      >
        <MdLightMode className={`${theme}-ter-color`} />
        {isOpen ? (
          <span className={`${theme}-ter-color font-link`}>Light</span>
        ) : null}
      </div>
    );
  } else {
    return (
      <div
        className={`${styles["theme-icon"]}`}
        onClick={() => dispatch(themeSelector("dark"))}
      >
        <MdDarkMode className={`${theme}-ter-color `} />
        {isOpen ? (
          <span className={`${theme}-ter-color font-link`}>Dark</span>
        ) : null}
      </div>
    );
  }
}

export default ThemeSelector;
