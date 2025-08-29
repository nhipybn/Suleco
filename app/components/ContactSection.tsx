"use client";

import Script from "next/script";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-navy to-navy-dark text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Phần tiêu đề */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-noto">
            お問い合わせ
          </h2>
          <p className="text-xl opacity-90">
            無料相談・詳細情報をご希望の方は、今すぐご連絡ください。
          </p>
        </div>

        {/* Container form */}
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold mb-6 font-noto text-white">
            無料相談フォーム
          </h3>
          <div
            id="sid_757076642af3b3b48374"
            className="min-h-[600px] w-full bg-white/5 rounded-lg"
          />
        </div>
      </div>

      {/* Script BowNow */}
      <Script
        id="_bownow_cs_sid_757076642af3b3b48374"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var _bownow_cs_sid_757076642af3b3b48374 = document.createElement('script');
            _bownow_cs_sid_757076642af3b3b48374.charset = 'utf-8';
            _bownow_cs_sid_757076642af3b3b48374.src = 'https://contents.bownow.jp/forms/sid_757076642af3b3b48374/trace.js';
            document.getElementsByTagName('head')[0].appendChild(_bownow_cs_sid_757076642af3b3b48374);
          `,
        }}
      />
    </section>
  );
}
