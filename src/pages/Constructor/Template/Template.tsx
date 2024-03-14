import React, { useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { Basket_icon1, Constructon_icon, Constructon_icon2, Constructon_icon3 } from "../../../utils/icons"

export const Template = () => {
    const location = useLocation();
    const lastHash = useRef("");

    useEffect(() => {
        if (location.hash) {
            lastHash.current = location.hash.slice(1); // Safe hash for further use
        }
        if (lastHash.current && document.getElementById(lastHash.current)) {
            document
                .getElementById(lastHash.current)
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            lastHash.current = "";
        }
    }, [location]);
    const type = [
        { path: "home", icon: <Constructon_icon />, title: "Страница", },
        { path: "block", icon: <Constructon_icon2 />, title: "Визитка" },
        { path: "text", icon: <Constructon_icon3 />, title: "Текст", }
    ]
    return <React.Fragment>
        <div className="breadcrumbs">
            <Link to={"/"}>Главная</Link>
            <Basket_icon1 />
            <p>Конструктор сайтов</p>
        </div>
        <h1 className="constructor2-title__section">Редактируйте шаблон</h1>
        <div className="constructor2-top__section">
            {type.map((item, i) => <Link className="w-full" to={`#${item.path}`}>
                <button key={i} className={" constructor2-top-block__section"}>
                    {item.icon}{item.title}
                </button>
            </Link>
            )}
        </div>
    </React.Fragment >
}