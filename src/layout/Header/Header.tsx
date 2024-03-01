import Logo from "../../assets/img/logo-qr.svg";
import { Link } from "react-router-dom";
import { About_icon, Shop_icon, Client_icon } from "../../utils/icons";

export const Header = () => {
  const navbarList = [
    {
      path: "/",
      icon: <About_icon />,
      label: "О нас",
      drop: ["Link 1", "Link 2", "Link 3"],
    },
    {
      path: "/",
      icon: <Shop_icon />,
      label: "Магазин",
      drop: ["Link 1", "Link 2", "Link 3"],
    },
    {
      path: "/",
      icon: <Client_icon />,
      label: "Корпоративным клиентам",
      drop: ["Link 1", "Link 2", "Link 3"],
    },
    {
      path: "/",
      label: "Поддержка",
    },
  ];
  return (
    <header>
      <div className="container">
        <div className="header-container">
          <div className="header-container-left">
            <Link to={"/"}>
              <img src={Logo} alt="logo-img" />
            </Link>
            <ul>
              {navbarList.map((item) => (
                <li>
                  <div className="dropdown">
                    <button className="dropbtn">
                      <Link to={item.path}> {item.label}</Link>
                      {item.icon}
                    </button>
                    <div className="dropdown-content">
                      {item.drop?.map((el) => (
                        <Link to={"/"}>{el}</Link>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button className="header-btn" type="button">
            Задать нам вопрос
          </button>
          <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span className="span-burger" />
            </label>
            <ul className="menu__box">
              <li className="content-burger">
                <ul className="list-header">
                  <li>
                    <a href="/#news"> Главная </a>
                  </li>
                  <li>
                    <a href="/calendar/"> БЛОГ </a>
                  </li>
                  <li>
                    <a href="/events/"> КОНТАКТЫ </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
