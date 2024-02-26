import React from 'react'
function Popup2({hidePopup}) {
  return (
    <div className='popupOutline'>
        <div className='pop-up'>
            <span className='close-pupup' onClick={hidePopup}>X</span>
            <div className='popupContentDiv'>
                <h2>Image Generation</h2>
                    <div class="row mt-2"><div class="col-lg-12 p-0"><div class="vdUpldBx" style={{padding:"20px"}}><div class="vdUpldBxHdTxt">Drag and drop a video file that you want to translate</div><p class="chakra-text">or</p><button class="button orange opnoriginalResultDiv">Click to upload video</button><p class="txt-eg">File Type: mp4, mov | Video Duration: 10s to 5min | File size upto 500mb </p></div></div><div class="col-lg-12 p-0"><div class="vdUpldTrnslnBx row"><div class="col-lg-4 p-0"><label>Original Language</label><select name="" id="" class="form-input form-control"><option value="">English</option><option value="">Hindi</option></select></div><div class="col-lg-4"><label>Translated Language</label><select name="" id="" class="form-input form-control"><option value="">Hindi</option><option value="">English</option></select></div><div class="col-lg-4 p-0"><label>&nbsp;</label><button class="button green form-control" style={{marginRight:"0"}}>Translate Video</button></div></div></div></div>
            </div>
        </div>
    </div>
  )
}

export default Popup2