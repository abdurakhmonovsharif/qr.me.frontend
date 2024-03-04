import { QR_icon } from "../../../utils/icons"

export const SampleHeader = () => {
    return <header className="header__sample-page">
        <div className="container">
            <div className="header-container__sample-page">
                <div className="header-container-logo__sample-page">Logo</div>
                <button className="header-btn__sample-page openModalQR" type="button">
                    <span> Показать QR код страницы </span>
                    <QR_icon />
                </button>
            </div>
        </div>
    </header>

}