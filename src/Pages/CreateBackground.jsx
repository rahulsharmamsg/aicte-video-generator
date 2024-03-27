import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { PaperPlaneRight, Password,FileText, FileVideo, FolderNotchPlus, Chalkboard, User, SelectionBackground, TextAa, SmileySticker, Headphones, DownloadSimple, MagnifyingGlass, TextT, ArrowsClockwise, ClockClockwise, Headset, SelectionPlus, Translate, ArrowsLeftRight, PlayCircle, Upload} from "phosphor-react";
import bac01 from '../assets/images/back01.gif';
import bac02 from '../assets/images/back02.gif';
import bac03 from '../assets/images/back03.gif';
import bac04 from '../assets/images/back04.gif';
import aiVidoe1 from '../assets/images/avatarVideoBg.jpg';
import flagInd from '../assets/images/flag/ind.jpg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Popup from '../Components/Popup';
import AiTranslation from '../Components/AiTranslation';
import BottomMenu from './BottomMenu';
import CanvasEditor from '../DesignEditor/Canvas/Canvas.tsx'
import Footer from "../DesignEditor/Footer/Footer.tsx"
import { useEditor } from "@layerhub-io/react"
import { nanoid } from "nanoid"
import Background from '../Components/Background.tsx';
import UploadFile from '../Components/UploadFile.jsx';
import Import from '../Components/Import.tsx';



function CreateBackground() {
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

  const editor = useEditor()
 

  const addObject = React.useCallback(
    
    (url) => {
      if (editor) {
        console.log("url", url)
        const upload = {
          id: nanoid(),
          src: url,
          preview: url,
          type: "StaticVideo",
        }
        editor.objects.add(upload)
      }
    },
    [editor]
  )

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
            <h3 className='scndryHdng'>Background</h3>
            <form action="">
                <div className="srchAiAvatar">
                <input type="file" placeholder="Search for AI Avatars" className="srchAiAvatars" />
                <Upload className="maginifyIcn" size={22} />
                </div>
            </form>
            <div className="avatarsTab">
            <Background />
            </div>
            </div>
        </div>
        <div className="dashBrdRgt">
            <div className="dashBrdRgtIn">
            <CanvasEditor />
            <div className="audioplayerDiv">
            <Footer />
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
export default CreateBackground;
