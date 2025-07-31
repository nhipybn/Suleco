import { Users, Building, TrendingUp, Award } from "lucide-react"

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-noto">Thành Tích & Đối Tác</h2>
          <p className="text-xl text-gray-600">Những con số ấn tượng và mạng lưới đối tác uy tín tại Nhật Bản</p>
        </div>

        {/* Thành tích */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-red" />
            </div>
            <div className="text-3xl font-bold text-navy font-noto mb-2">5,000+</div>
            <div className="text-gray-600">Học viên thành công</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-red" />
            </div>
            <div className="text-3xl font-bold text-navy font-noto mb-2">50+</div>
            <div className="text-gray-600">Công ty đối tác</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-red" />
            </div>
            <div className="text-3xl font-bold text-navy font-noto mb-2">98%</div>
            <div className="text-gray-600">Tỷ lệ đậu visa</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-red" />
            </div>
            <div className="text-3xl font-bold text-navy font-noto mb-2">15+</div>
            <div className="text-gray-600">Năm kinh nghiệm</div>
          </div>
        </div>

        {/* Đối tác */}
        <div>
          <h3 className="text-2xl font-bold text-navy text-center mb-8 font-noto">Đối Tác Uy Tín Tại Nhật Bản</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <img
                src="/placeholder.svg?height=80&width=120&text=Partner+1"
                alt="Đối tác 1"
                className="h-12 mx-auto mb-4"
              />
              <div className="text-center">
                <h4 className="font-semibold text-navy">Toyota Motors</h4>
                <p className="text-sm text-gray-600">Ô tô & Cơ khí</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <img
                src="/placeholder.svg?height=80&width=120&text=Partner+2"
                alt="Đối tác 2"
                className="h-12 mx-auto mb-4"
              />
              <div className="text-center">
                <h4 className="font-semibold text-navy">Panasonic Corp</h4>
                <p className="text-sm text-gray-600">Điện tử</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <img
                src="/placeholder.svg?height=80&width=120&text=Partner+3"
                alt="Đối tác 3"
                className="h-12 mx-auto mb-4"
              />
              <div className="text-center">
                <h4 className="font-semibold text-navy">Mitsubishi Heavy</h4>
                <p className="text-sm text-gray-600">Công nghiệp nặng</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <img
                src="/placeholder.svg?height=80&width=120&text=Partner+4"
                alt="Đối tác 4"
                className="h-12 mx-auto mb-4"
              />
              <div className="text-center">
                <h4 className="font-semibold text-navy">Sony Electronics</h4>
                <p className="text-sm text-gray-600">Công nghệ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
