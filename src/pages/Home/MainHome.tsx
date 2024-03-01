import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../layout/Header/Header";
import { Footer } from "../../layout/Footer/Footer";
import Lamp from "../../assets/img/lamp.svg";
import HeroImg from "../../assets/img/main-img.png";
import Phone from "../../assets/img/13717654_5326009 1.png";
import Crown from "../../assets/img/crown.svg";
import QR from "../../assets/img/QR Code.svg";
import Rectangle from "../../assets/img/Rectangle 613.png";
import Logo1 from "../../assets/img/logo1.png";
import Logo2 from "../../assets/img/logo2.png";
import Logo3 from "../../assets/img/logo3.png";
import Logo4 from "../../assets/img/logo4.png";
import Logo5 from "../../assets/img/logo5.png";
import Logo6 from "../../assets/img/logo6.png";
import Logo7 from "../../assets/img/logo7.png";
import Person from "../../assets/img/material-symbols_group-add-outline-rounded.png";
import Avatar from "../../assets/img/avatar-1.png";
import Mark from "../../assets/img/Quote mark.svg";
import Message from "../../assets/img/13.svg";
import Section7Icon from "../../assets/img/140.svg";
import "../../style/style.css";
import {
  GreyBall_icon,
  Hero_icon,
  Section3_icon,
  Section3_icon2,
  Section3_icon3,
  Section3_icon4,
  Section3_icon5,
  Section3_icon6,
  Section3_icon7,
  Section5_icon,
  Section6_icon,
} from "../../utils/icons";

export const DefaultComponent = () => {
  const content = [
    {
      icon: <Section3_icon3 />,
      title: "Content authoring made easy",
      body: "Quickly create learning experiences with a simple interface designed by instructional designers",
    },
    {
      icon: <img src={Person} />,
      title: "Content authoring made easy",
      body: "Quickly create learning experiences with a simple interface designed by instructional designers",
    },
    {
      icon: <Section3_icon4 />,
      title: "Content authoring made easy",
      body: "Quickly create learning experiences with a simple interface designed by instructional designers",
    },
    {
      icon: <Section3_icon5 />,
      title: "Content authoring made easy",
      body: "Quickly create learning experiences with a simple interface designed by instructional designers",
    },
    {
      icon: <Section3_icon6 />,
      title: "Content authoring made easy",
      body: "Quickly create learning experiences with a simple interface designed by instructional designers",
    },
    {
      icon: <Section3_icon7 />,
      title: "Content authoring made easy",
      body: "Quickly create learning experiences with a simple interface designed by instructional designers",
    },
  ];
  const slider1 = [
    {
      img: Rectangle,
      label: "Get up and running,fast!",
      text: "Seamlessly deploy Gnowbe in your organization to create onboarding, enablement and training programs in minutes, without coding, special ...",
      btn: "Explore",
    },
    {
      img: Rectangle,
      label: "Powerful content authoring for an immersive learning experience",
      text: "Seamlessly deploy Gnowbe in your organization to create onboarding, enablement and training programs in minutes, without coding, special ...",
      btn: "Explore",
    },
    {
      img: Rectangle,
      label: "Get up and running,fast!",
      text: "Seamlessly deploy Gnowbe in your organization to create onboarding, enablement and training programs in minutes, without coding, special ...",
      btn: "Explore",
    },
    {
      img: Rectangle,
      label: "Get up and running,fast!",
      text: "Seamlessly deploy Gnowbe in your organization to create onboarding, enablement and training programs in minutes, without coding, special ...",
      btn: "Explore",
    },
    {
      img: Rectangle,
      label: "Get up and running,fast!",
      text: "Seamlessly deploy Gnowbe in your organization to create onboarding, enablement and training programs in minutes, without coding, special ...",
      btn: "Explore",
    },
  ];
  const slider2 = [
    {
      body: "“Gnowbe has helped us create an ‘ecosystem’ for our coaching training from the mountains of Nepal to the island of Singapore… we want people to think of us and how our platform has democratized learning in a manner not previously possible.”",
      icon: <Section6_icon />,
      img: Avatar,
      name: "Mark Dunwoody",
      job: "Co-founder, Health Rhythms Institute (UK)",
    },
    {
      body: "“Gnowbe has helped us create an ‘ecosystem’ for our coaching training from the mountains of Nepal to the island of Singapore… we want people to think of us and how our platform has democratized learning in a manner not previously possible.”",
      icon: <Section6_icon />,
      img: Avatar,
      name: "Mark Dunwoody",
      job: "Co-founder, Health Rhythms Institute (UK)",
    },
    {
      body: "“Gnowbe has helped us create an ‘ecosystem’ for our coaching training from the mountains of Nepal to the island of Singapore… we want people to think of us and how our platform has democratized learning in a manner not previously possible.”",
      icon: <Section6_icon />,
      img: Avatar,
      name: "Mark Dunwoody",
      job: "Co-founder, Health Rhythms Institute (UK)",
    },
    {
      body: "“Gnowbe has helped us create an ‘ecosystem’ for our coaching training from the mountains of Nepal to the island of Singapore… we want people to think of us and how our platform has democratized learning in a manner not previously possible.”",
      icon: <Section6_icon />,
      img: Avatar,
      name: "Mark Dunwoody",
      job: "Co-founder, Health Rhythms Institute (UK)",
    },
    {
      body: "“Gnowbe has helped us create an ‘ecosystem’ for our coaching training from the mountains of Nepal to the island of Singapore… we want people to think of us and how our platform has democratized learning in a manner not previously possible.”",
      icon: <Section6_icon />,
      img: Avatar,
      name: "Mark Dunwoody",
      job: "Co-founder, Health Rhythms Institute (UK)",
    },
  ];
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
                <button type="button" className="btn-get-start">
                  Get Started
                </button>
                <button className="btn-book-a-demo" type="button">
                  Book a Demo
                </button>
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
      {/* section3 */}
      <section className="section3__main">
        <div className="container">
          <div className="section3-top__main">
            <Section3_icon />
            <Section3_icon2 />
            <h3>Create impactful content</h3>
            <p>
              Automate training, facilitate blended learning and improve your
              overall training experience
            </p>
          </div>
          <div className="section3-container__main">
            {content.map((item) => (
              <div className="section3-container-block__main">
                <div className="section3-container-block-parent__main">
                  <div className="section3-container-block-ellipse__main">
                    {item.icon}
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>
                  Quickly create learning experiences with a simple interface
                  designed by instructional designers
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* section4 */}
      <section className="section4__main">
        <div className="container">
          <div className="section4-container__main">
            <div className="section4-container-left__main">
              <h4>
                Mobile-first, <br />
                microlearning platform
              </h4>
              <p>
                An immersive and flexible bite-sized learning experience,
                accessed anytime and anywhere
              </p>
              <div className="section4-container-left-block__main">
                <div className="section4-container-left-block-qr__main">
                  <img src={QR} alt="img" />
                </div>
                <span>
                  Scan and <br />
                  Get the App <br />
                  for free
                </span>
              </div>
            </div>
            <div className="section4-container-right__main">
              <img src={Phone} alt="img" />
            </div>
          </div>
        </div>
      </section>
      {/* section5 */}
      <section className="section5__main">
        <div className="container">
          <div className="section5-top__main">
            <Section5_icon />
            <h4>
              Power a smarter organization with <span>QRmessage</span>
            </h4>
            <img src={Crown} alt="img" className="crown" />
          </div>
          <div className="swiper mySwiper1">
            <div className="swiper-wrapper">
              <div className="swiper-slide mySwiper1-slide">
                {slider1.map((item) => (
                  <div className="section5-block__main">
                    <img src={item.img} alt="img" />
                    <div className="section5-block-text__main">
                      <h3>
                        {item.label}
                        <br /> fast!
                      </h3>
                      <p>{item.text}</p>
                      <button>{item.btn}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mySwiper-navigation">
              <div className="swiper-button-prev swiper-button-prev-sample swiper-button-prev1" />
              <div className="swiper-pagination swiper-pagination-sample swiper-pagination1" />
              <div className="swiper-button-next swiper-button-next-sample swiper-button-next1" />
            </div>
          </div>
        </div>
      </section>
      {/* section6 */}
      <section className="section6__main">
        <div className="container">
          <img src={Mark} alt="img" className="quote-mark" />
          <div className="section6-top__main">
            <h4>Testimonials</h4>
            <img src={Message} alt="img" />
          </div>
          <div className="swiper mySwiper2">
            <div className="swiper-wrapper">
              <div className="swiper-slide mySwiper2-slide">
                {slider2.map((item) => (
                  <div className="section6-block__main">
                    <div className="section6-block-content__main">
                      <p>{item.body}</p>
                    </div>
                    {item.icon}
                    <div className="section6-block-human__main">
                      <div className="section6-block-human-img__main">
                        <img src={item.img} alt="img" />
                      </div>
                      <p>{item.name}</p>
                      <span>{item.job}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mySwiper-navigation">
              <div className="swiper-button-prev swiper-button-prev-sample swiper-button-prev2" />
              <div className="swiper-pagination swiper-pagination-sample swiper-pagination2" />
              <div className="swiper-button-next swiper-button-next-sample swiper-button-next2" />
            </div>
          </div>
        </div>
      </section>
      {/* section7 */}
      <section className="section7__main">
        <div className="container">
          <div className="section7-top__main">
            <img src={Section7Icon} alt="img" />
            <h3>For every team and every use</h3>
            <p>
              Deliver a great learning experience for every segment of your
              business. Gnowbe empowers you to digitize while keeping the human
              touch.
            </p>
          </div>
          <div className="section7-choose__main">
            <div
              data-tab="#tab1"
              className="section7-choose-block__main section7-choose-block-active__main"
            >
              Training
            </div>
            <div data-tab="#tab2" className="section7-choose-block__main">
              Onboarding
            </div>
            <div data-tab="#tab3" className="section7-choose-block__main">
              Sales Enablement
            </div>
            <div data-tab="#tab4" className="section7-choose-block__main">
              Leadership Development
            </div>
            <div data-tab="#tab5" className="section7-choose-block__main">
              Operations
            </div>
            <div data-tab="#tab6" className="section7-choose-block__main">
              Safety and Compliance
            </div>
            <div data-tab="#tab7" className="section7-choose-block__main">
              Partner Engagement
            </div>
            <div data-tab="#tab8" className="section7-choose-block__main">
              Customer Engagement
            </div>
          </div>
          <div
            id="tab1"
            className="section7-container__main section7-container-active__main"
          >
            <div className="section7-container-left__main">
              <h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M14.625 31.5C13.35 31.5 12.25 31.056 11.325 30.168C10.4 29.28 9.875 28.212 9.75 26.964C8.25 26.763 7 26.1 6 24.975C5 23.85 4.5 22.525 4.5 21C4.5 20.475 4.569 19.9565 4.707 19.4445C4.845 18.9325 5.051 18.451 5.325 18C5.05 17.55 4.844 17.075 4.707 16.575C4.57 16.075 4.501 15.55 4.5 15C4.5 13.475 5 12.156 6 11.043C7 9.93 8.2375 9.274 9.7125 9.075C9.7875 7.8 10.3 6.7185 11.25 5.8305C12.2 4.9425 13.325 4.499 14.625 4.5C15.275 4.5 15.8815 4.625 16.4445 4.875C17.0075 5.125 17.526 5.4625 18 5.8875C18.45 5.4625 18.9625 5.125 19.5375 4.875C20.1125 4.625 20.725 4.5 21.375 4.5C22.675 4.5 23.794 4.9375 24.732 5.8125C25.67 6.6875 26.176 7.7625 26.25 9.0375C27.725 9.2375 28.969 9.9 29.982 11.025C30.995 12.15 31.501 13.475 31.5 15C31.5 15.55 31.431 16.075 31.293 16.575C31.155 17.075 30.949 17.55 30.675 18C30.95 18.45 31.1565 18.9315 31.2945 19.4445C31.4325 19.9575 31.501 20.476 31.5 21C31.5 22.55 30.994 23.8815 29.982 24.9945C28.97 26.1075 27.7135 26.7635 26.2125 26.9625C26.0875 28.2125 25.5685 29.2815 24.6555 30.1695C23.7425 31.0575 22.649 31.501 21.375 31.5C20.75 31.5 20.1435 31.381 19.5555 31.143C18.9675 30.905 18.449 30.574 18 30.15C17.525 30.575 17 30.9065 16.425 31.1445C15.85 31.3825 15.25 31.501 14.625 31.5ZM19.5 9.375V26.625C19.5 27.15 19.6815 27.594 20.0445 27.957C20.4075 28.32 20.851 28.501 21.375 28.5C21.875 28.5 22.3065 28.3 22.6695 27.9C23.0325 27.5 23.226 27.05 23.25 26.55C22.725 26.35 22.2435 26.0815 21.8055 25.7445C21.3675 25.4075 20.974 25.001 20.625 24.525C20.375 24.175 20.281 23.8 20.343 23.4C20.405 23 20.6115 22.675 20.9625 22.425C21.3125 22.175 21.6875 22.0815 22.0875 22.1445C22.4875 22.2075 22.8125 22.4135 23.0625 22.7625C23.3375 23.1625 23.6875 23.469 24.1125 23.682C24.5375 23.895 25 24.001 25.5 24C26.325 24 27.0315 23.706 27.6195 23.118C28.2075 22.53 28.501 21.824 28.5 21C28.5 20.875 28.4935 20.75 28.4805 20.625C28.4675 20.5 28.4365 20.375 28.3875 20.25C27.9625 20.5 27.506 20.6875 27.018 20.8125C26.53 20.9375 26.024 21 25.5 21C25.075 21 24.7185 20.856 24.4305 20.568C24.1425 20.28 23.999 19.924 24 19.5C24 19.075 24.144 18.7185 24.432 18.4305C24.72 18.1425 25.076 17.999 25.5 18C26.325 18 27.0315 17.706 27.6195 17.118C28.2075 16.53 28.501 15.824 28.5 15C28.5 14.175 28.206 13.475 27.618 12.9C27.03 12.325 26.324 12.025 25.5 12C25.225 12.45 24.8685 12.844 24.4305 13.182C23.9925 13.52 23.5115 13.7885 22.9875 13.9875C22.5875 14.1375 22.2 14.125 21.825 13.95C21.45 13.775 21.2 13.4875 21.075 13.0875C20.95 12.6875 20.969 12.3 21.132 11.925C21.295 11.55 21.576 11.3 21.975 11.175C22.35 11.05 22.6565 10.825 22.8945 10.5C23.1325 10.175 23.251 9.8 23.25 9.375C23.25 8.85 23.069 8.4065 22.707 8.0445C22.345 7.6825 21.901 7.501 21.375 7.5C20.85 7.5 20.406 7.6815 20.043 8.0445C19.68 8.4075 19.499 8.851 19.5 9.375ZM16.5 26.625V9.375C16.5 8.85 16.3185 8.406 15.9555 8.043C15.5925 7.68 15.149 7.499 14.625 7.5C14.1 7.5 13.656 7.6815 13.293 8.0445C12.93 8.4075 12.749 8.851 12.75 9.375C12.75 9.775 12.8625 10.144 13.0875 10.482C13.3125 10.82 13.6125 11.051 13.9875 11.175C14.3875 11.3 14.675 11.55 14.85 11.925C15.025 12.3 15.05 12.6875 14.925 13.0875C14.775 13.4875 14.5125 13.775 14.1375 13.95C13.7625 14.125 13.375 14.1375 12.975 13.9875C12.45 13.7875 11.9685 13.519 11.5305 13.182C11.0925 12.845 10.7365 12.451 10.4625 12C9.6625 12.025 8.969 12.3315 8.382 12.9195C7.795 13.5075 7.501 14.201 7.5 15C7.5 15.825 7.794 16.5315 8.382 17.1195C8.97 17.7075 9.676 18.001 10.5 18C10.925 18 11.2815 18.144 11.5695 18.432C11.8575 18.72 12.001 19.076 12 19.5C12 19.925 11.856 20.2815 11.568 20.5695C11.28 20.8575 10.924 21.001 10.5 21C9.975 21 9.469 20.9375 8.982 20.8125C8.495 20.6875 8.0385 20.5 7.6125 20.25C7.5625 20.375 7.531 20.5 7.518 20.625C7.505 20.75 7.499 20.875 7.5 21C7.5 21.825 7.794 22.5315 8.382 23.1195C8.97 23.7075 9.676 24.001 10.5 24C11 24 11.4625 23.8935 11.8875 23.6805C12.3125 23.4675 12.6625 23.1615 12.9375 22.7625C13.1875 22.4125 13.5125 22.206 13.9125 22.143C14.3125 22.08 14.6875 22.174 15.0375 22.425C15.3875 22.675 15.594 23 15.657 23.4C15.72 23.8 15.626 24.175 15.375 24.525C15.025 25 14.625 25.4125 14.175 25.7625C13.725 26.1125 13.2375 26.3875 12.7125 26.5875C12.7375 27.0875 12.9375 27.5315 13.3125 27.9195C13.6875 28.3075 14.125 28.501 14.625 28.5C15.15 28.5 15.594 28.3185 15.957 27.9555C16.32 27.5925 16.501 27.149 16.5 26.625Z"
                    fill="#FFB637"
                  />
                </svg>
                Training
              </h3>
              <p>
                Deliver highly engaging and interactive training to your
                organization that a learner can explore anytime, anywhere.
              </p>
              <div className="section1-container-left-btns__main">
                <button type="button" className="btn-get-start">
                  Get Started
                </button>
                <button className="btn-book-a-demo" type="button">
                  Book a Demo
                </button>
              </div>
            </div>
            <div className="section7-container-right__main">
              <img src="/img/browser.png" alt="img" />
            </div>
          </div>
          <div id="tab2" className="section7-container__main">
            <div className="section7-container-left__main">
              <h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M14.625 31.5C13.35 31.5 12.25 31.056 11.325 30.168C10.4 29.28 9.875 28.212 9.75 26.964C8.25 26.763 7 26.1 6 24.975C5 23.85 4.5 22.525 4.5 21C4.5 20.475 4.569 19.9565 4.707 19.4445C4.845 18.9325 5.051 18.451 5.325 18C5.05 17.55 4.844 17.075 4.707 16.575C4.57 16.075 4.501 15.55 4.5 15C4.5 13.475 5 12.156 6 11.043C7 9.93 8.2375 9.274 9.7125 9.075C9.7875 7.8 10.3 6.7185 11.25 5.8305C12.2 4.9425 13.325 4.499 14.625 4.5C15.275 4.5 15.8815 4.625 16.4445 4.875C17.0075 5.125 17.526 5.4625 18 5.8875C18.45 5.4625 18.9625 5.125 19.5375 4.875C20.1125 4.625 20.725 4.5 21.375 4.5C22.675 4.5 23.794 4.9375 24.732 5.8125C25.67 6.6875 26.176 7.7625 26.25 9.0375C27.725 9.2375 28.969 9.9 29.982 11.025C30.995 12.15 31.501 13.475 31.5 15C31.5 15.55 31.431 16.075 31.293 16.575C31.155 17.075 30.949 17.55 30.675 18C30.95 18.45 31.1565 18.9315 31.2945 19.4445C31.4325 19.9575 31.501 20.476 31.5 21C31.5 22.55 30.994 23.8815 29.982 24.9945C28.97 26.1075 27.7135 26.7635 26.2125 26.9625C26.0875 28.2125 25.5685 29.2815 24.6555 30.1695C23.7425 31.0575 22.649 31.501 21.375 31.5C20.75 31.5 20.1435 31.381 19.5555 31.143C18.9675 30.905 18.449 30.574 18 30.15C17.525 30.575 17 30.9065 16.425 31.1445C15.85 31.3825 15.25 31.501 14.625 31.5ZM19.5 9.375V26.625C19.5 27.15 19.6815 27.594 20.0445 27.957C20.4075 28.32 20.851 28.501 21.375 28.5C21.875 28.5 22.3065 28.3 22.6695 27.9C23.0325 27.5 23.226 27.05 23.25 26.55C22.725 26.35 22.2435 26.0815 21.8055 25.7445C21.3675 25.4075 20.974 25.001 20.625 24.525C20.375 24.175 20.281 23.8 20.343 23.4C20.405 23 20.6115 22.675 20.9625 22.425C21.3125 22.175 21.6875 22.0815 22.0875 22.1445C22.4875 22.2075 22.8125 22.4135 23.0625 22.7625C23.3375 23.1625 23.6875 23.469 24.1125 23.682C24.5375 23.895 25 24.001 25.5 24C26.325 24 27.0315 23.706 27.6195 23.118C28.2075 22.53 28.501 21.824 28.5 21C28.5 20.875 28.4935 20.75 28.4805 20.625C28.4675 20.5 28.4365 20.375 28.3875 20.25C27.9625 20.5 27.506 20.6875 27.018 20.8125C26.53 20.9375 26.024 21 25.5 21C25.075 21 24.7185 20.856 24.4305 20.568C24.1425 20.28 23.999 19.924 24 19.5C24 19.075 24.144 18.7185 24.432 18.4305C24.72 18.1425 25.076 17.999 25.5 18C26.325 18 27.0315 17.706 27.6195 17.118C28.2075 16.53 28.501 15.824 28.5 15C28.5 14.175 28.206 13.475 27.618 12.9C27.03 12.325 26.324 12.025 25.5 12C25.225 12.45 24.8685 12.844 24.4305 13.182C23.9925 13.52 23.5115 13.7885 22.9875 13.9875C22.5875 14.1375 22.2 14.125 21.825 13.95C21.45 13.775 21.2 13.4875 21.075 13.0875C20.95 12.6875 20.969 12.3 21.132 11.925C21.295 11.55 21.576 11.3 21.975 11.175C22.35 11.05 22.6565 10.825 22.8945 10.5C23.1325 10.175 23.251 9.8 23.25 9.375C23.25 8.85 23.069 8.4065 22.707 8.0445C22.345 7.6825 21.901 7.501 21.375 7.5C20.85 7.5 20.406 7.6815 20.043 8.0445C19.68 8.4075 19.499 8.851 19.5 9.375ZM16.5 26.625V9.375C16.5 8.85 16.3185 8.406 15.9555 8.043C15.5925 7.68 15.149 7.499 14.625 7.5C14.1 7.5 13.656 7.6815 13.293 8.0445C12.93 8.4075 12.749 8.851 12.75 9.375C12.75 9.775 12.8625 10.144 13.0875 10.482C13.3125 10.82 13.6125 11.051 13.9875 11.175C14.3875 11.3 14.675 11.55 14.85 11.925C15.025 12.3 15.05 12.6875 14.925 13.0875C14.775 13.4875 14.5125 13.775 14.1375 13.95C13.7625 14.125 13.375 14.1375 12.975 13.9875C12.45 13.7875 11.9685 13.519 11.5305 13.182C11.0925 12.845 10.7365 12.451 10.4625 12C9.6625 12.025 8.969 12.3315 8.382 12.9195C7.795 13.5075 7.501 14.201 7.5 15C7.5 15.825 7.794 16.5315 8.382 17.1195C8.97 17.7075 9.676 18.001 10.5 18C10.925 18 11.2815 18.144 11.5695 18.432C11.8575 18.72 12.001 19.076 12 19.5C12 19.925 11.856 20.2815 11.568 20.5695C11.28 20.8575 10.924 21.001 10.5 21C9.975 21 9.469 20.9375 8.982 20.8125C8.495 20.6875 8.0385 20.5 7.6125 20.25C7.5625 20.375 7.531 20.5 7.518 20.625C7.505 20.75 7.499 20.875 7.5 21C7.5 21.825 7.794 22.5315 8.382 23.1195C8.97 23.7075 9.676 24.001 10.5 24C11 24 11.4625 23.8935 11.8875 23.6805C12.3125 23.4675 12.6625 23.1615 12.9375 22.7625C13.1875 22.4125 13.5125 22.206 13.9125 22.143C14.3125 22.08 14.6875 22.174 15.0375 22.425C15.3875 22.675 15.594 23 15.657 23.4C15.72 23.8 15.626 24.175 15.375 24.525C15.025 25 14.625 25.4125 14.175 25.7625C13.725 26.1125 13.2375 26.3875 12.7125 26.5875C12.7375 27.0875 12.9375 27.5315 13.3125 27.9195C13.6875 28.3075 14.125 28.501 14.625 28.5C15.15 28.5 15.594 28.3185 15.957 27.9555C16.32 27.5925 16.501 27.149 16.5 26.625Z"
                    fill="#FFB637"
                  />
                </svg>
                Training
              </h3>
              <p>
                Deliver highly engaging and interactive training to your
                organization that a learner can explore anytime, anywhere.
              </p>
              <div className="section1-container-left-btns__main">
                <button type="button" className="btn-get-start">
                  Get Started
                </button>
                <button className="btn-book-a-demo" type="button">
                  Book a Demo
                </button>
              </div>
            </div>
            <div className="section7-container-right__main">
              <img src="/img/browser.png" alt="img" />
            </div>
          </div>
          <div id="tab3" className="section7-container__main">
            <div className="section7-container-left__main">
              <h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M14.625 31.5C13.35 31.5 12.25 31.056 11.325 30.168C10.4 29.28 9.875 28.212 9.75 26.964C8.25 26.763 7 26.1 6 24.975C5 23.85 4.5 22.525 4.5 21C4.5 20.475 4.569 19.9565 4.707 19.4445C4.845 18.9325 5.051 18.451 5.325 18C5.05 17.55 4.844 17.075 4.707 16.575C4.57 16.075 4.501 15.55 4.5 15C4.5 13.475 5 12.156 6 11.043C7 9.93 8.2375 9.274 9.7125 9.075C9.7875 7.8 10.3 6.7185 11.25 5.8305C12.2 4.9425 13.325 4.499 14.625 4.5C15.275 4.5 15.8815 4.625 16.4445 4.875C17.0075 5.125 17.526 5.4625 18 5.8875C18.45 5.4625 18.9625 5.125 19.5375 4.875C20.1125 4.625 20.725 4.5 21.375 4.5C22.675 4.5 23.794 4.9375 24.732 5.8125C25.67 6.6875 26.176 7.7625 26.25 9.0375C27.725 9.2375 28.969 9.9 29.982 11.025C30.995 12.15 31.501 13.475 31.5 15C31.5 15.55 31.431 16.075 31.293 16.575C31.155 17.075 30.949 17.55 30.675 18C30.95 18.45 31.1565 18.9315 31.2945 19.4445C31.4325 19.9575 31.501 20.476 31.5 21C31.5 22.55 30.994 23.8815 29.982 24.9945C28.97 26.1075 27.7135 26.7635 26.2125 26.9625C26.0875 28.2125 25.5685 29.2815 24.6555 30.1695C23.7425 31.0575 22.649 31.501 21.375 31.5C20.75 31.5 20.1435 31.381 19.5555 31.143C18.9675 30.905 18.449 30.574 18 30.15C17.525 30.575 17 30.9065 16.425 31.1445C15.85 31.3825 15.25 31.501 14.625 31.5ZM19.5 9.375V26.625C19.5 27.15 19.6815 27.594 20.0445 27.957C20.4075 28.32 20.851 28.501 21.375 28.5C21.875 28.5 22.3065 28.3 22.6695 27.9C23.0325 27.5 23.226 27.05 23.25 26.55C22.725 26.35 22.2435 26.0815 21.8055 25.7445C21.3675 25.4075 20.974 25.001 20.625 24.525C20.375 24.175 20.281 23.8 20.343 23.4C20.405 23 20.6115 22.675 20.9625 22.425C21.3125 22.175 21.6875 22.0815 22.0875 22.1445C22.4875 22.2075 22.8125 22.4135 23.0625 22.7625C23.3375 23.1625 23.6875 23.469 24.1125 23.682C24.5375 23.895 25 24.001 25.5 24C26.325 24 27.0315 23.706 27.6195 23.118C28.2075 22.53 28.501 21.824 28.5 21C28.5 20.875 28.4935 20.75 28.4805 20.625C28.4675 20.5 28.4365 20.375 28.3875 20.25C27.9625 20.5 27.506 20.6875 27.018 20.8125C26.53 20.9375 26.024 21 25.5 21C25.075 21 24.7185 20.856 24.4305 20.568C24.1425 20.28 23.999 19.924 24 19.5C24 19.075 24.144 18.7185 24.432 18.4305C24.72 18.1425 25.076 17.999 25.5 18C26.325 18 27.0315 17.706 27.6195 17.118C28.2075 16.53 28.501 15.824 28.5 15C28.5 14.175 28.206 13.475 27.618 12.9C27.03 12.325 26.324 12.025 25.5 12C25.225 12.45 24.8685 12.844 24.4305 13.182C23.9925 13.52 23.5115 13.7885 22.9875 13.9875C22.5875 14.1375 22.2 14.125 21.825 13.95C21.45 13.775 21.2 13.4875 21.075 13.0875C20.95 12.6875 20.969 12.3 21.132 11.925C21.295 11.55 21.576 11.3 21.975 11.175C22.35 11.05 22.6565 10.825 22.8945 10.5C23.1325 10.175 23.251 9.8 23.25 9.375C23.25 8.85 23.069 8.4065 22.707 8.0445C22.345 7.6825 21.901 7.501 21.375 7.5C20.85 7.5 20.406 7.6815 20.043 8.0445C19.68 8.4075 19.499 8.851 19.5 9.375ZM16.5 26.625V9.375C16.5 8.85 16.3185 8.406 15.9555 8.043C15.5925 7.68 15.149 7.499 14.625 7.5C14.1 7.5 13.656 7.6815 13.293 8.0445C12.93 8.4075 12.749 8.851 12.75 9.375C12.75 9.775 12.8625 10.144 13.0875 10.482C13.3125 10.82 13.6125 11.051 13.9875 11.175C14.3875 11.3 14.675 11.55 14.85 11.925C15.025 12.3 15.05 12.6875 14.925 13.0875C14.775 13.4875 14.5125 13.775 14.1375 13.95C13.7625 14.125 13.375 14.1375 12.975 13.9875C12.45 13.7875 11.9685 13.519 11.5305 13.182C11.0925 12.845 10.7365 12.451 10.4625 12C9.6625 12.025 8.969 12.3315 8.382 12.9195C7.795 13.5075 7.501 14.201 7.5 15C7.5 15.825 7.794 16.5315 8.382 17.1195C8.97 17.7075 9.676 18.001 10.5 18C10.925 18 11.2815 18.144 11.5695 18.432C11.8575 18.72 12.001 19.076 12 19.5C12 19.925 11.856 20.2815 11.568 20.5695C11.28 20.8575 10.924 21.001 10.5 21C9.975 21 9.469 20.9375 8.982 20.8125C8.495 20.6875 8.0385 20.5 7.6125 20.25C7.5625 20.375 7.531 20.5 7.518 20.625C7.505 20.75 7.499 20.875 7.5 21C7.5 21.825 7.794 22.5315 8.382 23.1195C8.97 23.7075 9.676 24.001 10.5 24C11 24 11.4625 23.8935 11.8875 23.6805C12.3125 23.4675 12.6625 23.1615 12.9375 22.7625C13.1875 22.4125 13.5125 22.206 13.9125 22.143C14.3125 22.08 14.6875 22.174 15.0375 22.425C15.3875 22.675 15.594 23 15.657 23.4C15.72 23.8 15.626 24.175 15.375 24.525C15.025 25 14.625 25.4125 14.175 25.7625C13.725 26.1125 13.2375 26.3875 12.7125 26.5875C12.7375 27.0875 12.9375 27.5315 13.3125 27.9195C13.6875 28.3075 14.125 28.501 14.625 28.5C15.15 28.5 15.594 28.3185 15.957 27.9555C16.32 27.5925 16.501 27.149 16.5 26.625Z"
                    fill="#FFB637"
                  />
                </svg>
                Training
              </h3>
              <p>
                Deliver highly engaging and interactive training to your
                organization that a learner can explore anytime, anywhere.
              </p>
              <div className="section1-container-left-btns__main">
                <button type="button" className="btn-get-start">
                  Get Started
                </button>
                <button className="btn-book-a-demo" type="button">
                  Book a Demo
                </button>
              </div>
            </div>
            <div className="section7-container-right__main">
              <img src="/img/browser.png" alt="img" />
            </div>
          </div>
          <div id="tab4" className="section7-container__main">
            <div className="section7-container-left__main">
              <h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M14.625 31.5C13.35 31.5 12.25 31.056 11.325 30.168C10.4 29.28 9.875 28.212 9.75 26.964C8.25 26.763 7 26.1 6 24.975C5 23.85 4.5 22.525 4.5 21C4.5 20.475 4.569 19.9565 4.707 19.4445C4.845 18.9325 5.051 18.451 5.325 18C5.05 17.55 4.844 17.075 4.707 16.575C4.57 16.075 4.501 15.55 4.5 15C4.5 13.475 5 12.156 6 11.043C7 9.93 8.2375 9.274 9.7125 9.075C9.7875 7.8 10.3 6.7185 11.25 5.8305C12.2 4.9425 13.325 4.499 14.625 4.5C15.275 4.5 15.8815 4.625 16.4445 4.875C17.0075 5.125 17.526 5.4625 18 5.8875C18.45 5.4625 18.9625 5.125 19.5375 4.875C20.1125 4.625 20.725 4.5 21.375 4.5C22.675 4.5 23.794 4.9375 24.732 5.8125C25.67 6.6875 26.176 7.7625 26.25 9.0375C27.725 9.2375 28.969 9.9 29.982 11.025C30.995 12.15 31.501 13.475 31.5 15C31.5 15.55 31.431 16.075 31.293 16.575C31.155 17.075 30.949 17.55 30.675 18C30.95 18.45 31.1565 18.9315 31.2945 19.4445C31.4325 19.9575 31.501 20.476 31.5 21C31.5 22.55 30.994 23.8815 29.982 24.9945C28.97 26.1075 27.7135 26.7635 26.2125 26.9625C26.0875 28.2125 25.5685 29.2815 24.6555 30.1695C23.7425 31.0575 22.649 31.501 21.375 31.5C20.75 31.5 20.1435 31.381 19.5555 31.143C18.9675 30.905 18.449 30.574 18 30.15C17.525 30.575 17 30.9065 16.425 31.1445C15.85 31.3825 15.25 31.501 14.625 31.5ZM19.5 9.375V26.625C19.5 27.15 19.6815 27.594 20.0445 27.957C20.4075 28.32 20.851 28.501 21.375 28.5C21.875 28.5 22.3065 28.3 22.6695 27.9C23.0325 27.5 23.226 27.05 23.25 26.55C22.725 26.35 22.2435 26.0815 21.8055 25.7445C21.3675 25.4075 20.974 25.001 20.625 24.525C20.375 24.175 20.281 23.8 20.343 23.4C20.405 23 20.6115 22.675 20.9625 22.425C21.3125 22.175 21.6875 22.0815 22.0875 22.1445C22.4875 22.2075 22.8125 22.4135 23.0625 22.7625C23.3375 23.1625 23.6875 23.469 24.1125 23.682C24.5375 23.895 25 24.001 25.5 24C26.325 24 27.0315 23.706 27.6195 23.118C28.2075 22.53 28.501 21.824 28.5 21C28.5 20.875 28.4935 20.75 28.4805 20.625C28.4675 20.5 28.4365 20.375 28.3875 20.25C27.9625 20.5 27.506 20.6875 27.018 20.8125C26.53 20.9375 26.024 21 25.5 21C25.075 21 24.7185 20.856 24.4305 20.568C24.1425 20.28 23.999 19.924 24 19.5C24 19.075 24.144 18.7185 24.432 18.4305C24.72 18.1425 25.076 17.999 25.5 18C26.325 18 27.0315 17.706 27.6195 17.118C28.2075 16.53 28.501 15.824 28.5 15C28.5 14.175 28.206 13.475 27.618 12.9C27.03 12.325 26.324 12.025 25.5 12C25.225 12.45 24.8685 12.844 24.4305 13.182C23.9925 13.52 23.5115 13.7885 22.9875 13.9875C22.5875 14.1375 22.2 14.125 21.825 13.95C21.45 13.775 21.2 13.4875 21.075 13.0875C20.95 12.6875 20.969 12.3 21.132 11.925C21.295 11.55 21.576 11.3 21.975 11.175C22.35 11.05 22.6565 10.825 22.8945 10.5C23.1325 10.175 23.251 9.8 23.25 9.375C23.25 8.85 23.069 8.4065 22.707 8.0445C22.345 7.6825 21.901 7.501 21.375 7.5C20.85 7.5 20.406 7.6815 20.043 8.0445C19.68 8.4075 19.499 8.851 19.5 9.375ZM16.5 26.625V9.375C16.5 8.85 16.3185 8.406 15.9555 8.043C15.5925 7.68 15.149 7.499 14.625 7.5C14.1 7.5 13.656 7.6815 13.293 8.0445C12.93 8.4075 12.749 8.851 12.75 9.375C12.75 9.775 12.8625 10.144 13.0875 10.482C13.3125 10.82 13.6125 11.051 13.9875 11.175C14.3875 11.3 14.675 11.55 14.85 11.925C15.025 12.3 15.05 12.6875 14.925 13.0875C14.775 13.4875 14.5125 13.775 14.1375 13.95C13.7625 14.125 13.375 14.1375 12.975 13.9875C12.45 13.7875 11.9685 13.519 11.5305 13.182C11.0925 12.845 10.7365 12.451 10.4625 12C9.6625 12.025 8.969 12.3315 8.382 12.9195C7.795 13.5075 7.501 14.201 7.5 15C7.5 15.825 7.794 16.5315 8.382 17.1195C8.97 17.7075 9.676 18.001 10.5 18C10.925 18 11.2815 18.144 11.5695 18.432C11.8575 18.72 12.001 19.076 12 19.5C12 19.925 11.856 20.2815 11.568 20.5695C11.28 20.8575 10.924 21.001 10.5 21C9.975 21 9.469 20.9375 8.982 20.8125C8.495 20.6875 8.0385 20.5 7.6125 20.25C7.5625 20.375 7.531 20.5 7.518 20.625C7.505 20.75 7.499 20.875 7.5 21C7.5 21.825 7.794 22.5315 8.382 23.1195C8.97 23.7075 9.676 24.001 10.5 24C11 24 11.4625 23.8935 11.8875 23.6805C12.3125 23.4675 12.6625 23.1615 12.9375 22.7625C13.1875 22.4125 13.5125 22.206 13.9125 22.143C14.3125 22.08 14.6875 22.174 15.0375 22.425C15.3875 22.675 15.594 23 15.657 23.4C15.72 23.8 15.626 24.175 15.375 24.525C15.025 25 14.625 25.4125 14.175 25.7625C13.725 26.1125 13.2375 26.3875 12.7125 26.5875C12.7375 27.0875 12.9375 27.5315 13.3125 27.9195C13.6875 28.3075 14.125 28.501 14.625 28.5C15.15 28.5 15.594 28.3185 15.957 27.9555C16.32 27.5925 16.501 27.149 16.5 26.625Z"
                    fill="#FFB637"
                  />
                </svg>
                Training
              </h3>
              <p>eliver highly engaging</p>
              <div className="section1-container-left-btns__main">
                <button type="button" className="btn-get-start">
                  Get Started
                </button>
                <button className="btn-book-a-demo" type="button">
                  Book a Demo
                </button>
              </div>
            </div>
            <div className="section7-container-right__main">
              <img src="/img/browser.png" alt="img" />
            </div>
          </div>
          <div id="tab5" className="section7-container__main">
            <div className="section7-container-left__main">
              <h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M14.625 31.5C13.35 31.5 12.25 31.056 11.325 30.168C10.4 29.28 9.875 28.212 9.75 26.964C8.25 26.763 7 26.1 6 24.975C5 23.85 4.5 22.525 4.5 21C4.5 20.475 4.569 19.9565 4.707 19.4445C4.845 18.9325 5.051 18.451 5.325 18C5.05 17.55 4.844 17.075 4.707 16.575C4.57 16.075 4.501 15.55 4.5 15C4.5 13.475 5 12.156 6 11.043C7 9.93 8.2375 9.274 9.7125 9.075C9.7875 7.8 10.3 6.7185 11.25 5.8305C12.2 4.9425 13.325 4.499 14.625 4.5C15.275 4.5 15.8815 4.625 16.4445 4.875C17.0075 5.125 17.526 5.4625 18 5.8875C18.45 5.4625 18.9625 5.125 19.5375 4.875C20.1125 4.625 20.725 4.5 21.375 4.5C22.675 4.5 23.794 4.9375 24.732 5.8125C25.67 6.6875 26.176 7.7625 26.25 9.0375C27.725 9.2375 28.969 9.9 29.982 11.025C30.995 12.15 31.501 13.475 31.5 15C31.5 15.55 31.431 16.075 31.293 16.575C31.155 17.075 30.949 17.55 30.675 18C30.95 18.45 31.1565 18.9315 31.2945 19.4445C31.4325 19.9575 31.501 20.476 31.5 21C31.5 22.55 30.994 23.8815 29.982 24.9945C28.97 26.1075 27.7135 26.7635 26.2125 26.9625C26.0875 28.2125 25.5685 29.2815 24.6555 30.1695C23.7425 31.0575 22.649 31.501 21.375 31.5C20.75 31.5 20.1435 31.381 19.5555 31.143C18.9675 30.905 18.449 30.574 18 30.15C17.525 30.575 17 30.9065 16.425 31.1445C15.85 31.3825 15.25 31.501 14.625 31.5ZM19.5 9.375V26.625C19.5 27.15 19.6815 27.594 20.0445 27.957C20.4075 28.32 20.851 28.501 21.375 28.5C21.875 28.5 22.3065 28.3 22.6695 27.9C23.0325 27.5 23.226 27.05 23.25 26.55C22.725 26.35 22.2435 26.0815 21.8055 25.7445C21.3675 25.4075 20.974 25.001 20.625 24.525C20.375 24.175 20.281 23.8 20.343 23.4C20.405 23 20.6115 22.675 20.9625 22.425C21.3125 22.175 21.6875 22.0815 22.0875 22.1445C22.4875 22.2075 22.8125 22.4135 23.0625 22.7625C23.3375 23.1625 23.6875 23.469 24.1125 23.682C24.5375 23.895 25 24.001 25.5 24C26.325 24 27.0315 23.706 27.6195 23.118C28.2075 22.53 28.501 21.824 28.5 21C28.5 20.875 28.4935 20.75 28.4805 20.625C28.4675 20.5 28.4365 20.375 28.3875 20.25C27.9625 20.5 27.506 20.6875 27.018 20.8125C26.53 20.9375 26.024 21 25.5 21C25.075 21 24.7185 20.856 24.4305 20.568C24.1425 20.28 23.999 19.924 24 19.5C24 19.075 24.144 18.7185 24.432 18.4305C24.72 18.1425 25.076 17.999 25.5 18C26.325 18 27.0315 17.706 27.6195 17.118C28.2075 16.53 28.501 15.824 28.5 15C28.5 14.175 28.206 13.475 27.618 12.9C27.03 12.325 26.324 12.025 25.5 12C25.225 12.45 24.8685 12.844 24.4305 13.182C23.9925 13.52 23.5115 13.7885 22.9875 13.9875C22.5875 14.1375 22.2 14.125 21.825 13.95C21.45 13.775 21.2 13.4875 21.075 13.0875C20.95 12.6875 20.969 12.3 21.132 11.925C21.295 11.55 21.576 11.3 21.975 11.175C22.35 11.05 22.6565 10.825 22.8945 10.5C23.1325 10.175 23.251 9.8 23.25 9.375C23.25 8.85 23.069 8.4065 22.707 8.0445C22.345 7.6825 21.901 7.501 21.375 7.5C20.85 7.5 20.406 7.6815 20.043 8.0445C19.68 8.4075 19.499 8.851 19.5 9.375ZM16.5 26.625V9.375C16.5 8.85 16.3185 8.406 15.9555 8.043C15.5925 7.68 15.149 7.499 14.625 7.5C14.1 7.5 13.656 7.6815 13.293 8.0445C12.93 8.4075 12.749 8.851 12.75 9.375C12.75 9.775 12.8625 10.144 13.0875 10.482C13.3125 10.82 13.6125 11.051 13.9875 11.175C14.3875 11.3 14.675 11.55 14.85 11.925C15.025 12.3 15.05 12.6875 14.925 13.0875C14.775 13.4875 14.5125 13.775 14.1375 13.95C13.7625 14.125 13.375 14.1375 12.975 13.9875C12.45 13.7875 11.9685 13.519 11.5305 13.182C11.0925 12.845 10.7365 12.451 10.4625 12C9.6625 12.025 8.969 12.3315 8.382 12.9195C7.795 13.5075 7.501 14.201 7.5 15C7.5 15.825 7.794 16.5315 8.382 17.1195C8.97 17.7075 9.676 18.001 10.5 18C10.925 18 11.2815 18.144 11.5695 18.432C11.8575 18.72 12.001 19.076 12 19.5C12 19.925 11.856 20.2815 11.568 20.5695C11.28 20.8575 10.924 21.001 10.5 21C9.975 21 9.469 20.9375 8.982 20.8125C8.495 20.6875 8.0385 20.5 7.6125 20.25C7.5625 20.375 7.531 20.5 7.518 20.625C7.505 20.75 7.499 20.875 7.5 21C7.5 21.825 7.794 22.5315 8.382 23.1195C8.97 23.7075 9.676 24.001 10.5 24C11 24 11.4625 23.8935 11.8875 23.6805C12.3125 23.4675 12.6625 23.1615 12.9375 22.7625C13.1875 22.4125 13.5125 22.206 13.9125 22.143C14.3125 22.08 14.6875 22.174 15.0375 22.425C15.3875 22.675 15.594 23 15.657 23.4C15.72 23.8 15.626 24.175 15.375 24.525C15.025 25 14.625 25.4125 14.175 25.7625C13.725 26.1125 13.2375 26.3875 12.7125 26.5875C12.7375 27.0875 12.9375 27.5315 13.3125 27.9195C13.6875 28.3075 14.125 28.501 14.625 28.5C15.15 28.5 15.594 28.3185 15.957 27.9555C16.32 27.5925 16.501 27.149 16.5 26.625Z"
                    fill="#FFB637"
                  />
                </svg>
                Training
              </h3>
              <p>
                Deliver highly engaging and interactive training to your
                organization that a learner can explore anytime, anywhere.
              </p>
              <div className="section1-container-left-btns__main">
                <button type="button" className="btn-get-start">
                  Get Started
                </button>
                <button className="btn-book-a-demo" type="button">
                  Book a Demo
                </button>
              </div>
            </div>
            <div className="section7-container-right__main">
              <img src="/img/browser.png" alt="img" />
            </div>
          </div>
          <div id="tab6" className="section7-container__main">
            <div className="section7-container-left__main">
              <h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M14.625 31.5C13.35 31.5 12.25 31.056 11.325 30.168C10.4 29.28 9.875 28.212 9.75 26.964C8.25 26.763 7 26.1 6 24.975C5 23.85 4.5 22.525 4.5 21C4.5 20.475 4.569 19.9565 4.707 19.4445C4.845 18.9325 5.051 18.451 5.325 18C5.05 17.55 4.844 17.075 4.707 16.575C4.57 16.075 4.501 15.55 4.5 15C4.5 13.475 5 12.156 6 11.043C7 9.93 8.2375 9.274 9.7125 9.075C9.7875 7.8 10.3 6.7185 11.25 5.8305C12.2 4.9425 13.325 4.499 14.625 4.5C15.275 4.5 15.8815 4.625 16.4445 4.875C17.0075 5.125 17.526 5.4625 18 5.8875C18.45 5.4625 18.9625 5.125 19.5375 4.875C20.1125 4.625 20.725 4.5 21.375 4.5C22.675 4.5 23.794 4.9375 24.732 5.8125C25.67 6.6875 26.176 7.7625 26.25 9.0375C27.725 9.2375 28.969 9.9 29.982 11.025C30.995 12.15 31.501 13.475 31.5 15C31.5 15.55 31.431 16.075 31.293 16.575C31.155 17.075 30.949 17.55 30.675 18C30.95 18.45 31.1565 18.9315 31.2945 19.4445C31.4325 19.9575 31.501 20.476 31.5 21C31.5 22.55 30.994 23.8815 29.982 24.9945C28.97 26.1075 27.7135 26.7635 26.2125 26.9625C26.0875 28.2125 25.5685 29.2815 24.6555 30.1695C23.7425 31.0575 22.649 31.501 21.375 31.5C20.75 31.5 20.1435 31.381 19.5555 31.143C18.9675 30.905 18.449 30.574 18 30.15C17.525 30.575 17 30.9065 16.425 31.1445C15.85 31.3825 15.25 31.501 14.625 31.5ZM19.5 9.375V26.625C19.5 27.15 19.6815 27.594 20.0445 27.957C20.4075 28.32 20.851 28.501 21.375 28.5C21.875 28.5 22.3065 28.3 22.6695 27.9C23.0325 27.5 23.226 27.05 23.25 26.55C22.725 26.35 22.2435 26.0815 21.8055 25.7445C21.3675 25.4075 20.974 25.001 20.625 24.525C20.375 24.175 20.281 23.8 20.343 23.4C20.405 23 20.6115 22.675 20.9625 22.425C21.3125 22.175 21.6875 22.0815 22.0875 22.1445C22.4875 22.2075 22.8125 22.4135 23.0625 22.7625C23.3375 23.1625 23.6875 23.469 24.1125 23.682C24.5375 23.895 25 24.001 25.5 24C26.325 24 27.0315 23.706 27.6195 23.118C28.2075 22.53 28.501 21.824 28.5 21C28.5 20.875 28.4935 20.75 28.4805 20.625C28.4675 20.5 28.4365 20.375 28.3875 20.25C27.9625 20.5 27.506 20.6875 27.018 20.8125C26.53 20.9375 26.024 21 25.5 21C25.075 21 24.7185 20.856 24.4305 20.568C24.1425 20.28 23.999 19.924 24 19.5C24 19.075 24.144 18.7185 24.432 18.4305C24.72 18.1425 25.076 17.999 25.5 18C26.325 18 27.0315 17.706 27.6195 17.118C28.2075 16.53 28.501 15.824 28.5 15C28.5 14.175 28.206 13.475 27.618 12.9C27.03 12.325 26.324 12.025 25.5 12C25.225 12.45 24.8685 12.844 24.4305 13.182C23.9925 13.52 23.5115 13.7885 22.9875 13.9875C22.5875 14.1375 22.2 14.125 21.825 13.95C21.45 13.775 21.2 13.4875 21.075 13.0875C20.95 12.6875 20.969 12.3 21.132 11.925C21.295 11.55 21.576 11.3 21.975 11.175C22.35 11.05 22.6565 10.825 22.8945 10.5C23.1325 10.175 23.251 9.8 23.25 9.375C23.25 8.85 23.069 8.4065 22.707 8.0445C22.345 7.6825 21.901 7.501 21.375 7.5C20.85 7.5 20.406 7.6815 20.043 8.0445C19.68 8.4075 19.499 8.851 19.5 9.375ZM16.5 26.625V9.375C16.5 8.85 16.3185 8.406 15.9555 8.043C15.5925 7.68 15.149 7.499 14.625 7.5C14.1 7.5 13.656 7.6815 13.293 8.0445C12.93 8.4075 12.749 8.851 12.75 9.375C12.75 9.775 12.8625 10.144 13.0875 10.482C13.3125 10.82 13.6125 11.051 13.9875 11.175C14.3875 11.3 14.675 11.55 14.85 11.925C15.025 12.3 15.05 12.6875 14.925 13.0875C14.775 13.4875 14.5125 13.775 14.1375 13.95C13.7625 14.125 13.375 14.1375 12.975 13.9875C12.45 13.7875 11.9685 13.519 11.5305 13.182C11.0925 12.845 10.7365 12.451 10.4625 12C9.6625 12.025 8.969 12.3315 8.382 12.9195C7.795 13.5075 7.501 14.201 7.5 15C7.5 15.825 7.794 16.5315 8.382 17.1195C8.97 17.7075 9.676 18.001 10.5 18C10.925 18 11.2815 18.144 11.5695 18.432C11.8575 18.72 12.001 19.076 12 19.5C12 19.925 11.856 20.2815 11.568 20.5695C11.28 20.8575 10.924 21.001 10.5 21C9.975 21 9.469 20.9375 8.982 20.8125C8.495 20.6875 8.0385 20.5 7.6125 20.25C7.5625 20.375 7.531 20.5 7.518 20.625C7.505 20.75 7.499 20.875 7.5 21C7.5 21.825 7.794 22.5315 8.382 23.1195C8.97 23.7075 9.676 24.001 10.5 24C11 24 11.4625 23.8935 11.8875 23.6805C12.3125 23.4675 12.6625 23.1615 12.9375 22.7625C13.1875 22.4125 13.5125 22.206 13.9125 22.143C14.3125 22.08 14.6875 22.174 15.0375 22.425C15.3875 22.675 15.594 23 15.657 23.4C15.72 23.8 15.626 24.175 15.375 24.525C15.025 25 14.625 25.4125 14.175 25.7625C13.725 26.1125 13.2375 26.3875 12.7125 26.5875C12.7375 27.0875 12.9375 27.5315 13.3125 27.9195C13.6875 28.3075 14.125 28.501 14.625 28.5C15.15 28.5 15.594 28.3185 15.957 27.9555C16.32 27.5925 16.501 27.149 16.5 26.625Z"
                    fill="#FFB637"
                  />
                </svg>
                Training
              </h3>
              <p>
                Deliver highly engaging and interactive training to your
                organization that a learner can explore anytime, anywhere.
              </p>
              <div className="section1-container-left-btns__main">
                <button type="button" className="btn-get-start">
                  Get Started
                </button>
                <button className="btn-book-a-demo" type="button">
                  Book a Demo
                </button>
              </div>
            </div>
            <div className="section7-container-right__main">
              <img src="/img/browser.png" alt="img" />
            </div>
          </div>
          <div id="tab7" className="section7-container__main">
            <div className="section7-container-left__main">
              <h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M14.625 31.5C13.35 31.5 12.25 31.056 11.325 30.168C10.4 29.28 9.875 28.212 9.75 26.964C8.25 26.763 7 26.1 6 24.975C5 23.85 4.5 22.525 4.5 21C4.5 20.475 4.569 19.9565 4.707 19.4445C4.845 18.9325 5.051 18.451 5.325 18C5.05 17.55 4.844 17.075 4.707 16.575C4.57 16.075 4.501 15.55 4.5 15C4.5 13.475 5 12.156 6 11.043C7 9.93 8.2375 9.274 9.7125 9.075C9.7875 7.8 10.3 6.7185 11.25 5.8305C12.2 4.9425 13.325 4.499 14.625 4.5C15.275 4.5 15.8815 4.625 16.4445 4.875C17.0075 5.125 17.526 5.4625 18 5.8875C18.45 5.4625 18.9625 5.125 19.5375 4.875C20.1125 4.625 20.725 4.5 21.375 4.5C22.675 4.5 23.794 4.9375 24.732 5.8125C25.67 6.6875 26.176 7.7625 26.25 9.0375C27.725 9.2375 28.969 9.9 29.982 11.025C30.995 12.15 31.501 13.475 31.5 15C31.5 15.55 31.431 16.075 31.293 16.575C31.155 17.075 30.949 17.55 30.675 18C30.95 18.45 31.1565 18.9315 31.2945 19.4445C31.4325 19.9575 31.501 20.476 31.5 21C31.5 22.55 30.994 23.8815 29.982 24.9945C28.97 26.1075 27.7135 26.7635 26.2125 26.9625C26.0875 28.2125 25.5685 29.2815 24.6555 30.1695C23.7425 31.0575 22.649 31.501 21.375 31.5C20.75 31.5 20.1435 31.381 19.5555 31.143C18.9675 30.905 18.449 30.574 18 30.15C17.525 30.575 17 30.9065 16.425 31.1445C15.85 31.3825 15.25 31.501 14.625 31.5ZM19.5 9.375V26.625C19.5 27.15 19.6815 27.594 20.0445 27.957C20.4075 28.32 20.851 28.501 21.375 28.5C21.875 28.5 22.3065 28.3 22.6695 27.9C23.0325 27.5 23.226 27.05 23.25 26.55C22.725 26.35 22.2435 26.0815 21.8055 25.7445C21.3675 25.4075 20.974 25.001 20.625 24.525C20.375 24.175 20.281 23.8 20.343 23.4C20.405 23 20.6115 22.675 20.9625 22.425C21.3125 22.175 21.6875 22.0815 22.0875 22.1445C22.4875 22.2075 22.8125 22.4135 23.0625 22.7625C23.3375 23.1625 23.6875 23.469 24.1125 23.682C24.5375 23.895 25 24.001 25.5 24C26.325 24 27.0315 23.706 27.6195 23.118C28.2075 22.53 28.501 21.824 28.5 21C28.5 20.875 28.4935 20.75 28.4805 20.625C28.4675 20.5 28.4365 20.375 28.3875 20.25C27.9625 20.5 27.506 20.6875 27.018 20.8125C26.53 20.9375 26.024 21 25.5 21C25.075 21 24.7185 20.856 24.4305 20.568C24.1425 20.28 23.999 19.924 24 19.5C24 19.075 24.144 18.7185 24.432 18.4305C24.72 18.1425 25.076 17.999 25.5 18C26.325 18 27.0315 17.706 27.6195 17.118C28.2075 16.53 28.501 15.824 28.5 15C28.5 14.175 28.206 13.475 27.618 12.9C27.03 12.325 26.324 12.025 25.5 12C25.225 12.45 24.8685 12.844 24.4305 13.182C23.9925 13.52 23.5115 13.7885 22.9875 13.9875C22.5875 14.1375 22.2 14.125 21.825 13.95C21.45 13.775 21.2 13.4875 21.075 13.0875C20.95 12.6875 20.969 12.3 21.132 11.925C21.295 11.55 21.576 11.3 21.975 11.175C22.35 11.05 22.6565 10.825 22.8945 10.5C23.1325 10.175 23.251 9.8 23.25 9.375C23.25 8.85 23.069 8.4065 22.707 8.0445C22.345 7.6825 21.901 7.501 21.375 7.5C20.85 7.5 20.406 7.6815 20.043 8.0445C19.68 8.4075 19.499 8.851 19.5 9.375ZM16.5 26.625V9.375C16.5 8.85 16.3185 8.406 15.9555 8.043C15.5925 7.68 15.149 7.499 14.625 7.5C14.1 7.5 13.656 7.6815 13.293 8.0445C12.93 8.4075 12.749 8.851 12.75 9.375C12.75 9.775 12.8625 10.144 13.0875 10.482C13.3125 10.82 13.6125 11.051 13.9875 11.175C14.3875 11.3 14.675 11.55 14.85 11.925C15.025 12.3 15.05 12.6875 14.925 13.0875C14.775 13.4875 14.5125 13.775 14.1375 13.95C13.7625 14.125 13.375 14.1375 12.975 13.9875C12.45 13.7875 11.9685 13.519 11.5305 13.182C11.0925 12.845 10.7365 12.451 10.4625 12C9.6625 12.025 8.969 12.3315 8.382 12.9195C7.795 13.5075 7.501 14.201 7.5 15C7.5 15.825 7.794 16.5315 8.382 17.1195C8.97 17.7075 9.676 18.001 10.5 18C10.925 18 11.2815 18.144 11.5695 18.432C11.8575 18.72 12.001 19.076 12 19.5C12 19.925 11.856 20.2815 11.568 20.5695C11.28 20.8575 10.924 21.001 10.5 21C9.975 21 9.469 20.9375 8.982 20.8125C8.495 20.6875 8.0385 20.5 7.6125 20.25C7.5625 20.375 7.531 20.5 7.518 20.625C7.505 20.75 7.499 20.875 7.5 21C7.5 21.825 7.794 22.5315 8.382 23.1195C8.97 23.7075 9.676 24.001 10.5 24C11 24 11.4625 23.8935 11.8875 23.6805C12.3125 23.4675 12.6625 23.1615 12.9375 22.7625C13.1875 22.4125 13.5125 22.206 13.9125 22.143C14.3125 22.08 14.6875 22.174 15.0375 22.425C15.3875 22.675 15.594 23 15.657 23.4C15.72 23.8 15.626 24.175 15.375 24.525C15.025 25 14.625 25.4125 14.175 25.7625C13.725 26.1125 13.2375 26.3875 12.7125 26.5875C12.7375 27.0875 12.9375 27.5315 13.3125 27.9195C13.6875 28.3075 14.125 28.501 14.625 28.5C15.15 28.5 15.594 28.3185 15.957 27.9555C16.32 27.5925 16.501 27.149 16.5 26.625Z"
                    fill="#FFB637"
                  />
                </svg>
                Training
              </h3>
              <p>
                Deliver highly engaging and interactive training to your
                organization that a learner can explore anytime, anywhere.
              </p>
              <div className="section1-container-left-btns__main">
                <button type="button" className="btn-get-start">
                  Get Started
                </button>
                <button className="btn-book-a-demo" type="button">
                  Book a Demo
                </button>
              </div>
            </div>
            <div className="section7-container-right__main">
              <img src="/img/browser.png" alt="img" />
            </div>
          </div>
          <div id="tab8" className="section7-container__main">
            <div className="section7-container-left__main">
              <h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M14.625 31.5C13.35 31.5 12.25 31.056 11.325 30.168C10.4 29.28 9.875 28.212 9.75 26.964C8.25 26.763 7 26.1 6 24.975C5 23.85 4.5 22.525 4.5 21C4.5 20.475 4.569 19.9565 4.707 19.4445C4.845 18.9325 5.051 18.451 5.325 18C5.05 17.55 4.844 17.075 4.707 16.575C4.57 16.075 4.501 15.55 4.5 15C4.5 13.475 5 12.156 6 11.043C7 9.93 8.2375 9.274 9.7125 9.075C9.7875 7.8 10.3 6.7185 11.25 5.8305C12.2 4.9425 13.325 4.499 14.625 4.5C15.275 4.5 15.8815 4.625 16.4445 4.875C17.0075 5.125 17.526 5.4625 18 5.8875C18.45 5.4625 18.9625 5.125 19.5375 4.875C20.1125 4.625 20.725 4.5 21.375 4.5C22.675 4.5 23.794 4.9375 24.732 5.8125C25.67 6.6875 26.176 7.7625 26.25 9.0375C27.725 9.2375 28.969 9.9 29.982 11.025C30.995 12.15 31.501 13.475 31.5 15C31.5 15.55 31.431 16.075 31.293 16.575C31.155 17.075 30.949 17.55 30.675 18C30.95 18.45 31.1565 18.9315 31.2945 19.4445C31.4325 19.9575 31.501 20.476 31.5 21C31.5 22.55 30.994 23.8815 29.982 24.9945C28.97 26.1075 27.7135 26.7635 26.2125 26.9625C26.0875 28.2125 25.5685 29.2815 24.6555 30.1695C23.7425 31.0575 22.649 31.501 21.375 31.5C20.75 31.5 20.1435 31.381 19.5555 31.143C18.9675 30.905 18.449 30.574 18 30.15C17.525 30.575 17 30.9065 16.425 31.1445C15.85 31.3825 15.25 31.501 14.625 31.5ZM19.5 9.375V26.625C19.5 27.15 19.6815 27.594 20.0445 27.957C20.4075 28.32 20.851 28.501 21.375 28.5C21.875 28.5 22.3065 28.3 22.6695 27.9C23.0325 27.5 23.226 27.05 23.25 26.55C22.725 26.35 22.2435 26.0815 21.8055 25.7445C21.3675 25.4075 20.974 25.001 20.625 24.525C20.375 24.175 20.281 23.8 20.343 23.4C20.405 23 20.6115 22.675 20.9625 22.425C21.3125 22.175 21.6875 22.0815 22.0875 22.1445C22.4875 22.2075 22.8125 22.4135 23.0625 22.7625C23.3375 23.1625 23.6875 23.469 24.1125 23.682C24.5375 23.895 25 24.001 25.5 24C26.325 24 27.0315 23.706 27.6195 23.118C28.2075 22.53 28.501 21.824 28.5 21C28.5 20.875 28.4935 20.75 28.4805 20.625C28.4675 20.5 28.4365 20.375 28.3875 20.25C27.9625 20.5 27.506 20.6875 27.018 20.8125C26.53 20.9375 26.024 21 25.5 21C25.075 21 24.7185 20.856 24.4305 20.568C24.1425 20.28 23.999 19.924 24 19.5C24 19.075 24.144 18.7185 24.432 18.4305C24.72 18.1425 25.076 17.999 25.5 18C26.325 18 27.0315 17.706 27.6195 17.118C28.2075 16.53 28.501 15.824 28.5 15C28.5 14.175 28.206 13.475 27.618 12.9C27.03 12.325 26.324 12.025 25.5 12C25.225 12.45 24.8685 12.844 24.4305 13.182C23.9925 13.52 23.5115 13.7885 22.9875 13.9875C22.5875 14.1375 22.2 14.125 21.825 13.95C21.45 13.775 21.2 13.4875 21.075 13.0875C20.95 12.6875 20.969 12.3 21.132 11.925C21.295 11.55 21.576 11.3 21.975 11.175C22.35 11.05 22.6565 10.825 22.8945 10.5C23.1325 10.175 23.251 9.8 23.25 9.375C23.25 8.85 23.069 8.4065 22.707 8.0445C22.345 7.6825 21.901 7.501 21.375 7.5C20.85 7.5 20.406 7.6815 20.043 8.0445C19.68 8.4075 19.499 8.851 19.5 9.375ZM16.5 26.625V9.375C16.5 8.85 16.3185 8.406 15.9555 8.043C15.5925 7.68 15.149 7.499 14.625 7.5C14.1 7.5 13.656 7.6815 13.293 8.0445C12.93 8.4075 12.749 8.851 12.75 9.375C12.75 9.775 12.8625 10.144 13.0875 10.482C13.3125 10.82 13.6125 11.051 13.9875 11.175C14.3875 11.3 14.675 11.55 14.85 11.925C15.025 12.3 15.05 12.6875 14.925 13.0875C14.775 13.4875 14.5125 13.775 14.1375 13.95C13.7625 14.125 13.375 14.1375 12.975 13.9875C12.45 13.7875 11.9685 13.519 11.5305 13.182C11.0925 12.845 10.7365 12.451 10.4625 12C9.6625 12.025 8.969 12.3315 8.382 12.9195C7.795 13.5075 7.501 14.201 7.5 15C7.5 15.825 7.794 16.5315 8.382 17.1195C8.97 17.7075 9.676 18.001 10.5 18C10.925 18 11.2815 18.144 11.5695 18.432C11.8575 18.72 12.001 19.076 12 19.5C12 19.925 11.856 20.2815 11.568 20.5695C11.28 20.8575 10.924 21.001 10.5 21C9.975 21 9.469 20.9375 8.982 20.8125C8.495 20.6875 8.0385 20.5 7.6125 20.25C7.5625 20.375 7.531 20.5 7.518 20.625C7.505 20.75 7.499 20.875 7.5 21C7.5 21.825 7.794 22.5315 8.382 23.1195C8.97 23.7075 9.676 24.001 10.5 24C11 24 11.4625 23.8935 11.8875 23.6805C12.3125 23.4675 12.6625 23.1615 12.9375 22.7625C13.1875 22.4125 13.5125 22.206 13.9125 22.143C14.3125 22.08 14.6875 22.174 15.0375 22.425C15.3875 22.675 15.594 23 15.657 23.4C15.72 23.8 15.626 24.175 15.375 24.525C15.025 25 14.625 25.4125 14.175 25.7625C13.725 26.1125 13.2375 26.3875 12.7125 26.5875C12.7375 27.0875 12.9375 27.5315 13.3125 27.9195C13.6875 28.3075 14.125 28.501 14.625 28.5C15.15 28.5 15.594 28.3185 15.957 27.9555C16.32 27.5925 16.501 27.149 16.5 26.625Z"
                    fill="#FFB637"
                  />
                </svg>
                Training
              </h3>
              <p>
                Deliver highly engaging and interactive training to your
                organization that a learner can explore anytime, anywhere.
              </p>
              <div className="section1-container-left-btns__main">
                <button type="button" className="btn-get-start">
                  Get Started
                </button>
                <button className="btn-book-a-demo" type="button">
                  Book a Demo
                </button>
              </div>
            </div>
            <div className="section7-container-right__main">
              <img src="/img/browser.png" alt="img" />
            </div>
          </div>
        </div>
      </section>
      {/* section8 */}
      <section className="section8__main">
        <div className="container">
          <div className="section8-container__main">
            <p className="section8-container-left__main">
              The right learning experience makes a difference
            </p>
            <div className="section8-container-right__main">
              <div className="section8-container-block__main">
                <div className="section8-container-block-top__main">
                  <div className="section8-container-block-top-el__main">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M4.49984 28.8333C4.19428 28.5278 4.0415 28.1456 4.0415 27.6867C4.0415 27.2278 4.19428 26.8322 4.49984 26.5L14.4998 16.4167C14.6665 16.2778 14.8471 16.1667 15.0415 16.0833C15.2359 16 15.4443 15.9583 15.6665 15.9583C15.8887 15.9583 16.1037 16 16.3115 16.0833C16.5193 16.1667 16.6932 16.2778 16.8332 16.4167L22.3332 21.9167L30.9998 13.3333H28.3332C27.8609 13.3333 27.4648 13.1733 27.1448 12.8533C26.8248 12.5333 26.6654 12.1378 26.6665 11.6667C26.6665 11.1945 26.8265 10.7983 27.1465 10.4783C27.4665 10.1583 27.8621 9.99889 28.3332 10H34.9998C35.4721 10 35.8682 10.16 36.1882 10.48C36.5082 10.8 36.6676 11.1956 36.6665 11.6667V18.3333C36.6665 18.8056 36.5065 19.2017 36.1865 19.5217C35.8665 19.8417 35.4709 20.0011 34.9998 20C34.5276 20 34.1315 19.84 33.8115 19.52C33.4915 19.2 33.3321 18.8044 33.3332 18.3333V15.6667L23.4998 25.5C23.3332 25.6667 23.1526 25.785 22.9582 25.855C22.7637 25.925 22.5554 25.9595 22.3332 25.9583C22.1109 25.9583 21.9026 25.9239 21.7082 25.855C21.5137 25.7861 21.3332 25.6678 21.1665 25.5L15.6665 20L6.7915 28.875C6.48595 29.1806 6.11095 29.3333 5.6665 29.3333C5.22206 29.3333 4.83317 29.1667 4.49984 28.8333Z"
                        fill="#5EC3C5"
                      />
                    </svg>
                  </div>
                  <span>80%</span>
                </div>
                <p>higher retention rates</p>
              </div>
              <div className="section8-container-block__main">
                <div className="section8-container-block-top__main">
                  <div className="section8-container-block-top-el__main">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M4.49984 28.8333C4.19428 28.5278 4.0415 28.1456 4.0415 27.6867C4.0415 27.2278 4.19428 26.8322 4.49984 26.5L14.4998 16.4167C14.6665 16.2778 14.8471 16.1667 15.0415 16.0833C15.2359 16 15.4443 15.9583 15.6665 15.9583C15.8887 15.9583 16.1037 16 16.3115 16.0833C16.5193 16.1667 16.6932 16.2778 16.8332 16.4167L22.3332 21.9167L30.9998 13.3333H28.3332C27.8609 13.3333 27.4648 13.1733 27.1448 12.8533C26.8248 12.5333 26.6654 12.1378 26.6665 11.6667C26.6665 11.1945 26.8265 10.7983 27.1465 10.4783C27.4665 10.1583 27.8621 9.99889 28.3332 10H34.9998C35.4721 10 35.8682 10.16 36.1882 10.48C36.5082 10.8 36.6676 11.1956 36.6665 11.6667V18.3333C36.6665 18.8056 36.5065 19.2017 36.1865 19.5217C35.8665 19.8417 35.4709 20.0011 34.9998 20C34.5276 20 34.1315 19.84 33.8115 19.52C33.4915 19.2 33.3321 18.8044 33.3332 18.3333V15.6667L23.4998 25.5C23.3332 25.6667 23.1526 25.785 22.9582 25.855C22.7637 25.925 22.5554 25.9595 22.3332 25.9583C22.1109 25.9583 21.9026 25.9239 21.7082 25.855C21.5137 25.7861 21.3332 25.6678 21.1665 25.5L15.6665 20L6.7915 28.875C6.48595 29.1806 6.11095 29.3333 5.6665 29.3333C5.22206 29.3333 4.83317 29.1667 4.49984 28.8333Z"
                        fill="#FFB637"
                      />
                    </svg>
                  </div>
                  <span>10x</span>
                </div>
                <p>higher engagement</p>
              </div>
              <div className="section8-container-block__main">
                <div className="section8-container-block-top__main">
                  <div className="section8-container-block-top-el__main">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M4.49984 28.8333C4.19428 28.5278 4.0415 28.1456 4.0415 27.6867C4.0415 27.2278 4.19428 26.8322 4.49984 26.5L14.4998 16.4167C14.6665 16.2778 14.8471 16.1667 15.0415 16.0833C15.2359 16 15.4443 15.9583 15.6665 15.9583C15.8887 15.9583 16.1037 16 16.3115 16.0833C16.5193 16.1667 16.6932 16.2778 16.8332 16.4167L22.3332 21.9167L30.9998 13.3333H28.3332C27.8609 13.3333 27.4648 13.1733 27.1448 12.8533C26.8248 12.5333 26.6654 12.1378 26.6665 11.6667C26.6665 11.1945 26.8265 10.7983 27.1465 10.4783C27.4665 10.1583 27.8621 9.99889 28.3332 10H34.9998C35.4721 10 35.8682 10.16 36.1882 10.48C36.5082 10.8 36.6676 11.1956 36.6665 11.6667V18.3333C36.6665 18.8056 36.5065 19.2017 36.1865 19.5217C35.8665 19.8417 35.4709 20.0011 34.9998 20C34.5276 20 34.1315 19.84 33.8115 19.52C33.4915 19.2 33.3321 18.8044 33.3332 18.3333V15.6667L23.4998 25.5C23.3332 25.6667 23.1526 25.785 22.9582 25.855C22.7637 25.925 22.5554 25.9595 22.3332 25.9583C22.1109 25.9583 21.9026 25.9239 21.7082 25.855C21.5137 25.7861 21.3332 25.6678 21.1665 25.5L15.6665 20L6.7915 28.875C6.48595 29.1806 6.11095 29.3333 5.6665 29.3333C5.22206 29.3333 4.83317 29.1667 4.49984 28.8333Z"
                        fill="#B50700"
                      />
                    </svg>
                  </div>
                  <span>6x</span>
                </div>
                <p>faster to create</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section5__main">
        <div className="container">
          <div className="section5-top__main">
            <h4>
              A collection of resources for all things <br />
              e-learning using microlearning
            </h4>
          </div>
          <div className="swiper mySwiper3">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide mySwiper1-slide swiper-slide-active"
                role="group"
                aria-label="1 / 4"
                style={{ width: 384, marginRight: 32 }}
              >
                <div className="section5-block__main">
                  <img
                    src="/img/gettyimages-1392000077-612x612 1.png"
                    alt="img"
                  />
                  <div className="section5-block-text__main">
                    <h3>Announcements</h3>
                    <p>
                      Stay up-to-date with the latest Gnowbe news and updates.
                    </p>
                    <a> Explore </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide mySwiper1-slide swiper-slide-next"
                role="group"
                aria-label="2 / 4"
                style={{ width: 384, marginRight: 32 }}
              >
                <div className="section5-block__main">
                  <img
                    src="/img/gettyimages-1358427508-612x612 1.png"
                    alt="img"
                  />
                  <div className="section5-block-text__main">
                    <h3>Blog</h3>
                    <p>
                      Access informative blog posts and articles on a range of
                      topics related to online learning.
                    </p>
                    <a> Explore </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide mySwiper1-slide"
                role="group"
                aria-label="3 / 4"
                style={{ width: 384, marginRight: 32 }}
              >
                <div className="section5-block__main">
                  <img
                    src="/img/gettyimages-1384110499-612x612 1.png"
                    alt="img"
                  />
                  <div className="section5-block-text__main">
                    <h3>Case Studies</h3>
                    <p>
                      Discover how top organizations around the world are using
                      Gnowbe to achieve their learning goals.
                    </p>
                    <a> Explore </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide mySwiper1-slide"
                role="group"
                aria-label="4 / 4"
                style={{ width: 384, marginRight: 32 }}
              >
                <div className="section5-block__main">
                  <img src="/img/Rectangle 613.png" alt="img" />
                  <div className="section5-block-text__main">
                    <h3>
                      Get up and running, <br />
                      fast!
                    </h3>
                    <p>
                      Seamlessly deploy Gnowbe in your organization to create
                      onboarding, enablement and training programs in minutes,
                      without coding, special ...
                    </p>
                    <a> Explore </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mySwiper-navigation">
              <div className="swiper-button-prev swiper-button-prev-sample swiper-button-prev3" />
              <div className="swiper-pagination swiper-pagination-sample swiper-pagination3" />
              <div className="swiper-button-next swiper-button-next-sample swiper-button-next3" />
            </div>
          </div>
        </div>
      </section>
      <section className="section9__main">
        <div className="container">
          <div className="section9-container__main">
            <h3>Start exploring QRmessage today!</h3>
            <p>
              Create your free account, and start exploring QRmessage today!
            </p>
            <button type="button" className="btn-get-start">
              Get Started
            </button>
            <div className="section1-container-bottom__main section9-container-bottom__main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.36"
                  d="M10 19L7.5 13.5L2 11L7.5 8.5L10 3L12.5 8.5L18 11L12.5 13.5L10 19ZM18 21L16.75 18.25L14 17L16.75 15.75L18 13L19.25 15.75L22 17L19.25 18.25L18 21Z"
                  fill="black"
                />
              </svg>
              <h5>Free plan is free forever!</h5>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export const MainHome = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};
