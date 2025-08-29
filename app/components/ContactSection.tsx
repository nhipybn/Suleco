"use client";
import { useEffect } from "react";

export default function ContactSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://contents.bownow.jp/forms/sid_757076642af3b3b48374/trace.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-navy to-navy-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Cột trái: Text giới thiệu */}
          <div>
            <h2 className="text-3xl font-bold mb-6">無料相談フォーム</h2>
            <p className="mb-4">
              BowNow 無料相談フォームにご入力ください。担当者が確認後、ご連絡いたします。
            </p>
          </div>

          {/* Cột phải: Form BowNow */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-black">
            <div
              id="sid_d270596b7084f91ec4a5"
              className="min-h-[600px]"
            ></div>
          </div>

        </div>
      </div>
    </section>
  );
}
