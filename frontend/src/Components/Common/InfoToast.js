import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setInfoMessage } from "../../Redux/appReducer";

import Toast from "react-bootstrap/Toast";

import styles from "./style.module.css";

function InfoToast() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const infoMessage = useSelector((state) => state.appReducer.infoMessage);
  const theme = useSelector((state) => state.appReducer.theme);
  useEffect(() => {
    if (infoMessage) {
      setShow(true);
    }
  }, [infoMessage]);
  const handleClose = () => {
    setShow(false);
    dispatch(setInfoMessage(false));
  };
  return (
    <Toast
      className={`${theme}-bg ${styles["toast-container"]}`}
      onClose={() => handleClose()}
      show={show}
      delay={5000}
      autohide
    >
      <Toast.Body className={`${theme}-${infoMessage.type}-color `}>
        {infoMessage.message}
      </Toast.Body>
    </Toast>
  );
}

export default InfoToast;
