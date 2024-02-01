import React from 'react'
function AiTranslation({hidePopup}) {
  return (
    <div className='popupOutline'>
        <div className='pop-up'>
            <span className='close-pupup' onClick={hidePopup}>X</span>
            <div className='popupContentDiv'>
                <h2>AI Translation</h2>
                <div className='popupContentDivMain'>
                    <div className='row'>
                    <div className='col-6 popupTxtare'>
                        <div className='transLabel'>
                            <select name="" id="" className='form-control'>
                                <option value="">Select Source Language</option>
                                <option value="">Hindi</option>
                                <option value="">English</option>
                                <option value="">Odia</option>
                            </select>
                        </div>
                        <textarea name="" id="" className='form-control' placeholder='Welcome to Anuvadini AI Video Generation Tool'></textarea>
                    </div>
                    <div className='col-6 popupTxtare'>
                    <div className='transLabel'>
                            <select name="" id="" className='form-control'>
                                <option value="">Select Target Language</option>
                                <option value="">Hindi</option>
                                <option value="">English</option>
                                <option value="">Odia</option>
                            </select>
                        </div>
                        <textarea name="" id="" className='form-control' placeholder='Welcome to Anuvadini AI Video Generation Tool'></textarea>
                    </div>
                    </div>
                </div>
                <button className='btn button green'>Apply</button>
            </div>
        </div>
    </div>
  )
}

export default AiTranslation