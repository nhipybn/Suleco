"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const albums = [
  {
    title: "Hợp tác chiến lược cùng tỉnh Tochigi",
    images: [
      "/Tochigi.jpg",
      "/Tochigi1.jpg",
      "/Tochigi2.jpg",
      "/Tochigi3.jpg",
      "/Tochigi4.jpg",
      "/Tochigi6.jpg",
    ],
  },
  {
    title: "Hiệp hội công nghiệp thương mại Otsu (Shiga)",
    images: [
      "/Shiga.jpg",
      "/Shiga5.jpg",
      "/Shiga2.jpg",
      "/Shiga3.jpg",
      "/Shiga4.jpg",
      "/Shiga6.jpg",
    ],
  },
  {
    title: "Tỉnh trưởng Nagasaki từng đến thăm Suleco",
    images: [
      "/Nagasaki.jpg",
      "/Nagasaki7.jpg",
      "/Nagasaki2.jpg",
      "/Nagasaki3.jpg",
      "/Nagasaki4.jpg",
      "/Nagasaki6.jpg",
    ],
  },
];

const sliderProps = {
  modules: [Autoplay, EffectFade],
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  effect: "fade",
  fadeEffect: { crossFade: true },
  autoplay: { delay: 2000, disableOnInteraction: false },
  speed: 600,
  allowTouchMove: false,
};

export default function PresenceSection() {
  return (
    <section
      id="presence"
      className="mx-auto w-[92%] max-w-9xl py-4 px-6 md:px-16 border-t border-gray-200"
    >
      {/* Tiêu đề tiếng Nhật */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-red font-noto">
          主要都市における代表的なパートナー
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {albums.map((album, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center"
          >
            {/* Carousel */}
            <div className="w-full h-[400px] md:h-[200px] rounded-xl overflow-hidden mb-3">
              <Swiper {...sliderProps}>
                {album.images.map((src, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={src}
                      alt={`${album.title} - ${i + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                      priority={idx === 0 && i === 0}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Caption */}
            <p className="text-center text-gray-700 font-medium">{album.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
