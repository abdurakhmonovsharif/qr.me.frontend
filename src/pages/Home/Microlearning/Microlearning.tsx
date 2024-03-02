import React from "react";
import { Micro_icon, Micro_icon2, Micro_icon3 } from "../../../utils/icons";
import MicroImg from "../../../assets/img/gettyimages-1392000077-612x612 1.png";
import MicroImg2 from "../../../assets/img/gettyimages-1358427508-612x612 1.png";
import MicroImg3 from "../../../assets/img/gettyimages-1384110499-612x612 1.png";

export const MicroLearning = () => {
  const microData = [
    {
      img: MicroImg,
      name: "Announcements",
      text: "Stay up-to-date with the latest Gnowbe news and updates.",
    },
    {
      img: MicroImg2,
      name: "Blog",
      text: "Stay up-to-date with the latest Gnowbe news and updates.",
    },
    {
      img: MicroImg3,
      name: "Case Studies",
      text: "Stay up-to-date with the latest Gnowbe news and updates.",
    },
  ];
  return (
    <React.Fragment>
      <section className="section8__main">
        <div className="container">
          <div className="section8-container__main">
            <p className="section8-container-left__main ">
              The right learning experience makes a difference
            </p>
            <div className="section8-container-right__main">
              <div className="section8-container-block__main">
                <div className="section8-container-block-top__main">
                  <div className="section8-container-block-top-el__main">
                    <Micro_icon />
                  </div>
                  <span>80%</span>
                </div>
                <p>higher retention rates</p>
              </div>
              <div className="section8-container-block__main">
                <div className="section8-container-block-top__main">
                  <div className="section8-container-block-top-el__main">
                    <Micro_icon2 />
                  </div>
                  <span>10x</span>
                </div>
                <p>higher engagement</p>
              </div>
              <div className="section8-container-block__main">
                <div className="section8-container-block-top__main">
                  <div className="section8-container-block-top-el__main">
                    <Micro_icon3 />
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
          <div className="swiper mySwiper3 ">
            <div className="swiper-wrapper flex items-center">
              {microData.map((item, i) => (
                <div
                  className="swiper-slide mySwiper1-slide swiper-slide-active"
                  role="group"
                  aria-label="1 / 4"
                  style={{ width: 384, marginRight: 32 }}
                  key={i}
                >
                  <div className="section5-block__main">
                    <img src={item.img} alt="img" />
                    <div className="section5-block-text__main">
                      <h3>{item.name}</h3>
                      <p>{item.text}</p>
                      <a> Explore </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mySwiper-navigation">
              <div className="swiper-button-prev swiper-button-prev-sample swiper-button-prev3" />
              <div className="swiper-pagination swiper-pagination-sample swiper-pagination3" />
              <div className="swiper-button-next swiper-button-next-sample swiper-button-next3" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
