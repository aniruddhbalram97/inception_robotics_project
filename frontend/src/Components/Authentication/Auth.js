import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Login from "./Login";
import Registration from "./Registration";
import ThemeSelector from "../Common/ThemeSelector";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import styles from "./style.module.css";

function Auth() {
  const theme = useSelector((state) => state.appReducer.theme);
  const auth = useSelector((state) => state.appReducer.auth);

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
        <AuthForm />
        <ThemeSelector isOpen={false} />
      </Row>
    </Container>
  );
}

export default Auth;
