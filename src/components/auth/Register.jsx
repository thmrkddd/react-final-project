import React from "react";
import "./Auth.css";
import ProfileIcon from "../../image/user.png";
import Padlock from "../../image/padlock.png";

const Register = () => {
  return (
    <div>
      <div className="container">
        <div className="login__form">
          <div className="wrapper">
            <div className="title">
              <span>Регистрация</span>
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
              <div className="row">
                <i className="fas fa-lock">
                  {" "}
                  <img src={Padlock} alt="User" width="20" />
                </i>
                <input
                  type="password"
                  placeholder="Подтвердите пароль"
                  required
                />
              </div>
              <div className="row button">
                <input type="submit" value="Зарегистрироваться" />
              </div>
              <div className="signup-link">
                Есть аккаунт?<a href="/login"> Авторизоваться</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
