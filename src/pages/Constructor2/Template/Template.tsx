import React from "react"
import { Link } from "react-router-dom"
import { Basket_icon1, Constructon_icon, Constructon_icon2, Constructon_icon3 } from "../../../utils/icons"

export const Template = () => {
    // const [template, setTemplate] = React.useState(false)
    const type = [
        { path: "", icon: <Constructon_icon />, title: "Страница" },
        { path: "", icon: <Constructon_icon2 />, title: "Визитка" },
        { path: "", icon: <Constructon_icon3 />, title: "Текст" }
    ]
    return <React.Fragment>
        <div className="breadcrumbs">
            <Link to={"/"}>Главная</Link>
            <Basket_icon1 />
            <p>Конструктор сайтов</p>
        </div>
        <h1 className="constructor2-title__section">Редактируйте шаблон</h1>
        <div className="constructor2-top__section">
            {type.map((item, i) => <div key={i} className="constructor2-top-block__section constructor2-top-block-active__section">
                {item.icon}{item.title}
            </div>)}
        </div>
    </React.Fragment>
}