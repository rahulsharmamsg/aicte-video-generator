import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { PaperPlaneRight, Password,FileText, FileVideo, FolderNotchPlus, Chalkboard, User, SelectionBackground, TextAa, SmileySticker, Headphones, DownloadSimple, MagnifyingGlass, TextT, ArrowsClockwise, ClockClockwise, Headset, SelectionPlus, Translate, ArrowsLeftRight, PlayCircle} from "phosphor-react";
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
import Popup from '../Components/Popup';
import AiTranslation from '../Components/AiTranslation';
import BottomMenu from './BottomMenu';
import GenerateScript from '../Components/GenerateScript';

function CreatelandscapeVideo() {
  const[text,setText]=useState(false)
  const[textAi,setAiText]=useState(false)
  const[scriptText,setscriptText]=useState(false)
  const[textcontent,setTextcontent]=useState("")
  const[AItextcontent,setAITextcontent]=useState("")
  const[GenerateScriptcnt,setGenerateScriptcnt]=useState("")
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
  const closePopup = () =>{
    setText(false);
  }
  const closePopupAi = () =>{
    setAiText(false);
  }
  const closePopupScrpt = () =>{
    setscriptText(false);
  }

  

  return (
    <>
      <section className="dashboardSec createVideoDashbrdSec">
        <div className="dashBrdLft">
           <div className="dashBrdLftInScndLayer">
            <h3 className='scndryHdng'>Avatars</h3>
            <form action="">
                <div className="srchAiAvatar">
                <input type="text" placeholder="Search for AI Avatars" className="srchAiAvatars" />
                <MagnifyingGlass className="maginifyIcn" size={22} />
                </div>
            </form>
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
                <li><img src={fe01} alt="" />
                <div className="avatarsName">Avatar - One</div>
                </li>
                <li><img src={fe02} alt="" />
                <div className="avatarsName">Avatar - Two</div>
                </li>
                <li><img src={fe03} alt="" />
                <div className="avatarsName">Avatar - Three</div>
                </li>
                <li><img src={fe04} alt="" />
                <div className="avatarsName">Avatar - Four</div>
                </li>
                <li><img src={fe02} alt="" />
                <div className="avatarsName">Avatar - Two</div>
                </li>
                <li><img src={fe03} alt="" />
                <div className="avatarsName">Avatar - Three</div>
                </li>
            </ul>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Male">
      <div className="femaleCntDiv maleDivCnt">
            <ul>
                <li><img src={ma01} alt="" />
                <div className="avatarsName">Avatar - One</div>
                </li>
                <li><img src={ma02} alt="" />
                <div className="avatarsName">Avatar - Two</div>
                </li>
                <li><img src={ma03} alt="" />
                <div className="avatarsName">Avatar - Three</div>
                </li>
                <li><img src={ma04} alt="" />
                <div className="avatarsName">Avatar - Four</div>
                </li>
                <li><img src={ma02} alt="" />
                <div className="avatarsName">Avatar - Two</div>
                </li>
                <li><img src={ma03} alt="" />
                <div className="avatarsName">Avatar - Three</div>
                </li>
            </ul>
        </div>
      </Tab>
      <Tab eventKey="longer-tab" title="Education">
      <div className="femaleCntDiv educatCantDiv">
            <ul>
                <li><img src={fe01} alt="" />
                <div className="avatarsName">Avatar - One</div>
                </li>
                <li><img src={ma02} alt="" />
                <div className="avatarsName">Avatar - Two</div>
                </li>
                <li><img src={fe03} alt="" />
                <div className="avatarsName">Avatar - Three</div>
                </li>
                <li><img src={ma04} alt="" />
                <div className="avatarsName">Avatar - Four</div>
                </li>
                <li><img src={ma02} alt="" />
                <div className="avatarsName">Avatar - Two</div>
                </li>
                <li><img src={fe03} alt="" />
                <div className="avatarsName">Avatar - Three</div>
                </li>
            </ul>
        </div>
      </Tab>
    </Tabs>
            </div>
            </div>
        </div>
        <div className="dashBrdRgt">
            <div className="dashBrdRgtIn">
           <div className="avatarVideoDiv">
            <img src={aiVidoe1} alt="" />
            </div>
            <div className="audioplayerDiv">
            <audio src="path/to/your/audio/file.mp3" controls={true} autoPlay={false} />
            </div>

            </div>
         
        </div>
        {text?<Popup hidePopup={closePopup}/>:null}    
        {scriptText?<GenerateScript hidePopup={closePopupScrpt}/>:null}    
            {textAi?<AiTranslation hidePopup={closePopupAi}/>:null}  
        <div className="dashBrdLft dashBrdLftRgt">
           <div className="dashBrdLftInScndLayer">
           <div className='videoRgtBtmDiv'>
             <div className='videoRgtBtmDivLft'>
              <div className='videoRgtBtmDivLftIn'>
              <ul>
            <li onClick={()=>handlePop("AI Script")}><TextT size={22} /> AI Script</li>
            <li onClick={()=>AitranslationPop()}><Translate size={22} /> AI Translation</li>
            <li><ClockClockwise size={22} /> Pause</li>
            <li><Headset size={22} /> Audio Script</li>
            <li><SelectionPlus size={22} /> Add Scene</li>
            <li onClick={()=>generateScipt()}><TextT size={22} /> Generate Script</li>
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
            <input type="file"  />
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
    );
  }
export default CreatelandscapeVideo;
