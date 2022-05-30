

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import home1 from '../assets/img/home1.jpg'
import home2 from '../assets/img/home2.jpg'
import jpeg from '../assets/img/3.png'
import { Navigation, Pagination } from 'swiper';
import SlideModal from './SlideModal';
import React, { useEffect, useState } from 'react';
export default () => {
  const [modalActive, setModalActive] = useState(false)
  const [modalActive2, setModalActive2] = useState(false)
  const [modalActive3, setModalActive3] = useState(false)
  const Modal = () =>{
    setModalActive(true)
  }
  const Modal2 = () =>{
    setModalActive2(true)
  }
  const Modal3 = () =>{
    setModalActive3(true)
  }
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className='container' id='home'>
          <img src={home1} />
          <div className="home-text">
            <h1>Веном 2</h1>
            <button class="btn" onClick={Modal}>Посмотреть трейлер</button>
            <SlideModal active={modalActive} setActive={setModalActive} url={"https://www.youtube.com/embed/-FmWuCgJmxo"}></SlideModal>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='container'>
          <img src={home2} />
          <div className="home-text">
            <h1>Мстители: Финал (2019)</h1>
            <button class="btn" onClick={Modal2}>Посмотреть трейлер</button>
            <SlideModal active={modalActive2} setActive={setModalActive2} url={"https://www.youtube.com/embed/gbcVZgO4n4E"}></SlideModal>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='container'>
          <img src={jpeg} />
          <div className="home-text">
            <h1>Доктор Стрэндж: В мультивселенной безумия (2022)</h1>
            <button class="btn" onClick={Modal3}>Посмотреть трейлер</button>
            <SlideModal active={modalActive3} setActive={setModalActive3} url={"https://www.youtube.com/embed/L0h0cydG3iI"}></SlideModal>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};