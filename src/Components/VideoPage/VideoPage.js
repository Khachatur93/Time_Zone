import React from "react";
import style from "./style.module.css";
import ReactPlayer from "react-player";
function VideoPage(params) {
  return (
    <div className={style.global}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=C9aCBwScf-0"
        width="100%"
        height="100%"
      />
    </div>
  );
}
export default VideoPage;
