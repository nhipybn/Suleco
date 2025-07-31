import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-navy to-navy-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-noto">Bắt Đầu Hành Trình Của Bạn</h2>
          <p className="text-xl opacity-90">
            Đừng để cơ hội trôi qua! Liên hệ ngay để được tư vấn miễn phí và chi tiết
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form liên hệ */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 font-noto">Đăng Ký Tư Vấn Miễn Phí</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Họ và tên *"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Số điện thoại *"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-white/50">
                  <option value="" className="text-gray-800">
                    Chọn ngành nghề quan tâm
                  </option>
                  <option value="ky-thuat" className="text-gray-800">
                    Kỹ thuật viên
                  </option>
                  <option value="lao-dong" className="text-gray-800">
                    Lao động phổ thông
                  </option>
                  <option value="cham-soc" className="text-gray-800">
                    Chăm sóc sức khỏe
                  </option>
                  <option value="xay-dung" className="text-gray-800">
                    Xây dựng
                  </option>
                  <option value="dich-vu" className="text-gray-800">
                    Dịch vụ
                  </option>
                  <option value="nong-nghiep" className="text-gray-800">
                    Nông nghiệp
                  </option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Ghi chú thêm (tuổi, kinh nghiệm, mong muốn...)"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white/50 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red text-white px-6 py-4 rounded-lg hover:bg-red-dark transition-all duration-300 transform hover:-translate-y-1 font-medium text-lg flex items-center justify-center"
              >
                Gửi thông tin đăng ký
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-noto">Thông Tin Liên Hệ</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Trụ sở chính</h4>
                  <p className="opacity-90">123 Đường ABC, Quận 1, TP.HCM</p>
                  <p className="opacity-90">456 Đường XYZ, Quận Cầu Giấy, Hà Nội</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hotline</h4>
                  <p className="opacity-90">📞 1900-xxxx (miễn phí)</p>
                  <p className="opacity-90">📱 0901-xxx-xxx</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="opacity-90">info@japanwork.vn</p>
                  <p className="opacity-90">tuyensinh@japanwork.vn</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Giờ làm việc</h4>
                  <p className="opacity-90">Thứ 2 - Thứ 6: 8:00 - 17:30</p>
                  <p className="opacity-90">Thứ 7: 8:00 - 12:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-xl">
              <h4 className="font-semibold mb-4">Ưu đãi đặc biệt</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>✅ Miễn phí tư vấn và định hướng nghề nghiệp</li>
                <li>✅ Giảm 20% học phí cho 100 học viên đầu tiên</li>
                <li>✅ Hỗ trợ vay vốn với lãi suất ưu đãi</li>
                <li>✅ Cam kết hoàn tiền nếu không đậu visa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
