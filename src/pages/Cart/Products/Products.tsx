import Rectangle from "../../../assets/img/Rectangle-613.png"
import { Cart } from "../../../components/Cart/Cart"

export const Products = () => {
    const products = [
        { img: Rectangle, title: "Название товара", text: "Seamlessly deploy Gnowbe in your organization to create onboarding, minutes, without coding, special ...", price: "291 ₽" },
        { img: Rectangle, title: "Название товара", text: "Seamlessly deploy Gnowbe in your organization to create onboarding, minutes, without coding, special ...", price: "291 ₽" },
        { img: Rectangle, title: "Название товара", text: "Seamlessly deploy Gnowbe in your organization to create onboarding, minutes, without coding, special ...", price: "291 ₽" },
        { img: Rectangle, title: "Название товара", text: "Seamlessly deploy Gnowbe in your organization to create onboarding, minutes, without coding, special ...", price: "291 ₽" }
    ]
    return <section className="section2__cart-catalog">
        <div className="container">
            <h3 className="section2-title__cart-catalog">Вам понравится</h3>
            <div className="section2-container__cart-catalog">
                {products.map((item, i) => <Cart key={i} {...item} />)}
            </div>
        </div>
    </section>
}