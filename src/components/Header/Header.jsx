import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';

import './Header.css';
import Logo from '../../img/logo.svg';
import Gamburger from '../../img/gumburger.svg';
import Closebtn from '../../img/close-burger.svg';
import Fb from '../../img/fb.svg';
import Inst from '../../img/inst.svg';
import Ru from '../../img/ru.svg';
import Arr from '../../img/arr.svg';
import { Footer } from 'components/Footer/Footer';

export const Header = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className={isActive ? 'backdrop' : ''}>
      <div className={isActive ? 'popup open' : 'popup'}>
        <nav>
          <div className="menu-wrapper">
            <div>
              {' '}
              <a href="tel:0800508621" className="line1__block-tel-burger">
                0 (800) 508-622
              </a>
              <div className="line1__block-lang-burger">
                <div className="line1__block-current-burger">
                  <img src={Ru} alt="ru" className="lang-icon" />
                  <img src={Arr} alt="arr" className="arr" />
                </div>
              </div>
              <ul className="header__line2--list-mobile">
                <li>
                  <NavLink to="/courses" className="header__line2--item">
                    Курсы обучения
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/course" className="header__line2--item">
                    Вебинары
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/video" className="header__line2--item">
                    Видео-уроки
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" className="header__line2--item">
                    Блог
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="header__line2--item">
                    О нас
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/price" className="header__line2--item">
                    Прайс
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/timetible" className="header__line2--item">
                    Рассписание
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/special" className="header__line2--item">
                    Акции
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/post" className="header__line2--item">
                    Магазин
                  </NavLink>
                </li>
              </ul>
              <div className="line1__block-soc-burger">
                <a href="#/">
                  <img src={Fb} alt="fb" />
                </a>
                <a href="#/">
                  <img src={Inst} alt="inst" />
                </a>
              </div>
            </div>
            <button onClick={toggleClass}>
              <img src={Closebtn} alt="" />
            </button>
          </div>
        </nav>
      </div>
      <header>
        <div className="header__line1">
          <div className="container">
            <div className="header__line1--block">
              <button onClick={toggleClass} className="gumburger-btn" id="hamb">
                <img src={Gamburger} alt="" />
              </button>
              <a className="line1__block-logo" href="/">
                <img src={Logo} alt="logo" />
                <span>
                  Учебный центр <br /> эстетической косметологии
                </span>
              </a>
              <a href="tel:0800508621" className="line1__block-tel">
                0 (800) 508-622
              </a>
              <div className="line1__block-soc">
                <a href="#/">
                  <img src={Fb} alt="fb" />
                </a>
                <a href="#/">
                  <img src={Inst} alt="inst" />
                </a>
              </div>
              <div className="line1__block-lang">
                <div className="line1__block-current-lang">
                  <img src={Ru} alt="ru" className="lang-icon" />
                  <img src={Arr} alt="arr" className="arr" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__line2--block">
          <div className="container">
            <nav>
              <ul className="header__line2--list">
                <li>
                  <NavLink to="/courses" className="header__line2--item">
                    Курсы обучения
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/course" className="header__line2--item">
                    Вебинары
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/video" className="header__line2--item">
                    Видео-уроки
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" className="header__line2--item">
                    Блог
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="header__line2--item">
                    О нас
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/price" className="header__line2--item">
                    Прайс
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/timetible" className="header__line2--item">
                    Рассписание
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/special" className="header__line2--item">
                    Акции
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/post" className="header__line2--item">
                    Магазин
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};
