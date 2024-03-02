import React from "react"
import { Link } from "react-router-dom"
import { Basket_icon1 } from "../../utils/icons"
import Rectangle from "../../assets/img/Rectangle 613.png"
import { QRmessage } from "../../components/QRMessage/QRMessage"
import { BasketCart } from "../../components/Basket/Basket"

export const MainBasket = () => {
    const data = [
        { img: Rectangle, name: "Название товара", body: " Integrations with over 5000 of the most commonly used apps, including productivity software, messaging tools, CRM systems and popular learning ets.", price: "291 ₽" },
        { img: Rectangle, name: "Название товара", body: " Integrations with over 5000 of the most commonly used apps, including productivity software, messaging tools, CRM systems and popular learning ets.", price: "291 ₽" },
        { img: Rectangle, name: "Название товара", body: " Integrations with over 5000 of the most commonly used apps, including productivity software, messaging tools, CRM systems and popular learning ets.", price: "291 ₽" },
        { img: Rectangle, name: "Название товара", body: " Integrations with over 5000 of the most commonly used apps, including productivity software, messaging tools, CRM systems and popular learning ets.", price: "291 ₽" },
        { img: Rectangle, name: "Название товара", body: " Integrations with over 5000 of the most commonly used apps, including productivity software, messaging tools, CRM systems and popular learning ets.", price: "291 ₽" },
        { img: Rectangle, name: "Название товара", body: " Integrations with over 5000 of the most commonly used apps, including productivity software, messaging tools, CRM systems and popular learning ets.", price: "291 ₽" }
    ]
    return <React.Fragment>
        <main>
            <section className="section__basket">
                <div className="container">
                    <div className="breadcrumbs">
                        <Link to={"/"}>
                            Главная
                        </Link>
                        <Basket_icon1 />
                        <p>
                            Корзина
                        </p>
                    </div>
                    <div className="section-container__basket">
                        <div className="section-container-left__basket">
                            {data.map((item, i) => <BasketCart key={i} {...item} />)}
                        </div>
                        <div className="section-container-right__basket">
                            <h3>Ваши товары</h3>
                            <div className="section-container-right-content__basket">
                                <div className="section-container-right-content-block__basket">
                                    <p>Всего товаров:</p>
                                    <span>10</span>
                                </div>
                                <div className="section-container-right-content-block__basket">
                                    <p>Товар - 1</p>
                                    <span>1 шт.</span>
                                </div>
                                <div className="section-container-right-content-block__basket">
                                    <p>Товар - 1</p>
                                    <span>1 шт.</span>
                                </div>
                                <div className="section-container-right-content-block__basket">
                                    <p>Товар - 1</p>
                                    <span>1 шт.</span>
                                </div>
                                <div className="section-container-right-content-block__basket">
                                    <p>Товар - 1</p>
                                    <span>1 шт.</span>
                                </div>
                                <div className="section-container-right-content-block__basket">
                                    <p>Товар - 1</p>
                                    <span>1 шт.</span>
                                </div>
                                <div className="section-container-right-content-block__basket">
                                    <p>Товар - 1</p>
                                    <span>1 шт.</span>
                                </div>
                            </div>
                            <div className="section-container-right-price__basket">
                                <p>Итого:</p>
                                <span>291 ₽</span>
                            </div>
                            <button type="button">Оформить</button>
                        </div>
                    </div>
                </div>
            </section>
            <QRmessage />
        </main>
    </React.Fragment>
}