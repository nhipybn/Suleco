import { Check, BookOpen, Users, Home } from "lucide-react"

export default function TrainingSection() {
  const trainingFeatures = [
    {
      title: "Tiếng Nhật cơ bản đến nâng cao",
      description: "Từ Hiragana, Katakana đến Kanji. Luyện nghe, nói, đọc, viết. Mục tiêu đạt N4-N3.",
    },
    {
      title: "Kỹ năng chuyên môn",
      description: "Đào tạo kỹ thuật theo từng ngành nghề: cơ khí, điện tử, xây dựng, nông nghiệp...",
    },
    {
      title: "Văn hóa & Phép tắc xã hội",
      description: "Tìm hiểu văn hóa Nhật Bản, cách ứng xử, làm việc nhóm, quy tắc an toàn lao động.",
    },
    {
      title: "Kỹ năng sống",
      description: "Hướng dẫn sinh hoạt hàng ngày, mua sắm, giao thông, y tế, ngân hàng tại Nhật Bản.",
    },
  ]

  const facilities = [
    {
      icon: BookOpen,
      title: "20+ Phòng học",
      description: "Trang bị máy chiếu, âm thanh hiện đại, điều hòa đầy đủ",
    },
    {
      icon: Users,
      title: "Phòng thực hành",
      description: "Mô phỏng môi trường làm việc thực tế tại Nhật Bản",
    },
    {
      icon: Home,
      title: "Ký túc xá",
      description: "Chỗ ở sạch sẽ, an toàn cho học viên xa nhà",
    },
  ]

  return (
    <section id="training" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-noto">
            Chương Trình Đào Tạo & Cơ Sở Vật Chất
          </h2>
          <p className="text-xl text-gray-600">Đào tạo chuyên nghiệp với cơ sở vật chất hiện đại</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6 font-noto">Chương Trình Đào Tạo</h3>
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

          <div>
            <img
              src="/placeholder.svg?height=400&width=600&text=Training+Facility"
              alt="Cơ sở đào tạo"
              className="rounded-xl shadow-lg mb-6"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/placeholder.svg?height=150&width=200&text=Classroom"
                alt="Phòng học"
                className="rounded-lg shadow-sm"
              />
              <img
                src="/placeholder.svg?height=150&width=200&text=Lab"
                alt="Phòng thực hành"
                className="rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center font-noto">Cơ Sở Vật Chất</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-navy" />
                  </div>
                  <h4 className="font-semibold text-navy mb-2">{facility.title}</h4>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
