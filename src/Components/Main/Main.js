import React from "react";
import NavBar from "../NavBar/NavBar";
import style from "./style.module.css";
import PageOne from "../PageOne/PageOne";
import Arrivals from "../Arrivals/Arrivals";
import ImageZone from "../ImagesZone/ImagesZone";
import Popular from "../Popular/Popular";
import VideoPage from "../VideoPage/VideoPage";
function Main() {
  return (
    <div className={style.main}>
      <NavBar />
      <PageOne />
      <Arrivals />
      <ImageZone />
      <Popular />
      <VideoPage />
    </div>
  );
}
export default Main;
