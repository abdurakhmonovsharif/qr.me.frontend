import { Link } from "react-router-dom"

export const SampleFooter = () => {
    return <div className="footer_sample-page">
        <div className="container">
            <div className="footer-block_sample-page">
                <Link to={""}>Сохранить в контактах</Link>
                <span />
                <Link to={""}> Отправить ссылку на страницу </Link>
            </div>
        </div>
    </div>

}