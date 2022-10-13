import React from 'react';

import './About.css';
import Aboutus from '../../img/aboutus.jpg';
import Ab1 from '../../img/ab1.jpg';
import Ab2 from '../../img/ab2.jpg';
import Ab3 from '../../img/ab3.jpg';
import Tr1 from '../../img/tr1.jpg';
import Tr2 from '../../img/tr2.jpg';
import Tr3 from '../../img/tr3.jpg';
import Tr4 from '../../img/tr4.jpg';

export const About = () => {
  return (
    <div>
      <section className="about-top">
        <div className="container">
          <div className="about-top__block">
            <div className="txt">
              Учебный центр эстетической косметологии VAlmari
            </div>
            <div className="img-block">
              <img src={Aboutus} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="about-text">
        <div className="container">
          <div className="about-text__block">
            <p>
              Ведущий учебный центр эстетической косметологии. Более 5 лет мы
              проводим сертифицированные курсы профессионального образованияв
              области косметологии и индустрии красоты.
            </p>
            <p>
              В данный момент в Харькове нет аналогов нашего учебного центрапо
              уровню подготовки и разнообразию читаемых курсов.Все выпускники
              нашего учебного центра востребованы в: институтах омоложения и
              здоровья, Спа-центрах, салонах красоты, частных клиниках и других
              организация в сфере "красоты и здоровья".{' '}
            </p>
          </div>
        </div>
      </section>
      <section className="about-comfort">
        <div className="container">
          <div className="title-green">Мы - это обучение с комфортом</div>
          <div className="about-comfort__block">
            <div className="about-comfort__block-item">
              <div className="img">
                <img src={Ab1} alt="" />
              </div>
              <div className="about-comfort__block-item-txt">
                <div className="text1">Удобный формат обучения</div>
                <div className="text2">
                  <p>Мы стараемся для вас и делаем обучениееще комфортнее!</p>
                  <p>
                    У нас вы можете обучаться в формате оффлайн или выбирать
                    онлайн формат обучения. Наши мастер-классы дублируются в
                    двух форматах
                  </p>
                </div>
              </div>
            </div>
            <div className="about-comfort__block-item">
              <div className="img">
                <img src={Ab2} alt="" />
              </div>
              <div className="about-comfort__block-item-txt">
                <div className="text1">Светлые аудитории</div>
                <div className="text2">
                  <p>Мы стараемся для вас и делаем обучениееще комфортнее!</p>
                  <p>
                    У нас вы можете обучаться в формате оффлайн или выбирать
                    онлайн формат обучения. Наши мастер-классы дублируются в
                    двух форматах
                  </p>
                </div>
              </div>
            </div>
            <div className="about-comfort__block-item">
              <div className="img">
                <img src={Ab3} alt="" />
              </div>
              <div className="about-comfort__block-item-txt">
                <div className="text1">Обучение в маленьких группах</div>
                <div className="text2">
                  <p>Мы стараемся для вас и делаем обучениееще комфортнее!</p>
                  <p>
                    У нас вы можете обучаться в формате оффлайн или выбирать
                    онлайн формат обучения. Наши мастер-классы дублируются в
                    двух форматах
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-progress">
        <div className="container">
          <div className="title-green">Наши достижения</div>
          <div className="trigger-block">
            <div class="trigger-block__item">
              <div className="trigger-block__item-text1">4000+</div>
              <div className="trigger-block__item-text2">
                Сертификатов мы выдали
              </div>
            </div>
            <div class="trigger-block__item">
              <div className="trigger-block__item-text1">3500+</div>
              <div className="trigger-block__item-text2">
                Моделей <br /> в нашей базе
              </div>
            </div>
            <div class="trigger-block__item">
              <div className="trigger-block__item-text1">1500+</div>
              <div className="trigger-block__item-text2">
                Специалистов мы обучили
              </div>
            </div>
            <div class="trigger-block__item">
              <div className="trigger-block__item-text1">5500+</div>
              <div className="trigger-block__item-text2">
                Довольных клиентов
              </div>
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
      <section className="about-trainers">
        <div className="container">
          <h2>Наши тренера</h2>
          <div className="about-trainers__block">
            <div className="about-trainers__block-item">
              <div className="img">
                <img src={Tr1} alt="" />
              </div>
              <div className="text1">Марина Спивак</div>
              <div className="text2">Главный тренер</div>
            </div>
            <div className="about-trainers__block-item">
              <div className="img">
                <img src={Tr2} alt="" />
              </div>
              <div className="text1">Елена Белогурова</div>
              <div className="text2">Тренер</div>
            </div>
            <div className="about-trainers__block-item">
              <div className="img">
                <img src={Tr3} alt="" />
              </div>
              <div className="text1">Алина Ядчишина</div>
              <div className="text2">Тренер</div>
            </div>
            <div className="about-trainers__block-item">
              <div className="img">
                <img src={Tr4} alt="" />
              </div>
              <div className="text1">Юлия Щукина</div>
              <div className="text2">Руководитель сети клиник LAZERINI</div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-review">
        <div className="container">
          <h2>Отзывы</h2>
          <div className="about-review__block">
            <div className="about-review__block-item">
              <div className="about-review__block-item-name">
                <div className="text1">Ирина Бубличенко</div>
                <div className="text2">15.09.2020</div>
              </div>
              <div className="about-review__block-item-txt">
                Вчера была на карбокситерапии первый раз. Сомневалась в
                эффективности процедуры и очень зря! Цвет лица выровнялся и кожа
                подтянулась, воспаления стали не такими заметными. Эффект был
                сразу после процедуры и я планирую пройти весь курс. Алиночка
                профессионал своего дела и отличный собеседник, всегда
                рекомендует самые эффективные процедуры.
              </div>
            </div>
            <div className="about-review__block-item">
              <div className="about-review__block-item-name">
                <div className="text1">Ирина Бубличенко</div>
                <div className="text2">15.09.2020</div>
              </div>
              <div className="about-review__block-item-txt">
                Вчера была на карбокситерапии первый раз. Сомневалась в
                эффективности процедуры и очень зря! Цвет лица выровнялся и кожа
                подтянулась, воспаления стали не такими заметными. Эффект был
                сразу после процедуры и я планирую пройти весь курс. Алиночка
                профессионал своего дела и отличный собеседник, всегда
                рекомендует самые эффективные процедуры.
              </div>
            </div>
            <div className="about-review__block-item">
              <div className="about-review__block-item-name">
                <div className="text1">Ирина Бубличенко</div>
                <div className="text2">15.09.2020</div>
              </div>
              <div className="about-review__block-item-txt">
                Вчера была на карбокситерапии первый раз. Сомневалась в
                эффективности процедуры и очень зря! Цвет лица выровнялся и кожа
                подтянулась, воспаления стали не такими заметными. Эффект был
                сразу после процедуры и я планирую пройти весь курс. Алиночка
                профессионал своего дела и отличный собеседник, всегда
                рекомендует самые эффективные процедуры.
              </div>
            </div>
            <div className="about-review__block-item">
              <div className="about-review__block-item-name">
                <div className="text1">Ирина Бубличенко</div>
                <div className="text2">15.09.2020</div>
              </div>
              <div className="about-review__block-item-txt">
                Вчера была на карбокситерапии первый раз. Сомневалась в
                эффективности процедуры и очень зря! Цвет лица выровнялся и кожа
                подтянулась, воспаления стали не такими заметными. Эффект был
                сразу после процедуры и я планирую пройти весь курс. Алиночка
                профессионал своего дела и отличный собеседник, всегда
                рекомендует самые эффективные процедуры.
              </div>
            </div>
            <div className="about-review__block-item">
              <div className="about-review__block-item-name">
                <div className="text1">Ирина Бубличенко</div>
                <div className="text2">15.09.2020</div>
              </div>
              <div className="about-review__block-item-txt">
                Вчера была на карбокситерапии первый раз. Сомневалась в
                эффективности процедуры и очень зря! Цвет лица выровнялся и кожа
                подтянулась, воспаления стали не такими заметными. Эффект был
                сразу после процедуры и я планирую пройти весь курс. Алиночка
                профессионал своего дела и отличный собеседник, всегда
                рекомендует самые эффективные процедуры.
              </div>
            </div>
            <div className="about-review__block-item">
              <div className="about-review__block-item-name">
                <div className="text1">Ирина Бубличенко</div>
                <div className="text2">15.09.2020</div>
              </div>
              <div className="about-review__block-item-txt">
                Вчера была на карбокситерапии первый раз. Сомневалась в
                эффективности процедуры и очень зря! Цвет лица выровнялся и кожа
                подтянулась, воспаления стали не такими заметными. Эффект был
                сразу после процедуры и я планирую пройти весь курс. Алиночка
                профессионал своего дела и отличный собеседник, всегда
                рекомендует самые эффективные процедуры.
              </div>
            </div>
            <div className="about-review__block-item">
              <div className="about-review__block-item-name">
                <div className="text1">Ирина Бубличенко</div>
                <div className="text2">15.09.2020</div>
              </div>
              <div className="about-review__block-item-txt">
                Вчера была на карбокситерапии первый раз. Сомневалась в
                эффективности процедуры и очень зря! Цвет лица выровнялся и кожа
                подтянулась, воспаления стали не такими заметными. Эффект был
                сразу после процедуры и я планирую пройти весь курс. Алиночка
                профессионал своего дела и отличный собеседник, всегда
                рекомендует самые эффективные процедуры.
              </div>
            </div>
            <div className="about-review__block-item">
              <div className="about-review__block-item-name">
                <div className="text1">Ирина Бубличенко</div>
                <div className="text2">15.09.2020</div>
              </div>
              <div className="about-review__block-item-txt">
                Вчера была на карбокситерапии первый раз. Сомневалась в
                эффективности процедуры и очень зря! Цвет лица выровнялся и кожа
                подтянулась, воспаления стали не такими заметными. Эффект был
                сразу после процедуры и я планирую пройти весь курс. Алиночка
                профессионал своего дела и отличный собеседник, всегда
                рекомендует самые эффективные процедуры.
              </div>
            </div>
            <div className="about-review__block-item">
              <div className="about-review__block-item-name">
                <div className="text1">Ирина Бубличенко</div>
                <div className="text2">15.09.2020</div>
              </div>
              <div className="about-review__block-item-txt">
                Вчера была на карбокситерапии первый раз. Сомневалась в
                эффективности процедуры и очень зря! Цвет лица выровнялся и кожа
                подтянулась, воспаления стали не такими заметными. Эффект был
                сразу после процедуры и я планирую пройти весь курс. Алиночка
                профессионал своего дела и отличный собеседник, всегда
                рекомендует самые эффективные процедуры.
              </div>
            </div>
            <div className="about-review__block-item">
              <div className="about-review__block-item-name">
                <div className="text1">Ирина Бубличенко</div>
                <div className="text2">15.09.2020</div>
              </div>
              <div className="about-review__block-item-txt">
                Вчера была на карбокситерапии первый раз. Сомневалась в
                эффективности процедуры и очень зря! Цвет лица выровнялся и кожа
                подтянулась, воспаления стали не такими заметными. Эффект был
                сразу после процедуры и я планирую пройти весь курс. Алиночка
                профессионал своего дела и отличный собеседник, всегда
                рекомендует самые эффективные процедуры.
              </div>
            </div>
            <div className="about-review__block-item">
              <div className="about-review__block-item-name">
                <div className="text1">Ирина Бубличенко</div>
                <div className="text2">15.09.2020</div>
              </div>
              <div className="about-review__block-item-txt">
                Вчера была на карбокситерапии первый раз. Сомневалась в
                эффективности процедуры и очень зря! Цвет лица выровнялся и кожа
                подтянулась, воспаления стали не такими заметными. Эффект был
                сразу после процедуры и я планирую пройти весь курс. Алиночка
                профессионал своего дела и отличный собеседник, всегда
                рекомендует самые эффективные процедуры.
              </div>
            </div>
            <div className="about-review__block-item">
              <div className="about-review__block-item-name">
                <div className="text1">Ирина Бубличенко</div>
                <div className="text2">15.09.2020</div>
              </div>
              <div className="about-review__block-item-txt">
                Вчера была на карбокситерапии первый раз. Сомневалась в
                эффективности процедуры и очень зря! Цвет лица выровнялся и кожа
                подтянулась, воспаления стали не такими заметными. Эффект был
                сразу после процедуры и я планирую пройти весь курс. Алиночка
                профессионал своего дела и отличный собеседник, всегда
                рекомендует самые эффективные процедуры.
              </div>
            </div>
            <div className="about-review__block-item">
              <div className="about-review__block-item-name">
                <div className="text1">Ирина Бубличенко</div>
                <div className="text2">15.09.2020</div>
              </div>
              <div className="about-review__block-item-txt">
                Вчера была на карбокситерапии первый раз. Сомневалась в
                эффективности процедуры и очень зря! Цвет лица выровнялся и кожа
                подтянулась, воспаления стали не такими заметными. Эффект был
                сразу после процедуры и я планирую пройти весь курс. Алиночка
                профессионал своего дела и отличный собеседник, всегда
                рекомендует самые эффективные процедуры.
              </div>
            </div>
            <div className="about-review__block-item">
              <div className="about-review__block-item-name">
                <div className="text1">Ирина Бубличенко</div>
                <div className="text2">15.09.2020</div>
              </div>
              <div className="about-review__block-item-txt">
                Вчера была на карбокситерапии первый раз. Сомневалась в
                эффективности процедуры и очень зря! Цвет лица выровнялся и кожа
                подтянулась, воспаления стали не такими заметными. Эффект был
                сразу после процедуры и я планирую пройти весь курс. Алиночка
                профессионал своего дела и отличный собеседник, всегда
                рекомендует самые эффективные процедуры.
              </div>
            </div>

            <div className="leave-review">
              <button>Оставить отзыв</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
