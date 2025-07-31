import { Target, Award, Heart } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-noto">Về JapanWork</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Với hơn 15 năm kinh nghiệm, chúng tôi tự hào là đơn vị hàng đầu trong lĩnh vực phái cử lao động sang Nhật
            Bản
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/placeholder.svg?height=400&width=600&text=Company+Building"
              alt="Trụ sở JapanWork"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2 font-noto">Sứ mệnh</h3>
                  <p className="text-gray-600">
                    Tạo cầu nối vững chắc giữa lao động Việt Nam và thị trường lao động Nhật Bản, mang lại cơ hội phát
                    triển bền vững cho mọi học viên.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2 font-noto">Tầm nhìn</h3>
                  <p className="text-gray-600">
                    Trở thành đơn vị phái cử lao động hàng đầu Việt Nam, được tin tưởng bởi cả học viên và đối tác Nhật
                    Bản.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2 font-noto">Giá trị cốt lõi</h3>
                  <p className="text-gray-600">
                    Uy tín - Chất lượng - Tận tâm. Chúng tôi cam kết đồng hành cùng học viên từ khâu đào tạo đến khi ổn
                    định cuộc sống tại Nhật Bản.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
