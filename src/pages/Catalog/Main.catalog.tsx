import { QRmessage } from "../../components/QRMessage/QRMessage"
import { LeftList } from "./Catalog/LeftList"

export const MainCatalog = () => {
    return <main>
        <LeftList />
        <QRmessage />
    </main>
}