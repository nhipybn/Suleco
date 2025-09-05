"use client";

import { MapPin } from "lucide-react";
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
          <h2 className="text-3xl sm:text-4xl font-bold font-noto mb-4">
            お問い合わせ & パートナーの声
          </h2>
          <p className="text-lg text-gray-300">
            Sulecoのサービスをご利用いただいた企業の感想と無料相談フォーム
          </p>
        </div>

        {/* Grid 2 cột */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Cột trái: Iframe form BowNow */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <iframe
              allowTransparency={true}
              frameBorder="0"
              height="800"
              id="_bownow_form_contents"
              scrolling="yes"
              src="https://contents.bownow.jp/forms/view?form_id=sid_e864b022bd715c518685"
              style={{
                border: "none",
                overflow: "hidden",
                width: "100%",
                display: "block",
              }}
            />
          </div>

          {/* Cột phải: Thông tin liên hệ */}
          <div>
            <div className="space-y-6">
              {/* 本社 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">本社 | SULECO専門学校</h4>
                  <p className="opacity-90">
                    165 Dai Lo 3, Phuoc Long Ward, Ho Chi Minh City
                  </p>
                  <p className="opacity-90">Tel: (+84) (28) 38 227 229</p>
                  <p className="opacity-90">Phone: (+84) 919 791 943</p>
                  <p className="opacity-90">Email: info@suleco.vn</p>
                  <p className="opacity-90">Web: www.suleco.vn</p>
                </div>
              </div>

              {/* 日本駐在員事務所 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">日本駐在員事務所</h4>
                  <p className="opacity-90">
                    愛知県名古屋市中村区名駅3-20-20 名駅錦ビル 6階
                  </p>
                  <p className="opacity-90">Email: sales@suleco.vn</p>
                  <p className="opacity-90">Phone: +81 90 2939 6868</p>
                </div>
              </div>

              {/* SULECO 中部支店 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">SULECO 中部支店</h4>
                  <p className="opacity-90">
                    12 Phan Chu Trinh, Thuan Hoa Ward, Hue City
                  </p>
                  <p className="opacity-90">Phone: (+84) 979 070 330</p>
                </div>
              </div>

              {/* DA NANG 代理事務所 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">DA NANG 代理事務所</h4>
                  <p className="opacity-90">
                    236 Ly Thuong Kiet, Tam Ky Ward, Da Nang City
                  </p>
                  <p className="opacity-90">Phone: (+84) 911 671 639</p>
                </div>
              </div>
            </div>
          </div>
        </div> {/* ✅ đóng grid ở đây */}
      </div>
    </section>
  );
}
