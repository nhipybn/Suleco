import { FileText, CheckCircle, BookOpen, Users, Plane } from "lucide-react"

export default function ProcessSection() {
  const processSteps = [
    {
      icon: FileText,
      title: "受入ニーズのヒアリング",
      description: "採用ニーズや人数を確認します。",
    },
    {
      icon: CheckCircle,
      title: "候補者の推薦・書類選考",
      description: "全国から適した候補者を選定します。",
    },
    {
      icon: BookOpen,
      title: "オンライン/現地面接",
      description:
        "オンラインまたはベトナム現地で面接を実施。日本側は面接時に選考結果を通知します。",
    },
    {
      icon: Users,
      title: "教育・訓練（約4〜6ヶ月）",
      description:
        "日本語、文化、専門技能を中心とした研修を実施します。",
    },
    {
      icon: FileText,
      title: "書類手続き・ビザ申請",
      description:
        "ビザ申請の書類準備をサポートします。受入企業と連携して手続きを進めます。",
    },
    {
      icon: Plane,
      title: "出国・入国後フォロー",
      description:
        "出国手続きのサポート、来日後の生活や就労状況をフォローします。",
    },
  ]

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-noto">受入れまでの流れ</h2>
          <p className="text-xl text-gray-600">6ステップで簡単に開始できます</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-red rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="w-12 h-12 bg-red/10 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-red" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3 font-noto">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
