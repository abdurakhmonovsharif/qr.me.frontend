import { QRmessage } from "../../components/QRMessage/QRMessage"
import { CartIntro } from "./Intro/CartIntro"
import { Products } from "./Products/Products"

export const Cart = () => {
    return <main>
        <CartIntro />
        <Products />
        <QRmessage />
    </main>
}