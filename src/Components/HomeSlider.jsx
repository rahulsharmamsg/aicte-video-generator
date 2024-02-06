import React from "react";
import { Link } from 'react-router-dom'
import homeSliderImg from '../assets/images/slider01.jpg';
import { Article, Book, BookOpen, ChalkboardTeacher, CheckSquare, Command, Exam, FinnTheHuman, Note, Notebook, Question } from "phosphor-react";

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
         <div className="sliderLink">
          <Link to='https://translation.aicte-india.org/translation-independent/Text-Editor/' target="_blank" className="videoBtn sBtn1"><span><Notebook className="lnkIcn" size={24} /> Create a Book</span></Link>
          <Link to='https://anuvadini.aicte-india.org/dictation-tool/' target="_blank" className="videoBtn sBtn2"><span><Note className="lnkIcn" size={24} /> Create Notes</span></Link>
          <Link className="videoBtn sBtn3"><span><ChalkboardTeacher className="lnkIcn" size={24} /> Create a Course</span></Link>
          <Link className="videoBtn sBtn4"><span><CheckSquare className="lnkIcn" size={24} /> Create an Assessment</span></Link>
          <Link className="videoBtn sBtn5"><span><Question className="lnkIcn" size={24} /> Create Question & Answer Paper</span></Link>
          <Link className="videoBtn sBtn6"><span><Exam className="lnkIcn" size={24} /> Create Exam Preparation Modules</span></Link>
          <Link className="videoBtn sBtn7"><span><FinnTheHuman className="lnkIcn" size={24} /> Create Talking Avatars</span></Link>
          <Link className="videoBtn sBtn8"><span><Command className="lnkIcn" size={24} /> Create Quizzes</span></Link>
          <Link className="videoBtn sBtn9"><span><Article className="lnkIcn" size={24} /> Create a Blog</span></Link>
         </div>
      </section>
      
    </>
  );
}

export default HomepageSlider;
