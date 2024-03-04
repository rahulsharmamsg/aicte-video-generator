import React from "react";
import Fab from '@mui/material/Fab';
import { usePlayer } from "../Player.context";
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';

const PauseButton = ({ SetIsPlayed }) => {
  const { loading, playing, pause } = usePlayer();
  const paused = () => { 
    SetIsPlayed(false);
    pause()
  }
  return (
    <Fab disabled={loading || !playing} onClick={() => paused()}>
      <PauseOutlinedIcon/>
    </Fab>
  );
};

export default PauseButton;
