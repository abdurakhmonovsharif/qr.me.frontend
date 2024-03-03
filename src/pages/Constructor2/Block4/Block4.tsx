import React from "react"
import { Constructon_icon4, Constructon_icon5 } from "../../../utils/icons"

export const Block4 = () => {
    return <React.Fragment>
        <div className="constructor2-select-child__section">
            <p>4 блок</p>
            <Constructon_icon5 />
        </div>
        <div className="constructor2-select__section">
            <p>Выберите тип блока</p>
            <div className="constructor2-select-block__section">
                <select>
                    <option>Ссылка</option>
                    <option>Ссылка</option>
                    <option>Ссылка</option>
                </select>
                <Constructon_icon4 />
            </div>
        </div>
        <div className="constructor2-input__section">
            <p>Введите текст для ссылки</p>
            <input type="text" placeholder="Jace Bednar Bednar" />
        </div>
        <div className="constructor2-input__section">
            <p>Вставьте ссылку</p>
            <input type="text" placeholder="https://yandex.ru/search/" />
        </div>
        <button className="btn-add-block" type="button">Добавить блок</button>
    </React.Fragment>
}