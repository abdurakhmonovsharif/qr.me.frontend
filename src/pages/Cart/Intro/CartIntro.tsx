import { Link } from "react-router-dom"
import { Basket_dec, Basket_icon1, Basket_inc } from "../../../utils/icons"
import Rectangle from "../../../assets/img/Rectangle-613.png"

export const CartIntro = () => {
    const data = [
        { img: Rectangle, name: "Название карточки", text: "Integrations with over 5000 of the most commonly used apps, including productivity software, messaging tools, CRM systems and popular learning ets.", integ: ["3,33m", "3,33m", "3,33m", "3,33m"], price: "291 ₽", caption: "Равным образом, высокотехнологичная концепция общественного уклада позволяет оценить значение благоприятных перспектив. Противоположная точка зрения подразумевает, что реплицированные с зарубежных источников, современные исследования освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, обнародованы. Противоположная точка зрения подразумевает, что тщательные исследования конкурентов, инициированные исключительно синтетически, описаны максимально подробно. Как уже неоднократно упомянуто, явные признаки победы институционализации, вне зависимости от их уровня, должны быть ассоциативно распределены по отраслям. Есть над чем задуматься: явные признаки победы институционализации призывают нас к новым свершениям, которые, в свою очередь, должны быть своевременно верифицированы. В частности, перспективное планирование обеспечивает широкому кругу (специалистов) участие в формировании модели развития. Господа, начало повседневной работы по формированию позиции способствует повышению качества модели развития. В своём стремлении улучшить пользовательский опыт мы упускаем, что сторонники тоталитаризма в науке ограничены исключительно образом мышления." }
    ]
    return <section className="section__cart-catalog">
        <div className="container">
            <div className="breadcrumbs">
                <Link to={"/"}>Главная </Link>
                <Basket_icon1 />
                <Link to={"/cart"}>Магазин </Link>
                <Basket_icon1 />
                <p>Магазин</p>
            </div>
            {data.map((item, i) => <div key={i} className="section-container__cart-catalog">
                <div className="section-container-left__cart-catalog">
                    <img src={item.img} alt="img" />
                </div>
                <div className="section-container-right__cart-catalog">
                    <h1>{item.name}</h1>
                    <p className="cart-text-p">
                        {item.text}
                    </p>
                    <div className="section-container-right-content-parent__cart-catalog">
                        {item.integ.map((el, i) => <div key={i} className="section-container-right-content__cart-catalog">
                            <p>Integrations</p>
                            <div className="section-container-right-content-line__cart-catalog" />
                            <p>{el}</p>
                        </div>)}
                    </div>
                    <div className="section-container-right-price__cart-catalog">
                        <span>{item.price}</span>
                        <div className="section-container-right-price-count__cart-catalog">
                            <p>Количество:</p>
                            <div className="number">
                                <button type="button" className="minus">
                                    <Basket_dec />
                                </button>
                                <input type="text" defaultValue={1} />
                                <button type="button" className="plus">
                                    <Basket_inc />
                                </button>
                            </div>
                        </div>
                    </div>
                    <button className="btn-cart-add" type="button">
                        Добавить в корзину
                    </button>
                    <button className="btn-cart-add-one-click" type="button">
                        Купить в 1 клик
                    </button>
                </div>
            </div>)}
            <div className="section-description__cart-catalog">
                <h3>Описание товара</h3>
                {data.map((item, i) => <p key={i}>
                    {item.caption}
                </p>)}
            </div>
            <div className="section-gallery__cart-catalog">
                <img src={Rectangle} alt="img" />
                <img src={Rectangle} alt="img" />
                <img src={Rectangle} alt="img" />
            </div>
            <h5 className="section-subtitle__cart-catalog">Характеристики</h5>
            <div className="section-container-right-content-parent__cart-catalog">
                {data.map((item) => item.integ.map((el, i) => <div key={i} className="section-container-right-content__cart-catalog">
                    <p>Integrations</p>
                    <div className="section-container-right-content-line__cart-catalog" />
                    <div className="section-container-right-content-span__cart-catalog">
                        <span>{el}</span>
                    </div>
                </div>))}
            </div>
        </div>
    </section>

}