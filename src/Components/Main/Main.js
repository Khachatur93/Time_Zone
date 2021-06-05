import React from "react";
import style from "./style.module.css";
import PageOne from "../PageOne/PageOne";
import Arrivals from "../Arrivals/Arrivals";
import ImageZone from "../ImagesZone/ImagesZone";
import Popular from "../Popular/Popular";
import VideoPage from "../VideoPage/VideoPage";
import Choice from "../Choice/Choice";
import RedBlock from "../RedBlock/RedBlock";
function Main() {
  return (
    <div className={style.main}>
      <PageOne />
      <Arrivals />
      <ImageZone />
      <Popular />
      <VideoPage />
      <Choice />
      <RedBlock />
    </div>
  );
}
export default Main;
