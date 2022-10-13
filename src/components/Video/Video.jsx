import React from 'react';

import './Video.css';
import VideoBg from '../../img/videobg.jpg';

export const Video = () => {
  return (
    <div>
      <section className="video-top">
        <div className="container">
          <div className="page-title">Видео-урок</div>
          <div className="video-top__block">
            <div className="video-top__block-txt">
              <div className="text1">Спикер: Марина Спивак</div>
              <div className="text2">
                Как безопасно работать <br /> в зоне носослезной борозды
                канюлей?
              </div>
              <div className="text3">Стоимость: 500 грн</div>
              <button className="video-btn">Купить</button>
            </div>
            <div className="video-block video-block-spec">
              <img src={VideoBg} alt="" />
              <button>
                <svg
                  width="71"
                  height="71"
                  viewBox="0 0 71 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="35.5" cy="35.5" r="35.5" fill="#85BF80"></circle>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.5893 18.4909C24.2053 19.0541 24 19.719 24 20.3996V50.6008C24 52.4781 25.5293 54 27.4158 54C28.0997 54 28.7679 53.7957 29.3338 53.4135L51.3929 38.5175C53.0674 37.3867 53.5038 35.1191 52.3675 33.4527C52.1072 33.071 51.7765 32.7418 51.3929 32.4828L29.3338 17.5868C27.7728 16.5327 25.6486 16.9374 24.5893 18.4909ZM26 50.656V20.3441C26 20.075 26.0813 19.8121 26.2335 19.5895C26.6531 18.9753 27.4946 18.8152 28.1131 19.232L50.2969 34.1826C50.4647 34.2957 50.6094 34.4394 50.7233 34.6061C51.2204 35.3337 51.0295 36.3238 50.2969 36.8175L28.1131 51.7681C27.8889 51.9192 27.6242 52 27.3532 52C26.6059 52 26 51.3983 26 50.656Z"
                    fill="#FBFBFD"
                  ></path>
                </svg>
              </button>
              <div className="vtxt">Смотреть трейлер</div>
            </div>
          </div>
        </div>
      </section>
      <section className="video-all">
        <div className="container">
          <div className="course-title">Другие видео-уроки</div>
          <div className="video-all__block">
            <div className="video-all__block-item">
              <div className="video-block">
                <img src={VideoBg} alt="" />
                <button>
                  <svg
                    width="71"
                    height="71"
                    viewBox="0 0 71 71"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="35.5"
                      cy="35.5"
                      r="35.5"
                      fill="#85BF80"
                    ></circle>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.5893 18.4909C24.2053 19.0541 24 19.719 24 20.3996V50.6008C24 52.4781 25.5293 54 27.4158 54C28.0997 54 28.7679 53.7957 29.3338 53.4135L51.3929 38.5175C53.0674 37.3867 53.5038 35.1191 52.3675 33.4527C52.1072 33.071 51.7765 32.7418 51.3929 32.4828L29.3338 17.5868C27.7728 16.5327 25.6486 16.9374 24.5893 18.4909ZM26 50.656V20.3441C26 20.075 26.0813 19.8121 26.2335 19.5895C26.6531 18.9753 27.4946 18.8152 28.1131 19.232L50.2969 34.1826C50.4647 34.2957 50.6094 34.4394 50.7233 34.6061C51.2204 35.3337 51.0295 36.3238 50.2969 36.8175L28.1131 51.7681C27.8889 51.9192 27.6242 52 27.3532 52C26.6059 52 26 51.3983 26 50.656Z"
                      fill="#FBFBFD"
                    ></path>
                  </svg>
                </button>
                <div className="vtxt">Смотреть трейлер</div>
              </div>
              <div className="text-block">
                Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и
                какие существуют альтернативы?
              </div>
              <button class="video-btn">Купить</button>
            </div>
            <div className="video-all__block-item">
              <div className="video-block">
                <img src={VideoBg} alt="" />
                <button>
                  <svg
                    width="71"
                    height="71"
                    viewBox="0 0 71 71"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="35.5"
                      cy="35.5"
                      r="35.5"
                      fill="#85BF80"
                    ></circle>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.5893 18.4909C24.2053 19.0541 24 19.719 24 20.3996V50.6008C24 52.4781 25.5293 54 27.4158 54C28.0997 54 28.7679 53.7957 29.3338 53.4135L51.3929 38.5175C53.0674 37.3867 53.5038 35.1191 52.3675 33.4527C52.1072 33.071 51.7765 32.7418 51.3929 32.4828L29.3338 17.5868C27.7728 16.5327 25.6486 16.9374 24.5893 18.4909ZM26 50.656V20.3441C26 20.075 26.0813 19.8121 26.2335 19.5895C26.6531 18.9753 27.4946 18.8152 28.1131 19.232L50.2969 34.1826C50.4647 34.2957 50.6094 34.4394 50.7233 34.6061C51.2204 35.3337 51.0295 36.3238 50.2969 36.8175L28.1131 51.7681C27.8889 51.9192 27.6242 52 27.3532 52C26.6059 52 26 51.3983 26 50.656Z"
                      fill="#FBFBFD"
                    ></path>
                  </svg>
                </button>
                <div class="vtxt">Смотреть трейлер</div>
              </div>
              <div className="text-block">
                Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и
                какие существуют альтернативы?
              </div>
              <button className="video-btn">Купить</button>
            </div>
            <div className="video-all__block-item">
              <div className="video-block">
                <img src={VideoBg} alt="" />
                <button>
                  <svg
                    width="71"
                    height="71"
                    viewBox="0 0 71 71"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="35.5"
                      cy="35.5"
                      r="35.5"
                      fill="#85BF80"
                    ></circle>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.5893 18.4909C24.2053 19.0541 24 19.719 24 20.3996V50.6008C24 52.4781 25.5293 54 27.4158 54C28.0997 54 28.7679 53.7957 29.3338 53.4135L51.3929 38.5175C53.0674 37.3867 53.5038 35.1191 52.3675 33.4527C52.1072 33.071 51.7765 32.7418 51.3929 32.4828L29.3338 17.5868C27.7728 16.5327 25.6486 16.9374 24.5893 18.4909ZM26 50.656V20.3441C26 20.075 26.0813 19.8121 26.2335 19.5895C26.6531 18.9753 27.4946 18.8152 28.1131 19.232L50.2969 34.1826C50.4647 34.2957 50.6094 34.4394 50.7233 34.6061C51.2204 35.3337 51.0295 36.3238 50.2969 36.8175L28.1131 51.7681C27.8889 51.9192 27.6242 52 27.3532 52C26.6059 52 26 51.3983 26 50.656Z"
                      fill="#FBFBFD"
                    ></path>
                  </svg>
                </button>
                <div className="vtxt">Смотреть трейлер</div>
              </div>
              <div className="text-block">
                Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и
                какие существуют альтернативы?
              </div>
              <button className="video-btn">Купить</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
