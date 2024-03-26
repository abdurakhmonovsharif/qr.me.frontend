import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { Basket_icon1 } from "../../utils/icons"
import { ThemeCard } from "../../components/ThemeCard/ThemeCard"
import { useGetThemesQuery } from "../../redux/api/theme/theme.api"
import Spinner from "../../helpers/Spinner"
import locked_phone from '../../assets/img/locked-phone.png'
import React, { useEffect, useState } from "react"
import { useCreatePasswordMutation, useLoginMutation, usePasswordFoundQuery } from "../../redux/api/auth/auth.api"
import { useDispatch } from "react-redux"
import { setPage } from "../../redux/reducers/page.reducer"
const LoginModal: React.FC<{ show: boolean, toogleModal: () => void, theme: Theme | null }> = ({ theme, show, toogleModal }) => {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");
    const [useLogin, { error: loginError }] = useLoginMutation()
    const pattern = /^[!@#$%^&*]{2}[\w\d]{2,}\d{3}$/;
    const [searchParams] = useSearchParams();
    const url = searchParams.get("url") || ""
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const login = async () => {
        if (pattern.test(inputValue)) {
            try {
                const response = await useLogin({ password: inputValue, url })
                if ('data' in response) {
                    if ('token' in response.data && 'user' in response.data) {
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem("user", JSON.stringify(response.data.user));
                        localStorage.setItem("theme", JSON.stringify(theme));
                        dispatch(setPage({ field: "type", value: response.data.user.plan.name }))
                        navigate(`/create_page?type=${response.data.user.plan.name}`)
                        setError("")
                    }
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            setError("Пароль должен начинаться с двух символов и содержать не менее 5 слово, после чего 3 числа в конце.");
        }
    };
    useEffect(() => {
        if (loginError && 'data' in loginError) {
            const status = loginError.status as any
            if (status === 401) {
                setError("Неверный пароль")
            }
        }
    }, [loginError])

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
const RegisterModal: React.FC<{ show: boolean, toogleModal: () => void, theme: Theme | null }> = ({ theme, show, toogleModal }) => {
    const [inputValue, setInputValue] = useState("");
    const [repeadInputValue, setRepeadPassword] = useState("");
    const [error, setError] = useState("");
    const [createPassword] = useCreatePasswordMutation()
    const [searchParams] = useSearchParams();
    const url = searchParams.get("url") || ""
    const pattern = /^[!@#$%^&*]{2}[\w\d]{2,}\d{3}$/;
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const register = async () => {
        if (pattern.test(inputValue)) {
            if (inputValue !== repeadInputValue) {
                setError("Подтвердить пароль не равен паролю");
                return
            }
            try {
                const response = await createPassword({ password: inputValue, url })
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
                        <h3 className="head-h3 text-center">Установите пароль для входа</h3>
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
                        <h3 className="font-medium text-lg text-[#111827]">Подтвердите пароль</h3>
                        <input
                            value={repeadInputValue}
                            onChange={(e) => {
                                setRepeadPassword(e.target.value);
                                setError(""); // Clear error message on input change
                            }}
                            type="password"
                            className="modal_input mt-2"
                            placeholder="**********************"
                        />
                        {error && <p className="text-red-500">{error}</p>}
                        <button className="bg-[#5EC3C5] w-full h-[56px] rounded-xl mt-4 text-white" onClick={register}>Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}
export const Themes = () => {
    const { data, isLoading } = useGetThemesQuery();
    const [searchParams] = useSearchParams();
    const [passwordFound, setPasswordFound] = useState(false)
    const url = searchParams.get("url") || "";
    const { data: passwordHas, isLoading: password_loading } = usePasswordFoundQuery({ url }, { skip: url === "" })
    const [modal, setModal] = useState(false)
    const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
    const navigateToCreatePage = (theme: Theme) => {
        setModal(true);
        setSelectedTheme(theme);
    }
    const location = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
        const uuidRegex = /\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/i;
        const match = location.pathname.match(uuidRegex);

        if (match) {
            const uuid_has = match[1];
            if (!uuid_has) {
                navigate("/")
            }
        }
    }, [location]);
    useEffect(() => {
        passwordHas && setPasswordFound(passwordHas)
    }, [password_loading])
    return <main>
        {
            passwordFound ?
                <LoginModal theme={selectedTheme} show={modal} toogleModal={() => setModal(!modal)} />
                : <RegisterModal theme={selectedTheme} show={modal} toogleModal={() => setModal(!modal)} />
        }
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