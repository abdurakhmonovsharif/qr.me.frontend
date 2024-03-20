import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store";
import { Constructon_icon4 } from "../../../utils/icons";
import { setOptions } from "../../../redux/reducers/options.reducer";
import { useDeletePageMutation } from "../../../redux/api/page/page.api";

export const Options = () => {
    const dispatch = useDispatch();
    const [deletePage] = useDeletePageMutation()
    const options = useSelector((state: RootState) => state.options);
    const onChangeInputChange = (value: string | number, field: keyof Options) => {
        dispatch(setOptions({ value, field }))
    }
    const handleDeletePage = () => {

    }
    return <React.Fragment>
        <h3 className="head-h3 mt-6">Настройте дополнительные параметры</h3>
        <div className="constructor2-mini-inputs__section">
            <div className="constructor2-mini-inputs-block__section">
                <p>Просмотров в год</p>
                <input value={options.max_view_count} onChange={(e) => onChangeInputChange(+e.target.value, "max_view_count")} type="text" placeholder="Введите..." />
                <span>*платная услуга</span>
            </div>
            <div className="constructor2-mini-inputs-block__section">
                <p>Редактирований в год</p>
                <input value={options.max_edit_count} onChange={(e) => onChangeInputChange(+e.target.value, "max_edit_count")} type="text" placeholder="Введите..." />
                <span>*платная услуга</span>
            </div>
            <div className="constructor2-mini-inputs-block__section">
                <p>Срок хранения до</p>
                <input value={options.end_date} type="date" onChange={(e) => onChangeInputChange(e.target.value, "end_date")
                } />
                <span>*платная услуга</span>
            </div>
            <div className="constructor2-mini-inputs-block__section">
                <p>Установите пароль на просмотр</p>
                <input value={options.password_view} onChange={(e) => onChangeInputChange(e.target.value, "password_view")} type="password" placeholder="*************" />
            </div>
        </div>
        <div className="constructor2-input__section constructor2-input-password__section">
            <p>Установите пароль на редактирование</p>
            <input value={options.password_edit} onChange={(e) => onChangeInputChange(e.target.value, "password_edit")} type="password" placeholder="*************" />
        </div>
        <div className="constructor2-select__section">
            <p>Возможность удаления страницы</p>
            <div className="constructor2-select-block__section">
                <button className="w-full text-red-500 font-medium h-[56px] text-[18px] rounded-md border border-dashed border-red-500 hover:bg-red-500 hover:text-white">Удалить</button>
            </div>
        </div>
    </React.Fragment>
}