"use client"

import { Target, Award, Heart } from "lucide-react"
import { ArrowRight } from "lucide-react" // Added ArrowRight import for button

export default function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          Phần này bị lỗi trong code bạn gửi. Bạn đang nhúng toàn bộ code của HeroSection
          vào đây thay vì gọi nó. Tôi sẽ giữ lại phần nội dung của nó trong div,
          nhưng bạn nên xem xét tách ra thành component riêng biệt.
        */}
        <div className="w-full bg-white text-navy py-16">
          <div className="max-w-5xl mx-auto px-4 text-left relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">SULECO（スレコ）について</h2>
            <p className="text-base md:text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
              SULECO（スレコ）は、ベトナム・ホーチミン市に本社を構える人材育成・送り出し企業です。1981年の設立以来、43年以上にわたり技能実習生、技術者、介護人材、特定技能人材などを日本を中心とする諸外国に派遣してまいりました。
            </p>

            {/* Horizontal Card Grid - Bố cục đã được thay đổi */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="group rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:bg-blue-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                  <img src="https://img.icons8.com/?size=100&id=9oUOrI5mCb9u&format=png&color=000000" alt="Icon" className="h-10 w-20" />
                </div>
                <h4 className="text-lg font-semibold mb-1">政府認可</h4>
                <p className="text-sm">ベトナム労働・傷病兵・社会問題省認可：199/LĐTBXH-GP</p>
              </div>

              {/* Card 2 */}
              <div className="group rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:bg-blue-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                  <img src="https://img.icons8.com/?size=100&id=112557&format=png&color=000000" alt="Icon" className="h-10 w-20" />
                </div>
                <h4 className="text-lg font-semibold mb-1">派遣実績</h4>
                <p className="text-sm">12,000名以上（日本・台湾・ドイツなど）</p>
              </div>

              {/* Card 3 */}
              <div className="group rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:bg-blue-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                  <img src="https://img.icons8.com/?size=100&id=9oUOrI5mCb9u&format=png&color=000000" alt="Icon" className="h-10 w-20" />
                </div>
                <h4 className="text-lg font-semibold mb-1">トレーニングセンター</h4>
                <p className="text-sm">13,000㎡の敷地、25教室、500名以上の寮完備</p>
              </div>

              {/* Card 4 */}
              <div className="group rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:bg-blue-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                  D
                </div>
                <h4 className="text-lg font-semibold mb-1">一貫教育体制</h4>
                <p className="text-sm">日本語教育・介護福祉士対策・技能講習・体力訓練まで</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative inline-block">
            <img
              src="/DNG-40.jpg"
              alt="Trụ sở JapanWork"
              className="rounded-xl shadow-lg"
            />

            {/* Logo ở góc trên trái */}
            <img
              src="/logo-suleco.png" // ← thay bằng đường dẫn thực tế của logo bạn
              alt="Logo"
              className="absolute bottom-2 left-2 h-10 w-30 p-1 shadow-md"
            />
          </div>

          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2 font-noto">ミッション</h3>
                  <p className="text-gray-600">
                    質の高い研修生コミュニティを築き上げ、常に価値を創造し、労働者およびパートナーを含む社会全体に持続可能な価値を提供すること。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2 font-noto">ビジョン</h3>
                  <p className="text-gray-600">
                    現代のトレンドに合った教育的なアイデアや取り組みを通じて、日本への人材の選抜・育成・移転分野において、引き続き業界をリードする企業であり続けること。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2 font-noto">コアバリュー</h3>
                  <p className="text-gray-600">
                      誠実さと優しさ<br />
                      信頼と品質<br />
                      プロフェッショナルと革新性<br />
                      独自性を生み出す創造力
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
