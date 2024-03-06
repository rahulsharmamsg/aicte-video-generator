import React, { useState } from "react";
import useRecorder from "../utils/useRecorder";
import { CirclesWithBar } from "react-loader-spinner";
import {
  ArrowClockwise,
  Microphone,
  Pause,
  Record,
  Stop,
} from "phosphor-react";
import axios from "axios";
import CanvasComponent from "./ImageCanvasComponent";
import TranslatorInput from "./Translation";
import { useEditor } from "@layerhub-io/react";
import { set } from "lodash";
const LanguageList = {
  "en-IN": "English",
  "hi-IN": "हिंदी [Hindi]",
  "te-IN": "తెలుగు [Telugu]",
  "ta-IN": "தமிழ் [Tamil]",
  "kn-IN": "ಕನ್ನಡ [Kannada]",
  "ml-IN": "മലയാളം [Malayalam]",
  "mr-IN": "मराठी [Marathi]",
  "gu-IN": "ગુજરાતી [Gujarati]",
  "bn-IN": "বাঙ্গালি [Bengali]",
  "ur-IN": "اردو [Urdu]",
  "ru-RU": "Русский [Russian]",
  "es-ES": "Español [Spanish]",
  "fr-BE": "Français [French]",
  "zh-TW": "中国人 [Chinese]",
  "ar-AE": "عربي [Arabic]",
  "pt-PT": "Português [Portuguese]",
  "su-ID": "basa Sunda [Sundanese]",
  "de-AT": "Deutsch [German]",
  "ja-JP": "日本 [Japanese]",
  "ko-KR": "한국인 [Korean]",
  "it-IT": "Italiano [Italian]",
  "tr-TR": "Türkçe [Turkish]",
  "ms-MY": "Melayu [Malay]",
};
function ImageGeneration() {
  let [
    audioURL,
    isRecording,
    startRecording,
    stopRecording,
    pause,
    setPause,
    setResume,
  ] = useRecorder();
  const [loading, setLoading] = useState(false);
  const [vkeyboard, setvkeyboard] = useState(false);
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [Text, setText] = useState("");
  const [TransText, setTransText] = useState("");
  const [imageSrc, setImageSrc] = useState([]);

  function trimSpecialCharacters(inputString) {
    // Use regular expression to remove all non-alphanumeric characters
    return inputString.replace(/[^a-zA-Z0-9 ]/g, "");
  }
  let unwantedWords = [
    "bad",
    "sample",
    "narendra",
    "modi",
    "prime",
    "minister",
  ];
  const editor = useEditor();

  const addObject = React.useCallback(
    (url) => {
      if (editor) {
        const options = {
          type: "StaticImage",
          src: url,
        };

        editor.objects.add(options);
      }
    },
    [editor]
  );
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
  React.useEffect(() => {
    const fetchText = async () => {
      let fileName = `aud.wav`;
      let fd = new FormData();
      const output = await axios({
        method: "get",
        url: audioURL, // blob url eg. blob:http://127.0.0.1:8000/e89c5d87-a634-4540-974c-30dc476825cc
        responseType: "blob",
      });
      const selectedLang = sourceLanguage;
      let files = new File([output.data], fileName, { type: "audio/wav" });
      fd.append("file", files);
      fd.append("language", selectedLang);
      let config = {
        "Content-Type": "multipart/form-data",
      };
      axios
        .post("https://voiceapi.aicte-india.org/voice-to-text", fd)
        .then(async (res) => {
          setLoading(false);
          const textResponse = res.data;
          if (
            textResponse &&
            textResponse.data !== "" &&
            textResponse.data !== undefined
          ) {
            setText(textResponse.data.replace(/\.$/, ""));
          }
        })
        .catch((errr) => {
          setLoading(false);
          console.log("Invalid query!");
        });
    };
    if (audioURL !== undefined && audioURL !== "") {
      fetchText();
    }
  }, [audioURL]);

  const generateImage = async () => {
    let prompt = "";
    if (Text == "") {
      alert("Please enter a prompt");
      return;
    }
    let fd = new FormData();
    fd.append("text", Text);
    fd.append("outputLang", "en-IN");

    let payload = { text: Text, outputLang: "en-IN" };
    setLoading(true);
   const res =  await axios.post("https://voiceapi.aicte-india.org/text-to-text", payload);
 
        setTransText(res.data.data);
        let censorStrin = censorString(res.data.data);
        if (censorStrin == "") {
          return;
        }
       

        let formData = new FormData();
        formData.append("prompt", censorStrin);
        try {
          setLoading(true);
          setImageSrc("");
          const promises = [];
          const resData =  await axios.post('https://bharattube.aicte-india.org/api/generate-image/generate-image', formData, { prompt });       
         console.log(resData,'generate image')
         setLoading(false);
          promises.push(resData);
          const imageData = promises.map((response) => response.data.base64);
          setImageSrc(imageData);
          if(resData){
            for (let i = 0; i < 2; i++) { // Adjust number of images if needed
              const resData1 =   await axios.post('https://bharattube.aicte-india.org/api/generate-image/generate-image', formData, { prompt });       
              promises.push(resData1);
            }    
            const imageData = promises.map((response) => response.data.base64);
            setImageSrc(imageData);

          }

     
  
          
        } catch (error) {
          console.error(error);
          setLoading(false);
        }

  };

  

  return (
    <>
      
      <section className="logoSec youtubeSessionSec">
        <div className="sessionDiv" style={{height:"83vh", overflow:"auto"}}>
          <div className="dashBrdLftInScndLayer">
            <div
              className="cntnrLogo"
              style={{
                display: "flex",
                alignContent: "flex-start",
                justifyContent: "center",
              }}
            >
              {/* <img src={bharat_voice} style={{ height: "14vh" }} alt="logo" /> */}
              {/* <img
                className="madeInBhrt"
                src={madeinBharat}
                style={{ height: "10vh" }}
                alt="logo"
              /> */}
            </div>
            <div className="videoSldrCnt">
              <h3 className="scndryHdng">Image Generation</h3>
              {/* <p>
                Transform your creative text into images using voice commands in
                Bharatiya languages.
              </p> */}
            </div>

            <div className="realtimevideoCnt mt-3">
              <div className="inputGroup">
                <select onChange={(e) => setSourceLanguage(e.target.value)} className="form-control">
                  <option value="" disabled selected>
                    Select a Source language
                  </option>
                  {Object.keys(LanguageList).map((key) => (
                    <option key={key} value={key}>
                      {LanguageList[key]}
                    </option>
                  ))}
                </select>{" "}
                {sourceLanguage ? (
                  <>
                    <div className="inputfrom mt-3" style={{position: "relative"}}>
                      <input className="form-control"
                        type="text"
                        placeholder="Enter Your Prompt"
                        value={Text}
                        onChange={(e) => setText(e.target.value)}
                      />

                      {isRecording ? (
                        <React.Fragment>
                          <button
                            className="stopbutton button orange mt-3" 
                            onClick={stopRecording}
                            disabled={!isRecording}
                          >
                            <Stop size={20} weight="fill" />
                          </button>
                          {pause != false ? (
                            <>
                              <button
                                className="startbutton button green mt-3"
                                onClick={() => {
                                  setPause(false);
                                  setResume(true);
                                }}
                              >
                                <Record size={20} weight="fill" />
                              </button>
                              <button
                                className="stopbutton button orange mt-3"
                                onClick={() => {
                                  setText("");
                                }}
                                disabled={!isRecording}
                              >
                                <ArrowClockwise size={20} weight="bold" />
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                className="stopbutton button orange mt-3"
                                onClick={() => {
                                  setPause(true);
                                }}
                              >
                                <Pause size={20} weight="fill" />
                              </button>
                              {Text ? (
                                <button
                                  className="startbutton button orange mt-3"
                                  onClick={() => {
                                    setText("");
                                  }}
                                  disabled={!isRecording}
                                >
                                  <ArrowClockwise size={20} />
                                </button>
                              ) : (
                                ""
                              )}
                            </>
                          )}
                        </React.Fragment>
                      ) : (
                        <button
                          className="startbutton button green mt-3"
                          onClick={(e) => {
                            startRecording();
                            setText("");
                          }}
                          disabled={isRecording}
                        >
                          <Microphone size={20} weight="fill" />
                        </button>
                      )}

                      
                      <button onClick={generateImage} className="button orange mt-3">
                        Generate image
                      </button>
                      <button
                        onClick={() => setvkeyboard(!vkeyboard)}
                        className="button orange mt-3 w-100"
                      >
                        Virtual Keyboard
                      </button>
                    </div>
                    <br />
                  </>
                ) : null}
                </div>
                {vkeyboard &&<div className="inputGroup">
                <TranslatorInput />
              </div>}
              {console.log("imgscr",imageSrc)}
              <div style={{display:"flex",flexWrap:"wrap", gap:"15px"}}>
              
                {imageSrc && imageSrc.map((img, index) => (
                  (
                    <div >
                      
                      <div style={{width:"100px",height:"100px"}} >
                       
                        <CanvasComponent  size={10} base64img={img} />
                        
                      </div>
                     
                    </div>
                  )
                ))
                }
                </div>
                {loading && (
                  <div className="loading-overlay">
                    <div className="load">
                      <CirclesWithBar
                        height="100"
                        width="100"
                        color="#4fa94d"
                        outerCircleColor="#4fa94d"
                        innerCircleColor="#4fa94d"
                        barColor="#4fa94d"
                        ariaLabel="circles-with-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                      />
                      <h4>Loading...</h4>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
    
      </section>
    </>
  );
}

export default ImageGeneration;