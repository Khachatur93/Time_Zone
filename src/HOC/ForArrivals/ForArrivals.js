import { Col } from "react-bootstrap";
import style from "./style.module.css";
function ForArrivals(props) {
  return (
    <Col className={style.col}>
      <img src={props.img} alt="" className={style.img} />
      <h1 className={style.h1}>{props.h1}</h1>
      <p className={style.p}>{`$ ${props.sum}`}</p>
    </Col>
  );
}
export default ForArrivals;
