import React from "react";
import { Routes, Route } from "react-router";

import Sidenav from "./Sidenav";
import AllView from "./AllView/AllView";
import MainView from "./MainView";

import styles from "./style.module.css";
function Dashboard() {
  return (
    <div className={`${styles["dashboard-container"]} `}>
      <Sidenav />
      <MainView />
    </div>
  );
}

export default Dashboard;
