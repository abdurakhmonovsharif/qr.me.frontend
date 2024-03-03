import { Template } from "./Template";
import { Block1 } from "./Block1";
import { Block2 } from "./Block2";
import { Upload } from "./Upload";
import { Block3 } from "./Block3";
import { Block4 } from "./Block4";
import { Contact } from "./Contact";
import { Options } from "./Options";
import { RightSider } from "./RightSider";

export const Constructor2 = () => {
    return <main>
        <section className="constructor2__section">
            <div className="container">
                <Template />
                <div className="constructor2-container__section">
                    <div className="constructor2-container-left__section">
                        <Block1 />
                        <div className="constructor2-container-left-block__section">
                            <Block2 />
                            <Upload />
                            <Block3 />
                            <Block4 />
                            <Contact />
                            <Options />
                        </div>
                    </div>
                    <RightSider />
                </div>
                <button className="btn-demo-mob openModalDemo" type="button">Предпросмотр</button>
            </div>
        </section >
    </main>

}