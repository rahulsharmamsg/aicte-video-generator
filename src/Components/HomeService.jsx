import React from "react";
import { Link } from 'react-router-dom'
import { MonitorPlay } from "phosphor-react";
import MultiNational from '../assets/images/multinationalIcn.png';
import RoyaltyIcn from '../assets/images/royaltyFreeIcn.png';
import RangeOfIcn from '../assets/images/rangeofIcn.png';
import CrossPltfrm from '../assets/images/crossPltFrmIcn.png';

function HomeServices() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToTop()
  return (
    <>
      <section className="homeServiceSec">
        <div className="container">
            <div className="row">
              
            <div className="col-6 hmSrvcSecR">
                    <div className="row">
                    <div className="col-6 hmSrvcSecRL">
                        <div className="col-12 hmSrvcSecR_1">
                            <div className="hmSrvcSecR_1In">
                              <h4>  Multi-Language AI Avatar</h4>
                                <img src={MultiNational} alt="" />
                                <p>Where It All Begins</p>
                            </div>
                        </div>
                        <div className="col-12 hmSrvcSecR_1 hmSrvcSecR_2 rangeOfN">
                            <div className="hmSrvcSecR_1In">
                            <img src={RangeOfIcn} alt="" />
                            <h4> Range of Natural AI Voices</h4>
                            <p>Where It All Begins</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 hmSrvcSecRLR">
                    <div className="col-12 hmSrvcSecR_1 rgt1">
                            <div className="hmSrvcSecR_1In">
                            <img src={RoyaltyIcn} alt="" />
                            <h4> Create a Book, Craft AI Narratives</h4>
                            <p>AI Avatar.</p>
                            </div>
                        </div>
                        <div className="col-12 hmSrvcSecR_1 rgt2 crsPltfrm">
                            <div className="hmSrvcSecR_1In">
                            <h4> Course Creation, Reinvented</h4>
                            <p>Where It All Begins</p>
                            <img src={CrossPltfrm} alt="" />
                            </div>
                        </div>
                        <div className="col-12 hmSrvcSecR_1  rgt3">
                            <div className="hmSrvcSecR_1In">
                            <h4> From Q&A to Quizzes</h4>
                            <p>Where It All Begins</p>
                            <img src={RoyaltyIcn} alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 hmSrvcSecL">
                    <div className="hmSrvcSecLIn">
                        <h2 className="titleTxt"><span>Create</span>Your Avatar in Bhartiya Languages!</h2>
                        <p className="sbTitleTxt"> Unique Avatars, Voices, and Settings. Express Yourself Now!</p>
                        <Link to='/dashboard' className="videoBtn"><span><MonitorPlay size={30} /> Generate AI Video Online</span></Link>
                        <Link to='/videotranslator' style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '20px'
                        
                        }} className="videoBtn"><span><MonitorPlay size={30} /> video Translator</span></Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
     
    </>
  );
}

export default HomeServices;
