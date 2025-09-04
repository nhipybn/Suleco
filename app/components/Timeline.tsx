import React from "react";

const events = [
  { year: "1981年", text: "「外国人労働協力事務所」としてホーチミン市労働傷病兵社会局の下に設立" },
  { year: "1991年", text: "「海外実習生技術者派遣サービス会社（SULECO）」に設立" },
  { year: "2003年", text: "「SULECO国際労働技術職業学校」を開校 | 外国語・職業訓練開始" },
  { year: "2015年", text: "国営企業から株式会社へ移行" },
  { year: "2018年", text: "フエ省に中部支店を開設" },
  { year: "2019年", text: "介護分野における日本への労働者派遣許可を取得" },
  { year: "2020年", text: "人財派遣会社であるSULECO MANPOWERを設立\nSULECOは介護初等教育の直接教育許可を取得、正式に介護の訓練を開始" },
  { year: "2021年", text: "QUANG NAM代理事務所開設" },
  { year: "2023年", text: "SULECO COFFEE 会社設立" },
  { year: "2024年", text: "日本留学プログラムの事業拡大" },
];

const TimelineHorizontal: React.FC = () => {
  return (
    <div className="w-80% overflow-hidden bg-white py-10">
      <div className="flex animate-scroll-timeline space-x-4">
        {[...events, ...events].map((event, idx) => (
          <div
            key={idx}
            className="border-2 border-red-200 flex flex-col items-center bg-white rounded-xl shadow-md p-2 min-w-[250px] h-[140px] md:h-[140px] hover:scale-105 transition-transform duration-300"
          >
            <div className="w-30 h-10 rounded-full bg-red-500 text-red flex items-center justify-center font-bold text-xl">
              {event.year}
            </div>
            <p className="mt-3 text-sm text-center whitespace-pre-line">{event.text}</p>
          </div>
        ))}
      </div>

      {/* Custom animation */}
      <style>{`
        @keyframes scrollTimeline {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-timeline {
          animation: scrollTimeline 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TimelineHorizontal;
