import React from "react";
import { Container } from "react-bootstrap";
import style from "./style.module.css";
import ForChoice from "../../HOC/ForChoice/ForChoice";
import { watch3, watch6 } from ".././ImgLinks/ImgLinks";
function Choice() {
  return (
    <Container className={style.cont}>
      <ForChoice
        img={watch3}
        h1="Watch of Choice"
        p="Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."
      />
      <ForChoice
        style={{ display: "flex" }}
        img={watch6}
        h1="Watch of Choice"
        p="Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."
      />
    </Container>
  );
}
export default Choice;
