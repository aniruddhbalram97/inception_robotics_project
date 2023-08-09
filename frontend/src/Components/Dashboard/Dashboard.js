import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router";

import { setRequestedData } from "../../Redux/appReducer";
import Sidenav from "./Sidenav";
import MainView from "./MainView";

import styles from "./style.module.css";
function Dashboard() {
  const dispatch = useDispatch();
  const handleRequestData = async () => {
    try {
      const response = await fetch("http://localhost:5000/get_all_entries", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const requestedData = await response.json();
      console.log("requestedData", requestedData);
      dispatch(setRequestedData(requestedData));
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    handleRequestData();
  }, []);
  return (
    <div className={`${styles["dashboard-container"]} `}>
      <Sidenav />
      <MainView />
    </div>
  );
}

export default Dashboard;
