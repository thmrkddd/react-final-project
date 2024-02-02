import React from "react";
import "./Auth.css";
import ProfileIcon from "../../image/user.png";
import Padlock from "../../image/padlock.png";

const Login = () => {
  return (
    <div>
      {" "}
      <div className="container">
        <div className="login__form">
          <div className="wrapper">
            <div className="title">
              <span>Авторизация</span>
            </div>
            <form action="#">
              <div className="row">
                <i className="fas fa-user">
                  <img src={ProfileIcon} alt="User" width="20" />
                </i>
                <input type="text" placeholder="Электронная почта" required />
              </div>
              <div className="row">
                <i className="fas fa-lock">
                  {" "}
                  <img src={Padlock} alt="User" width="20" />
                </i>
                <input type="password" placeholder="Пароль" required />
              </div>
              <div className="pass">
                <a href="#">Забыли пароль?</a>
              </div>
              <div className="row button">
                <input type="submit" value="Авторизоваться" />
              </div>
              <div className="signup-link">
                Не зарегистрирован?<a href="/register"> Зарегистрироваться</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
