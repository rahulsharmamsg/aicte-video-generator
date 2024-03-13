import React, { useState } from 'react';
import axios from 'axios';
import { useEditor } from "@layerhub-io/react";
import useDesignEditorContext from "../hooks/useDesignEditorContext.ts"
let unwantedWords = [
    "bad",
    "sample",
    "narendra",
    "modi",
    "prime",
    "minister",
  ];
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
// const editor = useEditor();

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
    const [loading, setLoading] = useState(false);
    const [vkeyboard, setvkeyboard] = useState(false);
    const [sourceLanguage, setSourceLanguage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    // const [Text, setText] = useState("");
    const [TransText, setTransText] = useState("");
    const [imageSrc, setImageSrc] = useState([]);
    //   const formdata = new FormData();
    //   formdata.append("prompt", text);
    //   formdata.append("image", image);

    //   const requestOptions = {
    //     method: "POST",
    //     body: formdata,
    //     redirect: "follow"
    //   };
    const addObject = React.useCallback(
        (url) => {
          if (editor) {
            console.log(editor, "editor");
            const options = {
              type: "StaticImage",
              src: url,
            };
    
           
            editor.objects.add(options);
           
          }
        },
        [editor]
      );
    
    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    function downloadBlobAsImage(blob, filename = 'image.jpg') {
        // Create a temporary anchor element
        const a = document.createElement('a');
        document.body.appendChild(a);
    
        // Create a URL for the blob
        const url = window.URL.createObjectURL(blob);
    
        // Set attributes for anchor element
        a.href = url;
        a.download = filename;
    
        // Simulate a click on the anchor element to trigger the download
        a.click();
    
        // Clean up: remove the anchor element and revoke the URL
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (text === "") {
            alert("Please enter a prompt");
            return;
        }
        const formData = new FormData();
        formData.append("prompt", text);
        setLoading(true);


        try {
            const res = await axios.post("https://bharattube.aicte-india.org/api/generate-image/generate-image", formData);
            setImageSrc(res?.data?.base64);

            console.log("image type =====?", res?.data?.base64);
            // setLoading(false);
            // const videourl = URL.createObjectURL(imageSrc)
            if (res.status === 200){               
                setLoading(false);
                const formData = new FormData();
                formData.append('prompt', text);
                const byteCharacters = atob(res.data.base64);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                const blob = new Blob([byteArray], { type: 'image/png' });
                downloadBlobAsImage(blob)
                formData.append('image', blob, 'image.jpg');

                try {
                    const response = await axios.post('https://bharatlive.aicte-india.org/api/generate-video', formData,
                        { responseType: 'blob' },
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            },
                        },
                    );
                    // Handle success response
                    //   const videoBlob = new Blob([response.data], { type: 'video/mp4' });
                    //   const videoUrl = URL.createObjectURL(videoBlob);
                    const url = URL.createObjectURL(response?.data)
        
                    setVideoUrl(url);
                    if (editor) {
                        const video = await loadVideoResource(url)
                        const frame = await captureFrame(video)
                        const duration = await captureDuration(video)
                        editor.objects.add({ duration, preview: frame })
                        const updatedScenes = scenes.map((scn) => {
                            if (scn.id === currentScene?.id) {
                                return {
                                    ...currentScene,
                                    duration: duration * 1000 > currentScene.duration ? duration * 1000 : currentScene.duration,
                                }
                            }
                            return scn
                        })
                        setScenes(updatedScenes)
                    }
        
                    console.log('Response:', response, "videoUrl", videoUrl);
                    //   setVideoUrl(response?.data)
                } catch (error) {
                    // Handle error
                    console.error('Error:', error);
                }
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };
    
// console.log("setImageSrc", setImageSrc);
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     generateImage();

    //     const formData = new FormData();
    //     formData.append('prompt', text);
    //     formData.append('image', image);
    //     // try {
    //     //     const response = await axios.post('http://10.150.0.13:5000/generate-video', formData,
    //     //         { responseType: 'blob' },
    //     //         {
    //     //             headers: {
    //     //                 'Content-Type': 'multipart/form-data',
    //     //             },
    //     //         },
    //     //     );
    //     //     // Handle success response
    //     //     //   const videoBlob = new Blob([response.data], { type: 'video/mp4' });
    //     //     //   const videoUrl = URL.createObjectURL(videoBlob);
    //     //     const url = URL.createObjectURL(response?.data)

    //     //     setVideoUrl(url);
    //     //     if (editor) {
    //     //         const video = await loadVideoResource(url)
    //     //         const frame = await captureFrame(video)
    //     //         const duration = await captureDuration(video)
    //     //         editor.objects.add({ duration, preview: frame })
    //     //         const updatedScenes = scenes.map((scn) => {
    //     //             if (scn.id === currentScene?.id) {
    //     //                 return {
    //     //                     ...currentScene,
    //     //                     duration: duration * 1000 > currentScene.duration ? duration * 1000 : currentScene.duration,
    //     //                 }
    //     //             }
    //     //             return scn
    //     //         })
    //     //         setScenes(updatedScenes)
    //     //     }

    //     //     console.log('Response:', response, "videoUrl", videoUrl);
    //     //     //   setVideoUrl(response?.data)
    //     // } catch (error) {
    //     //     // Handle error
    //     //     console.error('Error:', error);
    //     // }
    // };
    function censorString(inputString) {
        // Use a regular expression to replace unwanted words with asterisks
        let NewinputString = inputString.replace(/[^a-zA-Z0-9 ]/g, "");
        unwantedWords.forEach((word) => {
          const regex = new RegExp(`\\b${word}\\b`, "gi");
          if (regex.test(inputString)) {
            setText("");
            alert("prompt not allowed");
    
            NewinputString = "";
            return "";
          }
        });
    
        return NewinputString;
      }
    return (
        <div>
            <form onSubmit={handleSubmit} className='mb-3'>
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
                {/* <div className='mt-2'>
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
                </div> */}
                <button class="button orange mt-3 w-100" onClick={handleSubmit}>Generate Video</button>
            </form>
            {videoUrl && (
                <video controls onClick={() => addObject(videoUrl)}
                >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>

    );
};

export default VideoGeneration;
