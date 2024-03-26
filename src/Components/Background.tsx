import React from "react"
import { useStyletron } from "baseui"
import { Block } from "baseui/block"
import AngleDoubleLeft from "../assets/Icons/AngleDoubleLeft.tsx"
import Scrollable from "../DesignEditor/components/Scrollable/Scrollable.tsx"
import { useEditor } from "@layerhub-io/react"
import useSetIsSidebarOpen from "../hooks/useSetIsSidebarOpen.tsx"
import { getPixabayVideos } from "../services/pixabay.ts"
import { getPexelsVideos } from "../services/pexels.ts"
import useDesignEditorContext from "../hooks/useDesignEditorContext.ts"

const loadVideoResource = (videoSrc: string): Promise<HTMLVideoElement> => {
  return new Promise(function (resolve, reject) {
    var video = document.createElement("video")
    video.src = videoSrc
    video.crossOrigin = "anonymous"
    video.addEventListener("loadedmetadata", function (event) {
      video.currentTime = 1
    })
    video.addEventListener("seeked", function () {
      resolve(video)
    })
    video.addEventListener("error", function (error) {
      reject(error)
    })
  })
}

const captureFrame = (video: HTMLVideoElement) => {
  return new Promise(function (resolve) {
    var canvas = document.createElement("canvas") as HTMLCanvasElement
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    canvas.getContext("2d")!.drawImage(video, 0, 0, canvas.width, canvas.height)
    URL.revokeObjectURL(video.src)

    const data = canvas.toDataURL()

    fetch(data)
      .then((res) => {
        return res.blob()
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob)
        resolve(url)
      })
  })
}

const captureDuration = (video: HTMLVideoElement): Promise<number> => {
  return new Promise((resolve) => {
    resolve(video.duration)
  })
}

export default function Background() {
  const editor = useEditor()
  const setIsSidebarOpen = useSetIsSidebarOpen()
  const [videos, setVideos] = React.useState<any[]>([])
  const { scenes, setScenes, currentScene } = useDesignEditorContext()
  const loadPixabayVideos = async () => {
    const videos = await getPixabayVideos("people")
    setVideos(videos)
  }

  const [searchTerm, setSearchTerm] = React.useState<string>('Student'); // Default search term

  // const getPexelsVideos = async (query: string): Promise<any[]> => {
  //   // Your getPexelsVideos implementation goes here
  //   // Replace this with your actual API call
  //   // Example: const response = await fetch(`API_URL_HERE`);
  //   //          const data = await response.json();
  //   //          return data;
  //   console.log("Searching for:", query);
  //   return [];
  // };

  const loadPexelsVideos = async (query: string) => {
    if (!query.trim()) {
      console.log("Search query is empty");
      return;
    }
    const videos = await getPexelsVideos(query) as any
    setVideos(videos);
  };


  React.useEffect(() => {
    loadPexelsVideos(searchTerm);
  }, [searchTerm]);

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    loadPexelsVideos(searchTerm);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission behavior
      loadPexelsVideos(searchTerm);
    }
  };


  const addObject = React.useCallback(
    async (options: any) => {
      if (editor) {
        const video = await loadVideoResource(options.src)
        const frame = await captureFrame(video)
        const duration = await captureDuration(video)
        editor.objects.add({ ...options, duration, preview: frame })
        const updatedScenes = scenes.map((scn) => {
          if (scn.id === currentScene?.id) {
            return {
              ...currentScene,
              duration: duration * 1000 > currentScene.duration! ? duration * 1000 : currentScene.duration!,
            }
          }
          return scn
        })
        setScenes(updatedScenes)
      }
    },
    [editor, scenes, currentScene]
  )

  return (
    <> 
    <form action="">
    <div className="srchAiAvatar">
      {/* <input
        type="file"
        placeholder="Search for AI Avatars"
        className="srchAiAvatars"
      /> */}
      {/* <Upload className="maginifyIcn" size={22} /> */}
      <input
        placeholder="Search"
        className="srchAiAvatars"
        value={searchTerm}
        onChange={handleInputChange}
        // onKeyPress={handleKeyPress}
      />
      <button className="button orange mt-3 w-100" onClick={handleSearch}>Search</button>
     
    </div>
    </form>
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
        <Block>Videos</Block>
      </Block>
      {/* <Scrollable> */}
      {/* {console.log("videos", videos) } */}
        <Block padding={"0 1.5rem"}>
          <div style={{ display: "grid", gap: "8px", gridTemplateColumns: "1fr 1fr" }}>
            {videos.map((video, index) => {
              return <img width={"120px"} key={index} src={video.preview} onClick={() => addObject(video)} />
            })}
          </div>
        </Block>
      {/* </Scrollable> */}
    </Block>
    </>
  )
}

function ImageItem({ preview, onClick }: { preview: any; onClick?: (option: any) => void }) {
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
      <img
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
