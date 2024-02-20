import { Plus } from 'phosphor-react';
import React, { useState } from 'react';
import RadioButton from './Radiobutton';
import axios from 'axios';
function GenerateScript({ hidePopup, setShowContent }) {
    const [showModal, setShowModal] = useState(false);
    const [generateTextValue, setGenerateTextValue] = useState()
    const [audienceValue, setAudienceValue] = useState("")
    const [selectedOption, setSelectedOption] = useState('');    
    const [voicetoneOption, setVoicetoneOption] = useState('');    
    const [platformselectedOption, setPlatformSelectedOption] = useState('');
    const audienceoption = ["Political Enthusiasts", "Tamil Speakers", "Indian Citizens"]
    const platformoption = ["Youtube", "Facebook", "Instagram"]  
    const lookandFeel = ["Bright", "Inspiring", "Clean"];
    const voicetone = ["Normal", "Energetic" ,"Motivational", "Angry", "Heavy", "Light" , ];
    const [promptMessage, setPromptMessage] = useState()
    const toggleModal = () => {
        setShowModal(!showModal);
        // hidePopup()
    };
    
    const textplaceholder = () => {
    }
    const handleaudienceOptionClick = (value) => {
        setAudienceValue(value);
    };

    const handleOptionClick = (value) => {
        setSelectedOption(value);
    };
    const handleplatformOptionClick = (value) => {
        setPlatformSelectedOption(value);
    };
    const handleVoiceToneOptionClick = (value) => {
        setVoicetoneOption(value);
    };    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:4000/api/generateVideo', {
            videoTextPromt: generateTextValue,
            audience: audienceValue,
            lookAndFeel: selectedOption,
            platform: platformselectedOption,
            voiceTone : voicetoneOption,
          });
          if (response.status === 200){
            setPromptMessage(response.data.message)
          }
          console.log('API Response:', response);
          // Reset the form or perform any other necessary actions
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return (
        <>
            <div className='popupOutline2 generateScrptDiv2'>
                <div className='pop-up'>
                    <span className='close-pupup' onClick={hidePopup}>X</span>
                    {!showModal && <>
                        <div className='popupContentDiv'>
                            <h2>Generate Script</h2>
                            <div className='popupContentDivMain'>
                                <div className='row'>
                                    <div className='col-12 popupTxtare'>
                                        <textarea name="" id=""
                                            value={generateTextValue}
                                            onChange={(e) => setGenerateTextValue(e.target.value)}
                                            className='form-control' placeholder='Give me a topic, and detailed instructions...'></textarea>
                                    </div>

                                </div>
                            </div>
                            <button className='btn button green' onClick={toggleModal}>Generate a video</button>
                        </div>
                        <div className='col-12 popupRgtLnk popupWorkflow'>
                            <h2 className='workFlowHdng'>Workflows:</h2>
                            <ul>
                                <li onClick={() => setShowContent("Youtube_Explainer")}>Youtube Explainer</li>
                                <li onClick={() => setShowContent("Script_to_Video")}>Script to Video</li>
                                <li onClick={() => setShowContent("Youtube_Shorts")}>Youtube Shorts</li>
                                <li onClick={() => setShowContent("Explore_all")}>Explore all <Plus size={15} /></li>
                            </ul>
                        </div>
                    </>}
                    {showModal && <>
                        <div className="modal newpopupdiv">
                            <div className="modal-content">
                                <div className='newpopTitle'>
                                    <h2>Generate Script</h2>
                                </div>
                                <div className='newPopCnt'>
                                    <div className='col-12 newPopCntOne'>
                                        <div className='row'>
                                            <div className='col-3 newpopCntIn titleDivnew'>
                                                <p>Title </p>
                                            </div>
                                            <div className='col-9 newpopCntIn titleDivnew'>
                                                <h2>{generateTextValue}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 newPopCntOne'>
                                        <div className='row'>
                                            <div className='col-3 newpopCntIn'>
                                                <p> Audience </p>
                                            </div>
                                            <div className='col-9 newpopCntIn'>
                                                {audienceoption.map((option, index) => (
                                                  <RadioButton
                                                  key={index}
                                                  value={option}
                                                  checked={audienceValue === option}
                                                  onChange={() => handleaudienceOptionClick(option)}
                                                  label={option}
                                                />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 newPopCntOne'>
                                        <div className='row'>
                                            <div className='col-3 newpopCntIn'>
                                                <p>Look and Feel</p>
                                            </div>
                                            <div className='col-9 newpopCntIn'>
                                                {lookandFeel.map((option, index) => (
                                                    <RadioButton
                                                    key={index}
                                                    value={option}
                                                    checked={selectedOption === option}
                                                    onChange={() => handleOptionClick(option)}
                                                    label={option}
                                                    ></RadioButton>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 newPopCntOne'>
                                        <div className='row'>
                                            <div className='col-3 newpopCntIn'>
                                                <p>Voice Tone</p>
                                            </div>
                                            <div className='col-9 newpopCntIn'>
                                                {voicetone.map((option, index) => (
                                                    <RadioButton
                                                    key={index}
                                                    value={option}
                                                    checked={voicetoneOption === option}
                                                    onChange={() => handleVoiceToneOptionClick(option)}
                                                    label={option}
                                                    ></RadioButton>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    </div>

                                    <div className='col-12 newPopCntOne'>
                                        <div className='row'>
                                            <div className='col-3 newpopCntIn'>
                                                <p>Platform</p>
                                            </div>
                                            <div className='col-9 newpopCntIn'>
                                                {platformoption.map ((option, index )=>(
                                                    <RadioButton
                                                    key={index}
                                                    value={option}
                                                    checked={platformselectedOption === option}
                                                    onChange={() => handleplatformOptionClick(option)}
                                                    label={option}
                                                    ></RadioButton>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {promptMessage}
                                    <div className='btmBtmDiv'>
                                        <button className='btn button contBtn' onClick={handleSubmit} >Continue</button>
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