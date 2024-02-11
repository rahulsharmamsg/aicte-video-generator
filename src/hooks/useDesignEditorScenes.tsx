import React from "react"
import { DesignEditorContext } from "../contexts/DesignEditor.tsx"

export default function () {
  const { scenes } = React.useContext(DesignEditorContext)
  return scenes
}
