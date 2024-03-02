import React from "react";
import "../../style/style.css";
import "../../font/stylesheet.css";
import { Outlet } from "react-router-dom";
import { Header } from "../../layout/Header/Header";
import { Footer } from "../../layout/Footer/Footer";
import { Hero } from "./Hero/Hero";
import { Content } from "./Content/Content";
import { Scan } from "./Scan/Scan";
import { Slider1 } from "../../components/Slider1/Slider1";
import { Slider2 } from "../../components/Slider2/Slider2";
import { MicroLearning } from "./Microlearning/Microlearning";
import { Categories } from "../../components/Categories/Categories";
import { QRmessage } from "../../components/QRMessage/QRMessage";

export const DefaultComponent = () => {
  return (
    <React.Fragment>
      <main>
        <Hero />
        <Content />
        <Scan />
        <Slider1 />
        <Slider2 />
        <Categories />
        <MicroLearning />
        <QRmessage />
      </main>
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
