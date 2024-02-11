import React from "react"
import { Canvas } from "@layerhub-io/react"
import Playback from "../Playback/Playback.tsx"
import useDesignEditorContext from "../../hooks/useDesignEditorContext.ts"
import ContextMenu from "../ContextMenu/ContextMenu.tsx"

const CanvasEditor=()=> {
  const { displayPlayback } = useDesignEditorContext()
  return (
    <div style={{ flex: 1, display: "flex", position: "relative",height:"70vh",width:"120vh" }}>
      {displayPlayback && <Playback />}
      <ContextMenu />
      <Canvas
        config={{
          background: "#FFF",
          controlsPosition: {
            rotation: "BOTTOM",
          },
          shadow: {
            blur: 4,
            color: "#FFF",
            offsetX: 0,
            offsetY: 0,
          },
          frameMargin: 0,
        }}
      />
      
    </div>
  )
}
export default CanvasEditor