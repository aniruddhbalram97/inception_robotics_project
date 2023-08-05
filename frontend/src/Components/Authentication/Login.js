import React, { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { authToggle } from "../../Redux/appReducer";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import styles from "./style.module.css";
function Login() {
  const theme = useSelector((state) => state.appReducer.theme);
  const dispatch = useDispatch()
  
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  return (
    <Form className={`${styles["auth-form"]}`}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          className={`${styles["auth-control"]}`}
          type="email"
          placeholder="Enter email"
          value = {loginEmail}
          onChange={(e)=>setLoginEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          className={`${styles["auth-control"]}`}
          type="password"
          placeholder="Password"
          value = {loginPassword}
          onChange={(e)=>setLoginPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="text-center mt-4">
        <Button className={`${styles[`${theme}-auth-button`]}`} type="submit">
          Login
        </Button>
      </Form.Group>
      <div className="text-center mt-3 pointer">
        <Form.Text className={`text-center ${theme}-ter-color`} onClick={()=>dispatch(authToggle("register"))}>
          New? Create an Account!
        </Form.Text>
      </div>
    </Form>
  );
}

export default Login;
