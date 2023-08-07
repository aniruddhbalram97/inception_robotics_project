import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router";

import AllView from "./AllView/AllView";
import Analytics from "./Analytics/Analytics";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./style.module.css";
import Filterbar from "./Filterbar/Filterbar";
const View = () => {
  const view = useSelector((state) => state.appReducer.view);

  if (view == "Summary") {
    return <AllView />;
  } else {
    return <Analytics />;
  }
};

function MainView() {
  const theme = useSelector((state) => state.appReducer.theme);
  return (
    <Container className={`${styles["main-view"]}`} fluid>
      <Row>
        <Col xs={4} md={3} lg={2} style={{ padding: 0 }}>
          <Filterbar />
        </Col>
        <Col xs={8} md={9} lg={10} style={{ padding: 0 }}>
          <View />
        </Col>
      </Row>
    </Container>
  );
}

export default MainView;
