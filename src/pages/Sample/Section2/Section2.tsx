import BgImg from "../../../assets/img/sample-bg.png";
export const BlockHeading = () => {
    return <section className="section3__sample-page" style={{ backgroundImage: BgImg }}>
        <div className="container">
        <img src={BgImg} alt="img" className="mx-auto block w-full"/>
            {/* <p className="section3-text__sample-page"> 
                Заголовок блока в две или три строчки
            </p> */}
        </div>
    </section>

}