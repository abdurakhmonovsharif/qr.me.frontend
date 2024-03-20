import React from 'react'
import { useDispatch } from 'react-redux'
import { setSections } from '../../../../redux/reducers/sections.reducer';

export const TextBuilder: React.FC<Section> = ({ content, title,  index }) => {
    
    const dispatch = useDispatch();
    const onChangeInputs = (value: string, field: keyof Section, slideIndex?: number, slideInputType?: keyof Slider) => {
        dispatch(setSections({ index, field, value, slideIndex, slideInputType }))
    }
    return (
        <React.Fragment>
            {index === 0 &&
                <h3 className="head-h3 -mb-3">Настройте тело страницы</h3>}
            <div className="constructor2-container-left-block__section" >
                <div className="constructor2-input__section">
                    <input
                        type="text"
                        placeholder="Заголовок"
                        value={title}
                        onChange={(e) => onChangeInputs(e.target.value, "title")}
                    />
                    <textarea
                        className="text-area"
                        placeholder="Содержание"
                        value={content}
                        onChange={(e) => onChangeInputs(e.target.value, "content")}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

