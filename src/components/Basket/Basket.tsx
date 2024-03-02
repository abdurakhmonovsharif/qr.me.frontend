import React from "react";
import { Basket_dec, Basket_del, Basket_inc } from "../../utils/icons";

interface Props {
  img: string;
  name: string;
  price: string;
  body: string;
}

export const BasketCart: React.FC<Props> = ({ img, name, body, price }) => {
  return <div className="section-container-left-block__basket">
    <div className="section-container-left-block-part__basket">
      <div className="section-container-left-block-img__basket">
        <img src={img} alt="img" />
      </div>
      <div className="section-container-left-block-text__basket">
        <h3>{name}</h3>
        <p>
          {body}
        </p>
      </div>
    </div>
    <div className="section-container-left-block-part2__basket">
      <div className="number">
        <button type="button" className="minus">
          <Basket_dec />
        </button>
        <input type="text" defaultValue={1} />
        <button type="button" className="plus">
          <Basket_inc />
        </button>
      </div>
      <span>
        {price}
      </span>
      <Basket_del />
    </div>
  </div>
};
