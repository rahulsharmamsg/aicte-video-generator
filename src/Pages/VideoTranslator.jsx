import React from 'react'

function VideoTranslator() {
  return (
    <section class="CrtAssmntBnrSec">
      <div class="container page-container VdTrnsltnPg">
        <div class="row">
          <h2 class="text-center">Video Translator</h2>
          <p class="text-center">Translate speech in videos with one touch, using natural voice clones to restore your video effects.</p>
          <div class="col-lg-12 mt-4">
            <div class="row">
              <div class="col-lg-12">
                <div className='vdUpldBx'>
                  <div class="vdUpldBxHdTxt">Drag and drop a video file that you want to translate</div>
                  <p class="chakra-text">or</p>
                  <button class="button orange opnoriginalResultDiv">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" style={{"rotate":"-90deg", "position":"relative", "top":"0px"}} fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="94 170 136 128 94 86" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><line x1="24" y1="128" x2="136" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg> Click to upload video</button>
                    <p class="txt-eg">File Type: mp4, mov | Video Duration: 10s to 5min<br/>File size upto 500mb </p>
                </div>
              </div>
              <div class="col-lg-12">
                <div className='vdUpldTrnslnBx row'>
                  <div class="col-lg-4">
                    <label>Original Language</label>
                    <select name="" id="" className="form-input form-control">
                      <option value="">English</option>
                      <option value="">Hindi</option>
                    </select>
                  </div>
                  <div class="col-lg-4">
                    <label>Translated Language</label>
                    <select name="" id="" className="form-input form-control">
                      <option value="">English</option>
                      <option value="">Hindi</option>
                    </select>
                  </div>
                  <div class="col-lg-4">
                    <label>&nbsp;</label>
                    <button className="button green form-control">Translate Video</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoTranslator