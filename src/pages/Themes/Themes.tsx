import { Link, useNavigate } from "react-router-dom"
import { Basket_icon1 } from "../../utils/icons"
import { ThemeCard } from "../../components/ThemeCard/ThemeCard"
import { useGetThemesQuery } from "../../redux/api/theme/theme.api"
import Spinner from "../../helpers/Spinner"
import locked_phone from '../../assets/img/locked-phone.png'
import React, { useState } from "react"
import { useLoginMutation } from "../../redux/api/auth/auth.api"
import { useDispatch } from "react-redux"
import { setPage } from "../../redux/reducers/page.reducer"
const PasswordModal: React.FC<{ show: boolean, toogleModal: () => void, theme: Theme | null }> = ({ theme, show, toogleModal }) => {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");
    const [useLogin] = useLoginMutation()
    const pattern = /^[!@#$%^&*]{2}[\w\d]{2,}\d{3}$/;
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const login = async () => {
        if (pattern.test(inputValue)) {
            try {
                const response = await useLogin({ password: inputValue })
                if ('data' in response) {
                    if ('token' in response.data && 'user' in response.data) {
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem("user", JSON.stringify(response.data.user));
                        localStorage.setItem("theme", JSON.stringify(theme));
                        dispatch(setPage({ field: "type", value: response.data.user.plan.name }))
                        navigate(`/create_page?type=${response.data.user.plan.name}`)
                    }
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            setError("Пароль должен начинаться с двух символов и содержать не менее 5 слово, после чего 3 числа в конце.");
        }
    };

    return show ? (
        <div className="justify-center items-center bg-black/15 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999999999] outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 justify-center rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-2 bg-[#5DC1C3] border-b border-solid border-blueGray-200 rounded-t">
                        <img src={locked_phone} alt="404" className=" w-[1000px] h-[258px] object-contain" />
                        <button onClick={toogleModal} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset ">
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="relative p-6 flex-auto">
                        <h3 className="head-h3 text-center">Введите пароль</h3>
                        <h3 className="font-medium text-lg text-[#111827]">Пароль</h3>
                        <input
                            value={inputValue}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                                setError(""); // Clear error message on input change
                            }}
                            type="password"
                            className="modal_input mt-2"
                            placeholder="**********************"
                        />
                        {error && <p className="text-red-500">{error}</p>}
                        <button className="bg-[#5EC3C5] w-full h-[56px] rounded-xl mt-4 text-white" onClick={login}>Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}

export const Themes = () => {
    const { data, isLoading } = useGetThemesQuery();
    const [loginModal, setLoginModal] = useState(false)
    const [registerModal, setRegisterModal] = useState(false)
    const navigate = useNavigate();
    const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
    const navigateToCreatePage = (theme: Theme) => {
        setRegisterModal(true)
        setSelectedTheme(theme);

    }
    return <main>
        <PasswordModal theme={selectedTheme} show={registerModal} toogleModal={() => setRegisterModal(!registerModal)} />
        <section className="section__constructor1">
            <div className="container">
                <div className="breadcrumbs">
                    <Link to={"/"}>Главная</Link>
                    <Basket_icon1 />
                    <p>Конструктор сайтов</p>
                </div>
                <h1 className="section-title__constructor1">
                    Выберите шаблон дизайна
                </h1>
                <div className="section-container__constructor1">
                    {isLoading ? <Spinner /> :
                        data?.length === 0 ? "no data" :
                            data?.map((item, i) => <span key={i}><ThemeCard onSelectTheme={() => navigateToCreatePage(item)} color={item.color}
                                background_color={item.background_color}
                                font_family={item.font_family}
                                id={item.id} /></span>)
                    }
                </div>
            </div>
        </section>
    </main>

}