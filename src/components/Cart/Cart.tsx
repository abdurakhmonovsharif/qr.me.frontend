import React from "react";
import { Link } from "react-router-dom";

interface CartProps {
    img: string;
    title: string;
    price: string;
    text: string
}

export const Cart: React.FC<CartProps> = ({ img, title, price, text }) => {
    return <div className="section2-container-block__cart-catalog">
        <img src={img} alt="img" />
        <div className="section2-container-block-top__cart-catalog">
            <p>{title}</p>
            <span>{price}</span>
        </div>
        <p className="section2-container-block-text__cart-catalog">
            {text}
        </p>
        <Link to={"/product"}>Перейти к товару</Link>
    </div>
}