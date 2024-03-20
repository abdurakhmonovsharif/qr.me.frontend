import React from "react"
import Iphone from "../../assets/img/iPhone X.png";

export const ThemeCard: React.FC<Theme & { onSelectTheme: () => void }> = ({ color, background_color, font_family, id, onSelectTheme }) => {
    return <div className="section-container-block__constructor1" key={id}>
        <div className="section-container-block-img__constructor1">
            <div className="section-container-block-img-part__constructor1">
                <img src={Iphone} alt="img" />
                <div className="section-container-block-img-color__constructor1  text-center pt-3" style={{ background: background_color }} >
                    <span style={{ color, fontFamily: font_family }} className={` font-medium `}>Пример текста</span>
                </div>
            </div>
        </div>
        <div className="section-container-block-text__constructor1">
            <h5>{font_family}</h5>
            <button onClick={onSelectTheme}>Выбрать</button>
        </div>
    </div>
}