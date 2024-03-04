import React, { Fragment, useEffect } from "react";
import { usePlayer } from "../Player.context";
// import styles from "./LoadButton.module.scss";

const LoadButton = ({audioSrc}) => {
useEffect(()=>{

  console.log(audioSrc)
  if(audioSrc != undefined){
    loadFile(audioSrc)
}
},[audioSrc])

  const { loadFile } = usePlayer();

  return (
    <Fragment>
      {/* <label>
        <input type="file" onChange={onChange} />{" "}
        Load MP3
      </label> */}
    </Fragment>
  );
};

export default LoadButton;
