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
         <section class="homeServiceSec" style={{paddingTop:0}}>
            <div class="container-fluid">
               <div class="row">
                  <div class="col-9 hmSrvcSecR">
                     <div class="hmSrvcSecLIn"><h2 class="titleTxt text-center">Make your Assessment form</h2><p class="sbTitleTxt text-center">All the content should be correct.</p></div>
                        <br/>
                        
                        <div className="AssmntBxBlck">
                           <div className="QsnTxtBx"><textarea name="" id="" >Write about the Bharat?</textarea></div>
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
                           <div className="QsnTxtBx"><textarea name="" id="" >Who is the current Prime Minister of Bharat?</textarea></div>
                           <div className="QsnTxtAreaBx">
                              <ul>
                                 <li><input type="radio" name="rd1" /> Shri Narendra Modi</li>
                                 <li><input type="radio" name="rd1" /> Dr. Manmohan Singh</li>
                                 <li><input type="radio" name="rd1" /> Smt. Pratibha Singh Patil</li>
                                 <li><input type="radio" name="rd1" /> other</li>
                              </ul>
                           </div>
                           <div className="fchrBxRwSec">
                              <a href="#!" class="button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg> Add</a>
                           </div>
                        </div>

                        <div className="AssmntBxBlck">
                           <div className="row">
                              <div className="col-lg-5">
                                 <img src="https://www.theaccessgroup.com/media/jufiqlsc/lms-problems-image.png?anchor=center&mode=crop&width=800&rnd=133380423075170000" className="w-100" alt="" />
                              </div>
                              <div className="col-lg-7">
                                 <div className="QsnTxtBx"><textarea name="" id="" >What is the purpose of Mobile?</textarea></div>
                                 <div className="QsnTxtAreaBx">
                                    <ul>
                                       <li><input type="checkbox" /> Talking with another</li>
                                       <li><input type="checkbox" /> Chating with other</li>
                                       <li><input type="checkbox" /> Working remotely</li>
                                       <li><input type="checkbox" /> Other</li>
                                    </ul>
                                 </div>
                              </div>
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
                           <button title="Try for Free" class="button orange btn-login-signup">Save</button> <button title="Try for Free" class="button orange btn-login-signup">Preview</button> <button title="Try for Free" class="button green btn-login-signup">Submit</button>
                        </div>

                        
                        
                        
                        
                  </div>

                  <div class="col-3 rightAssmntSc">
                     <aside class=" w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full"><div><p class="text-sm text-foreground/70"></p><div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-2"></div><div class="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center"><button class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 flex flex-col gap-2 h-[120px] w-[120px] cursor-grab" role="button" tabindex="0" aria-disabled="false" aria-roledescription="draggable" aria-describedby="DndDescribedBy-0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h8"></path><path d="M4 18V6"></path><path d="M12 18V6"></path><path d="m17 12 3-2v8"></path></svg><p class="text-xs">Title field</p></button><button class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 flex flex-col gap-2 h-[120px] w-[120px] cursor-grab" role="button" tabindex="0" aria-disabled="false" aria-roledescription="draggable" aria-describedby="DndDescribedBy-0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h8"></path><path d="M4 18V6"></path><path d="M12 18V6"></path><path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"></path></svg><p class="text-xs">SubTitle field</p></button><button class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 flex flex-col gap-2 h-[120px] w-[120px] cursor-grab" role="button" tabindex="0" aria-disabled="false" aria-roledescription="draggable" aria-describedby="DndDescribedBy-0"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"></path></svg><p class="text-xs">Paragraph field</p></button><button class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 flex flex-col gap-2 h-[120px] w-[120px] cursor-grab" role="button" tabindex="0" aria-disabled="false" aria-roledescription="draggable" aria-describedby="DndDescribedBy-0"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 11H4V13H2V11ZM6 11H18V13H6V11ZM20 11H22V13H20V11Z"></path></svg><p class="text-xs">Separator field</p></button><button class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 flex flex-col gap-2 h-[120px] w-[120px] cursor-grab" role="button" tabindex="0" aria-disabled="false" aria-roledescription="draggable" aria-describedby="DndDescribedBy-0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="21" y1="12" y2="12"></line><polyline points="8 8 12 4 16 8"></polyline><polyline points="16 16 12 20 8 16"></polyline></svg><p class="text-xs">Spacer field</p></button><button class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 flex flex-col gap-2 h-[120px] w-[120px] cursor-grab" role="button" tabindex="0" aria-disabled="false" aria-roledescription="draggable" aria-describedby="DndDescribedBy-0"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"></path></svg><p class="text-xs">Text Field</p></button><button class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 flex flex-col gap-2 h-[120px] w-[120px] cursor-grab" role="button" tabindex="0" aria-disabled="false" aria-roledescription="draggable" aria-describedby="DndDescribedBy-0"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.873 11.297V4.142H1.699L0 5.379v1.137l1.64-1.18h.06v5.961h1.174Zm3.213-5.09v-.063c0-.618.44-1.169 1.196-1.169.676 0 1.174.44 1.174 1.106 0 .624-.42 1.101-.807 1.526L4.99 10.553v.744h4.78v-.99H6.643v-.069L8.41 8.252c.65-.724 1.237-1.332 1.237-2.27C9.646 4.849 8.723 4 7.308 4c-1.573 0-2.36 1.064-2.36 2.15v.057h1.138Zm6.559 1.883h.786c.823 0 1.374.481 1.379 1.179.01.707-.55 1.216-1.421 1.21-.77-.005-1.326-.419-1.379-.953h-1.095c.042 1.053.938 1.918 2.464 1.918 1.478 0 2.642-.839 2.62-2.144-.02-1.143-.922-1.651-1.551-1.714v-.063c.535-.09 1.347-.66 1.326-1.678-.026-1.053-.933-1.855-2.359-1.845-1.5.005-2.317.88-2.348 1.898h1.116c.032-.498.498-.944 1.206-.944.703 0 1.206.435 1.206 1.07.005.64-.504 1.106-1.2 1.106h-.75v.96Z"></path></svg><p class="text-xs">Number Field</p></button><button class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 flex flex-col gap-2 h-[120px] w-[120px] cursor-grab" role="button" tabindex="0" aria-disabled="false" aria-roledescription="draggable" aria-describedby="DndDescribedBy-0"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 4.5A2.5 2.5 0 0 1 2.5 2h11A2.5 2.5 0 0 1 16 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5v-7zM2.5 3A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3h-11zm10.854 4.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0zm0 2.5a.5.5 0 0 1 0 .708l-.5.5a.5.5 0 0 1-.708-.708l.5-.5a.5.5 0 0 1 .708 0z"></path></svg><p class="text-xs">TextArea Field</p></button><button class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 flex flex-col gap-2 h-[120px] w-[120px] cursor-grab" role="button" tabindex="0" aria-disabled="false" aria-roledescription="draggable" aria-describedby="DndDescribedBy-0"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z"></path><path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"></path></svg><p class="text-xs">Date Field</p></button><button class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 flex flex-col gap-2 h-[120px] w-[120px] cursor-grab" role="button" tabindex="0" aria-disabled="false" aria-roledescription="draggable" aria-describedby="DndDescribedBy-0"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" class="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.49999 3.09998C7.27907 3.09998 7.09999 3.27906 7.09999 3.49998C7.09999 3.72089 7.27907 3.89998 7.49999 3.89998H14.5C14.7209 3.89998 14.9 3.72089 14.9 3.49998C14.9 3.27906 14.7209 3.09998 14.5 3.09998H7.49999ZM7.49998 5.1C7.27907 5.1 7.09998 5.27908 7.09998 5.5C7.09998 5.72091 7.27907 5.9 7.49998 5.9H14.5C14.7209 5.9 14.9 5.72091 14.9 5.5C14.9 5.27908 14.7209 5.1 14.5 5.1H7.49998ZM7.1 7.5C7.1 7.27908 7.27909 7.1 7.5 7.1H14.5C14.7209 7.1 14.9 7.27908 14.9 7.5C14.9 7.72091 14.7209 7.9 14.5 7.9H7.5C7.27909 7.9 7.1 7.72091 7.1 7.5ZM7.49998 9.1C7.27907 9.1 7.09998 9.27908 7.09998 9.5C7.09998 9.72091 7.27907 9.9 7.49998 9.9H14.5C14.7209 9.9 14.9 9.72091 14.9 9.5C14.9 9.27908 14.7209 9.1 14.5 9.1H7.49998ZM7.09998 11.5C7.09998 11.2791 7.27907 11.1 7.49998 11.1H14.5C14.7209 11.1 14.9 11.2791 14.9 11.5C14.9 11.7209 14.7209 11.9 14.5 11.9H7.49998C7.27907 11.9 7.09998 11.7209 7.09998 11.5ZM2.5 9.25003L5 6.00003H0L2.5 9.25003Z" fill="currentColor"></path></svg><p class="text-xs">Select Field</p></button><button class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 flex flex-col gap-2 h-[120px] w-[120px] cursor-grab" role="button" tabindex="0" aria-disabled="false" aria-roledescription="draggable" aria-describedby="DndDescribedBy-0"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M405.333 64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V106.667C448 83.198 428.802 64 405.333 64zm-192 298.667L106.667 256l29.864-29.864 76.802 76.802 162.136-162.136 29.864 29.865-192 192z"></path></svg><p class="text-xs">CheckBox Field</p></button></div></div></aside>
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