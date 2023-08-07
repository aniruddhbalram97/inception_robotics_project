import React from "react";
import { useSelector } from "react-redux";

import Card from "./Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./style.module.css";

import { testData } from "./../../../testData";

function Filterbar() {
  const theme = useSelector((state) => state.appReducer.theme);
  return (
    <Container
      className={`${styles[`${theme}-filterbar-container`]} ${theme}-bg`}
      fluid
    >
      <Row>
        <Col xs={12}>
          {testData.map((data, idx) => {
            return <Card data={data} />;
          })}
          {/* <Card data={testData[0]} /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Filterbar;
