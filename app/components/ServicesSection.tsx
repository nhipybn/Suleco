import { Briefcase, Users, GraduationCap, Building, Globe, BookOpen } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Briefcase,
      title: "Kỹ thuật viên",
      description: "Cơ khí, điện tử, ô tô, xây dựng. Yêu cầu có kinh nghiệm hoặc được đào tạo chuyên sâu.",
      salary: "180,000 - 250,000 ¥/tháng",
      duration: "3-5 năm",
    },
    {
      icon: Users,
      title: "Lao động phổ thông",
      description: "Sản xuất, đóng gói, nông nghiệp, thực phẩm. Phù hợp với người mới bắt đầu.",
      salary: "150,000 - 200,000 ¥/tháng",
      duration: "3-5 năm",
    },
    {
      icon: GraduationCap,
      title: "Chăm sóc sức khỏe",
      description: "Điều dưỡng, chăm sóc người già. Cần có bằng cấp chuyên môn và tiếng Nhật tốt.",
      salary: "200,000 - 300,000 ¥/tháng",
      duration: "5 năm",
    },
    {
      icon: Building,
      title: "Xây dựng",
      description: "Thợ hàn, thợ mộc, thợ sơn, công nhân xây dựng. Yêu cầu sức khỏe tốt và kỹ năng chuyên môn.",
      salary: "170,000 - 230,000 ¥/tháng",
      duration: "3-5 năm",
    },
    {
      icon: Globe,
      title: "Dịch vụ",
      description: "Nhà hàng, khách sạn, bán lẻ. Cần giao tiếp tiếng Nhật tốt và kỹ năng phục vụ khách hàng.",
      salary: "160,000 - 220,000 ¥/tháng",
      duration: "3-5 năm",
    },
    {
      icon: BookOpen,
      title: "Nông nghiệp",
      description: "Trồng trọt, chăn nuôi, thu hoạch. Phù hợp với người có kinh nghiệm nông nghiệp.",
      salary: "140,000 - 180,000 ¥/tháng",
      duration: "3 năm",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-noto">Dịch Vụ Phái Cử</h2>
          <p className="text-xl text-gray-600">Đa dạng ngành nghề với mức lương hấp dẫn</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-navy/10 rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4 font-noto">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Mức lương:</span>
                    <span className="font-semibold text-red">{service.salary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Thời gian:</span>
                    <span className="font-semibold">{service.duration}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
