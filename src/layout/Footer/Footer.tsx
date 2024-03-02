import Logo from "../../assets/img/logo-qr.svg";
import Vektor from "../../assets/img/Vector.svg";
import {
  Footer_icon,
  Footer_icon2,
  Footer_icon3,
  Footer_icon4,
  Footer_icon5,
} from "../../utils/icons";

export const Footer = () => {
  const footerList = [
    {
      name: "Column One",
      links: ["Link One", "Link One", "Link One", "Link One", "Link One"],
    },
    {
      name: "Column One",
      links: ["Link One", "Link One", "Link One", "Link One", "Link One"],
    },
    {
      name: "Column One",
      links: ["Link One", "Link One", "Link One", "Link One", "Link One"],
    },
    {
      name: "Column One",
      links: ["Link One", "Link One", "Link One", "Link One", "Link One"],
    },
    {
      name: "Column One",
      links: ["Link One", "Link One", "Link One", "Link One", "Link One"],
    },
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-container-logo">
            <img src={Logo} />
          </div>
          {footerList.map((item, i) => (
            <div className="footer-container-block" key={i}>
              <ul>
                <h3>{item.name}</h3>
                {item.links.map((el, i) => (
                  <li key={i}>
                    <a>{el}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-container-bottom">
          <div className="footer-container-bottom-left">
            <p>© 2023 Relume. All rights reserved.</p>
            <a> Privacy Policy </a>
            <a> Terms of Service </a>
            <a>
              <img src={Vektor} />
              dragotech.info
            </a>
          </div>
          <div className="footer-social">
            <a>
              <Footer_icon />
            </a>
            <a>
              <Footer_icon2 />
            </a>
            <a>
              <Footer_icon3 />
            </a>
            <a>
              <Footer_icon4 />
            </a>
            <a>
              <Footer_icon5 />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
