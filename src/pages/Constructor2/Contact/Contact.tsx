import React from "react";
import { Link } from "react-router-dom";
import { Constructon_icon6 } from "../../../utils/icons"
import Img from "../../../assets/img/socials111.svg";
import { socials } from "../../../helpers/socials";

export const Contact = () => {
    return <React.Fragment>
        <h6>Добавьте контактные данные</h6>
        <div className="constructor2-mini-inputs__section">
            <div className="constructor2-mini-inputs-block__section">
                <p>ФИО</p>
                <input type="text" placeholder="Jace Bednar Bednar" />
            </div>
            <div className="constructor2-mini-inputs-block__section">
                <p>Email</p>
                <input type="email" placeholder="example@de.ri" />
            </div>
            <div className="constructor2-mini-inputs-block__section">
                <p>Телефон</p>
                <input type="tel" placeholder="8 (000) 999 99-99" />
            </div>
            <div className="constructor2-mini-inputs-block__section">
                <p>Адрес</p>
                <input type="text" placeholder="Москва, Мяснитский ряд 2" />
            </div>
        </div>
        <div className="constructor2-input__section">
            <p>
                Iframe встраиваемой карты
                <Constructon_icon6 />
            </p>
            <input type="text" placeholder="<iframe></iframe>" />
        </div>
        <div className="constructor2-input-social__section">
            <p>
                Выделите необходимые соц сети
                <Constructon_icon6 />
            </p>
            <div className="constructor2-input-social-block__section">
                <input type="text" placeholder="Ваша страница" />
                <img src={Img} alt="instagram_img" />
            </div>
            <div className="constructor2-input-social-block-links__section">
                {socials.map((item) => <Link to={item.path} className="constructor2-input-social-block-link__section">
                    <img src={item.icon} alt="socials_img" />
                </Link>)}
            </div>
        </div>
    </React.Fragment>
}