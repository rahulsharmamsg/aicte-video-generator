import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import useRecorder from "../assets/useRecorder.js";
import {
  Stop,
  Record,
  ArrowClockwise,
  Microphone,
  Pause,
  Plus
} from "phosphor-react";
// import checkDictionary from "../../helpers/CheckDictionary";
import TeDictionary from "../assets/dictionaries/te.json";
import HiDictionary from "../assets/dictionaries/hi.json";
import KnDictionary from "../assets/dictionaries/kn.json";
import TaDictionary from "../assets/dictionaries/ta.json";
import MlDictionary from "../assets/dictionaries/ml.json";
// import AsDictionary from "./dictionaries/as.json";
// import BaDictionary from "./dictionaries/ba.json";
// import GuDictionary from "./dictionaries/gu.json";
// import MrDictionary from "./dictionaries/mr.json";
// import OrDictionary from "./dictionaries/or.json";
// import PaDictionary from "./dictionaries/pa.json";
// import LanguageSelector from "./langselector.js";
import LangjsonFile from '../assets/dictionaries/langVoiceCodes.json';
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
import "./transinput.css";
import "./bulma.min.css";
import './LanguageSelector.css';
import copy from "copy-to-clipboard";
import languagesList from '../assets/dictionaries/languages.json';
import "react-toastify/dist/ReactToastify.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const root_url = "https://translationlive.aicte-india.org";
// const root_url = "http://localhost:8080";
window.Buffer = window.Buffer || require("buffer").Buffer;
function VirtualKeyword({hidePopup,setShowContent,lang}) {
    const [showModal, setShowModal] = useState(false);
    const [isRecordingNew, setIsRecordingNew] = useState( false );

    const lancode = lang?lang:{name:"hindi",value: "hi-IN"}
    // const [word, setWord] = useState();
   
    const [data,setdata] = useState({});
    const [activeDrowpdown, setActiveDropdown] = useState();
    const [wordList, setWordList] = useState();
    console.log(data)
    // update dictionary
    const [Dictionary, setLanguageDictionary] = useState(HiDictionary);
  
    const {
        finalTranscript,
        listening,
        transcript,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
 
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
const [Text,setText] = useState("");
    const finalOut = useRef("");

    const toggleModal = () => {
        setShowModal(!showModal);
        // hidePopup()
   

    };

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

    const updateTranslation = (e) => {
        console.log(e.keyCode)
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
      setText(currentSelect + word + " ")
      const arr = currentSelect.split(" ");
      setActiveDropdown("");
      document.getElementById("input-box").focus();
    };
  
    useEffect(() => {
      // finalOut.current.value = currentSelect;
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
    const setLanguage = (e) => {
  
      setdata(languagesList[e.target.value])
  
  }
  console.log(currentSelect,'Current select')
  console.log(Text,'Text data')

  useEffect( () => {
  setText(currentSelect + transcript + " ")
// setcurrentSelect(Text  + transcript + " ");
  }, [transcript] );
  if ( !browserSupportsSpeechRecognition ) {
    return <span>Browser doesn&apos;t support speech recognition.</span>;
  }
  

  const startRecordingNew = async () => {
    await SpeechRecognition.startListening( { continuous: false, language: data.code } )
    setIsRecordingNew( true );
  };

  const stopRecordingNew =  () => {
     SpeechRecognition.stopListening();
    setIsRecordingNew( false );

  };
  const resetRecordingNew = () => {

    resetTranscript();
  }
 
  return (
    <>
    <div className='popupOutline2 generateScrptDiv2'>
       <div className='pop-up'>
            <span className='close-pupup' onClick={hidePopup}>X</span>
            {!showModal &&<>
            <div className='popupContentDiv'>
                <h2>Virtual Keywords</h2>
                <div className='popupContentDivMain'>
                    <div className='row'>

                    {isRecordingNew ? (
                            <React.Fragment>
                              <button
                                  className="stopbutton startbutton stop"
                                  onClick={stopRecordingNew}
                                  disabled={!isRecordingNew}
                              >
                                <span><Stop size={20} weight="fill" /></span>
                                Stop
                              </button>
                              <button className="stopbutton startbutton" onClick={resetRecordingNew}>
                                <span><ArrowClockwise size={20} weight="bold" /></span>
                                Reset
                              </button>  </React.Fragment>
                        ) : (
                            <button
                                className="startbutton"
                                onClick={( e ) => {
                                  startRecordingNew();
                                }}
                                disabled={isRecordingNew}
                            >
                              <span><Microphone size={26} weight="fill" /></span>
                              Start Recording
                            </button>
                        )}
                    <div className='col-12 popupTxtare'>
                    <select id="mySelect"  onChange={(e) => setLanguage(e)}>
                    {
                languagesList.map((lang, index) => {
                    return (
        <option value={index}>{lang.literal}</option>
  )
                })
            }
      </select>

                    {/* {
                languagesList.map((lang, index) => {
                    return (
                        <div className={`boxlangnew box-${index} ${data.code === lang.code ? 'selected-language' : ''}`} key={index} onClick={(e) => setLanguage(languagesList[index])} >
                            {lang.literal}
                           {lang.isBeta && <span className="tag is-info is-light" style={{ fontSize: '7px' }}>Beta</span>}
                        </div>
                    )
                })
            } */}
            
           

                    <button
            id="copy buttonbtn"
            className="buttonbtn copy-button is-small is-primary is-light"
            onClick={(e) => copyToClipboard(e)}
          >
            {copytext}
          </button>
                        <textarea value={Text} name="" id="input-box" className='form-control' 
                        placeholder='Give me a topic, and detailed instructions...'
                        onKeyUp={(e) => updateTranslation(e)}
                        onChange={(e)=>setText(e.target.value)}
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
          <button className="printbutton buttonbtn alternateprintbutton">
                Word Count {CountWord}
              </button>
              <button className="resetbutton buttonbtn" onClick={(e) => ResetHandler()}>
                Reset
              </button>
                    </div>
                    
                    </div>
                </div>
                <button className='btn button green'  onClick={toggleModal}>Generate a video</button>
            </div>
            <div className='col-12 popupRgtLnk popupWorkflow'>
                    <h2 className='workFlowHdng'>Workflows:</h2>
                    <ul>
                        <li onClick={()=>setShowContent("Youtube_Explainer")}>Youtube Explainer</li>
                        <li onClick={()=>setShowContent("Script_to_Video")}>Script to Video</li>
                        <li onClick={()=>setShowContent("Youtube_Shorts")}>Youtube Shorts</li>
                        <li onClick={()=>setShowContent("Explore_all")}>Explore all <Plus size={15} /></li>
                    </ul>
                    </div>
            </>}
            {showModal && <>
        <div className="modal newpopupdiv">
          <div className="modal-content">
          <div className='newpopTitle'>
            <h2>Generate Script</h2>
          </div>
          <div className='newPopCnt'>
          <div className='col-12 newPopCntOne'>
            <div className='row'>
                <div className='col-3 newpopCntIn titleDivnew'>
                  <p> Title </p>
                </div>
                <div className='col-9 newpopCntIn titleDivnew'>
                <h2>Modi Ji's Inspiring Speech for Kashi in Tamil</h2>
                </div>
            </div>
            </div>
            <div className='col-12 newPopCntOne'>
            <div className='row'>
                <div className='col-3 newpopCntIn'>
                  <p> Audience </p>
                </div>
                <div className='col-9 newpopCntIn'>
                    <ul>
                        <li>Political Enthusiasts</li>
                        <li>Tamil Speakers</li>
                        <li>Indian Citizens</li>
                    </ul>
                </div>
            </div>
            </div>
            <div className='col-12 newPopCntOne'>
            <div className='row'>
                <div className='col-3 newpopCntIn'>
                <p>Look and Feel</p>
                </div>
                <div className='col-9 newpopCntIn'>
                    <ul>
                        <li>Bright</li>
                        <li>Inspiring</li>
                        <li>Clean</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className='col-12 newPopCntOne'>
            <div className='row'>
                <div className='col-3 newpopCntIn'>
                <p>Platform</p>
                </div>
                <div className='col-9 newpopCntIn'>
                    <ul>
                        <li>Youtube</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                </div>
                </div>
                <div className='col-12 newPopCntOne'>
            <div className='row'>
                <div className='col-3 newpopCntIn'>
                <p>Voice Toning</p>
                </div>
                <div className='col-9 newpopCntIn'>
                    <ul>
                        <li>Angry</li>
                        <li>Happy</li>
                        <li>Sad</li>
                        <li>Motivational</li>
                        <li>Fear</li>
                        <li>Suprise</li>
                    </ul>
                </div>
                </div>
                </div>
                <div className='btmBtmDiv'>
                <button className='btn button contBtn' >Continue</button>
                <button className='btn button edtPrmpt' >Edit Prompt</button>
                </div>
          </div>
          </div>
        </div></>}
        </div>
 
    </div>
  

  
        
      
    </>
  )
}

export default VirtualKeyword