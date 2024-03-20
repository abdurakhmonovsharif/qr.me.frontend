import React, { ChangeEvent, useRef } from "react"
import { useDispatch } from "react-redux"
import { deleteBlock, setSectionType, setSections } from "../../../../redux/reducers/sections.reducer";
import { useUploadFileMutation } from "../../../../redux/api/upload/upload.api";
import { Constructon_icon4, Constructon_icon5, Upload_icon } from "../../../../utils/icons";
import { types } from "../SiteBuilder";

export const CvBuilder: React.FC<Section> = ({ content, imageURL, sliders, title, type, index }) => {
    const dispatch = useDispatch();
    const [uploadFile] = useUploadFileMutation()
    const imageInputRef = useRef<HTMLInputElement>(null)
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
    const onTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        dispatch(setSectionType({ index, type: value }))
    }
    return (
        <>
            <h3 className="head-h3 -mb-3">
                Настройте главный экран
            </h3>
            <div className="constructor2-container-left-block__section">
                <div className="constructor2-select__section">
                    <div className="w-full flex justify-between items-center ">
                        <p>Выберите тип {index ? index + 1 : 1} блока</p>
                        <button onClick={onDeleteBlock}> <Constructon_icon5 /></button>
                    </div>
                    <div className="constructor2-select-block__section">
                        <select onChange={onTypeChange} defaultValue={type}>
                            {types.filter((t) => t.value !== "sliders").map((selectType, index) => <option key={index} value={selectType.value}>{selectType.label}</option>)}
                        </select>
                        <Constructon_icon4
                        />
                    </div>
                </div>
                <div className="constructor2-input__section">
                    {
                        type === "image" ?
                            <>

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
                            </> :
                            <>
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
                            </>
                    }
                </div>
            </div>
        </>
    )
}
