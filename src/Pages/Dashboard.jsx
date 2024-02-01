import React from "react";
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { PaperPlaneRight, Password,FileText, FileVideo,FolderNotchPlus,Chalkboard} from "phosphor-react";
import lanscapIcn from '../assets/images/landscapeIcn.png';
import prtIcn from '../assets/images/portraitIcn.png';

function Dashboard() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToTop();
  return (
    <>
      <section className="dashboardSec dashboardFrstPgSec">
        {/* <div className="dashBrdLft">
            <div className="dashBrdLftIn">
                <ul className="dashbrdMenu">
                    <li><Link to="" className="dashActive"><FileText size={32} /> Home</Link></li>
                    <li><Link to=""><FileVideo size={32} /> Video Template</Link></li>
                    <li><Link to=""><FolderNotchPlus size={32} /> My Creations</Link></li>
                    <li><Link to=""><Chalkboard size={32} /> Tutorials</Link></li>
                </ul>
            </div>
        </div> */}
        <div className="dashBrdRgt">
            <div className="dashBrdRgtIn">
            <h2 className='mainHdng'>Select video aspect ratio</h2>
            <div className="dahbrdTwoBxes">
            <div className="row">
            <div className="col-6 dsBxOne">
                <div className="dsBxOneIn">
                    <h2> Landscope: <span>16:9</span></h2>
                    <Link to='landscapeVideo' className="crtVideoBtn">Create Video</Link>
                    <span className="crtVdeoIcn"><img src={lanscapIcn} alt="" /></span>
                </div>
            </div>  
            <div className="col-6 dsBxOne dsBoxTwo">
                <div className="dsBxOneIn">
                <h2>Portrait: <span>9:16</span></h2>
                <Link to='landscapeVideo' className="crtVideoBtn">Create Video</Link>
                <span className="crtVdeoIcn"><img src={prtIcn} alt="" /></span>
                </div>
            </div>   
            </div>    
            </div>
            </div>
        </div>
      </section>
     
    </>
  );
}

export default Dashboard;
