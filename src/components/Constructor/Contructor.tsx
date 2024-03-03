import React from "react"
import { Link } from "react-router-dom"

interface ConsCard {
    img: string,
    title: string,
    desc: string
}

export const ConstructorCard: React.FC<ConsCard> = ({ img, title, desc }) => {
    return <div className="section-container-block__constructor1">
        <div className="section-container-block-img__constructor1">
            <div className="section-container-block-img-part__constructor1">
                <img src={img} alt="img" />
                <div className="section-container-block-img-color__constructor1" style={{ background: '#92E3A9' }} />
            </div>
        </div>
        <div className="section-container-block-text__constructor1">
            <h3>{title}</h3>
            <p>{desc}</p>
            <Link to={""}>Выбрать</Link>
        </div>
    </div>
}