import React from 'react';
// import Iframe from 'react-iframe';

import './Footer.css';
import Logo from '../../img/logo.svg';
export const Footer = () => {
  return (
    <footer>
      <div>
        <div className="footer__block">
          <div className="footer__block-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.0730434712914!2d36.227366599999996!3d49.99123999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0fa755e45e7%3A0x65ec04f8b0410828!2z0LLRg9C70LjRhtGPINCa0LvQvtGH0LrRltCy0YHRjNC60LAsIDMsINCl0LDRgNC60ZbQsiwg0KXQsNGA0LrRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDYxMDAw!5e0!3m2!1suk!2sua!4v1664102453038!5m2!1suk!2sua"
              height="736px"
              width="100%"
              title='"This is a unique title"'
            />
          </div>
          <div className="footer__block-contact">
            <div className="footer__block-logo">
              <a href="#/">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <a href="tel:0800508622" className="footer__block-tel">
              0 (800) 508-622
            </a>
            <div className="footer__block-address">
              Харьков, Клочковская, д. 3
            </div>
            <div className="footer__block-menu">
              <ul>
                <li>
                  <a href="#/">Вебинары</a>
                </li>
                <li>
                  <a href="#/">Видео-уроки</a>
                </li>
                <li>
                  <a href="#/">Курсы обучения</a>
                </li>
                <li>
                  <a href="#/">Блог</a>
                </li>
                <li>
                  <a href="#/">О нас</a>
                </li>
                <li>
                  <a href="#/">Прайс</a>
                </li>
                <li>
                  <a href="#/">Рассписание</a>
                </li>
                <li>
                  <a href="#/">Акции</a>
                </li>
                <li>
                  <a href="#/">Магазин</a>
                </li>
              </ul>
            </div>
            <div className="footer__block-social">
              <a href="#/">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.6667 0H4.33333C1.93917 0 0 1.93917 0 4.33333V34.6667C0 37.0608 1.93917 39 4.33333 39H20.8455V23.9178H15.769V18.0137H20.8455V13.6695C20.8455 8.63417 23.9243 5.889 28.418 5.889C29.9325 5.88467 31.4448 5.96267 32.9507 6.1165V11.3815H29.8567C27.4083 11.3815 26.9317 12.5385 26.9317 14.2458V18.005H32.7817L32.0212 23.9092H26.897V39H34.6667C37.0608 39 39 37.0608 39 34.6667V4.33333C39 1.93917 37.0608 0 34.6667 0Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#/">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8333 0C4.85117 0 0 4.85117 0 10.8333V28.1667C0 34.1488 4.85117 39 10.8333 39H28.1667C34.1488 39 39 34.1488 39 28.1667V10.8333C39 4.85117 34.1488 0 28.1667 0H10.8333ZM32.5 4.33333C33.696 4.33333 34.6667 5.304 34.6667 6.5C34.6667 7.696 33.696 8.66667 32.5 8.66667C31.304 8.66667 30.3333 7.696 30.3333 6.5C30.3333 5.304 31.304 4.33333 32.5 4.33333ZM19.5 8.66667C25.4822 8.66667 30.3333 13.5178 30.3333 19.5C30.3333 25.4822 25.4822 30.3333 19.5 30.3333C13.5178 30.3333 8.66667 25.4822 8.66667 19.5C8.66667 13.5178 13.5178 8.66667 19.5 8.66667ZM19.5 13C17.7761 13 16.1228 13.6848 14.9038 14.9038C13.6848 16.1228 13 17.7761 13 19.5C13 21.2239 13.6848 22.8772 14.9038 24.0962C16.1228 25.3152 17.7761 26 19.5 26C21.2239 26 22.8772 25.3152 24.0962 24.0962C25.3152 22.8772 26 21.2239 26 19.5C26 17.7761 25.3152 16.1228 24.0962 14.9038C22.8772 13.6848 21.2239 13 19.5 13Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <a href="#/" className="footer__block-politic">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
