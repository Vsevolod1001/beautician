import React from 'react';
import { SliderCo } from 'components/Slider/SliderCo';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

import Mc1 from '../../img/mc1.jpg';
import Mc2 from '../../img/mc2.jpg';
import 'swiper/css';

import './HomePage.css';
import Womans from '../../img/womans.png';
import About from '../../img/about.jpg';
import LongArr from '../../img/longarr.svg';
import Sec41 from '../../img/sec4-1.png';
import Sec42 from '../../img/sec4-2.png';
import Sec43 from '../../img/sec4-3.png';
import Sec44 from '../../img/sec4-4.png';
import Sec45 from '../../img/sec4-5.png';
import Model from '../../img/model.jpg';
import Ac1 from '../../img/ac1.jpg';
import Ac2 from '../../img/ac2.jpg';
import Ac3 from '../../img/ac3.jpg';
import { Footer } from 'components/Footer/Footer';

export const HomePage = () => {
  return (
    <div>
      <section className="sec1">
        <div className="container">
          <div className="sec1__block">
            <img src={Womans} alt="womans" />
            <div className="sec1__block--text-block">
              <div className="text__block-text1">Бесплатный вебинар</div>
              <div className="text__block-text2">ПРОФЕССИЯ КОСМЕТОЛОГ</div>
              <div className="text__block-text3">
                Приглашаем на бесплатный вебинар для профессиональных
                косметологов и интересующихся этой профессией
              </div>
              <div className="text__block-text4">
                <button className="btn bg-green mob-mar">
                  Зарегистрироваться
                </button>
                <button className="btn bg-trnsprnt">Узнать подробнее</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec2">
        <div className="container">
          <div className="trigger-block">
            <div className="trigger-block__item">
              <div className="trigger-block__item-text1">4000+</div>
              <div className="trigger-block__item-text2">
                Сертификатов мы выдали
              </div>
            </div>
            <div className="trigger-block__item">
              <div className="trigger-block__item-text1">3500+</div>
              <div className="trigger-block__item-text2">
                Моделей <br /> в нашей базе
              </div>
            </div>
            <div className="trigger-block__item">
              <div className="trigger-block__item-text1">1500+</div>
              <div className="trigger-block__item-text2">
                Специалистов мы обучили
              </div>
            </div>
            <div className="trigger-block__item">
              <div className="trigger-block__item-text1">5500+</div>
              <div className="trigger-block__item-text2">
                Довольных клиентов
              </div>
            </div>
          </div>

          <h2>Курсы обучения</h2>

          <div className="slider-wrap-block">
            <SliderCo />
          </div>
        </div>
      </section>
      {/*    <section className="sec3">
        <div className="container">
          <div className="sec3__block">
            <div className="sec3__block-img-block">
              <img src={About} alt="about" />
            </div>
            <div className="sec3__block-txt-block">
              <div className="text1">О нас</div>
              <div className="text2">
                <span>VALMARI</span> ВЕДУЩИЙ УЧЕБНЫЙ ЦЕНТР ЭСТЕТИЧЕСКОЙ
                КОСМЕТОЛОГИИ{' '}
              </div>
              <div className="text3">
                <p>Описание может быть любое.</p>
                <p>Ведущий учебный центр эстетической косметологии.</p>
                <p>
                  Более 5 лет мы проводим курсы сертифицированные курсы
                  профессионального образованияв области косметологиии индустрии
                  красоты, здоровьяи молодости
                </p>
              </div>
              <a href="#/">
                <span>Подробнее</span> <img src={LongArr} alt="longarr" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="sec4">
        <div className="container">
          <h2>Обучение косметологов</h2>
          <div className="sec4__block">
            <a href="#/" className="sec4__block-item special-block">
              <img src={Sec41} alt="" />
              <div className="twrap">
                <div className="text1">курсы косметологии</div>
                <div className="text2">
                  - эстетическая косметология <br />
                  - инъекционная косметология <br />- лазерная косметология
                </div>
              </div>
            </a>
            <a href="#/" className="sec4__block-item special-block">
              <img src={Sec42} alt="" />
              <div className="twrap">
                <div className="text1">Онлайн обучение</div>
                <div className="text2">
                  - эстетическая косметология <br />
                  - инъекционная косметология <br />- лазерная косметология
                </div>
              </div>
            </a>
            <a href="#/" className="sec4__block-item">
              <img src={Sec43} alt="" />
              <div className="twrap">
                <div className="text1">мастер-классы</div>
                <div className="text2">
                  - эстетическая косметология <br />
                  - инъекционная косметология <br />- лазерная косметология
                </div>
              </div>
            </a>
            <a href="#/" className="sec4__block-item">
              <img src={Sec44} alt="" />
              <div className="twrap">
                <div className="text1">расписание</div>
                <div className="text2">
                  - эстетическая косметология <br />
                  - инъекционная косметология <br />- лазерная косметология
                </div>
              </div>
            </a>
            <a href="#/" className="sec4__block-item">
              <img src={Sec45} alt="" />
              <div className="twrap">
                <div className="text1">Акции</div>
                <div className="text2">
                  - эстетическая косметология <br />
                  - инъекционная косметология <br />- лазерная косметология
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="sec5">
        <div className="container">
          <div className="sec5__block">
            <div className="sec5__block-txt-block">
              <div className="sec5__block-text1">ВЕДЕМ НАБОР МОДЕЛЕЙ</div>
              <div className="sec5__block-text2">
                <p>Мы предлагаем свои услуги для моделей.</p>
                <p>
                  Выберите процедуру или несколько процедур и наш менеджер
                  проконсультирует васи назовет ближайшую дату, когда вы сможете
                  получить эту процедуру.
                </p>
              </div>
              <button>Стать моделью</button>
            </div>
            <div className="sec5__block-img-block">
              <img src={Model} alt="model" />
            </div>
          </div>
        </div>
      </section>
      <section className="sec6">
        <div className="container">
          <h2>Мастер-классы</h2>
          <div className="sec6__desc">
            Мероприятия для повышения квалификации косметологов
          </div>
          <div className="master-class-slider">
            <div className="swiper-wrapper">
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={150}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  1000: {
                    width: 960,
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="swiper-slideMc">
                    <div className="mk-wrapper">
                      <div className="mk-wrapper__img-block">
                        <img src={Mc1} alt="" />
                      </div>
                      <div className="mk-wrapper__txt-block">
                        <div className="txt-block__left">
                          <div className="text1">3 ноября, 10:00-12:00</div>
                          <div className="text2">
                            10 возможностей неодимового лазера. Лазерный пилинг,
                            удаление тату/татуажа
                          </div>
                          <div className="text3">Тренер: Юлия Щукина</div>
                        </div>
                        <div className="txt-block__right">
                          <div className="text1">2000 грн</div>
                          <a href="#/">
                            <svg
                              width="26"
                              height="16"
                              viewBox="0 0 26 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.53841 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.35533e-08 9L25 9L25 7L8.35533e-08 7L-8.35533e-08 9Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slideMc">
                    <div className="mk-wrapper">
                      <div className="mk-wrapper__img-block">
                        <img src={Mc2} alt="" />
                      </div>
                      <div className="mk-wrapper__txt-block">
                        <div className="txt-block__left">
                          <div className="text1">20 ноября, 12:00-17:00</div>
                          <div className="text2">
                            Профессия косметолог. Семинар для новичкови
                            профессионалов
                          </div>
                          <div className="text3">
                            Спикеры: Марина Спивак, Алина Ядчишина, Елена
                            Белогурова, Юлия Щукина
                          </div>
                        </div>
                        <div className="txt-block__right">
                          <div className="text1">Бесплатно</div>
                          <a href="#/">
                            <svg
                              width="26"
                              height="16"
                              viewBox="0 0 26 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.53841 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.35533e-08 9L25 9L25 7L8.35533e-08 7L-8.35533e-08 9Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slideMc">
                    <div className="mk-wrapper">
                      <div className="mk-wrapper__img-block">
                        <img src={Mc1} alt="" />
                      </div>
                      <div className="mk-wrapper__txt-block">
                        <div className="txt-block__left">
                          <div className="text1">3 ноября, 10:00-12:00</div>
                          <div className="text2">
                            10 возможностей неодимового лазера. Лазерный пилинг,
                            удаление тату/татуажа
                          </div>
                          <div className="text3">Тренер: Юлия Щукина</div>
                        </div>
                        <div className="txt-block__right">
                          <div className="text1">2000 грн</div>
                          <a href="#/">
                            <svg
                              width="26"
                              height="16"
                              viewBox="0 0 26 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.53841 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.35533e-08 9L25 9L25 7L8.35533e-08 7L-8.35533e-08 9Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="sec7">
        <div className="container">
          <h2>Почему мы</h2>
          <div className="sec7__block">
            <div className="sec7__block-item">
              <div className="text1">Преподаватели</div>
              <div className="text2">
                Наши преподаватели имеют многолетний опыт в сфере косметологии и
                совмещают преподовательскую деятельность с практической работой
                в салонах красотыи других специализированных центрах.
              </div>
              <div className="text3">01</div>
            </div>
            <div className="sec7__block-item">
              <div className="text1">Сертификаты</div>
              <div className="text2">
                Удостоверение, сертификати свидетельство полученные у нас по
                окончанию курсов, работают как лучшая "рекомендация" при приеме
                на работу
              </div>
              <div className="text3">02</div>
            </div>
            <div className="sec7__block-item">
              <div className="text1">Повышение квалификации</div>
              <div className="text2">
                Ежегодно, больше 2000 косметологов повышают квалификацию и
                уровень профессионализмав просторных кабинетах нашего центра.
              </div>
              <div className="text3">
                0<span>3</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec8">
        <div className="container">
          <h2>Специальные предложения</h2>
          <div className="sale-slide">
            <div className="swiper-wrapper">
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  1000: {
                    width: 960,
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img className="slide-special" src={Ac1} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img className="slide-special" src={Ac2} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img className="slide-special" src={Ac3} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img className="slide-special" src={Ac3} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img className="slide-special" src={Ac1} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img className="slide-special" src={Ac2} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img className="slide-special" src={Ac3} alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="sec9">
        <div className="container">
          <div className="sec9__form">
            <div className="text1">Зaкажите обратный звонок</div>
            <div className="text2">
              Оставьте заявку в форме и наш менеджер свяжется с вами
            </div>
            <form action="sender.php" method="post">
              <div className="sec9__form-inpb">
                <input type="text" name="name" placeholder="Ваше имя" />
              </div>
              <div className="sec9__form-inpb">
                <input
                  type="text"
                  name="phone"
                  placeholder="Ваш номер телефона"
                />
              </div>
              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      </section> */}
    </div>
  );
};
