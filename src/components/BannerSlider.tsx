'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { bannerSwiperConfig } from '@/config/SwiperConfig';

const sliderImages = [
  '/uploads/bruce-mars-FWVMhUa_wbY-unsplash_2.png',
  '/uploads/bruce-mars-FWVMhUa_wbY-unsplash_3.png',
  '/uploads/promotional.png',
];

const BannerSlider = () => (
  <Swiper {...bannerSwiperConfig}>
    {sliderImages.map((src, idx) => (
      <SwiperSlide key={idx}>
        <Image
          src={src}
          alt={`Banner ${idx + 1}`}
          width={1200}
          height={400}
          style={{ width: '100%' }}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default BannerSlider;