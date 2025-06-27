'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import "@/styles/Home.scss";
import "@/styles/CardFeatured.scss";
import "@/styles/CardLeatest.scss";
import CardFeatured from '@/components/CardFeatured';
import CardLeatest from '@/components/CardLeatest';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const sliderImages = [
  '/uploads/bruce-mars-FWVMhUa_wbY-unsplash_2.png',
  '/uploads/bruce-mars-FWVMhUa_wbY-unsplash_3.png',
  '/uploads/promotional.png',
];

const ImageSlider = () => (
  <Swiper
    className="bannerImg-swiper"
    spaceBetween={10}
    slidesPerView={1}
    loop={true}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    navigation={true}
    modules={[Navigation, Autoplay]}
  >
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

const featuredProducts = [
  {
    img: '/uploads/Featured_product.png',
    name: 'Cantilever chair',
    code: 'Y523201',
    price: '$42.00',
  },
  {
    img: '/uploads/Featured_product.png',
    name: 'Cantilever chair',
    code: 'Y523201',
    price: '$42.00',
  },
  {
    img: '/uploads/Featured_product.png',
    name: 'Cantilever chair',
    code: 'Y523201',
    price: '$42.00',
  },
  {
    img: '/uploads/Featured_product.png',
    name: 'Cantilever chair',
    code: 'Y523201',
    price: '$42.00',
  },
  {
    img: '/uploads/Featured_product.png',
    name: 'Cantilever chair',
    code: 'Y523201',
    price: '$42.00',
  },
  {
    img: '/uploads/Featured_product.png',
    name: 'Cantilever chair',
    code: 'Y523201',
    price: '$42.00',
  },
  {
    img: '/uploads/Featured_product.png',
    name: 'Cantilever chair',
    code: 'Y523201',
    price: '$42.00',
  },
  // ...các sản phẩm khác...
];

const leatestProducts = [
  {
    img: '/images/image 23.png',
    name: 'Comfort Handy Craft',
    price: '$42.00',
    oldPrice: '$65.00',
    badge: 'Sale',
  },
  {
    img: '/images/image 23.png',
    name: 'Comfort Handy Craft',
    price: '$42.00',
    oldPrice: '$65.00',
    badge: 'Sale',
  },
  {
    img: '/images/image 23.png',
    name: 'Comfort Handy Craft',
    price: '$42.00',
    oldPrice: '$65.00',
    badge: 'Sale',
  },
  {
    img: '/images/image 23.png',
    name: 'Comfort Handy Craft',
    price: '$42.00',
    oldPrice: '$65.00',
    badge: 'Sale',
  },
  {
    img: '/images/image 23.png',
    name: 'Comfort Handy Craft',
    price: '$42.00',
    oldPrice: '$65.00',
    badge: 'Sale',
  },
  {
    img: '/images/image 23.png',
    name: 'Comfort Handy Craft',
    price: '$42.00',
    oldPrice: '$65.00',
    badge: 'Sale',
  },
  // ...thêm sản phẩm khác...
];

const HomePage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <main className="container">
      <div className="banner_slide">
        <ImageSlider />
      </div>

      <div className="featured_product mt-5">
        <h2 className="text-center mb-4 featured-products__title">Featured Products</h2>
        <Swiper
          className="card-featured-swiper"
          spaceBetween={20}
          slidesPerView={5}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {featuredProducts.map((item, idx) => (
            <SwiperSlide key={idx}>
              <CardFeatured item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="leatest_product mt-5">
        <h2 className="text-center mb-4 leatest-products__title">Leatest Products</h2>
        <Tabs value={tabValue} onChange={handleTabChange} className="tabs-center mb-4">
          <Tab label="New Arrival" />
          <Tab label="Best Seller" />
          <Tab label="Featured" />
          <Tab label="Special Offer" />
        </Tabs>
        <div className="row mt-5">
          {leatestProducts.map((item, idx) => (
            <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={idx}>
              <CardLeatest item={item} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
