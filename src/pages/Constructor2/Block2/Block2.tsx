import React from "react"
import { Constructon_icon4, Constructon_icon5 } from "../../../utils/icons"

export const Block2 = () => {
    return <React.Fragment>
        <h3>Настройте тело страницы</h3>
        <div className="constructor2-select-child__section">
            <p>2 блок</p>
            <Constructon_icon5 />
        </div>
        <div className="constructor2-select__section">
            <p>Выберите тип 1 блока</p>
            <div className="constructor2-select-block__section">
                <select>
                    <option>Слайдер</option>
                    <option>Слайдер</option>
                    <option>Слайдер</option>
                </select>
                <Constructon_icon4 />
            </div>
        </div>
        <div className="constructor2-input__section">
            <p>Выберите тип 1 блока</p>
            <input type="text" placeholder="Jace Bednar Bednar" />
        </div>
    </React.Fragment>
}