import {
  Section3_icon,
  Section3_icon2,
  Section3_icon3,
  Section3_icon4,
  Section3_icon5,
  Section3_icon6,
  Section3_icon7,
} from "../../../utils/icons";
import Person from "../../../assets/img/material-symbols_group-add-outline-rounded.png";

export const Content = () => {
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
  return (
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
  );
};
