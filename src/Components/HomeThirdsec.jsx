import React from "react";
import { Link } from 'react-router-dom'
import { MonitorPlay } from "phosphor-react";
import ThirdSecImg from '../assets/images/thirdImg.png';

function HomeThirdsec() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToTop()
  return (
    <>
      <section className="homeServiceSec homeThridSec">
        <div className="container">
            <div className="row">
              <h2 className="hmThrdSecHdng">Diversify videos with 300+ Avatars & 300+ Voices!</h2>
              <div className="homeTrhirdCntIn">
                <img src={ThirdSecImg} alt="" className="hmThrdImg" />
                <div className="thirdSecCntDiv">
                    <h2>Generate High-Quality Videos Rapidly</h2>
                    <p>Harness the power of AI to generate professional video scripts. Amplify the impact of your avatar videos effortlessly with 180+ customizable templates.</p>
                    <Link to='/dashboard' className="videoBtn"><span><MonitorPlay size={30} /> Generate AI Video Online</span></Link>
                </div>
              </div>
             </div>
        </div>
      </section>
     
    </>
  );
}

export default HomeThirdsec;
