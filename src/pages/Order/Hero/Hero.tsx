import React from "react"
import { Link } from "react-router-dom"
import { Basket_icon1, Order_icon } from "../../../utils/icons"

export const OrderHero = () => {
    return <React.Fragment>
        <div className="breadcrumbs">
            <Link to={"/"}>Главная</Link>
            <Basket_icon1 />
            <Link to={""}>Корзина</Link>
            <Basket_icon1 />
            <p>Оформление товара</p>
        </div>
        <div className="section-top__make-order">
            <h1>Оформление товара</h1>
            <Link to={""}>
                <Order_icon />
                Вернуться назад
            </Link>
        </div>
    </React.Fragment>
}