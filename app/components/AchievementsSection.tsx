import { Users, Building, TrendingUp, Award } from "lucide-react"

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-noto">日本での実績とパートナー
</h2>
          <p className="text-xl text-gray-600">日本における印象的な数字と信頼できるパートナーネットワーク</p>
        </div>

        {/* Thành tích */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-red" />
            </div>
            <div className="text-3xl font-bold text-navy font-noto mb-2">43+</div>
            <div className="text-gray-600">年以上の運営実績
</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-red" />
            </div>
            <div className="text-3xl font-bold text-navy font-noto mb-2">36+</div>
            <div className="text-gray-600">校以上の
大学、短期大学、教育機関との連携​</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-red" />
            </div>
            <div className="text-3xl font-bold text-navy font-noto mb-2">905+</div>
            <div className="text-gray-600">社数以上の
パートナー企業</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-red" />
            </div>
            <div className="text-3xl font-bold text-navy font-noto mb-2">13,059+</div>
            <div className="text-gray-600">人以上の
派遣実績
</div>
          </div>
        </div>

        {/* Đối tác */}
      </div>
    </section>
  )
}
