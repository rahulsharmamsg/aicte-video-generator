import { useContext } from "react"
import { DesignEditorContext } from "../contexts/DesignEditor.tsx"

export default function () {
  const { isSidebarOpen } = useContext(DesignEditorContext)
  return isSidebarOpen
}
