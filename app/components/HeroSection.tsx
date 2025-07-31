"use client"

import { ArrowRight, Award } from "lucide-react"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section className="pt-20 pb-16 bg-white relative overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-red/10 text-red px-4 py-2 rounded-full text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              Đối tác uy tín tại Nhật Bản
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy  leading-tight font-noto">
              Cơ Hội Làm Việc Tại <span className="text-red relative inline-block">Nhật Bản</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Chúng tôi là cầu nối đáng tin cậy, giúp bạn hiện thực hóa ước mơ làm việc tại Nhật Bản với mức lương hấp
              dẫn, môi trường chuyên nghiệp và cơ hội phát triển bền vững.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-red text-white px-8 py-4 rounded-lg hover:bg-red-dark transition-all duration-300 transform hover:-translate-y-1 font-medium text-lg flex items-center justify-center"
              >
                Đăng ký tư vấn miễn phí
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-navy hover:text-red transition-colors font-medium text-lg flex items-center"
              >
                Tìm hiểu thêm
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-navy font-noto">5000+</div>
                <div className="text-sm text-gray-600">Học viên thành công</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy font-noto">50+</div>
                <div className="text-sm text-gray-600">Đối tác Nhật Bản</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy font-noto">15+</div>
                <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>

          {/* Right Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-12 grid-rows-12 gap-4 h-[600px]">
              {/* Large image - top left */}
              <div className="col-span-7 row-span-6 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/DNG-229.jpg"
                  alt="Công nhân Việt Nam tại nhà máy Nhật Bản"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Medium image - top right */}
              <div className="col-span-5 row-span-4 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/IMG_0010.jpg"
                  alt="Lớp học tiếng Nhật"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Small image - middle right */}
              <div className="col-span-5 row-span-2 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/IMG_3323.jpg"
                  alt="Chứng chỉ tiếng Nhật"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Medium image - bottom left */}
              <div className="col-span-6 row-span-4 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/IMG_7870_2.jpg"
                  alt="Văn phòng tại Nhật Bản"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Tall image - bottom right */}
              <div className="col-span-6 row-span-6 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/DNG-176-Edit.png"
                  alt="Câu chuyện thành công"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Small accent image */}
              <div className="col-span-1 row-span-2 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/placeholder.svg?height=80&width=80&text=Flag"
                  alt="Cờ Nhật Bản"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red/10 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">JP</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-navy rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-navy/5 rounded-full blur-3xl"></div>
    </section>
  )
}
