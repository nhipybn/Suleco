import { Phone, Shield, TrendingUp, Home } from "lucide-react"

export default function SupportSection() {
  const supportServices = [
    {
      icon: Phone,
      title: "定期連絡",
      description: "3か月ごとに定期的に電話で状況を確認し、進捗を報告。",
    },
    {
      icon: Shield,
      title: "トラブル対応",
      description: "退職、転職、健康問題など、発生した問題を迅速にサポート。",
    },
    {
      icon: TrendingUp,
      title: "報告書の提供",
      description: "毎月、受入企業・組合向けに定期報告を作成し提出。",
    },
    {
      icon: Home,
      title: "ビザサポート",
      description: "技能実習、介護福祉士などのビザ切替・更新手続きの支援。",
    },
  ]

  return (
    <section id="support" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-noto">受入後のサポート</h2>
          <p className="text-xl text-gray-600">企業様向けの定期報告とトータルサポート</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  )
}
