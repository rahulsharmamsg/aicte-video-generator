import React from "react";
import { Link } from 'react-router-dom'
import homeSliderImg from '../assets/images/homeSlider.jpg';

function HomepageSlider() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToTop()
  return (
    <>
      <section className="homeSliderSec">
        <Link to="">
         <img src={homeSliderImg} alt="" />
         </Link>
      </section>
      
    </>
  );
}

export default HomepageSlider;
