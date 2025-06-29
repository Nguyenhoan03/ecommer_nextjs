import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { BaseCardItem } from '@/types/BaseCardItem';
interface TrendingProduct { 
    item:BaseCardItem;
}

const CardTrending = ({item} : TrendingProduct) => {
    return (
        <div className="trending-product__card col-6 col-sm-6 col-md-3 mb-4 mt-4">
            <Link href={`/product/${item.name}`} className="trending-product__link">
            <div className="trending-product__card-inner">
                <Image
                        src={item.img}
                        alt={item.name}
                        className="product-image img-fluid"
                        width={300}
                        height={300}
                        
                      />
                   
                <div className="trending-product__info">
                    <p className="trending-product__name">{item.name}</p>
                    <p className="trending-product__price">{item.price} <span
                        className="trending-product__price--old">{item.oldPrice}</span></p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default CardTrending
