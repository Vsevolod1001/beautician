import React from 'react';
import { useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Course.css';
import Course1 from '../../img/course.jpg';
import Trener from '../../img/trener.jpg';
// import Hows1 from '../../img/hows1.jpg';
import Hows2 from '../../img/hows2.jpg';
import Hows3 from '../../img/hows3.jpg';

export const Course = () => {
  useEffect(() => {
    let block = document.querySelector('.hide-wrapper');
    let pes = document.querySelector('.wrapper-btn');
    console.log(pes);
    console.log(block);
    pes.addEventListener('click', () => {
      pes.classList.toggle('rotate');
      block.classList.toggle('dn');
    });
  }, []);

  return (
    <div>
      <section className="course-top">
        <div className="container">
          <div className="course-top__block">
            <div className="course-top__block-txt">
              <div className="text1">Старт курса: 10 января</div>
              <div className="text2">Ботулинотерапия для косметологов</div>
              <div className="text4">
                <button className="btn bg-green">Зарегистрироваться</button>
                <button className="btn bg-trnsprnt">Узнать подробнее</button>
              </div>
            </div>
            <div className="course-top__block-img-bg">
              <img src={Course1} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="course-content">
        <div className="container">
          <div className="course-content__text-block">
            <p>
              {' '}
              Процедура ботулинотерапия - это инъекционная методика для
              устранения и профилактики морщин. Также, процедура помогает
              бороться с опущением уголков рта, потерей четкости овала лица,
              гипергидрозом.
            </p>
            <p>
              На курсе вы научитесь тщательно подбирать препарат, а также
              отработаете на практике техники введения и безопасные разметки
              точек для разных анатомических типов лица. Вы будете эффективно и
              беопасно применять навыки в работе со своими клиентами.
            </p>
            <p>
              Курс по ботулинотерапии необходим, чтобы вы были увереныв своих
              знаниях и приносили желаемый результат своим клиентам.
            </p>
          </div>
        </div>
      </section>
      <section className="course-program">
        <div className="container">
          <div className="course-title">Программа курса</div>
          <div className="course-program__block">
            <div className="course-program__block-item">
              <div className="day">1 день</div>
              <div className="content">
                <div className="descr">
                  Тема: Коррекция ботулотоксином типа А (БТА) верхней и средней{' '}
                  <br /> трети лица
                </div>
                <div className="program-wrapper">
                  <div className="block-program">
                    <div className="text1">Теория</div>
                    <ul>
                      <li>
                        <b>01</b>
                        <span>
                          Виды токсинов на рынке. Преимущества и особенности
                        </span>
                      </li>
                      <li>
                        <b>02</b>
                        <span>
                          Показания, противопоказания применения для разных
                          возрастов, в зависимости от особенностей строения лица
                        </span>
                      </li>
                      <li>
                        <b>03</b>
                        <span>
                          Показания к применению БТА в зависимости от
                          анатомических и физиологических особенностей
                        </span>
                      </li>
                      <li>
                        <b>04</b>
                        <span>
                          Анатомия лица по зонам. Геометрия точек и дозы для
                          безопасного введения БТА
                        </span>
                      </li>
                      <li>
                        <b>05</b>
                        <span>Созависимость возраста и доз</span>
                      </li>
                      <li>
                        <b>06</b>
                        <span>Техники разведения на разные виды токсинов</span>
                      </li>
                      <li>
                        <b>07</b>
                        <span>Все виды осложнений и методы их коррекции</span>
                      </li>
                      <li>
                        <b>08</b>
                        <span>Условия хранения БТА</span>
                      </li>
                    </ul>
                  </div>
                  <div className="block-program">
                    <div className="text1">Практика</div>
                    <ul>
                      <li>
                        <b>01</b>
                        <span>Геометрия точек</span>
                      </li>
                      <li>
                        <b>02</b>
                        <span>Техники разведения БТА</span>
                      </li>
                      <li>
                        <b>03</b>
                        <span>Постановка руки</span>
                      </li>
                      <li>
                        <b>04</b>
                        <span>
                          Самостоятельные инъекции под чутким руководством
                          тренера
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-program__block-item">
              <div className="day">2 день</div>
              <div className="content">
                <div className="descr">
                  <span>
                    Тема: Коррекция нижней трети лица, особенности <br />{' '}
                    лечения гипергидроза, понятие техники мезоботокса
                  </span>
                  <button className="wrapper-btn">
                    <svg
                      width="53"
                      height="52"
                      viewBox="0 0 53 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="26.0137" cy="26" r="26" fill="#F4F4F4" />
                      <line
                        x1="25.9336"
                        y1="11"
                        x2="25.9336"
                        y2="40"
                        stroke="#424242"
                      />
                      <line
                        x1="40.5137"
                        y1="25.4199"
                        x2="11.5137"
                        y2="25.4199"
                        stroke="#424242"
                      />
                    </svg>
                  </button>
                </div>
                <div className="program-wrapper hide-wrapper dn">
                  <div className="block-program">
                    <div className="text1">Теория</div>
                    <ul>
                      <li>
                        <b>01</b>
                        <span>
                          Виды токсинов на рынке. Преимущества и особенности
                        </span>
                      </li>
                      <li>
                        <b>02</b>
                        <span>
                          Показания, противопоказания применения для разных
                          возрастов, в зависимости от особенностей строения лица
                        </span>
                      </li>
                      <li>
                        <b>03</b>
                        <span>
                          Показания к применению БТА в зависимости от
                          анатомических и физиологических особенностей
                        </span>
                      </li>
                      <li>
                        <b>04</b>
                        <span>
                          Анатомия лица по зонам. Геометрия точек и дозы для
                          безопасного введения БТА
                        </span>
                      </li>
                      <li>
                        <b>05</b>
                        <span>Созависимость возраста и доз</span>
                      </li>
                      <li>
                        <b>06</b>
                        <span>Техники разведения на разные виды токсинов</span>
                      </li>
                      <li>
                        <b>07</b>
                        <span>Все виды осложнений и методы их коррекции</span>
                      </li>
                      <li>
                        <b>08</b>
                        <span>Условия хранения БТА</span>
                      </li>
                    </ul>
                  </div>
                  <div className="block-program">
                    <div className="text1">Практика</div>
                    <ul>
                      <li>
                        <b>01</b>
                        <span>Геометрия точек</span>
                      </li>
                      <li>
                        <b>02</b>
                        <span>Техники разведения БТА</span>
                      </li>
                      <li>
                        <b>03</b>
                        <span>Постановка руки</span>
                      </li>
                      <li>
                        <b>04</b>
                        <span>
                          Самостоятельные инъекции под чутким руководством
                          тренера
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="item">
          <div className="day">2 день</div>
          <div className="content">
            <div className="descr">Тема: Коррекция нижней трети лица, особенности лечения гипергидроза, понятие техники
              мезоботокса</div>
            <div className="block-program">
              <div className="t1">Теория</div>
              <ul>
                <li><b>01</b>Виды токсинов на рынке. Преимущества и особенности</li>
                <li><b>02</b>Показания, противопоказания применения для разных возрастов, в зависимости от особенностей
                  строения лица</li>
                <li><b>03</b>Показания к применению БТА в зависимости от анатомических и физиологических особенностей
                </li>
                <li><b>04</b>Анатомия лица по зонам. Геометрия точек и дозы для безопасного введения БТА</li>
                <li><b>05</b>Созависимость возраста и доз</li>
                <li><b>06</b>Техники разведения на разные виды токсинов</li>
                <li><b>07</b>Все виды осложнений и методы их коррекции</li>
                <li><b>08</b>Условия хранения БТА</li>
              </ul>
            </div>
            <div className="block-program">
              <div className="t1">Практика</div>
              <ul>
                <li><b>01</b>ВГеометрия точек</li>
                <li><b>02</b>Техники разведения БТА</li>
                <li><b>03</b>Постановка руки</li>
                <li><b>04</b>Самостоятельные инъекции под чутким руководством тренера</li>
              </ul>
            </div>
          </div>
        </div> */}
          </div>
        </div>
      </section>

      <section className="course-study">
        <div className="container">
          <div className="course-title">Чему вы научитесь на курсе</div>
          <div className="course-study-block">
            <div className="course-study-block-item">
              <div className="t1">
                Минимум препарата <br /> максимум результата
              </div>
              <div className="t2">
                Вы научитесь делать эстетически красивые результаты, а не лица
                под копирку
              </div>
            </div>
            <div className="course-study-block-item">
              <div className="t1">
                Тренер гарантировано <br /> "поставит вашу руку"
              </div>
              <div className="t2">
                Вы будете колоть самостоятельно уже на курсе
              </div>
            </div>
            <div className="course-study-block-item">
              <div className="t1">
                Узнаете, как работать с любыми <br /> ТМ ботулотоксина
              </div>
              <div className="t2">
                Мы объясним, за что отвечает каждый показатель на упаковке и по
                какому принципу выбирать препарат
              </div>
            </div>
            <div className="course-study-block-item">
              <div className="t1">
                Вы отработаете практику на <br /> моделях
              </div>
              <div className="t2">
                В нашей базе более 3500 моделей с реальными пролемами и
                пожеланиями
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="course-trainer">
        <div className="container">
          <div className="course-trainer__block">
            <div className="img">
              <img src={Trener} alt="" />
            </div>
            <div className="course-trainer__block-txt">
              <div className="t1">Тренер</div>
              <div className="t2">Марина Спивак</div>
              <ul className="course-trainer__block-txt-ul">
                <li>врач дерматовенеролог</li>
                <li>
                  соосновательница центра эстетической косметологии ValMari
                </li>
                <li>ведущий специалист косметолог-инъекционист</li>
                <li>главный тренер учебного центра ValMari</li>
                <li>более 10 лет опыта работы врачом-инъекционистом</li>
                <li>более 8-ми лет опыта работы тренером</li>
                <li>в 2016 году вошла в пятерку лучших косметологов Украины</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="course-register">
        <div className="container">
          <div className="t1">Ранняя регистрация</div>
          <div className="t2">
            При регистриции на курс до 15 декабря <br /> стоимость обучения -
            7000 грн
          </div>
          <button>Зарегистрироваться</button>
        </div>
      </section>
      <section className="course-slider">
        <div className="container">
          <div className="course-title">Как это было в прошлый раз</div>
          <div className="how-slider">
            <div className="swiper-wrapper">
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                // onSwiper={swiper => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src={Hows2} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src={Hows3} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src={Hows2} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src={Hows3} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img src={Hows2} alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="course-all">
        <div className="container">
          <div className="course-title">Другие курсы</div>
          <div className="block">
            <div className="lesson-card purple">
              <div className="card">
                <div className="t1">Курс для медиков</div>
                <div className="t2">
                  Канюльные <br /> техники
                </div>
                <div className="t3">Оффлайн</div>
                <div className="t4">1 - 4 мая</div>
                <div className="t5">
                  <div className="tt1">
                    Краткое описание Что-то о курсе Пару фактов Краткое описание
                  </div>
                  <img src="assets/img/face1.png" alt="face1" />
                </div>
                <div className="t6">Свободно 2 из 15 мест</div>
                <button>Зарегистрироваться</button>
                <a href="#/">Подробнее</a>
              </div>
            </div>
            <div className="lesson-card green">
              <div className="card">
                <div className="t1">Курс для медиков</div>
                <div className="t2">
                  Канюльные <br /> техники
                </div>
                <div className="t3">Оффлайн</div>
                <div className="t4">1 - 4 мая</div>
                <div className="t5">
                  <div className="tt1">
                    Краткое описание Что-то о курсе Пару фактов Краткое описание
                  </div>
                  <img src="assets/img/face1.png" alt="face1" />
                </div>
                <div className="t6">Свободно 2 из 15 мест</div>
                <button>Зарегистрироваться</button>
                <a href="#/">Подробнее</a>
              </div>
            </div>
            <div className="lesson-card blue">
              <div className="card">
                <div className="t1">Курс для медиков</div>
                <div className="t2">
                  Канюльные <br /> техники
                </div>
                <div className="t3">Оффлайн</div>
                <div className="t4">1 - 4 мая</div>
                <div className="t5">
                  <div className="tt1">
                    Краткое описание Что-то о курсе Пару фактов Краткое описание
                  </div>
                  <img src="assets/img/face1.png" alt="face1" />
                </div>
                <div className="t6">Свободно 2 из 15 мест</div>
                <button>Зарегистрироваться</button>
                <a href="#/">Подробнее</a>
              </div>
            </div>
          </div>
          <a href="#/" className="all-course-link">
            Смотреть все курсы
          </a>
        </div>
      </section>
    </div>
  );
};
