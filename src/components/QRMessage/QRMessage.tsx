import { QrMessage } from "../../utils/icons";
import { GetStarted } from "../Button/Started";

export const QRmessage = () => {
  return (
    <section className="section9__main">
      <div className="container">
        <div className="section9-container__main">
          <h3>Start exploring QRmessage today!</h3>
          <p>Create your free account, and start exploring QRmessage today!</p>
          <GetStarted />
          <div className="section1-container-bottom__main section9-container-bottom__main">
            <QrMessage />
            <h5>Free plan is free forever!</h5>
          </div>
        </div>
      </div>
    </section>
  );
};
