import { FileText, CheckCircle, BookOpen, Users, Plane } from "lucide-react"

export default function ProcessSection() {
  const processSteps = [
    {
      icon: FileText,
      title: "Tư vấn & Đăng ký",
      description: "Tư vấn miễn phí về ngành nghề phù hợp, điều kiện, quy trình. Đăng ký hồ sơ và ký hợp đồng.",
    },
    {
      icon: CheckCircle,
      title: "Kiểm tra sức khỏe",
      description:
        "Khám sức khỏe tổng quát tại các bệnh viện được chỉ định. Đảm bảo đủ điều kiện sức khỏe để làm việc.",
    },
    {
      icon: BookOpen,
      title: "Đào tạo tiếng Nhật",
      description: "Học tiếng Nhật từ cơ bản đến nâng cao (6-12 tháng). Đạt trình độ N4-N3 theo yêu cầu của đối tác.",
    },
    {
      icon: Users,
      title: "Phỏng vấn & Tuyển chọn",
      description: "Tham gia phỏng vấn với đại diện công ty Nhật Bản. Hỗ trợ chuẩn bị và luyện tập phỏng vấn.",
    },
    {
      icon: FileText,
      title: "Làm hồ sơ Visa",
      description: "Chuẩn bị và nộp hồ sơ xin visa làm việc. Hỗ trợ hoàn thiện thủ tục pháp lý cần thiết.",
    },
    {
      icon: Plane,
      title: "Xuất cảnh",
      description: "Hướng dẫn thủ tục xuất cảnh, đón tiếp tại sân bay Nhật Bản và hỗ trợ ổn định cuộc sống ban đầu.",
    },
  ]

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-noto">Quy Trình Tiếp Nhận</h2>
          <p className="text-xl text-gray-600">6 bước đơn giản để bắt đầu hành trình sang Nhật Bản</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-red rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="w-12 h-12 bg-red/10 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-red" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3 font-noto">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
