"use client"

import { useEffect, useRef } from "react"

export default function ContactSection() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the script has already been added to prevent duplicates
    if (!document.getElementById('_bownow_cs_sid_757076642af3b3b48374')) {
      const bownowFormScript = document.createElement('script');
      bownowFormScript.id = '_bownow_cs_sid_757076642af3b3b48374';
      bownowFormScript.charset = 'utf-8';
      bownowFormScript.src = 'https://contents.bownow.jp/forms/sid_757076642af3b3b48374/trace.js';
      
      // Append the script to the head
      document.getElementsByTagName('head')[0].appendChild(bownowFormScript);
    }
  }, []); // Empty dependency array ensures this runs only once

  return (
    <section id="contact" className="relative py-20 bg-blue-900 text-white">
      {/* Background decorations for a dynamic look */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10"
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            お問い合わせ
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            ご質問やご相談がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
            {/* The Bownow form will be inserted here by the script */}
            <div id="_bownow_form_sid_757076642af3b3b48374_root" ref={formRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
