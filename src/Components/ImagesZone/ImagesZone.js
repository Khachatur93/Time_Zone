import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import style from "./style.module.css";
function ImagesZone(params) {
  return (
    <div className={style.cont}>
      <div className={style.one}>
        <img
          className={style.img}
          src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/xgallery1.png.pagespeed.ic.RiMoEHAQJU.webp"
          alt=""
        />
      </div>
      <div className={style.two}>
        <img
          className={style.img}
          src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/xgallery2.png.pagespeed.ic.R67GzIjQgh.webp"
          alt=""
        />
      </div>
      <div className={style.fry}>
        <div className={style.divMinOne}>
          <img
            className={style.img}
            src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/xgallery3.png.pagespeed.ic.38W7JPYvku.webp"
            alt=""
          />
        </div>
        <div className={style.divMinTwo}>
          <img
            className={style.img}
            src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/xgallery4.png.pagespeed.ic.eeH-radW60.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default ImagesZone;
