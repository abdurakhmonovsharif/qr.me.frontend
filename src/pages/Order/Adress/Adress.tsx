import React from "react"

export const UserAdress = () => {
    return <React.Fragment>
        <h3>Адресс доставки</h3>
        <div className="section-container-left-inputs__make-order">
            <div className="section-container-left-inputs-block__make-order">
                <p>Город</p>
                <input type="text" placeholder="Введите..." />
            </div>
            <div className="section-container-left-inputs-block__make-order">
                <p>Улица</p>
                <input type="text" placeholder="Введите..." />
            </div>
            <div className="section-container-left-mini-inputs__make-order">
                <div className="section-container-left-inputs-block__make-order">
                    <p>Дом</p>
                    <input type="text" placeholder="Введите..." />
                </div>
                <div className="section-container-left-inputs-block__make-order">
                    <p>Корпус</p>
                    <input type="text" placeholder="Введите..." />
                </div>
                <div className="section-container-left-inputs-block__make-order">
                    <p>Квартира</p>
                    <input type="text" placeholder="Введите..." />
                </div>
            </div>
            <div className="section-container-left-inputs-block__make-order">
                <p>Комментарий к заказу</p>
                <input type="text" placeholder="Ваш комментраий" />
            </div>
        </div>
    </React.Fragment>
}