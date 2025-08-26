import { Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-4 py-2 pl-2">
              <div className="w-full h-30 flex">
            <img src="/logo-suleco.png" alt="Suleco Logo" className="h-20 w-40 object-contain" />
              </div>
             
            </div>
            <p className="text-sm opacity-75 mb-4">
              SULECOは1981年設立以来、40年以上にわたりベトナム人材を日本へ送り出すパイオニアとして活動しています。
            </p>
          </div>

          {/* サービス */}
          <div>
            <h4 className="font-semibold mb-4 font-noto">サービス</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>技能実習生の派遣</li>
              <li>特定技能人材の派遣</li>
              <li>介護・看護人材</li>
              <li>建設人材</li>
              <li>農業人材</li>
              <li>技術者派遣</li>
            </ul>
          </div>

          {/* サポート */}
          <div>
            <h4 className="font-semibold mb-4 font-noto">サポート</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>無料相談</li>
              <li>登録の流れ</li>
              <li>よくある質問</li>
              <li>プライバシーポリシー</li>
              <li>利用規約</li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h4 className="font-semibold mb-2 font-noto">お問い合わせ</h4>
            <div className="space-y-2 text-sm opacity-75">
              <p>📍 本社 | SULECO専門学校</p>
              <p>165 Dai Lo 3, Phuoc Long Ward, Ho Chi Minh City</p>
              <p>Tel: (+84) (28) 38 227 229 | Mobile: (+84) 919 791 943</p>
              <p>Email: info@suleco.vn | Web: www.suleco.vn</p>

              <p>📍 日本事務所（名古屋）</p>
              <p>愛知県名古屋市中村区名駅3-20-20 名駅錦ビル6階</p>
              <p>Email: sales@suleco.vn | Phone: +81 90 2939 6868</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>© 1981–2025 SULECO株式会社. All Rights Reserved.</p>
          <p>技能実習生、特定技能、技術者、介護人材のご相談はお気軽にお問い合わせください。</p>
        </div>
      </div>
    </footer>
  )
}
