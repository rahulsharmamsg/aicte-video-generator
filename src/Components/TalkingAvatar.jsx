import React, { useState } from 'react';

function TalkingAvatar() {
  const [audioFile, setAudioFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const handleAudioChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("audio", audioFile);
    formData.append("image", imageFile);
    try {
      const response = await fetch("https://bharataudio.aicte-india.org/face-ai/face-ai/run-inference", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        // setIsHide(8)
        throw new Error("Error processing files");
      
      }
      const videoBlob = await response.blob();
      setVideoFile(URL.createObjectURL(videoBlob));
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <h4>Upload Audio and Image</h4>
      <div lassName='mt-4'>
        <input type="file" accept="audio/wav"      className='form-control'
                            style={{ height: "auto", fontSize: 16, padding: "7px 10px" }} onChange={handleAudioChange} />
      </div>
      <div className='mt-2'>
        <input type="file" accept="image/*"      className='form-control'
                            style={{ height: "auto", fontSize: 16, padding: "7px 10px" }} onChange={handleImageChange} />
      </div>
      <div>
        <button class="button orange mt-3 w-100" onClick={handleSubmit}>Submit</button>
      </div>
      {videoFile && (
        <div>
          <h2>Result Video</h2>
          <video controls src={videoFile} />
        </div>
      )}
    </div>
  );
}

export default TalkingAvatar;
