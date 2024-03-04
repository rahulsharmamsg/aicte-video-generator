import React from "react";
import Fab from '@mui/material/Fab';
import { usePlayer } from "../Player.context";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';


const ResetButton = ({replayed}) => {
  const { loading, playing, resetPlayHead } = usePlayer();
  const resetClicked = () =>{
    replayed(true);
    resetPlayHead(0)
  }
  return (
    <Fab disabled={loading || !playing} onClick={() => resetClicked()}>
      <PlayArrowOutlinedIcon/>
      
    </Fab>
  );
};

export default ResetButton;
