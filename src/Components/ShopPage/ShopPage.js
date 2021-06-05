import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import style from "./style.module.css";
import Items from "../../HOC/Items/Items";
import {
  watch1,
  watch2,
  watch3,
  watch4,
  watch5,
  watch6,
} from "../ImgLinks/ImgLinks";
import RedBlock from "../RedBlock/RedBlock";

function ShopPage(params) {
  return (
    <Container className={style.cont} fluid="xxl">
      <Col className={style.colOne}>
        <h1 className={style.h1}>
          <b>Watch Shop</b>
        </h1>
      </Col>
      <Nav variant="tabs" defaultActiveKey="/home" className={style.nav}>
        <Nav.Item>
          <Nav.Link className={style.link}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={style.link}>Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={style.link}>Disabled</Nav.Link>
        </Nav.Item>
      </Nav>
      <Row className={style.row}>
        <Items img={watch1} h1="Thermo Ball Etip Gloves" sum="45,743" />
        <Items img={watch2} h1="Thermo Ball Etip Gloves" sum="45,743" />
        <Items img={watch3} h1="Thermo Ball Etip Gloves" sum="45,743" />
        <Items img={watch4} h1="Thermo Ball Etip Gloves" sum="45,743" />
        <Items img={watch5} h1="Thermo Ball Etip Gloves" sum="45,743" />
        <Items img={watch6} h1="Thermo Ball Etip Gloves" sum="45,743" />
      </Row>
    </Container>
  );
}
export default ShopPage;
