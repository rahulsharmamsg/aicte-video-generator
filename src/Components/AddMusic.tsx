import React from "react"
import { Block } from "baseui/block"
import { Button, SIZE } from "baseui/button"
import DropZone from "./DropZone.tsx"
import { useEditor } from "@layerhub-io/react"
import useSetIsSidebarOpen from "../hooks/useSetIsSidebarOpen.tsx"
import { nanoid } from "nanoid"
import { captureFrame, loadVideoResource } from "../utils/video.ts" // Assuming you have a similar utility for loading video resources

const toBase64 = (file:any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

export default function AddMusic() {
  const inputFileRef = React.useRef<HTMLInputElement>(null)
  const [uploads, setUploads] = React.useState<any[]>([])
  const editor = useEditor()
  const setIsSidebarOpen = useSetIsSidebarOpen()

  const handleDropFiles = async (files: FileList) => {
    try {
      const file = files[0]
      const base64 = (await toBase64(file)) as string
      const type = determineFileType(file)
      
      if (type === "video") {
        const video = await loadVideoResource(base64)
        if (!video) {
          console.error("Failed to load video resource.")
          return
        }
        const frame = await captureFrame(video)
        const upload = {
          id: nanoid(),
          src: base64,
          preview: frame,
          type: "StaticVideo",
        }
        setUploads([...uploads, upload])
      } else if (type === "audio") {
        const upload = {
          id: nanoid(),
          src: base64,
          type: "Audio",
        }
        setUploads([...uploads, upload])
      } else {
        console.error("Unsupported file type.")
      }
    } catch (error) {
      console.error("Error processing file:", error)
    }
  }

  const determineFileType = (file: File): "video" | "audio" | "other" => {
    if (file.type.includes("video")) {
      return "video"
    } else if (file.type.includes("audio")) {
      return "audio"
    } else {
      return "other"
    }
  }
  
  const handleInputFileRefClick = (e:any) => {
    e.preventDefault()
    inputFileRef.current?.click()
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleDropFiles(e.target.files!)
  }

  const addMediaToCanvas = (props) => {
    console.log("props===>",  props);
    editor.objects.add(props)
  }
  
  return (
    <DropZone handleDropFiles={handleDropFiles}>
      <Block $style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Block
          $style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 500,
            justifyContent: "space-between",
            padding: "1.5rem",
          }}
        >
          <Block>Uploads</Block>          
        </Block>
        <div>
          <Button
            onClick={(e)=>handleInputFileRefClick(e)}
            size={SIZE.compact}
            overrides={{
              Root: {
                style: {
                  width: "100%", 
                },
              },
            }}
          >
            Computer
          </Button>
          <input onChange={handleFileInput} type="file" id="file" ref={inputFileRef} style={{ display: "none" }} />

          <div
            style={{
              marginTop: "1rem",
              display: "grid",
              gap: "0.5rem",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {uploads.map((upload) => (
              <div
                key={upload.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => addMediaToCanvas(upload)}
              >
                {upload.type === "StaticVideo" ? (
                  <div>
                    <video width="100%" controls>
                      <source src={upload.src} type="video/mp4" />
                    </video>
                  </div>
                ) : upload.type === "Audio" ? (
                  <div>
                    <audio controls>
                      <source src={upload.src} type="audio/mpeg" />
                    </audio>
                    <div onClick={() => addMediaToCanvas(upload)} >
                            add
                      </div>
                  </div>
                ) : (
                  <div>
                    <img width="100%" src={upload.preview ? upload.preview : upload.url} alt="preview" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Block>
    </DropZone>
  )
}
