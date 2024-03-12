/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useRecorder from "../assets/useRecorder";
import {
  Microphone,
  Stop,
  ArrowRight,
  ArrowLeft,
  Pause,
  Play,
  Record,
} from "phosphor-react";
import { useNavigate } from "react-router-dom";
// import Waveform from "../Components/Audio/WaveForm";
// import Safe from './Safe';
// import Instructions from "../Components/CommoComponent/Instructions";

function valuetext(value) {
  return `${value}°C`;
}

function TalkingAvatar() {
  const [IsHide, setIsHide] = useState(0);
  const [IsBrowser, setIsBrowser] = useState(0);
  let [
    audioURL,
    isRecording,
    startRecording,
    stopRecording,
    pause,
    setPause,
    resume,
    setResume,
    setIsRecording,
    setReset,
  ] = useRecorder();
  const [selectedFile, setSelectedFile] = useState(null);
  const [audioUrl1, setAudioUrl] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [outputFileName, setOutputFileName] = useState("recorder-file.wav");
  const [value, setValue] = useState([20, 30]);
  const [liveRecord, setLiveRecord] = useState(false);
  const [Imagepng, setImage] = useState();
  const [imgData, setImgData] = useState(null);
  // const [range, setRange] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState();
  const [outPutVideo, setoutPutVideo] = useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();

  const handleFileChange = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("handleFileChange2");
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (
        selectedFile.name.endsWith(".wav") ||
        selectedFile.name.endsWith(".mp3")
      ) {
        handleFile(event);
      } else {
        alert("Please select a valid wav or mp3 file");
        event.target.value = "";
      }
    }
  };
  const handleFileChange2 = async (event) => {
    event.preventDefault();
    console.log("handleFileChange2");
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (
        selectedFile.name.endsWith(".PNG") ||
        selectedFile.name.endsWith(".png")
      ) {
        handleFile2(event);
      } else {
        alert("Please select a valid png file");
        event.target.value = "";
      }
    }
  };


  const handleVoice = (id) => {
    setLiveRecord(true);
    setIsBrowser(id);
  };
  const handleRecord = () => {
    setLiveRecord(!liveRecord);
  };

  const fetchWavBlob = async () => {
    try {
      const response = await fetch(audioURL); // Use audioURL directly
      const blob = await response.blob();

      // Verify that the fetched blob is an audio type (optional)
      if (blob.type.startsWith("audio/")) {
        setSelectedFile(blob);
        console.log("recorded file", selectedFile);
      } else {
        console.error("The fetched Blob is not an audio type.");
      }
    } catch (error) {
      console.error("Error fetching Blob:", error);
    }
  };

  useEffect(() => {
    setAudioUrl(audioURL); // Use audioURL directly
    console.log("recorder");
    localStorage.setItem("audurl", audioURL);

    // Remove setSelectedTrack(audioUrl1) as it's not needed

    if (audioURL) {
      // Check audioURL instead of audioUrl1
      fetchWavBlob()
      const fileName = `recorder-file.wav`;
      setOutputFileName(fileName);
      setIsHide(1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioURL]); // Use audioURL directly in the dependency array

  const handleFile = (event) => {
    setIsHide(1);
    setSelectedFile(event.target.files[0]);

    console.log("mp3:", selectedFile);

    localStorage.setItem("audurl", URL.createObjectURL(event.target.files[0]));
    setSelectedTrack(URL.createObjectURL(event.target.files[0]));
  };
  const handleFile2 = (event) => {
    setImage(event.target.files[0]);
    console.log("png:", event.target.files[0]);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImgData(reader.result);
    });
    reader.readAsDataURL(event.target.files[0]);

    localStorage.setItem("setImage", event.target.files[0]);
  };
  const handleNext = async () => {
    setIsHide(7);
  };

  const handleUpload = async () => {
    setIsHide(2);
    const formData = new FormData();
    formData.append("audio", selectedFile);
    formData.append("image", Imagepng);
    try {
      const response = await fetch("https://bharataudio.aicte-india.org/face-ai/face-ai/run-inference", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        setIsHide(8)
        throw new Error("Error processing files");
      
      }
      const videoBlob = await response.blob();
      setoutPutVideo(URL.createObjectURL(videoBlob));
    } catch (error) {
      console.error("Error:", error.message);
      setIsHide(8)
    }
  };
  const handleDownload = () => {
    if (!outPutVideo) {
      return;
    }

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = outPutVideo;
    link.download = 'result_video.mp4';
    link.click();
  };
  return (
    <>
      {IsHide === 0 ? (
        <>
     
          <section
            style={{
              textAlign: "center",
              position: "relative",
              marginTop: -120,
            }}
          >
            <div className="page-container">
              <div
                style={{
                  border: "#ccc 2px dotted",
                  marginTop: -120,
                  zIndex: 0,
                  position: "relative",
                  borderRadius: 10,
                  background: "#fff",
                  padding: 50,
                  width: "100%",
                  margin: "auto",
                }}
              >
                {liveRecord ? (
                  <>
                    <div className="mb-3">
                      <div className="text-start">
                        <button
                          type="file"
                          onClick={() => navigate(-0)}
                          className="button orange clickForFour"
                          style={{
                            padding: "10px 15px 10px",
                            display: "inline-flex",
                            gap: 6,
                          }}
                        >
                          <ArrowLeft size={20} /> Back
                          {/* <svg viewBox="0 0 24 24" style={{width:20}} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.3153 16.6681C15.9247 17.0587 15.9247 17.6918 16.3153 18.0824C16.7058 18.4729 17.339 18.4729 17.7295 18.0824L22.3951 13.4168C23.1761 12.6357 23.1761 11.3694 22.3951 10.5883L17.7266 5.9199C17.3361 5.52938 16.703 5.52938 16.3124 5.91991C15.9219 6.31043 15.9219 6.9436 16.3124 7.33412L19.9785 11.0002L2 11.0002C1.44772 11.0002 1 11.4479 1 12.0002C1 12.5524 1.44772 13.0002 2 13.0002L19.9832 13.0002L16.3153 16.6681Z" fill="#fff"></path> </g></svg> */}
                        </button>
                      </div>
                      {isRecording ? (
                        <React.Fragment>
                          <button
                            className="green button "
                            style={{ marginRight: 10 }}
                            onClick={stopRecording}
                            disabled={!isRecording}
                          >
                            <Stop size={20} />
                            Stop
                          </button>
                          {pause != false ? (
                            <>
                              <button
                                className=" orange button "
                                onClick={() => {
                                  setPause(false);
                                  setResume(true);
                                }}
                              >
                                <Record size={20} weight="fill" /> Play
                              </button>
                              {/* <button className="stopbutton startbutton" onClick={() => { setText(""); setCurrentQuery("") }} disabled={!isRecording}><ArrowClockwise size={32} weight="bold" /></button> */}
                            </>
                          ) : (
                            <>
                              <button
                                className=" orange button "
                                onClick={() => {
                                  setPause(true);
                                }}
                              >
                                <Pause size={20} />
                                Pause
                              </button>
                              {/* {Text ? <button className="stopbutton startbutton" onClick={() => { setText(""); setCurrentQuery("") }} disabled={!isRecording}><ArrowClockwise size={20} /></button> : ""} */}
                            </>
                          )}
                        </React.Fragment>
                      ) : (
                        <>
                          {/* <div className='text-start'>
                                          <button className='orange button'>back</button>
                                           </div>                                             */}
                          <div className="text-center">
                            <button
                              className="green button"
                              onClick={(e) => {
                                startRecording();
                              }}
                              disabled={isRecording}
                            >
                              Record
                              <Microphone size={30} />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <div
                      className="chakra-heading"
                      style={{ fontSize: 20, fontWeight: "bold" }}
                    >
                      Drag and drop a audio file (.wav) that you want to Use
                    </div>
                    <p className="chakra-text">or</p>
                    <div className="upload-btn-wrapper">
                      <input
                        type="file"
                        style={{
                          fontSize: 26,
                          borderRadius: 10,
                          padding: "15px 30px",
                        }}
                        onChange={handleFileChange}
                      />
                      <div className="button orange opnoriginalResultDiv">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          focusable="false"
                          className="chakra-icon css-13otjrl"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          style={{
                            width: 30,
                            height: 30,
                            position: "relative",
                            top: 0,
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                            d="M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69 0-113.44 45.79-128 91.2-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56"
                          ></path>
                          <path
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                            d="M320 255.79l-64-64-64 64m64 192.42V207.79"
                          ></path>
                        </svg>
                        Browse computer
                      </div>
                    </div>
                    <div className="txt-eg">
                      Supported file format: WAV, Max file size 10MB.
                    </div>
                    <br />
                    <p className="chakra-text">or</p>
                
                  </>
                )}

                {!liveRecord ? (
                  <button
                    type="file"
                    className="button green clickForLiveRecord"
                    onClick={() => handleRecord()}
                    style={{
                      fontSize: 14,
                      borderRadius: 25,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Microphone size={20} />
                    Live Record
                  </button>
                ) : null}
              </div>
            </div>
          </section>
        </>
      ) : (
        ""
      )}

      {IsHide === 1 && (
        <>
          <section
            style={{
              textAlign: "center",
              marginTop: -140,
              position: "relative",
              marginBottom: 50,
            }}
          >
            <div className="page-container">
              <div
                className="stepThree"
                style={{
                  border: "2px dotted rgb(204, 204, 204)",
                  borderRadius: 10,
                  background: "rgb(255, 255, 255)",
                  padding: 50,
                  width: "100%",
                  margin: "auto",
                }}
              >
                <div style={{ textAlign: "left" }}>
                  <div className="upload-btn-wrapper">
                    <input
                      type="file"
                      style={{
                        fontSize: 26,
                        borderRadius: 10,
                        padding: "15px 30px",
                      }}
                      onChange={handleFileChange}
                    />
                  </div>
                  <div style={{ textAlign: "start" }}>
                    <button
                      type="file"
                      onClick={() => navigate(-0)}
                      className="button orange clickForFour"
                      style={{
                        padding: "10px 15px 10px",
                        display: "inline-flex",
                        gap: 6,
                      }}
                    >
                      <ArrowLeft size={20} /> Back
                    </button>
                  </div>
                  <h3
                    style={{
                      marginBottom: 15,
                      fontSize: 14,
                      textAlign: "start",
                    }}
                  >
                    Input File : {selectedFile?.name}
                  </h3>
                </div>
                <div className="waveBox"></div>
                <div style={{ textAlign: "right" }}>
                  <button
                    type="file"
                    onClick={handleNext}
                    className="button orange clickForFour"
                    style={{
                      padding: "10px 15px 10px",
                      display: "inline-flex",
                      gap: 6,
                    }}
                  >
                    <ArrowRight size={20} /> Next
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {!outPutVideo && IsHide === 2 ? (
        <>
          <div
            className="page-container"
            style={{
              textAlign: "center",
              marginTop: -140,
              position: "relative",
              marginBottom: 50,
            }}
          >
            <div
              className="stepFour clickForFive"
              style={{
                borderRadius: 10,
                background: "rgb(190, 227, 248)",
                padding: 50,
                width: "100%",
                margin: "auto",
              }}
            >
              <p className="chakra-text">
                <img
                  src="./assets/images/loader_bagic.gif"
                  alt=""
                  style={{ width: 65 }}
                />
              </p>
              <div
                className="chakra-heading"
                style={{ fontSize: 20, fontWeight: "bold" }}
              >
                Your Video file is being processed...
              </div>
              <p className="chakra-text">
                This may take some time. Stay on this page or come back later to
                get the result.
              </p>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {outPutVideo ? (
        <>
          <div
            className="page-container"
            style={{
              textAlign: "center",
              marginTop: -160,
              position: "relative",
              marginBottom: 50,
            }}
          >
            <div className="row">
              <div className="col-lg-12">
                <div className="text-end mb-3">
                  <button
                    type="file"
                    onClick={() => navigate(0)}
                    className="button green clickForOne"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      focusable="false"
                      className="chakra-icon css-13otjrl"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="48"
                        d="M244 400L100 256l144-144M120 256h292"
                      ></path>
                    </svg>
                    Edit another file
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div
                  style={{
                    border: "#ccc 2px dotted",
                    borderRadius: 10,
                    background: "#fff",
                    padding: "20px 20px 84px",
                    width: "100%",
                    margin: "auto",
                  }}
                >
                  <div className="waveBox text-start">
                    <h3>Output Video File </h3>
              
                    {outPutVideo? <><video controls src={outPutVideo} /></>:null}
              
                  </div>
                </div>
              </div>
            </div>
            <div className="stepFive mt-3">
              <div
                style={{
                  borderRadius: 10,
                  background: "#c6f6d5",
                  padding: "10px 20px 20px",
                  width: "100%",
                  margin: "auto",
                }}
              >
                <p className="chakra-text">
                  <img
                    src="./assets/images/icon-success.png"
                    alt=""
                    style={{ width: 65 }}
                  />
                </p>
                <div
                  className="chakra-heading"
                  style={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Your Video file was successfully processed!
                </div>
              </div>
              <br />
              <br />

              <div className="mt-4">
                <button
                  onClick={handleDownload}
                  className="button orange opnoriginalResultDiv"
                  style={{
                    fontSize: 24,
                    borderRadius: 10,
                    padding: "15px 30px 15px",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="chakra-icon css-13otjrl"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    style={{
                      width: 30,
                      height: 30,
                      position: "relative",
                      top: 0,
                    }}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 12V19M12 19L9.75 16.6667M12 19L14.25 16.6667M6.6 17.8333C4.61178 17.8333 3 16.1917 3 14.1667C3 12.498 4.09438 11.0897 5.59198 10.6457C5.65562 10.6268 5.7 10.5675 5.7 10.5C5.7 7.46243 8.11766 5 11.1 5C14.0823 5 16.5 7.46243 16.5 10.5C16.5 10.5582 16.5536 10.6014 16.6094 10.5887C16.8638 10.5306 17.1284 10.5 17.4 10.5C19.3882 10.5 21 12.1416 21 14.1667C21 16.1917 19.3882 17.8333 17.4 17.8333"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                  Download
                </button>
                <div className="txt-eg">result_video.mp4</div>
              </div>
              <br />
              <br />
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {IsHide === 7 && (
        <>
          <section
            style={{
              textAlign: "center",
              marginTop: -140,
              position: "relative",
              marginBottom: 50,
            }}
          >
            <div className="page-container">
              <div
                className="stepThree"
                style={{
                  border: "2px dotted rgb(204, 204, 204)",
                  borderRadius: 10,
                  background: "rgb(255, 255, 255)",
                  padding: 50,
                  width: "100%",
                  margin: "auto",
                }}
              >
                <div style={{ textAlign: "left" }}>
                  <div style={{ textAlign: "start" }}>
                    <button
                      onClick={() => navigate(-0)}
                      className="button orange clickForFour"
                      style={{
                        padding: "10px 15px 10px",
                        display: "inline-flex",
                        gap: 6,
                      }}
                    >
                      <ArrowLeft size={20} /> Back
                    </button>
                  </div>
                  <h3
                    style={{
                      marginBottom: 15,
                      fontSize: 14,
                      textAlign: "start",
                    }}
                  >
                    Input File : {selectedFile?.name}
                  </h3>
                </div>
                {!Imagepng && (
                  <>
                    <div
                      className="chakra-heading"
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        marginBottom: 15,
                      }}
                    >
                      Drag and drop a Image file (PNG) with a face
                    </div>
                    <div className="upload-btn-wrapper">
                      <input
                        type="file"
                        style={{
                          fontSize: 26,
                          borderRadius: 10,
                          padding: "15px 30px",
                        }}
                        onChange={handleFileChange2}
                      />
                      <div className="button orange opnoriginalResultDiv">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          focusable="false"
                          className="chakra-icon css-13otjrl"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          style={{
                            width: 30,
                            height: 30,
                            position: "relative",
                            top: 0,
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                            d="M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69 0-113.44 45.79-128 91.2-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56"
                          ></path>
                          <path
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                            d="M320 255.79l-64-64-64 64m64 192.42V207.79"
                          ></path>
                        </svg>
                        Browse Computer
                      </div>
                    </div>
                  </>
                )}
                {Imagepng && (
                  <>
                    <img src={imgData} alt="Loading..." width={"100%"} />
                  </>
                )}
                <br />
                <br />
                <br />
                <br />

                <div className="waveBox"></div>
                <div style={{ textAlign: "right" }}>
                  <button
                    type="file"
                    onClick={handleUpload}
                    className="button orange clickForFour"
                    style={{
                      padding: "10px 15px 10px",
                      display: "inline-flex",
                      gap: 6,
                    }}
                  >
                    <ArrowRight size={20} /> Next
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default TalkingAvatar;
