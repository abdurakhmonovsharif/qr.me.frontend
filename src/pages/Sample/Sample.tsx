import { QR_icon } from "../../utils/icons"

const Sample = () => {
    return <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Simple page</title>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                crossOrigin="anonymous"
            ></link>
        </head>
        <body>
            <header className="header__sample-page">
                <div className="container">
                    <div className="header-container__sample-page">
                        <div className="header-container-logo__sample-page">Logo</div>
                        <button className="header-btn__sample-page openModalQR" type="button">
                            <span> Показать QR код страницы</span>
                            <QR_icon />
                        </button>
                    </div>
                </div>
            </header>
        </body>
    </html>
}
export default Sample;