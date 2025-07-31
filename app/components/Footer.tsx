import { Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-navy" />
              </div>
              <div>
                <span className="text-xl font-bold font-noto">JapanWork</span>
                <div className="text-xs opacity-75">Cầu nối đến Nhật Bản</div>
              </div>
            </div>
            <p className="text-sm opacity-75 mb-4">
              Đơn vị hàng đầu trong lĩnh vực phái cử lao động sang Nhật Bản với hơn 15 năm kinh nghiệm.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <span className="text-xs">FB</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <span className="text-xs">YT</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <span className="text-xs">ZL</span>
              </a>
            </div>
          </div>

          {/* Dịch vụ */}
          <div>
            <h4 className="font-semibold mb-4 font-noto">Dịch Vụ</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Phái cử kỹ thuật viên
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Lao động phổ thông
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Chăm sóc sức khỏe
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Xây dựng
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Nông nghiệp
                </a>
              </li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h4 className="font-semibold mb-4 font-noto">Hỗ Trợ</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Tư vấn miễn phí
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Quy trình đăng ký
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Điều khoản sử dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h4 className="font-semibold mb-4 font-noto">Liên Hệ</h4>
            <div className="space-y-2 text-sm opacity-75">
              <p>📍 TP.HCM: 123 Đường ABC, Q.1</p>
              <p>📍 Hà Nội: 456 Đường XYZ, Cầu Giấy</p>
              <p>📞 Hotline: 1900-xxxx</p>
              <p>✉️ Email: info@japanwork.vn</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 JapanWork. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
