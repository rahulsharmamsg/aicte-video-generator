import React from "react";
import { usePlayer } from "../Player.context";

import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import Fab from '@mui/material/Fab';

const PlayButton = ({SetIsPlayed}) => {
  const { shifter, loading, playing, play } = usePlayer();
  const played = () =>{
    SetIsPlayed(true);
    play();
  }
  return (
    <Fab disabled={!!!shifter || loading || playing} onClick={played}>
      <PlayArrowOutlinedIcon/>
    </Fab>
  );
};

export default PlayButton;