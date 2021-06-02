import React from "react";
import style from "./style.module.css";
import { redWatch } from "../ImgLinks/ImgLinks";
function PageOne(params) {
  return (
    <div className={style.global}>
      <div className={style.one}>
        <h1 className={style.h1}>
          Select Your New <br /> Perfect Style
        </h1>
        <p className={style.p}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea <br /> commodo consequat is aute irure.
        </p>
        <button className={style.but}>SHOP NOW</button>
      </div>
      <div className={style.two}>
        <img src={redWatch} alt="IMG NONE" className={style.img} />
      </div>
    </div>
  );
}
export default PageOne;
