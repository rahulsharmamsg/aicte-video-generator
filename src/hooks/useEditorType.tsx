import { useContext } from "react"
import { DesignEditorContext } from "../contexts/DesignEditor.tsx"

const useEditor=()=> {
  const { editorType } = useContext(DesignEditorContext)
  
  return editorType
}

export default useEditor
