import React from "react"
import { Link } from "react-router-dom"

interface CatalogCard {
    img: string,
    title: string,
    text: string
}

export const CatalogCard: React.FC<CatalogCard> = ({ img, title, text, }) => {

    return <div className="section5-block__main section5-block__catalog">
        <img src={img} alt="" />
        <div className="section5-block-text__main">
            <h3>{title}</h3>
            <p>{text} </p>
            <Link to={""}>Explore</Link>
        </div>
    </div>
}