"use client";

import Script from "next/script";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-navy to-navy-dark text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {/* Cột trái: Video YouTube (đã sửa) */}
          <div className="flex justify-center flex-col">
            <h3 className="text-2xl font-bold font-noto mb-4">
              お客様の声
            </h3>
            {/* Đây là vị trí bạn có thể đặt iframe video YouTube.
                Tôi đã thay thế iframe của form bằng một iframe video mẫu. */}
            <div className="aspect-w-16 aspect-h-9 w-full rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/your_video_id"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Cột phải: Form BowNow (đã sửa) */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-gray-900 flex flex-col justify-start">
            <h3 className="text-2xl font-bold mb-6 font-noto">無料相談フォーム</h3>

            {/* Wrapper giữ vị trí form - Sửa ID theo yêu cầu của Bownow */}
            <div
              className="relative w-full min-h-[400px]"
              id="_bownow_form_sid_757076642af3b3b48374_root" // ID này cần khớp với script của bạn
            ></div>

            {/* Script BowNow - Sửa lại cú pháp cho Next.js */}
            <Script id="_bownow_cs_sid_757076642af3b3b48374" strategy="afterInteractive">
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
