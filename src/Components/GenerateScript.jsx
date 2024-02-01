import { Plus } from 'phosphor-react';
import React, { useState } from 'react';
function GenerateScript({hidePopup}) {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
        // hidePopup()
   

    };
  return (
    <>
    <div className='popupOutline generateScrptDiv'>
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
                        <li>Youtube Explainer</li>
                        <li>Script to Video</li>
                        <li>Youtube Shorts</li>
                        <li>Explore all <Plus size={15} /></li>
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
                    Audience
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
                Look and Feel
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
                Platform
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
            
          </div>
          </div>
        </div></>}
        </div>
 
    </div>
  

  
        
      
    </>
  )
}

export default GenerateScript