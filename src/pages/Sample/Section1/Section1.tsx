import BgImg from "../../../assets/img/mesmerizing-scenery-of-green-mountains-with-cloudy-sky-surface 1.png";
export const SectionTitle = () => {
    return <section className="section1__sample-page">
        <div className="section1-slider__sample-page">
            <div className="swiper swiperSlider">
                <div className="swiper-wrapper">
                    <img src={BgImg} alt="img" className="m-auto w-full"/>
                    {/* <div className="swiper-slide">
                        <div className="swiperSlider-block" style={{ backgroundImage: `url(${BgImg})` }}>
                            <p>Заголовок сайта в две или три строчки</p>
                        </div>
                    </div> */}
                    {/* <div className="swiper-slide">
                        <div className="swiperSlider-block" style={{ backgroundImage: 'url("/img/mesmerizing-scenery-of-green-mountains-with-cloudy-sky-surface 1.png")' }}>
                            <p>Заголовок сайта в две или три строчки</p>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="swiperSlider-block" style={{ backgroundImage: 'url("/img/mesmerizing-scenery-of-green-mountains-with-cloudy-sky-surface 1.png")' }}>
                            <p>Заголовок сайта в две или три строчки</p>
                        </div>
                    </div> */}
                </div>
                <div className="swiper-pagination swiper-pagination-slider" />
            </div>
        </div>
    </section>

}