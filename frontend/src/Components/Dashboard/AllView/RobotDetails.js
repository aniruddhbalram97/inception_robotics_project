import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./style.module.css";
function RobotDetails() {
  const dataObject = {
    unique_id: "Robot ID",
    length_m: "Length(m)",
    width_m: "Width(m)",
    height_m: "Height(m)",
    sensor_type: "Sensor",
  };
  const selectedData = useSelector((state) => state.appReducer.selectedData);
  const theme = useSelector((state) => state.appReducer.theme);
  return (
    <Container className={`${styles["robotdetails-container"]}`}>
      {/* <Row style={{ height: "100%" }}> */}
      <div className={`${styles["detail-image-container"]} ${theme}-ter-color`}>
        <img
          className={`${styles["detail-image"]}`}
          src={selectedData["image_url"]}
        />
        <div className={"font-3"}>{selectedData["robot_name"]}</div>
      </div>
      <Container
        className={`${
          styles[`${theme}-detail-table-container`]
        }  ${theme}-pri-color`}
      >
        <div
          className={`${styles["detail-table-title"]} ${
            theme == "dark" ? "black-color" : "white-color"
          }`}
        >
          ROBOT DESCRIPTION
        </div>
        {Object.keys(dataObject).map((key, value) => {
          return (
            <Row>
              <div
                className={`${styles["detail-table-row"]} ${
                  theme == "dark" ? "black-color" : "white-color"
                } font-3 `}
              >
                <div>
                  <b>{dataObject[key]}</b>
                </div>
                <div>{selectedData[key]}</div>
              </div>
              {dataObject[key] != "Sensor" ? (
                <div
                  className={`${styles["detail-table-border"]} ${theme}-bg`}
                ></div>
              ) : null}
            </Row>
          );
        })}
      </Container>
      {/* </Row> */}
    </Container>
  );
}

export default RobotDetails;
