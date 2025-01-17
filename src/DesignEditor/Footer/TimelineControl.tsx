import React from "react"
import { useTimer } from "@layerhub-io/use-timer"
import { Block } from "baseui/block"
import Pause from "../../assets/Icons/Pause.tsx"
import PlaySolid from "../../assets/Icons/PlaySolid.tsx"
import useDesignEditorContext from "../../hooks/useDesignEditorContext.ts"

export default function TimelineControl ({audioSrc}) {
  const { pause, status } = useTimer()
  const { setDisplayPlayback } = useDesignEditorContext()
console.log(audioSrc,'hihihi')
  return (
    <Block id={"EditorPlayControl"} $style={{ padding: "0 1rem" }}>
      <Block
        onClick={
          status === "STOPPED" || status === "PAUSED"
            ? () => {
              console.log("hello this is test");
              if(audioSrc){
                const audioElement = document.getElementById('audioElement');              
                audioElement.src = audioSrc;
                audioElement.play();
              }           

                setDisplayPlayback(true)
              }
            : () => {
              console.log("hello ");
                pause()
                if(audioSrc){
                  audioElement.pause();
                }
               
                setDisplayPlayback(false)
              }
        }
        $style={{
          height: "56px",
          width: "56px",
          background: "#ffffff",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 0 1px rgba(64,87,109,0.07),0 2px 12px rgba(53,71,90,0.2)",
        }}
      >
        {status === "STOPPED" || status === "PAUSED" ? <PlaySolid size={24} /> : <Pause size={24} />}
        <audio id="audioElement"></audio>
      </Block>
    </Block>
  )
}
