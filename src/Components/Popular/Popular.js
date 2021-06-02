import React from "react";
import { Container, Row } from "react-bootstrap";
import Items from "../../HOC/Items/Items";
import style from "./style.module.css";
import {
  watch1,
  watch2,
  watch3,
  watch4,
  watch5,
  watch6,
} from "../ImgLinks/ImgLinks";
function Popular(params) {
  return (
    <Container className={style.cont}>
      <h1 className={style.h1}>Popular Items</h1>
      <p className={style.p}>
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore <br /> magna aliqua. Quis ipsum suspendisse ultrices gravida.
      </p>
      <Row>
        <Items sum={"45,743"} h1={"Thermo Ball Etip Gloves"} img={watch1} />
        <Items sum={"45,743"} h1={"Thermo Ball Etip Gloves"} img={watch2} />
        <Items sum={"45,743"} h1={"Thermo Ball Etip Gloves"} img={watch3} />
        <Items sum={"45,743"} h1={"Thermo Ball Etip Gloves"} img={watch4} />
        <Items sum={"45,743"} h1={"Thermo Ball Etip Gloves"} img={watch5} />
        <Items sum={"45,743"} h1={"Thermo Ball Etip Gloves"} img={watch6} />
      </Row>
      <button className={style.but}>View More Products</button>
    </Container>
  );
}
export default Popular;
