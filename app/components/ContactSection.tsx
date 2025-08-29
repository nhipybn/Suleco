"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const formWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Xoá script cũ nếu đã tồn tại
    const oldScript = document.getElementById("_bownow_cs_sid_757076642af3b3b48374");
    if (oldScript) oldScript.remove();

    // Tạo script giữ nguyên cấu trúc BowNow cung cấp
    const script = document.createElement("script");
    script.id = "_bownow_cs_sid_757076642af3b3b48374";
    script.innerHTML = `
      var _bownow_cs_sid_757076642af3b3b48374 = document.createElement('script');
      _bownow_cs_sid_757076642af3b3b48374.charset = 'utf-8';
      _bownow_cs_sid_757076642af3b3b48374.src = 'https://contents.bownow.jp/forms/sid_757076642af3b3b48374/trace.js';
      document.getElementsByTagName('head')[0].appendChild(_bownow_cs_sid_757076642af3b3b48374);
    `;

    document.head.appendChild(script);
  }, []);

  return (
    <motion.div
      ref={formWrapperRef}
      className="w-full max-w-2xl mx-auto p-6 rounded-2xl shadow-lg bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* BowNow sẽ tự inject form vào đây */}
      <div id="sid_757076642af3b3b48374"></div>
    </motion.div>
  );
}
