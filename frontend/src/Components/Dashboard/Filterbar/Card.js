import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSelectedData } from "../../../Redux/appReducer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import styles from "./style.module.css";
function Card({ data }) {
  const theme = useSelector((state) => state.appReducer.theme);
  const robot_id = useSelector((state) => state.appReducer.robot_id);
  const dispatch = useDispatch();
  return (
    <Container
      className={`${styles[`${theme}-card-container`]} ${
        robot_id == data.unique_id
          ? `${styles[`${theme}-card-container-selected`]}`
          : null
      }`}
      onClick={() => dispatch(setSelectedData(data))}
    >
      <Row>
        <div className={`${styles["card-image"]}`}>
          <img height={75} src={data.image_url}></img>
        </div>
      </Row>
      <Row>
        <div className={`font-2 ${theme}-ter-color`}>{data.robot_name}</div>
      </Row>
    </Container>
  );
}

export default Card;
