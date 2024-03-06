import React, { useState } from 'react';
import axios from 'axios';

const VideoGeneration = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

//   const formdata = new FormData();
//   formdata.append("prompt", text);
//   formdata.append("image", image);
  
//   const requestOptions = {
//     method: "POST",
//     body: formdata,
//     redirect: "follow"
//   };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('prompt', text);
    formData.append('image', image);
    try {
      const response = await axios.post('http://10.150.0.13:5000/generate-video', formData,    
    {responseType : 'blob'},
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      } ,        
      );
      // Handle success response
    //   const videoBlob = new Blob([response.data], { type: 'video/mp4' });
    //   const videoUrl = URL.createObjectURL(videoBlob);
      const url = URL.createObjectURL(response?.data)

      setVideoUrl(url);

      console.log('Response:', response , "videoUrl", videoUrl);
    //   setVideoUrl(response?.data)
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className='form-control'
            type="text"
            id="text"
            value={text}
            onChange={handleTextChange}
            required
            placeholder="Enter Your Prompt"
          />
        </div>
        <div className='mt-2'>
          <label htmlFor="image">Upload Image</label>
          <input
            // className='form-control'
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button class="button orange mt-3 w-100" onClick={handleSubmit}>Generate Video</button>
      </form>
      {videoUrl && (
      <video controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
              )}
    </div>
    
  );
};

export default VideoGeneration;
