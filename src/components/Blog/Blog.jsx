import React from 'react';

import './Blog.css';
import Akcb from '../../img/akcb.jpg';
import Blog1 from '../../img/blog1.jpg';
import Blog2 from '../../img/blog2.jpg';
import Blog3 from '../../img/blog3.jpg';

export const Blog = () => {
  return (
    <div>
      <section className="blog-top">
        <div className="all-title">Акционные предложения</div>
        <div className="sale-img">
          <img src={Akcb} alt="" />
        </div>
        <div className="container">
          <div className="sale-txt">
            <div className="t1">Акция 2+1 в честь Черной пятницы</div>
            <a href="#/">Подробнее про акцию</a>
          </div>
        </div>
      </section>
      <section className="blog-articles">
        <div className="container">
          <div className="all-title">Полезные материалы</div>
          <div className="blog-articles__block">
            <div className="blog-articles__block-item">
              <div className="blog-articles__block-img">
                <img src={Blog1} alt="" />
              </div>
              <div className="text-wrap">
                <div class="txt">
                  Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук
                  и какие существуют альтернативы?
                </div>
                <a href="#/">Читать полностью</a>
              </div>
            </div>
            <div className="blog-articles__block-item">
              <div className="blog-articles__block-img">
                <img src={Blog2} alt="" />
              </div>
              <div className="text-wrap">
                <div className="txt">
                  Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук
                  и какие существуют альтернативы?
                </div>
                <a href="#/">Читать полностью</a>
              </div>
            </div>
            <div className="blog-articles__block-item">
              <div className="blog-articles__block-img">
                <img src={Blog3} alt="" />
              </div>
              <div className="text-wrap">
                <div className="txt">
                  Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук
                  и какие существуют альтернативы?
                </div>
                <a href="#/">Читать полностью</a>
              </div>
            </div>
            <div className="blog-articles__block-item">
              <div className="blog-articles__block-img">
                <img src={Blog1} alt="" />
              </div>
              <div className="text-wrap">
                <div className="txt">
                  Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук
                  и какие существуют альтернативы?
                </div>
                <a href="#/">Читать полностью</a>
              </div>
            </div>
            <div className="blog-articles__block-item">
              <div className="blog-articles__block-img">
                <img src={Blog2} alt="" />
              </div>
              <div className="text-wrap">
                <div class="txt">
                  Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук
                  и какие существуют альтернативы?
                </div>
                <a href="#/">Читать полностью</a>
              </div>
            </div>
            <div className="blog-articles__block-item">
              <div className="blog-articles__block-img">
                <img src={Blog3} alt="" />
              </div>
              <div className="text-wrap">
                <div className="txt">
                  Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук
                  и какие существуют альтернативы?
                </div>
                <a href="#/">Читать полностью</a>
              </div>
            </div>
            <div className="blog-articles__block-item">
              <div className="blog-articles__block-img">
                <img src={Blog2} alt="" />
              </div>
              <div className="text-wrap">
                <div className="txt">
                  Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук
                  и какие существуют альтернативы?
                </div>
                <a href="#/">Читать полностью</a>
              </div>
            </div>
            <div className="blog-articles__block-item">
              <div className="blog-articles__block-img">
                <img src={Blog1} alt="" />
              </div>
              <div className="text-wrap">
                <div className="txt">
                  Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук
                  и какие существуют альтернативы?
                </div>
                <a href="#/">Читать полностью</a>
              </div>
            </div>
            <div className="blog-articles__block-item">
              <div className="blog-articles__block-img">
                <img src={Blog1} alt="" />
              </div>
              <div className="text-wrap">
                <div className="txt">
                  Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук
                  и какие существуют альтернативы?
                </div>
                <a href="#/">Читать полностью</a>
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
                ></path>
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
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
