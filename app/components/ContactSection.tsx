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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-noto">
            お問い合わせ
          </h2>
          <p className="text-xl opacity-90">
            無料相談・詳細情報をご希望の方は、今すぐご連絡ください。
          </p>
        </div>

        {/* Grid 2 cột */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Form Bownow – cột trái */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
  <h3 className="text-2xl font-bold mb-6 font-noto">無料相談フォーム</h3>

  <iframe
  src="https://form.bownow.jp/forms/sid_d270596b7084f91ec4a5”

  width="100%"
  height="600"
  style="border: none; max-width: 100%;"
  loading="lazy"
></iframe>
</div>

          {/* Thông tin liên hệ – cột phải */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-noto">お問い合わせ先</h3>
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
                    12 Phan Chu Trinh, Thuan Hoa Ward, Thua Thien Hue City
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
        </div>
      </div>
    </section>
  );
}
