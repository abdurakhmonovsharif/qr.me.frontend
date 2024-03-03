import { Constructon_icon4 } from "../../../utils/icons"

export const Block1 = () => {
    return <div className="constructor2-container-left-block__section">
        <h3>Настройте главный экран</h3>
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
    </div>
}