import Phone from "../../../assets/img/13717654_5326009 1.png";
import QR from "../../../assets/img/QR Code.svg";

export const Scan = () => {
  return (
    <section className="section4__main">
      <div className="container">
        <div className="section4-container__main">
          <div className="section4-container-left__main">
            <h4>
              Mobile-first, <br />
              microlearning platform
            </h4>
            <p>
              An immersive and flexible bite-sized learning experience, accessed
              anytime and anywhere
            </p>
            <div className="section4-container-left-block__main">
              <div className="section4-container-left-block-qr__main">
                <img src={QR} alt="img" />
              </div>
              <span>
                Scan and <br />
                Get the App <br />
                for free
              </span>
            </div>
          </div>
          <div className="section4-container-right__main">
            <img src={Phone} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};
