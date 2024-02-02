import React from "react";
import Clock from "../../image/clock.png";
import Mail from "../../image/mail.png";
import Location from "../../image/location.png";
import Telephone from "../../image/telephone.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="container">
        <h4>О МАГАЗИНЕ</h4>
        <hr />
        <h4>ELECTRONIC STORE</h4>
        <div className="footer_contacts">
          <div className="footer_contact">
            <div>
              {" "}
              <img src={Location} alt="img" />
            </div>
            <div>
              {" "}
              <p>ул. Б.Баатыра 17/2</p>
            </div>
          </div>
          <div className="footer_contact">
            <div>
              {" "}
              <img src={Telephone} alt="img" />{" "}
            </div>
            <div>
              {" "}
              <p>
                996(551) 544-333 WhatsApp/Telegram; 996(504) 544-333
                WhatsApp/Telegram
              </p>
            </div>
          </div>
          <div className="footer_contact">
            <div>
              {" "}
              <img src={Mail} alt="img" />
            </div>
            <div>
              {" "}
              <p> info@sobachka.kg</p>
            </div>
          </div>
          <div className="footer_contact">
            <div>
              {" "}
              <img src={Clock} alt="img" />{" "}
            </div>
            <div>
              {" "}
              <p>
                Пн - Сб: c 9-00 до 19-00 без перерыва; Воскресенье: c 10-00 до
                18-00 без перерыва
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
