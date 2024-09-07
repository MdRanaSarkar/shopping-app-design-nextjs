'use client';
import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };
  const bannerData = [
    {
      id: 1,
      title: 'First banner',
      image: '/banner/banner01.jpg',
      mainTitle: 'Womens Hand Bag Pant',
      price: 120,
    },
    {
      id: 2,
      title: 'Second banner',
      image: '/banner/banner02.jpg',
      mainTitle: 'Mens Jeans Pant',
      price: 122,
    },
    {
      id: 3,
      title: 'Third banner',
      image: '/banner/banner03.jpg',
      mainTitle: 'Womens second hand bag',
      price: 124,
    },
  ];
  return (
    <div className="container pt-6 lg:pt-0">
      <Slider {...settings}>
        {bannerData.map((banner) => (
          <Slide
            img={banner.image}
            bannertitle={banner.title}
            maintitle={banner.mainTitle}
            price={banner.price}
          />
        ))}
      </Slider>
    </div>
  );
}
