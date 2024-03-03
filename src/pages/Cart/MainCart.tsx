import { QRmessage } from "../../components/QRMessage";
import { CartIntro } from "./Intro/CartIntro"
import { Products } from "./Products";

export const Cart = () => {
    return <main>
        <CartIntro />
        <Products />
        <QRmessage />
    </main>
}