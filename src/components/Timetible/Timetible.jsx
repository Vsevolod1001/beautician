import React from 'react';

import './Timetible.css';
import Googletab from '../../img/googletab.jpg';

export const Timetible = () => {
  return (
    <div>
      <section className="time-table">
        <div className="container">
          <div className="all-title">Рассписание</div>
          <div className="block">
            <ul className="lister">
              <li className="active">Курсы обучения</li>
              <li>Вебинары</li>
            </ul>
            <div className="tab-content">
              <ul className="lister top-l">
                <li className="active">Харьков</li>
                <li>Полтава</li>
                <li>Днепр</li>
                <li>Львов</li>
                <li>Херсон</li>
                <li>Сумы</li>
              </ul>
              <div className="inner-tab-content">
                <img src={Googletab} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
