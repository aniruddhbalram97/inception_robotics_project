import React from "react";
import { useSelector } from "react-redux";

import RobotDetails from "./RobotDetails";
import NiceDCV from "./NiceDCV";
import Filler from "./Filler";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import styles from "./style.module.css";

const View = () => {
  const selectedData = useSelector((state) => state.appReducer.selectedData);
  if (selectedData) {
    return (
      <>
        <Row>
          <RobotDetails />
        </Row>
        <Row>
          <NiceDCV />
        </Row>
      </>
    );
  } else {
    return <Filler />;
  }
};
function AllView() {
  const theme = useSelector((state) => state.appReducer.theme);
  return (
    <Container className={`${theme}-bg`} fluid>
      <View />
    </Container>
  );
}

export default AllView;
