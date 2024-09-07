import React from 'react';
import ProductCart from './ProductCart';
import Image from 'next/image';
import ReviewRatings from './ReviewRatings';
const allProducts = [
  {
    img: '/products/product01.jpg',
    title: 'belt',
    desc: 'wonderfull belt',
    rating: 4,
    price: 110,
  },
  {
    img: '/products/product02.jpg',
    title: 'watch',
    desc: 'wonderfull watch',
    rating: 5,
    price: 110,
  },
  {
    img: '/products/product03.jpg',
    title: 'moneybag',
    desc: 'moneybag best',
    rating: 4,
    price: 110,
  },
  {
    img: '/products/product04.jpg',
    title: 'shoe',
    desc: 'shoe merun',
    rating: 3,
    price: 110,
  },
  {
    img: '/products/product04.jpg',
    title: 'shoe',
    desc: 'shoe belt',
    rating: 4,
    price: 110,
  },
  {
    img: '/products/product05.jpg',
    title: ' smart shoe',
    desc: 'wonderfull belt',
    rating: 5,
    price: 110,
  },
  {
    img: '/products/product06.jpg',
    title: 'ladies bag',
    desc: 'wonderfull ladies bag',
    rating: 3,
    price: 50,
  },
];

// console.log(typeof allProducts[0].price);

export default function NewProuct() {
  return (
    <div className="container pt-16">
      <h2 className="font-medium text-2xl pb-4">New Products</h2>
      <div
        className="grid grid-cols-1 place-items-center sm:place-content-start sm:grid-cols-2 lg:grid-cols-3 
      xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10"
      >
        {allProducts.map((product) => (
          <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
            <Image
              className="w-full h-auto"
              src={product.img}
              width={200}
              height={300}
              alt={product.title}
            />
            <div className="space-y-2 py-2">
              <h2 className="text-accent font-medium uppercase">
                {product.title}
              </h2>
              <p className="text-gray-500 max-w-[150px]">{product.desc}</p>
              <div>
                <ReviewRatings ratings={product.rating} />
              </div>
              <div className="font-bold flex gap-4">
                ${product.price}
                <del className="text-gray-500 font-normal">
                  ${product.price + 50}.00
                </del>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProductCart />
    </div>
  );
}
