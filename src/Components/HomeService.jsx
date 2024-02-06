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
                              <h4>  Multi-National AI Avatar</h4>
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
                            <h4> Royalty-Free Assets & Templates</h4>
                            <p>Where It All Begins</p>
                            </div>
                        </div>
                        <div className="col-12 hmSrvcSecR_1 rgt2 crsPltfrm">
                            <div className="hmSrvcSecR_1In">
                            <h4> Cross-Platform Support</h4>
                            <p>Where It All Begins</p>
                            <img src={CrossPltfrm} alt="" />
                            </div>
                        </div>
                        <div className="col-12 hmSrvcSecR_1  rgt3">
                            <div className="hmSrvcSecR_1In">
                            <h4> Royalty-Free Assets & Templates</h4>
                            <p>Where It All Begins</p>
                            <img src={RoyaltyIcn} alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 hmSrvcSecL">
                    <div className="hmSrvcSecLIn">
                        <h2 className="titleTxt"><span>Diversify</span> videos with 300+ Avatars & 300+ Voices!</h2>
                        <p className="sbTitleTxt">Choose virtual realistic avatars, settings, languages and accents to create unique and tailored video content.</p>
                        <Link to='/dashboard' className="videoBtn"><span><MonitorPlay size={30} /> Generate AI Video Online</span></Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
     
    </>
  );
}

export default HomeServices;
