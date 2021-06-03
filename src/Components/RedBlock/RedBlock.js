import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./style.module.css";
import { ImSpinner11 } from "react-icons/im";
import { IoCubeOutline } from "react-icons/io5";
import { VscUnlock } from "react-icons/vsc";

function RedBlock(params) {
  return (
    <Container className={style.cont}>
      <Row className={style.row}>
        <Col xl={4} lg={12} md={12}>
          <ImSpinner11 size="34px" className={style.icon} />
          <h4 className={style.h4}>Free Shipping Method</h4>
          <p className={style.p}>
            aorem ixpsacdolor sit ameasecur <br /> adipisicing elitsf edasd.
          </p>
        </Col>
        <Col xl={4} lg={12} md={12}>
          <IoCubeOutline size="40px" className={style.icon} />
          <h4 className={style.h4}>Free Shipping Method</h4>
          <p className={style.p}>
            aorem ixpsacdolor sit ameasecur <br /> adipisicing elitsf edasd.
          </p>
        </Col>
        <Col xl={4} lg={12} md={12}>
          <VscUnlock size="40px" className={style.icon} />
          <h4 className={style.h4}>Free Shipping Method</h4>
          <p className={style.p}>
            aorem ixpsacdolor sit ameasecur <br /> adipisicing elitsf edasd.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default RedBlock;
