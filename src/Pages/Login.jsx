import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { PaperPlaneRight, Password } from "phosphor-react";
import MultiNational from '../assets/images/multinationalIcn.png';
import RoyaltyIcn from '../assets/images/royaltyFreeIcn.png';
import RangeOfIcn from '../assets/images/rangeofIcn.png';
import CrossPltfrm from '../assets/images/crossPltFrmIcn.png';

function Login() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToTop();
  const navigate = useNavigate();
  const godashboard =()=>{
    navigate('/dashboard')
  }
  return (
    <>
      <section className="loginSec">
        <div className="container">
            <div className="row">
              <div className="loginDiv">
              <h2 className='mt-0 text-center'>Login</h2>
              <Form>
                <Form.Group>
            <Form.Label className="lgnLabel">Email:</Form.Label>
            <div className='formInptDiv'>
              <Form.Control  type='email' />
              <span className='userInptIcn'><PaperPlaneRight size={32} className="lgnIcn" /></span>
            </div>
          </Form.Group>
          <Form.Group className='mt-3'>
            <Form.Label className="lgnLabel">Password:</Form.Label>
            <div className='formInptDiv frmPwDiv'>
              <Form.Control type='password'/>
              <span className='userInptIcn'><Password size={32} className="lgnIcn" /></span>
            </div>
          </Form.Group>
       
          <Form.Group className='mt-3 text-center buttonlg'>
            <button className='button green' type='button' onClick={godashboard} >
              Login
            </button>
            <h3>OR</h3>
            <Link to='/registration' className='newuser'>
              New User's/Register
            </Link>
          </Form.Group>
        </Form>
              </div>
            </div>
        </div>
      </section>
     
    </>
  );
}

export default Login;
