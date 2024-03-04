import React from "react"
import { Order_icon2, Order_icon3, Order_icon4 } from "../../../utils/icons"

export const Payment = () => {
    return <React.Fragment>
        <h3>Выберите способ оплаты</h3>
        <div className="section-container-left-pay__make-order">
            <div className="section-container-left-pay-block__make-order">
                <div className="radio radio-pay">
                    <input className="custom-radio custom-radio-pay" type="radio" id="color-5" name="color" defaultValue="indigo" />
                    <label htmlFor="color-5">
                        <span className="radio-pay-block">
                            <Order_icon2 />
                            Оплата картой
                        </span>
                    </label>
                </div>
            </div>
            <div className="section-container-left-pay-block__make-order">
                <div className="radio radio-pay">
                    <input className="custom-radio custom-radio-pay" type="radio" id="color-6" name="color" defaultValue="indigo" />
                    <label htmlFor="color-6">
                        <span className="radio-pay-block">
                            <Order_icon3 />
                            Безналичная оплата по счету
                        </span>
                    </label>
                </div>
            </div>
            <div className="section-container-left-pay-block__make-order">
                <div className="radio radio-pay">
                    <input className="custom-radio custom-radio-pay" type="radio" id="color-7" name="color" defaultValue="indigo" />
                    <label htmlFor="color-7">
                        <span className="radio-pay-block">
                            <Order_icon4 />
                            Оплата курьеру
                        </span>
                    </label>
                </div>
            </div>
        </div>
    </React.Fragment>
}