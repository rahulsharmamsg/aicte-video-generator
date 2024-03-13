import React from "react"
import { useEditor } from "@layerhub-io/react"
import { Block } from "baseui/block"
import { loadFonts } from "../utils/fonts.ts"
import AngleDoubleLeft from "../assets/Icons/AngleDoubleLeft.tsx"
import { useStyletron } from "baseui"
import { SAMPLE_TEMPLATES } from "../constants/editor.ts"
import useSetIsSidebarOpen from "../hooks/useSetIsSidebarOpen.tsx"
import useDesignEditorContext from "../hooks/useDesignEditorContext.ts"
import useEditorType from "../hooks/useEditorType.tsx"
import { loadVideoEditorAssets } from "../utils/video"
import { Image } from 'react-bootstrap'

// import Scrollable from "../components/Scrollable/Scrollable.tsx"
// import previewimg from '../assets/images/template/1.png';



export default function Template() {
  const editor = useEditor()
  const setIsSidebarOpen = useSetIsSidebarOpen()
  const { setCurrentScene, currentScene } = useDesignEditorContext()

  const loadTemplate = React.useCallback(
    async (template: any) => {
      if (editor) {
        const fonts: any[] = []
        template.layers.forEach((object: any) => {
          if (object.type === "StaticText" || object.type === "DynamicText") {
            fonts.push({
              name: object.fontFamily,
              url: object.fontURL,
              options: { style: "normal", weight: 400 },
            })
          }
        })
        const filteredFonts = fonts.filter((f) => !!f.url)
        if (filteredFonts.length > 0) {
          await loadFonts(filteredFonts)
        }
        setCurrentScene({ ...template, id: currentScene?.id })
      }
    },
    [editor, currentScene]
  )

  return (
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
        <ul className="mb-3 nav nav-tabs nav-fill" role="tablist"><li className="nav-item" role="presentation"><button type="button" id="fill-tab-example-tab-home" role="tab" data-rr-ui-event-key="home" aria-controls="fill-tab-example-tabpane-home" aria-selected="true" className="nav-link active">Storyboard Template</button></li></ul>
        {/* <Block onClick={() => setIsSidebarOpen(false)} $style={{ cursor: "pointer", display: "flex" }}>
          <AngleDoubleLeft size={18} />
        </Block> */}
      </Block>
      {/* <Scrollable> */}
      <div style={{ padding: "0 1.5rem" }} className="hhhhh">
        <div style={{ display: "grid", gap: "0.5rem", gridTemplateColumns: "1fr 1fr" }}>
          {SAMPLE_TEMPLATES.map((item, index) => {
            return <ImageItem onClick={() => loadTemplate(item)} key={index} preview={`${item?.preview}`} />
          })}
        </div>
        {/* <img src={previewimg} width={100} height={100}/> */}
      </div>
      {/* </Scrollable> */}
    </Block>
  )
}

function ImageItem({ preview, onClick }: { preview: any; onClick?: (option: any) => void }) {
  // console.log(preview,'hihi')
  const [css] = useStyletron()
  return (
    <div
      onClick={onClick}
      className={css({
        position: "relative",
        background: "#f8f8fb",
        cursor: "pointer",
        borderRadius: "8px",
        overflow: "hidden",
        "::before:hover": {
          opacity: 1,
        },
      })}
    >
      <div
        className={css({
          backgroundImage: `linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 0,
          rgba(0, 0, 0, 0.006) 8.1%,
          rgba(0, 0, 0, 0.022) 15.5%,
          rgba(0, 0, 0, 0.047) 22.5%,
          rgba(0, 0, 0, 0.079) 29%,
          rgba(0, 0, 0, 0.117) 35.3%,
          rgba(0, 0, 0, 0.158) 41.2%,
          rgba(0, 0, 0, 0.203) 47.1%,
          rgba(0, 0, 0, 0.247) 52.9%,
          rgba(0, 0, 0, 0.292) 58.8%,
          rgba(0, 0, 0, 0.333) 64.7%,
          rgba(0, 0, 0, 0.371) 71%,
          rgba(0, 0, 0, 0.403) 77.5%,
          rgba(0, 0, 0, 0.428) 84.5%,
          rgba(0, 0, 0, 0.444) 91.9%,
          rgba(0, 0, 0, 0.45) 100%)`,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
          height: "100%",
          width: "100%",
          ":hover": {
            opacity: 1,
          },
        })}
      ></div>
      <Image
        src={preview}
        className={css({
          width: "100%",
          height: "100%",
          objectFit: "contain",
          pointerEvents: "none",
          verticalAlign: "middle",
        })}
      />
    </div>
  )
}
