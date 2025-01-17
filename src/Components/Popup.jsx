import React, { useState } from 'react'
import axios from 'axios';
import languageVoiceCode  from "../languageVoice/LanguageVoiceCode.json"
import RadioButton from './Radiobutton';
function Popup(props) {

    const [getVideoScript,setVideoScript] = useState("");
    const [getLanguage,setLanguage] = useState(props.language || ["en","en-IN-PrabhatNeural"])
    const [voicetoneOption, setVoicetoneOption] = useState('');
    
    const voicetone = ["Normal", "Energetic" ,"Motivational", "Angry", "Heavy", "Light" , ];
    window.Buffer = window.Buffer || require("buffer").Buffer;


const reWrite = ()=>{
    setVideoScript("");
}

const shortenText = async()=>{
    try {
        const data = {text:getVideoScript}
        
        const response = await axios.post("http://localhost:8000/chatgbt", data, {
            headers: {
              "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
                model: 'text-davinci-003', // You can use a different model if needed
                prompt: getVideoScript,
                max_tokens: 30 // You can adjust the number of tokens to control the length of the shortened text
              })      
          });
          setVideoScript(response.data.data)
      // Extract and set the shortened text from the API response
    } catch (error) {
        console.log(error);
    }
}


async function textTOAudio() {

    let post = {
      Body: getVideoScript,
      language:getLanguage[0],
    //   voice: languageVoiceCode[4][localStorage.getItem("fromLanguage") ||"hi"],
      voice: getLanguage[1],
    };
    fetch("https://voiceapi.aicte-india.org/text-to-voice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {  
        let ar = [];
        ar = data.data.audio.data;
        let bufferData = Buffer.from(ar, "binary");
        console.log(bufferData,'buffer')  
        let blob = new Blob([bufferData], { type: "audio/wav" });
        props.setBuf(blob);
        let url = URL.createObjectURL(blob);
        console.log(url,'blob url ...........')
        props.setAudioSrc(url);

      })
      .catch((err) => {});
  }
  const handleVoiceToneOptionClick = (value) => {
    setVoicetoneOption(value);
};
  return (
    <div className='popupOutline'>
        <div className='pop-up'>
            <span className='close-pupup' onClick={props.hidePopup}>X</span>
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
                        <li onClick={shortenText}>Shorten</li>
                        <li>Expand</li>
                        <li>Professional</li>
                        <li>Engaging</li>
                        <li>Happier</li>
                        <li onClick={reWrite}>Rewrite</li>
                    </ul>
                    </div>
                    </div>
                    <div class="row">
                      <div class="col-3 newpopCntIn">
                        <p>Voice Tone</p></div>
                        <div class="col-9 newpopCntIn">
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
                {/* <Speech text={getVideoScript} className='btn button green' displayText="Apply" textAsButton={true}  lang="en-HI" /> */}
                <button className='btn button green' onClick={()=>{
                    textTOAudio();
                    props.hidePopup()
                    }}>Apply</button>
            </div>
        </div>
    </div>
  )
}

export default Popup