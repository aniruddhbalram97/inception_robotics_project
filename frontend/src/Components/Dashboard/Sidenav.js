import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import ThemeSelector from "../Common/ThemeSelector";
import Signout from "./Signout";
import ProfileName from "./ProfileName";
import { toggleView } from "../../Redux/appReducer";

import { FaTh, FaBars, FaRegChartBar } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

import styles from "./style.module.css";
const Sidenav = ({ children }) => {
  const theme = useSelector((state) => state.appReducer.theme);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      name: "Summary",
      icon: <FaTh />,
    },
    {
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
  ];
  return (
    <div
      className={`${!isOpen ? styles["sidebar-closed"] : ""} ${
        styles["sidebar"]
      } ${theme}-bg`}
    >
      <div className={`${styles["sidebar-top-section"]}`}>
        <div
          // style={{ marginLeft: isOpen ? "50px" : "0px" }}
          className={`${styles["sidebar-hambar"]} ${theme}-ter-color`}
        >
          {isOpen ? (
            <AiOutlineArrowLeft onClick={toggle} />
          ) : (
            <FaBars onClick={toggle} />
          )}
        </div>
      </div>
      <div className={`${styles["sidebar-link-section"]}`}>
        {menuItem.map((item, index) => (
          <a
            onClick={() => dispatch(toggleView(item.name))}
            className={`${styles[`${theme}-sidebar-link`]}`}
          >
            <div className={`font-icon`}>{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className={`font-link`}
            >
              {item.name}
            </div>
          </a>
        ))}
      </div>

      <div className={`${styles["sidebar-footer"]}`}>
        <ProfileName isOpen={isOpen} />
        <ThemeSelector isOpen={isOpen} />
        <Signout isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Sidenav;
