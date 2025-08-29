"use client";
import { useEffect } from "react";

export default function ContactSection() {
  useEffect(() => {
    // Tạo script BowNow
    const script = document.createElement("script");
    script.id = "_bownow_cs_sid_757076642af3b3b48374";
    script.charset = "utf-8";
    script.src = "https://contents.bownow.jp/forms/sid_757076642af3b3b48374/trace.js";
    document.head.appendChild(script);
  }, []);

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-navy to-navy-dark text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Cột trái: Nội dung text */}
          <div>
            <h2 className="text-3xl font-bold mb-6">無料相談フォーム</h2>
            <p className="mb-4">
              下記フォームに必要事項をご入力ください。<br />
              BowNowチームが内容を確認後、ご連絡いたします。
            </p>
            <p>
              お気軽にご相談ください。<br />
              営業・マーケティング課題の解決をサポートいたします。
            </p>
          </div>

          {/* Cột phải: Form BowNow */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-black">
            {/* Đây là nơi BowNow sẽ render form */}
            <div id="sid_757076642af3b3b48374" className="min-h-[600px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
