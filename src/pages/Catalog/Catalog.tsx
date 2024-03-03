import { Link } from "react-router-dom"
import { Basket_icon1, Search_icon } from "../../utils/icons"
import { catalogData } from "../../data/catalog";
import { filter, filter2 } from "../../data/catalog";

export const Catalog = () => {
    const category = [
        { path: "", name: "Все", icon: <Basket_icon1 /> },
        { path: "", name: "Категория 1", icon: <Basket_icon1 /> },
        { path: "", name: "Категория 2", icon: <Basket_icon1 /> },
        { path: "", name: "Категория 3", icon: <Basket_icon1 /> },
        { path: "", name: "Категория 4", icon: <Basket_icon1 /> },
    ];
    const FilterMap = () => {
        return filter.map((item, i) => <div key={i}><h3>{item.name}</h3>
            <div className="section-container-checkboxes__catalog">
                {item.option.map((el, i) => <div className="checkbox" key={i}>
                    <input className="custom-checkbox" type="checkbox" id="color-1" name="color-1" defaultValue="indigo" />
                    <label htmlFor="color-1">{el}</label>
                </div>)}
            </div></div>)
    }
    return <section className="section__catalog">
        <div className="container container2">
            <div className="breadcrumbs">
                <Link to={"/"}>Главная</Link>
                <Basket_icon1 />
                <p>Магазин</p>
            </div>
            <button className="section-btn-mobile__catalog" type="button">Фильтры</button>
            <div className="section-container__catalog">
                <div className="section-container-left-parent__catalog">
                    <div className="section-container-left__catalog">
                        <h3>Категории</h3>
                        <div className="section-container-links__catalog">
                            {category.map((item) => <Link to={""}>
                                {item.name}
                                {item.icon}
                            </Link>)}
                        </div>
                        <h3>Поиск</h3>
                        <div className="section-container-search__catalog">
                            <input type="text" placeholder="Введите..." />
                            <Search_icon />
                        </div>
                        <FilterMap />
                        {filter2.map((item) => <div>
                            <h3>{item.name}</h3>
                            <div className="section-container-options__catalog">
                                {item.option.map((el, i) => <div key={i} className="section-container-options-block__catalog">
                                    {el}
                                </div>)}
                            </div>
                        </div>)}
                        <FilterMap />
                        <button className="btn-catalog" type="button">Сбросить</button>
                    </div>
                </div>
                <div className="section-container-right__catalog">
                    {catalogData.map((item, i) => <div key={i} className="section5-block__main section5-block__catalog">
                        <img src={item.img} alt="img" />
                        <div className="section5-block-text__main">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <Link to={""}>Explore</Link>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    </section>
}