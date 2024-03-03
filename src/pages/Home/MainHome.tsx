import React from "react";
import "../../style/style.css";
import "../../font/stylesheet.css";
import { Outlet } from "react-router-dom";
import { Header } from "../../layout/Header";
import { Footer } from "../../layout/Footer";
import { Hero } from "./Hero";
import { Content } from "./Content";
import { Scan } from "./Scan";
import { Slider1 } from "../../components/Slider1";
import { Slider2 } from "../../components/Slider2";
import { MicroLearning } from "./Microlearning";
import { Categories } from "../../components/Categories";
import { QRmessage } from "../../components/QRMessage";

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
