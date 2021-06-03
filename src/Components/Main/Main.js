import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import style from "./style.module.css";
import PageOne from "../PageOne/PageOne";
import Arrivals from "../Arrivals/Arrivals";
import ImageZone from "../ImagesZone/ImagesZone";
import Popular from "../Popular/Popular";
import VideoPage from "../VideoPage/VideoPage";
import Choice from "../Choice/Choice";
import Spinner from "../Spinner/Spinner";
import RedBlock from "../RedBlock/RedBlock";
function Main() {
  const [spinner, setSpinner] = useState(false);

  setTimeout(() => {
    setSpinner(true);
  }, 3000);
  return (
    <div className={style.main}>
      {spinner && (
        <>
          <NavBar />
          <PageOne />
          <Arrivals />
          <ImageZone />
          <Popular />
          <VideoPage />
          <Choice />
          <RedBlock />
        </>
      )}
      {!spinner && <Spinner />}
    </div>
  );
}
export default Main;
