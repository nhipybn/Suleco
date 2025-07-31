import { Phone, Users, Shield, Home, Heart, TrendingUp, MapPin } from "lucide-react"

export default function SupportSection() {
  const supportServices = [
    {
      icon: Phone,
      title: "Hỗ trợ 24/7",
      description: "Đường dây nóng hỗ trợ khẩn cấp, tư vấn pháp lý, giải quyết tranh chấp lao động bất cứ lúc nào.",
    },
    {
      icon: Users,
      title: "Cộng đồng học viên",
      description: "Kết nối với cộng đồng người Việt tại Nhật, chia sẻ kinh nghiệm, hỗ trợ lẫn nhau trong cuộc sống.",
    },
    {
      icon: Shield,
      title: "Bảo vệ quyền lợi",
      description: "Đảm bảo quyền lợi theo hợp đồng, hỗ trợ thương lượng tăng lương, cải thiện điều kiện làm việc.",
    },
    {
      icon: Home,
      title: "Hỗ trợ nhà ở",
      description: "Tư vấn tìm nhà, làm thủ tục thuê nhà, hỗ trợ chuyển nhà khi cần thiết. Đảm bảo chỗ ở ổn định.",
    },
    {
      icon: Heart,
      title: "Chăm sóc sức khỏe",
      description: "Hướng dẫn đăng ký bảo hiểm y tế, tìm bệnh viện, hỗ trợ thông dịch khi khám chữa bệnh.",
    },
    {
      icon: TrendingUp,
      title: "Phát triển sự nghiệp",
      description: "Tư vấn nâng cao kỹ năng, chuyển đổi ngành nghề, hỗ trợ tìm việc mới với mức lương cao hơn.",
    },
  ]

  const offices = [
    { city: "Tokyo Office", address: "Shibuya, Tokyo 150-0002" },
    { city: "Osaka Office", address: "Namba, Osaka 542-0076" },
    { city: "Nagoya Office", address: "Sakae, Nagoya 460-0008" },
  ]

  return (
    <section id="support" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-noto">Hỗ Trợ Sau Tiếp Nhận</h2>
          <p className="text-xl text-gray-600">Đồng hành cùng bạn suốt hành trình tại Nhật Bản</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {supportServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-red" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4 font-noto">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-navy mb-4 font-noto">Văn Phòng Đại Diện Tại Nhật Bản</h3>
            <p className="text-gray-600 mb-6">
              Chúng tôi có văn phòng đại diện tại Tokyo, Osaka và Nagoya để hỗ trợ học viên tốt nhất
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offices.map((office, index) => (
                <div key={index} className="text-center">
                  <MapPin className="w-6 h-6 text-red mx-auto mb-2" />
                  <h4 className="font-semibold text-navy">{office.city}</h4>
                  <p className="text-sm text-gray-600">{office.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
