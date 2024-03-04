import React, { useEffect } from "react";
import PlayButton from "./PlayButton.component";
import PauseButton from "./PauseButton.component";
import Progress from "./Progress.component";
import Tempo from "./Tempo.component";
import Pitch from "./Pitch.component";
import ResetButton from "./ResetButton.component";
// import Key from "./Key.component";
import Volume from "./Volume.component";
import { Fab, Grid } from "@mui/material";
import { usePlayer } from "../Player.context";
// import styles from "rn-range-slider/styles";
// import { flexbox } from "native-base/lib/typescript/theme/styled-system";



const Players = () => {
  const [isPlayed,SetIsPlayed] = React.useState(false);
  const [isComp,SetIsComp] = React.useState(false)
  const { playHead, duration, progress, resetPlayHead } = usePlayer();
  console.log(progress,'progress')
  useEffect(()=>{
    if(progress>0){
      SetIsComp(true)
    }
    
  },[progress])

  const replayed = (val)=>{
    console.log('hey repl',val)
    SetIsPlayed(val);
    SetIsComp(!val)
  }
  console.log(isComp)
  
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={3} md={3} lg={4} style={styles.section}>
          {isComp?<><ResetButton replayed={replayed} /></>:
          <>
            {!isPlayed?<PlayButton SetIsPlayed={SetIsPlayed}/>
          :<><PauseButton SetIsPlayed={SetIsPlayed}/></>}
        
          </>}
          <Progress />
        </Grid>
        {/* <Grid item sm={9} md={9} lg={4} style={styles.pross}></Grid> */}
       
        {/* <Grid item sm={12}  md={12} lg={3} style={styles.propara}><Tempo /></Grid> 
        <Grid item sm={12} md={12} lg={3} style={styles.pinpara}><Pitch /></Grid>  */}
        {/* <Volume /> */}
      </Grid>
     
      {/* <Key /> */}
      {/* <Volume /> */}
    </div>
  );
};
const styles = {
  section: {
    display:"flex",
    justifyContent:"flex-start", 
    alignItems:"center",   
  },
  pross: {
   
  },
  propara:{
    marginTop:"10px",
    
  },
  pinpara:{
    marginBottom:"20px",
  },
  
};
export default Players;
