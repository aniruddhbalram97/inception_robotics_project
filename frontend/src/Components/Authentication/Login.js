import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authToggle, setUserDetails } from "../../Redux/appReducer";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import styles from "./style.module.css";
function Login(props) {
  const theme = useSelector((state) => state.appReducer.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const body = { user_email: loginEmail, user_password: loginPassword };
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        props.setAuth(true);
        dispatch(setUserDetails(loginEmail));
        console.log("Successful Login");
        // navigate("/dashboard");w
      } else {
        props.setAuth(false);
        console.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Form className={`${styles["auth-form"]}`}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          className={`${styles["auth-control"]}`}
          type="email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          className={`${styles["auth-control"]}`}
          type="password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="text-center mt-4">
        <Button className={`${theme}-button`} onClick={handleLogin}>
          Login
        </Button>
      </Form.Group>
      <div className="text-center mt-3 pointer">
        <Form.Text
          className={`text-center ${theme}-ter-color`}
          onClick={() => dispatch(authToggle("register"))}
        >
          New? Create an Account!
        </Form.Text>
      </div>
    </Form>
  );
}

export default Login;
