import React, { useEffect } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { Basket_icon1, Constructon_icon, Constructon_icon2, Constructon_icon3 } from "../../../utils/icons"

export const Template = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    useEffect(() => {
        const template_type = searchParams.get("type") || "";
        const user = JSON.parse(localStorage.getItem("user") as string) as any;
        if (localStorage.getItem("user") == null) navigate("/themes");
        const user_plan = user.plan.name as string;
        if (!user_plan.includes(template_type)) {
            navigate(`?type=${user.plan.name}`)
        }
    }, [])
    const changeType = (type: string) => {
        navigate(`?type=${type}`)
    }
    const type = [
        { path: "", icon: <Constructon_icon />, title: "Страница", type: "blog" },
        { path: "", icon: <Constructon_icon2 />, title: "Визитка", type: "b_card" },
        { path: "", icon: <Constructon_icon3 />, title: "Текст", type: "text" }
    ]
    return <React.Fragment>
        <div className="breadcrumbs">
            <Link to={"/"}>Главная</Link>
            <Basket_icon1 />
            <p>Конструктор сайтов</p>
        </div>
        <h1 className="constructor2-title__section">Редактируйте шаблон</h1>
        <div className="constructor2-top__section">
            {type.map((item, i) => <button onClick={() => changeType(item.type)}
                disabled={searchParams.get("type") !== item.type} key={i} className={item.type === searchParams.get("type") ? "constructor2-top-block-active__section constructor2-top-block__section" : "!cursor-not-allowed constructor2-top-block__section"}>
                {item.icon}{item.title}
            </button>)}
        </div>
    </React.Fragment >
}