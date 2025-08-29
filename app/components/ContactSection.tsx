"use client";

import { useEffect } from "react";
import { MapPin } from "lucide-react";

export default function ContactSection() {
  useEffect(() => {
    // Đảm bảo không gắn script nhiều lần
    if (!document.getElementById("_bownow_loader")) {
      const script = document.createElement("script");
      script.id = "_bownow_loader";
      script.type = "text/javascript";
      script.charset = "utf-8";
      script.src =
        "https://contents.bownow.jp/forms/sid_757076642af3b3b48374/trace.js";
      document.head.appendChild(script);
    }
  }, []);

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

        {/* Khối form */}
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 font-noto">無料相談フォーム</h3>

          {/* Đây là div đích mà BowNow sẽ render form */}
          <div
            id="sid_757076642af3b3b48374"
            className="min-h-[600px] w-full"
          ></div>
        </div>
      </div>
    </section>
  );
}
