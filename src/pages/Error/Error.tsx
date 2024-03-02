import { Link } from "react-router-dom";
import Img from "../../assets/img/6325257 1.png";

export const Error = () => {
    return <main>
        <section className="section__404">
            <div className="container">
                <div className="section-container__404">
                    <div className="section-container-left__404">
                        <img src={Img} alt="img" />
                    </div>
                    <div className="section-container-right__404">
                        <h1>Страница не найдена!</h1>
                        <p>
                            Убедитесь, что вы правильно набрали URL. Проверьте, нет ли опечаток или лишних символов. В некоторых случаях, даже один неправильный символ может привести к ошибке 404.
                        </p>
                        <Link to={"/"}>
                            Вернуться на главную
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </main>

}