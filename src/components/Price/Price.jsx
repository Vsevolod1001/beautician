import React from 'react';

import './Price.css';

export const Price = () => {
  return (
    <div>
      <section className="price-block">
        <div className="container">
          <div className="all-title">Стоимость обучения</div>
          <div className="price-table">
            <div className="table-head">
              <div className="td w100">Курс обучения</div>
              <div className="td w60">Дни</div>
              <div className="td w60">Часы</div>
              <div className="td w150 bbird">Ранняя регистрация</div>
              <div className="td w150">Поздняя регистрация</div>
            </div>
            <div className="table-item">
              <div className="table-row">
                <div className="td w100">
                  <div className="num">1.0</div>
                  <div className="txt">
                    Мезотерапия в эстетической косметологии
                  </div>
                </div>
                <div className="td w60">5</div>
                <div className="td w60">40</div>
                <div className="td w150">10800 грн</div>
                <div className="td w150">14700 грн</div>
              </div>
              <div className="table-row">
                <div className="td w100">
                  <div className="num">1.1</div>
                  <div className="txt">
                    <a href="#/">Техники мезотерапии</a>
                  </div>
                </div>
                <div className="td w60">1</div>
                <div className="td w60">8</div>
                <div className="td w150">2900 грн</div>
                <div className="td w150">3950 грн</div>
              </div>
              <div className="table-row">
                <div className="td w100">
                  <div className="num">1.2</div>
                  <div className="txt">
                    <a href="#/">Мезотерапия лица</a>
                  </div>
                </div>
                <div className="td w60">1</div>
                <div className="td w60">8</div>
                <div className="td w150">2900 грн</div>
                <div className="td w150">3950 грн</div>
              </div>
              <div className="table-row">
                <div className="td w100">
                  <div className="num">1.3</div>
                  <div className="txt">
                    <a href="#/">Липоскульптура тела</a>
                  </div>
                </div>
                <div className="td w60">1</div>
                <div className="td w60">8</div>
                <div className="td w150">2900 грн</div>
                <div className="td w150">3950 грн</div>
              </div>
              <div className="table-row">
                <div className="td w100">
                  <div className="num">1.4</div>
                  <div className="txt">
                    <a href="#/">Мезотерапия в трихологии</a>
                  </div>
                </div>
                <div className="td w60">1</div>
                <div className="td w60">8</div>
                <div className="td w150">2900 грн</div>
                <div className="td w150">3950 грн</div>
              </div>
              <div className="table-row">
                <div className="td w100">
                  <div className="num">1.5</div>
                  <div className="txt">
                    <a href="#/">Биоревитализация</a>
                  </div>
                </div>
                <div className="td w60">1</div>
                <div className="td w60">8</div>
                <div className="td w150">2900 грн</div>
                <div className="td w150">3950 грн</div>
              </div>
            </div>
            <div className="table-item">
              <div className="table-row">
                <div className="td w100">
                  <div className="num">2.0</div>
                  <div className="txt">Контурная пластика иглой</div>
                </div>
                <div className="td w60">5</div>
                <div className="td w60">40</div>
                <div className="td w150">10800 грн</div>
                <div className="td w150">14700 грн</div>
              </div>
              <div className="table-row">
                <div className="td w100">
                  <div className="num">2.1</div>
                  <div className="txt">
                    <a href="#/">Базовый уровень</a>
                  </div>
                </div>
                <div className="td w60">1</div>
                <div className="td w60">8</div>
                <div className="td w150">2900 грн</div>
                <div className="td w150">3950 грн</div>
              </div>
              <div className="table-row">
                <div className="td w100">
                  <div className="num">2.2</div>
                  <div className="txt">
                    <a href="#/">Моделирование губ</a>
                  </div>
                </div>
                <div className="td w60">1</div>
                <div className="td w60">8</div>
                <div className="td w150">2900 грн</div>
                <div className="td w150">3950 грн</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container greenbg">
          * Вы можете пройти обучение полностью или выбрать 1-й или 2-й день
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
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  require=""
                />
              </div>
              <div className="sec9__form-inpb">
                <input
                  type="text"
                  name="phone"
                  placeholder="Ваш номер телефона"
                  require=""
                />
              </div>
              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
