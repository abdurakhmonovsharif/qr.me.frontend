import React from "react"
import { Link } from "react-router-dom"
import { Basket_icon1 } from "../../utils/icons"
import { QRmessage } from "../../components/QRMessage";
import { BasketCart } from "../../components/Basket";
import { basketData } from "../../data/basket";
import { RightSider } from "./RightSider";
export const MainBasket = () => {

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
                            {basketData.map((item, i) => <BasketCart key={i} {...item} />)}
                        </div>
                        <RightSider />
                    </div>
                </div>
            </section>
            <QRmessage />
        </main>
    </React.Fragment>
}