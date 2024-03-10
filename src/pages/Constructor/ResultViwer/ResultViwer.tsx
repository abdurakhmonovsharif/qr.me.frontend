import React from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import iphone from '../../../assets/img/iPhone X2.png'
import { useCreatePageMutation, usePublishPageMutation } from "../../../redux/api/page/page.api";
import { useUploadFileMutation } from "../../../redux/api/upload/upload.api";
export const ResultViwer = () => {
    const html = useSelector((state: RootState) => state.html);
    const sections = useSelector((state: RootState) => state.sections);
    const page = useSelector((state: RootState) => state.page);
    const contact = useSelector((state: RootState) => state.contact);
    const link = useSelector((state: RootState) => state.link);
    const [createSite] = useCreatePageMutation();
    const [publishSite] = useUploadFileMutation()
    let user = '793e2c69-0a69-47b5-bd2f-843213f07d01'
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
                    const data = await createSite(newPage);
                    console.log(data);
                }
            }
        } catch (error) {

        }


    }
    return <React.Fragment>
        <div className="constructor2-container-right-parent__section ">
            <div className="constructor2-container-right__section sticky top-[108px]">
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
    </React.Fragment>
}