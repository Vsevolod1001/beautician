import React from 'react';

import './Post.css';
import Blog1 from '../../img/blog1.jpg';

export const Post = () => {
  return (
    <div>
      <section className="post-top">
        <div className="container">
          <div className="post-top__block">
            <div className="txt">
              Актуальна ли мезотерапияв коррекции шеи, декольте, кистей рук и
              какие существуют альтернативы?
            </div>
            <div className="post-top__block-img-block">
              <img src={Blog1} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="course-content">
        <div className="container">
          <div className="course-content__text-block">
            <p>
              Можно написать любое количество текста, лирического описания
              компании.{' '}
            </p>

            <p>
              Ведущий учебный центр эстетической косметологии. Более 5 лет мы
              проводим сертифицированные курсы профессионального образования в
              области косметологии и индустрии красоты.
            </p>

            <p>
              В данный момент в Харькове нет аналогов нашего учебного центра по
              уровню подготовки и разнообразию читаемых курсов. Все выпускники
              нашего учебного центра востребованы в: институтах омоложения и
              здоровья, Спа-центрах, салонах красоты, частных клиниках и других
              организация в сфере "красоты и здоровья".{' '}
            </p>

            <p>
              Мы проводим повышения квалификации, уникальные мастер классы.
              Курсы косметолог Харьков - это хорошее вложение, инвестиция в
              будущий заработок специалиста получившего наши документы, окончив
              обучение, и получив практические знания.
            </p>

            <p>
              В данный момент в Харькове нет аналогов нашего учебного центра по
              уровню подготовки и разнообразию читаемых курсов. Все выпускники
              нашего учебного центра востребованы в: институтах омоложения и
              здоровья, Спа-центрах, салонах красоты, частных клиниках и других
              организация в сфере "красоты и здоровья".{' '}
            </p>

            <p>
              Мы проводим повышения квалификации, уникальные мастер классы.
              Курсы косметолог Харьков - это хорошее вложение, инвестиция в
              будущий заработок специалиста получившего наши документы, окончив
              обучение, и получив практические знания.
            </p>
          </div>
          <div className="all-post">
            <a href="#/">Вернуться ко всем статьям</a>
          </div>
        </div>
      </section>
    </div>
  );
};
