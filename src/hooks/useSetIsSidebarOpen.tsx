import { useContext } from "react"
import { DesignEditorContext } from "../contexts/DesignEditor.tsx"

export default function () {
  const { setIsSidebarOpen } = useContext(DesignEditorContext)
  return setIsSidebarOpen
}
