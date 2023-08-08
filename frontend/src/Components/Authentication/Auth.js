import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Login from "./Login";
import Registration from "./Registration";
import ThemeSelector from "../Common/ThemeSelector";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import styles from "./style.module.css";

function Auth({ setAuth }) {
  const theme = useSelector((state) => state.appReducer.theme);
  const auth = useSelector((state) => state.appReducer.auth);

  const AuthForm = ({ setAuth }) => {
    if (auth == "login") {
      return <Login setAuth={setAuth} />;
    } else {
      return <Registration setAuth={setAuth} />;
    }
  };
  return (
    <Container
      className={`${styles["auth-container"]} ${theme}-bg ${theme}-ter-color`}
      fluid
    >
      <Row className={`${styles["auth-row"]}`}>
        <AuthForm setAuth={setAuth} />
        <ThemeSelector isOpen={false} />
      </Row>
    </Container>
  );
}

export default Auth;
