import './DinamicSite.css'
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import logo from '../../assets/img/logo-qr.svg'
import { Pagination } from 'swiper/modules';
import { MyModal } from '../../helpers/MyModal';
import { useEffect, useState } from 'react';
import { QR_icon } from '../../utils/icons';
import { Link, useParams } from 'react-router-dom';
import { useGetPageByUserIdQuery } from '../../redux/api/page/page.api';
import Spinner from '../../helpers/Spinner';
import { saveAs } from 'file-saver';
import QRCode from "react-qr-code";
import VCard from 'vcard-creator'
import { CLIENT_BASE_URL } from '../../redux/api/base.api';
import { Error } from '../Error';
export default function DinamicSite() {
    const [show, setShow] = useState(false)
    const { link } = useParams();
    const { data, isLoading, isError, error } = useGetPageByUserIdQuery(link as string);
    const downloadCvf = () => {
        const user_VCard = new VCard()
        const { address, fullname, phoneNumber, email } = data?.contact as Contact;
        user_VCard.addAddress(address);
        user_VCard.addEmail(email);
        user_VCard.addPhoneNumber(phoneNumber);
        user_VCard.addName(fullname);
        const vCardString = user_VCard.toString();
        const blob = new Blob([vCardString], { type: 'text/x-vCard;charset=utf-8' });
        saveAs(blob, `${fullname}.vcf`);
    };
    const toogleModal = () => setShow(!show);
    useEffect(() => {

    }, [])
    return isError && 'status' in error && (error.status === 404 || error.status === 403) ? <Error /> : (
        <div style={{ backgroundColor: data?.theme.background_color, color: data?.theme.color, fontFamily: data?.theme.font_family }} className={` sample_body max-w-[1920px] mx-auto`}>
            <MyModal toogleModal={toogleModal} show={show} title='Ваш qr-код страницы' >
                <div className='w-full flex justify-center bg-white'>
                    <QRCode
                        size={320}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={CLIENT_BASE_URL + "ws/" + data?.user.url}
                        viewBox={`0 0 256 256`}
                    />
                </div>
            </MyModal>
            <header>
                <span className="lg:w-[80px] w-[60px] h-auto">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-full h-full object-contain"
                    />
                </span>
                <button
                    onClick={toogleModal}
                    className="bg-[#5ec3c5] rounded-lg h-[40px] font-normal leading-5 flex items-center justify-center text-center p-4"
                >
                    <div
                        className='w-[35px] h-[35px] flex items-center justify-center lg:hidden'
                    >
                        <QR_icon />
                    </div>
                    <span className="hidden lg:block text-white">Показать QR код страницы</span>
                </button>
            </header>
            {
                isLoading ? <div className='w-full h-full flex justify-center items-center pt-56'>
                    <Spinner />
                </div> : <>
                    <main >
                        {
                            data?.type === "blog" ?
                                <>
                                    {data?.sections.map((section) => {
                                        if (section.type === "sliders") {
                                            return <Swiper
                                                key={section.id}
                                                modules={[Pagination]}
                                                slidesPerView={1}
                                                pagination={{ clickable: true }}
                                                className=''
                                            >
                                                {section.sliders.map((slider, sliderIndex) => <SwiperSlide className='max-h-[560px] h-[260px] md:h-[360px] lg:h-[calc(100vh-81px)]' key={sliderIndex}>
                                                    <div
                                                        className="bg-no-repeat !bg-fixed 
                            !bg-cover flex items-center justify-center h-[260px] md:h-[360px]  lg:!h-[calc(100vh-81px)] lg:max-h-[560px]"
                                                        style={{ backgroundImage: `url(${slider.imageURL})` }}
                                                    >
                                                        <h2 className="!text-white font-medium text-sm md:text-base lg:text-3xl line-clamp-2 px-7">{slider.title}</h2>
                                                    </div>
                                                </SwiperSlide>
                                                )}
                                            </Swiper>
                                        } else if (section.type === "text") {
                                            return <section className="text_content container_padding"
                                                key={section.id}
                                            >
                                                <h3 style={{ color: data?.theme.color }} className='line-clamp-1'>{section.title}</h3>
                                                <p style={{ wordBreak: "break-word", color: data?.theme.color }}>{section.content}</p>
                                            </section>
                                        } else if (section.type === "image") {
                                            return <section className="image_text max-h-[460px]"
                                                key={section.id}
                                            >
                                                <img
                                                    className='w-full h-full object-cover'
                                                    src={section.imageURL}
                                                    alt="404"
                                                />
                                                <h2 className="absolute !text-white line-clamp-2 px-7">{section.content}</h2>
                                            </section>
                                        }
                                    })}

                                </> : data?.type === "b_card" ?
                                    <>
                                        {data.sections.map((section) => {
                                            if (section.type === "text") {
                                                return <section className="text_content container_padding"
                                                    key={section.id}
                                                >
                                                    <h3 style={{ color: data?.theme.color }} className='line-clamp-1'>{section.title}</h3>
                                                    <p style={{ wordBreak: "break-word", color: data?.theme.color }}>{section.content}</p>
                                                </section>
                                            } else if (section.type === "image") {
                                                return <section
                                                    key={section.id}
                                                    className="image_text max-h-[460px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${section.imageURL})` }}>
                                                    <h2 className="line-clamp-2 px-7">{section.content}</h2>
                                                </section>
                                            }
                                        })}
                                    </>

                                    : data?.type === "text" && <>
                                        {data.sections.map((section) => {
                                            return <section
                                                key={section.id}
                                                className="text_content container_padding">
                                                <h3 style={{ color: data?.theme.color }} className='line-clamp-1'>{section.title}</h3>
                                                <p style={{ wordBreak: "break-word", color: data?.theme.color }}>{section.content}</p>
                                            </section>
                                        })}
                                    </>
                        }

                        {/* <Swiper
                            className='!p-10'
                            modules={[FreeMode, Navigation]}
                            slidesPerView={3}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            spaceBetween={30}
                            navigation={true}
                            freeMode={true}
                        >
                            {section?.sliders?.map((slider, sliderIndex) => <SwiperSlide className='max-h-[560px] h-[260px] md:h-[360px] lg:h-[calc(100vh-81px)]    ' key={sliderIndex}>
                                <div
                                    className="bg-no-repeat !bg-fixed 
                            !bg-cover flex items-center justify-center h-[215px]"
                                    style={{ backgroundImage: `url(${slider.imageURL})` }}
                                >
                                </div>
                            </SwiperSlide>
                            )}
                        </Swiper>   */}


                        {/* {
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
                } */}
                    </main>
                    {data?.type !== "text" &&
                        <>
                            <div className='footer_sample' style={{ background: data?.theme.background_color }}>
                                <div className="contacts_container">
                                    <h3 style={{ color: data?.theme.color }}>Контакты</h3>
                                    <div className="contacts" >
                                        <h4 style={{ color: data?.theme.color }}>ФИО</h4>
                                        <p style={{ color: data?.theme.color }}>{data?.contact.fullname}</p>
                                        <h4 style={{ color: data?.theme.color }}>Телефон</h4>
                                        <p style={{ color: data?.theme.color }}>{data?.contact.phoneNumber}</p>
                                        <h4 style={{ color: data?.theme.color }}>E-mail</h4>
                                        <p style={{ color: data?.theme.color }}>{data?.contact.email}</p>
                                        <h4 style={{ color: data?.theme.color }}>Адрес</h4>
                                        <p style={{ color: data?.theme.color }}>{data?.contact.address}</p>
                                    </div>
                                    <div className="social_links" id="links_container">

                                    </div>
                                </div>
                                <div className="map_container"
                                    dangerouslySetInnerHTML={{ __html: data?.contact.map || "" }}
                                >
                                </div>

                            </div>
                            <div className="footer_sample-page">
                                <div className="container">
                                    <div className="footer-block_sample-page ">
                                        <button onClick={downloadCvf} className='text-white'>Сохранить в контактах</button>
                                        <span />
                                        <Link to={""}> Отправить ссылку на страницу </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </>
            }
        </div>
    )
}

