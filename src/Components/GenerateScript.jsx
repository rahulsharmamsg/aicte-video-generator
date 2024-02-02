import { Plus } from 'phosphor-react';
import React, { useState } from 'react';
function GenerateScript({hidePopup,setShowContent}) {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
        // hidePopup()
   

    };
  return (
    <>
    <div className='popupOutline2 generateScrptDiv2'>
       <div className='pop-up'>
            <span className='close-pupup' onClick={hidePopup}>X</span>
            {!showModal &&<>
            <div className='popupContentDiv'>
                <h2>Generate Script</h2>
                <div className='popupContentDivMain'>
                    <div className='row'>
                    <div className='col-12 popupTxtare'>
                        <textarea name="" id="" className='form-control' placeholder='Give me a topic, and detailed instructions...'></textarea>
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
            <h2>Modi Ji's Inspiring Speech for Kashi in Tamil</h2>
          </div>
          <div className='newPopCnt'>
           
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

export default GenerateScript