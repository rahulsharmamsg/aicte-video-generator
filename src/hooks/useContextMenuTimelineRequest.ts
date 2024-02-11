import { useContext } from "react"
import { DesignEditorContext } from "../contexts/DesignEditor.tsx"

function useContextMenuTimelineRequest() {
  const {
    contextMenuTimelineRequest
  } = useContext(DesignEditorContext)
  return contextMenuTimelineRequest
}

export default useContextMenuTimelineRequest
