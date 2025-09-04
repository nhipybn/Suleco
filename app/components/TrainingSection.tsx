"use client";

import { Check, BookOpen, Users, Home } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TrainingSection() {
  const trainingFeatures = [
    {
      title: "包括的な研修プログラム",
      description: "最新の施設で、専門的かつ体系的な教育を提供。",
    },
    {
      title: "日本語研修 N5〜N3",
      description: "初級から上級まで、聞く・話す・読む・書くの4技能を習得。",
    },
    {
      title: "介護（Kaigo）プログラム",
      description: "日本の教材と日本人講師による専門教育。",
    },
    {
      title: "寄宿舎完備",
      description: "男女別の安全で清潔な宿泊施設を提供。",
    },
    {
      title: "専門教室・実習室",
      description: "Kaigo実習や専門分野の授業に対応。",
    },
  ];

  const facilities = [
    {
      icon: BookOpen,
      title: "教室",
      description: "プロジェクター・音響設備・空調完備",
    },
    {
      icon: Users,
      title: "実習室",
      description: "日本の職場環境を模擬した演習施設",
    },
    {
      icon: Home,
      title: "寄宿舎",
      description: "遠方からの受講生も安心・安全に滞在可能",
    },
  ];

  const galleryImages = [
    "/CSVC1.jpg",
    "/CSVC2.jpg",
    "/CSVC3.jpg",
    "/CSVC4.jpg",
    "/CSVC5.jpg",
    "/CSVC6.jpg",
    "/CSVC7.jpg",
    "/CSVC8.jpg",
  ];

  return (
    <section id="training" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-noto">
            研修プログラムと施設
          </h2>
          <p className="text-xl text-gray-600">包括的な研修と最新の施設</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Training Features */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6 font-noto">研修内容</h3>
            <div className="space-y-6">
              {trainingFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Album Gallery */}
          <div>
            <img
              src="/CSVC4.jpg"
              alt="研修施設"
              className="rounded-xl shadow-lg mb-6"
            />

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={2}
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 3000 }}
              className="rounded-lg shadow-sm"
            >
              {galleryImages.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={src}
                    alt={`施設 ${idx + 1}`}
                    className="rounded-lg shadow-sm object-cover w-full h-48"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Facilities */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center font-noto">施設概要</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-navy" />
                  </div>
                  <h4 className="font-semibold text-navy mb-2">{facility.title}</h4>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
