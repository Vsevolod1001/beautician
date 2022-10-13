import React from 'react';

import './Courses.css';
import Bird from '../../img/bird.svg';
import Face1 from '../../img/face1.png';
import Videobg from '../../img/videobg.jpg';

export const Courses = () => {
  return (
    <div>
      <section className="courses-top">
        <div className="container">
          <div className="title">Курсы обучения</div>
          <div className="subtitle">
            <img src={Bird} alt="" />- курсы с возможностью ранней регистрации
          </div>
          <div className="category-filter">
            <ul className="category-filter-parent">
              <li className="filter-parent-li active">
                <a href="#/">Все направления</a>
              </li>
              <li className="filter-parent-li">
                <a href="#/">Курсы по косметологии</a>
                <ul className="category-filter-closure">
                  <li className="filter-parent-li">
                    <a href="#/">Лазерная косметология</a>
                  </li>
                  <li className="filter-parent-li">
                    <a href="#/">Иньекционная косметология</a>
                  </li>
                  <li className="filter-parent-li">
                    <a href="#/">Эстетическая косметология</a>
                  </li>
                </ul>
              </li>
              <li className="filter-parent-li">
                <a href="#/">Онлайн обучение</a>
              </li>
              <li className="filter-parent-li">
                <a href="#/">Мастер-классы</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="courses-list">
        <div className="container">
          <div className="courses-list-block">
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
                  <img src={Face1} alt="face1" />
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
                  <img src={Face1} alt="face1" />
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
                  <img src={Face1} alt="face1" />
                </div>
                <div className="t6">Свободно 2 из 15 мест</div>
                <button>Зарегистрироваться</button>
                <a href="#/">Подробнее</a>
              </div>
            </div>
            <div className="lesson-card video green">
              <div className="video-block">
                <img src={Videobg} alt="" />
                <button>
                  <svg
                    width="71"
                    height="71"
                    viewBox="0 0 71 71"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35.5" cy="35.5" r="35.5" fill="#85BF80" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.5893 18.4909C24.2053 19.0541 24 19.719 24 20.3996V50.6008C24 52.4781 25.5293 54 27.4158 54C28.0997 54 28.7679 53.7957 29.3338 53.4135L51.3929 38.5175C53.0674 37.3867 53.5038 35.1191 52.3675 33.4527C52.1072 33.071 51.7765 32.7418 51.3929 32.4828L29.3338 17.5868C27.7728 16.5327 25.6486 16.9374 24.5893 18.4909ZM26 50.656V20.3441C26 20.075 26.0813 19.8121 26.2335 19.5895C26.6531 18.9753 27.4946 18.8152 28.1131 19.232L50.2969 34.1826C50.4647 34.2957 50.6094 34.4394 50.7233 34.6061C51.2204 35.3337 51.0295 36.3238 50.2969 36.8175L28.1131 51.7681C27.8889 51.9192 27.6242 52 27.3532 52C26.6059 52 26 51.3983 26 50.656Z"
                      fill="#FBFBFD"
                    />
                  </svg>
                </button>
                <div className="vtxt">Смотреть трейлер</div>
              </div>
              <div className="card">
                <div className="info">
                  <div className="in1">
                    <b>Видео урок:</b> Массаж лица
                  </div>
                  <div className="in2">
                    <b>Спикер: Елена Белогурова</b>
                  </div>
                </div>
                <button>Зарегистрироваться</button>
                <a href="#/">Подробнее</a>
              </div>
            </div>
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
                  <img src={Face1} alt="face1" />
                </div>
                <div className="t6">Свободно 2 из 15 мест</div>
                <button>Зарегистрироваться</button>
                <a href="#/">Подробнее</a>
              </div>
            </div>
            <div className="lesson-card video green">
              <div className="video-block">
                <img src={Videobg} alt="" />
                <button>
                  <svg
                    width="71"
                    height="71"
                    viewBox="0 0 71 71"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35.5" cy="35.5" r="35.5" fill="#85BF80" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.5893 18.4909C24.2053 19.0541 24 19.719 24 20.3996V50.6008C24 52.4781 25.5293 54 27.4158 54C28.0997 54 28.7679 53.7957 29.3338 53.4135L51.3929 38.5175C53.0674 37.3867 53.5038 35.1191 52.3675 33.4527C52.1072 33.071 51.7765 32.7418 51.3929 32.4828L29.3338 17.5868C27.7728 16.5327 25.6486 16.9374 24.5893 18.4909ZM26 50.656V20.3441C26 20.075 26.0813 19.8121 26.2335 19.5895C26.6531 18.9753 27.4946 18.8152 28.1131 19.232L50.2969 34.1826C50.4647 34.2957 50.6094 34.4394 50.7233 34.6061C51.2204 35.3337 51.0295 36.3238 50.2969 36.8175L28.1131 51.7681C27.8889 51.9192 27.6242 52 27.3532 52C26.6059 52 26 51.3983 26 50.656Z"
                      fill="#FBFBFD"
                    />
                  </svg>
                </button>
                <div className="vtxt">Смотреть трейлер</div>
              </div>
              <div className="card">
                <div className="info">
                  <div className="in1">
                    <b>Видео урок:</b> Массаж лица
                  </div>
                  <div className="in2">
                    <b>Спикер: Елена Белогурова</b>
                  </div>
                </div>
                <button>Зарегистрироваться</button>
                <a href="#/">Подробнее</a>
              </div>
            </div>
            <div className="lesson-card video green">
              <div className="video-block">
                <img src={Videobg} alt="" />
                <button>
                  <svg
                    width="71"
                    height="71"
                    viewBox="0 0 71 71"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35.5" cy="35.5" r="35.5" fill="#85BF80" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.5893 18.4909C24.2053 19.0541 24 19.719 24 20.3996V50.6008C24 52.4781 25.5293 54 27.4158 54C28.0997 54 28.7679 53.7957 29.3338 53.4135L51.3929 38.5175C53.0674 37.3867 53.5038 35.1191 52.3675 33.4527C52.1072 33.071 51.7765 32.7418 51.3929 32.4828L29.3338 17.5868C27.7728 16.5327 25.6486 16.9374 24.5893 18.4909ZM26 50.656V20.3441C26 20.075 26.0813 19.8121 26.2335 19.5895C26.6531 18.9753 27.4946 18.8152 28.1131 19.232L50.2969 34.1826C50.4647 34.2957 50.6094 34.4394 50.7233 34.6061C51.2204 35.3337 51.0295 36.3238 50.2969 36.8175L28.1131 51.7681C27.8889 51.9192 27.6242 52 27.3532 52C26.6059 52 26 51.3983 26 50.656Z"
                      fill="#FBFBFD"
                    />
                  </svg>
                </button>
                <div className="vtxt">Смотреть трейлер</div>
              </div>
              <div className="card">
                <div className="info">
                  <div className="in1">
                    <b>Видео урок:</b> Массаж лица
                  </div>
                  <div className="in2">
                    <b>Спикер: Елена Белогурова</b>
                  </div>
                </div>
                <button>Зарегистрироваться</button>
                <a href="#/">Подробнее</a>
              </div>
            </div>
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
                  <img src={Face1} alt="face1" />
                </div>
                <div className="t6">Свободно 2 из 15 мест</div>
                <button>Зарегистрироваться</button>
                <a href="#/">Подробнее</a>
              </div>
            </div>
            <div className="lesson-card video green">
              <div className="video-block">
                <img src={Videobg} alt="" />
                <button>
                  <svg
                    width="71"
                    height="71"
                    viewBox="0 0 71 71"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35.5" cy="35.5" r="35.5" fill="#85BF80" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.5893 18.4909C24.2053 19.0541 24 19.719 24 20.3996V50.6008C24 52.4781 25.5293 54 27.4158 54C28.0997 54 28.7679 53.7957 29.3338 53.4135L51.3929 38.5175C53.0674 37.3867 53.5038 35.1191 52.3675 33.4527C52.1072 33.071 51.7765 32.7418 51.3929 32.4828L29.3338 17.5868C27.7728 16.5327 25.6486 16.9374 24.5893 18.4909ZM26 50.656V20.3441C26 20.075 26.0813 19.8121 26.2335 19.5895C26.6531 18.9753 27.4946 18.8152 28.1131 19.232L50.2969 34.1826C50.4647 34.2957 50.6094 34.4394 50.7233 34.6061C51.2204 35.3337 51.0295 36.3238 50.2969 36.8175L28.1131 51.7681C27.8889 51.9192 27.6242 52 27.3532 52C26.6059 52 26 51.3983 26 50.656Z"
                      fill="#FBFBFD"
                    />
                  </svg>
                </button>
                <div className="vtxt">Смотреть трейлер</div>
              </div>
              <div className="card">
                <div className="info">
                  <div className="in1">
                    <b>Видео урок:</b> Массаж лица
                  </div>
                  <div className="in2">
                    <b>Спикер: Елена Белогурова</b>
                  </div>
                </div>
                <button>Зарегистрироваться</button>
                <a href="#/">Подробнее</a>
              </div>
            </div>
          </div>
          <div className="nav-links">
            <a className="page-numbers" href="#/">
              <svg
                width="9"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.36442e-07 7.50366C-0.00017494 7.59021 0.0391794 7.67327 0.109453 7.73453L8.35489 14.9085C8.50376 15.0336 8.74104 15.03 8.88486 14.9005C9.02512 14.7741 9.02512 14.5737 8.88486 14.4474L0.904772 7.50369L8.88559 0.560636C9.03447 0.435511 9.03858 0.229097 8.8948 0.0995387C8.75099 -0.0299893 8.51374 -0.0335656 8.36483 0.0915298C8.36171 0.0941591 8.35865 0.0968179 8.35563 0.0995387L0.11019 7.27344C0.039846 7.33445 0.000246584 7.41727 5.36442e-07 7.50366Z"
                  fill="#424242"
                />
              </svg>
            </a>
            <span className="page-numbers current">1</span>
            <a className="page-numbers" href="#/">
              2
            </a>
            <a className="page-numbers" href="#/">
              3
            </a>
            <a className="page-numbers" href="#/">
              4
            </a>
            <a className="page-numbers" href="#/">
              5
            </a>
            <a className="page-numbers" href="#/">
              <svg
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 7.50366C8.00016 7.59021 7.96517 7.67327 7.90271 7.73453L0.573432 14.9085C0.441099 15.0336 0.230185 15.03 0.102349 14.9005C-0.0223315 14.7741 -0.0223315 14.5737 0.102349 14.4474L7.19576 7.50369L0.101693 0.560636C-0.0306395 0.435511 -0.0342938 0.229097 0.0935103 0.0995387C0.221346 -0.0299893 0.432229 -0.0335656 0.564593 0.0915298C0.567373 0.0941591 0.57009 0.0968179 0.572776 0.0995387L7.90205 7.27344C7.96458 7.33445 7.99978 7.41727 8 7.50366Z"
                  fill="#424242"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
