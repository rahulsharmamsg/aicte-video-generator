import React, { useRef, useEffect, useState } from "react";
import aii from "../assets/images/Anuvadini.png";
import { useEditor } from "@layerhub-io/react";
const ImageCanvasComponent = ({ base64img }) => {
  const [dataUrl, setdataUrl] = useState([]);
  console.log(dataUrl,'jjjjjjjjj')
  const canvasRef = useRef(null);
  // const handleDownloadPNG = () => {
  //   const canvas = canvasRef.current;
  //   const dataUrl = canvas.toDataURL("image/png");
  //   const link = document.createElement("a");
  //   link.href = dataUrl;
  //   link.download = "ai-image-generated-by-anuvadini.png";
  //   link.click();
  // };
  // const handleDownloadJPEG = () => {
  //   const canvas = canvasRef.current;
  //   const dataUrl = canvas.toDataURL("image/jpeg");
  //   const link = document.createElement("a");
  //   link.href = dataUrl;
  //   link.download = "ai-image-generated-by-anuvadini.jpeg";
  //   link.click();
  // };
  
  useEffect(() => {
    const base64Image = new Image();
    base64Image.src = "data:image/png;base64," + base64img; // replace with your base64 image
    canvasRef.current.src = base64Image.src;
    // const canvas = canvasRef.current;
    // const ctx = canvas.getContext("2d");

    // // Load the base64 image
    // const base64Image = new Image();
    // base64Image.src = "data:image/png;base64," + base64img; // replace with your base64 image

    // // Wait for the base64 image to load
    // base64Image.onload = () => {
    //   // Draw the base64 image on the canvas
    //   const base64Width = base64Image.width;
    //   const base64Height = base64Image.height;

    //   // Draw the base64 image on the canvas
    //   ctx.drawImage(base64Image, 0, 0, base64Width, base64Height);

    //   // Load the PNG image
    //   const pngImage = new Image();
    //   pngImage.src = aii; // replace with your PNG image path
    //   const pngWidth = pngImage.width;
    //   const pngHeight = pngImage.height;
    //   // Wait for the PNG image to load
    //   pngImage.onload = () => {
    //     // Draw the PNG image on top of the base64 image
    //     ctx.drawImage(pngImage, 50, 800, 220, 100); // adjust the coordinates and size as needed

    //     // ctx.fillStyle = 'white';
    //     // ctx.font = '24px Arial';
    //     // ctx.fillText('Image Generated in Anuvadini AI', 45 + pngWidth + 10, 855 + pngHeight / 2);
    //   };
    // };
    // const base64Image2 = canvas.toDataURL();
    // const shareUrl = `data:image/png;base64,${base64Image2}`;
    // setdataUrl(shareUrl);
  }, []);

  // const shareCanvas = () => {
  //   const canvas = canvasRef.current;
  //   if (canvas) {
  //     const base64Image = canvas.toDataURL(); // Convert canvas content to base64
  //     // Example: Log base64 image data
  //     console.log("Base64 Image:", base64Image);
  //     const shareUrl = `data:image/png;base64,${base64Image}`;
  //     // Create a WhatsApp share link
  //     const whatsappShareLink = `https://wa.me/?text=${encodeURIComponent(
  //       "Check out this image: " + shareUrl
  //     )}`;
  //     // Open WhatsApp link in a new window
  //     window.open(whatsappShareLink, "_blank");
  //   }
  // };
  const editor = useEditor();
  const addObject = React.useCallback(
    (url) => {
      if (editor) {
        console.log(editor, "editor");
        const options = {
          type: "StaticImage",
          src: url,
        };

       
        editor.objects.add(options);
       
      }
    },
    [editor]
  );

  return (
    <>
      <div className="downloaddiv">
        {" "}
        {/* <button
          className="button orange mr-rg-2"
          onClick={() => handleDownloadPNG()}
        >
          Download PNG
        </button>{" "}
        <button
          className="button orange mr-rg-2"
          onClick={() => handleDownloadJPEG()}
        >
          Download Jpeg
        </button> */}
        
      </div>
      <img ref={canvasRef} width={200} height={200} onClick={(e)=>addObject(e.target.src)} />
      {/* <canvas
        ref={canvasRef}
        width={1100}
        height={1000}
        style={{ width: "100%", marginTop: "15px" }}
      /> */}
    </>
  );
};

export default ImageCanvasComponent;