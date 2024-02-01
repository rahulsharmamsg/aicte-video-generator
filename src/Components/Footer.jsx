import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
  return (
    <>
<footer>
    <div className="top-line-theme"></div>
    <div className="row">        
        <div className=" col-lg-12">
            <div className="row footer-right-links">
                <div className="col-lg-3">
                    <h6>Text & Document Translation</h6>
                    <ul>
                        <li className="drop-menu-item"><a href="https://translation.aicte-india.org/translation-independent/">Online Document Translation Tool including Online Editor</a></li>
                        <li className="drop-menu-item"><a href="https://translation.aicte-india.org/translation-independent/Text-Editor/">Chutki</a></li>
                        <li class="drop-menu-item"><a href="https://anuvadiniqa.aicte-india.org/">Ananta</a></li>
                        <li className="drop-menu-item"><a href="https://anuvadini.aicte-india.org/voiceform/">Voice Based Multilingual Form</a></li>
                        <li className="drop-menu-item"><a href="https://translation.aicte-india.org/translation-independent/PmModiNationalInternshipPortal/">Video Translation</a></li>

                        <li className="drop-menu-item"><a href="https://translation.aicte-india.org/translation-independent/transliterate/">Virtual Keyboard</a></li>
                        <li className="drop-menu-item"><a href="https://anuvadini.aicte-india.org/govtofindiascheme/">Govt of Bharatiya Schemes & Initiatives Voice Based Search</a></li>
                        
                        
                        <li className="drop-menu-item"><a href="https://anuvadini.aicte-india.org/dictation-tool/">Dictation Tool</a></li>
                        <li className="drop-menu-item"><a href="https://anuvadini.aicte-india.org/lawdictionary/">Legal Glossary</a></li>                        
                        <li className="drop-menu-item"><a href="https://anuvadini.aicte-india.org/Bhasha-daan/">Bhasha Daan</a></li>
                        
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h6>Voice</h6>
                    <ul>
                        <li className="drop-menu-item"><a href="https://voice.aicte-india.org/">Speech to Speech</a></li>
                        <li className="drop-menu-item"><a href="https://voice.aicte-india.org/">Text to Text Translation</a></li>
                        <li className="drop-menu-item"><Link to="/ThreeDAudio" onClick={scrollToTop} >3D Audio</Link></li>
                        <li className="drop-menu-item"><Link to="/AutoPartner" onClick={scrollToTop}> Auto Panner</Link></li>
                        <li className="drop-menu-item"><Link to="/BassBooster" onClick={scrollToTop}>Bass Booster</Link></li>
                        <li className="drop-menu-item"><Link to="/Equalizer" onClick={scrollToTop}>Equalizer</Link></li>
                        <li className="drop-menu-item"><Link to="/NoiseReducer" onClick={scrollToTop}>Noise Reducer</Link></li>
                        <li className="drop-menu-item"><Link to="/PitchShifter" onClick={scrollToTop}>Pitch Shifter</Link></li>
                        <li className="drop-menu-item"><Link to="/Reverb" onClick={scrollToTop}>Reverb</Link></li>
                        <li className="drop-menu-item"><Link to="/reverseAudio" onClick={scrollToTop}>Reverse Audio</Link></li>
                        <li className="drop-menu-item"><Link to="/stereoPanner" onClick={scrollToTop}>Stereo Panner</Link></li>
                        <li className="drop-menu-item"><Link to="/tempoChanger" onClick={scrollToTop}>Tempo Changer</Link></li>
                        {/* <li className="drop-menu-item"><Link to="/trimmerCutter"> Trimmer / Cutter</Link></li> */}
                        <li className="drop-menu-item"><Link to="/vocalRemover" onClick={scrollToTop}>Vocal Remover</Link></li>
                        <li className="drop-menu-item"><Link to="/volumeChanger" onClick={scrollToTop}> Volume Changer</Link></li>
                        
                    </ul>
                </div>
             
                
                <div className="col-lg-3">
                    {/* <h6>Meeting</h6>
                    <ul>
                        <li className="drop-menu-item"><a href="https://translation.aicte-india.org/translation-independent/transliterate/">Virtual Keyboard</Link></li>
                        <li className="drop-menu-item"><Link to={undefined}>Screen Recording</Link></li>
                        <li className="drop-menu-item"><Link to={undefined}>Video Recording</Link></li>
                        <li className="drop-menu-item"><Link to={undefined}>Meeting Capture</Link></li>
                        <li className="drop-menu-item"><Link to={undefined}>Multi-Camera Recording</Link></li>
                        <li className="drop-menu-item"><Link to={undefined}>Phone as Webcam</Link></li>
                        <li className="drop-menu-item"><Link to={undefined}>Teleprompter</Link></li>
                        <li className="drop-menu-item"><Link to={undefined}>Remove Camera Background</Link></li>
                    </ul>
                    <br/> */}
                    <h6>File</h6>
                    <ul>
                        
                        <li className="drop-menu-item"><a href="https://anuvadini.aicte-india.org/mkb100/">Mann ki baat (100th episode celebration) Citizen feedback Form</a></li>
                        <li class="drop-menu-item"><Link to={undefined}>PDF</Link></li>
                    </ul>
                    <br/>
                    <h6>Education</h6>
                    <ul>
                        <li class="drop-menu-item"><a href="/core-engg" onClick={scrollToTop}>Core Engineering AI</a></li>
                        <li class="drop-menu-item"><Link to={undefined}>Killer - CV</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h6>Image</h6>
                    <ul>
                        <li className="drop-menu-item"><a href="https://anuvadini.aicte-india.org/image-23/" onClick={scrollToTop}>Image 23</a></li>
                        <li className="drop-menu-item"><Link to="/PassportPhotoMaker" onClick={scrollToTop}>Passport Photo Maker</Link></li>
                        <li className="drop-menu-item"><Link to="/ImageBackgroundRemover" onClick={scrollToTop}>Image Background Remover</Link></li>                        
                        <li className="drop-menu-item"><Link to="/RemoveUnwantedObjects" onClick={scrollToTop}>Remove Unwanted Objects</Link></li>
                        <li className="drop-menu-item"><Link to="/FaceCutout" onClick={scrollToTop}>Face Cutout</Link></li>
                        
                    </ul>
                    <br/>
                    <h6>Other Links</h6>
                    <ul>
                        <li><Link to="/AboutUs" title="About Us">About Us</Link></li>
                        <li><Link to={undefined} title="Contact Us">Contact Us</Link></li>
                    </ul>
                    {/* <h6>Video</h6>
                    <ul>
                        <li className="drop-menu-item"><Link to={undefined}>Video Background Remover</Link></li>
                        <li className="drop-menu-item"><Link to={undefined}>Video with Voice</Link></li>
                        <li className="drop-menu-item"><Link to={undefined}>Text to Video</Link></li>
                        <li className="drop-menu-item"><Link to={undefined}>AI Video Generator</Link></li>
                        <li className="drop-menu-item"><Link to={undefined}>AI Summary</Link></li>
                        <li className="drop-menu-item"><Link to={undefined}>Branding</Link></li>
                        <li className="drop-menu-item"><Link to={undefined}>AI Video Analyzer</Link></li>
                    </ul> */}
                </div>
                {/* <div className="col-lg-2">
                    <h6>Other Links</h6>
                    <ul>
                        <li><Link to="/AboutUs" title="About Us" onClick={scrollToTop}>About Us</Link></li>
                        <li><Link to={undefined} title="Contact Us" onClick={scrollToTop}>Contact Us</Link></li>
                    </ul>
                </div> */}
            </div>          
        </div>        
    </div>
    <br/>
    <hr/>
    <br/>
    <center>
        <div className="footer-links">
            <ul>
                <li><a href="/PrivacyPolicy" title="Privacy Policy" onClick={scrollToTop}>Privacy Policy</a></li>|
                <li><a href="/tirmOfUse" title="Term of Use" onClick={scrollToTop}>Term of Use</a></li>|
                <li><a href="/cookies-policy" title="Cookie Policy" onClick={scrollToTop}>Cookie Policy</a></li>                        
            </ul>
        </div>  
    </center>
    <br/>
    <center>© 2023 All rights reserved, AICTE<sup>®</sup></center>
    
</footer>


    </>
  )
}

export default Footer;
