import React from "react"
import Iphone from "../../../assets/img/iPhone X2.png";
import Screen from "../../../assets/img/Screen-demo.png";

export const RightSider = () => {
    return <React.Fragment>
        <div className="constructor2-container-right-parent__section">
            <div className="constructor2-container-right__section">
                <div className="constructor2-demo">
                    <img src={Iphone} alt="phone_img" className="constructor-phone" />
                    <img src={Screen} alt="screen_img" className="constructor2-demo-content" />
                </div>
                <p>Итоговая стоимость:</p>
                <span>1,200 рублей.</span>
                <button type="button" className="btn-demo-constructor openModalDemo2">Оплатить и опубликовать</button>
            </div>
        </div>
    </React.Fragment>
}