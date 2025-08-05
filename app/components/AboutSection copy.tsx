import Image from "next/image"
import { CheckCircle, Users } from "lucide-react"

export default function CertificationsSection() {
  const licenses = [
    {
      id: 1,
      number: "199/LĐTBXH-GP",
      description: "Giấy phép đưa NLĐ đi làm việc ở nước ngoài & Quyết định giao NV cho CN",
    },
    {
      id: 2,
      number: "34779/2022/34/ SLĐTBXH-VLATLĐ & 27227/SLĐTBXH-GP",
      description: "Giấy phép Hoạt động dịch vụ việc làm",
    },
    {
      id: 3,
      number: "29/GCNĐKHĐ-SLĐTBXH",
      description: "Giấy chứng nhận Đăng ký hoạt động Giáo dục nghề nghiệp",
    },
    {
      id: 4,
      number: "74/2022/SHCM",
      description: "Giấy phép Hoạt động cho thuê lại lao động",
    },
    {
      id: 5,
      number: "3745/QĐ-SGDĐT",
      description: "Giấy phép dịch vụ Tư vấn Du học",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Left Content - Licenses */}
          <div>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl mb-8">Chứng nhận & Giấy phép</h2>
            <ul className="space-y-6">
              {licenses.map((license) => (
                <li key={license.id} className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-6 w-6 text-red-600 mt-1" />
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-navy-dark">{license.number}</p>
                    <p className="mt-1 text-gray-600">{license.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Image and Affiliations */}
          <div className="mt-12 lg:mt-0 space-y-12">
            {/* Affiliations */}
            <div className="p-8 bg-white rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-navy mb-4">Suleco là thành viên của</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Users className="flex-shrink-0 h-6 w-6 text-red-600" />
                  <p className="ml-3 font-medium">HIỆP HỘI XUẤT KHẨU LAO ĐỘNG VIỆT NAM</p>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="flex-shrink-0 h-6 w-6 text-red-600" />
                  <p className="ml-3 font-medium">CỤC QUẢN LÝ LAO ĐỘNG NGOÀI NƯỚC</p>
                </div>
                <p className="mt-4 flex items-center text-lg font-semibold text-navy">
                  <CheckCircle className="flex-shrink-0 h-6 w-6 text-red-600 mr-2" />
                  Suleco đạt chứng nhận doanh nghiệp xuất khẩu lao động 4 sao
                </p>
              </div>
            </div>

            {/* Image Placeholder - Bạn có thể chèn ảnh vào đây */}
            <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/path/to/your/image.jpg"
                alt="Mô tả hình ảnh"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}