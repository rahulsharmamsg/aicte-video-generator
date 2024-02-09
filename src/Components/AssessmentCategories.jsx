import React, { useState } from "react";
import createAssmntBnrImg from '../assets/images/create-assessment.svg';

const AssessmentCategories = () => {
   const [hideDiv, setHideDiv] = useState(false);
   const [addbutton , setAddbutton] = useState(false);
   const handlehideDiv = () =>{
      setHideDiv(!hideDiv);
   }
  const handleAdd = () =>{
   setAddbutton(!addbutton);
  } 
   return (
      <>
         
         {hideDiv ? 
         <section class="homeServiceSec">
            <div class="container">
               <div class="row">
                  <div class="col-12 hmSrvcSecR">
                     <div class="hmSrvcSecLIn"><h2 class="titleTxt text-center">Make your Assessment form</h2><p class="sbTitleTxt text-center">All the content should be correct.</p></div>
                        <br/>
                        
                        <div className="AssmntBxBlck">
                           <div className="QsnTxtBx"><textarea name="" id="" >What is the name of current PM of Bharat?</textarea></div>
                           <div className="QsnTxtAreaBx"><textarea name="" id="" ></textarea></div>
                           <div className="fchrBxRwSec">
                              <a href="#!" onClick={handleAdd} class="button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg> Add</a>
                           </div>
                           {addbutton ? 
                           <div className="AddfchrBxRwPpup">
                              <div className="AddfchrBxRwPpup_head">Drag & Drop the elements according to your requirements.</div>
                              <div className="AddfchrBxRwPpup_CntntBx">
                                 <div className="AddfchrBxRwPpup_CntntBx_InptTxt">
                                    <input type="text" readOnly />
                                 </div>
                                 <div className="AddfchrBxRwPpup_CntntBx_InptChkbx">
                                    <input type="checkbox" readOnly />
                                 </div>
                                 <div className="AddfchrBxRwPpup_CntntBx_InptRdio">
                                    <input type="radio" readOnly />
                                 </div>
                                 <div className="AddfchrBxRwPpup_CntntBx_InptTxtara">
                                    <textarea readOnly></textarea>
                                 </div>
                              </div>
                           </div>
                           : null}
                        </div>
                        
                        <div className="AssmntBxBlck">
                           <div className="QsnTxtBx"><textarea name="" id="" >How much you?</textarea></div>
                           <div className="QsnTxtAreaBx">
                              <ul>
                                 <li><input type="radio" name="rd1" /> 5</li>
                                 <li><input type="radio" name="rd1" /> 7</li>
                                 <li><input type="radio" name="rd1" /> 12</li>
                                 <li><input type="radio" name="rd1" /> other</li>
                              </ul>
                           </div>
                           <div className="fchrBxRwSec">
                              <a href="#!" class="button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg> Add</a>
                           </div>
                        </div>

                        <div className="AssmntBxBlck">
                           <div className="QsnTxtBx"><textarea name="" id="" >What is the purpose of Mobile?</textarea></div>
                           <div className="QsnTxtAreaBx">
                              <ul>
                                 <li><input type="checkbox" /> 5</li>
                                 <li><input type="checkbox" /> 7</li>
                                 <li><input type="checkbox" /> 12</li>
                                 <li><input type="checkbox" /> Other</li>
                              </ul>
                           </div>
                           <div className="fchrBxRwSec">
                              <a href="#!" class="button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg> Add</a>
                           </div>
                        </div>

                        <div className="AssmntBxBlck">
                           <div className="QsnTxtBx"><textarea name="" id="" >Why did you voted?</textarea></div>
                           <div className="QsnTxtAreaBx"><textarea name="" id="" ></textarea></div>
                           <div className="fchrBxRwSec">
                              <a href="#!" class="button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg> Add</a>
                           </div>
                        </div>

                        <div className="fchrBxBtmSec">
                           <a href="#!" class="button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg> Add row</a>
                        </div>

                        <br></br>
                        <div className="text-center">
                           <button title="Try for Free" class="button orange btn-login-signup">Save</button> <button title="Try for Free" class="button green btn-login-signup">Submit</button>
                        </div>

                        
                        
                        
                        
                  </div>
               </div>
            </div>
         </section>
         : <>
         <section class="CrtAssmntBnrSec">
            <div class="container">
               <div class="row">
                  <div class="col-6 hmSrvcSecR">
                     <div class="hmSrvcSecLIn"><h2 class="titleTxt"><span>Assessment</span> Topics with 50+ Templates with All Bharatiya Languages!</h2><p class="sbTitleTxt">Choose your category, language & make your own assessment content.</p><a class="videoBtn" onClick={handlehideDiv} href="#crtAssmntSec"><span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="lnkIcn"><rect width="256" height="256" fill="none"></rect><polyline points="172 104 113.3 160 84 132" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect></svg> Create Assessment</span></a></div>
                  </div>
                  <div class="col-6 text-right">
                     <img src={createAssmntBnrImg} alt="" className="createAssmntBnrImg" />
                  </div>
               </div>
            </div>
         </section>
         </>}
      </>)
}
export default AssessmentCategories;