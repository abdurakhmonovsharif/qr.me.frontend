import React from "react"
import { Constructon_icon4 } from "../../../utils/icons"

export const Options = () => {
    return <React.Fragment>
        <h6>Нстройте дополнительные параметры</h6>
        <div className="constructor2-mini-inputs__section">
            <div className="constructor2-mini-inputs-block__section">
                <p>Просмотров в год</p>
                <input type="text" placeholder="Введите..." />
                <span>*платная услуга</span>
            </div>
            <div className="constructor2-mini-inputs-block__section">
                <p>Редактирований в год</p>
                <input type="text" placeholder="Введите..." />
                <span>*платная услуга</span>
            </div>
            <div className="constructor2-mini-inputs-block__section">
                <p>Срок хранения до</p>
                <input type="date" />
                <span>*платная услуга</span>
            </div>
            <div className="constructor2-mini-inputs-block__section">
                <p>Установите пароль на просмотр</p>
                <input type="password" placeholder="*************" />
            </div>
        </div>
        <div className="constructor2-input__section constructor2-input-password__section">
            <p>Установите пароль на релактирование</p>
            <input type="password" placeholder="*************" />
        </div>
        <div className="constructor2-select__section">
            <p>Возможность уадления страницы</p>
            <div className="constructor2-select-block__section">
                <select>
                    <option>Да</option>
                    <option>Да</option>
                    <option>Да</option>
                </select>
                <Constructon_icon4 />
            </div>
        </div>
    </React.Fragment>
}