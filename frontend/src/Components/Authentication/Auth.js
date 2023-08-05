import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Login from "./Login";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import styles from "./style.module.css";
import Registration from "./Registration";
function Auth() {
  const theme = useSelector((state) => state.appReducer.theme);
  const auth = useSelector((state)=> state.appReducer.auth)

  const AuthForm = () => {
    if (auth == "login") {
      return <Login />;
    } else {
      return <Registration />;
    }
  };
  return (
    <Container
      className={`${styles["auth-container"]} ${theme}-bg ${theme}-ter-color`}
      fluid
    >
      <Row className={`${styles["auth-row"]}`}>
        <AuthForm/>
      </Row>
    </Container>
  );
}

export default Auth;
