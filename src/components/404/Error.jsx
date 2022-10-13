import React from 'react';

import './Error.css';
import Errorimg from '../../img/error.svg';
import Logo from '../../img/logo.svg';

export const Erorr = () => {
  return (
    <div>
      <section className="page-404">
        <div className="container">
          <div className="page-404__block">
            <img src={Errorimg} alt="" />
            <div className="page-404__block-txt">
              <div className="page-404__block-txt-logo">
                <img src={Logo} alt="logo" />
                <span>
                  Учебный центр <br /> эстетической косметологии
                </span>
              </div>
              <div className="text1">Похоже, эта страница отсутствует</div>
              <div className="text2">
                Мы обязательно разберемся с этим недоразумением! <br /> А пока
                вернитесь на главную страницу
              </div>
              <a href="#/" className="to-home">
                Вернуться на главную
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
