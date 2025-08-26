"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const PresenceSection = () => {
  return (
    <section
      id="presence"
      className="mx-auto w-[92%] max-w-7xl py-10 px-6 md:px-16 border-t border-gray-200"
      style={{ minHeight: "700px" }}
    >
      <div className="grid grid-cols-3 gap-6 items-center">
        {/* Cột trái: Text */}
        <div className="text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red">
            3. ベトナムと日本でのプレゼンス
          </h2>
          <p className="text-xl font-semibold mb-4">
           現在面接待機中の実習生数:{" "}
            <span className="text-red text-6xl font-extrabold leading-none">
              400+
            </span>
          </p>
          <p className="text-lg leading-relaxed mb-4">
            SULECOはベトナムおよび日本の各地域に拠点を持ち、実習生・技術者の
            日本での就労に向けた教育、選抜、派遣プロセスを包括的に支援しています。
          </p>

          <div className="max-w-md space-y-2">
            {[
              "ホーチミン市 – 本社",
              "フエ – 支社",
              "ダナン – 代表オフィス",
              "東京 – 連絡事務所",
              "名古屋 – 代表オフィス",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-grey bg-opacity-30 text-black p-2 rounded-xl shadow-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Cột phải: Swiper slideshow */}
        <div className="flex justify-center col-span-2">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={800}
            loop={true}
            className="w-full max-w-lg"
          >
            {["/MapVN.png", "/MapJP.png"].map((src, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-[500px]">
                  <Image
                    src={src}
                    alt={`Bản đồ ${i + 1}`}
                    fill
                    className="object-contain rounded-xl"
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PresenceSection;
