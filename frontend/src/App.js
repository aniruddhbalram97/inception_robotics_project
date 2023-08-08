import React, { useEffect, useState } from "react";
import store from "./Redux/store";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

import Auth from "./Components/Authentication/Auth";
import Dashboard from "./Components/Dashboard/Dashboard";

import "./App.css";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();
      if (parseRes == true) {
      }
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
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
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route
                path="/"
                element={<Dashboard setAuth={setIsAuthenticated} />}
                exact
              />
              <Route
                path="/dashboard"
                element={<Dashboard setAuth={setIsAuthenticated} />}
              />
            </Route>
            <Route element={<AnonymousRoute />}>
              <Route
                path="/auth"
                element={<Auth setAuth={setIsAuthenticated} />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
