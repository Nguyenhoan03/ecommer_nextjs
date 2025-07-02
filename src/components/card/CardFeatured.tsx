import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCartShopping, FaHeart, FaMagnifyingGlassPlus } from "react-icons/fa6";
import { BaseCardItem } from '@/types/BaseCardItem';

interface CardFeaturedProps {
  item: BaseCardItem;
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
        <Link href={`/product/${item.name}`} className="card__featured__nav">View Details</Link>
      </div>
      <Image
        src={item.thumbnail ? "/uploads/" + item.thumbnail : "/uploads/default_image.jpg"}
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
        <p className="product-code">Code - {item.brand}</p>
        <p className="product-price">{item.price}</p>
      </div>
    </div>
  );
};

export default CardFeatured;
