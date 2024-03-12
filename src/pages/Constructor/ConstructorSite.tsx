import { Template } from "./Template";
import { DinamicBlock } from "./DinamicBlock";
import { ResultViwer } from "./ResultViwer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addSection } from "../../redux/reducers/sections.reducer";
import ReactDOMServer from 'react-dom/server'
import { setHtml } from "../../redux/reducers/html.reducer";
import { Upload_icon } from "../../utils/icons";
import { Contact } from "./Contact";
import { Options } from "./Options";
import React, { ChangeEvent, useEffect, useRef } from "react";
import { useUploadFileMutation } from "../../redux/api/upload/upload.api";
import { setPage } from "../../redux/reducers/page.reducer";
const Sample: React.FC<SampleSiteProps> = ({ contact, description, links, logo, sections, site_name, theme }) => {
    return <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{site_name}</title>
            <meta name="description" content={description} />
            <link
                rel="stylesheet"
                href="https://unpkg.com/swiper/swiper-bundle.min.css"
            />
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                crossOrigin="anonymous"
            />
            {/* swiper  */}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
            />
            <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        </head>
        {/* global  */}
        <style>
            {`
            * {
            font-family:${theme.font_family};
      }
            .sample_body {
                background-color: ${theme.background_color} !important;
                max-width:2200px;
                margin:0 auto;
      }
            .sample_body h3,
            h4,
            p,
            h3 {
                color: ${theme.color} !important;
      }
  
        ::-webkit-scrollbar {
       width: 10px;
      } 


             ::-webkit-scrollbar-track {
            background: #f1f1f1; 
               }
 

          ::-webkit-scrollbar-thumb {
          background: #888; 
            }


         ::-webkit-scrollbar-thumb:hover {
          background: #555; 
           }
        `}
        </style>
        {/* header  */}
        <style>
            {`
    header .qr_button {
        background-color: #5ec3c5;
        padding: 2px 8px;
        font-size: calc(12px + (12 - 8) * ((100vw - 10px) / (1366 - 320)));
        border: none;
        color: #fff;
        border-radius: 8px;
        height: 40px;
        font-weight: 500;
        line-height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      header .modal_body_qr {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      .qr_button_img_container {
        background: #fff;
        width: 35px;
        display: none;
        height: 35px;
      }
      .qr_button_img_container img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      @media screen and (max-width: 768px) {
        .qr_button_img_container {
          display: block;
        }
        .qr_button span {
          display: none;
        }
      }
   `}
        </style>
        {/* slider  */}
        <style>
            {`
            .swiper {
                height: calc(100vh - 76px);
            max-height: 566px;
            width: 100%;
            height: calc(260px + (566 - 260) * ((100vw - 320px) / (1366 - 320)));
      }
            .swiper-slide-item {
             height: calc(260px + (566 - 260) * ((100vw - 320px) / (1366 - 320)));
            width: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
      }
            .swiper-slide-item .swiper-slide-title {
            line-height: 30px;
            font-weight: 500;
            font-size: calc(14px + (28 - 14) * ((100vw - 14px) / (1366 - 320)));
            color: #fff;
      }
        `}
        </style>
        {/* text content */}
        <style>
            {`
            .text_content {
            padding-top: 40px;
            padding-bottom: 40px;
            padding-left: calc(8px + (20 - 8) * ((100vw - 14px) / (1366 - 320)));
            padding-right: calc(8px + (20 - 8) * ((100vw - 14px) / (1366 - 320)));
      }
            .text_content h3 {
            color: #333;
            font-size: calc(14px + (25 - 14) * ((100vw - 14px) / (1366 - 320)));
            font-weight: 900;
            letter-spacing: -0.32px;
      }
            .text_content p {
            font-weight: 400;
            padding-top: 20px;
            font-size: calc(10px + (16 - 10) * ((100vw - 14px) / (1366 - 320)));
      }
        `}
        </style>
        {/* image text  */}
        <style>
            {`
            .image_text {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            height: calc(250px + (566 - 260) * ((100vw - 320px) / (1366 - 320)));
      }
            .image_text h2 {
            line-height: 30px;
            font-weight: 500;
            font-size: calc(14px + (28 - 14) * ((100vw - 14px) / (1366 - 320)));
            color: #fff;
            position: absolute;
            text-align: center;
      }
            .image_text img {
            object-fit: cover;
            height: 100%;
            width: 100%;
      }
         `}
        </style>
        {/* footer */}
        <style>
            {`
            footer {
            padding-top: 20px;
            padding-bottom: 40px;
            padding-left: calc(5px + (40 - 5) * ((100vw - 40px) / (1366 - 320)));
            padding-right: calc(5px + (40 - 5) * ((100vw - 40px) / (1366 - 320)));
            display: flex;
            align-items: center;
            justify-content: space-between;
              }
            footer h3 {
            color: #333;
            font-size: calc(14px + (25 - 14) * ((100vw - 14px) / (1366 - 320)));
            font-weight: 900;
            letter-spacing: -0.32px;
      }
            footer .contacts_container {
            width: 35%;
            display: flex;
            flex-direction: column;
            gap: 20px;
      }
            footer .contacts_container .contacts {
            display: flex;
            flex-direction: column;
            gap: 5px;
      }
            footer .contacts_container .contacts h4 {
            color: #111827;
            font-size: calc(12px + (18 - 12) * ((100vw - 12px) / (1366 - 320)));
            font-weight: 800;
      }
            footer .contacts_container .contacts p {
            color: #111827;
            font-size: calc(10px + (16 - 10) * ((100vw - 10px) / (1366 - 320)));
            font-weight: 500;
      }
            footer .map_container {
            height: 555px;
            width: 65%;
      }
      footer .map_container iframe{
        width:100%;
        height:100%;
      }
            footer .social_links {
            display: grid;
            width: 80%;
            gap: 10px 0;
            grid-template-columns: repeat(4, 1fr);
      }
      footer .social_links a {
        width:35px;
        background-color:#F6F6F6;
        height:35px;
      }
      footer .social_links a img{
        width:100%;
        height:100%;
        object-fit:contain;
      }
            @media screen and (max-width: 768px) {
            footer {
                flex-direction: column;
                gap:20px;
        }
            footer .contacts_container {
                width: 100%;
        }
            footer .map_container {
                width: 100%;
            height: auto;
        }
      }
          `}
        </style>
        <body className="sample_body">
            {/* header  */}
            <header>
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid container_padding">

                        <span className="navbar-brand">
                            <img
                                src={logo}
                                alt="Logo"
                                width="50"
                                height="50"
                                className="d-inline-block align-text-top"
                            />
                        </span>
                        <button
                            className="qr_button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            <div className="qr_button_img_container">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                                    alt="404"
                                />
                            </div>
                            <span className="qr_button_text">Показать QR код страницы</span>
                        </button>
                    </div>
                </nav>
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                {/* close btn */}
                                <div className="d-flex justify-content-end">
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal_body_qr">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                                        alt="404"
                                    />
                                    <h3>Ваш qr-код страницы</h3>
                                    <h6>
                                        Обязательно проверьте QR-код перед печатью для производства.
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {
                sections?.map((section, index) => {
                    if (section.type === "sliders") {
                        return section.sliders.length !== 0 && <section className="swiper" key={index}>
                            <div className="swiper-wrapper">
                                {section?.sliders?.map((slider, sliderIndex) => <div key={sliderIndex} className="swiper-slide">
                                    <div
                                        className="swiper-slide-item"
                                        style={{ backgroundImage: `url(${slider.imageURL})` }}
                                    >
                                        <h2 className="swiper-slide-title">{slider.title}</h2>
                                    </div>
                                </div>)}
                            </div>
                            <div className="swiper-pagination swiper-pagination-slider"></div>
                        </section>
                    } else if (section.type === "text") {
                        return <section className="text_content container_padding">
                            <h3>{section.title}</h3>
                            <p style={{ wordBreak: "break-word" }}>{section.content}</p>
                        </section>
                    } else if (section.type === "image") {
                        return <section className="image_text">
                            <img
                                src={section.imageURL}
                                alt="404"
                            />
                            <h2 className="image_text-slide-title">{section.content}</h2>
                        </section>
                    }
                })
            }
            {/* footer  */}
            <footer>
                <div className="contacts_container">
                    <h3>Контакты</h3>
                    <div className="contacts">
                        <h4>ФИО</h4>
                        <p>{contact.fullname}</p>
                        <h4>Телефон</h4>
                        <p>{contact.phoneNumber}</p>
                        <h4>E-mail</h4>
                        <p>{contact.email}</p>
                        <h4>Адрес</h4>
                        <p>{contact.address}</p>
                    </div>
                    <div className="social_links" id="links_container">
                        {
                            links.map((item, index) => <a target="_blank" href={item.link} key={index}>
                                <img src={item.img} alt={item.type} />
                            </a>)
                        }
                    </div>
                </div>
                <div className="map_container" dangerouslySetInnerHTML={{ __html: contact.map }}></div>
            </footer>
        </body>
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
            crossOrigin="anonymous"
        ></script>

        <script
            dangerouslySetInnerHTML={{
                __html: `
                    const swiper = new Swiper('.swiper', {
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    });
                   const links_container=  document.getElementById("links_container")
                    
                    
                    `
            }}
        />
    </html>
}
export const ConstructorSite = () => {
    const sections = useSelector((state: RootState) => state.sections);
    const page = useSelector((state: RootState) => state.page);
    const contact = useSelector((state: RootState) => state.contact);
    const link = useSelector((state: RootState) => state.link);
    const [uploadFile] = useUploadFileMutation();
    const logoFileInputRef = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch();
    useEffect(() => {
        let theme_from_localStorage = localStorage.getItem("theme");
        if (theme_from_localStorage !== null) {
            let theme = JSON.parse(theme_from_localStorage) as Theme;
            if (theme.id) {
                dispatch(setPage({ value: theme, field: "theme" }))
            }
        }
    }, [])
    const onAddSection = () => {
        dispatch(addSection());
    }
    const onRender = async () => {
        let theme_from_localStorage = localStorage.getItem("theme");
        if (theme_from_localStorage !== null) {
            let theme = JSON.parse(theme_from_localStorage) as Theme;
            let html_code = ReactDOMServer.renderToStaticMarkup(
                <Sample {...{ ...page, theme, sections: [...sections], contact: { ...contact }, links: [...link] }} />
            );
            dispatch(setHtml(html_code))
        } else {
            alert("theme is not selected!")
        }
    }
    const logoInputsChange = async (e: ChangeEvent<HTMLInputElement>, type: string) => {
        if (type === "logo_file") {
            const formData = new FormData();
            if (e.target.files) {
                formData.append("file", e.target.files[0]);
                const data = await uploadFile(formData);
                if ('data' in data && 'fileURL' in data.data) {
                    dispatch(setPage({ value: data.data.fileURL, field: "logo" }));
                    if (logoFileInputRef.current) {
                        logoFileInputRef.current.value = '';
                    }
                }
            }
        } else if (type === "logo_url") {
            dispatch(setPage({ value: e.target.value, field: "logo" }))
        }
    }
    return <main>
        <section className="constructor2__section">
            <div className="container">
                <Template />
                <div className="constructor2-container__section">
                    <div className="constructor2-container-left__section">
                        <h3 className="head-h3">Настройте главный экран</h3>
                        <p className="head-p">Логотип</p>
                        <div className="flex items-center gap-x-2">
                            <input value={page.logo} onChange={(e) => logoInputsChange(e, "logo_url")} className="constructor2-input" type="text" placeholder="Логотип URL" />
                            <label className="cursor-pointer" title="загрузить">
                                <input ref={logoFileInputRef} onChange={(e) => logoInputsChange(e, "logo_file")} hidden type="file" accept="image/*" />
                                <Upload_icon />
                            </label>
                        </div>
                        <p className="head-p">Название сайта</p>
                        <input value={page.site_name} onChange={(e) => dispatch(setPage({ value: e.target.value, field: "site_name" }))} className="constructor2-input" type="text" placeholder="Название сайта" />
                        <p className="head-p">Описание</p>
                        <input
                            value={page.description}
                            onChange={(e) => dispatch(setPage({ value: e.target.value, field: "description" }))}
                            className="constructor2-input mb-4" type="text" placeholder="Описание" />
                        <h3 className="head-h3 -mb-3">Настройте тело страницы</h3>
                        {sections.map((section, index) => <DinamicBlock key={index} {...section} index={index} />)}
                        <div className="constructor2-container-left-block__section">
                            {sections.length < 10 &&
                                <button className="btn-add-block" onClick={onAddSection} type="button">Добавить блок</button>
                            }
                        </div>
                        <Contact />
                        <Options />
                    </div>
                    <ResultViwer />
                </div>
                <button className="btn-add-block w-full lg:!w-[52%] " onClick={onRender} type="button">Предпросмотр</button>
            </div>
        </section >
    </main>

}