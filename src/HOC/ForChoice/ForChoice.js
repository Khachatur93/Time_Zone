import React from "react";
import { Row, Col } from "react-bootstrap";
import style from "./style.module.css";
function ForChoice(props) {
  return (
    <Row>
      <Col xl={6} lg={12} style={props.style} className={style.colTwo}>
        <img src={props.img} alt="img" className={style.img} />
      </Col>
      <Col xl={6} lg={12} className={style.colOne}>
        <h1 className={style.h1}>{props.h1}</h1>
        <p className={style.p}>{props.p}</p>
        <button className={style.btn}>SHOW WATCH</button>
      </Col>
    </Row>
  );
}
export default ForChoice;
