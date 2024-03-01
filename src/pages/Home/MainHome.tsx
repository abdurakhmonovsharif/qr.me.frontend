import React from "react";
import "../../style/style.css";
import { Outlet } from "react-router-dom";
import { Header } from "../../layout/Header/Header";
import { Footer } from "../../layout/Footer/Footer";

import { Hero } from "./Hero/Hero";
import { Content } from "./Content/Content";
import { Scan } from "./Scan/Scan";
import { Slider1 } from "../../components/Slider1/Slider1";
import { Slider2 } from "../../components/Slider2/Slider2";
import { Training } from "./Training/Training";

export const DefaultComponent = () => {
  return (
    <React.Fragment>
      <main>
        <Hero />
        <Content />
        <Scan />
        <Slider1 />
        <Slider2 />
        <Training />
      </main>
      {/* section7 */}

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
