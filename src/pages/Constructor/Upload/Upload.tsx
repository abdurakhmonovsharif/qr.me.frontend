import UploadImg from "../../../assets/img/icons-upload.svg";

export const Upload = () => {
    return <div className="constructor2-file__section">
        <h5>Добавьте фотографии</h5>
        <div className="constructor2-file-block__section">
            <img src={UploadImg} alt="" />
            <p>Перетащите файл в эту <br /> область, чтобы загрузить</p>
            <span>или</span>
            <input type="file" className="bg-white outline-none constructor-phone" />
        </div>
    </div>
}