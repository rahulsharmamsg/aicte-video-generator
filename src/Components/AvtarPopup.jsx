import { Plus } from 'phosphor-react';
import React, { useState } from 'react';
import axios from 'axios';
import { useEditor } from "@layerhub-io/react";
import { CirclesWithBar } from "react-loader-spinner";
import TalkingAvatar from './TalkingAvatar';

function AvtarPopup({hidePopup,setShowContent}) {
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);
    const [videoUrl, setVideoUrl] = useState(null);
    const editor = useEditor();
    // const { scenes, setScenes, currentScene } = useDesignEditorContext()
    const [loading, setLoading] = useState(false);
    const [vkeyboard, setvkeyboard] = useState(false);
    const [sourceLanguage, setSourceLanguage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    // const [Text, setText] = useState("");
    const [hideContent, setHideContent] = useState(true);
    const [imageSrc, setImageSrc] = useState([]);

    const toggleModal = () => {
        setShowModal(!showModal);
        // hidePopup()
    };
    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setHideContent(false)
        if (text === "") {
            alert("Please enter a prompt");
            return;
        }
        const formData = new FormData();
        formData.append("prompt", text);
        setLoading(true);
        try {
            const res = await axios.post("https://bharattube.aicte-india.org/api/generate-image/generate-image", formData);
            setImageSrc(res?.data?.base64);
            // setLoading(false);
            // const videourl = URL.createObjectURL(imageSrc)
            if (res.status === 200){               
                const formData = new FormData();
                formData.append('prompt', text);
                const byteCharacters = atob(res.data.base64);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                const blob = new Blob([byteArray], { type: 'image/png' });
                // downloadBlobAsImage(blob)
                formData.append('image', blob, 'image.jpg');

                // console.log("formData===>",   formData.append('image', blob, 'image.jpg'));
                try {
                    const response = await axios.post('https://bharatlive.aicte-india.org/api/generate-video', formData,
                        { responseType: 'blob' },
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            },
                        },
                    );
                    
                    // Handle success response
                    //   const videoBlob = new Blob([response.data], { type: 'video/mp4' });
                    //   const videoUrl = URL.createObjectURL(videoBlob);
                    const url = URL.createObjectURL(response?.data)
                       if  (response.status == 200){
                       setLoading(false);
                       setVideoUrl(url);

                       }
                    // if (editor) {
                    //     const video = await loadVideoResource(url)
                    //     const frame = await captureFrame(video)
                    //     const duration = await captureDuration(video)
                    //     editor.objects.add({ duration, preview: frame })
                    //     const updatedScenes = scenes.map((scn) => {
                    //         if (scn.id === currentScene?.id) {
                    //             return {
                    //                 ...currentScene,
                    //                 duration: duration * 1000 > currentScene.duration ? duration * 1000 : currentScene.duration,
                    //             }
                    //         }
                    //         return scn
                    //     })
                    //     setScenes(updatedScenes)
                    // }
        
                   
                    //   setVideoUrl(response?.data)
                } catch (error) {
                    // Handle error
                    console.error('Error:', error);
                }
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };
  return (
    <>
    <div className='popupOutline2 generateScrptDiv2'>
       <div className='pop-up'>
            <span className='close-pupup' onClick={hidePopup}>X</span>
            {hideContent && (
                <>
            {!showModal &&<>
            <div className='popupContentDiv'>
                <h2>Talking Avtar</h2>
                   <TalkingAvatar/>
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
                  <p> Title </p>
                </div>
                <div className='col-9 newpopCntIn titleDivnew'>
                <h2>Modi Ji's Inspiring Speech for Kashi in Tamil</h2>
                </div>
            </div>
            </div>
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
                <div className='col-12 newPopCntOne'>
            <div className='row'>
                <div className='col-3 newpopCntIn'>
                <p>Voice Toning</p>
                </div>
                <div className='col-9 newpopCntIn'>
                    <ul>
                        <li>Angry</li>
                        <li>Happy</li>
                        <li>Sad</li>
                        <li>Motivational</li>
                        <li>Fear</li>
                        <li>Suprise</li>
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
       </> )  }
        {}
        {loading && (
                  <div className="loading-overlay">
                    <div className="load">
                      <CirclesWithBar
                        height="100"
                        width="100"
                        color="#4fa94d"
                        outerCircleColor="#4fa94d"
                        innerCircleColor="#4fa94d"
                        barColor="#4fa94d"
                        ariaLabel="circles-with-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                      />
                      <h4>Loading...</h4>
                    </div>
                  </div>
                )}
        {videoUrl && (
                <video controls 
                >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
 
    </div>
  

  
        
      
    </>
  )
}

export default AvtarPopup