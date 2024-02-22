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
      console.log(files);
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
    console.log(audioURL,"hello")
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

    axios
      .post("https://voiceapi.aicte-india.org/text-to-text", payload)
      .then(async (res) => {
        setTransText(res.data.data);
        console.log(TransText);
        let censorStrin = censorString(res.data.data);
        if (censorStrin == "") {
          return;
        }
        const url =
          "https://bharattube.aicte-india.org/api/generate-image/generate-image";

        let formData = new FormData();
        formData.append("prompt", censorStrin);
        try {
          setLoading(true);
          setImageSrc("");
          const response = await axios.post(url, formData);
          setLoading(false);
          setImageSrc((prevImageSrc) => [...prevImageSrc, response.data.base64]);
          // want to call the function multiple times
          const response2 = await axios.post(url, formData);
          setImageSrc((prevImageSrc) => [...prevImageSrc, response2.data.base64]);
          const response3 = await axios.post(url, formData);
          const response4 = await axios.post(url, formData);
          const response5 = await axios.post(url, formData);
          const response6 = await axios.post(url, formData);
          console.log(response.data.base64);
          // add the generated image to the imageSrc array
          setImageSrc((prevImageSrc) => [
            ...prevImageSrc,
            response.data.base64,
            response2.data.base64,
            response3.data.base64,
            response4.data.base64,
            response5.data.base64,
            response6.data.base64,
          ]);
          
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      });
  };

  return (
    <>
      
      <section className="logoSec youtubeSessionSec">
        <div className="sessionDiv">
          <div className="container">
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
              <h2>Speech to Image 22 AI</h2>
              <p>
                Transform your creative text into images using voice commands in
                Bharatiya languages.
              </p>
            </div>

            <div className="realtimevideoCnt">
              <div className="inputGroup">
                <select onChange={(e) => setSourceLanguage(e.target.value)}>
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
                    <div className="inputfrom">
                      <input
                        type="text"
                        placeholder="Enter Your Prompt"
                        value={Text}
                        onChange={(e) => setText(e.target.value)}
                      />

                      {isRecording ? (
                        <React.Fragment>
                          <button
                            className="stopbutton button orange"
                            onClick={stopRecording}
                            disabled={!isRecording}
                          >
                            <Stop size={20} weight="fill" />
                          </button>
                          {pause != false ? (
                            <>
                              <button
                                className="startbutton button green"
                                onClick={() => {
                                  setPause(false);
                                  setResume(true);
                                }}
                              >
                                <Record size={20} weight="fill" />
                              </button>
                              <button
                                className="stopbutton button orange"
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
                                className="stopbutton button orange"
                                onClick={() => {
                                  setPause(true);
                                }}
                              >
                                <Pause size={20} weight="fill" />
                              </button>
                              {Text ? (
                                <button
                                  className="startbutton button orange"
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
                          className="startbutton button green"
                          onClick={(e) => {
                            startRecording();
                            setText("");
                          }}
                          disabled={isRecording}
                        >
                          <Microphone size={20} weight="fill" />
                        </button>
                      )}

                      <button
                        onClick={() => setvkeyboard(!vkeyboard)}
                        className="button orange"
                      >
                        Virtual Keyboard
                      </button>
                      <button onClick={generateImage} className="button orange">
                        Generate image
                      </button>
                    </div>
                  </>
                ) : null}
                </div>
                {vkeyboard &&<div className="inputGroup">
                <TranslatorInput />
              </div>}
              {console.log("imgscr",imageSrc)}
              
                {imageSrc && imageSrc.map((img, index) => (
                  (
                    <div className="inputGroup">
                      
                      <div>
                       
                        <CanvasComponent base64img={imageSrc} />
                        
                      </div>
                     
                    </div>
                  )
                ))
                }
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