import React from "react";
import { Constructon_icon6 } from "../../../utils/icons"
import { socials } from "../../../helpers/socials";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setContact } from "../../../redux/reducers/contact.reducer";
import { addLink, changeIcon, setLinks } from "../../../redux/reducers/link.reducer";

export const Contact = () => {
    const contact = useSelector((state: RootState) => state.contact);
    const link = useSelector((state: RootState) => state.link);
    const dispatch = useDispatch();
    const onInputChange = (value: string, field: keyof Contact) => {
        dispatch(setContact({ value, field }));
    }
    const onAddLink = async () => {
        const newImage = await fetchSVG(socials[0].icon) as string;
        dispatch(addLink({ img: newImage }))
    }
    const changeLinkIcon = async (index1: number, img: string, type: string) => {
        const newImage = await fetchSVG(img) as string;
        dispatch(changeIcon({ index1, img: newImage, type }))
    }
    const onLinkInputChange = (value: string, index: number) => {
        dispatch(setLinks({ value, index }))
    }
    const fetchSVG = async (url: string) => {
        try {
            const response = await fetch(url);
            const svgBlob = await response.blob();
            const reader = new FileReader();
            return new Promise((resolve, reject) => {
                reader.onloadend = () => {
                    resolve(reader.result);
                };
                reader.onerror = (error) => {
                    reject(error);
                };
                reader.readAsDataURL(svgBlob);
            });
        } catch (error) {
            console.error('Error fetching SVG:', error);
            throw error;
        }
    };
    return <React.Fragment>
        <h3 className="head-h3" id="text">Добавьте контактные данные</h3>
        <div className="constructor2-mini-inputs__section">
            <div className="constructor2-mini-inputs-block__section">
                <p>ФИО</p>
                <input value={contact.fullname} onChange={(e) => onInputChange(e.target.value, "fullname")} type="text" placeholder="Jace Bednar Bednar" />
            </div>
            <div className="constructor2-mini-inputs-block__section">
                <p>Email</p>
                <input value={contact.email} onChange={(e) => onInputChange(e.target.value, "email")} type="email" placeholder="example@de.ri" />
            </div>
            <div className="constructor2-mini-inputs-block__section">
                <p>Телефон</p>
                <input value={contact.phoneNumber} onChange={(e) => onInputChange(e.target.value, "phoneNumber")} type="tel" placeholder="8 (000) 999 99-99" />
            </div>
            <div className="constructor2-mini-inputs-block__section">
                <p>Адрес</p>
                <input value={contact.address} onChange={(e) => onInputChange(e.target.value, "address")} type="text" placeholder="Москва, Мяснитский ряд 2" />
            </div>
        </div>
        <div className="constructor2-input__section">
            <p>
                Iframe встраиваемой карты
                <Constructon_icon6 />
            </p>
            <input value={contact.map} onChange={(e) => onInputChange(e.target.value, "map")} type="text" placeholder="<iframe></iframe>" />
        </div>
        <div className="constructor2-input-social__section">
            <p>
                Выделите необходимые соц сети
                <Constructon_icon6 />
            </p>
            <div className="constructor2-input-social-block__section ">
                {link.map((item1, index1) => {
                    return <div style={{ position: "relative" }} key={index1}>
                        <input value={item1.link} onChange={(e) => onLinkInputChange(e.target.value, index1)} type="url" placeholder="Ваша ссылка" />
                        <img src={item1.img} alt="404" className="input_icon" />
                        <div className="constructor2-input-social-block-links__section my-5">
                            {socials.map((item2, index2) => <button onClick={() => changeLinkIcon(index1, item2.icon, item2.type)} key={index2}
                                className="w-[40px] h-[40px] flex items-center rounded-md bg-[#F6F6F6]">
                                <img src={item2.icon} alt="socials_img" />
                            </button>)}
                        </div>
                    </div>
                })}
            </div>
            <button className="btn-add-block !mt-3" onClick={onAddLink}>Добавить ссылку</button>
        </div>
    </React.Fragment>
}