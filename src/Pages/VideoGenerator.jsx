import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { PaperPlaneRight, Password, FileText, FileVideo, FolderNotchPlus, Chalkboard, User, SelectionBackground, TextAa, SmileySticker, Headphones, DownloadSimple, MagnifyingGlass, TextT, ArrowsClockwise, ClockClockwise, Headset, SelectionPlus, Translate, ArrowsLeftRight, PlayCircle } from "phosphor-react";
import fe01 from '../assets/images/fe01.jpg';
import fe02 from '../assets/images/fe02.jpg';
import fe03 from '../assets/images/fe03.jpg';
import fe04 from '../assets/images/fe04.jpg';
import ma01 from '../assets/images/ma01.jpg';
import ma02 from '../assets/images/ma02.jpg';
import ma03 from '../assets/images/ma03.jpg';
import ma04 from '../assets/images/ma04.jpg';
import aiVidoe1 from '../assets/images/avatarVideoBg.jpg';
import flagInd from '../assets/images/flag/ind.jpg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AiTranslation from '../Components/AiTranslation';
import BottomMenu from './BottomMenu';
import GenerateScript from '../Components/GenerateScript';
import zIndex from '@mui/material/styles/zIndex';
import ReactPlayer from 'react-player'
import videourl from '../assets/images/demo.mp4';
import AiScriptPopup from '../Components/AiScriptPopup';


function VideoGenerator() {
  const [text, setText] = useState(false)
  const [textAi, setAiText] = useState(false)
  const [scriptText, setscriptText] = useState(false)
  const [textcontent, setTextcontent] = useState("")
  const [AItextcontent, setAITextcontent] = useState("")
  const [GenerateScriptcnt, setGenerateScriptcnt] = useState("")
  const [showContent, setShowContent] = useState('');
  const youtubeExplainerContent = (
    <div className='popupOutline generateScrptDiv youtubeScriptvideoDiv'>
      <div className='pop-up'>
        <div className='close-pupup' onClick={() => setShowContent("")}>X</div>
        <div className='popupContentDiv'>
          <h1 className='hdngNewnew'>Youtube Explainer - Create a Prompt</h1>
          <div className='popupContentDivMain youtubeExplnr'>
            <div className='row'>
              {/* Your content goes here */}
              <div className='col-12 popupTxtare'>
                <div className='textArea1'>
                  <span>Create a</span>
                  <select>
                    <option value="15">15 seconds</option>
                    <option value="20">20 seconds</option>
                    <option value="25">25 seconds</option>
                  </select>
                  <span>youtube video about</span>
                </div>
                <div className='textArea2'>
                  <textarea name="" id="" cols="30" rows="10" placeholder='Give me an engaging topic and things we should talk about and not talk about'></textarea>
                  <br />
                  <textarea name="" id="" cols="30" rows="10" placeholder='Optional creative directions - make this video your own by adding detailed creative thoughts and ideas like tone, humor, etc...'></textarea>
                </div>
                <p className='makeBckMsc'>Make Background Music <input className='darkInpt' type="text" placeholder="dark and haunting, upbeat and happy, etc..." /></p>

                <p className='setngsTxt'>Settings:</p>
                <div className='textArea3'>
                  <span >1. Use </span>
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
                <div className='textArea4'><span>2. Add subtitles</span>
                  <select>
                    <option value="15">any Subtitle</option>
                    <option value="20">Don't add any subtitles</option>
                    <option value="25">Add sutitles with standard look and feel</option>
                    <option value="25">Add subtitles with an outline</option>
                    <option value="25">Add subtitles where only one word is shown at a time</option>
                  </select>
                </div>
                <div className='textArea5'><span>3. Use watermark text</span>
                  <select>
                    <option value="15">Anuvadini</option>
                  </select>
                </div>
                <div className='textArea6'>
                  <span>4. Use Image </span>
                  <select>
                    <option value="15">Speech to Image 22 AI</option>
                  </select></div>
              </div>
            </div>
          </div>
          <button className='btn btnCntnu utubeVdoBtn'>Continue</button>
        </div>
      </div>
    </div>
  );
  const scriptToVideoContent = (
    <div className='popupOutline generateScrptDiv scriptToVideoDiv' style={{ zIndex: 99 }}>
      <div className='pop-up'>
        <div className='close-pupup' onClick={() => setShowContent("")}>X</div>
        <div className='popupContentDiv'>
          <h1 className='hdngNewnew'>Script to Video - Create a Prompt</h1>
          <div className='row'>
            {/* Your content goes here */}
            <div className='col-12 popupTxtare'>
              <div className='textArea1'>
                <span>Create a</span>
                <select>
                  <option value="15">Video</option>
                  <option value="20">YoutTube video</option>
                  <option value="25">Instagram video</option>
                </select>
                <span>using exactly this script</span>
              </div>
              <div className='textArea2'>
                <textarea name="" id="" cols="30" rows="10" placeholder='Your script here...'></textarea>
              </div>
              <p className='makeBckMsc'>Make Background Music <input className='darkInpt' type="text" placeholder="dark and haunting, upbeat and happy, etc..." /></p>

              <p className='setngsTxt'>Settings:</p>
              <div className='textArea3'>
                <span >1. Use </span>
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
          <button className='btn btnCntnu scriptVdBtn'>Continue</button>
        </div>
      </div>
    </div>
  );
  const youtubeShortsContent = (
    <div className='popupOutline generateScrptDiv youtubeShrtsDiv' style={{ zIndex: 999 }}>
      <div className='pop-up'>
        <div className='close-pupup' onClick={() => setShowContent("")}>X</div>
        <div className='popupContentDiv'>
          <h1 className='hdngNewnew'>Youtube Shorts - Create a Prompt</h1>
          <div className='popupContentDivMain youtubeExplnr'>
            <div className='row'>
              {/* Your content goes here */}
              <div className='col-12 popupTxtare'>
                <div className='textArea1'>
                  <span>Create a youtube shorts about</span>
                </div>
                <div className='textArea2'>
                  <textarea name="" id="" cols="30" rows="10" placeholder='Give me details of what should the shorts be about - pick something interesting'></textarea>

                </div>


                <p className='setngsTxt'>Settings:</p>
                <div className='textArea3'>
                  <span >1. Use </span>
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
                <div className='textArea4'><span>2. Add subtitles</span>
                  <select>
                    <option value="15">any Subtitle</option>
                    <option value="20">Don't add any subtitles</option>
                    <option value="25">Add sutitles with standard look and feel</option>
                    <option value="25">Add subtitles with an outline</option>
                    <option value="25">Add subtitles where only one word is shown at a time</option>
                  </select>
                </div>
                <div className='textArea5'><span>3. Use watermark text</span>
                  <select>
                    <option value="15">Anuvadini</option>
                  </select>
                </div>
                <div className='textArea6'>
                  <span>4. Use Image </span>
                  <select>
                    <option value="15">Speech to Image 22 AI</option>
                  </select></div>
              </div>
            </div>
          </div>
          <button className='btn btnCntnu scriptVdBtn'>Continue</button>
        </div>
      </div>
    </div>
  );
  const exploreAllContent = (
    <div className='popupOutline generateScrptDiv'>
      <div className='pop-up'>
        <div className='close-pupup' onClick={() => setShowContent("")}>X</div>
        <div className='popupContentDiv'>
          <h1 style={{ color: "black" }}>Explore All - Create a Prompt</h1>
          <div className='popupContentDivMain'>
            <div className='row' style={{ width: "1000px", height: "300px" }}>
              {/* Your content goes here */}
              <div className='col-12 popupTxtare'>
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
    setText(!text)
    setTextcontent(textcontent)
  }
  const generateScipt = (GenerateScriptcnt) => {
    setscriptText(!scriptText)
    setGenerateScriptcnt(GenerateScriptcnt)
  }
  const AitranslationPop = (AItextcontent) => {
    setAiText(!textAi)
    setAITextcontent(AItextcontent)
  }
  const closePopup = () => {
    setText(false);
  }
  const closePopupAi = () => {
    setAiText(false);
  }
  const closePopupScrpt = () => {
    setscriptText(false);
  }

  return (
    <>
      {
        showContent === 'Youtube_Explainer' && youtubeExplainerContent

      }
      {
        showContent === 'Script_to_Video' && scriptToVideoContent
      }
      {
        showContent === 'Youtube_Shorts' && youtubeShortsContent
      }
      {
        showContent === 'Explore_all' && exploreAllContent
      }
      <section className="dashboardSec createVideoDashbrdSec">
        <div className="videoTgt">
          <div className="dashBrdRgtIn">
            <div className="avatarVideoDiv">
              {/* <img src={aiVidoe1} alt="" /> */}
              {/* <ReactPlayer
url={videourl}
controls={true}  /> 
  config={{
    youtube: {
      playerVars: { showinfo: 1 }
    },
    facebook: {
      appId: '12345'
    }
  }}
/> */}
             <ReactPlayer  url={videourl}
 controls={true} height={500} width="100%" />

            </div>
            
            <div className="audioplayerDiv">
              {/* <audio src="path/to/your/audio/file.mp3" controls={true} autoPlay={false} /> */}
            </div>

          </div>
        </div>
        {text ? <AiScriptPopup hidePopup={closePopup} /> : null}
        {scriptText ? <GenerateScript hidePopup={closePopupScrpt} setShowContent={setShowContent} /> : null}
        {textAi ? <AiTranslation hidePopup={closePopupAi} /> : null}
        <div className="dashBrdLft dashBrdLftRgt">
          <div className="dashBrdLftInScndLayer">
            <div className='videoRgtBtmDiv'>
              <div className='videoRgtBtmDivLft'>
                <div className='videoRgtBtmDivLftIn'>
                  <ul>
                    <li onClick={() => handlePop("AI Script")}><TextT size={22} /> AI Script</li>
                    <li onClick={() => AitranslationPop()}><Translate size={22} /> AI Translation</li>
                    <li><ClockClockwise size={22} /> Pause</li>
                    <li><Headset size={22} /> Audio Script</li>
                    <li><SelectionPlus size={22} /> Add Scene</li>
                    <li onClick={() => generateScipt()}><TextT size={22} /> Generate Script</li>
                  </ul>
                  <div className='voiceOverPpup'>
                    <div className='voiceOverInpt'>
                      <div className='flgTxt' variant="primary" onClick={() => setModalShow(true)}><img src={flagInd} alt="" /> <span>English - India</span></div>
                      <ArrowsLeftRight className='arrowLftRgt' size={24} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='videoRgtBtmDivRgt'>

                <div className='sppedPitchVlmDiv'>
                  <div className='speedDiv'>
                    <p className='sppedDivtxt'>Speed <span>1.00x</span></p>
                    <input type="range" className='rangeInpt' />
                  </div>
                  <div className='speedDiv pitchDiv'>
                    <p className='sppedDivtxt'>Pitch <span>0%</span></p>
                    <input type="range" className='rangeInpt' />
                  </div>
                  <div className='speedDiv pitchDiv'>
                    <p className='sppedDivtxt'>Volume <span>50%</span></p>
                    <input type="range" className='rangeInpt' />
                  </div>
                  <div className='speedDiv playScripts'>
                    <Link className='playScrptsBtn'><PlayCircle size={20} /> Play Scripts</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashBrdLftIn ftrBtmFooter">
          <BottomMenu />
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

      <Modal className='langVoiceOver'
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className="avatarsTab">
            <Tabs
              defaultActiveKey="all"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="all" title="All">
                <div className='engLngDiv'>
                  <ul>
                    <li>
                      <div className='voiceOverPpup'>
                        <div className='voiceOverInpt'>
                          <div className='flgTxt' variant="primary"><span className='flgIcnpop'><img src={flagInd} alt="" /></span> <span className='voiceLang'>English (Ireland) <br />Pure accent丨Universal</span></div>
                          <PlayCircle size={24} className='arrowLftRgt' />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='voiceOverPpup'>
                        <div className='voiceOverInpt'>
                          <div className='flgTxt' variant="primary"><span className='flgIcnpop'><img src={flagInd} alt="" /></span> <span className='voiceLang'>English (Ireland) <br />Fluent丨Universal</span></div>
                          <PlayCircle size={24} className='arrowLftRgt' />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='voiceOverPpup'>
                        <div className='voiceOverInpt'>
                          <div className='flgTxt' variant="primary"><span className='flgIcnpop'><img src={flagInd} alt="" /></span> <span className='voiceLang'>English (Australia) <br />Magnetic丨Clear丨Explanation</span></div>
                          <PlayCircle size={24} className='arrowLftRgt' />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='voiceOverPpup'>
                        <div className='voiceOverInpt'>
                          <div className='flgTxt' variant="primary"><span className='flgIcnpop'><img src={flagInd} alt="" /></span> <span className='voiceLang'>English (Australia) <br />Fluent丨Universal</span></div>
                          <PlayCircle size={24} className='arrowLftRgt' />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='voiceOverPpup'>
                        <div className='voiceOverInpt'>
                          <div className='flgTxt' variant="primary"><span className='flgIcnpop'><img src={flagInd} alt="" /></span> <span className='voiceLang'>English (Australia) <br />Composed丨Explanation</span></div>
                          <PlayCircle size={24} className='arrowLftRgt' />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='voiceOverPpup'>
                        <div className='voiceOverInpt'>
                          <div className='flgTxt' variant="primary"><span className='flgIcnpop'><img src={flagInd} alt="" /></span> <span className='voiceLang'>English (Australia) <br />Energetic丨Marketing</span></div>
                          <PlayCircle size={24} className='arrowLftRgt' />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='voiceOverPpup'>
                        <div className='voiceOverInpt'>
                          <div className='flgTxt' variant="primary"><span className='flgIcnpop'><img src={flagInd} alt="" /></span> <span className='voiceLang'>English (Australia) <br />Gentle丨Universal</span></div>
                          <PlayCircle size={24} className='arrowLftRgt' />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='voiceOverPpup'>
                        <div className='voiceOverInpt'>
                          <div className='flgTxt' variant="primary"><span className='flgIcnpop'><img src={flagInd} alt="" /></span> <span className='voiceLang'>English (Australia) <br />Gentle丨Universal</span></div>
                          <PlayCircle size={24} className='arrowLftRgt' />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Tab>
              <Tab eventKey="custom" title="Custom">
                <div className='customvoiceDiv'>
                  <form action="">
                    <label htmlFor="">Drag & Drop <span>Or</span> Browse</label>
                    <input type="file" />
                  </form>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Modal.Body>
        <Modal.Footer className='modlFtrDiv'>
          <Button onClick={props.onHide} className='button green btn-login-signup cancleBtn'>Cancle</Button>
          <Button onClick={props.onHide} className='button green btn-login-signup'>OK</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default VideoGenerator;
