import React, { useEffect } from "react";
import { usePlayer } from "../Player.context";
// import styles from "./Progress.module.scss";

const Progress = () => {
  const { playHead, duration, progress, resetPlayHead } = usePlayer();
  const onClick = ({ target, pageX }) => {
    if (duration !== "0:00") {
      const pos = target.getBoundingClientRect();
      const relX = pageX - pos.x;
      const perc = relX / target.offsetWidth;
      resetPlayHead(perc);
    }
  };


  return (
    <div>
     
      <progress
        onClick={onClick}
        id="progressMeter"
        value={progress}
        max="100"
        
      />
       <span>{playHead}</span>
      <span>{duration}</span>
    </div>
  );
};

export default Progress;
