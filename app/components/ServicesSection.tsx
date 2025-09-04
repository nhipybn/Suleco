"use client"

export default function ServicesSection() {
  const services = [
    {
      img: "/Tts.jpeg", // ảnh cho 技能実習生
      title: "技能実習生",
      description: "製造、建設、農業、介護、食品加工などの分野での研修と派遣。",
      duration: "1〜5年",
    },
    {
      img: "/tts.jpg", // ảnh cho 特定技能
      title: "特定技能",
      description: "14分野での技能労働者を派遣。最長5年間勤務可能。",
      duration: "最長5年",
    },
    {
      img: "/tts1.jpg", // ảnh cho エンジニア・技術者
      title: "エンジニア・技術者",
      description: "ベトナムの30以上の大学からエンジニアを選抜し派遣。専攻は機械、IT、建設など。",
      duration: "制限なし",
    },
    {
      img: "/menu_index.jpg", // ảnh cho 介護福祉士
      title: "介護福祉士",
      description: "日本語と介護スキルの専門教育プログラム。介護福祉士資格試験の合格を支援。",
      duration: "5年",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-red mb-4 font-noto">
            人材派遣プログラム
          </h2>
          <p className="text-xl text-gray-600">
            多様な職種 – 専門的な研修 – 日本での就労チャンス
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-2 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              {/* Ảnh lớn hơn và bo góc */}
<div className="w-full h-40 mx-auto mb-2">
  <img
    src={service.img}
    alt={service.title}
    className="w-full h-full object-cover rounded-xl shadow-md"
  />
</div>

              <h3 className="text-xl font-semibold text-red mb-4 font-noto text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 text-center">
                {service.description}
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">期間:</span>
                <span className="font-semibold">{service.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
