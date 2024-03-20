import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import iphone from '../../../assets/img/iPhone X2.png'
import { useCreatePageMutation } from "../../../redux/api/page/page.api";
import { useUploadFileMutation } from "../../../redux/api/upload/upload.api";
import { MyModal } from "../../../helpers/MyModal";
import HtmlLoader from "../../../helpers/HtmlLoader";
import { toast } from "react-toastify";
import { notify } from "../../../helpers/notify";
import Spinner from "../../../helpers/Spinner";
import { BASE_URL, CLIENT_BASE_URL } from '../../../redux/api/base.api';
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import { clearContact } from "../../../redux/reducers/contact.reducer";
import { clearPage } from "../../../redux/reducers/page.reducer";
import { clearSections } from "../../../redux/reducers/sections.reducer";
import { clearLinks } from "../../../redux/reducers/link.reducer";
import { clearOptions } from "../../../redux/reducers/options.reducer";
import { clearHtml } from "../../../redux/reducers/html.reducer";
export const ResultViwer = () => {
    const html = useSelector((state: RootState) => state.html);
    const sections = useSelector((state: RootState) => state.sections);
    const page = useSelector((state: RootState) => state.page);
    const contact = useSelector((state: RootState) => state.contact);
    const link = useSelector((state: RootState) => state.link);
    const options = useSelector((state: RootState) => state.options);
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [copied, setCopied] = useState(false)
    const [siteLink, setSiteLink] = useState("")
    const [createSite, { error, isSuccess, isLoading }] = useCreatePageMutation();
    const onPublish = async () => {
        if (localStorage.getItem("theme") !== null && localStorage.getItem("user") !== null) {
            const user = JSON.parse(localStorage.getItem("user") as string) as User;
            let theme = JSON.parse(localStorage.getItem("theme") as string) as Theme;
            const newPage = { ...{ ...page, ...options, userId: user.id, themeId: theme.id, sections: [...sections], contact: { ...contact }, links: [...link] } }
            const { data } = await createSite(newPage) as any;
            if (data && "user" in data) {
                setSiteLink(CLIENT_BASE_URL + "ws/" + data.user.url)
                dispatch(clearContact())
                dispatch(clearPage())
                dispatch(clearSections())
                dispatch(clearLinks())
                dispatch(clearOptions())
                dispatch(clearHtml())
            }
        }
    }
    useEffect(() => {
        if (isSuccess) {
            setShow(true)
        } else if (error !== undefined) {
            if (error && typeof error === 'object' && 'data' in error && error.data && typeof error.data === 'object' && 'message' in error.data) {
                notify("error", (error as { data: { message: string } }).data.message);
            }
        }
    }, [error, isSuccess]);


    return <React.Fragment>
        <div className="constructor2-container-right-parent__section ">
            <div className="constructor2-container-right__section sticky top-[106px]">
                <div className="constructor2-demo relative">
                    <div className="constructor2-demo-content absolute z-40 bg-[#F8F9FA]">
                        <img src={iphone} alt="#" className="absolute inset-0 -z-10" />
                        <>
                            {
                                html.loading ? <div className="w-full h-full flex items-center my_clip_path rounded-[6%] py-0.5">
                                    <HtmlLoader />
                                </div> :
                                    <iframe srcDoc={html.content} className="w-full h-full my_clip_path rounded-[6%] py-0.5"></iframe>
                            }
                        </>
                    </div>
                </div>
                <p>Итоговая стоимость:</p>
                <span>1,200 рублей.</span>
                <button type="button" className="btn-demo-constructor openModalDemo2" onClick={onPublish}>
                    {isLoading ? <Spinner /> : "Оплатить и опубликовать"}
                </button>
            </div>
        </div>
        <MyModal show={show} toogleModal={(bool) => setShow(bool)} title={'Страница создана!'} footer={<div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
            <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShow(false)}
            >
                <Link target="_blank" to={siteLink} className="w-full h-full text-white">
                    перейти
                </Link>
            </button>
        </div>}>
            <div className="text-center flex items-center justify-center  lg:w-[600px]
            flex-col">
                <h3 className="text-base font-medium">
                    Обязательно проверьте QR-код  перед печатью <br /> для производства.
                </h3>
                <div className="w-40 h-30 p-3 bg-white">
                    <QRCode
                        className="w-full h-full object-contain"
                        value={siteLink}
                    />
                </div>
                <div className="w-full flex-col lg:flex-row lg:flex items-center gap-x-2 justify-between">
                    <input id="npm-install" type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={siteLink} disabled readOnly />
                    <button className="col-span-2 px-4 text-white bg-[#5ec3c5]   font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center  items-center inline-flex justify-center">
                        {copied ?
                            <span id="success-message" className=" inline-flex items-center">
                                <svg className="w-3 h-3 text-white me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                                Copied!
                            </span> :
                            <span id="default-message" onClick={() => {
                                navigator.clipboard.writeText(siteLink)
                                setCopied(true)
                            }}>Copy</span>
                        }
                    </button>
                </div>
            </div>
        </MyModal>
    </React.Fragment>
}