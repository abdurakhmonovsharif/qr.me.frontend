import { Link, useNavigate } from "react-router-dom"
import { Basket_icon1 } from "../../utils/icons"
import { ThemeCard } from "../../components/ThemeCard/ThemeCard"
import { useGetThemesQuery } from "../../redux/api/theme/theme.api"
import Spinner from "../../helpers/Spinner"

export const Themes = () => {
    const { data, isLoading } = useGetThemesQuery();
    const navigate = useNavigate();
    const navigateToCreatePage = (theme: Theme) => {
        localStorage.setItem("theme", JSON.stringify(theme));
        navigate("/create_page");
    }
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
                    {isLoading ? <Spinner /> :
                        data?.length === 0 ? "no data" :
                            data?.map((item, i) => <span key={i} onClick={() => navigateToCreatePage(item)}><ThemeCard  {...item} /></span>)
                    }
                </div>
            </div>
        </section>
    </main>

}