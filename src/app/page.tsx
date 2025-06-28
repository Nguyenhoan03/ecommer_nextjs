'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import "@/styles/Home.scss";
import "@/styles/CardFeatured.scss";
import "@/styles/CardLeatest.scss";
import CardFeatured from '@/components/CardFeatured';
import CardLeatest from '@/components/CardLeatest';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CardTrending from '@/components/CardTrending';


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
    img: '/uploads/image 23.png',
    name: 'Comfort Handy Craft',
    price: '$42.00',
    oldPrice: '$65.00',
    badge: 'Sale',
  },
  {
    img: '/uploads/image 23.png',
    name: 'Comfort Handy Craft',
    price: '$42.00',
    oldPrice: '$65.00',
    badge: 'Sale',
  },
  {
    img: '/uploads/image 23.png',
    name: 'Comfort Handy Craft',
    price: '$42.00',
    oldPrice: '$65.00',
    badge: 'Sale',
  },
  {
    img: '/uploads/image 23.png',
    name: 'Comfort Handy Craft',
    price: '$42.00',
    oldPrice: '$65.00',
    badge: 'Sale',
  },
  {
    img: '/uploads/image 23.png',
    name: 'Comfort Handy Craft',
    price: '$42.00',
    oldPrice: '$65.00',
    badge: 'Sale',
  },
  {
    img: '/uploads/image 23.png',
    name: 'Comfort Handy Craft',
    price: '$42.00',
    oldPrice: '$65.00',
    badge: 'Sale',
  },
  // ...thêm sản phẩm khác...
];

const trendingProducts = [
  {
    img: '/uploads/box for image.png',
    name: "Box for Image",
    price: '$42.00',
    oldPrice: '$65.00',
  },
  {
    img: '/uploads/box for image.png',
    name: "Box for Image2",
    price: '$2.00',
    oldPrice: '$65.00',
  },
  {
    img: '/uploads/box for image.png',
    name: "Box for Image3",
    price: '$22.00',
    oldPrice: '$65.00',
  },
  {
    img: '/uploads/box for image.png',
    name: "Box for Image4",
    price: '$32.00',
    oldPrice: '$65.00',
  }
]

const topCategories = [
  {
    img: '/uploads/image 3.png',
    name: 'Mini LCW Chair',
    price: '$56.00',
    link: '#',
  },
  {
    img: '/uploads/image 3.png',
    name: 'Mini LCW Chair',
    price: '$56.00',
    link: '#',
  },
  {
    img: '/uploads/image 3.png',
    name: 'Mini LCW Chair',
    price: '$56.00',
    link: '#',
  },
  {
    img: '/uploads/image 3.png',
    name: 'Mini LCW Chair',
    price: '$56.00',
    link: '#',
  },
  {
    img: '/uploads/image 3.png',
    name: 'Mini LCW Chair',
    price: '$56.00',
    link: '#',
  },
  {
    img: '/uploads/image 3.png',
    name: 'Mini LCW Chair',
    price: '$56.00',
    link: '#',
  },
  // ...thêm các category khác nếu muốn
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

      <div className="leatest_product mt-4">
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

      <section className="fade-right reveal mt-5">
        <div className="shopex-offer">
          <h2 className="shopex-offer__title text-center">What Shopex Offer!</h2>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-center gx-4 gy-4">
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
              <div className="shopex-offer__card">
                <div className="shopex-offer__card-content">
                  <img src="/uploads/free-delivery 1.png" alt="Free Delivery"
                    className="shopex-offer__card-img" />
                  <h3 className="shopex-offer__card-title">Free Delivery</h3>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
                    gravida.</span>
                </div>
              </div>
            </div>


            <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
              <div className="shopex-offer__card">
                <div className="shopex-offer__card-content">
                  <img src="./uploads/cashback 1.png" alt="Money Back" className="shopex-offer__card-img" />
                  <h3 className="shopex-offer__card-title">Money Back</h3>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
                    gravida.</span>
                </div>
              </div>
            </div>

            <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
              <div className="shopex-offer__card">
                <div className="shopex-offer__card-content">
                  <img src="./uploads/premium-quality 1.png" alt="Premium Quality"
                    className="shopex-offer__card-img" />
                  <h3 className="shopex-offer__card-title">Premium Quality</h3>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
                    gravida.</span>
                </div>
              </div>
            </div>

            <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
              <div className="shopex-offer__card">
                <div className="shopex-offer__card-content">
                  <img src="./uploads/24-hours-support 1.png" alt="24/7 Support"
                    className="shopex-offer__card-img" />
                  <h3 className="shopex-offer__card-title">24/7 Support</h3>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
                    gravida.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fade-up reveal mt-5 mb-5">
        <div className="image_adv">
          <div className="image_adv__inner">
            <div className="image_adv__img-wrap">
              <img src="/uploads/Group 153.png" alt="Advertisement" className="image_adv__img" />
            </div>
            <div className="image_adv__content">
              <h2 className="image_adv__title">Unique Features Of leatest & Trending Poducts</h2>
              <ul className="image_adv__features">
                <li><span className="dot dot--pink"></span> All frames constructed with hardwood solids and
                  laminates</li>
                <li><span className="dot dot--purple"></span> Reinforced with double wood dowels, glue, screw -
                  nails corner blocks and machine nails</li>
                <li><span className="dot dot--green"></span> Arms, backs and seats are structurally reinforced
                </li>
              </ul>
              <div className="image_adv__actions">
                <button className="image_adv__btn">Add To Cart</button>
                <div className="image_adv__product">
                  <span className="image_adv__product-name">B&B Italian Sofa</span>
                  <span className="image_adv__product-price">$32.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="fade-up reveal mt-5 trending-products">
        <h2 className="trending-products__title text-center">Trending Products</h2>
        <div className="trending-product__content container">
          <div className="row justify-content-center">
            {trendingProducts.map((item, idx) => (
              <CardTrending item={item} />
            ))}
          </div>
        </div>
      </section>




      <section className="fade-left reveal mt-5 mb-5">
        <div className="discount-feature container">
          <div className="row discount-feature__content justify-content-center">

            <div className="discount-feature__card col-12 col-md-4 mb-4 mb-md-0" style={{ background: '#FFF6FB' }}>
              <div className="discount-feature__card-body d-flex flex-column flex-md-row align-items-center justify-content-between h-100">
                <div className="discount-feature__info text-md-start text-center">
                  <p className="discount-feature__title">23% off in all products</p>
                  <p style={{ marginTop: '-15px', paddingLeft: '20px' }}>
                    <a href="#" className="discount-feature__link">Shop Now</a>
                  </p>
                </div>
                <Image src="/uploads/image 1162.png" alt="" width={312} height={173} className="discount-feature__img ms-md-3 mt-3 mt-md-0" />
              </div>
            </div>

            <div className="discount-feature__card col-12 col-md-4 mb-4 mb-md-0" style={{ background: '#F3F6FF' }}>
              <div className="discount-feature__card-body d-flex flex-column flex-md-row align-items-center justify-content-between h-100">
                <div className="discount-feature__info text-md-start text-center">
                  <p className="discount-feature__title">23% off in all products</p>
                  <p style={{ marginTop: '-15px', paddingLeft: '20px' }}>
                    <a href="#" className="discount-feature__link">View Collection</a>
                  </p>
                </div>
                <Image src="/uploads/image 1161.png" alt="" width={312} height={173} className="discount-feature__img ms-md-3 mt-3 mt-md-0" />
              </div>
            </div>

            <div className="discount-feature__product-list col-12 col-md-3">
              <div className="discount-feature__product d-flex align-items-center mb-4">
                <Image src="/uploads/image 19.png" alt="" width={50} height={50} className="discount-feature__product-img me-3" />
                <div>
                  <div className="discount-feature__product-name">Executive Seat chair</div>
                  <div className="discount-feature__product-price">$32.00</div>
                </div>
              </div>
              <div className="discount-feature__product d-flex align-items-center mb-4">
                <Image src="/uploads/image 28.png" alt="" width={50} height={50} className="discount-feature__product-img me-3" />
                <div>
                  <div className="discount-feature__product-name">Executive Seat chair</div>
                  <div className="discount-feature__product-price">$32.00</div>
                </div>
              </div>
              <div className="discount-feature__product d-flex align-items-center">
                <Image src="/uploads/image 30.png" alt="" width={50} height={50} className="discount-feature__product-img me-3" />
                <div>
                  <div className="discount-feature__product-name">Executive Seat chair</div>
                  <div className="discount-feature__product-price">$32.00</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>




      <section className="fade-right reveal discount-item mt-5 mb-5">
        <h2 className="discount-item__title text-center mb-4">Discount Item</h2>
        <div className="discount-item__tabs d-flex justify-content-center align-items-center gap-4">
          <span className="discount-item__tab discount-item__tab--active" data-tab="wood">
            Wood Chair
            <span className="discount-item__dot"></span>
          </span>
          <span className="discount-item__tab pl-3" data-tab="plastic">
            Plastic Chair
            <span className="discount-item__dot"></span>
          </span>
          <span className="discount-item__tab" data-tab="sofa">
            Sofa Collection
            <span className="discount-item__dot"></span>
          </span>
        </div>
        <div className="discount-item__content-wrapper">

          <div className="discount-item__content discount-item__content--active" id="discount-tab-wood">
            <div className="discount-item__info">
              <h3 className="discount-item__big-title">20% Discount Of All Products</h3>
              <div className="discount-item__product-name">Eams Sofa Compact</div>
              <div className="discount-item__desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec,
                bibendum condimentum.
              </div>
              <div className="discount-item__features">
                <div className="discount-item__feature">
                  <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                  <span>Material expose like metals</span>
                </div>
                <div className="discount-item__feature">
                  <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                  <span>Clear lines and geometric figures</span>
                </div>
                <div className="discount-item__feature">
                  <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                  <span>Simple neutral colours.</span>
                </div>
                <div className="discount-item__feature">
                  <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                  <span>Material expose like metals</span>
                </div>
              </div>
              <button className="discount-item__btn">Shop Now</button>
            </div>
            <div className="discount-item__img-wrapper">
              <div className="discount-item__img-bg">
                <img src="./uploads/Group 154 (1).png" alt="" className="discount-item__img" />
              </div>
            </div>
          </div>

          <div className="discount-item__content" id="discount-tab-plastic">
            <div className="discount-item__info">
              <h3 className="discount-item__big-title">15% Discount On Plastic Chairs</h3>
              <div className="discount-item__product-name">Modern Plastic Chair</div>
              <div className="discount-item__desc">
                Plastic chairs with modern design, lightweight and durable for your home.
              </div>
              <div className="discount-item__features">
                <div className="discount-item__feature">
                  <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                  <span>High quality plastic</span>
                </div>
                <div className="discount-item__feature">
                  <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                  <span>Easy to clean</span>
                </div>
                <div className="discount-item__feature">
                  <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                  <span>Various colors</span>
                </div>
              </div>
              <button className="discount-item__btn">Shop Now</button>
            </div>
            <div className="discount-item__img-wrapper">
              <div className="discount-item__img-bg">
                <img src="./uploads/Component 3.png" style={{ borderRadius: "50%" }} alt=""
                  className="discount-item__img" />
              </div>
            </div>
          </div>

          <div className="discount-item__content" id="discount-tab-sofa">
            <div className="discount-item__info">
              <h3 className="discount-item__big-title">30% Discount On Sofa Collection</h3>
              <div className="discount-item__product-name">Luxury Sofa Set</div>
              <div className="discount-item__desc">
                Upgrade your living room with our premium sofa collection at a great price.
              </div>
              <div className="discount-item__features">
                <div className="discount-item__feature">
                  <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                  <span>Premium fabric</span>
                </div>
                <div className="discount-item__feature">
                  <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                  <span>Modern design</span>
                </div>
                <div className="discount-item__feature">
                  <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                  <span>Comfortable seating</span>
                </div>
              </div>
              <button className="discount-item__btn">Shop Now</button>
            </div>
            <div className="discount-item__img-wrapper">
              <div className="discount-item__img-bg">
                <img src="./uploads/Component 4.png" style={{ borderRadius: "50%" }} alt=""
                  className="discount-item__img" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="fade-up reveal top-categories mt-5 mb-5">
        <h2 className="top-categories__title text-center mb-4">Top Categories</h2>
        <div className="container top-category__swiper mt-5">
          <Swiper
            className="swiper mySwiper"
            spaceBetween={30}
            slidesPerView={4}
            pagination={{ clickable: true, el: '.swiper-pagination__topcategories' }}
            modules={[Pagination]}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {topCategories.map((cat, idx) => (
              <SwiperSlide key={idx}>
                <div className="top-categories__card">
                  <div className="top-categories__img-wrapper">
                    <div className="top-categories__img-wrapper__transition">
                      <Image
                        src={cat.img}
                        alt={cat.name}
                        className="top-categories__img"
                        width={200}
                        height={200}
                      />
                      <button className="top-categories__btn">
                        <a href={cat.link}> View Shop </a>
                      </button>
                    </div>
                  </div>
                  <div className="top-categories__content z-3">
                    <div className="top-categories__name">{cat.name}</div>
                    <div className="top-categories__price">{cat.price}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination swiper-pagination__topcategories"></div>
          </Swiper>
        </div>
      </section>


      <section className="fade-left reveal img-banner mt-5 mb-5">
        <div className="img-banner__content">
          <h2 className="img-banner__title">Get Leatest Update By Subscribe
            0ur Newslater</h2>
          <button className="img-banner__btn"><a href="" className="text-white text-decoration-none"> Shop now
          </a></button>
        </div>
      </section>

      <section className="fade-right reveal brand mt-5 mb-5">
        <div className="brand-logos d-flex justify-content-between align-items-center my-5">
          <a href="https://fashionlive.com" target="_blank">
            <img src="./uploads/Screenshot 2025-05-20 153723.png" alt="Fashion Live"
              className="brand-logo img-fluid" />
          </a>
          <a href="https://handcrafted.com" target="_blank">
            <img src="./uploads/Screenshot 2025-05-20 153816.png" alt="Hand Crafted"
              className="brand-logo img-fluid" />
          </a>
          <a href="https://mestonix.com" target="_blank">
            <img src="./uploads/Screenshot 2025-05-20 153833.png" alt="Mestonix" className="brand-logo img-fluid" />
          </a>
          <a href="https://sunshine.com" target="_blank">
            <img src="./uploads/Screenshot 2025-05-20 153852.png" alt="Sunshine" className="brand-logo img-fluid" />
          </a>
          <a href="https://pure.com" target="_blank">
            <img src="./uploads/Screenshot 2025-05-20 153911.png" alt="Pure" className="brand-logo img-fluid" />
          </a>
        </div>
      </section>


      <section className="fade-up reveal leatest-blog mt-5 mb-5">
        <h2 className="leatest-blog__title">Leatest Blog</h2>
        <div className="leatest-blog__list">
          <div className="leatest-blog__item">
            <Image src="/uploads/Frame 4 (1).png" alt="Blog 1" className="leatest-blog__img" width={350} height={200} />
            <div className="leatest-blog__info">
              <div className="leatest-blog__meta">
                <span className="leatest-blog__author">
                  <span className="icon">
                    <Image src="/uploads/Vector.png" alt="" width={16} height={16} />
                  </span> SaberAli
                </span>
                <span className="leatest-blog__date">
                  <span className="icon">
                    <Image src="/uploads/Vector (1).png" alt="" width={16} height={16} />
                  </span> 21 August,2020
                </span>
              </div>
              <div className="leatest-blog__name">Top esssential Trends in 2021</div>
              <div className="leatest-blog__desc">
                More off this less hello samlande lied much over tightly circa horse taped mighty
              </div>
              <a href="#" className="leatest-blog__readmore">Read More</a>
            </div>
          </div>
          <div className="leatest-blog__item">
            <Image src="/uploads/Frame 3 (1).png" alt="Blog 2" className="leatest-blog__img" width={350} height={200} />
            <div className="leatest-blog__info">
              <div className="leatest-blog__meta">
                <span className="leatest-blog__author">
                  <span className="icon">
                    <Image src="/uploads/Vector.png" alt="" width={16} height={16} />
                  </span> Surfauxion
                </span>
                <span className="leatest-blog__date">
                  <span className="icon">
                    <Image src="/uploads/Vector (1).png" alt="" width={16} height={16} />
                  </span> 21 August,2020
                </span>
              </div>
              <div className="leatest-blog__name">Top essential trends in 2021</div>
              <div className="leatest-blog__desc">
                More off this less hello samlande lied much over tightly circa horse taped mighty
              </div>
              <a href="#" className="leatest-blog__readmore">Read More</a>
            </div>
          </div>
          <div className="leatest-blog__item">
            <Image src="/uploads/Frame 3.png" alt="Blog 3" className="leatest-blog__img" width={350} height={200} />
            <div className="leatest-blog__info">
              <div className="leatest-blog__meta">
                <span className="leatest-blog__author">
                  <span className="icon">
                    <Image src="/uploads/Vector.png" alt="" width={16} height={16} />
                  </span> SaberAli
                </span>
                <span className="leatest-blog__date">
                  <span className="icon">
                    <Image src="/uploads/Vector (1).png" alt="" width={16} height={16} />
                  </span> 21 August,2020
                </span>
              </div>
              <div className="leatest-blog__name">Top esssential Trends in 2021</div>
              <div className="leatest-blog__desc">
                More off this less hello samlande lied much over tightly circa horse taped mighty
              </div>
              <a href="#" className="leatest-blog__readmore">Read More</a>
            </div>
          </div>
        </div>
      </section>

      <button id="backToTopBtn" className="back-to-top d-lg-none" aria-label="Lên đầu trang">
        <i className="fa-solid fa-arrow-up"></i>
      </button>




    </main>
  );
};

export default HomePage;
