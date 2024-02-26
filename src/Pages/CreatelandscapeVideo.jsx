import React, { useEffect, useState } from "react";
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
  PlayCircle,
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
import zIndex from "@mui/material/styles/zIndex";
import CanvasEditor from "../DesignEditor/Canvas/Canvas.tsx";
import Footer from "../DesignEditor/Footer/Footer.tsx";
import tem01 from "../assets/images/tem01.jpg";
import tem02 from "../assets/images/tem02.jpg";
import tem03 from "../assets/images/tem03.jpg";
import tem04 from "../assets/images/tem04.jpg";
import ImageGeneration from "../Components/ImageGeneration";

import { useEditor } from "@layerhub-io/react";
import useDesignEditorContext from "../hooks/useDesignEditorContext.ts";
import Toolbox from "../DesignEditor/Toolbox.tsx";
import UploadFile from "../Components/UploadFile.jsx";
import Import from "../Components/Import.tsx";
import { Upload } from "phosphor-react";
import Background from "../Components/Background.tsx";
import Text from "../Components/Text.tsx";

function CreatelandscapeVideo() {
  const [text, setText] = useState(false);
  const [textAi, setAiText] = useState(false);
  const [scriptText, setscriptText] = useState(false);
  const [textcontent, setTextcontent] = useState("");
  const [AItextcontent, setAITextcontent] = useState("");
  const [GenerateScriptcnt, setGenerateScriptcnt] = useState("");
  const [showContent, setShowContent] = useState("");
  const [activePanel, setActivePanel] = useState("avatars");

  const selectedEditor = "VIDEO";
  const { setEditorType } = useDesignEditorContext();

  useEffect(() => {
    setEditorType(selectedEditor);
  }, [selectedEditor, setEditorType]);

  const editor = useEditor();

  const addObject = React.useCallback(
    (url) => {
      if (editor) {
        console.log(editor, "editor");
        const options = {
          type: "StaticImage",
          src: url,
        };

        console.log(url, "url")

        editor.objects.add(options);
      }
    },
    [editor]
  );
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
              <form action="">
                <div className="srchAiAvatar">
                  <input
                    type="file"
                    placeholder="Search for AI Avatars"
                    className="srchAiAvatars"
                  />
                  <Upload className="maginifyIcn" size={22} />
                </div>
              </form>
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
              <div className="avatarsTab">
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
              </div>
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

        <div className="dashBrdRgt">
          <div className="">
            <div className="">
              {/* <Toolbox /> */}

              <CanvasEditor />
            </div>
            <div className="audioplayerDiv">
              <Footer />
            </div>
          </div>
        </div>
        {text==="AI Script" ? <Popup hidePopup={closePopup} /> : null}
        
        {text==="Video Translation" ? <Popup2 hidePopup={closePopup} /> : null}
        {}
        {scriptText ? (
          <GenerateScript
            hidePopup={closePopupScrpt}
            setShowContent={setShowContent}
          />
        ) : null}
        {textAi ? <AiTranslation hidePopup={closePopupAi} /> : null}
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
                      <TextT size={22} /> Generate Script
                    </li>
                  </ul>
                  <div className="voiceOverPpup">
                    <div className="voiceOverInpt">
                      <div
                        className="flgTxt"
                        variant="primary"
                        onClick={() => setModalShow(true)}
                      >
                        <img src={flagInd} alt="" />{" "}
                        <span>English - India</span>
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
                  <div className="speedDiv">
                    <p className="sppedDivtxt">
                      Speed <span>1.00x</span>
                    </p>
                    <input type="range" className="rangeInpt" />
                  </div>
                  <div className="speedDiv pitchDiv">
                    <p className="sppedDivtxt">
                      Pitch <span>0%</span>
                    </p>
                    <input type="range" className="rangeInpt" />
                  </div>
                  <div className="speedDiv pitchDiv">
                    <p className="sppedDivtxt">
                      Volume <span>50%</span>
                    </p>
                    <input type="range" className="rangeInpt" />
                  </div>
                  <div className="speedDiv playScripts">
                    <Link className="playScrptsBtn">
                      <PlayCircle size={20} /> Play Scripts
                    </Link>
                  </div>
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
      />
    </>
  );
}
function MyVerticallyCenteredModal(props) {
  return (
    <>
      <Modal
        className="langVoiceOver"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="avatarsTab">
            <Tabs
              defaultActiveKey="all"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="all" title="All">
                <div className="engLngDiv">
                  <ul>
                    <li>
                      <div className="voiceOverPpup">
                        <div className="voiceOverInpt">
                          <div className="flgTxt" variant="primary">
                            <span className="flgIcnpop">
                              <img src={flagInd} alt="" />
                            </span>{" "}
                            <span className="voiceLang">
                              English (Ireland) <br />
                              Pure accent丨Universal
                            </span>
                          </div>
                          <PlayCircle size={24} className="arrowLftRgt" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="voiceOverPpup">
                        <div className="voiceOverInpt">
                          <div className="flgTxt" variant="primary">
                            <span className="flgIcnpop">
                              <img src={flagInd} alt="" />
                            </span>{" "}
                            <span className="voiceLang">
                              English (Ireland) <br />
                              Fluent丨Universal
                            </span>
                          </div>
                          <PlayCircle size={24} className="arrowLftRgt" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="voiceOverPpup">
                        <div className="voiceOverInpt">
                          <div className="flgTxt" variant="primary">
                            <span className="flgIcnpop">
                              <img src={flagInd} alt="" />
                            </span>{" "}
                            <span className="voiceLang">
                              English (Australia) <br />
                              Magnetic丨Clear丨Explanation
                            </span>
                          </div>
                          <PlayCircle size={24} className="arrowLftRgt" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="voiceOverPpup">
                        <div className="voiceOverInpt">
                          <div className="flgTxt" variant="primary">
                            <span className="flgIcnpop">
                              <img src={flagInd} alt="" />
                            </span>{" "}
                            <span className="voiceLang">
                              English (Australia) <br />
                              Fluent丨Universal
                            </span>
                          </div>
                          <PlayCircle size={24} className="arrowLftRgt" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="voiceOverPpup">
                        <div className="voiceOverInpt">
                          <div className="flgTxt" variant="primary">
                            <span className="flgIcnpop">
                              <img src={flagInd} alt="" />
                            </span>{" "}
                            <span className="voiceLang">
                              English (Australia) <br />
                              Composed丨Explanation
                            </span>
                          </div>
                          <PlayCircle size={24} className="arrowLftRgt" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="voiceOverPpup">
                        <div className="voiceOverInpt">
                          <div className="flgTxt" variant="primary">
                            <span className="flgIcnpop">
                              <img src={flagInd} alt="" />
                            </span>{" "}
                            <span className="voiceLang">
                              English (Australia) <br />
                              Energetic丨Marketing
                            </span>
                          </div>
                          <PlayCircle size={24} className="arrowLftRgt" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="voiceOverPpup">
                        <div className="voiceOverInpt">
                          <div className="flgTxt" variant="primary">
                            <span className="flgIcnpop">
                              <img src={flagInd} alt="" />
                            </span>{" "}
                            <span className="voiceLang">
                              English (Australia) <br />
                              Gentle丨Universal
                            </span>
                          </div>
                          <PlayCircle size={24} className="arrowLftRgt" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="voiceOverPpup">
                        <div className="voiceOverInpt">
                          <div className="flgTxt" variant="primary">
                            <span className="flgIcnpop">
                              <img src={flagInd} alt="" />
                            </span>{" "}
                            <span className="voiceLang">
                              English (Australia) <br />
                              Gentle丨Universal
                            </span>
                          </div>
                          <PlayCircle size={24} className="arrowLftRgt" />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Tab>
              <Tab eventKey="custom" title="Custom">
                <div className="customvoiceDiv">
                  <form action="">
                    <label htmlFor="">
                      Drag & Drop <span>Or</span> Browse
                    </label>
                    <input type="file" />
                  </form>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Modal.Body>
        <Modal.Footer className="modlFtrDiv">
          <Button
            onClick={props.onHide}
            className="button green btn-login-signup cancleBtn"
          >
            Cancle
          </Button>
          <Button
            onClick={props.onHide}
            className="button green btn-login-signup"
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default CreatelandscapeVideo;
