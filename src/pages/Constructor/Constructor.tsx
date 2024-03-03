import { Link } from "react-router-dom"
import { Basket_icon1 } from "../../utils/icons"
import { constructorData } from "../../data/constructor"
import { ConstructorCard } from "../../components/Constructor/Contructor"

export const Constructor = () => {
    return <main>
        <section className="section__constructor1">
            <div className="container">
                <div className="breadcrumbs">
                    <Link to={"/"}>Главная</Link>
                    <Basket_icon1 />
                    <p>Конструктор сайтов</p>
                </div>
                <h1 className="section-title__constructor1">
                    Выберите шаблон дизайна
                </h1>
                <div className="section-container__constructor1">
                    {constructorData.map((item, i) => <ConstructorCard key={i} {...item} />)}
                </div>
            </div>
        </section>
    </main>

}