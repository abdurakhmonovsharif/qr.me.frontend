import SliderImg1 from "../../../assets/img/sample1.png";
import SliderImg2 from "../../../assets/img/sample2.png"
import SliderImg3 from "../../../assets/img/sample3.png"
import SliderImg4 from "../../../assets/img/sample2.png"
import SliderImg5 from "../../../assets/img/sample3.png"

const SliderImages = [
    { id: 1, img: SliderImg1 },
    { id: 2, img: SliderImg2 },
    { id: 3, img: SliderImg3 },
    { id: 4, img: SliderImg4 },
    { id: 5, img: SliderImg5 }
]
export const Slider = () => {
    return <section className="section2__sample-page">
        <div className="container container2">
            <div className="swiper swiperSample">
                <div className="swiper-wrapper flex">
                    {SliderImages.map((item) => <div key={item.id} className="swiper-slide">
                        <img src={item.img} alt="img" className="swiperSample-img" />
                    </div>)}
                </div>
                <div className="swiper-button-next swiper-button-next-sample2" />
                <div className="swiper-button-prev swiper-button-prev-sample2" />
            </div>
        </div>
    </section>

}