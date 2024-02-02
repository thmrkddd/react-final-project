import React, { useEffect, useState } from "react";
import "./Main.css";
import TV from "../../image/buy-laptop-online-in-Pakistan.webp";
import BreathCleaner from "../../image/68464173-1.jpg";
import GeniusPlatform from "../../image/scale_1200.png";
import OriginalProduct from "../../image/product-management.png";
import Delivery from "../../image/delivery-truck.png";
import Headphones from "../../image/headphone.png";
import Podcast from "../../image/podcast-.png";
import Monitor from "../../image/desktop.png";
import Laptop from "../../image/laptop.png";
import KeyboardAndMouse from "../../image/keyboard-and-mouse.png";
import Gadgets from "../../image/gadgets.png";
import Electronics from "../../image/electronics.png";
import { images } from "../../helpers/const";

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const maxTranslateX = -340.7;

  const handleNext = () => {
    const nextTranslateX = -((currentIndex + 1) * 40);
    if (nextTranslateX === maxTranslateX) return;
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div className="container">
        <button
          onClick={() => scrollToTop()}
          id="scrollToTopBtn"
          title="Go to top"
          style={{ display: showScrollButton ? "block" : "none" }}
        >
          ВВЕРХ
        </button>
        <div className="section_images">
          {" "}
          <div className="section_imagef">
            <img src={TV} alt="TV" />
          </div>
          <div className="section_imagest">
            <div>
              <img src={BreathCleaner} alt="BC" />
            </div>
            <div>
              <img src={GeniusPlatform} alt="GP" />
            </div>
          </div>
        </div>
        <div>{""}</div>
        <div className="slider-container">
          <div className="slider_title">
            <h4>ЭКОСИСТЕМА MIOT</h4>
          </div>
          <hr />
          <div
            className="slides"
            style={{
              transform: `translateX(${Math.max(
                maxTranslateX,
                -currentIndex * 40
              )}%)`,
            }}
          >
            {images.map((imageUrl, index) => (
              <div className="slides_image">
                <img key={index} src={imageUrl} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <button
            className="prevButton"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            ‹
          </button>
          <button
            className="nextButton"
            onClick={handleNext}
            disabled={currentIndex >= 8}
          >
            ›
          </button>
        </div>
        <div className="recommendation_container">
          <div className="slider_title">
            <h4>РЕКОМЕНДУЕМ</h4>
            <h5>
              <a href="#">WIFI РОУТЕРЫ, АДАПТЕРЫ, УСИЛИТЕЛИ, РОБОТЫ ПЫЛЕСОСЫ</a>
            </h5>
          </div>
          <hr />
          <div className="rc_items">
            <div className="rc_item">
              <div className="rc_item_image">
                <img
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300/https://sobachka.kg/wp-content/uploads/2023/10/402.970-300x300.jpg"
                  alt="img"
                />
              </div>
              <div className="rc_item_title">
                <p>
                  <span>Сетевой Адаптер</span> Tp-Link TL-UE300C Type-C
                  (Ethenet,RG45,USB 3,0)
                </p>
                <h4>1 700,00 сом</h4>
                <button>В КОРЗИНУ</button>
              </div>
            </div>
            <div className="rc_item">
              {" "}
              <div className="rc_item_image">
                <img
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300/https://sobachka.kg/wp-content/uploads/2023/10/1large_1581670076523i-300x300.jpg"
                  alt="img"
                />
              </div>
              <div className="rc_item_title">
                <p>
                  <span>Сетевой Адаптер</span> Tp-Link TL-UE300
                  (Ethenet,RG45,USB 3,0)
                </p>
                <h4>1 400,00 сом</h4>
                <button>В КОРЗИНУ</button>
              </div>
            </div>
            <div className="rc_item">
              {" "}
              <div className="rc_item_image">
                <img
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300/https://sobachka.kg/wp-content/uploads/2023/07/bez-nazvani2ya-300x300.jpg"
                  alt="img"
                />
              </div>
              <div className="rc_item_title">
                <p>
                  <span>Роутер</span> Xiaomi Router AC1200 (Ethenet,RG45,USB
                  3,0)
                </p>
                <h4>3 200,00 сом</h4>
                <button>В КОРЗИНУ</button>
              </div>
            </div>
            <div className="rc_item">
              {" "}
              <div className="rc_item_image">
                <img
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300/https://sobachka.kg/wp-content/uploads/2023/04/11-12-300x300.jpg"
                  alt="img"
                />
              </div>
              <div className="rc_item_title">
                <p>
                  <span>Роутер</span>Xiaomi Redmi Router AX5400 (RA74)
                </p>
                <h4>6 200,00 сом</h4>
                <button>В КОРЗИНУ</button>
              </div>
            </div>
            <div className="rc_item">
              {" "}
              <div className="rc_item_image">
                <img
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300/https://sobachka.kg/wp-content/uploads/2023/04/pms_1648802740.80317174-600x600-1-300x300.jpg"
                  alt="img"
                />
              </div>
              <div className="rc_item_title">
                <p>
                  <span>Роутер</span> Xiaomi Redmi AX6000 (RB06)
                </p>
                <h4>9 100,00 сом</h4>
                <button>В КОРЗИНУ</button>
              </div>
            </div>
            <div className="rc_item">
              {" "}
              <div className="rc_item_image">
                <img
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300/https://sobachka.kg/wp-content/uploads/2023/03/bez-nazvaniya-300x300.png"
                  alt="img"
                />
              </div>
              <div className="rc_item_title">
                <p>
                  <span>Роутер</span> Wi-Fi ASUS RT-AX53U (AX180)
                </p>
                <h4>6 400,00 сом</h4>
                <button>В КОРЗИНУ</button>
              </div>
            </div>
            <div className="rc_item">
              {" "}
              <div className="rc_item_image">
                <img
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300/https://sobachka.kg/wp-content/uploads/2023/03/1_1776_1046-300x300.webp"
                  alt="img"
                />
              </div>
              <div className="rc_item_title">
                <p>
                  <span>Роутер</span>
                  Wi-Fi ASUS (RT-AC65P)
                </p>
                <h4>6 400,00 сом</h4>
                <button>В КОРЗИНУ</button>
              </div>
            </div>
            <div className="rc_item">
              {" "}
              <div className="rc_item_image">
                <img
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300/https://sobachka.kg/wp-content/uploads/2023/03/fyrpqcpf5ufdrvqb_setting_000_1_90_end_500.png-300x300.jpeg"
                  alt="img"
                />
              </div>
              <div className="rc_item_title">
                <p>
                  <span>Роутер</span>
                  Wi-Fi ASUS (RT-AC1900U)
                </p>
                <h4>6 400,00 сом</h4>
                <button>В КОРЗИНУ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_spacing">
        <div className="section_spacing_item">
          <div>
            {" "}
            <img src={OriginalProduct} alt="img" />
          </div>
          <div>
            {" "}
            <h4>ОРИГИНАЛЬНЫЕ ПРОДУКТЫ</h4>
            <p>Только качественная и оригинальная продукция</p>
          </div>
        </div>
        <div className="section_spacing_item">
          <div>
            <img src={Delivery} alt="img" />
          </div>
          <div>
            {" "}
            <h4>ДОСТАВКА</h4>
            <p>Самовывоз и курьерская доставка по Бишкеку</p>
          </div>
        </div>
        <div className="section_spacing_item">
          <div>
            {" "}
            <img src={Headphones} alt="img" />
          </div>
          <div>
            <h4>КОНСУЛЬТАЦИЯ</h4>
            <p>Профессиональная консультация на все интересующие вопросы</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container_productscount">
          <div className="product_count">
            <div>
              <img src={Laptop} alt="img" />
            </div>
            <div>
              {" "}
              <h4>НОУТБУКИ</h4>
              <span>272 товара</span>
            </div>
          </div>
          <div className="product_count">
            {" "}
            <div>
              <img src={KeyboardAndMouse} alt="img" />
            </div>
            <div>
              {" "}
              <h4>
                МЫШКИ И<br />
                КЛАВИАТУРЫ
              </h4>
              <span>202 товара</span>
            </div>
          </div>
          <div className="product_count">
            {" "}
            <div>
              <img src={Podcast} alt="img" />
            </div>
            <div>
              {" "}
              <h4>
                НАУШНИКИ
                <br />И МИКРОФОНЫ
              </h4>
              <span>156 товаров</span>
            </div>
          </div>
          <div className="product_count">
            {" "}
            <div>
              <img src={Monitor} alt="img" />
            </div>
            <div>
              {" "}
              <h4>МОНИТОРЫ</h4>
              <span>150 товаров</span>
            </div>
          </div>
          <div className="product_count">
            {" "}
            <div>
              <img src={Gadgets} alt="img" />
            </div>
            <div>
              {" "}
              <h4>ГАДЖЕТЫ</h4>
              <span>275 товаров</span>
            </div>
          </div>
          <div className="product_count">
            {" "}
            <div>
              <img src={Electronics} alt="img" />
            </div>
            <div>
              {" "}
              <h4>БЫТОВАЯ ТЕХНИКА</h4>
              <span>64 товара</span>
            </div>
          </div>
        </div>
        <div className="breath_cleaner_container">
          <div className="breath_cleaner_quad">
            <div className="breath_cleaner_center">
              <div className="breath_cleaner_border">
                {" "}
                <h3>
                  ОЧИСТИТЕЛИ ВОЗДУХА <br />
                  XIAOMI MI AIR
                </h3>
                <button>
                  <a href="#">ПОДРОБНЕЕ</a>
                </button>
              </div>{" "}
            </div>
          </div>
          <div className="breath_cleaner_quad">
            <div className="breath_cleaner_center">
              <div className="breath_cleaner_border">
                {" "}
                <h3>
                  МОНИТОРЫ <br /> SAMSUNG
                </h3>
                <button>
                  <a href="#">ПОДРОБНЕЕ</a>
                </button>
              </div>{" "}
            </div>
          </div>
          <div className="breath_cleaner_quad">
            <div className="breath_cleaner_center">
              <div className="breath_cleaner_border">
                {" "}
                <h3>
                  НОУТБУКИ <br />
                  ACER
                </h3>
                <button>
                  <a href="#">ПОДРОБНЕЕ</a>
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="aboutus_container">
          <h4>О НАС</h4>
          <hr />
          <div className="aboutus_typography">
            <p>
              <strong>ELECTRONIC STORE</strong>— это розничная сеть магазинов
              электроники, гаджетов, компьютерной и бытовой техники для дома и
              офиса. Компания Собачка.кг создана и представлена на рынке
              Кыргызстана с 2003 года. Мы работаем для Вас более двух
              десятилетий и дорожим каждым нашим клиентом. Мы понимаем, что
              каждый наш клиент имеет свои уникальные потребности и
              предпочтения, поэтому мы предлагаем индивидуальный подход к
              каждому из них. Работайте с легкостью, живите с удовольствием —
              это наша цель. <strong>ELECTRONIC STORE</strong> — инновационные
              решения для вашего дома и офиса. От компьютерной техники до
              бытовой электроники. Мы стремимся предложить вам только лучшие и
              качественные товары по доступным ценам. Магазины электроники,
              гаджетов, компьютерной и бытовой техники «
              <strong>ELECTRONIC STORE</strong>» предлагают широкий ассортимент
              товаров известных мировых брендов:{" "}
              <strong>
                Xiaomi, Deerma, Mijia, Amazfit, Ninebot, Roborock , 90-point ,
                DUKA , Haylou, Mibro, 70mai, MITU, Lofans, Oclean, NexTool, QCY,
                Redmi, Smartmi, Tp-Link, ASUS, Apecer, Logitech, A4TECH, ACER,
                ADATA, PHILIPS{" "}
              </strong>{" "}
              и многие другие.
            </p>
            <span>На сайте представлены:</span>
            <div className="aboutus_typography">
              <ul>
                <li>
                  Огромный выбор продукции <strong>Xiaomi</strong> для
                  использования во всех аспектах повседневной жизни для дома,
                  офиса, спорта и путешествий.
                </li>
                <li>Мониторы, телевизоры, антенны и крепления к ним.</li>
                <li>
                  Большой ассортимент сетевого оборудования для устройств Wi-Fi:
                  Роутеры, маршрутизаторы, репитеры, усилители сигнала и
                  аксессуары к ним (UTP кабели, разъемы, обжимы и т.д..)
                </li>
                <li>
                  Компьютерное периферийное оборудование для ПК и ноутбуков,
                  (клавиатуры, мыши, HDD, флеш, SD карты ,CD/DVD диски и многое
                  другое)
                </li>
                <li>
                  Широкий выбор саундбаров,сабвуферов, колонок и наушников
                </li>
                <li>Видеонаблюдение и охрана</li>
                <li>Кабели, разъемы, переходники, приборы, инструменты</li>
                <li>
                  Система <strong>Xiaomi</strong> «Умный дом»
                </li>
                <li>Умные розетки и выключатели, контроллеры управления</li>
                <li>Бытовая техника Ксиоми для кухни, ванной, дома и офиса</li>
                <li>Различные блоки питания, удлинители и розетки</li>
                <li>Транспорт: электросамокаты, велосипеды и гироскутеры</li>
              </ul>
              <p>
                <strong>«ELECTRONIC STORE» </strong>
                это не только <strong> интернет-магазин с доставкой</strong> по
                всему Кыргызстану, но и магазины электроники, гаджетов,
                комплектующих, бытовой и компьютерной техники в Бишкеке. Наш
                магазин имеет огромную аудиторию довольных покупателей по всей
                республике. Мы всегда готовы предложить огромный выбор товара,
                низкие цены и профессиональную консультацию. Наши компетентные и
                дружелюбные продавцы всегда готовы помочь вам с выбором и
                ответить на все ваши вопросы. Мы регулярно отслеживаем последние
                тенденции. Обновляем и постоянно расширяем ассортимент товаров и
                неустанно следим за новинками на рынке. С помощью нашего сайта
                вы можете осуществлять выгодные покупки, не выходя из дома.
                Покупку можно забрать в ближайшей к вам торговой точке, либо
                заказать курьерскую доставку до двери.
              </p>
            </div>
            <span>
              Появились вопросы? Обращайтесь к нашим консультантам по телефону:
              996(551) 544-333, 996(504) 544-333 WhatsApp/Telegram;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
