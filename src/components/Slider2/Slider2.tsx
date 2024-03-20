import Avatar from "../../assets/img/avatar-1.png";
import Mark from "../../assets/img/Quote mark.svg";
import Message from "../../assets/img/13.svg";
import { Section6_icon } from "../../utils/icons";

export const Slider2 = () => {
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
  ];
  return (
    <section className="section6__main">
      <div className="container">
        <img src={Mark} alt="img" className="quote-mark" />
        <div className="section6-top__main">
          <h4>Testimonials</h4>
          <img src={Message} alt="img" />
        </div>
        <div className="swiper mySwiper2">
          <div className=" mySwiper2-slide flex justify-between">
            {slider2.map((item, i) => (
              <div className="section6-block__main" key={i}>
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
          <div className="mySwiper-navigation">
            <div className="swiper-button-prev swiper-button-prev-sample swiper-button-prev2" />
            <div className="swiper-pagination swiper-pagination-sample swiper-pagination2" />
            <div className="swiper-button-next swiper-button-next-sample swiper-button-next2" />
          </div>
        </div>
      </div>
    </section>
  );
};
