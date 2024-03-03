import { QRmessage } from "../../components/QRMessage"
import { Catalog } from "./Catalog"

export const MainCatalog = () => {
    return <main>
        <Catalog />
        <QRmessage />
    </main>
}