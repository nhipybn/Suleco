"use client"

import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-t from-[#ffffff] to-white pb-16 pt-20">
      {/* Background decorations */}
      <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-gradient-to-br from-white to-green-200 opacity-20 blur-3xl sm:left-20 sm:top-20 sm:h-40 sm:w-40"></div>
      <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-gradient-to-tr from-white to-green-300 opacity-20 blur-3xl sm:bottom-20 sm:right-20 sm:h-48 sm:w-48"></div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Grid đổi lại thứ tự: ảnh trước, text sau trên mobile */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Right Images - xuất hiện đầu tiên trên mobile */}
          <div className="relative order-1 h-[300px] sm:h-[400px] lg:order-2 lg:h-[600px]">
         {/* Bố cục hình ảnh cho mobile (2 cột 2 hàng = 4 hình, có bo góc) */}
<div className="absolute inset-0 z-0 block lg:hidden">
  <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
    <div className="overflow-hidden rounded-lg">
      <img
        src="/DNG-229.jpg"
        alt="Công nhân Việt Nam tại nhà máy Nhật Bản"
        className="h-full w-full object-cover rounded-lg"
      />
    </div>
    <div className="overflow-hidden rounded-lg">
      <img
        src="/IMG_0010.jpg"
        alt="Lớp học tiếng Nhật"
        className="h-full w-full object-cover rounded-lg"
      />
    </div>
    <div className="overflow-hidden rounded-lg">
      <img
        src="/IMG_3323.jpg"
        alt="Chứng chỉ tiếng Nhật"
        className="h-full w-full object-cover rounded-lg"
      />
    </div>
    <div className="overflow-hidden rounded-lg">
      <img
        src="/dongphuc.jpg"
        alt="Câu chuyện thành công"
        className="h-full w-full object-cover rounded-lg"
      />
    </div>
  </div>
</div>


            {/* Desktop: lưới nhiều ảnh */}
            <div className="absolute inset-0 z-0 hidden lg:grid grid-cols-12 grid-rows-12 gap-4">
              <div className="col-span-7 row-span-6 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/DNG-229.jpg"
                  alt="Công nhân Việt Nam tại nhà máy Nhật Bản"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="col-span-5 row-span-4 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/IMG_0010.jpg"
                  alt="Lớp học tiếng Nhật"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="col-span-5 row-span-2 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/IMG_3323.jpg"
                  alt="Chứng chỉ tiếng Nhật"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="col-span-6 row-span-4 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/DNG-176-Edit.png"
                  alt="Văn phòng tại Nhật Bản"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="col-span-6 row-span-6 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/dongphuc.jpg"
                  alt="Câu chuyện thành công"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Left Content */}
          <div className="order-2 space-y-8 lg:order-1">
            <h1 className="font-noto text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-5xl">
              信頼できる人材を、
              <span className="relative inline-block text-red">
                確かなパートナーから
              </span>
            </h1>
            <h3 className="text-xl font-bold text-navy">
              技能実習生・介護・特定技能・技術者の派遣実績43年以上
            </h3>
            <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-xl">
              ベトナム最大級の人材育成・送り出し機関「SULECO」1981年創業、12,000人以上の人材を20ヵ国以上に送り出し、日本との協力体制を強化しています。
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollToSection("contact")}
                className="transform-gpu flex items-center justify-center rounded-full border border-white bg-navy px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-dark"
              >
                日本語で相談
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 text-center sm:pt-8">
              <div>
                <div className="font-noto text-2xl font-bold text-navy sm:text-3xl">
                  43+
                </div>
                <div className="text-xs text-gray-600 sm:text-sm">
                  年超の運営実績
                </div>
              </div>
              <div>
                <div className="font-noto text-2xl font-bold text-navy sm:text-3xl">
                  13,059
                </div>
                <div className="text-xs text-gray-600 sm:text-sm">
                  人以上の派遣実績
                </div>
              </div>
              <div>
                <div className="font-noto text-2xl font-bold text-navy sm:text-3xl">
                  905
                </div>
                <div className="text-xs text-gray-600 sm:text-sm">
                  社超のパートナー企業
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
