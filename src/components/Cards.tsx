"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

interface CardProps {
  listCards: {
    name: string;
    image: string;
    city: string;
    country: string;
    rating: string;
    testimonial: string;
  }[];
}

const Cards: React.FC<CardProps> = ({ listCards }) => {
  const settings = {
    dots: true,
    customPaging: function (i: number) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all"></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={(slider) => setSliderRef(slider)}
        className="flex items-stretch justify-items-stretch"
      >
        {listCards.map((card, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1 items-center">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={card.image}
                      alt="Icon People"
                      width={64}
                      height={64}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                      className="rounded-full object-cover w-auto h-auto"
                    />
                  </div>
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {card.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {card.city}, {card.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{card.rating}</p>
                  <span className="flex ml-4">
                    <Image
                      src="https://luis-capital8.s3.us-east-2.amazonaws.com/icon/stars.svg"
                      alt="star icon"
                      width={16}
                      height={16}
                      className="object-contain"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{card.testimonial}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={() => sliderRef?.slickPrev()}
          >
            <Image
              src={
                "https://luis-capital8.s3.us-east-2.amazonaws.com/icon/eva_arrow-back-fill.svg"
              }
              alt="back arrow icon"
              width={16}
              height={16}
            />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={() => sliderRef?.slickNext()}
          >
            <Image
              src={
                "https://luis-capital8.s3.us-east-2.amazonaws.com/icon/eva_arrow-next-fill.svg"
              }
              alt="next arrow icon"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
