'use client'
import React, {useState} from 'react'
import TabsCustom from './TabsCustom';
import CardLeatest from './card/CardLeatest';
import "@/styles/CardLeatest.scss";
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

];
const LeatestProductsClient = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };
    return (
        <div className="leatest_product mt-4">
            <h2 className="text-center mb-4 leatest-products__title">Leatest Products</h2>
            <TabsCustom
                tabs={["New Arrival", "Best Seller", "Featured", "Special Offer"]}
                value={tabValue}
                onChange={handleTabChange}
                className="tabs-center mb-4"
            />
            <div className="row mt-5">
                {leatestProducts.map((item, idx) => (
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={idx}>
                        <CardLeatest item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LeatestProductsClient
