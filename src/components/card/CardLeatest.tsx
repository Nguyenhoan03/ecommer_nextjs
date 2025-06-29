import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CardLeatest = ({ item }: { item: any }) => {
    return (
        <div className="latest-products__item">
            <Link href={`/product/${item.name}`} className="latest-products__link">
            <div className="latest-products__img-wrapper position-relative">
                <Image
                    src={item.img}
                    alt={item.name}
                    width={300}
                    height={270}
                    className="latest-products__img"
                />
                {item.badge && <span className="latest-products__badge">{item.badge}</span>}
                <div className="latest-products__actions">
                    <button className="latest-products__action-btn"><i className="fa-solid fa-cart-shopping"></i></button>
                    <button className="latest-products__action-btn"><i className="fa-regular fa-heart"></i></button>
                    <button className="latest-products__action-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            <div className="latest-products__info">
                <span className="latest-products__name">{item.name}</span>
                <span className="latest-products__prices">
                    <span className="latest-products__price">{item.price}</span>
                    <span className="latest-products__price--old">{item.oldPrice}</span>
                </span>
            </div>
            </Link>
        </div>
    );
};

export default CardLeatest;
