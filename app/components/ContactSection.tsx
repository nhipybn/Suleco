"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Script from "next/script";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-navy to-navy-dark text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-noto">
            お問い合わせ
          </h2>
          <p className="text-lg text-gray-200">
            サービスに関するご質問やご相談は、以下のフォームからお気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Thông tin liên hệ */}
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-yellow-400 mr-3 mt-1" />
              <p>
                〒100-0000 東京都千代田区丸の内1-1-1
                <br />
                Marunouchi Building 10F
              </p>
            </div>
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-yellow-400 mr-3 mt-1" />
              <p>+81 3-1234-5678</p>
            </div>
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-yellow-400 mr-3 mt-1" />
              <p>contact@example.com</p>
            </div>
            <div className="flex items-start">
              <Clock className="w-6 h-6 text-yellow-400 mr-3 mt-1" />
              <p>営業時間: 平日 9:00〜18:00</p>
            </div>
          </div>

          {/* Form BowNow */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6 font-noto">無料相談フォーム</h3>

            {/* Container hiển thị form */}
            <div
              id="_bownow_cs_form_sid_757076642af3b3b48374"
              className="relative w-full"
            ></div>

            {/* Script BowNow */}
            <Script
              id="_bownow_cs_sid_757076642af3b3b48374"
              strategy="afterInteractive"
            >
              {`
                var _bownow_cs_sid_757076642af3b3b48374 = document.createElement('script');
                _bownow_cs_sid_757076642af3b3b48374.charset = 'utf-8';
                _bownow_cs_sid_757076642af3b3b48374.src = 'https://contents.bownow.jp/forms/sid_757076642af3b3b48374/trace.js';
                document.getElementsByTagName('head')[0].appendChild(_bownow_cs_sid_757076642af3b3b48374);
              `}
            </Script>
          </div>
        </div>
      </div>
    </section>
  );
}
