import Browser from "../../assets/img/browser.png";
import Section7Icon from "../../assets/img/140.svg";
import { GetStarted } from "../Button/Started";
import { BookDemo } from "../Button/Book";
import { Train_icon } from "../../utils/icons";

export const Categories = () => {
  const training = [
    { id: 1, title: "Training", text: "Deliver highly engaging and interactive training to your organization that a learner can explore anytime, anywhere.", img: Browser, },
    { id: 2, title: "Onboarding", text: "Deliver highly engaging and interactive training to your organization that a learner can explore anytime, anywhere.", img: Browser, },
    { id: 3, title: "Sales Enablement", text: "Deliver highly engaging and interactive training to your organization that a learner can explore anytime, anywhere.", img: Browser },
    { id: 4, title: "Leadership Development", text: "Deliver highly engaging and interactive training to your organization that a learner can explore anytime, anywhere.", img: Browser },
    { id: 5, title: "Operations", text: "Deliver highly engaging and interactive training to your organization that a learner can explore anytime, anywhere.", img: Browser },
    { id: 6, title: "Safety and Compliance", text: "Deliver highly engaging and interactive training to your organization that a learner can explore anytime, anywhere.", img: Browser },
    { id: 7, title: "Partner Engagement", text: "Deliver highly engaging and interactive training to your organization that a learner can explore anytime, anywhere.", img: Browser },
    { id: 8, title: "Customer Engagement", text: "Deliver highly engaging and interactive training to your organization that a learner can explore anytime, anywhere.", img: Browser },
  ];

  return (
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
          {training.map((el, i) => (
            <div
              data-tab="#tab1"
              className="section7-choose-block__main"
              key={i}
            >
              {el.title}
            </div>
          ))}
        </div>
        <div
          id="tab1"
          className="section7-container__main section7-container-active__main"
        >
          <div className="section7-container-left__main">
            <h3>
              <Train_icon />
              Training
            </h3>
            <p>
              Deliver highly engaging and interactive training to your
              organization that a learner can explore anytime, anywhere.
            </p>
            <div className="section1-container-left-btns__main">
              <GetStarted />
              <BookDemo />
            </div>
          </div>
          <div className="section7-container-right__main">
            <img src={Browser} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};
