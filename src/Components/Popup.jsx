import React, { useState } from 'react'
import Speech from 'react-speech';

function Popup({hidePopup,language}) {

    const [getVideoScript,setVideoScript] = useState("");
const reWrite = ()=>{
    setVideoScript("");
}
  return (
    <div className='popupOutline'>
        <div className='pop-up'>
            <span className='close-pupup' onClick={hidePopup}>X</span>
            <div className='popupContentDiv'>
                <h2>Script to Video</h2>
                <div className='popupContentDivMain'>
                    <div className='row'>
                    <div className='col-9 popupTxtare'>
                        <textarea name="" id="" value={getVideoScript} className='form-control' onChange={(e)=>{setVideoScript(e.target.value)}} placeholder='Welcome to Anuvadini AI Video Generation Tool'></textarea>
                    </div>
                    <div className='col-3 popupRgtLnk'>
                    <h2>Smart Optimization</h2>
                    <ul>
                        <li>Shorten</li>
                        <li>Expand</li>
                        <li>Professional</li>
                        <li>Engaging</li>
                        <li>Happier</li>
                        <li onClick={reWrite}>Rewrite</li>
                    </ul>
                    </div>
                    </div>
                </div>
                <Speech text={getVideoScript} className='btn button green' displayText="Apply" textAsButton={true}  lang="en-HI" />
                {/* <button className='btn button green'>Apply</button> */}
            </div>
        </div>
    </div>
  )
}

export default Popup