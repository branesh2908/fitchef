import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const data = [
    {
      id: 1,
      imgUrl: "./images/f9.png",
    },
    {
      id: 2,
      imgUrl: "./images/f7.png",
     },
     {
      id: 3,
      imgUrl: "./images/f6.png",
     },
     {
      id: 4,
      imgUrl: "./images/f5.png",
     },
     {
      id: 5,
      imgUrl: "./images/o1.jpg",
     },
     {
      id: 6,
      imgUrl: "./images/o2.jpg",
     },   
  ]

  function swiper() {
    return (
        <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            { data.map( user => (
            <SwiperSlide key={user.id} className="slide">
                <div className='slide-content'>
                <div>
                    <img src={user.imgUrl} alt="example" className='card-image' />
                </div>
                </div> 
            </SwiperSlide>
            ))
            }
        </Swiper>
    );
  }

  export default swiper;