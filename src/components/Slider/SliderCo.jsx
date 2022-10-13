import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Face1 from '../../img/face1.png';
export const SliderCo = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        // spaceBetween={59}
        // slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            width: 495,
            slidesPerView: 1,
            spaceBetween: 10,
          },
          690: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <div className="swiper-slide lesson-card purple">
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide lesson-card green">
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide lesson-card blue">
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide lesson-card green">
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
