import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import useRecorder from "./useRecorder.js";
import {
  Stop,
  Record,
  ArrowClockwise,
  Microphone,
  Pause
} from "phosphor-react";
// import checkDictionary from "../../helpers/CheckDictionary";
import TeDictionary from "./dictionaries/te.json";
import HiDictionary from "./dictionaries/hi.json";
import KnDictionary from "./dictionaries/kn.json";
import TaDictionary from "./dictionaries/ta.json";
import MlDictionary from "./dictionaries/ml.json";
// import AsDictionary from "./dictionaries/as.json";
// import BaDictionary from "./dictionaries/ba.json";
// import GuDictionary from "./dictionaries/gu.json";
// import MrDictionary from "./dictionaries/mr.json";
// import OrDictionary from "./dictionaries/or.json";
// import PaDictionary from "./dictionaries/pa.json";
// import LanguageSelector from "./langselector.js";
import LangjsonFile from './langVoiceCodes.json';
import {
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinIcon,
  LinkedinShareButton
} from "react-share";
import "./transInput.css";
import "./bulma.min.css";
import './LanguageSelector.css';
import copy from "copy-to-clipboard";
import languagesList from './helpers/languages.json';
import "react-toastify/dist/ReactToastify.css";
const root_url = "https://translationlive.aicte-india.org";
// const root_url = "http://localhost:8080";
window.Buffer = window.Buffer || require("buffer").Buffer;

export default function TranslatorInput({lang}) {
  const lancode = lang?lang:{name:"hindi",value: "hi-IN"}
  // const [word, setWord] = useState();
  console.log("lang selected"+ lancode)
  const [data,setdata] = useState({});
  const [activeDrowpdown, setActiveDropdown] = useState();
  const [wordList, setWordList] = useState();

  // update dictionary
  const [Dictionary, setLanguageDictionary] = useState(HiDictionary);

  useEffect(() => {
    for (let i = 0; i < languagesList.length; i++) {
      if (
        languagesList[i].code ===  lancode.value.replace("-IN","")
      ) {
        setdata(languagesList[i])
        console.log("language guddfv selected"+ data)
        return
      } 
      else {
        setdata( {
          name: "Hindi",
          short: "हि",
          code: "hi",
          literal: "हिन्दी",
          script: "Deva"
      })
      }
    }

    if (data.code === "te") {
      setLanguageDictionary(TeDictionary);
    } else if (data.code === "ta") {
      setLanguageDictionary(TaDictionary);
    } else if (data.code === "kn") {
      setLanguageDictionary(KnDictionary);
    }
     else if (data.code === "ml") {
      setLanguageDictionary(MlDictionary);
    }
    
    localStorage.removeItem("name")
  },[]);
  useEffect(() => {
    localStorage.removeItem("name")
  }, [])
  

  // const [dictionary, setDictionary] = useState(Dictionary);
  const [audioSrc, setAudioSrc] = useState();
  const [currentWord, setCurrentWord] = useState();
  const [currentSelect, setcurrentSelect] = useState("");
  const [sentence, setSentence] = useState();
  const [queryLoader, setQueryLoader] = React.useState(false);
  const [CountWord, setCountWord] = useState("");
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
  const [copySuccess, setCopySuccess] = useState("");
  const [copytext, setcopytext] = useState("Copy");
  const textAreaRef = useRef(null);
  const [WhatsAppText, setWhatsAppText] = useState("Copy & share");

  const finalOut = useRef("");


  const updateTranslation = (e) => {
    if (e.keyCode === 8) {
      setcurrentSelect(e.target.value);
      setSentence('');
    }
    if (e.target.value.trim() === '') { // TODO : test it properly
      setSentence('');
      setcurrentSelect('');
    }
    if (e.keyCode === 32 || e.keyCode === 13) {
      if (wordList?.length > 0) {
        changeCurrentText(wordList[0]?.word);
        setWordList();
      }
      if (e.keyCode === 32) {
        setSentence(sentence+'&#13;&#10;')
      }
      setActiveDropdown("");
      return;
    }

    if (e.target.value.split(" ").slice(-1)[0]?.length > 1) {
      setActiveDropdown("is-active");

      const fromLanguage = data.code;
      // const fromScript = localStorage.getItem("fromScript");
      // const toScript = localStorage.getItem("toScript");

      let tempWordList = [];

      // const Dictionary = dictionary;

      axios
        .post(`${root_url}/transliterate`, {
          Text: e.target.value.split(" ").slice(-1)[0],
          fromScript: 'Latn',
          fromLanguage: fromLanguage,
          toScript: data.script,
        })
        .then(function (response) {
          const scriptedText = response.data[0]?.text;

          // Get list of common words from dictionary
          tempWordList = Dictionary.filter(
            function (w) {
              if (
                this.count < 10 &&
                w.word.slice(0, scriptedText.length).includes(scriptedText) &&
                !(w.word.indexOf(" ") >= 0)
              ) {
                this.count++;
                return scriptedText;
              } 
            },
            { count: 0 }
          );

          tempWordList.sort((a, b) => {
            return a.word.length - b.word.length;
          })

          // setWord(scriptedText);
          if (tempWordList.length > 1) {
            tempWordList.unshift({ word: scriptedText });
            setWordList(tempWordList);
          } else {
            setWordList([{ word: scriptedText }])
          }

        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setActiveDropdown("");
    }
  };

  const changeCurrentText = (word) => {
    setcurrentSelect(currentSelect  + word + " ");
    const arr = currentSelect.split(" ");
    setActiveDropdown("");
    document.getElementById("input-box").focus();
  };

  useEffect(() => {
    finalOut.current.value = currentSelect;
    setSentence(currentSelect);
    setCopySuccess(currentSelect);
  }, [currentSelect]);

  function DocConvestion() {
    var header =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
      "xmlns:w='urn:schemas-microsoft-com:office:word' " +
      "xmlns='http://www.w3.org/TR/REC-html40'>" +
      "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
    var footer = "</body></html>";
    var sourceHTML = header + sentence + footer;
    var source =
      "data:application/vnd.ms-word;charset=utf-8," +
      encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = Date.now() + "_document.doc";
    fileDownload.click();
    document.body.removeChild(fileDownload);
  }

  async function pdfConvestion() {
    var iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = "about:blank";
    document.body.appendChild(iframe);
    iframe.contentWindow.document.write(sentence);
    iframe.contentWindow.print();
    document.body.removeChild(iframe);
  }

  function codespeedy() {
    var print_div = document.getElementById("content-in-textarea");
    var print_area = window.open();
    print_area.document.write(sentence);
    print_area.document.close();
    print_area.focus();
    print_area.print();
    print_area.close();
  }

  async function textTOAudio() {
    let post = {
      Body: sentence,
      language:localStorage.getItem("fromLanguage") ||"hi",
      voice: LangjsonFile[0][localStorage.getItem("fromLanguage") ||"hi-IN-SwaraNeural"],
    };
    fetch("https://voiceapi.aicte-india.org/text-to-voice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {
        let ar = [];
        ar = data.data.audio.data;
        let bufferData = Buffer.from(ar, "binary");
        let blob = new Blob([bufferData], { type: "audio/wav" });

        let url = URL.createObjectURL(blob);
        setAudioSrc(url);
      })
      .catch((err) => {});
  }

  // useEffect(() => {
  //   textTOAudio();
  // }, [sentence?.length > 0]);

  const DownloadAudio = () => {
    textTOAudio();
    const element = document.createElement("a");
    element.href = audioSrc;
    element.download = "Audio-" + Date.now() + ".wav";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const ResetHandler = () => {
    finalOut.current.value = "";
    setSentence("");
    setcurrentSelect("")
    
  };

  useEffect(() => {
    const arr = sentence?.split(" ");
    setCountWord(arr?.filter((word) => word !== "").length);
  });

  useEffect(() => {
    const fetchText = async () => {
      let fileName = `aud.wav`;
      let fd = new FormData();
      let to = `${data.code}-IN`;
      const output = await axios({
        method: "get",
        url: audioURL,
        responseType: "blob",
      });
      const selectedLang = to;
      let files = new File([output.data], fileName, { type: "audio/wav" });
      fd.append("file", files);
      fd.append("language", to);
      setQueryLoader(true);
      axios
        .post("https://voiceapi.aicte-india.org/voice-to-text", fd)
        .then(async (res) => {
          setQueryLoader(false);
          console.log(res.data.data, "responce");
          let newstring = (res.data.data).replaceAll(".", "");
          let newgg = sentence.replaceAll("&#13;&#10","")
          setcurrentSelect(newgg + newstring + " ");
          finalOut.current.value = currentSelect;
        })
        .catch((errr) => {
          setQueryLoader(false);
          alert("Invalid query!");
        });
    };
    if (audioURL !== undefined && audioURL !== "") {
      fetchText();
    }
  }, [audioURL]);

  function copyToClipboard(e) {
    copy(copySuccess);
    if (copySuccess.length > 0) {
      setcopytext("Copied");
      setWhatsAppText("Share Copied Text");
    } else {
      alert("Please Write Somthing");
    }
    setTimeout(() => {
      if (copySuccess.length > 0) {
        setcopytext("Copy");
        setWhatsAppText("Copy & Share");
      }
    }, 5000);
  }
  const setLanguage = (d) => {
    setdata(d)

    // for (let i = 0; i < languagesList.length; i++) {
    //   if (
    //     languagesList[i].code ===  lang.value.replace("-IN","")
       
    //   ) {
    //     setdata(languagesList[i])
    //   } 
    // }

    // localStorage.setItem('fromScript', 'Latn');
    // localStorage.setItem('fromLanguage', d.code);
    // localStorage.setItem('toScript', d.script);
    // window.location.replace('/translation-independent/user');
}
  return (
    <div className="container-fluid">
       
  
          <div className="text-center recBtn column">
            <div className=" d-flex justify-content-between mt-2 w-100 voiceDiv">
            {/* <LanguageSelector className="column" style={{ width: '50%' }} /> */}
          
            <div className='card-container '>
            {
                languagesList.map((lang, index) => {
                    return (
                        <div className={`boxlangnew box-${index} ${data.code === lang.code ? 'selected-language' : ''}`} key={index} onClick={(e) => setLanguage(languagesList[index])} >
                            {lang.literal}
                           {lang.isBeta && <span className="tag is-info is-light" style={{ fontSize: '7px' }}>Beta</span>}
                        </div>
                    )
                })
            }

        </div>
          
  

              <div className="d-flex mb-1 justify-content-center m-auto">
              {!data.isBeta && <>
                {isRecording ? (
                  <React.Fragment>
                    <button
                      className="stopbutton stop buttonbtn"
                      onClick={stopRecording}
                      disabled={!isRecording}
                    >
                      <Stop size={20} weight="fill" />
                      STOP
                    </button>
                    {pause != false ? (
                      <>
                        <button
                          className="startbutton buttonbtn"
                          onClick={() => {
                            setPause(false);
                            setResume(true);
                          }}
                        >
                          <Record size={20} weight="fill" />
                          START RECORDING
                        </button>
                        <button className="resetbutton buttonbtn">
                          <ArrowClockwise size={20} weight="bold" />
                          RESET
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="pausebutton buttonbtn"
                          onClick={() => {
                            setPause(true);
                          }}
                        >
                          <Pause size={20} weight="fill" />
                          PAUSE
                        </button>
                      </>
                    )}
                  </React.Fragment>
                ) : (
                  <>
                    <button
                      className="startbutton buttonbtn"
                      onClick={(e) => {
                        startRecording();
                      }}
                      disabled={isRecording}
                    >
                      <Microphone size={20} weight="fill" />
                      Speak to transliterate
                    </button>
                  </>
                )}
                </>}
              </div>
            </div>
          </div>
     
        <div className="textarea-box">  
          <button
            id="copy buttonbtn"
            className="buttonbtn copy-button is-small is-primary is-light"
            onClick={(e) => copyToClipboard(e)}
          >
            {copytext}
          </button>
          {/* <>{console.log(wordList,"ujhhjjh")}</> */}
          <textarea
            // dangerouslySetInnerHTML={{ __html: sentence.replace(/(<? *script)/gi, 'illegalscript') }}
            className="inputTextarea textarea"
            rows={8}
            id="input-box"
            placeholder="Write here"
            onKeyUp={(e) => updateTranslation(e)}
            ref={finalOut}
          ></textarea>

          <div className="content-in-textarea" id="content-in-textarea">
            <div className="recommendation-popover">
              <div className={`dropdown ${activeDrowpdown}`}>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    {wordList?.map((w, index) => {
                      return (
                        <a
                          href="#"
                          className="dropdown-item"
                          key={index}
                          onClick={() => changeCurrentText(w.word)}
                        >
                          {" "}
                          {w.word}{" "}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-group">
            <div className="left-btn">
              <button className="printbutton buttonbtn alternateprintbutton">
                Word Count {CountWord}
              </button>
              {/* <button className="printbutton buttonbtn" onClick={(e) => codespeedy()}>
                Print
              </button> */}
              {/* <button
                className="downloadbutton2 buttonbtn"
                onClick={(e) => DocConvestion()}
              >
                Save as Doc File
              </button>
              <button
                className="downloadbutton2 buttonbtn"
                onClick={(e) => pdfConvestion()}
              >
                Save as Pdf File
              </button> */}
              {/* <button
                className="downloadbutton2 buttonbtn"
                onClick={(e) => DownloadAudio()}
              >
                Save as Audio File
              </button> */}
              <button className="resetbutton buttonbtn" onClick={(e) => ResetHandler()}>
                Reset
              </button>
            </div>
            {/* <div className="text-end">
            <TwitterShareButton
                url={sentence}
                quote={sentence}
                hashtag="#anuvadini #makeinindia"
              >
                <TwitterIcon
                  size={32}
                  round
                  onClick={(e) => copyToClipboard(e)}
                />

              </TwitterShareButton>
              <LinkedinShareButton
                url={sentence}
                quote={sentence}
                hashtag="#muo"
              >
                <LinkedinIcon
                  size={32}
                  round
                  onClick={(e) => copyToClipboard(e)}
                />

              </LinkedinShareButton>
              <FacebookShareButton
                url={sentence}
                quote={sentence}
                hashtag="#muo"
              >
                <FacebookIcon
                  size={32}
                  round
                  onClick={(e) => copyToClipboard(e)}
                />

              </FacebookShareButton>
              <WhatsappShareButton
                url={sentence}
                quote={sentence}
                hashtag="#muo"
              >
                <WhatsappIcon
                  size={32}
                  round
                  onClick={(e) => copyToClipboard(e)}
                />
                {WhatsAppText}
              </WhatsappShareButton>
             
            </div> */}
          </div>
        </div>

    </div>
  );
}