import React from "react";
import { Link } from 'react-router-dom'
import { FacebookLogo, TwitterLogo, LinkedinLogo, InstagramLogo } from "phosphor-react";
import ThirdSecImg from '../assets/images/thirdImg.png';

function HomeSocialsec() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToTop()
  return (
    <>
      <section className="homeServiceSec homeSocialSec">
        <div className="container">
            <div className="row">
              <h2 className="hmThrdSecHdng">Join our social community to get more news, trends, and updates!</h2>
              <div className="homeTrhirdCntIn">
             <ul className="socialList">
                <li><Link><FacebookLogo size={82} className="fbIcn" /></Link></li>
                <li><Link><TwitterLogo size={82} className="twtrIcn" /></Link></li>
                <li><Link><LinkedinLogo size={82} className="linkDinIcn" /></Link></li>
                <li><Link><InstagramLogo size={82} className="instaIcn" /></Link></li>
             </ul>
              </div>
             </div>
        </div>
      </section>
     
    </>
  );
}

export default HomeSocialsec;
