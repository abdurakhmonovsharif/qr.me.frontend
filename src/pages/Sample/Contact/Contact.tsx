import { Link } from "react-router-dom"
import { socials2 } from "../../../helpers/socials"

export const Contact = () => {
    return <section className="section-contacts__sample-page">
        <div className="section-contacts-block__sample-page">
            <h3>Контакты</h3>
            <div className="section-contacts-block-part__sample-page">
                <p>ФИО</p>
                <span>Jace Bednar Bednar</span>
            </div>
            <div className="section-contacts-block-part__sample-page">
                <p>Телефон</p>
                <a>8 (000) 999 99-99</a>
            </div>
            <div className="section-contacts-block-part__sample-page">
                <p>E-mail</p>
                <a>example@de.ri</a>
            </div>
            <div className="section-contacts-block-part__sample-page">
                <p>Адрес</p>
                <span>Москва, Мяснитский ряд 2</span>
            </div>
            <div className="section-contacts-block-social__sample-page">
                {socials2.map((item, i) => <Link to={item.path} key={i}>
                    <img src={item.icon} alt="socials_img" />
                </Link>)}
            </div>
        </div>
        <iframe className="section-contacts-map__sample-page" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa0c119844c87cc434120f91bde47ce0a68f9d323ca09c1dc462dcc8a576c1ac8&source=constructor" width="100%" height="100%" frameBorder={0} />
    </section>

}