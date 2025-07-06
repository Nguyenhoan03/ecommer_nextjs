'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '@/styles/DetailProduct.scss'
const DetailProduct = () => {
  return (
    <>
      <div className="banner-shoplist">
        <div className="banner-shoplist__content container align-items-center">
          <p className="banner-shoplist__title">Product Detail</p>
          <ul className="d-flex gap-2 text-align-start">
            <li><Link href="/" style={{color: 'black',fontFamily: 'Lato',fontSize: '16px'}}>Home</Link></li>
            <li><Link href="#" style={{color: 'black',fontFamily: 'Lato',fontSize: '16px'}}>. Page</Link></li>
            <li><Link href="/shop/list" className="breadcrumb-link">. Product Detail</Link></li>
          </ul>
        </div>
      </div>

      <section>
        <div className="product-card container mt-5 mb-5">
          <div className="row g-4 align-items-start flex-wrap">
            <div className="col-lg-2 Thumbnail__list col-md-3 col-12 order-2 order-md-1">
              <div className="thumb-list d-flex d-sm-block justify-content-center gap-2 gap-sm-0">
                <Image 
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=200&q=80"
                  className="thumb-img active img-fluid mb-2" 
                  alt="thumb1"
                  width={200}
                  height={200}
                />
                <Image 
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80"
                  className="thumb-img img-fluid mb-2" 
                  alt="thumb2"
                  width={200}
                  height={200}
                />
                <Image 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80"
                  className="thumb-img img-fluid mb-2" 
                  alt="thumb3"
                  width={200}
                  height={200}
                />
                <Image 
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80"
                  className="thumb-img img-fluid mb-2" 
                  alt="thumb4"
                  width={200}
                  height={200}
                />
              </div>
            </div>

            <div className="col-12 col-md-6 order-1 order-md-2 text-center main-imgs">
              <Image 
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
                className="main-img img-fluid" 
                id="mainProductImg" 
                alt="main"
                width={600}
                height={600}
              />
            </div>

            <div className="col-12 product__description fade-in-up col-md-4 order-3">
              <div className="product-title h4 fw-bold">Playwood arm chair</div>
              <div className="product-rating mb-2">
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <span className="count text-muted">(22)</span>
              </div>
              <div className="product-price mb-2">
                <span className="fw-bold text-primary fs-5">$32.00</span>
                <span className="old-price text-danger text-decoration-line-through ms-2">$32.00</span>
              </div>
              <div className="mb-2">
                <span className="meta-label fw-semibold">Color</span>
              </div>
              <div className="product-desc mb-3 text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et
                volutpat sit.
              </div>
              <div className="mb-3 d-flex align-items-center gap-2">
                <button className="btn btn-primary px-4">Add To Cart</button>
                <button className="btn btn-outline-secondary rounded-circle">
                  <i className="far fa-heart"></i>
                </button>
              </div>
              <div className="product-meta text-muted">
                <div><span className="meta-label fw-bold">Categories:</span></div>
                <div className="mt-2"><span className="meta-label fw-bold">Tags</span></div>
                <div className="mt-3">
                  <span className="meta-label fw-bold">Share</span>
                  <span className="share-icons ms-2">
                    <i className="fab fa-facebook-f me-2"></i>
                    <i className="fab fa-twitter me-2"></i>
                    <i className="fab fa-dribbble"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="desc-productdetail mt-5 mb-5 pb-5 fade-in-up">
        <div className="container pt-5">
          <div className="desc-productdetail__category d-flex">
            <p className="active" data-tab="desc">Description</p>
            <p data-tab="info">Additional Info</p>
            <p data-tab="reviews">Reviews</p>
            <p data-tab="video">Video</p>
          </div>

          <div className="desc-productdetail__content">
            <div className="tab-pane active" id="desc">
              <div className="desc-productdetail__title pt-4">
                <h2>Varius tempor.</h2>
                <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed
                  et
                  eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac
                  ante.
                  Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat
                  laoreet
                  diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet
                  consequat,
                  quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
                  massa
                  viverr .</p>
              </div>
              <div className="desc-productdetail__detail pt-4">
                <h2>More details</h2>
                <ul className="desc-productdetail__list">
                  <li>
                    <span className="arrow-icon">→</span>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla
                    lobortis
                    justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                  </li>
                  <li>
                    <span className="arrow-icon">→</span>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla
                    lobortis
                    justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                  </li>
                  <li>
                    <span className="arrow-icon">→</span>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla
                    lobortis
                    justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                  </li>
                  <li>
                    <span className="arrow-icon">→</span>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla
                    lobortis
                    justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-pane" id="info">
              <div className="desc-productdetail__title">
                <h2>Additional Information</h2>
                <p>Material: Wood, Color: Brown, Warranty: 2 years, ...</p>
              </div>
            </div>
            <div className="tab-pane" id="reviews">
              <div className="desc-productdetail__title">
                <h2>Reviews</h2>
                <p>No reviews yet. Be the first to review this product!</p>
              </div>
            </div>
            <div className="tab-pane" id="video">
              <div className="desc-productdetail__title">
                <h2>Product Video</h2>
                <p>Watch the product video below:</p>
                <iframe 
                  width="400" 
                  height="225"
                  src="https://vip.opstream90.com/share/b8c8c63d4b8856c7872b225e53a6656c"
                  title="Product Video" 
                  frameBorder="0" 
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relate-product mt-5 mb-5 fade-in-up">
        <div className="container container__relate-product">
          <h2 className="relate-title mb-4">Related Products</h2>
          <div className="relate-grid pt-3">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index} className="relate-item">
                <Link href="">
                  <Image 
                    src={`/images/Rectangle ${index === 2 ? '130' : index === 3 ? '131' : '128'}.png`}
                    alt="Mens Fashion Wear" 
                    className="relate-img"
                    width={300}
                    height={300}
                  />
                  <div className="relate-info">
                    <div className="relate-name d-flex justify-content-between">
                      <div className="relate-name__card">Mens Fashion Wear</div>
                      <div className="product-rating">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`fa${i < (index === 2 ? 5 : index === 3 ? 3 : 4) ? 's' : 'r'} fa-star`}></i>
                        ))}
                      </div>
                    </div>
                    <div className="relate-row">
                      <span className="relate-price">${index === 3 ? '51.00' : '67.00'}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mt-5">
        <section className="fade-right reveal brand mt-5 mb-5 pt-3 pb-5 margin-auto">
          <div className="brand-logos d-flex align-items-center my-5">
            {[1, 2, 3, 4, 5].map((item) => (
              <Link key={item} href="#">
                <Image 
                  src={`/images/Screenshot 2025-05-20 1537${item === 1 ? '23' : item === 2 ? '16' : item === 3 ? '33' : item === 4 ? '52' : '11'}.png`}
                  alt={`Brand ${item}`}
                  className="brand-logo img-fluid"
                  width={150}
                  height={50}
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailProduct;
