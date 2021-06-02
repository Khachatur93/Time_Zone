import React from "react";
import { Container, Row } from "react-bootstrap";
import ForArrivals from "../../HOC/ForArrivals/ForArrivals";
import { arrivals1, arrivals2, arrivals3 } from "../ImgLinks/ImgLinks";
import style from "./style.module.css";
function Arrivals(params) {
  return (
    <Container className={style.cont}>
      <h1 className={style.h1}>New Arrivals</h1>
      <Row>
        <ForArrivals
          img={arrivals1}
          h1={"Thermo Ball Etip Gloves"}
          sum={"45,743"}
        />
        <ForArrivals
          img={arrivals2}
          h1={"Thermo Ball Etip Gloves"}
          sum={"45,743"}
        />
        <ForArrivals
          img={arrivals3}
          h1={"Thermo Ball Etip Gloves"}
          sum={"45,743"}
        />
      </Row>
    </Container>
  );
}

export default Arrivals;
