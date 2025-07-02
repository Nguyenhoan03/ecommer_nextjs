'use client'
import { featuredSwiperConfig } from '@/config/SwiperConfig';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardFeatured from './card/CardFeatured';
import "@/styles/CardFeatured.scss";

const FeaturedProductClient = ({dataFeatured} : {dataFeatured: []}) => {
  return (
    <div className="featured_product mt-5">
      <h2 className="text-center mb-4 featured-products__title">Featured Products</h2>
      <Swiper {...featuredSwiperConfig}>
        {dataFeatured.map((item, idx) => (
          <SwiperSlide key={idx}>
            <CardFeatured item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProductClient;