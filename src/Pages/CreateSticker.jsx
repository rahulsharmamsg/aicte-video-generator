import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { PaperPlaneRight, Password,FileText, FileVideo, FolderNotchPlus, Chalkboard, User, SelectionBackground, TextAa, SmileySticker, Headphones, DownloadSimple, MagnifyingGlass, TextT, ArrowsClockwise, ClockClockwise, Headset, SelectionPlus, Translate, ArrowsLeftRight, PlayCircle, Upload} from "phosphor-react";
import emj01 from '../assets/images/emj01.png';
import emj02 from '../assets/images/emj02.png';
import emj03 from '../assets/images/emj03.png';
import emj04 from '../assets/images/emj04.png';
import emj05 from '../assets/images/emj05.png';
import emj06 from '../assets/images/emj06.png';
import emj07 from '../assets/images/emj07.png';
import emj08 from '../assets/images/emj08.png';
import arr01 from '../assets/images/arr01.png';
import arr02 from '../assets/images/arr02.png';
import arr03 from '../assets/images/arr03.png';
import arr04 from '../assets/images/arr04.png';
import arr05 from '../assets/images/arr05.png';
import arr06 from '../assets/images/arr06.png';
import arr07 from '../assets/images/arr07.png';
import arr08 from '../assets/images/arr08.png';
import arr09 from '../assets/images/arr09.png';
import arr10 from '../assets/images/arr10.png';
import arr11 from '../assets/images/arr11.png';
import arr12 from '../assets/images/arr12.png';
import arr13 from '../assets/images/arr13.png';
import arr14 from '../assets/images/arr14.png';
import arr15 from '../assets/images/arr15.png';
import arr16 from '../assets/images/arr16.png';
import arr17 from '../assets/images/arr17.png';
import dec01 from '../assets/images/dec01.png';
import dec02 from '../assets/images/dec02.png';
import dec03 from '../assets/images/dec03.png';
import dec04 from '../assets/images/dec04.png';
import dec05 from '../assets/images/dec05.png';
import dec06 from '../assets/images/dec06.png';
import dec07 from '../assets/images/dec07.png';
import dec08 from '../assets/images/dec08.png';
import dec09 from '../assets/images/dec09.png';
import dec10 from '../assets/images/dec10.png';
import dec11 from '../assets/images/dec11.png';
import dec12 from '../assets/images/dec12.png';
import dec13 from '../assets/images/dec13.png';
import aiVidoe1 from '../assets/images/avatarVideoBg.jpg';
import flagInd from '../assets/images/flag/ind.jpg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Popup from '../Components/Popup';
import AiTranslation from '../Components/AiTranslation';
import BottomMenu from './BottomMenu';

function CreateSticker() {
  const[text,setText]=useState(false)
  const[textAi,setAiText]=useState(false)
  const[textcontent,setTextcontent]=useState("")
  const[AItextcontent,setAITextcontent]=useState("")
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
  return (
    <>
      <section className="dashboardSec createVideoDashbrdSec">
        <div className="dashBrdLft">
           <div className="dashBrdLftInScndLayer">
            <h3 className='scndryHdng'>Sticker</h3>
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
      <Tab eventKey="home" title="Emoji">
        <div className="stickerLst">
            <ul>
                <li><img src={emj01} alt="" /></li>
                <li><img src={emj02} alt="" /></li>
                <li><img src={emj03} alt="" /></li>
                <li><img src={emj04} alt="" /></li>
                <li><img src={emj05} alt="" /></li>
                <li><img src={emj06} alt="" /></li>
                <li><img src={emj07} alt="" /></li>
                <li><img src={emj08} alt="" /></li>
                <li><img src={emj01} alt="" /></li>
                <li><img src={emj02} alt="" /></li>
                <li><img src={emj03} alt="" /></li>
                <li><img src={emj04} alt="" /></li>
                <li><img src={emj05} alt="" /></li>
                <li><img src={emj06} alt="" /></li>
                <li><img src={emj07} alt="" /></li>
                <li><img src={emj08} alt="" /></li>
                <li><img src={emj01} alt="" /></li>
                <li><img src={emj02} alt="" /></li>
            </ul>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Arrow">
      <div className="stickerLst">
            <ul>
                <li><img src={arr01} alt="" /></li>
                <li><img src={arr02} alt="" /></li>
                <li><img src={arr03} alt="" /></li>
                <li><img src={arr04} alt="" /></li>
                <li><img src={arr05} alt="" /></li>
                <li><img src={arr06} alt="" /></li>
                <li><img src={arr07} alt="" /></li>
                <li><img src={arr08} alt="" /></li>
                <li><img src={arr09} alt="" /></li>
                <li><img src={arr10} alt="" /></li>
                <li><img src={arr11} alt="" /></li>
                <li><img src={arr12} alt="" /></li>
                <li><img src={arr13} alt="" /></li>
                <li><img src={arr14} alt="" /></li>
                <li><img src={arr15} alt="" /></li>
                <li><img src={arr16} alt="" /></li>
                <li><img src={arr17} alt="" /></li>
                <li><img src={arr10} alt="" /></li>
            </ul>
        </div>
      </Tab>
      <Tab eventKey="longer-tab" title="Decoration">
      <div className="stickerLst">
            <ul>
                <li><img src={dec01} alt="" /></li>
                <li><img src={dec02} alt="" /></li>
                <li><img src={dec03} alt="" /></li>
                <li><img src={dec04} alt="" /></li>
                <li><img src={dec05} alt="" /></li>
                <li><img src={dec06} alt="" /></li>
                <li><img src={dec07} alt="" /></li>
                <li><img src={dec08} alt="" /></li>
                <li><img src={dec09} alt="" /></li>
                <li><img src={dec10} alt="" /></li>
                <li><img src={dec11} alt="" /></li>
                <li><img src={dec12} alt="" /></li>
                <li><img src={dec13} alt="" /></li>
                <li><img src={dec10} alt="" /></li>
                <li><img src={dec11} alt="" /></li>
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
export default CreateSticker;
