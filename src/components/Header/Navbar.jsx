import React, { useState } from "react";
import "./Navbar.css";
import SearchIcon from "../../image/magnifying-glass.png";
import CartIcon from "../../image/cart.png";
import FavIcon from "../../image/favourite (1).png";
import ProfileIcon from "../../image/user.png";
import BurgerMenu from "../../image/burger-bar.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className=" navbar_container">
        <div className="navbar_actions container">
          <div className="navbar_logo">
            {" "}
            <h3>ELECTRONIC STORE</h3>
          </div>
          <div class="search_container">
            <input type="text" class="search_input" placeholder="Поиск..." />
            <button type="submit" class="search_button">
              <img src={SearchIcon} alt="Search" width="15" />
            </button>
          </div>
          <div className="navbar_buttons">
            <button>
              <img src={FavIcon} alt="Fav" width="23" />
            </button>
            <button>
              <img src={CartIcon} alt="Cart" width="20" />
            </button>
            <button>
              <img src={ProfileIcon} alt="User" width="20" />
            </button>
          </div>
        </div>
      </div>
      <div className="navbar_routing">
        <div className="container">
          {" "}
          <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              <img src={BurgerMenu} alt="Burger" width="20" />
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
