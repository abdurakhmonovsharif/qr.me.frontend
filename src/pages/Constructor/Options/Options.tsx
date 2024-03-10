import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPage } from "../../../redux/reducers/page.reducer";
import { RootState } from "../../../redux/store";

export const Options = () => {
    const dispatch = useDispatch();
    const page = useSelector((state: RootState) => state.page);
    const onChangeInputChange = (value: string, field: keyof Page) => {
        dispatch(setPage({ value, field }))
    }
    return <React.Fragment>
        <h3 className="head-h3 mt-6">Нстройте дополнительные параметры</h3>
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
            <input value={page.password} onChange={(e) => onChangeInputChange(e.target.value, "password")} type="password" placeholder="*************" />
        </div>
        {/* <div className="constructor2-select__section">
            <p>Возможность уадления страницы</p>
            <div className="constructor2-select-block__section">
                <select>
                    <option>Да</option>
                    <option>Да</option>
                    <option>Да</option>
                </select>
                <Constructon_icon4 />
            </div>
        </div> */}
    </React.Fragment>
}