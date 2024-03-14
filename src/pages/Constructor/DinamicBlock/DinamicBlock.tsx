import React, { ChangeEvent, useRef } from "react";
import { Constructon_icon4, Constructon_icon5, Upload_icon } from "../../../utils/icons"
import { useDispatch } from "react-redux";
import { setSectionType, addSlider, deleteSlide, setSections, deleteBlock } from "../../../redux/reducers/sections.reducer";
import delete_icon from '../../../assets/img/delete-icon.webp'
import { useUploadFileMutation } from "../../../redux/api/upload/upload.api";
export const types = [{ label: "Слайдер", value: "sliders" }, { label: "Текст", value: "text" }, { label: "Картинка", value: "image" }];
export const DinamicBlock: React.FC<Section> = ({ content, imageURL, sliders, title, type, index }) => {
    const dispatch = useDispatch();
    const [uploadFile] = useUploadFileMutation()
    const imageInputRef = useRef<HTMLInputElement>(null)
    const onTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        if (value === "sliders" && sliders.length === 0) {
            onAddSlider();
        }
        dispatch(setSectionType({ index, type: value }))
    }
    const onAddSlider = () => {
        if (sliders.length < 5) {
            dispatch(addSlider({ index }));
        }
    }
    const onDeleteSlide = (slideIndex: number) => {
        dispatch(deleteSlide({ index, slideIndex }));
    }
    const onChangeInputs = (value: string, field: keyof Section, slideIndex?: number, slideInputType?: keyof Slider) => {
        dispatch(setSections({ index, field, value, slideIndex, slideInputType }))
    }
    const imageUpload = async (fileList: FileList | null, slideIndex: number | string) => {
        const formData = new FormData();
        if (fileList) {
            formData.append("file", fileList[0]);
            const data = await uploadFile(formData);
            if ('data' in data && 'fileURL' in data.data) {
                if (typeof (slideIndex) === "number") {
                    onChangeInputs(data.data.fileURL, "sliders" as keyof Section, slideIndex, "imageURL")
                } else if (typeof (slideIndex) === "string") {
                    onChangeInputs(data.data.fileURL, "imageURL" as keyof Section, undefined, "imageURL")
                }
                if (imageInputRef.current) {
                    imageInputRef.current.value = '';
                }
            }
        }
    }
    const onDeleteBlock = () => {
        if (index !== undefined) {
            dispatch(deleteBlock({ index }))
        }
    }
    return <React.Fragment >
        {index === 0 ?
            <h3 className="head-h3 -mb-3">
                Настройте главный экран
            </h3>
            :
            index === 1 &&
            <h3 className="head-h3 -mb-3">Настройте тело страницы</h3>
        }
        <div id={index === 0 ? "home" : index === 1 ? "block" : ""} className="constructor2-container-left-block__section" >
            <div className="constructor2-select__section">
                <div className="w-full flex justify-between items-center ">
                    <p>Выберите тип {index ? index + 1 : 1} блока</p>
                    <button onClick={onDeleteBlock}> <Constructon_icon5 /></button>
                </div>
                <div className="constructor2-select-block__section">
                    <select onChange={onTypeChange} defaultValue={type}>
                        {(index === 0 ? types.filter(t => t.value !== "text") : types).map((selectType, index) => <option key={index} value={selectType.value}>{selectType.label}</option>)}
                    </select>
                    <Constructon_icon4 />
                </div>
            </div>
            <div className="constructor2-input__section">
                {
                    type === "text" ? <>
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
                    </> :
                        type === "image" ? <>
                            <div className="w-full flex items-center gap-x-2">
                                <input
                                    type="text"
                                    placeholder="URL изображения"
                                    value={imageURL}
                                    onChange={(e) => onChangeInputs(e.target.value, "imageURL")}
                                />
                                <label className="cursor-pointer" title="загрузить">
                                    <input ref={imageInputRef} accept="image/*" onChange={(e) => imageUpload(e.target.files, "imageURL")} hidden type="file" />
                                    <Upload_icon />
                                </label>
                            </div>
                            <input
                                type="text"
                                placeholder="Текст над изображением"
                                value={content}
                                onChange={(e) => onChangeInputs(e.target.value, "content")}
                            />
                        </> : type === "sliders" && <>
                            {sliders.map((slide, slideIndex) => (
                                <div key={slideIndex}>
                                    <div className="flex gap-x-2 items-center">
                                        <input
                                            type="text"
                                            placeholder="URL изображения"
                                            value={slide.imageURL}
                                            onChange={(e) => onChangeInputs(e.target.value, "sliders" as keyof Section, slideIndex, "imageURL")}
                                        />
                                        <label className="cursor-pointer" title="загрузить">
                                            <input ref={imageInputRef} accept="image/*" onChange={(e) => imageUpload(e.target.files, slideIndex)} hidden type="file" />
                                            <Upload_icon />
                                        </label>
                                        <button onClick={() => onDeleteSlide(slideIndex)} className="w-[56px] h-[56px] " title="удалить">
                                            <img src={delete_icon} alt="x" className="w-full h-full object-contain" />
                                        </button>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Текст над изображением"
                                        value={slide.title}
                                        onChange={(e) => onChangeInputs(e.target.value, "sliders" as keyof Section, slideIndex, "title")}
                                    />
                                </div>
                            ))}
                            {sliders.length < 5 &&
                                <button className="add-slide-btn" onClick={onAddSlider}>Добавить слайд</button>
                            }
                        </>

                }
            </div>
        </div>
    </React.Fragment>
}