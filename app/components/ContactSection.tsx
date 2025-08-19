import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-navy to-navy-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-noto">お問い合わせ</h2>
          <p className="text-xl opacity-90">
            無料相談・詳細情報をご希望の方は、今すぐご連絡ください。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form liên hệ */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 font-noto">無料相談フォーム</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="氏名 *"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="電話番号 *"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-white/50">
                  <option value="" className="text-gray-800">
                    ご関心の職種を選択してください
                  </option>
                  <option value="ky-thuat" className="text-gray-800">技術者</option>
                  <option value="lao-dong" className="text-gray-800">一般労働者</option>
                  <option value="cham-soc" className="text-gray-800">介護・福祉</option>
                  <option value="xay-dung" className="text-gray-800">建設</option>
                  <option value="dich-vu" className="text-gray-800">サービス業</option>
                  <option value="nong-nghiep" className="text-gray-800">農業</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="追加情報（年齢、経験、希望など）"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white/50 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red text-white px-6 py-4 rounded-lg hover:bg-red-dark transition-all duration-300 transform hover:-translate-y-1 font-medium text-lg flex items-center justify-center"
              >
                送信
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-noto">お問い合わせ先</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">本社 | SULECO専門学校</h4>
                  <p className="opacity-90">165 Dai Lo 3, Phuoc Long Ward, Ho Chi Minh City</p>
                  <p className="opacity-90">Tel: (+84) (28) 38 227 229</p>
                  <p className="opacity-90">Phone: (+84) 919 791 943</p>
                  <p className="opacity-90">Email: info@suleco.vn</p>
                  <p className="opacity-90">Web: www.suleco.vn</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">日本駐在員事務所</h4>
                  <p className="opacity-90">愛知県名古屋市中村区名駅3-20-20 名駅錦ビル 6階</p>
                  <p className="opacity-90">Email: sales@suleco.vn</p>
                  <p className="opacity-90">Phone: +81 90 2939 6868</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">SULECO 中部支店</h4>
                  <p className="opacity-90">12 Phan Chu Trinh, Thuan Hoa Ward, Thua Thien Hue City</p>
                  <p className="opacity-90">Phone: (+84) 979 070 330</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">DA NANG 代理事務所</h4>
                  <p className="opacity-90">236 Ly Thuong Kiet, Tam Ky Ward, Da Nang City</p>
                  <p className="opacity-90">Phone: (+84) 911 671 639</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
