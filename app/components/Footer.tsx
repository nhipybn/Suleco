import { Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-4 py-2 pl-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-navy" />
              </div>
              <div>
                <span className="text-xl font-bold font-noto">SULECO</span>
                <div className="text-xs opacity-75">Chuyên nhận thực tập sinh, kỹ năng đặc định và nhân lực kỹ thuật</div>
              </div>
            </div>
            <p className="text-sm opacity-75 mb-4">
              Công ty cổ phần SULECO, thành lập từ 1981, tiên phong trong lĩnh vực phái cử nhân lực sang Nhật Bản.
            </p>
          </div>

          {/* Dịch vụ */}
          <div>
            <h4 className="font-semibold mb-4 font-noto">Dịch Vụ</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>Phái cử kỹ thuật viên</li>
              <li>Lao động phổ thông</li>
              <li>Chăm sóc sức khỏe</li>
              <li>Xây dựng</li>
              <li>Nông nghiệp</li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h4 className="font-semibold mb-4 font-noto">Hỗ Trợ</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>Tư vấn miễn phí</li>
              <li>Quy trình đăng ký</li>
              <li>Câu hỏi thường gặp</li>
              <li>Chính sách bảo mật</li>
              <li>Điều khoản sử dụng</li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h4 className="font-semibold mb-2 font-noto">Liên Hệ</h4>
            <div className="space-y-2 text-sm opacity-75">
              <p>📍 Trụ sở chính | SULECO専門学校​</p>
              <p>165 Dai Lo 3, Phuoc Long Ward, Ho Chi Minh City</p>
              <p>Tel: (+84) (28) 38 227 229 | Phone: (+84) 919 791 943</p>
              <p>Email: info@suleco.vn | Web: www.suleco.vn</p>

              <p>📍 Nhật Bản - Văn phòng đại diện</p>
              <p>愛知県名古屋市中村区名駅3-20-20 名駅錦ビル 6階</p>
              <p>Email: sales@suleco.vn | Phone: +81 90 2939 6868</p>

              
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>© 1981–2025 SULECO Joint Stock Company. All Rights Reserved.</p>
          <p>Kính mời liên hệ để được tư vấn về nhận thực tập sinh, kỹ năng đặc định, nhân lực kỹ thuật và chăm sóc sức khỏe.</p>
        </div>
      </div>
    </footer>
  )
}
