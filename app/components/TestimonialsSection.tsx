import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Nguyễn Văn An",
      position: "Kỹ thuật viên - Toyota Motors",
      location: "Osaka, Nhật Bản",
      content:
        "Sau 2 năm làm việc tại Toyota, tôi đã tiết kiệm được 500 triệu đồng và học được rất nhiều kỹ năng mới. Cảm ơn JapanWork đã tạo cơ hội cho tôi!",
      avatar: "/placeholder.svg?height=48&width=48&text=Student+1",
    },
    {
      name: "Trần Thị Bình",
      position: "Điều dưỡng - Bệnh viện Sakura",
      location: "Tokyo, Nhật Bản",
      content:
        "Môi trường làm việc rất chuyên nghiệp, đồng nghiệp thân thiện. Tôi đã mua được nhà và định cư lâu dài tại Nhật. Cuộc sống ổn định hơn rất nhiều.",
      avatar: "/placeholder.svg?height=48&width=48&text=Student+2",
    },
    {
      name: "Lê Minh Cường",
      position: "Thợ hàn - Mitsubishi Heavy",
      location: "Nagoya, Nhật Bản",
      content:
        "Từ một thợ hàn bình thường, giờ tôi đã trở thành team leader. Lương tăng gấp đôi so với khi mới sang. Rất biết ơn sự hỗ trợ tận tình của công ty.",
      avatar: "/placeholder.svg?height=48&width=48&text=Student+3",
    },
  ]

  const stats = [
    { value: "95%", label: "Hài lòng với công việc" },
    { value: "88%", label: "Gia hạn hợp đồng" },
    { value: "92%", label: "Giới thiệu bạn bè" },
    { value: "78%", label: "Định cư lâu dài" },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-noto">Học Viên Tiêu Biểu & Phản Hồi</h2>
          <p className="text-xl text-gray-600">Những câu chuyện thành công từ học viên của chúng tôi</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-navy">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Thống kê học viên */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-navy text-center mb-8 font-noto">Thống Kê Học Viên</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-red mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
