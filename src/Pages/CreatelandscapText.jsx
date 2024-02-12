import React, { useEffect, useState } from 'react';
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
import MyVerticallyCenteredModal from '../Components/LanguageCode';
function CreatelandscapeText() {
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
            {/* <div className="dashBrdLftIn">
                <ul className="dashbrdMenu">
                    <li><Link to="/dashboard/landscapeVideo" ><User size={32}  className="menuIcn"/> Avatars</Link></li>
                    <li><Link to=""><FileVideo size={32} className="menuIcn" /> Template</Link></li>
                    <li><Link to=""><SelectionBackground size={32}  className="menuIcn"/> Background</Link></li>
                    <li><Link to="/dashboard/landscapeText" className="dashActive"><TextAa size={32}  className="menuIcn"/> Text</Link></li>
                    <li><Link to=""><SmileySticker size={32}  className="menuIcn"/> Sticker</Link></li>
                    <li><Link to=""><Headphones size={32}  className="menuIcn"/> Music</Link></li>
                    <li><Link to=""><DownloadSimple size={32}  className="menuIcn"/> Import</Link></li>
                </ul>
            </div> */}
            {text?<Popup hidePopup={closePopup}/>:null}    
            {textAi?<AiTranslation hidePopup={closePopupAi}/>:null}    

            <div className="dashBrdLftInScndLayer">
            <h3 className='scndryHdng'>Add Text</h3>
            <div className='addHeadingTxt'>
                Add heading
            </div>
            <div className='addHeadingTxt addsubHdng'>
                Add subheading
            </div>
            <div className='addHeadingTxt sortBlocktxt'>
                Add a sort block of body text
            </div>
            <div className="textTabDiv">
            <ul>
                <li>
                    <div className='txt_1'>Text</div>
                </li>
                <li>
                    <div className='txt_1 t_2'>Text</div>
                </li>
                <li>
                    <div className='txt_1 t_3'>Text</div>
                </li>
                <li>
                    <div className='txt_1 t_4'>Text</div>
                </li>
                <li>
                    <div className='txt_1 t_5'>Text</div>
                </li>
                <li>
                    <div className='txt_1 t_6'>Text</div>
                </li>
                <li>
                    <div className='txt_1 t_7'>Text</div>
                </li>
                <li>
                    <div className='txt_1 t_8'>Text</div>
                </li>
                <li>
                    <div className='txt_1 t_9'>Text</div>
                </li>
                <li>
                    <div className='txt_1 t_10'>Text</div>
                </li>
                <li>
                    <div className='txt_1 t_11'>Text</div>
                </li>
                <li>
                    <div className='txt_1 t_12'>Text</div>
                </li>
                <li>
                    <div className='txt_1 t_7'>Text</div>
                </li>
                <li>
                    <div className='txt_1 t_8'>Text</div>
                </li>
                <li>
                    <div className='txt_1 t_9'>Text</div>
                </li>
                <li>
                    <div className='txt_1 t_10'>Text</div>
                </li>
                <li>
                    <div className='txt_1 t_11'>Text</div>
                </li>
                <li>
                    <div className='txt_1 t_12'>Text</div>
                </li>
            </ul>
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
      {/* <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button> */}
            </div>
           
            </div>
            
        </div>
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

export default CreatelandscapeText;
