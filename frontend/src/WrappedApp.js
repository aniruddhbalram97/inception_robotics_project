import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

import { setIsAuthenticated } from "./Redux/appReducer";
import Auth from "./Components/Authentication/Auth";
import Dashboard from "./Components/Dashboard/Dashboard";
import InfoToast from "./Components/Common/InfoToast";

import "./App.css";
function WrappedApp() {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state) => state.appReducer.isAuthenticated
  );

  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();
      if (parseRes == true) {
      }
      parseRes === true
        ? dispatch(setIsAuthenticated(true))
        : dispatch(setIsAuthenticated(false));
    } catch (err) {
      console.error(err.message);
    }
  };

  const PrivateRoutes = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/auth" />;
  };
  const AnonymousRoute = () => {
    return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
  };
  useEffect(() => {
    checkAuthenticated();
  }, [isAuthenticated]);

  return (
    <React.Fragment>
      <InfoToast />
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Dashboard />} exact />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<AnonymousRoute />}>
            <Route path="/auth" element={<Auth />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default WrappedApp;
