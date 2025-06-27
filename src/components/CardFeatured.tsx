import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCartShopping, FaHeart, FaMagnifyingGlassPlus } from "react-icons/fa6";

interface CardFeaturedProps {
  item: {
    img: string;
    name: string;
    code: string;
    price: string;
  };
}
const CardFeatured = ({ item }: CardFeaturedProps) => {
  return (
    <div className="card__featured-product">
      <div className="card-actions">
        <button><FaCartShopping /></button>
        <button><FaHeart /></button>
        <button><FaMagnifyingGlassPlus /></button>
      </div>
      <div className="card__featured__viewdetail">
        <Link href="/" className="card__featured__nav">View Details</Link>
      </div>
      <Image
        src={item.img}
        alt={item.name}
        className="product-image img-fluid"
        width={300}
        height={300}
      />
      <div className="product-info">
        <h3 className="product-name">{item.name}</h3>
        <div className="color-options">
          <span className="color green"></span>
          <span className="color purple"></span>
          <span className="color blue"></span>
        </div>
        <p className="product-code">Code - {item.code}</p>
        <p className="product-price">{item.price}</p>
      </div>
    </div>
  );
};

export default CardFeatured;