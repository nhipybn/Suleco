"use client"

import { ArrowRight, Award } from "lucide-react"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-t from-[#ffffff] to-white pb-16 pt-20">

      {/* Background decorations */}
      {/* Cần điều chỉnh vị trí và độ mờ trên mobile để tránh gây rối */}
      <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-gradient-to-br from-white to-green-200 opacity-20 blur-3xl sm:left-20 sm:top-20 sm:h-40 sm:w-40"></div>
      <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-gradient-to-tr from-white to-green-300 opacity-20 blur-3xl sm:bottom-20 sm:right-20 sm:h-48 sm:w-48"></div>

      {/* Card trắng mờ chứa toàn bộ nội dung chính */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            

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
            {/* Tối ưu hóa bố cục stats trên mobile để không bị quá chật */}
            <div className="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <div className="font-noto text-3xl font-bold text-navy">43+</div>
                <div className="text-sm text-gray-600">年超の運営実績</div>
              </div>
              <div>
                <div className="font-noto text-3xl font-bold text-navy">
                  13,059
                </div>
                <div className="text-sm text-gray-600">人以上の派遣実績</div>
              </div>
              <div>
                <div className="font-noto text-3xl font-bold text-navy">905</div>
                <div className="text-sm text-gray-600">社超のパートナー企業</div>
              </div>
            </div>
          </div>

          {/* Right Images Grid - Hiện trên mobile với bố cục đơn giản hơn */}
          <div className="relative h-[400px] mt-8 block lg:h-[600px] lg:mt-0">
            {/* Lưới hình ảnh phức tạp chỉ hiển thị trên màn hình lớn */}
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

            {/* Bố cục hình ảnh đơn giản cho mobile */}
            <div className="absolute inset-0 z-0 block lg:hidden">
              <div className="h-full overflow-hidden rounded-2xl shadow-lg">
                 <img
                  src="/DNG-229.jpg"
                  alt="Công nhân Việt Nam tại nhà máy Nhật Bản"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -right-2 -top-2 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-red/10 sm:-right-4 sm:-top-4 sm:h-20 sm:w-20">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red sm:h-10 sm:w-10">
                <span className="text-xs font-bold text-white sm:text-sm">JP</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-navy/10 sm:-bottom-4 sm:-left-4 sm:h-16 sm:w-16">
              <div className="h-6 w-6 rounded-full bg-navy sm:h-8 sm:w-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
