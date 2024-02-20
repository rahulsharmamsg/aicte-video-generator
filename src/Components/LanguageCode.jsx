import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import flagInd from '../assets/images/flag/ind.jpg';
import LanguageVoice from "../../src/languageVoice/LanguageVoiceCode.json"
import { PaperPlaneRight, Password,FileText, FileVideo, FolderNotchPlus, Chalkboard, User, SelectionBackground, TextAa, SmileySticker, Headphones, DownloadSimple, MagnifyingGlass, TextT, ArrowsClockwise, ClockClockwise, Headset, SelectionPlus, Translate, ArrowsLeftRight, PlayCircle} from "phosphor-react";
import styled from "styled-components";



const MyVerticallyCenteredModal = (props)=>{
    const [getEnable,setEnable] = useState("");
   
    const selectLanguage = (lcode,index)=>{
      console.log(lcode)
        props.seLanguageCode(lcode);
        setEnable(index)
    }

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
          {Object.entries( LanguageVoice[4] ).map((res,i)=>{
              return(
                <>
  
  <li key={i}>
            <div className='voiceOverPpup'>
          <div className='voiceOverInpt' style={{ backgroundColor: getEnable === i ? '#4cde8c' : '' }}>
          <div className='flgTxt' variant="primary"  onClick={(e)=>selectLanguage(res,i)}  ><span className='flgIcnpop'><img src={flagInd} alt="" /></span> <span className='voiceLang'>{res[1]}</span></div> 
          <PlayCircle size={24} className='arrowLftRgt' /> 
          </div>  
              </div> 
            </li>
                </>
                
              )
            })}
          
                
  {/*          
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
            </li> */}
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
        </>
      );
}
export default MyVerticallyCenteredModal;