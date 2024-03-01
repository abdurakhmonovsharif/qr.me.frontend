import Crown from "../../assets/img/crown.svg";
import Rectangle from "../../assets/img/Rectangle 613.png";
import { Section5_icon } from "../../utils/icons";
export const Slider1 = () => {
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
  ];
  
  return (
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
  );
};
