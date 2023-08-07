import React from "react";

import RobotDetails from "./RobotDetails";
import NiceDCV from "./NiceDCV";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./style.module.css";

function AllView() {
  return (
    <Container fluid>
      <Row>
        <RobotDetails />
      </Row>
      <Row>
        <NiceDCV />
      </Row>
    </Container>
  );
}

export default AllView;
