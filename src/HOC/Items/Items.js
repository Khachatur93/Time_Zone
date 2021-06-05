import React from "react";
import { Col } from "react-bootstrap";
import style from "./style.module.css";
function Items(props) {
  return (
    <Col xl={4} lg={6} md={12} sm={12} className={style.col}>
      <div className={style.d1}>
        <img className={style.img} src={props.img} alt="" />
        <button className={style.btn}>Add To Cart</button>
        {/* <div className={style.d2}></div> */}
      </div>
      <h1 className={style.h1}>{props.h1}</h1>
      <p className={style.p}>{`$ ${props.sum}`}</p>
    </Col>
  );
}
export default Items;
