import React from "react";
import HomepageSlider from "../Components/HomeSlider";
import HomeServices from "../Components/HomeService";
import HomeThirdsec from "../Components/HomeThirdsec";
import HomeSocialsec from "../Components/HomeSocialsec";

function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToTop()
  return (
    <>
      <section className="homeSection">
         <HomepageSlider />
         <HomeServices />
         <HomeThirdsec />
         <HomeSocialsec />
      </section>
    </>
  );
}

export default HomePage;
