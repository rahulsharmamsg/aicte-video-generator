import React, { useContext, useEffect, useState, useRef} from "react"; 
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";

import {Progress} from 'react-sweet-progress'
import { VideoCamera } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context.js";
import ReactPlayer from "react-player";
import { useEditor } from "@layerhub-io/react"
import useSetIsSidebarOpen from "../hooks/useSetIsSidebarOpen.tsx"
import { nanoid } from "nanoid"
import { captureFrame, loadVideoResource } from "../utils/video.ts"

function UploadFile() {
  const [show, setShow] = useState(false);
  const [videoorigin, setVideoorigin] = useState(0);
  const [videourl, setVideourl] = useState(0);
  const [video, setVideo] = useState();
  const [isloading,serIsloading] = useState(false)
  const [Recordedvideo, setRecordedVideo] = useState();
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [timer, settimer] = useState(100);
  const [blobLoading,setBlobLoading] = useState(false)
  const [aud,setAud] = useState()
  const [vid,setVid] = useState()
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  let navigate = useNavigate();

  const studentData = useContext(AppContext);
  // const { setVideoData } = useContext(AppContext);
  const handleSubmit = () => {
    serIsloading(true)
    let videoData = null
    let forms = JSON.parse(localStorage.getItem("videodata"));


  console.log(studentData,"this is studentData")

    let formData = new FormData();
    formData.append("file",video);
    formData.append("state", studentData?.student?.state_name);
    formData.append("stateId", studentData?.student?.stateId);
    formData.append("school", studentData?.student?.school_name);
    formData.append("district", studentData?.student?.district_name);
    formData.append("districtId", studentData?.student?.districtId);
    formData.append("uniqueId", studentData?.student?.unique_id);
    formData.append("tokens", "positive" );
    formData.append("name", studentData?.student?.name_of_student);
    formData.append("contact", studentData?.student?.mobile);
    formData.append("email", studentData?.student?.email);
    formData.append("school_email", studentData?.student?.school_email);
    formData.append("gender", studentData?.student?.gender);
  
    // console.log("formdata=", forms);
// Fetch the Blob data from the URL
fetch(videourl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();
  })
  .then(blobData => {
    // Store the Blob data in the videofile variable
    let videofile = blobData;

    // Create a Blob with the correct MIME type (e.g., video/mp4)
    var videoBlob = new Blob([videofile], { type: 'video/mp3' });

    // Create a data URL for the Blob
    videoData = URL.createObjectURL(videoBlob);

    // You can now use videoDataURL as a data URL for the video file
    console.log('Data URL for the video file:', videoData);

    // If you want to display the video in an HTML video element, you can set the src attribute
    // var videoElement = document.getElementById('your-video-element-id');
    // videoElement.src = videoDataURL;
  })
  .catch(error => {
    console.error('Error fetching Blob data:', error);
  });
    
    let fileName2 = `vid.mp4`;
    let videes = new Blob([videourl], { type: 'video/mp4' });
 
    // formData.append("tokens", "positive" );

    let formData2 = new FormData();
    // const blob = new Blob([video],{type: 'audio/wav'})
    let fileName = `aud`;
    let files = new File([aud], fileName);
    formData2.append("file", files)
    formData2.append("language",localStorage.getItem('lang'))
    

    axios.post('https://voiceapi.aicte-india.org/voice-to-text',formData2)
    .then(async res=>{
      const post = {
        outputLang:'en-IN',
        text:res?.data.data 
      }
      let text = res?.data.data
      axios.post('https://voiceapi.aicte-india.org/text-to-text',post)
      .then(res=>{
        const post = {
          text:res?.data.data
        }
        localStorage.setItem('transcript',res?.data.data)
        axios.post("https://anuvadiniqa.aicte-india.org/face/analyze_text",post)
        .then(async res=>{
          formData.append("text", text);
          formData.append("tone", res?.data?.result?.tone);
          if(!studentData?.student){
            alert("All filds are required")
            navigate("/face-analyser");
            return;
          }

          await axios.post("https://anuvadiniqa.aicte-india.org/face/upload_vid", formData, {})
        .then((res) => {
          if (res.data.status == "success") {
            localStorage.setItem("reasponse", JSON.stringify(res.data.result));
            navigate("/face-analyser/AiDiscription");
          }
        })
        .catch((err) => {
          console.log(err, `error`);
          serIsloading(true)
        });
        })
      })
      .catch(err=>{
        console.log(err)
        serIsloading(true)
      })
    })
    .catch(err=>{console.log(err)})
    
  };

 
  function checkVideoDuration(file) {
    var video = document.createElement("video");
    video.preload = "metadata";
    video.onloadedmetadata = function () {
      window.URL.revokeObjectURL(video.src);
      var duration = video.duration;
      if (duration <= 30) {
        // console.log("Video is less than or equal to 15 seconds long");
      } else {
        alert("Video is longer than 30 seconds");
        setVideourl()
        setVideo()
      }
    };
    video.src = URL.createObjectURL(file);
  }


  const inputFileRef = React.useRef(null)
  const [uploads, setUploads] = React.useState([])
  const editor = useEditor()


  const handleDropFiles = async (files) => {
    try {
      const file = files[0]
  
      const base64 = (await toBase64(file))
      const video = await loadVideoResource(base64)
      
      if (!video) {
        console.error("Failed to load video resource.")
        return
      }
  
      const frame = await captureFrame(video)
  
      const type = file.type.includes("video") ? "StaticVideo" : "StaticImage"
  
      const upload = {
        id: nanoid(),
        src: base64,
        preview: frame,
        type: type,
      }
  
      setUploads([...uploads, upload])
    } catch (error) {
      console.error("Error processing file:", error)
    }
  }
  

  const handleInputFileRefClick = (e) => {
    e.preventDefault()
    inputFileRef.current?.click()

    handleFileInput(e);
  }

  const handleFileInput = (e) => {
    handleDropFiles(e.target.files)
  }

  const addImageToCanvas = (props) => {
    console.log(props,"props")
    editor.objects.add(props)
  }

  const createAudio = (file) =>{
    setBlobLoading(true)
    if (file) {
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
        // Create a FileReader to read the selected file
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
  
        fileReader.onload = async () => {
          const arrayBuffer = fileReader.result;
          const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  
          // Create a MediaStream destination node to capture audio
          const destinationNode = audioContext.createMediaStreamDestination();
          const sourceNode = audioContext.createBufferSource();
          sourceNode.buffer = audioBuffer;
          sourceNode.connect(destinationNode);
          sourceNode.start();
  
          // Create a MediaRecorder to capture the audio stream
          const mediaRecorder = new MediaRecorder(destinationNode.stream);
  
          const chunks = [];
          mediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) {
              chunks.push(e.data);
            }
          };
  
          mediaRecorder.onstop = () => {
            // Combine the captured audio chunks into a Blob
            const audioBlob = new Blob(chunks, { type: 'audio/wav' });
            
  
            // Do something with the audioBlob (e.g., upload it, process it, etc.)
            console.log(audioBlob);
            setAud(audioBlob)
       
            if(audioBlob){
              setBlobLoading(false)
            }
            // Clean up resources
            audioContext.close();
          };
  
          // Start recording
          mediaRecorder.start();
  
          // Stop recording after a short duration (adjust as needed)
          setTimeout(() => {
            mediaRecorder.stop();
          }, 30000); // Recording for 5 seconds
        };
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }

  const handleFile = (e) => {
    let files = e.target.files;
    if (files.length === 1) {
      let file = files[0];
      // setBlobLoading(true)
      createAudio(file)
      setVideourl(URL.createObjectURL(file));
      setVideo(file)
      checkVideoDuration(file);
    }

    let allowedExtensions = ["webm", "mp4"];
    if (!allowedExtensions.includes(e.target.files[0].type.split("/")[1])) {
      alert("Only webm,mp4 Video file allowed");
      e.target.files[0] = "";
    } else {
      setVideo(e.target.files[0]);
    }
  };
  useEffect(() => {
    setVideoorigin(1);
    setRecordedVideo(localStorage.getItem("recordedVideo"));
  }, [videourl]);
  const handleStartRecording = () => {
    setIsRecording(true);
    setRecordedChunks([]);
    Countdown()

    const stream = webcamRef.current.stream;
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = event => {
      if (event.data.size > 0) {
     
        setRecordedChunks(prevChunks => [...prevChunks, event.data]);
        // setVideoData(prevChunks => [...prevChunks, event.data]);
      }
    };

    mediaRecorderRef.current.start();
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      const blob = new Blob(recordedChunks, { type: 'video/mp4' });

      // Convert the Blob to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result;
        console.log('Base64 Data:', base64Data);

        // Create a data URL
        const dataURL = `data:video/mp4;base64,${base64Data}`;
        console.log('Data URL:', dataURL);

        // Now 'dataURL' contains the data URL for the recorded video
        // You can use 'dataURL' as needed (e.g., display the video or submit it)
      };
      reader.readAsDataURL(blob);
    }
  };

  const handleDownload = () => {
    const blob = new Blob(recordedChunks, { type: 'video/mp4' });
    // const blob2 = new Blob(recordedChunks, { type: 'audio/wav' });
    const url = URL.createObjectURL(blob);
    console.log(url,"url")
    // const a = document.createElement('a');
    // a.style.display = 'none';
    // a.href = url;
    // a.download = 'recorded-video.mp4';
    // document.body.appendChild(a);
    // setVideourl(url)
    // setVideo(url)
    // setAud(blob2)
    // setVid(blob)
    // // a.click();
    // window.URL.revokeObjectURL(url);
    // document.body.removeChild(a);
    const type = "StaticVideo";
    const upload = {
      id: nanoid(),
      src: url,
      preview: url,
      type: type,
    };

    setUploads([...uploads, upload]);
    const file = new File([blob],'video')
      createAudio(file)
      setVideourl(URL.createObjectURL(file));
      setVideo(file)
      // checkVideoDuration(file);
  };

  const ShareData = () => {
    const blob = new Blob(recordedChunks, { type: 'video/mp4' });
    const url = URL.createObjectURL(blob);
    // setVideoData(url);
    checkVideoDuration(url)
 
     
  };
  const Countdown = () => {
    let i = 100;
    let interval = setInterval(() => {
        settimer(i)
        i--;
        if (i < 0) {
            clearInterval(interval);
            handleStopRecording()
        }
    }, 300);
  }

 
  console.log(studentData,"57890765890756789075678907658 studentData")
  return (
    <>
      <main className="contentarea">
        
        <section className="selectlang">
          <div className="container">
            {isloading===true?     <>
                        <div className='container' style={{ textAlign: "center", marginTop: -120, position: "relative", marginBottom: 50 }}>
                            <div class="stepFour clickForFive" style={{ borderRadius: 10, background: "rgb(190, 227, 248)", padding: 50, width: "100%", margin: "auto" }}>
                                <p class="chakra-text">
                                    {/* <img src="./assets/images/loader_bagic.gif" alt="" style={{ width: 65 }} /> */}
                                    <div className="loader"></div>
                                    </p>
                                <div class="chakra-heading" style={{ fontSize: 20, fontWeight: "bold" }}>Your Video file is being processed...</div>
                                <p class="chakra-text">This may take some time. Stay on this page or come back later to get the result.</p>
                            </div>
                        </div>
                    </>:<>
                    
                    <div className="d-flex justify-content-between">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="uploadFile useBorder">
                  <div className="upload-btn-wrapper">
                    <a
                      className="button orange btn"
                      onClick={(e)=>handleInputFileRefClick(e)}
                      
                      style={{
                        fontSize: 26,
                        borderRadius: 10,
                        padding: "15px 30px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <rect width="256" height="256" fill="none"></rect>
                        <polyline
                          points="86 82 128 40 170 82"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        ></polyline>
                        <line
                          x1="128"
                          y1="152"
                          x2="128"
                          y2="40"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        ></line>
                        <path
                          d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        ></path>
                      </svg>
                      Upload Video
                    </a>
                    <input
                      type="file"
                      name="myfile"
                      
                      onChange={handleFileInput} id="file" ref={inputFileRef} style={{ display: "none" }}
                    />
                  </div>
                  
                </div>
                
              </div>
              <div className="or">or</div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="useBorder">
                  <Button variant="primary" onClick={handleShow}>
                    <VideoCamera size={28} /> Record
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Recording</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="p-3 text-center">
                      {/* <VideoRecorder  /> */}
                      <Webcam
                        audio={true}
                        mirrored={true}
                        ref={webcamRef}
                        videoConstraints={{
                          width: 1280,
                          height: 720,
                          facingMode: "user",
                        }}
                      />

                      {isRecording ? (
                        <>
                          <Progress percent={timer} />
                          <button
                            className="button orange"
                            onClick={handleStopRecording}
                          >
                            Stop Recording
                          </button>
                        </>
                      ) : (
                        <button
                          className="button green"
                          onClick={handleStartRecording}
                        >
                          Start Recording
                        </button>
                      )}

                      {recordedChunks.length > 0 && (
                        <button
                          className="button orange"
                          style={{ marginLeft: 10 }}
                          onClick={handleDownload}
                        >
                          Upload Recording
                        </button>
                      )}
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>

            {videourl.length>1 && (
              <div className="mt-4">
                {/* <ReactPlayer url={[
     {src: videourl.videoFileURL, type: 'video/mp4'}
 
   ]} />
   */}
                <div className="max-width-800 m-auto">
                  <video
                    src={videourl}
                    typeof="video/mp4"
                    autoPlay={true}
                    controls={true}
                    duta
                  />
                </div>
              </div>
            )}
            {uploads.map((upload) => (
                <div
                  key={upload.id}
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
                </div>
              ))}
            {/* <div className="mt-4">
              {
                blobLoading?
                <div className="loader">

                </div>:
                <Button
                type="button"
                className="button green"
                onClick={handleSubmit}
              >
                Submit
              </Button>
              }
              
            </div> */}
            </>}
         
          </div>
        </section>
      </main>
    </>
  );
}

export default UploadFile;


const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
