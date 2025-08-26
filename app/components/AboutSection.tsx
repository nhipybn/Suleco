"use client"

import { Target, Award, Heart, Lightbulb } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-0 bg-white-50">
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex chia 2 cột */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          
          {/* Hình bên trái - chiều cao cố định */}
          <div className="lg:w-2/3 relative h-85">
            <img
              src="/dng-40.jpg"
              alt="Trụ sở JapanWork"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
            <img
              src="/logo-suleco.png"
              alt="Logo"
              className="absolute bottom-2 left-2 h-10 p-1 shadow-md bg-white rounded"
            />
          </div>

          {/* 4 thẻ bên phải */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {[
              {
                icon: <Target className="w-5 h-5 text-red" />,
                title: "ミッション",
                text: "質の高い学習者コミュニティを構築し、常に新しい価値を創造し、社会全体、特に労働者とパートナーに持続可能な価値を提供する。"
              },
              {
                icon: <Award className="w-5 h-5 text-red" />,
                title: "ビジョン",
                text: "現代のトレンドに合った教育的なアイデアや取り組みを通じて、日本への人材の選抜・育成・移転分野で業界をリードし続ける。"
              },
              {
                icon: <Heart className="w-5 h-5 text-red" />,
                title: "コアバリュー",
                text: "誠実さと優しさ\n信頼と品質\nプロフェッショナルと革新性\n独自性を生み出す創造力"
              },
              {
                icon: <Lightbulb className="w-5 h-5 text-red" />,
                title: "哲学",
                text: "人となるための教育\n人材となるための訓練\n成功するための労働\n共に成功するための協力"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex-1 group flex items-start space-x-3 p-3 rounded-lg border border-transparent transition duration-300 hover:border-red-500 hover:shadow-md hover:shadow-red-100"
              >
                <div className="w-10 h-10 bg-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#000000] mb-1 font-noto">{item.title}</h3>
                  <p className="text-gray-600 text-xs whitespace-pre-line">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
