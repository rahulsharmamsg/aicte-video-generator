import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import {
  PaperPlaneRight,
  Password,
  FileText,
  FileVideo,
  FolderNotchPlus,
  Chalkboard,
  User,
  SelectionBackground,
  TextAa,
  SmileySticker,
  Headphones,
  DownloadSimple,
  MagnifyingGlass,
  TextT,
  ArrowsClockwise,
  ClockClockwise,
  Headset,
  SelectionPlus,
  Translate,
  ArrowsLeftRight,
  PlayCircle, Video,
} from "phosphor-react";
import fe01 from "../assets/images/fe01.png";
import fe02 from "../assets/images/fe02.png";
import fe03 from "../assets/images/fe03.png";
import fe04 from "../assets/images/fe04.png";
import fe05 from "../assets/images/fe05.png";
import fe06 from "../assets/images/fe06.png";
import fe07 from "../assets/images/fe07.png";
import ma01 from "../assets/images/ma01.png";
import ma02 from "../assets/images/ma02.png";
import ma03 from "../assets/images/ma03.png";
import ma04 from "../assets/images/ma04.png";
import ma05 from "../assets/images/ma05.png";
import pro01 from "../assets/images/pro01.png";
import pro02 from "../assets/images/pro02.png";
import pro03 from "../assets/images/pro03.png";
import po04 from "../assets/images/po04.jpeg";
import po05 from "../assets/images/po02.png";
import aiVidoe1 from "../assets/images/avatarVideoBg.jpg";
import flagInd from "../assets/images/flag/ind.jpg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Popup from "../Components/Popup";
import Popup2 from "../Components/Popup2";
import AiTranslation from "../Components/AiTranslation";
import BottomMenu from "./BottomMenu";
import GenerateScript from "../Components/GenerateScript";
import AvtarPopup from '../Components/AvtarPopup'
import zIndex from "@mui/material/styles/zIndex";
import CanvasEditor from "../DesignEditor/Canvas/Canvas.tsx";
import Footer from "../DesignEditor/Footer/Footer.tsx";
import tem01 from "../assets/images/tem01.jpg";
import tem02 from "../assets/images/tem02.jpg";
import tem03 from "../assets/images/tem03.jpg";
import tem04 from "../assets/images/tem04.jpg";
import ImageGeneration from "../Components/ImageGeneration";
import { CirclesWithBar } from "react-loader-spinner";
import { useEditor } from "@layerhub-io/react";
import useDesignEditorContext from "../hooks/useDesignEditorContext.ts";
import Toolbox from "../DesignEditor/Toolbox.tsx";
import UploadFile from "../Components/UploadFile.jsx";
import Import from "../Components/Import.tsx";
import { Upload } from "phosphor-react";
import Background from "../Components/Background.tsx";
import Text from "../Components/Text.tsx";
import Template from "../Components/Template.tsx"
import LoadButton from './audio-components/LoadButton.component';
import Players from './audio-components/Player.component.js';
import { PlayerProv } from './Player.context.js';
import Tempo from "./audio-components/Tempo.component.js";
import Pitch from "./audio-components/Pitch.component.js";
import MyVerticallyCenteredModal from "../Components/LanguageCode.jsx";
import VideoGeneration from "../Components/VideoGeneration.jsx";
import VirtualKeyword from "../Components/VirtualKeyword.jsx";
import TranslatorInput from "../Components/Translation.jsx";
import TexttoVideo from "../Components/TexttoVideo.jsx"
import TalkingAvatar from "../Components/TalkingAvatar.jsx";
import AddMusic from "../Components/AddMusic.tsx";
import { audioContext } from "./AudioBlobContext.jsx";
import VideoPreview from "../DesignEditor/components/Preview/VideoPreview.tsx"
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const gainNode = audioCtx.createGain();
function CreatelandscapeVideo() {
  const [text, setText] = useState(false);
  const [textAi, setAiText] = useState(false);
  const [scriptText, setscriptText] = useState(false);
  const [virtualShow, setVirtualShow] = useState(false)
  const [textcontent, setTextcontent] = useState("");
  const [AItextcontent, setAITextcontent] = useState("");
  const [GenerateScriptcnt, setGenerateScriptcnt] = useState("");
  const [showContent, setShowContent] = useState("");
  const [activePanel, setActivePanel] = useState("avatars");
  const [getLanguageCode, seLanguageCode] = useState("");
  const [audioSrc, setAudioSrc] = useState();
  const [talkingAvtar, setTalkingAvtar] = useState(false);
  const [buf, setBuf] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewPopup, srtPreviewPopup] = useState(false);
  const { setEditorType,setDisplayPreview, setScenes, setCurrentDesign, currentDesign, scenes } = useDesignEditorContext();
  const selectedEditor = "VIDEO";
  const [defaultLanguege, setdefaultLanguage] = useState({
    "en-IN-PrabhatNeural": "English",
    "hi-IN-MadhurNeural": "Hindi",
    "te-IN-MohanNeural": "Telugu",
    "ta-IN-ValluvarNeural": "Tamil",
    "kn-IN-GaganNeural": "Kannada",
    "ml-IN-MidhunNeural": "Malayalam",
    "mr-IN-ManoharNeural": "Marathi",
    "gu-IN-NiranjanNeural": "Gujarati",
    "bn-IN-BashkarNeural": "Bengali",
    "ur-IN-SalmanNeural": "Urdu"
  })
  useEffect(() => {
    setEditorType(selectedEditor);
  }, [selectedEditor, setEditorType]);


  const { setAudioBlob } = useContext(audioContext);

  const editor = useEditor();

  const onClickAvtar = () => {
    setTalkingAvtar(true)
  }


  const closeAvtar = () => {
    setTalkingAvtar(false)
  }

  const handleAddAudio = async (audioSrc) => {
    if (!editor) return;

    // Create audio object
    const audioObject = await editor.objects.add({
      type: 'audio',
      src: audioSrc, // Convert audio blob to object URL
      x: 100, // Example: Set initial position
      y: 100,
    });
  };

  useEffect(() => {
    handleAddAudio(audioSrc);
  }, [audioSrc])

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
  const makeDownloadTemplate = ()=>{
    return parsePresentationJSON()
 
   }
 
   const parsePresentationJSON = () => {
     const currentScene = editor.scene.exportToJSON()
 
     const updatedScenes = scenes.map((scn) => {
       if (scn.id === currentScene.id) {
         return {
           id: currentScene.id,
           duration: 5000,
           layers: currentScene.layers,
           name: currentScene.name,
         }
       }
       return {
         id: scn.id,
         duration: 5000,
         layers: scn.layers,
         name: scn.name,
       }
     })
 
 
       const presentationTemplate = {
         id: currentDesign.id,
         type: "PRESENTATION",
         name: currentDesign.name,
         frame: currentDesign.frame,
         scenes: updatedScenes,
         metadata: {},
         preview: "",
       }
       makeDownload(presentationTemplate)
 
   }
   const makeDownload = (data) => {

     const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data))
     
     const a = document.createElement("a")
     a.href = dataStr
     a.download = "template.json"
     a.click()
    console.log(data)
   }
  const youtubeExplainerContent = (
    <div className="popupOutline generateScrptDiv youtubeScriptvideoDiv">
      <div className="pop-up">
        <div className="close-pupup" onClick={() => setShowContent("")}>
          X
        </div>
        <div className="popupContentDiv">
          <h1 className="hdngNewnew">Youtube Explainer - Create a Prompt</h1>
          <div className="popupContentDivMain youtubeExplnr">
            <div className="row">
              {/* Your content goes here */}
              <div className="col-12 popupTxtare">
                <div className="textArea1">
                  <span>Create a</span>
                  <select>
                    <option value="15">15 seconds</option>
                    <option value="20">20 seconds</option>
                    <option value="25">25 seconds</option>
                  </select>
                  <span>youtube video about</span>
                </div>
                <div className="textArea2">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Give me an engaging topic and things we should talk about and not talk about"
                  ></textarea>
                  <br />
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Optional creative directions - make this video your own by adding detailed creative thoughts and ideas like tone, humor, etc..."
                  ></textarea>
                </div>
                <p className="makeBckMsc">
                  Make Background Music{" "}
                  <input
                    className="darkInpt"
                    type="text"
                    placeholder="dark and haunting, upbeat and happy, etc..."
                  />
                </p>

                <p className="setngsTxt">Settings:</p>
                <div className="textArea3">
                  <span>1. Use </span>
                  <select>
                    <option value="15">any</option>
                    <option value="20">a male</option>
                    <option value="25">a female</option>
                  </select>
                  <select>
                    <option value="15">any voice</option>
                    <option value="20">voice with telgu accent</option>
                    <option value="25">voice with tamil accent</option>
                    <option value="25">voice with hindi accent</option>
                    <option value="25">voice with english accent</option>
                    <option value="25">voice with odia accent</option>
                    <option value="25">voice with malayalam accent</option>
                    <option value="25">voice with kanada accent</option>
                  </select>
                </div>
                <div className="textArea4">
                  <span>2. Add subtitles</span>
                  <select>
                    <option value="15">any Subtitle</option>
                    <option value="20">Don't add any subtitles</option>
                    <option value="25">
                      Add sutitles with standard look and feel
                    </option>
                    <option value="25">Add subtitles with an outline</option>
                    <option value="25">
                      Add subtitles where only one word is shown at a time
                    </option>
                  </select>
                </div>
                <div className="textArea5">
                  <span>3. Use watermark text</span>
                  <select>
                    <option value="15">Anuvadini</option>
                  </select>
                </div>
                <div className="textArea6">
                  <span>4. Use Image </span>
                  <select>
                    <option value="15">Speech to Image 22 AI</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btnCntnu utubeVdoBtn">Continue</button>
        </div>
      </div>
    </div>
  );
  const scriptToVideoContent = (
    <div
      className="popupOutline generateScrptDiv scriptToVideoDiv"
      style={{ zIndex: 99 }}
    >
      <div className="pop-up">
        <div className="close-pupup" onClick={() => setShowContent("")}>
          X
        </div>
        <div className="popupContentDiv">
          <h1 className="hdngNewnew">Script to Video - Create a Prompt</h1>
          <div className="row">
            {/* Your content goes here */}
            <div className="col-12 popupTxtare">
              <div className="textArea1">
                <span>Create a</span>
                <select>
                  <option value="15">Video</option>
                  <option value="20">YoutTube video</option>
                  <option value="25">Instagram video</option>
                </select>
                <span>using exactly this script</span>
              </div>
              <div className="textArea2">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Your script here..."
                ></textarea>
              </div>
              <p className="makeBckMsc">
                Make Background Music{" "}
                <input
                  className="darkInpt"
                  type="text"
                  placeholder="dark and haunting, upbeat and happy, etc..."
                />
              </p>

              <p className="setngsTxt">Settings:</p>
              <div className="textArea3">
                <span>1. Use </span>
                <select>
                  <option value="15">any</option>
                  <option value="20">a male</option>
                  <option value="25">a female</option>
                </select>
                <select>
                  <option value="15">any voice</option>
                  <option value="20">voice with telgu accent</option>
                  <option value="25">voice with tamil accent</option>
                  <option value="25">voice with hindi accent</option>
                  <option value="25">voice with english accent</option>
                  <option value="25">voice with odia accent</option>
                  <option value="25">voice with malayalam accent</option>
                  <option value="25">voice with kanada accent</option>
                </select>
              </div>
            </div>
          </div>
          <button className="btn btnCntnu scriptVdBtn">Continue</button>
        </div>
      </div>
    </div>
  );
  const youtubeShortsContent = (
    <div
      className="popupOutline generateScrptDiv youtubeShrtsDiv"
      style={{ zIndex: 999 }}
    >
      <div className="pop-up">
        <div className="close-pupup" onClick={() => setShowContent("")}>
          X
        </div>
        <div className="popupContentDiv">
          <h1 className="hdngNewnew">Youtube Shorts - Create a Prompt</h1>
          <div className="popupContentDivMain youtubeExplnr">
            <div className="row">
              {/* Your content goes here */}
              <div className="col-12 popupTxtare">
                <div className="textArea1">
                  <span>Create a youtube shorts about</span>
                </div>
                <div className="textArea2">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Give me details of what should the shorts be about - pick something interesting"
                  ></textarea>
                </div>

                <p className="setngsTxt">Settings:</p>
                <div className="textArea3">
                  <span>1. Use </span>
                  <select>
                    <option value="15">any</option>
                    <option value="20">a male</option>
                    <option value="25">a female</option>
                  </select>
                  <select>
                    <option value="15">any voice</option>
                    <option value="20">voice with telgu accent</option>
                    <option value="25">voice with tamil accent</option>
                    <option value="25">voice with hindi accent</option>
                    <option value="25">voice with english accent</option>
                    <option value="25">voice with odia accent</option>
                    <option value="25">voice with malayalam accent</option>
                    <option value="25">voice with kanada accent</option>
                  </select>
                </div>
                <div className="textArea4">
                  <span>2. Add subtitles</span>
                  <select>
                    <option value="15">any Subtitle</option>
                    <option value="20">Don't add any subtitles</option>
                    <option value="25">
                      Add sutitles with standard look and feel
                    </option>
                    <option value="25">Add subtitles with an outline</option>
                    <option value="25">
                      Add subtitles where only one word is shown at a time
                    </option>
                  </select>
                </div>
                <div className="textArea5">
                  <span>3. Use watermark text</span>
                  <select>
                    <option value="15">Anuvadini</option>
                  </select>
                </div>
                <div className="textArea6">
                  <span>4. Use Image </span>
                  <select>
                    <option value="15">Speech to Image 22 AI</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btnCntnu scriptVdBtn">Continue</button>
        </div>
      </div>
    </div>
  );
  const exploreAllContent = (
    <div className="popupOutline generateScrptDiv">
      <div className="pop-up">
        <div className="close-pupup" onClick={() => setShowContent("")}>
          X
        </div>
        <div className="popupContentDiv">
          <h1 style={{ color: "black" }}>Explore All - Create a Prompt</h1>
          <div className="popupContentDivMain">
            <div className="row" style={{ width: "1000px", height: "300px" }}>
              {/* Your content goes here */}
              <div className="col-12 popupTxtare">
                <span>Create a</span>
                <select>
                  <option value="15">15 seconds</option>
                  <option value="20">20 seconds</option>
                  <option value="25">25 seconds</option>
                </select>
                <span>youtube video about</span>
              </div>
            </div>
          </div>
          <button style={{ color: "red" }}>Continue</button>
        </div>
      </div>
    </div>
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToTop();
  const [modalShow, setModalShow] = React.useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePop = (textcontent) => {
    setText(!text);
    setTextcontent(textcontent);
  };

  const generateScipt = (GenerateScriptcnt) => {
    setscriptText(!scriptText);
    setGenerateScriptcnt(GenerateScriptcnt);
  };

  const createVirtualKeyword = () => {
    setVirtualShow(!virtualShow);
  }
  const AitranslationPop = (AItextcontent) => {
    setAiText(!textAi);
    setAITextcontent(AItextcontent);
  };
  const closePopup = () => {
    setText(false);
  };
  const closePopupAi = () => {
    setAiText(false);
  };
  const closePopupScrpt = () => {
    setscriptText(false);
  };
  const closePopupVirtual = () => {
    setVirtualShow(false);
  };

  return (
    <>
      {showContent === "Youtube_Explainer" && youtubeExplainerContent}
      {showContent === "Script_to_Video" && scriptToVideoContent}
      {showContent === "Youtube_Shorts" && youtubeShortsContent}
      {showContent === "Explore_all" && exploreAllContent}
      <section className="dashboardSec createVideoDashbrdSec">
        {activePanel === "avatars" && (
          <div className="dashBrdLft">
            <div className="dashBrdLftInScndLayer">
              <h3 className="scndryHdng">Avatars</h3>

              <div className="avatarsTab">
                <Tabs
                  defaultActiveKey="profile"
                  id="fill-tab-example"
                  className="mb-3"
                  fill
                >
                  <Tab eventKey="home" title="Female">
                    <div className="femaleCntDiv">
                      <ul>
                        <li>
                          <img
                            src={fe07}
                            alt=""
                            onClick={() => addObject(fe07)}
                          />
                          <div className="avatarsName">Avatar - One</div>
                        </li>
                        <li>
                          <img
                            src={fe06}
                            onClick={() => addObject(fe06)}
                            alt=""
                          />
                          <div className="avatarsName">Avatar - Two</div>
                        </li>
                        <li>
                          <img
                            src={fe05}
                            onClick={() => addObject(fe05)}
                            alt=""
                          />
                          <div className="avatarsName">Avatar - Three</div>
                        </li>
                        <li>
                          <img
                            src={fe04}
                            onClick={() => addObject(fe04)}
                            alt=""
                          />
                          <div className="avatarsName">Avatar - Four</div>
                        </li>
                        <li>
                          <img
                            src={fe03}
                            onClick={() => addObject(fe03)}
                            alt=""
                          />
                          <div className="avatarsName">Avatar - Two</div>
                        </li>
                        <li>
                          <img
                            src={fe02}
                            onClick={() => addObject(fe02)}
                            alt=""
                          />
                          <div className="avatarsName">Avatar - Three</div>
                        </li>
                      </ul>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Male">
                    <div className="femaleCntDiv maleDivCnt">
                      <ul>
                        <li>
                          <img
                            src={ma01}
                            onClick={() => addObject(ma01)}
                            alt=""
                          />
                          <div className="avatarsName">Avatar - One</div>
                        </li>
                        <li>
                          <img
                            src={ma02}
                            onClick={() => addObject(ma02)}
                            alt=""
                          />
                          <div className="avatarsName">Avatar - Two</div>
                        </li>
                        <li>
                          <img
                            src={ma03}
                            onClick={() => addObject(ma03)}
                            alt=""
                          />
                          <div className="avatarsName">Avatar - Three</div>
                        </li>
                        <li>
                          <img
                            src={ma04}
                            onClick={() => addObject(ma04)}
                            alt=""
                          />
                          <div className="avatarsName">Avatar - Four</div>
                        </li>
                        <li>
                          <img
                            src={ma05}
                            onClick={() => addObject(ma05)}
                            alt=""
                          />
                          <div className="avatarsName">Avatar - Two</div>
                        </li>
                        <li>
                          <img
                            src={ma01}
                            onClick={() => addObject(ma01)}
                            alt=""
                          />
                          <div className="avatarsName">Avatar - Three</div>
                        </li>
                      </ul>
                    </div>
                  </Tab>
                  <Tab eventKey="longer-tab" title="Education">
                    <div className="femaleCntDiv educatCantDiv">
                      <ul>
                        <li>
                          <img
                            src={pro01}
                            onClick={() => addObject(pro01)}
                            alt=""
                          />
                          <div className="avatarsName">Avatar - One</div>
                        </li>
                        <li>
                          <img
                            src={pro02}
                            onClick={() => addObject(pro02)}
                            alt=""
                          />
                          <div className="avatarsName">Avatar - Two</div>
                        </li>
                        <li>
                          <img
                            src={pro03}
                            onClick={() => addObject(pro03)}
                            alt=""
                          />
                          <div className="avatarsName">Avatar - Three</div>
                        </li>
                        <li>
                          <img
                            src={pro03}
                            onClick={() => addObject(pro03)}
                            alt=""
                          />
                          <div className="avatarsName">Avatar - Four</div>
                        </li>
                        <li>
                          <img
                            src={po05}
                            onClick={() => addObject(po05)}
                            alt=""
                          />
                          <div className="avatarsName">Avatar - Two</div>
                        </li>
                        <li>
                          <img src={pro02} alt="" />
                          <div className="avatarsName">Avatar - Three</div>
                        </li>
                      </ul>
                    </div>
                  </Tab>
                  <Tab eventKey="video" title="Upload Your Video">
                    <div className="femaleCntDiv educatCantDiv">
                      <UploadFile />
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        )}
        {activePanel === "background" && (
          <div className="dashBrdLft">
            <div className="dashBrdLftInScndLayer">
              <h3 className="scndryHdng">Background</h3>

              <div className="avatarsTab">
                <Background />
              </div>
            </div>
          </div>
        )}
        {activePanel === "template" && (
          <div className="dashBrdLft">
            <div className="dashBrdLftInScndLayer">
              <h3 className="scndryHdng">Template</h3>
              {/* <form action="">
               <div className="srchAiAvatar">
               <input type="file" placeholder="Search for AI Avatars" className="srchAiAvatars" />
               <Upload className="maginifyIcn" size={22} />
               </div>
           </form> */}
              {/* <div className="avatarsTab">
                <Tabs
                  defaultActiveKey="home"
                  id="fill-tab-example"
                  className="mb-3"
                  fill
                >
                  <Tab eventKey="home" title="Storyboard Template">
                    <div className="femaleCntDiv aiTemplateDivLst">
                      <ul>
                        <li>
                          <img src={tem01} alt="" />
                        </li>
                        <li>
                          <img src={tem02} alt="" />
                        </li>
                        <li>
                          <img src={tem03} alt="" />
                        </li>
                        <li>
                          <img src={tem04} alt="" />
                        </li>
                        <li>
                          <img src={tem01} alt="" />
                        </li>
                        <li>
                          <img src={tem02} alt="" />
                        </li>
                        <li>
                          <img src={tem03} alt="" />
                        </li>
                        <li>
                          <img src={tem04} alt="" />
                        </li>
                        <li>
                          <img src={tem01} alt="" />
                        </li>
                        <li>
                          <img src={tem02} alt="" />
                        </li>
                        <li>
                          <img src={tem03} alt="" />
                        </li>
                        <li>
                          <img src={tem04} alt="" />
                        </li>
                        <li>
                          <img src={tem01} alt="" />
                        </li>
                        <li>
                          <img src={tem02} alt="" />
                        </li>
                        <li>
                          <img src={tem03} alt="" />
                        </li>
                        <li>
                          <img src={tem04} alt="" />
                        </li>
                      </ul>
                    </div>
                  </Tab>
                </Tabs>
              </div> */}

              <Template />

            </div>
          </div>
        )}

        {activePanel === "text" && (
          <div className="dashBrdLft">
            <div className="dashBrdLftInScndLayer">
              <div className="avatarsTab">
                <Text />
              </div>
            </div>
          </div>
        )}
        {
          activePanel === "talkingavtar" && (
            <div className="dashBrdLft">
              <div className="dashBrdLftInScndLayer">
                <h3 className="scndryHdng">Talking Avatar</h3>
                <form action="">
                  <TalkingAvatar />
                </form>
                <div className="avatarsTab"></div>
              </div>
            </div>
          )
        }
        {activePanel === "aimusic" && (
          <div className="dashBrdLft">
            <div className="dashBrdLftInScndLayer">
              <h3 className="scndryHdng">Add Music</h3>
                <AddMusic/>
              <div className="avatarsTab"></div>
            </div>
          </div>
        )}
         {activePanel === "import" && (
          <div className="dashBrdLft">
            <div className="dashBrdLftInScndLayer">
              <h3 className="scndryHdng">Import</h3>
              <form action="">
                <Import />
              </form>
              <div className="avatarsTab"></div>
            </div>
          </div>
        )}
        {activePanel === "image" && (
          <div className="dashBrdLft">
            <ImageGeneration />
          </div>
        )}
        {
          activePanel === "aivideo" && (
            <div className="dashBrdLft">
              <div className="dashBrdLftInScndLayer">
                <h3 className="scndryHdng">Video Generator</h3>
                <form action="">
                  <VideoGeneration />
                </form>
                <div className="avatarsTab"></div>
              </div>
            </div>
          )
        }
        {
          activePanel === "textvideo" && (
            <div className="dashBrdLft">
              <div className="dashBrdLftInScndLayer">
                <h3 className="scndryHdng">Video Generator</h3>
                <form action="">
                  <TexttoVideo />
                </form>
                <div className="avatarsTab"></div>
              </div>
            </div>
          )
        }

        <div className="dashBrdRgt">
          <div className="">
            <div className="">
              {/* <Toolbox /> */}
              <CanvasEditor />
              {/* 
              {audioSrc ?(
              <>
               <PlayerProv {...{ audioCtx, gainNode }}>
        <LoadButton audioSrc={buf}/>
        <Players />          
      </PlayerProv>
              </>

            ):""} */}
            </div>
            <div className="audioplayerDiv">
              <Footer  audioSrc={audioSrc}/>
            </div>
          </div>
        </div>
        {text ? <Popup hidePopup={closePopup} language={getLanguageCode} setAudioSrc={setAudioSrc} setBuf={setBuf} /> : null}
        {scriptText ? (
          <GenerateScript
            hidePopup={closePopupScrpt}
            setShowContent={setShowContent}
          />
        ) : null}
        {talkingAvtar ? (
          <AvtarPopup
            hidePopup={closeAvtar}
            setShowContent={setShowContent}
          />
        ) : null}
        {virtualShow ? (
          <VirtualKeyword
            hidePopup={closePopupVirtual}
          />
        ) : null}
        {textAi ? <AiTranslation hidePopup={closePopupAi} /> : null}
        {previewPopup? <VideoPreview /> : null}
        <div className="dashBrdLft dashBrdLftRgt">
          <div className="dashBrdLftInScndLayer">
            <div className="videoRgtBtmDiv">
              <div className="videoRgtBtmDivLft">
                <div className="videoRgtBtmDivLftIn">
                  <ul>
                    <li onClick={() => handlePop("AI Script")}>
                      <TextT size={22} /> AI Script
                    </li>
                    <li onClick={() => handlePop("Video Translation")}>
                      <TextT size={22} /> Video Translation
                    </li>
                    <li onClick={() => AitranslationPop()}>
                      <Translate size={22} /> AI Translation
                    </li>
                    <li>
                      <ClockClockwise size={22} /> Pause
                    </li>
                    <li>
                      <Headset size={22} /> Audio Script
                    </li>
                    <li>
                      <SelectionPlus size={22} /> Add Scene
                    </li>
                    <li onClick={() => generateScipt()}>
                      <TextT size={32} /> Text to Video
                    </li>
                    <li onClick={() => onClickAvtar()}>
                      <TextT size={22} /> Talking Avatar
                    </li>
                    <li onClick={() => createVirtualKeyword()}>
                      <TextT size={22} /> Virtual Keywords
                    </li>
                    <li onClick={() => makeDownloadTemplate()}>
                      <TextT size={22} /> Exports
                    </li>
                    {/* <li onClick={() => makeDownloadTemplate()}>
                      <TextT size={22} /> Preview
                    </li> */}
                     <Button
            size="compact"
            onClick={() => srtPreviewPopup(true)}
            // kind={KIND.tertiary}
            overrides={{
              StartEnhancer: {
                style: {
                  marginRight: "4px",
                },
              },
            }}
          >
            {/* <Play size={24} /> */}Preview
          </Button>
                  </ul>
                  <div className="voiceOverPpup">
                    <div className="voiceOverInpt">
                      <div
                        className="flgTxt"
                        variant="primary"
                        onClick={() => setModalShow(true)}
                      >
                        <img src={flagInd} alt="" />{" "}
                        <span>{getLanguageCode ? (defaultLanguege[getLanguageCode[1]]) : "English - India"}</span>
                      </div>
                      <ArrowsLeftRight className="arrowLftRgt" size={24} />
                    </div>
                    {/* <div className='voiceOverInpt'>
                <div className='flgTxt' variant="primary" onClick={() => setModalShow(true)}><img src={flagInd} alt="" /> <span>English - India</span></div> 
                <ArrowsLeftRight className='arrowLftRgt' size={24} />   
                </div> */}
                  </div>
                </div>
              </div>
              <div className="videoRgtBtmDivRgt">
                <div className="sppedPitchVlmDiv">
                  {audioSrc ? (
                    <>
                      <PlayerProv {...{ audioCtx, gainNode }}>
                        <LoadButton audioSrc={buf} />
                        <Players />
                        <div className="speedDiv">
                          <Tempo />
                        </div>
                        <div className="speedDiv pitchDiv">

                          <Pitch />
                        </div>
                        <div className="speedDiv playScripts">
                          <Link className="playScrptsBtn">
                            <PlayCircle size={20} /> Play Scripts
                          </Link>
                        </div>
                      </PlayerProv>
                    </>
                  ) : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashBrdLftIn ftrBtmFooter">
          <BottomMenu setActivePanel={setActivePanel} />
        </div>
      </section>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        seLanguageCode={seLanguageCode}
      />
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
    </>
  );
}

export default CreatelandscapeVideo;
