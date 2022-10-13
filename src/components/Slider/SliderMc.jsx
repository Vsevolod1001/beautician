// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, A11y } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import Mc1 from '../../img/mc1.jpg';
// import Mc2 from '../../img/mc2.jpg';
// export const SliderMc = () => {
//   return (
//     <div>
//       <Swiper
//         modules={[Navigation, Pagination, A11y]}
//         spaceBetween={150}
//         slidesPerView={2}
//         navigation
//         pagination={{ clickable: true }}
//         onSwiper={swiper => console.log(swiper)}
//         onSlideChange={() => console.log('slide change')}
//       >
//         <SwiperSlide>
//           <div class="swiper-slideMc">
//             <div class="mk-wrapper">
//               <div class="mk-wrapper__img-block">
//                 <img src={Mc1} alt="" />
//               </div>
//               <div class="mk-wrapper__txt-block">
//                 <div class="txt-block__left">
//                   <div class="text1">3 ноября, 10:00-12:00</div>
//                   <div class="text2">
//                     10 возможностей неодимового лазера. Лазерный пилинг,
//                     удаление тату/татуажа
//                   </div>
//                   <div class="text3">Тренер: Юлия Щукина</div>
//                 </div>
//                 <div class="txt-block__right">
//                   <div class="text1">2000 грн</div>
//                   <a href="#/">
//                     <svg
//                       width="26"
//                       height="16"
//                       viewBox="0 0 26 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.53841 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.35533e-08 9L25 9L25 7L8.35533e-08 7L-8.35533e-08 9Z"
//                         fill="white"
//                       />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div class="swiper-slideMc">
//             <div class="mk-wrapper">
//               <div class="mk-wrapper__img-block">
//                 <img src={Mc2} alt="" />
//               </div>
//               <div class="mk-wrapper__txt-block">
//                 <div class="txt-block__left">
//                   <div class="text1">20 ноября, 12:00-17:00</div>
//                   <div class="text2">
//                     Профессия косметолог. Семинар для новичкови профессионалов
//                   </div>
//                   <div class="text3">
//                     Спикеры: Марина Спивак, Алина Ядчишина, Елена Белогурова,
//                     Юлия Щукина
//                   </div>
//                 </div>
//                 <div class="txt-block__right">
//                   <div class="text1">Бесплатно</div>
//                   <a href="#/">
//                     <svg
//                       width="26"
//                       height="16"
//                       viewBox="0 0 26 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.53841 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.35533e-08 9L25 9L25 7L8.35533e-08 7L-8.35533e-08 9Z"
//                         fill="white"
//                       />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div class="swiper-slideMc">
//             <div class="mk-wrapper">
//               <div class="mk-wrapper__img-block">
//                 <img src={Mc1} alt="" />
//               </div>
//               <div class="mk-wrapper__txt-block">
//                 <div class="txt-block__left">
//                   <div class="text1">3 ноября, 10:00-12:00</div>
//                   <div class="text2">
//                     10 возможностей неодимового лазера. Лазерный пилинг,
//                     удаление тату/татуажа
//                   </div>
//                   <div class="text3">Тренер: Юлия Щукина</div>
//                 </div>
//                 <div class="txt-block__right">
//                   <div class="text1">2000 грн</div>
//                   <a href="#/">
//                     <svg
//                       width="26"
//                       height="16"
//                       viewBox="0 0 26 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.53841 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.35533e-08 9L25 9L25 7L8.35533e-08 7L-8.35533e-08 9Z"
//                         fill="white"
//                       />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };
