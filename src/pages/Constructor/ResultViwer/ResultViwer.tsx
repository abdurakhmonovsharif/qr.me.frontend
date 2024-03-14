import React, { useState } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import iphone from '../../../assets/img/iPhone X2.png'
import { useCreatePageMutation } from "../../../redux/api/page/page.api";
import { useUploadFileMutation } from "../../../redux/api/upload/upload.api";
import { MyModal } from "../../../helpers/MyModal";
export const ResultViwer = () => {
    const html = useSelector((state: RootState) => state.html);
    const sections = useSelector((state: RootState) => state.sections);
    const page = useSelector((state: RootState) => state.page);
    const contact = useSelector((state: RootState) => state.contact);
    const link = useSelector((state: RootState) => state.link);
    const [show, setShow] = useState(false);
    const [copied, setCopied] = useState(false)
    const [siteLink, setSiteLink] = useState("")
    const [createSite] = useCreatePageMutation();
    const [publishSite] = useUploadFileMutation()
    let user = '4e4c8788-7b39-4a47-82d2-efcc3860b8ce'
    const onPublish = async () => {
        const blob = new Blob([html], { type: 'text/html' });
        const file = new File([blob], 'index.html', { type: 'text/html' });
        try {
            const formData = new FormData();
            formData.append('file', file);
            const url = await publishSite(formData);
            if ("data" in url && 'fileURL' in url.data) {
                if (localStorage.getItem("theme") !== null) {
                    let theme = JSON.parse(localStorage.getItem("theme") as string) as Theme;
                    let site_link = url.data.fileURL;
                    const newPage = { ...{ ...page, site_link, userId: user, themeId: theme.id, sections: [...sections], contact: { ...contact }, links: [...link] } }
                    const { data } = await createSite(newPage) as any;
                    setSiteLink(data.site_link)
                    setShow(true)
                }
            }
        } catch (error) {

        }

    }

    return <React.Fragment>
        <div className="constructor2-container-right-parent__section ">
            <div className="constructor2-container-right__section sticky top-[10px]">
                <div className="constructor2-demo relative">
                    <div className="constructor2-demo-content absolute z-40 bg-[#F8F9FA]">
                        <img src={iphone} alt="#" className="absolute inset-0 -z-10" />
                        <iframe srcDoc={html} className="w-full h-full my_clip_path rounded-[6%] py-0.5"></iframe>
                    </div>
                </div>
                <p>Итоговая стоимость:</p>
                <span>1,200 рублей.</span>
                <button type="button" className="btn-demo-constructor openModalDemo2" onClick={onPublish}>Оплатить и опубликовать</button>
            </div>
        </div>
        <MyModal show={show} toogleModal={(bool) => setShow(bool)} title={'Страница создана!'}>
            <div className="text-center flex items-center justify-center  lg:w-[600px]
            flex-col">
                <h3 className="text-base font-medium">
                    Обязательно проверьте QR-код  перед печатью <br /> для производства.
                </h3>
                <div className="w-40 h-40">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="qr" />
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