import React from "react"

export const UserInfo = () => {
    return <React.Fragment>
        <h3>Данные получателя</h3>
        <div className="section-container-left-inputs__make-order">
            <div className="section-container-left-inputs-block__make-order">
                <p>ФИО</p>
                <input type="text" placeholder="Jace Bednar Bednar" />
            </div>
            <div className="section-container-left-inputs-block__make-order">
                <p>Номер телефона</p>
                <input type="tel" placeholder="+7 (999) 999-99-99" className="tel" />
            </div>
            <div className="section-container-left-inputs-block__make-order">
                <p>Электронная почта</p>
                <input type="email" placeholder="example@example.com" />
            </div>
        </div>
    </React.Fragment>
}