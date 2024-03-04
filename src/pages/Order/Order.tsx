import { RightSider } from "../Basket/RightSider"
import { UserAdress } from "./Adress"
import { Courier } from "./Courier"
import { OrderHero } from "./Hero"
import { Payment } from "./Payment"
import { UserInfo } from "./User"

export const Order = () => {
    return <main>
        <section className="section__make-order">
            <div className="container">
                <OrderHero />
                <div className="section-container__make-order">
                    <div className="section-container-left__make-order">
                        <UserInfo />
                        <UserAdress />
                        <Courier />
                        <Payment />
                    </div>
                    <RightSider />
                </div>
            </div>
        </section>
    </main>

}