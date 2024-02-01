import React from "react";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import logo from "../assets/images/aicte_logo_sign.png"
import anuvadini from "../assets/images/Anuvadini.png"
import MenuOpen from "../assets/images/bars.png"
import MOE from "../assets/images/logo_ministry.png"

import FaceCutout from "../assets/images/face.png";


import { FilePdf } from "phosphor-react";
import coreEngg from "../assets/images/icon_engineering.svg";
import ai from "../assets/images/ai.png";
import image23 from "../assets/images/icon_image-23.svg";
import camera from "../assets/images/camera.png";
import analyzer from "../assets/images/icon_ai-video-analyzer.svg"
import doctrans from "../assets/images/icon/translation/documents-tran.png"
import chutki from "../assets/images/icon/translation/chutiki-icon.png"
import voice from "../assets/images/icon/translation/voice01.png"
import legal from "../assets/images/icon/translation/legal.png"
import virtual from "../assets/images/icon/translation/virtual-keyword-icon.png"
import govt from "../assets/images/icon/translation/govt.png"
import Dictation from "../assets/images/icon/translation/judge.png"
import bhasha from "../assets/images/icon/translation/bhasha-dan-icn.png"
import videotranslation from "../assets/images/icon/translation/video-translation.svg"
import textTo from "../assets/images/icon/voice/text-to-speech.png"
import voicetotext from "../assets/images/icon/voice/text-to-text.png"
import mkb from "../assets/images/icon/file/mkb.png"
import ananta from "../assets/images/icon/translation/ananta.png"

function Header() {
  const [show, setShow] = useState(false);
  const [authCategory, setAuthCategory] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [manu, setMenu] = useState(false);
  const menuHandle = () =>{
    setMenu(!manu);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  

  };
  const navigate = useNavigate();
  const loginPage =() =>{
navigate ('/login')
  }
  return (
    <div>
      <header>
        <div className="row">
          <div className="logo-sec col-lg-4 text-start">
          <Link to="/" title="" className="anuvadini">
              <Image src={anuvadini} alt="Logo" width="205px"/>
            </Link>
              <Link to="https://www.education.gov.in/" title="" target="_blank">
              <Image src={MOE} alt="Logo" width={110}/>
              </Link>
              <Link to="https://www.aicte-india.org/" className="aicte" title="" target="_blank">
              <Image src={logo} alt="Logo" width={55}/>
              </Link>
          </div>
         
          <div className={manu === true ? "menu-sec col-lg-8 openMenu" : "menu-sec col-lg-8"}>
            <ul>
              <li>
                <Link to="/" onClick={menuHandle} >Home</Link>
              </li>
              <li>
                <Link to={undefined}  title="Translation" className="translationMenu dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Translation
                  <svg
                    data-v-7e3b073a=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    role="Image"
                    aria-hidden="true"
                    className="v-icon__svg"
                    style={{fontSize: 14, height: 14, width: 14}}
                  >
                    <path
                      data-v-7e3b073a=""
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    ></path>
                  </svg>
                </Link>
                <div className="navDropDown translationDropDown dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <ul>
                    <li className="drop-menu-item">
                      <Link target="_blank" onClick={menuHandle} to="https://translation.aicte-india.org/translation-independent/">
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <Image src={doctrans} />
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              Online Document Translation Tool
                            </div>
                            <p className="chakra-text css-itvw0n">
                               Including Online Editor
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link target="_blank" onClick={menuHandle} to="https://translation.aicte-india.org/translation-independent/Text-Editor/">
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <Image src={chutki} />
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                            Chutki
                            </div>
                            <p className="chakra-text css-itvw0n">
                            Real-Time Doc Translation Service
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li class="drop-menu-item">
                      <a target="_blank" href="https://anuvadiniqa.aicte-india.org/">
                          <div class="css-hboir5">
                              <div class="css-1hnxo7a">
                                <Image src={ananta}/>
                              </div>
                              <div class="css-195k0gj">
                                  <div class="chakra-heading css-9f6g39">Ananta</div>
                                  <p className="chakra-text css-itvw0n">
                                  infinite deep search generative AI engine for ms word, pdf, pptx, text, audio and video
                            </p>
                              </div>
                          </div> 
                      </a>
                  </li>
           
                    <li className="drop-menu-item">
                      <Link target="_blank" to="https://anuvadini.aicte-india.org/voiceform/" onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <Image src={voice} />
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              Voice Based Multilingual Form
                            </div>
                            <p className="chakra-text css-itvw0n">
                            a web tool to create form to any Indian languages
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link target="_blank" to="https://translation.aicte-india.org/translation-independent/PmModiNationalInternshipPortal/">
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <Image src={videotranslation} />
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              Video Translation
                            </div>
                            <p className="chakra-text css-itvw0n">
                            A tool to make video translation to any Indian languages
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  <li class="drop-menu-item">
                        <Link to="https://translation.aicte-india.org/translation-independent/transliterate/" target="_blank" onClick={menuHandle}>
                            <div class="css-hboir5">
                                <div class="css-1hnxo7a" style={{width:75}}>
                                    <img src={virtual}/>
                                </div>
                                <div class="css-195k0gj">
                                    <div class="chakra-heading css-9f6g39">Virtual Keyboard</div>
                                    <p class="chakra-text css-itvw0n">A web tool to type in any Indian languages</p>
                                </div>
                            </div> 
                        </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link target="_blank" to="https://anuvadini.aicte-india.org/govtofindiascheme/" onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <Image src={govt} />
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                               Govt of India Schemes
                            </div>
                            <p className="chakra-text css-itvw0n">
                              Schemes & Initiatives Voice Based Search (Chat
                              GPT)
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link target="_blank" to="https://anuvadini.aicte-india.org/dictation-tool/" onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <Image src={Dictation} />
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              Dictation Tool
                            </div>
                            <p className="chakra-text css-itvw0n">This tool is useful for making note taking easier</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link target="_blank" to="https://anuvadini.aicte-india.org/lawdictionary/" onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <Image src={legal} />
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              Legal Glossary
                            </div>
                            <p className="chakra-text css-itvw0n">Access to a comprehensive and authentic respoitory</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                   
                    <li className="drop-menu-item">
                      <Link target="_blank" to="https://anuvadini.aicte-india.org/Bhasha-daan/" onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <Image src={bhasha} />
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              Bhasha Daan
                            </div>
                            <p className="chakra-text css-itvw0n">
                              (Discover and Author the collection of Indian
                              language words and sentences)
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                   
                    
                  </ul>
                </div>
              </li>
              <li>
                <Link to={undefined} title="Translation" className="voiceMenu dropdown-toggle" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  Voice
                  <svg
                    data-v-7e3b073a=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    role="Image"
                    aria-hidden="true"
                    className="v-icon__svg"
                    style={{fontSize: 14, height: 14, width: 14}}
                  >
                    <path
                      data-v-7e3b073a=""
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    ></path>
                  </svg>
                </Link>
                <div className="navDropDown voiceDropDown dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <ul>
                    <li className="drop-menu-item">
                      <Link target="_blank" to="https://voice.aicte-india.org/" onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <Image src={textTo} />
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">Speech to Speech</div>
                            <p className="chakra-text css-itvw0n">                              
                              Translation Services
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link target="_blank" to="https://voice.aicte-india.org/" onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <Image src={voicetotext} />
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">Voice to Text, Text to Voice</div>
                            <p className="chakra-text css-itvw0n">
                              Text to Text, Image to Text Translation
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to="/ThreeDAudio"  onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <svg
                              height="100%"
                              width="100%"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              fill="#E53E3E"
                              stroke="#E53E3E"
                            >
                              <path d="M224 241H72c-8.284 0-15 6.716-15 15v80c0 8.284 6.716 15 15 15h112c5.682 0 10.875-3.21 13.417-8.292l40-80A15 15 0 0 0 224 241Zm-49.271 80H87v-50h112.729zM440 241H288a15 15 0 0 0-13.417 21.708l40 80A15.001 15.001 0 0 0 328 351h112c8.284 0 15-6.716 15-15v-80c0-8.284-6.716-15-15-15zm-15 80h-87.729l-25-50H425Z"></path>
                              <path d="m506.544 188.428-97-80A15 15 0 0 0 385 120v65H127v-65a14.998 14.998 0 0 0-8.603-13.567 14.997 14.997 0 0 0-15.941 1.995l-97 80A15.001 15.001 0 0 0 0 200v162c0 24.813 20.187 45 45 45h160.459c17.154 0 32.577-9.532 40.25-24.875L256 361.542l10.292 20.583c7.672 15.343 23.095 24.875 40.25 24.875H467c24.813 0 45-20.187 45-45V200c0-4.478-2.001-8.722-5.456-11.572zM415 151.815 455.237 185H415ZM97 185H56.763L97 151.815Zm370 192H306.541a14.92 14.92 0 0 1-13.417-8.292l-23.708-47.417a15 15 0 0 0-26.833.001l-23.708 47.416A14.917 14.917 0 0 1 205.458 377H45c-8.271 0-15-6.729-15-15V215h452v147c0 8.271-6.729 15-15 15z"></path>
                            </svg>
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              3D Audio
                            </div>
                            <p className="chakra-text css-itvw0n">
                              Enhance the stereo sound by adding a 3D effect to
                              it
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to="/AutoPartner"  onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <svg
                              height="100%"
                              width="100%"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              fill="#DD6B20"
                              stroke="#DD6B20"
                            >
                              <path d="M255 16C114.06 16 0 130.05 0 271v150c0 24.813 20.187 45 45 45h17.58c6.192 17.458 22.865 30 42.42 30 24.813 0 45-20.187 45-45V331c0-24.813-20.187-45-45-45a44.79 44.79 0 0 0-15 2.58V271c0-90.847 73.891-165 165-165 92.084 0 167 74.019 167 165v17.58a44.785 44.785 0 0 0-15-2.58c-24.813 0-45 20.187-45 45v120c0 24.813 20.187 45 45 45 19.555 0 36.228-12.542 42.42-30H467c24.813 0 45-20.187 45-45V271c0-141.759-117.098-255-257-255Zm167 435c0 8.271-6.729 15-15 15s-15-6.729-15-15V331c0-8.271 6.729-15 15-15s15 6.729 15 15zM60 436H45c-8.271 0-15-6.729-15-15v-60c0-8.271 6.729-15 15-15h15zm45-120c8.271 0 15 6.729 15 15v120c0 8.271-6.729 15-15 15s-15-6.729-15-15V331c0-8.271 6.729-15 15-15zm-45-45v45H45a44.79 44.79 0 0 0-15 2.58V271c0-56.646 21.05-108.463 55.728-148.06l21.256 21.256C77.713 178.316 60 222.626 60 271ZM255 76c-48.374 0-92.685 17.712-126.803 46.984l-21.256-21.256C146.537 67.05 198.354 46 255 46c57.324 0 109.744 21.181 149.739 56.048l-21.447 21.447C347.408 92.771 302.37 76 255 76Zm227 345c0 8.271-6.729 15-15 15h-15v-90h15c8.271 0 15 6.729 15 15zm0-102.42a44.785 44.785 0 0 0-15-2.58h-15v-45c0-46.701-16.737-91.006-47.424-126.363l21.435-21.435C460.859 162.765 482 214.479 482 271Z"></path>
                            </svg>
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              Auto Panner
                            </div>
                            <p className="chakra-text css-itvw0n">
                              Make the audio alternate from left to right
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to="/BassBooster" onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <svg
                              height="100%"
                              width="100%"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              fill="#D69E2E"
                              stroke="#D69E2E"
                            >
                              <path d="M256 60.25C148.063 60.25 60.25 148.063 60.25 256S148.063 451.75 256 451.75 451.75 363.937 451.75 256 363.937 60.25 256 60.25Zm0 361.5c-91.395 0-165.75-74.355-165.75-165.75S164.605 90.25 256 90.25 421.75 164.605 421.75 256 347.395 421.75 256 421.75z"></path>
                              <path d="M256 180.75c-41.493 0-75.25 33.757-75.25 75.25s33.757 75.25 75.25 75.25 75.25-33.757 75.25-75.25-33.757-75.25-75.25-75.25zm0 120.5c-24.951 0-45.25-20.299-45.25-45.25s20.299-45.25 45.25-45.25 45.25 20.299 45.25 45.25-20.299 45.25-45.25 45.25z"></path>
                              <path d="M330.6 160.188c-5.858 5.857-5.858 15.355 0 21.213 19.927 19.927 30.9 46.42 30.9 74.6 0 28.18-10.974 54.673-30.9 74.6-5.858 5.857-5.858 15.355 0 21.213a14.95 14.95 0 0 0 10.606 4.394c3.838 0 7.678-1.465 10.606-4.394C377.405 326.221 391.5 292.193 391.5 256c0-36.193-14.095-70.221-39.688-95.812-5.857-5.858-15.355-5.858-21.212 0zM150.5 256c0-28.18 10.974-54.674 30.9-74.6 5.858-5.857 5.858-15.355 0-21.213-5.858-5.858-15.355-5.858-21.213 0C134.594 185.779 120.5 219.807 120.5 256c0 36.193 14.094 70.221 39.687 95.812a14.954 14.954 0 0 0 10.606 4.394c3.838 0 7.678-1.465 10.606-4.394 5.858-5.857 5.858-15.355 0-21.213C161.474 310.674 150.5 284.18 150.5 256Z"></path>
                              <path d="M486.223 368.058C503.327 332.983 512 295.282 512 256c0-39.282-8.673-76.983-25.777-112.058a12.335 12.335 0 0 1 2.569-14.359l-.001.001c15.784-15.11 24.208-36.318 23.112-58.185-.93-18.55-8.739-36.062-21.989-49.313C476.663 8.836 459.15 1.026 440.601.097c-21.872-1.089-43.074 7.329-58.184 23.111a12.333 12.333 0 0 1-14.359 2.569C332.983 8.673 295.282 0 256 0c-39.282 0-76.983 8.673-112.057 25.777a12.332 12.332 0 0 1-14.359-2.568C114.472 7.424 93.26-.997 71.4.097c-18.55.93-36.064 8.739-49.314 21.989C8.835 35.337 1.026 52.851.096 71.401c-1.095 21.865 7.329 43.071 23.112 58.183a12.332 12.332 0 0 1 2.57 14.358C8.673 179.017 0 216.718 0 256c0 39.282 8.673 76.983 25.778 112.058a12.333 12.333 0 0 1-2.569 14.358C7.425 397.527-.999 418.733.096 440.6c.93 18.55 8.739 36.063 21.989 49.314 13.25 13.25 30.764 21.06 49.314 21.989 21.869 1.091 43.073-7.328 58.185-23.111a12.328 12.328 0 0 1 14.359-2.569C179.017 503.327 216.718 512 256 512s76.983-8.673 112.058-25.777a12.333 12.333 0 0 1 14.358 2.568c15.11 15.783 36.308 24.206 58.185 23.112 18.55-.93 36.062-8.739 49.313-21.989 13.25-13.251 21.06-30.764 21.989-49.313 1.096-21.866-7.328-43.074-23.111-58.184a12.333 12.333 0 0 1-2.569-14.359zm-18.178 36.028c9.491 9.086 14.556 21.848 13.896 35.013-1.146 22.878-19.964 41.696-42.842 42.842-13.155.655-25.927-4.405-35.014-13.896-12.795-13.361-32.558-16.892-49.178-8.786C323.964 474.349 290.687 482 256 482s-67.964-7.651-98.907-22.742a42.39 42.39 0 0 0-18.608-4.314c-11.278 0-22.36 4.526-30.569 13.101-9.088 9.492-21.851 14.551-35.014 13.896-22.877-1.146-41.695-19.965-42.842-42.843-.66-13.164 4.405-25.926 13.896-35.012 13.362-12.794 16.893-32.558 8.787-49.179C37.651 323.964 30 290.687 30 256s7.651-67.964 22.742-98.908c8.105-16.621 4.574-36.384-8.788-49.178-9.49-9.086-14.555-21.848-13.896-35.012 1.147-22.878 19.965-41.697 42.843-42.843a45.285 45.285 0 0 1 35.014 13.896c12.793 13.362 32.556 16.891 49.178 8.786C188.036 37.651 221.313 30 256 30s67.964 7.651 98.907 22.742c16.621 8.105 36.383 4.576 49.179-8.787 9.087-9.49 21.856-14.554 35.013-13.896 22.878 1.146 41.696 19.964 42.842 42.842.66 13.165-4.404 25.927-13.896 35.013l-.001.001c-13.361 12.794-16.892 32.557-8.786 49.178C474.349 188.036 482 221.313 482 256s-7.651 67.964-22.742 98.907c-8.106 16.621-4.575 36.384 8.787 49.179z"></path>
                            </svg>
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              Bass Booster
                            </div>
                            <p className="chakra-text css-itvw0n">
                              Boost the bass of a song making it more bass heavy
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to="/Equalizer"  onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <svg
                              height="100%"
                              width="100%"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              fill="#38A169"
                              stroke="#38A169"
                            >
                              <path d="M467 31H45C20.187 31 0 51.187 0 76v360c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45V76c0-24.813-20.187-45-45-45ZM151 61h150v40H151Zm150 0h60v40h-60zm181 375c0 8.271-6.729 15-15 15H45c-8.271 0-15-6.729-15-15V76c0-8.271 6.729-15 15-15h76v55c0 8.284 6.716 15 15 15h240c8.284 0 15-6.716 15-15V61h76c8.271 0 15 6.729 15 15z"></path>
                              <path d="M433 193.58V176c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v17.58c-17.459 6.192-30 22.865-30 42.42 0 19.555 12.541 36.228 30 42.42V406c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15V278.42c17.459-6.192 30-22.865 30-42.42 0-19.555-12.541-36.228-30-42.42zM418 251c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15zM325 303.58V176c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v127.58c-17.459 6.192-30 22.865-30 42.42 0 19.555 12.541 36.228 30 42.42V406c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-17.58c17.459-6.192 30-22.865 30-42.42 0-19.555-12.541-36.228-30-42.42zM310 361c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15zM217 193.58V176c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v17.58c-17.459 6.192-30 22.865-30 42.42 0 19.555 12.541 36.228 30 42.42V406c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15V278.42c17.459-6.192 30-22.865 30-42.42 0-19.555-12.541-36.228-30-42.42zM202 251c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15zM109 303.58V176c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v127.58c-17.459 6.192-30 22.865-30 42.42 0 19.555 12.541 36.228 30 42.42V406c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-17.58c17.459-6.192 30-22.865 30-42.42 0-19.555-12.541-36.228-30-42.42zM94 361c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15zM898.119 507.606A14.95 14.95 0 0 0 908.725 512a14.95 14.95 0 0 0 10.606-4.394l40-40c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0l-14.393 14.394V387c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v73.787l-14.394-14.394c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.857-5.858 15.355 0 21.213zM949.544 297.606l14.394-14.393V357c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-73.787l14.394 14.394a14.953 14.953 0 0 0 10.606 4.393 14.95 14.95 0 0 0 10.606-4.394c5.858-5.857 5.858-15.355 0-21.213l-40-40c-5.857-5.857-15.355-5.857-21.213 0l-40 40c-5.858 5.857-5.858 15.355 0 21.213 5.858 5.858 15.356 5.858 21.213 0z"></path>
                            </svg>
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              Equalizer
                            </div>
                            <p className="chakra-text css-itvw0n">
                              Adjust the frequencies of your audio
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to="/NoiseReducer" onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <svg
                              height="100%"
                              width="100%"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              fill="#319795"
                              stroke="#319795"
                            >
                              <path
                                d="M291.25 413.565v25.8c0 24.951-20.299 45.25-45.25 45.25h-80.375c-24.951 0-45.25-20.299-45.25-45.25.528-64.81 11.878-103.767-30.19-105.375-8-.306-14.913 0-26.747 0-17.293 0-31.546 13.247-33.156 30.125H15c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15h15.125v26.938c0 18.368 14.944 33.313 33.313 33.313H91.88c6.972 34.331 37.387 60.25 73.745 60.25H246c41.493 0 75.25-33.757 75.25-75.25v-25.8zm-231.125 7.488v-53.75a3.317 3.317 0 0 1 3.313-3.313h26.938v60.375H63.438a3.316 3.316 0 0 1-3.313-3.312z"
                                style={{opacity: 1}}
                              ></path>
                              <circle
                                cx="305.223"
                                cy="206.777"
                                r="191.777"
                                style={{opacity: 1, fill: "none", fillOpacity: 1, fillRule: "evenodd", strokeWidth: 30, strokeDasharray: "none", strokeOpacity: 1}}
                              ></circle>
                              <rect
                                width="29.927"
                                height="380.317"
                                x="291.323"
                                y="3.151"
                                ry="0"
                                style={{fillRule: "evenodd", stroke: "none", strokeWidth: 30, strokeDasharray: "none", strokeOpacity: 1}}
                              ></rect>
                              <rect
                                width="29.927"
                                height="343.347"
                                x="201.073"
                                y="33.207"
                                ry="0"
                                style={{fillRule: "evenodd", stroke: "none", strokeWidth: 30, strokeDasharray: "none", strokeOpacity: 1}}
                              ></rect>
                              <rect
                                width="29.927"
                                height="343.347"
                                x="381.644"
                                y="32.605"
                                ry="0"
                                style={{fillRule: "evenodd", stroke: "none", strokeWidth: 30, strokeDasharray: "none", strokeOpacity: 1}}
                              ></rect>
                              <rect
                                width="29.927"
                                height="380.317"
                                x="191.813"
                                y="-497"
                                ry="0"
                                transform="rotate(90)"
                                style={{fillRule: "evenodd", stroke: "none", strokeWidth: 30, strokeDasharray: "none", strokeOpacity: 1}}
                              ></rect>
                              <rect
                                width="29.927"
                                height="342.332"
                                x="283.938"
                                y="-473.423"
                                ry="0"
                                transform="rotate(90)"
                                style={{fillOpacity: 1, fillRule: "evenodd", stroke: "none", strokeWidth: 30, strokeDasharray: "none", strokeOpacity: 1}}
                              ></rect>
                              <rect
                                width="29.927"
                                height="342.332"
                                x="103.005"
                                y="-472.295"
                                ry="0"
                                transform="rotate(90)"
                                style={{fillOpacity: 1, fillRule: "evenodd", stroke: "none", strokeWidth: 30, strokeDasharray: "none", strokeOpacity: 1}}
                              ></rect>
                            </svg>
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              Noise Reducer
                            </div>
                            <p className="chakra-text css-itvw0n">
                              Reduce background noise from recordings
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to="/PitchShifter"  onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <svg
                              height="100%"
                              width="100%"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              fill="#3182CE"
                              stroke="#3182CE"
                            >
                              <path d="M-55 31h-422c-24.813 0-45 20.187-45 45v360c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45V76c0-24.813-20.187-45-45-45Zm-316 30h150v40h-150Zm150 0h60v40h-60zm181 375c0 8.271-6.729 15-15 15h-422c-8.271 0-15-6.729-15-15V76c0-8.271 6.729-15 15-15h76v55c0 8.284 6.716 15 15 15h240c8.284 0 15-6.716 15-15V61h76c8.271 0 15 6.729 15 15z"></path>
                              <path d="M-89 193.58V176c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v17.58c-17.459 6.192-30 22.865-30 42.42 0 19.555 12.541 36.228 30 42.42V406c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15V278.42c17.459-6.192 30-22.865 30-42.42 0-19.555-12.541-36.228-30-42.42zM-104 251c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15zM-197 303.58V176c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v127.58c-17.459 6.192-30 22.865-30 42.42 0 19.555 12.541 36.228 30 42.42V406c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-17.58c17.459-6.192 30-22.865 30-42.42 0-19.555-12.541-36.228-30-42.42zM-212 361c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15zM-305 193.58V176c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v17.58c-17.459 6.192-30 22.865-30 42.42 0 19.555 12.541 36.228 30 42.42V406c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15V278.42c17.459-6.192 30-22.865 30-42.42 0-19.555-12.541-36.228-30-42.42zM-320 251c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15zM-413 303.58V176c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v127.58c-17.459 6.192-30 22.865-30 42.42 0 19.555 12.541 36.228 30 42.42V406c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-17.58c17.459-6.192 30-22.865 30-42.42 0-19.555-12.541-36.228-30-42.42zM-428 361c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15zM376.119 507.606A14.95 14.95 0 0 0 386.725 512a14.95 14.95 0 0 0 10.606-4.394l40-40c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0l-14.393 14.394V387c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v73.787l-14.394-14.394c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.857-5.858 15.355 0 21.213zM427.544 297.606l14.394-14.393V357c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-73.787l14.394 14.394A14.953 14.953 0 0 0 496.938 302a14.95 14.95 0 0 0 10.606-4.394c5.858-5.857 5.858-15.355 0-21.213l-40-40c-5.857-5.857-15.355-5.857-21.213 0l-40 40c-5.858 5.857-5.858 15.355 0 21.213 5.858 5.858 15.356 5.858 21.213 0z"></path>
                              <path
                                d="M371.863 7.286c0-11.656-11.772-19.625-22.594-15.297L129.6 79.857a16.474 16.474 0 0 0-10.356 15.297v239.518a65.47 65.47 0 0 0-32.95-8.866c-36.338 0-65.901 29.563-65.901 65.9 0 36.338 29.563 65.901 65.9 65.901 36.338 0 65.901-29.563 65.901-65.9V194.175l186.719-74.688v127.317a65.47 65.47 0 0 0-32.95-8.866c-36.338 0-65.901 29.563-65.901 65.901 0 36.338 29.563 65.9 65.9 65.9 36.338 0 65.901-29.562 65.901-65.9zM86.293 424.657c-18.168 0-32.95-14.782-32.95-32.95 0-18.17 14.782-32.95 32.95-32.95 18.17 0 32.951 14.78 32.951 32.95 0 18.168-14.782 32.95-32.95 32.95zm65.901-265.97v-52.38L338.913 31.62v52.379zm153.769 178.102c-18.17 0-32.95-14.781-32.95-32.95 0-18.169 14.78-32.95 32.95-32.95 18.168 0 32.95 14.781 32.95 32.95 0 18.169-14.782 32.95-32.95 32.95z"
                                transform="translate(-20.393 9.205)"
                                style={{strokeWidth: 1.09834}}
                              ></path>
                            </svg>
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              Pitch Shifter
                            </div>
                            <p className="chakra-text css-itvw0n">
                              Change the pitch of your audio
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to="/Reverb" onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <svg
                              height="100%"
                              width="100%"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              fill="#00B5D8"
                              stroke="#00B5D8"
                            >
                              <path
                                d="M497 110.07H269.719L18.73 45.66a14.994 14.994 0 0 0-12.926 2.676A15.013 15.013 0 0 0 0 60.188v391.625a15.002 15.002 0 0 0 18.73 14.53l250.989-64.41h227.28c8.286 0 15.001-6.718 15.001-15V125.07c0-8.285-6.715-15-15-15zM30 79.523l222.824 57.184v238.586L30 432.477Zm332.012 292.41v-96.398h40.8v96.399zm119.988 0h-49.188V260.536c0-8.281-6.718-15-15-15h-70.8c-8.282 0-15 6.719-15 15v111.399h-49.188V140.07H482z"
                                style={{strokeWidth: 1.33333}}
                              ></path>
                              <path
                                d="M204.188 185.344 98.27 162.078a15.016 15.016 0 0 0-12.622 2.961 15.008 15.008 0 0 0-5.597 11.692v158.542a15 15 0 0 0 15 15c1.07 0 2.148-.117 3.218-.351l105.918-23.266a14.996 14.996 0 0 0 11.782-14.648V199.996a15 15 0 0 0-11.781-14.652zm-94.137 10.039 22.957 5.043v111.148l-22.957 5.043zm75.918 104.562-22.961 5.043v-97.972l22.96 5.043z"
                                style={{strokeWidth: 1.33333}}
                              ></path>
                            </svg>
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">Reverb</div>
                            <p className="chakra-text css-itvw0n">
                              Increase the room size of your audio
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to="/reverseAudio" onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <svg
                              height="100%"
                              width="100%"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              fill="#805AD5"
                              stroke="#805AD5"
                            >
                              <path d="M256 0C114.51 0 0 114.497 0 256c0 141.49 114.495 256 256 256 141.491 0 256-114.497 256-256C512 114.509 397.503 0 256 0Zm0 478.609c-122.746 0-222.609-99.862-222.609-222.609 0-122.747 99.861-222.609 222.609-222.609S478.609 133.254 478.609 256c0 122.746-99.863 222.609-222.609 222.609z"></path>
                              <path d="m146.753 270.452 155.778 90.01c11.128 6.426 25.048-1.63 25.048-14.456v-180.02c0-12.922-14.01-20.833-25.048-14.456l-155.778 90.01c-11.116 6.424-11.102 22.496 0 28.912zm147.435-75.537v122.162l-105.711-61.08Z"></path>
                            </svg>
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              Reverse Audio
                            </div>
                            <p className="chakra-text css-itvw0n">
                              Reverse an audio file and make it play backwards
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to="/stereoPanner" onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <svg
                              height="100%"
                              width="100%"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              fill="#D53F8C"
                              stroke="#D53F8C"
                            >
                              <defs>
                                <path
                                  id="stereo-panner_svg__a"
                                  d="M1494.824 12.728h239.002v241.831h-239.002z"
                                ></path>
                              </defs>
                              <g style={{strokeWidth: 1.33526}}>
                                <path
                                  d="M1385.333 144C1236.823 144 1116 264.823 1116 413.333c0 148.51 120.823 269.334 269.333 269.334 148.51 0 269.334-120.823 269.334-269.334 0-148.51-120.823-269.333-269.334-269.333Zm0 498.667c-126.453 0-229.333-102.88-229.333-229.334C1156 286.88 1258.88 184 1385.333 184s229.334 102.88 229.334 229.333-102.88 229.334-229.334 229.334zM1385.333 40c80.49 0 156.162 31.344 213.073 88.255l28.287-28.281C1562.224 35.505 1476.505 0 1385.333 0c-91.172 0-176.89 35.505-241.359 99.974l28.286 28.281C1229.172 71.344 1304.844 40 1385.333 40Zm0 0"
                                  transform="matrix(.74892 0 0 .74892 -781.87 0)"
                                  style={{strokeWidth: 1.78035}}
                                ></path>
                                <path
                                  transform="scale(-.74892 .74892) rotate(45 522 1260.22)"
                                  d="M-956.641 1251.918h186.668v39.866h-186.668z"
                                  style={{stroke: "none"}}
                                ></path>
                                <text
                                  xmlSpace="preserve"
                                  transform="matrix(1 0 0 1 -1056.143 10.305)"
                                  style={{fontStyle: "normal", fontVariant: "normal", fontWeight: 700, fontStretch: "normal", fontSize: 96, lineHeight: 1.25, fontFamily: "Helvetica, sans-serif", whiteSpace: "pre", display: "inline"}}
                                >
                                  <tspan x="1067" y="169.384">
                                    <tspan>L</tspan>
                                  </tspan>
                                </text>
                                <text
                                  xmlSpace="preserve"
                                  transform="matrix(1 0 0 1 -1071.014 79.377)"
                                  style={{fontStyle: "normal", fontVariant: "normal", fontWeight: 700, fontStretch: "normal", fontSize: 96, lineHeight: 1.25, fontFamily: "Helvetica, sans-serif", whiteSpace: "pre", display: "inline"}}
                                >
                                  <tspan x="1494.824" y="100.312">
                                    R
                                  </tspan>
                                </text>
                              </g>
                            </svg>
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              Stereo Panner
                            </div>
                            <p className="chakra-text css-itvw0n">
                              Pan the audio to left or right
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to="/tempoChanger" onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <svg
                              height="100%"
                              width="100%"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              fill="#E53E3E"
                              stroke="#E53E3E"
                            >
                              <path d="M256 0C114.51 0 0 114.497 0 256c0 141.49 114.495 256 256 256 141.491 0 256-114.497 256-256C512 114.509 397.503 0 256 0Zm0 478.609c-122.746 0-222.609-99.862-222.609-222.609 0-122.747 99.861-222.609 222.609-222.609S478.609 133.254 478.609 256c0 122.746-99.863 222.609-222.609 222.609z"></path>
                              <path d="m416.8 241.548-155.778-90.01c-11.128-6.426-25.048 1.63-25.048 14.456v70.537l43.487 20.153-43.487 19.445v69.885c0 12.922 14.01 20.833 25.048 14.456L416.8 270.46c11.116-6.424 11.102-22.496 0-28.912zm-147.435 75.537V194.923l105.71 61.08z"></path>
                              <path d="m305.695 241.548-155.778-90.01c-11.128-6.426-25.048 1.63-25.048 14.456v180.02c0 12.922 14.01 20.833 25.048 14.456l155.778-90.01c11.116-6.424 11.102-22.496 0-28.912zM158.26 317.085V194.923l105.71 61.08z"></path>
                            </svg>
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              Tempo Changer
                            </div>
                            <p className="chakra-text css-itvw0n">
                              Make an audio file play faster or slower
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    {/* <li className="drop-menu-item">
                      <Link to="/trimmerCutter">
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <svg
                              height="100%"
                              width="100%"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              fill="#DD6B20"
                              stroke="#DD6B20"
                            >
                              <path
                                d="M325.824.304c-45.82 9.378-82.445 43.85-94.563 89.084-.015.07-.035.141-.05.207l-39.579 156.591-14.66 3.931c-2.047-7.65-5.11-15.083-9.164-22.238-35.187-62.087-126.668-58.34-158.387 5.502-15.722 31.651-11.675 68.94 11.465 98.435 20.758 26.458 56.887 38.094 92.438 28.564l52.246-14.005-14 52.264c-9.418 35.16 1.789 71.453 28.554 92.468 29.391 23.074 66.66 27.247 98.403 11.468 63.875-31.752 67.5-123.279 5.496-158.439-7.149-4.056-14.582-7.12-22.227-9.167l3.914-14.61 156.727-39.646c.065-.015.137-.035.203-.05 45.176-12.11 79.672-48.716 89.055-94.594a15.004 15.004 0 0 0-4.356-13.88 14.987 14.987 0 0 0-14.078-3.657l-201.855 52.017 51.953-201.801A15.004 15.004 0 0 0 325.824.304zM105.558 331.39c-23.16 6.209-47.703-1.067-61.07-18.104-15.82-20.163-18.887-45.042-8.2-66.553 20.758-41.791 81.77-45.788 105.427-4.052 4.875 8.604 7.644 17.729 8.222 27.126.582 9.46 9.7 16.025 18.852 13.571l14.422-3.868-8.676 33.393zm163.672 38.849c41.637 23.613 37.8 84.653-4.055 105.46-21.504 10.691-46.375 7.624-66.527-8.202-17.035-13.371-24.308-37.922-18.101-61.094l34.937-130.438c2.14-7.979 10.371-12.754 18.371-10.609 6.969 1.868 11.473 8.374 11.094 15.31-10.559 41.006-6.625 25.985-16.403 62.49-2.445 9.128 4.075 18.275 13.567 18.857 9.39.579 18.516 3.345 27.117 8.226zm204.43-165.672c-11.871 22.925-32.852 40.123-58.684 47.078L274.371 287.21c.062-.375.109-.75.164-1.125l8.328-32.35zM254.824 242.31a45.037 45.037 0 0 0-13.203-5.94 44.709 44.709 0 0 0-16.239-1.29L260.27 97.06c6.95-25.84 24.145-46.832 47.063-58.707-1.578 6.143-50.715 197.006-52.508 203.958zm0 0"
                                style={{strokeWidth: 1.33333}}
                              ></path>
                              <path
                                d="M259.195 401.249c-11.719-11.719-30.711-11.719-42.426 0-11.715 11.719-11.715 30.721 0 42.44 11.715 11.718 30.707 11.718 42.426 0 11.715-11.719 11.715-30.721 0-42.44zM110.707 252.712c-11.715-11.719-30.711-11.719-42.426 0-11.715 11.722-11.715 30.72 0 42.44 11.715 11.718 30.71 11.718 42.426 0 11.715-11.72 11.715-30.718 0-42.44zM439.504 93.57l42.425-42.44c5.86-5.858 5.86-15.36 0-21.218-5.855-5.862-15.351-5.862-21.21 0l-42.426 42.44c-5.86 5.857-5.86 15.356 0 21.217 5.855 5.858 15.351 5.862 21.21 0zM333.441 178.449c5.856 5.857 15.355 5.857 21.215 0l42.426-42.44c5.855-5.861 5.855-15.36 0-21.218-5.86-5.861-15.356-5.861-21.215 0l-42.426 42.436c-5.86 5.861-5.86 15.36 0 21.222zm0 0"
                                style={{strokeWidth: 1.33333}}
                              ></path>
                            </svg>
                          </div>
                          {/* <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              Trimmer / Cutter
                            </div>
                            <p className="chakra-text css-itvw0n">
                              Cut out a part of your audio file
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li> */}
                    <li className="drop-menu-item">
                      <Link to="/vocalRemover" onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <svg
                              height="100%"
                              width="100%"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              fill="#D69E2E"
                              stroke="#D69E2E"
                            >
                              <path d="M265 160h-15V65c0-35.841-29.159-65-65-65h-60C89.159 0 60 29.159 60 65v95H45c-24.813 0-45 20.187-45 45v40c0 62.118 45.549 113.791 105 123.393V420H85c-35.841 0-65 29.159-65 65v12c0 8.284 6.716 15 15 15h240c8.284 0 15-6.716 15-15v-12c0-35.841-29.159-65-65-65h-20v-51.607c59.451-9.602 105-61.275 105-123.393v-40c0-24.813-20.187-45-45-45zM125 30h60c19.299 0 35 15.701 35 35v15h-25c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15h25v30h-25c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15h25v30h-25c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15h25v15c0 19.299-15.701 35-35 35h-60c-19.299 0-35-15.701-35-35v-15h25c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15H90v-30h25c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15H90v-30h25c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15H90V65c0-19.299 15.701-35 35-35Zm134.873 452H50.127c1.527-17.899 16.585-32 34.873-32h140c18.288 0 33.346 14.101 34.873 32zM135 420v-50h40v50zm145-175c0 52.383-42.617 95-95 95h-60c-52.383 0-95-42.617-95-95v-40c0-8.271 6.729-15 15-15h15v55c0 35.841 29.159 65 65 65h60c35.841 0 65-29.159 65-65v-55h15c8.271 0 15 6.729 15 15zM407 0c-57.897 0-105 47.103-105 105s47.103 105 105 105 105-47.103 105-105S464.897 0 407 0Zm0 30c15.264 0 29.47 4.594 41.33 12.457L344.458 146.33C336.594 134.47 332 120.264 332 105c0-41.355 33.645-75 75-75Zm0 150c-15.264 0-29.47-4.594-41.33-12.457L469.542 63.67C477.406 75.53 482 89.736 482 105c0 41.355-33.645 75-75 75z"></path>
                            </svg>
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              Vocal Remover
                            </div>
                            <p className="chakra-text css-itvw0n">
                              Remove the vocals from a song leaving only the
                              instrumental
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to="/volumeChanger" onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <svg
                              height="100%"
                              width="100%"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              fill="#38A169"
                              stroke="#38A169"
                            >
                              <path d="m224.511 85.363-113.319 87.168H50.087C22.469 172.531 0 195 0 222.618V289.4c0 27.618 22.469 50.087 50.087 50.087h61.105l113.319 87.168c21.916 16.859 53.75 1.274 53.75-26.466v-288.36c0-27.695-31.809-43.348-53.75-26.466zM100.174 306.096H50.087c-9.206 0-16.696-7.49-16.696-16.696v-66.783c0-9.206 7.49-16.696 16.696-16.696h50.087zm144.696 94.093L133.566 314.57V197.447l111.304-85.619ZM438.649 78.916c-6.52-6.52-17.092-6.52-23.611 0-6.52 6.52-6.52 17.091 0 23.611 40.995 40.995 63.57 95.499 63.57 153.473 0 57.974-22.576 112.479-63.57 153.473-6.52 6.52-6.52 17.091 0 23.611 6.519 6.52 17.091 6.52 23.611 0C485.95 385.783 512 322.894 512 256s-26.05-129.783-73.351-177.084Z"></path>
                              <path d="M391.427 126.139c-6.518-6.519-17.09-6.52-23.611 0-6.52 6.52-6.52 17.091 0 23.611 58.586 58.586 58.586 153.914 0 212.501-6.52 6.52-6.52 17.091 0 23.611 6.519 6.519 17.091 6.52 23.611 0 71.606-71.605 71.606-188.118 0-259.723z"></path>
                              <path d="M344.204 173.361c-6.519-6.52-17.091-6.52-23.611 0s-6.52 17.091 0 23.611c32.548 32.549 32.548 85.507 0 118.056-6.52 6.52-6.52 17.091 0 23.611 6.519 6.52 17.091 6.521 23.611 0 45.567-45.567 45.567-119.71 0-165.278z"></path>
                            </svg>
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              Volume Changer
                            </div>
                            <p className="chakra-text css-itvw0n">
                              Make your audio louder or quieter
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
             
              <li>
                <Link to={undefined} title="Video" className="videoMenu dropdown-toggle" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-expanded="false">
                  Video
                  <svg
                    data-v-7e3b073a=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    role="Image"
                    aria-hidden="true"
                    className="v-icon__svg"
                    style={{fontSize: 14, height: 14, width: 14}}
                  >
                    <path
                      data-v-7e3b073a=""
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    ></path>
                  </svg>
                </Link>
                <div className="navDropDown fileDropDown dropdown-menu" aria-labelledby="dropdownMenuButton4">
                  <ul>
                  <li className="drop-menu-item">
                      <Link to="/video/" target="_blank">
                      <div class="css-hboir5">
                                    <div class="css-1hnxo7a">
                                      <Image src={analyzer} alt="" width="50px"></Image>
                                       </div>
                                    <div class="css-195k0gj">
                                        <div class="chakra-heading css-9f6g39">AI Video Analyzer</div>
                                        
                                    </div>
                                </div>                      
                      </Link>
                    </li>
                    {/* <li className="drop-menu-item">
                      <Link to={undefined}>
                      <div class="css-hboir5">
                                    <div class="css-1hnxo7a">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.99988 16.938V19.059L5.05851 20H2.93851L5.99988 16.938ZM22.0015 14.435V16.557L18.5595 20H17.9935L17.9939 18.443L22.0015 14.435ZM8.74988 14H15.2446C16.1628 14 16.9158 14.7071 16.9888 15.6065L16.9946 15.75V20H15.4946V15.75C15.4946 15.6317 15.4124 15.5325 15.3019 15.5066L15.2446 15.5H8.74988C8.63154 15.5 8.5324 15.5822 8.50648 15.6927L8.49988 15.75V20H6.99988V15.75C6.99988 14.8318 7.70699 14.0788 8.60636 14.0058L8.74988 14ZM8.02118 10.4158C8.08088 10.9945 8.26398 11.5367 8.54372 12.0154L1.99951 18.56V16.438L8.02118 10.4158ZM22.0015 9.932V12.055L17.9939 16.065L17.9946 15.75L17.9896 15.5825C17.9623 15.128 17.8246 14.7033 17.6029 14.3348L22.0015 9.932ZM12.0565 4L1.99951 14.06V11.939L9.93551 4H12.0565ZM22.0015 5.432V7.555L16.3346 13.2245C16.0672 13.1089 15.7779 13.0346 15.4746 13.0095L15.2446 13L14.6456 13.0005C14.9874 12.6989 15.2772 12.3398 15.4999 11.9384L22.0015 5.432ZM11.9999 7.00046C13.6567 7.00046 14.9999 8.34361 14.9999 10.0005C14.9999 11.6573 13.6567 13.0005 11.9999 13.0005C10.343 13.0005 8.99988 11.6573 8.99988 10.0005C8.99988 8.34361 10.343 7.00046 11.9999 7.00046ZM11.9999 8.50046C11.1715 8.50046 10.4999 9.17203 10.4999 10.0005C10.4999 10.8289 11.1715 11.5005 11.9999 11.5005C12.8283 11.5005 13.4999 10.8289 13.4999 10.0005C13.4999 9.17203 12.8283 8.50046 11.9999 8.50046ZM7.55851 4L1.99951 9.56V7.438L5.43751 4H7.55851ZM21.0565 4L15.9091 9.14895C15.7923 8.61022 15.5669 8.11194 15.2571 7.67816L18.9345 4H21.0565ZM16.5585 4L14.0148 6.54427C13.5362 6.26463 12.9942 6.08157 12.4157 6.02181L14.4365 4H16.5585Z" fill="#00B5D8"></path> </g></svg>
                                    </div>
                                    <div class="css-195k0gj">
                                        <div class="chakra-heading css-9f6g39">Video Background Remover</div>
                                        
                                    </div>
                                </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to={undefined}>
                      <div class="css-hboir5">
                                    <div class="css-1hnxo7a">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M19.1414 5.00003C20.9097 6.80378 22 9.27458 22 12C22 14.7578 20.8836 17.2549 19.0782 19.064M5 19.1415C3.14864 17.3265 2 14.7974 2 12C2 9.235 3.12222 6.73208 4.93603 4.92188" stroke="#3182CE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.5" d="M16.2849 8.04397C17.3458 9.05877 18 10.4488 18 11.9822C18 13.5338 17.3302 14.9386 16.2469 15.9564M7.8 16C6.68918 14.9789 6 13.556 6 11.9822C6 10.4266 6.67333 9.01843 7.76162 8" stroke="#3182CE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13.6563 10.4511C14.5521 11.1088 15 11.4376 15 12C15 12.5624 14.5521 12.8912 13.6563 13.5489C13.4091 13.7304 13.1638 13.9014 12.9384 14.0438C12.7407 14.1688 12.5168 14.298 12.2849 14.4249C11.3913 14.914 10.9444 15.1586 10.5437 14.8878C10.1429 14.617 10.1065 14.0502 10.0337 12.9166C10.0131 12.596 10 12.2817 10 12C10 11.7183 10.0131 11.404 10.0337 11.0834C10.1065 9.94977 10.1429 9.38296 10.5437 9.1122C10.9444 8.84144 11.3913 9.08599 12.2849 9.57509C12.5168 9.70198 12.7407 9.83123 12.9384 9.95619C13.1638 10.0986 13.4091 10.2696 13.6563 10.4511Z" stroke="#E53E3E" stroke-width="1.5"></path> </g></svg>
                                    </div>
                                    <div class="css-195k0gj">
                                        <div class="chakra-heading css-9f6g39">Video with Voice</div>
                                        
                                    </div>
                                </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to={undefined}>
                      <div class="css-hboir5">
                                    <div class="css-1hnxo7a">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.25 15.5C8.25 15.9142 8.58579 16.25 9 16.25C9.41421 16.25 9.75 15.9142 9.75 15.5H8.25ZM11.6643 8.75249L12.1624 8.19186L12.1624 8.19186L11.6643 8.75249ZM11.25 10.425C11.25 10.8392 11.5858 11.175 12 11.175C12.4142 11.175 12.75 10.8392 12.75 10.425H11.25ZM11.7475 8.83575L12.3081 8.33756L12.3081 8.33756L11.7475 8.83575ZM6.33575 8.75249L5.83756 8.19186L5.83756 8.19186L6.33575 8.75249ZM5.25 10.425C5.25 10.8392 5.58579 11.175 6 11.175C6.41421 11.175 6.75 10.8392 6.75 10.425H5.25ZM6.25249 8.83575L5.69186 8.33756L5.69186 8.33756L6.25249 8.83575ZM7 14.75C6.58579 14.75 6.25 15.0858 6.25 15.5C6.25 15.9142 6.58579 16.25 7 16.25V14.75ZM11 16.25C11.4142 16.25 11.75 15.9142 11.75 15.5C11.75 15.0858 11.4142 14.75 11 14.75V16.25ZM7.925 9.25H9V7.75H7.925V9.25ZM9 9.25H10.075V7.75H9V9.25ZM9.75 15.5V8.5H8.25V15.5H9.75ZM10.075 9.25C10.5295 9.25 10.8007 9.25137 10.9965 9.27579C11.1739 9.29792 11.1831 9.3283 11.1661 9.31312L12.1624 8.19186C11.8612 7.92419 11.5109 7.82832 11.1822 7.78733C10.8719 7.74863 10.4905 7.75 10.075 7.75V9.25ZM12.75 10.425C12.75 10.0095 12.7514 9.62806 12.7127 9.31782C12.6717 8.98915 12.5758 8.63878 12.3081 8.33756L11.1869 9.33394C11.1717 9.31686 11.2021 9.32608 11.2242 9.50348C11.2486 9.69931 11.25 9.97047 11.25 10.425H12.75ZM11.1661 9.31312C11.1734 9.31964 11.1804 9.32659 11.1869 9.33394L12.3081 8.33756C12.2625 8.28617 12.2138 8.23752 12.1624 8.19186L11.1661 9.31312ZM7.925 7.75C7.50946 7.75 7.12806 7.74863 6.81782 7.78733C6.48914 7.82832 6.13878 7.92419 5.83756 8.19186L6.83394 9.31312C6.81686 9.3283 6.82608 9.29792 7.00348 9.27579C7.19931 9.25137 7.47047 9.25 7.925 9.25V7.75ZM6.75 10.425C6.75 9.97047 6.75137 9.69931 6.77579 9.50348C6.79792 9.32608 6.8283 9.31686 6.81312 9.33394L5.69186 8.33756C5.42419 8.63878 5.32832 8.98915 5.28733 9.31782C5.24863 9.62806 5.25 10.0095 5.25 10.425H6.75ZM5.83756 8.19186C5.78617 8.23752 5.73752 8.28617 5.69186 8.33756L6.81312 9.33394C6.81965 9.3266 6.8266 9.31965 6.83394 9.31312L5.83756 8.19186ZM7 16.25H11V14.75H7V16.25Z" fill="#1C274C"></path> <path d="M22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.7653 19.8915 18.1143 19.99 15 19.9991M12 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H12M15 4.00093C18.1143 4.01004 19.7653 4.10848 20.8284 5.17157C21.4816 5.82475 21.7706 6.69989 21.8985 8" stroke="#38A169" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 2V22" stroke="#38A169" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                    </div>
                                    <div class="css-195k0gj">
                                        <div class="chakra-heading css-9f6g39">Text to Video</div>
                                        
                                    </div>
                                </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to={undefined}>
                      <div class="css-hboir5">
                                    <div class="css-1hnxo7a">
                                        <svg fill="#D69E2E" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8.75 11a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5a.75.75 0 01.75-.75zm7.25.75a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path><path fill-rule="evenodd" d="M9.813 1a.75.75 0 000 1.5H11.5V5H4.25A2.25 2.25 0 002 7.25v5.25H.75a.75.75 0 000 1.5H2v5.75A2.25 2.25 0 004.25 22h15.5A2.25 2.25 0 0022 19.75V14h1.25a.75.75 0 000-1.5H22V7.25A2.25 2.25 0 0019.75 5H13V1.75a.75.75 0 00-.75-.75H9.812zM3.5 7.25a.75.75 0 01.75-.75h15.5a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75V7.25z"></path></g></svg>
                                    </div>
                                    <div class="css-195k0gj">
                                        <div class="chakra-heading css-9f6g39">AI Video Generator</div>
                                        
                                    </div>
                                </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to={undefined}>
                      <div class="css-hboir5">
                                    <div class="css-1hnxo7a">
                                    <img src={ai} alt="" width={50} />
                                      </div>
                                    <div class="css-195k0gj">
                                      
                                        <div class="chakra-heading css-9f6g39">AI Summary</div>
                                        
                                    </div>
                                </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to={undefined}>
                      <div class="css-hboir5">
                                    <div class="css-1hnxo7a">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.57489 2.07403C5.83474 2.19892 6 2.4617 6 2.75001C6 3.57985 6.31211 4.05763 6.70313 4.63948L6.73156 4.68175C7.0641 5.17579 7.5 5.8234 7.5 6.75001C7.5 7.69552 7.02282 8.52959 6.29615 9.02452C6.48733 9.1848 6.65672 9.38248 6.80225 9.61803C7.27801 10.388 7.5 11.5645 7.5 13.2549C7.5 14.967 7.27003 17.023 6.89541 18.6644C6.70914 19.4806 6.47843 20.2335 6.20272 20.7994C6.06598 21.08 5.89948 21.3541 5.69217 21.5685C5.48714 21.7804 5.17035 22.0049 4.75 22.0049C4.32965 22.0049 4.01286 21.7804 3.80783 21.5685C3.60052 21.3541 3.43402 21.08 3.29728 20.7994C3.02157 20.2335 2.79086 19.4806 2.60459 18.6644C2.22997 17.023 2 14.967 2 13.2549C2 11.5645 2.22199 10.388 2.69775 9.61803C2.84328 9.38248 3.01267 9.1848 3.20385 9.02452C2.47718 8.52959 2 7.69552 2 6.75001C2 6.38181 2.00034 5.74889 2.38341 4.93168C2.75829 4.13192 3.47066 3.21301 4.78148 2.16436C5.00661 1.98425 5.31504 1.94914 5.57489 2.07403ZM3.5 6.74875V6.75001C3.5 7.44036 4.05964 8.00001 4.75 8.00001C5.44036 8.00001 6 7.44036 6 6.75001C6 6.31097 5.81518 6.00743 5.45814 5.47615L5.44592 5.45796C5.21705 5.11747 4.94673 4.71532 4.75381 4.19756C4.21053 4.74999 3.9105 5.208 3.74159 5.56833C3.5 6.08374 3.5 6.4505 3.5 6.74875ZM3.97383 10.4065C3.72572 10.808 3.5 11.6315 3.5 13.2549C3.5 14.8565 3.71774 16.8005 4.06698 18.3306C4.24264 19.1003 4.44289 19.726 4.64574 20.1424C4.68308 20.219 4.71806 20.2834 4.75 20.3369C4.78194 20.2834 4.81692 20.219 4.85426 20.1424C5.05711 19.726 5.25736 19.1003 5.43302 18.3306C5.78226 16.8005 6 14.8565 6 13.2549C6 11.6315 5.77428 10.808 5.52617 10.4065C5.41327 10.2237 5.30119 10.1372 5.20105 10.0886C5.09322 10.0363 4.95068 10.0049 4.75 10.0049C4.54932 10.0049 4.40678 10.0363 4.29895 10.0886C4.19881 10.1372 4.08673 10.2237 3.97383 10.4065Z" fill="#E53E3E"></path> <path d="M9.99994 14.917C9.46162 14.8267 8.94761 14.6647 8.46806 14.4412C8.48904 14.0349 8.49994 13.637 8.49994 13.2549C8.49994 13.0791 8.49768 12.9066 8.49298 12.7376C8.94409 13.0407 9.4531 13.2644 9.99994 13.3885V10.5C9.99994 9.67157 10.6715 9 11.4999 9H15.4999C15.4999 6.51472 13.4852 4.5 10.9999 4.5C9.97153 4.5 9.0237 4.84498 8.26586 5.42552C8.06633 4.8731 7.78116 4.44995 7.58275 4.15554L7.54248 4.09572C8.51976 3.40549 9.7125 3 10.9999 3C14.3136 3 16.9999 5.68629 16.9999 9H20.4999C21.3284 9 21.9999 9.67157 21.9999 10.5V19.5C21.9999 20.3284 21.3284 21 20.4999 21H11.4999C10.6715 21 9.99994 20.3284 9.99994 19.5V14.917ZM11.4999 14.9795V19.5H20.4999V10.5H16.8109C16.185 12.932 14.0726 14.7672 11.4999 14.9795ZM15.2439 10.5H11.4999V13.4725C13.239 13.2803 14.6794 12.097 15.2439 10.5Z" fill="#E53E3E"></path> </g></svg>
                                    </div>
                                    <div class="css-195k0gj">
                                        <div class="chakra-heading css-9f6g39">Branding</div>
                                        
                                    </div>
                                </div>
                      </Link>
                    </li> */}
                   
                  </ul>
                </div>
              </li>
              {/* <li>
                <Link to={undefined} title="Meeting" className="meetingMenu dropdown-toggle" id="dropdownMenuButton5" data-bs-toggle="dropdown" aria-expanded="false">
                  Meeting
                  <svg
                    data-v-7e3b073a=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    role="Image"
                    aria-hidden="true"
                    className="v-icon__svg"
                    style={{fontSize: 14, height: 14, width: 14}}
                  >
                    <path
                      data-v-7e3b073a=""
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    ></path>
                  </svg>
                </Link>
                <div className="navDropDown meetingDropDown  dropdown-menu" aria-labelledby="dropdownMenuButton5">
                  <ul>
                    <li className="drop-menu-item">
                      <Link to={undefined}>
                      <div class="css-hboir5">
                                    <div class="css-1hnxo7a">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 9.99739C6.01447 8.29083 6.10921 7.35004 6.72963 6.72963C7.35004 6.10921 8.29083 6.01447 9.99739 6" stroke="#00B5D8" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6 14.0007C6.01447 15.7072 6.10921 16.648 6.72963 17.2684C7.35004 17.8888 8.29083 17.9836 9.99739 17.998" stroke="#00B5D8" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17.9976 9.99739C17.9831 8.29083 17.8883 7.35004 17.2679 6.72963C16.6475 6.10921 15.7067 6.01447 14.0002 6" stroke="#00B5D8" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17.9976 14.0007C17.9831 15.7072 17.8883 16.648 17.2679 17.2684C16.6475 17.8888 15.7067 17.9836 14.0002 17.998" stroke="#00B5D8" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#00B5D8" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                    </div>
                                    <div class="css-195k0gj">
                                        <div class="chakra-heading css-9f6g39">Screen Recording</div>
                                       
                                    </div>
                                </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to={undefined}>
                      <div class="css-hboir5">
                                    <div class="css-1hnxo7a">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 18.4151C20.3136 18.2627 20.5862 18.0706 20.8284 17.8284C22 16.6569 22 14.7712 22 11C22 10.6508 22 10.3178 21.9991 10M4 18.4151C3.68645 18.2627 3.41375 18.0706 3.17157 17.8284C2 16.6569 2 14.7712 2 11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C17.7712 3 19.6569 3 20.8284 4.17157C21.298 4.64118 21.5794 5.2255 21.748 6" stroke="#3182CE" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9.94955 16.0503C10.8806 15.1192 11.3461 14.6537 11.9209 14.6234C11.9735 14.6206 12.0261 14.6206 12.0787 14.6234C12.6535 14.6537 13.119 15.1192 14.0501 16.0503C16.0759 18.0761 17.0888 19.089 16.8053 19.963C16.7809 20.0381 16.7506 20.1112 16.7147 20.1815C16.2973 21 14.8648 21 11.9998 21C9.13482 21 7.70233 21 7.28489 20.1815C7.249 20.1112 7.21873 20.0381 7.19436 19.963C6.91078 19.089 7.92371 18.0761 9.94955 16.0503Z" stroke="#3182CE" stroke-width="1.5"></path> </g></svg>
                                    </div>
                                    <div class="css-195k0gj">
                                        <div class="chakra-heading css-9f6g39">Video Recording</div>
                                        
                                    </div>
                                </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to={undefined}>
                      <div class="css-hboir5">
                                    <div class="css-1hnxo7a">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#38A169"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 8H2V4.5A2.5 2.5 0 0 1 4.5 2H8v1H4.5A1.5 1.5 0 0 0 3 4.5zm1.5 14A1.5 1.5 0 0 1 3 20.5V17H2v3.5A2.5 2.5 0 0 0 4.5 23H8v-1zM22 20.5a1.5 1.5 0 0 1-1.5 1.5H17v1h3.5a2.5 2.5 0 0 0 2.5-2.5V17h-1zM20.5 2H17v1h3.5A1.5 1.5 0 0 1 22 4.5V8h1V4.5A2.5 2.5 0 0 0 20.5 2zM14 7h4v4h1V6h-5zm-7 4V7h4V6H6v5zm11 3v4h-4v1h5v-5zm-7 4H7v-4H6v5h5z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                                    </div>
                                    <div class="css-195k0gj">
                                        <div class="chakra-heading css-9f6g39">Meeting Capture</div>
                                       
                                    </div>
                                </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to={undefined}>
                      <div class="css-hboir5">
                                    <div class="css-1hnxo7a">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 5C12 3.58579 12 2.87868 12.4393 2.43934C12.8787 2 13.5858 2 15 2H16C17.4142 2 18.1213 2 18.5607 2.43934C19 2.87868 19 3.58579 19 5C19 6.41421 19 7.12132 18.5607 7.56066C18.1213 8 17.4142 8 16 8H15C13.5858 8 12.8787 8 12.4393 7.56066C12 7.12132 12 6.41421 12 5Z" stroke="#D69E2E" stroke-width="1.5"></path> <path d="M19 3.7499L20.6154 3.07683C21.2416 2.81591 21.5547 2.68545 21.7774 2.83388C22 2.98231 22 3.32151 22 3.9999V5.9999C22 6.6783 22 7.0175 21.7774 7.16593C21.5547 7.31436 21.2416 7.1839 20.6154 6.92298L19 6.2499V3.7499Z" stroke="#D69E2E" stroke-width="1.5"></path> <path d="M16 22H8" stroke="#D69E2E" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 17L12 22" stroke="#D69E2E" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 13H2" stroke="#D69E2E" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 10V11C22 13.8284 22 15.2426 21.1213 16.1213C20.2426 17 18.8284 17 16 17H8C5.17157 17 3.75736 17 2.87868 16.1213C2 15.2426 2 13.8284 2 11V9.5C2 6.21252 2 4.56878 2.90796 3.46243C3.07418 3.25989 3.25989 3.07418 3.46243 2.90796C4.56878 2 6.21252 2 9.5 2" stroke="#D69E2E" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                    </div>
                                    <div class="css-195k0gj">
                                        <div class="chakra-heading css-9f6g39">Multi-Camera Recording</div>
                                       
                                    </div>
                                </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to={undefined}>
                      <div class="css-hboir5">
                                    <div class="css-1hnxo7a">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 14V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H9C11.8284 22 13.2426 22 14.1213 21.1213C15 20.2426 15 18.8284 15 16V8C15 5.17157 15 3.75736 14.1213 2.87868C13.2426 2 11.8284 2 9 2H8C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V10" stroke="#E53E3E" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17.5 10.0068C19.3597 10.0337 20.414 10.1717 21.1213 10.879C22 11.7577 22 13.1719 22 16.0003C22 18.8287 22 20.243 21.1213 21.1216C20.414 21.829 19.3597 21.9669 17.5 21.9938" stroke="#E53E3E" stroke-width="1.5" stroke-linecap="round"></path> <path d="M11 5H6" stroke="#E53E3E" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19 18V14" stroke="#E53E3E" stroke-width="1.5" stroke-linecap="round"></path> <path d="M10 17.5C10 18.3284 9.32843 19 8.5 19C7.67157 19 7 18.3284 7 17.5C7 16.6716 7.67157 16 8.5 16C9.32843 16 10 16.6716 10 17.5Z" stroke="#E53E3E" stroke-width="1.5"></path> <path d="M20.5 6.98598L22 8C22 4.98532 19.8377 2.48275 17 2" stroke="#E53E3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                    </div>
                                    <div class="css-195k0gj">
                                        <div class="chakra-heading css-9f6g39">Phone as Webcam</div>
                                       
                                    </div>
                                </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to={undefined}>
                      <div class="css-hboir5">
                                    <div class="css-1hnxo7a">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 9.50019L17.6584 9.17101C19.6042 8.19807 20.5772 7.7116 21.2886 8.15127C22 8.59094 22 9.67872 22 11.8543V12.1461C22 14.3217 22 15.4094 21.2886 15.8491C20.5772 16.2888 19.6042 15.8023 17.6584 14.8294L17 14.5002V9.50019Z" stroke="#38A169" stroke-width="1.5"></path> <path d="M13.5607 7.43934C14.1464 8.02513 14.1464 8.97487 13.5607 9.56066C12.9749 10.1464 12.0251 10.1464 11.4393 9.56066C10.8536 8.97487 10.8536 8.02513 11.4393 7.43934C12.0251 6.85355 12.9749 6.85355 13.5607 7.43934Z" stroke="#38A169" stroke-width="1.5"></path> <path d="M2 11.5V12.5C2 15.7875 2 17.4312 2.90796 18.5376C3.07418 18.7401 3.25989 18.9258 3.46243 19.092C4.56878 20 6.21252 20 9.5 20C12.7875 20 14.4312 20 15.5376 19.092C15.7401 18.9258 15.9258 18.7401 16.092 18.5376C17 17.4312 17 15.7875 17 12.5V11.5C17 8.21252 17 6.56878 16.092 5.46243C15.9258 5.25989 15.7401 5.07418 15.5376 4.90796C14.4312 4 12.7875 4 9.5 4C6.21252 4 4.56878 4 3.46243 4.90796C3.25989 5.07418 3.07418 5.25989 2.90796 5.46243C2.48014 5.98373 2.2539 6.62434 2.13427 7.5" stroke="#38A169" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                    </div>
                                    <div class="css-195k0gj">
                                        <div class="chakra-heading css-9f6g39">Teleprompter</div>
                                       
                                    </div>
                                </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to={undefined}>
                      <div class="css-hboir5">
                                    <div class="css-1hnxo7a">
                                    <img src={camera} alt="" width={50}/>
                                      </div>
                                    <div class="css-195k0gj">
                                     
                                        <div class="chakra-heading css-9f6g39">Remove Camera Background</div>
                                       
                                    </div>
                                </div>
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link target="_blank" to="https://translation.aicte-india.org/translation-independent/transliterate/">
                        Virtual Keyboard
                      </Link>
                    </li>
                  </ul>
                </div>
              </li> */}
              <li><Link to={undefined} title="File" className="meetingMenu dropdown-toggle" id="dropdownMenuButton6" data-bs-toggle="dropdown" aria-expanded="false">File
              <svg
                    data-v-7e3b073a=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    role="Image"
                    aria-hidden="true"
                    className="v-icon__svg"
                    style={{fontSize: 14, height: 14, width: 14}}
                  >
                    <path
                      data-v-7e3b073a=""
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    ></path>
                  </svg></Link>
              <div className="navDropDown fileDropDown  dropdown-menu" aria-labelledby="dropdownMenuButton6">
              <ul>    
              <li class="drop-menu-item">
                  <Link to={undefined}  onClick={menuHandle}>
                      <div class="css-hboir5">
                          <div class="css-1hnxo7a">
                          <FilePdf size={32} color="#01d5f5"/>
                              </div>
                          <div class="css-195k0gj">
                              <div class="chakra-heading css-9f6g39">PDF</div>
                             
                          </div>
                      </div> 
                  </Link>
              </li>
              <li className="drop-menu-item">
                      <Link target="_blank" to="https://anuvadini.aicte-india.org/mkb100/" onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <Image src="https://anuvadini.aicte-india.org/images/mkb.png" width={50}/>
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                              Mann ki baat
                            </div>
                            <p className="chakra-text css-itvw0n">
                              (100th episode celebration) <br/>Citizen feedback Form
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                                       
                 </ul>
                </div>
                </li>
                
                <li><Link to={undefined} title="File" className="meetingMenu dropdown-toggle" id="dropdownMenuButton7" data-bs-toggle="dropdown" aria-expanded="false">Education
              <svg
                    data-v-7e3b073a=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    role="Image"
                    aria-hidden="true"
                    className="v-icon__svg"
                    style={{fontSize: 14, height: 14, width: 14}}
                  >
                    <path
                      data-v-7e3b073a=""
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    ></path>
                  </svg></Link>
              <div className="navDropDown fileDropDown  dropdown-menu" aria-labelledby="dropdownMenuButton7">
              <ul>               
              <li className="drop-menu-item">
                      <Link target="_blank" to="https://anuvadini.aicte-india.org/core-engg" onClick={menuHandle}>
                        <div className="css-hboir5">
                          <div className="css-1hnxo7a">
                            <Image src={coreEngg} width={50}/>
                          </div>
                          <div className="css-195k0gj">
                            <div className="chakra-heading css-9f6g39">
                            Core Engineering Generative AI
                            </div>
                            <p className="chakra-text css-itvw0n">                              
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li class="drop-menu-item">
                  <Link to={undefined} onClick={menuHandle}>
                      <div class="css-hboir5">
                          <div class="css-1hnxo7a">
                              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 13H13M9 17H15M13.0714 2.52927V6.83334C13.0714 7.93791 13.9668 8.83334 15.0714 8.83334H19.3494M13.0714 2.52927C12.7307 2.5095 12.3738 2.5 12 2.5C6.26471 2.5 4.5 4.73529 4.5 12C4.5 19.2647 6.26471 21.5 12 21.5C17.7353 21.5 19.5 19.2647 19.5 12C19.5 10.8146 19.453 9.76307 19.3494 8.83334M13.0714 2.52927L19.3494 8.83334" stroke="#01d5f5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                          </div>
                          <div class="css-195k0gj">
                              <div class="chakra-heading css-9f6g39">Killer - CV</div>
                             
                          </div>
                      </div> 
                  </Link>
              </li>
          </ul>
                </div>
                </li>
                <li>
                <Link to={undefined} title="Image" className="imageMenu dropdown-toggle" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                  Image
                  <svg
                    data-v-7e3b073a=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    role="Image"
                    aria-hidden="true"
                    className="v-icon__svg"
                    style={{fontSize: 14, height: 14, width: 14}}
                  >
                    <path
                      data-v-7e3b073a=""
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    ></path>
                  </svg>
                </Link>
                <div className="navDropDown imageDrop dropdown-menu" aria-labelledby="dropdownMenuButton3">
                  <ul>
                  <li className="drop-menu-item">                   
                      <a target="_blank" href="https://anuvadini.aicte-india.org/image-23/" onClick={menuHandle}>
                      <img src={image23} alt="" style={{marginRight:10}}  width={50}/> Image 23 </a>
                    </li>
                    <li className="drop-menu-item">
                      <Link to="/PassportPhotoMaker" onClick={menuHandle}>
                      <svg fill="#E53E3E" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M159.999,83.99414h-112a12.01343,12.01343,0,0,0-12,12v112a12.01343,12.01343,0,0,0,12,12h112a12.01343,12.01343,0,0,0,12-12v-112A12.01343,12.01343,0,0,0,159.999,83.99414Zm4,124a4.00426,4.00426,0,0,1-4,4h-112a4.00427,4.00427,0,0,1-4-4v-112a4.00428,4.00428,0,0,1,4-4h112a4.00427,4.00427,0,0,1,4,4ZM140,40a4.0002,4.0002,0,0,1,4-4h16a4,4,0,0,1,0,8H144A4.0002,4.0002,0,0,1,140,40Zm80,8v8a4,4,0,0,1-8,0V48a4.00427,4.00427,0,0,0-4-4h-8a4,4,0,0,1,0-8h8A12.01343,12.01343,0,0,1,220,48Zm0,48v16a4,4,0,0,1-8,0V96a4,4,0,0,1,8,0Zm0,56v8a12.01343,12.01343,0,0,1-12,12h-8a4,4,0,0,1,0-8h8a4.00427,4.00427,0,0,0,4-4v-8a4,4,0,0,1,8,0ZM84,56V48A12.01343,12.01343,0,0,1,96,36h8a4,4,0,0,1,0,8H96a4.00427,4.00427,0,0,0-4,4v8a4,4,0,0,1-8,0Z"></path> </g></svg>
                        Passport Photo Maker
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to="/ImageBackgroundRemover" onClick={menuHandle}>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14" stroke="#38A169" stroke-width="1.5" stroke-linecap="round"></path> <path d="M18 6.00002V6.75002H18.75V6.00002H18ZM15.7172 2.32614L15.6111 1.58368L15.7172 2.32614ZM4.91959 3.86865L4.81353 3.12619H4.81353L4.91959 3.86865ZM5.07107 6.75002H18V5.25002H5.07107V6.75002ZM18.75 6.00002V4.30604H17.25V6.00002H18.75ZM15.6111 1.58368L4.81353 3.12619L5.02566 4.61111L15.8232 3.0686L15.6111 1.58368ZM4.81353 3.12619C3.91638 3.25435 3.25 4.0227 3.25 4.92895H4.75C4.75 4.76917 4.86749 4.63371 5.02566 4.61111L4.81353 3.12619ZM18.75 4.30604C18.75 2.63253 17.2678 1.34701 15.6111 1.58368L15.8232 3.0686C16.5763 2.96103 17.25 3.54535 17.25 4.30604H18.75ZM5.07107 5.25002C4.89375 5.25002 4.75 5.10627 4.75 4.92895H3.25C3.25 5.9347 4.06532 6.75002 5.07107 6.75002V5.25002Z" fill="#38A169"></path> <path d="M4 6V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V14M4 6V5M4 6H17C18.6569 6 20 7.34315 20 9V10" stroke="#38A169" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                        Image Background Remover
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                      <Link to="/RemoveUnwantedObjects" onClick={menuHandle}>
                      <svg fill="#D69E2E" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 1920h1242.353V677.647H0V1920ZM1129.412 790.588v1016.47H112.942V790.589h1016.47Zm451.764-451.764v1242.352h-225.882v-112.94h112.941V451.764H451.765v112.94H338.824V338.825h1242.352ZM1920.034-.011v1242.353h-225.882V1129.4h112.94V112.93H790.623v112.94H677.681V-.01h1242.353ZM338.824 1355.294h564.705v-112.941H338.824v112.941Z" fill-rule="evenodd"></path> </g></svg>
                        Remove Unwanted Objects
                      </Link>
                    </li>
                    <li className="drop-menu-item">
                   
                      <Link to="/FaceCutout" onClick={menuHandle}>
                      <img src={FaceCutout} alt="" style={{marginRight:10}}  width={50}/> Face Cutout</Link>
                    </li>
                    
                  </ul>
                </div>
              </li>
              <li><Link to='/aboutUs' title="About Us" onClick={menuHandle}>About Us</Link></li>
            </ul>  
            <div className="login-signup-sec">
          
            <button title="Try for Free" className="button green btn-login-signup" onClick={loginPage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="94 170 136 128 94 86"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <line
                  x1="24"
                  y1="128"
                  x2="136"
                  y2="128"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <path
                  d="M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
              </svg>
              Login
            </button>
            </div>      
            </div>
          
        </div>
        
        <Link className="menu-mobile-button" to={undefined} onClick={menuHandle}>
          <Image src={MenuOpen} alt="Menu" />
        </Link>
      </header>    
  
    </div>
   
  );
}

export default Header;
