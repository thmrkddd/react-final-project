import React, { useState } from "react";
import "./Navbar.css";
import SearchIcon from "../../image/magnifying-glass.png";
import CartIcon from "../../image/cart.png";
import FavIcon from "../../image/favourite (1).png";
import ProfileIcon from "../../image/user.png";
import BurgerMenu from "../../image/burger-bar.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen2, setIsOpen2] = useState(false);
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  return (
    <>
      <div className=" navbar_container">
        <div className="navbar_actions container">
          <div className="navbar_logo" onClick={() => navigate("/")}>
            {" "}
            <h3>ELECTRONIC STORE</h3>
          </div>
          <div className="search_container">
            <input
              type="text"
              className="search_input"
              placeholder="Поиск..."
            />
            <button type="submit" className="search_button">
              <img src={SearchIcon} alt="Search" width="20" />
            </button>
          </div>
          <div className="navbar_buttons">
            <button>
              <img src={FavIcon} alt="Fav" width="21" />
            </button>
            <button>
              <img src={CartIcon} alt="Cart" width="21" />
            </button>
            <button onClick={() => navigate("/login")}>
              <img src={ProfileIcon} alt="User" width="21" />
            </button>
          </div>
        </div>
      </div>
      <div className="navbar_routing">
        <div className="container navbar">
          {" "}
          <div className="dropdown_menus">
            <div className="dropdown">
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                <img src={BurgerMenu} alt="Burger" />
                КАТАЛОГ ТОВАРОВ
              </button>
              <ul
                className="dropdown-menu"
                style={{ display: isOpen ? "block" : "none" }}
              >
                <li>
                  <a href="#">Пункт 1</a>
                </li>
                <li>
                  <a href="#">Пункт 2</a>
                </li>
                <li>
                  <a href="#">Пункт 3</a>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button className="dropdown-toggle" onClick={toggleDropdown2}>
                <img src={BurgerMenu} alt="Burger" />
                ПАНЕЛЬ АДМИНА
              </button>
              <ul
                className="dropdown-menu"
                style={{ display: isOpen2 ? "block" : "none" }}
              >
                <li style={{ padding: "0px 35.6px" }}>
                  <a href="#">+ Товар</a>
                </li>
                <li style={{ padding: "0px 35.6px" }}>
                  <a href="#">+ Категория</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar_li">
            <ul>
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
              <li>
                <a href="#">Корзина</a>
              </li>
              <li>
                <a href="#">Оформление заказа</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
