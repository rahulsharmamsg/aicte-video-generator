import React, { useState } from 'react';
import axios from 'axios';
import { useEditor } from "@layerhub-io/react";
import useDesignEditorContext from "../hooks/useDesignEditorContext.ts"
import demov from "./video.mp4"

const loadVideoResource = (videoSrc) => {
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




const captureFrame = (video) => {
    return new Promise(function (resolve) {
        var canvas = document.createElement("canvas")
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height)
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

const captureDuration = (video) => {
    return new Promise((resolve) => {
        resolve(video.duration)
    })
}

const VideoGeneration = () => {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);
    const [videoUrl, setVideoUrl] = useState(null);
    const editor = useEditor();
    const { scenes, setScenes, currentScene } = useDesignEditorContext()

    //   const formdata = new FormData();
    //   formdata.append("prompt", text);
    //   formdata.append("image", image);

    //   const requestOptions = {
    //     method: "POST",
    //     body: formdata,
    //     redirect: "follow"
    //   };
    //   const editor = useEditor();
    const handleImageClick = () => {
        // Add the video to the editor
        addObject(demov);
    };
    const addObject = async (videoSrc) => {

        console.log("im hitting");
        if (editor) {
            try {
                const video = await loadVideoResource(videoSrc);
                const frame = await captureFrame(video);
                const duration = await captureDuration(video);
    
                // Here you should construct your video object
                const videoObject = {
                    src: videoSrc,
                    duration: duration,
                    preview: frame,
                    // Add any other properties you need for your video object
                };
    
                // Add the video object to the editor
                editor.objects.add(videoObject);
    
                // Update scene duration if necessary
                if (currentScene) {
                    const updatedScenes = scenes.map((scn) => {
                        if (scn.id === currentScene.id) {
                            return {
                                ...currentScene,
                                duration: duration * 1000 > currentScene.duration ? duration * 1000 : currentScene.duration,
                            };
                        }
                        return scn;
                    });
                    setScenes(updatedScenes);
                }
            } catch (error) {
                console.error('Error adding video to editor:', error);
            }
        }
    };
    
    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('prompt', text);
        formData.append('image', image);
        try {
            const response = await axios.post('http://10.150.0.8/api/generate-video', formData,
                { responseType: 'blob' },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
            );
           
            const url = URL.createObjectURL(response?.data)
            const videoFile = new File([url], 'video.mp4', { type: 'video/mp4' });
            console.log("videoFile ===>" , videoFile);
            setVideoUrl(url);
            // if ()
            // const file = files[0]
  
            // // const base64 = (await toBase64(file)) as string
            // const video = await loadVideoResource(base64)
            
            // const frame = await captureFrame(video)
            // const type = file.type.includes("video") ? "StaticVideo" : "StaticImage"
            // const upload = {
            //     id: nanoid(),
            //     src: base64,
            //     preview: frame,
            //     type: type,
            // }
            // setUploads([...uploads, upload])
       

            // console.log('Response:', response, "videoUrl", videoUrl);
            //   setVideoUrl(response?.data)
        } catch (error) {
            // Handle error
            console.error('Error:', error);
        }
    };
    const addImageToCanvas = (props) => {
        editor.objects.add(props)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        className='form-control'
                        type="text"
                        id="text"
                        value={text}
                        onChange={handleTextChange}
                        required
                        placeholder="Enter Your Prompt"
                    />
                </div>
                <div className='mt-2'>
                    <label htmlFor="image">Upload Image</label>
                    <div>
                        <input
                            type="file"
                            id="image"
                            className='form-control'
                            style={{ height: "auto", fontSize: 16, padding: "7px 10px" }}
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                        />
                    </div>
                </div>
                <button class="button orange mt-3 w-100" onClick={handleSubmit}>Generate Video</button>
            </form>
            {videoUrl && (
                <>
                    {/* <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                        }}
                        onClick={() => addImageToCanvas(upload)}
                    >
                        <div>
                            <img width="100%" src={upload.preview ? upload.preview : upload.url} alt="preview" />
                        </div>
                    </div> */}

                    <video controls>
                        <source src={videoUrl} onClick={() => addObject(videoUrl)} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
  
                </>
            )}

{/* <img src={demov} onClick={handleImageClick} alt="Generated Image" /> */}

        </div>
    );
};
export default VideoGeneration;
