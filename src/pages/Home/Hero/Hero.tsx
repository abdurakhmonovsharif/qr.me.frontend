import React from "react";
import Lamp from "../../../assets/img/lamp.svg";
import HeroImg from "../../../assets/img/main-img.png";
import Logo1 from "../../../assets/img/logo1.png";
import Logo2 from "../../../assets/img/logo2.png";
import Logo3 from "../../../assets/img/logo3.png";
import Logo4 from "../../../assets/img/logo4.png";
import Logo5 from "../../../assets/img/logo5.png";
import Logo6 from "../../../assets/img/logo6.png";
import Logo7 from "../../../assets/img/logo7.png";
import { GreyBall_icon, Hero_icon } from "../../../utils/icons";
import { GetStarted } from "../../../components/Button/Started";
import { BookDemo } from "../../../components/Button/Book";

export const Hero = () => {
  return (
    <React.Fragment>
      {/* section1  */}
      <section className="section1__main">
        <div className="section1-sllipse__main" />
        <div className="container">
          <div className="section1-container__main">
            <div className="section1-container-left__main">
              <img src={Lamp} alt="img" className="lamp" />
              <h1>
                <span>Design</span> powerful <br />
                learning experiences
              </h1>
              <GreyBall_icon />
              <p>
                Train and engage your teams better with a mobile-first
                microlearning <br />
                tool that transforms learning experiences for your teams
              </p>
              <div className="section1-container-left-btns__main">
               <GetStarted/>
                <BookDemo/>
              </div>
              <div className="section1-container-bottom__main">
                <Hero_icon />
                <h5>Free plan is free forever!</h5>
              </div>
            </div>
            <div className="section1-container-right__main">
              <div className="section1-ellipse__main section1-ellipse1__main" />
              <div className="section1-ellipse__main section1-ellipse2__main" />
              <div className="section1-ellipse__main section1-ellipse3__main" />
              <div className="section1-ellipse__main section1-ellipse4__main" />
              <img src={HeroImg} alt="img" />
            </div>
          </div>
        </div>
      </section>
      {/* section2 */}
      <section className="section2__main">
        <div className="container">
          <div className="section2-text__main">
            <h3>You are in great company</h3>
            <p>Successful businesses from around the world trust Gnowbe</p>
          </div>
          <div className="section2-container__main">
            <img src={Logo1} alt="img" />
            <img src={Logo2} alt="img" />
            <img src={Logo3} alt="img" />
            <img src={Logo4} alt="img" />
            <img src={Logo5} alt="img" />
            <img src={Logo6} alt="img" />
            <img src={Logo7} alt="img" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
