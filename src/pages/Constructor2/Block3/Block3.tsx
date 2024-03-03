import React from "react"
import { Constructon_icon4, Constructon_icon5 } from "../../../utils/icons"

export const Block3 = () => {
    return <React.Fragment>
        <div className="constructor2-select-child__section">
            <p>3 блок</p>
            <Constructon_icon5 />
        </div>
        <div className="constructor2-select__section">
            <p>Выберите тип блока</p>
            <div className="constructor2-select-block__section">
                <select>
                    <option>Текст</option>
                    <option>Текст</option>
                    <option>Текст</option>
                </select>
                <Constructon_icon4 />
            </div>
        </div>
        <div className="constructor2-input__section">
            <p>Текст заголовка</p>
            <input type="text" placeholder="Jace Bednar Bednar" />
        </div>
        <div className="constructor2-textarea__section">
            <p>Введите текст</p>
            <textarea placeholder="Ввод..." defaultValue={""} />
        </div>
    </React.Fragment>
}