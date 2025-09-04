"use client";

import React from "react";
import { Building2, User2, Briefcase, Calendar, Layers, MapPin, Users, Network } from "lucide-react";

export default function SulecoOverview() {
  return (
    <section id="about" className="mx-auto max-w-7xl py-4 px-6 md:px-12">
       <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-red font-noto">
          主要都市における代表的なパートナー
        </h2>
      </div>

      {/* 3 つの主要カード */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow-md rounded-xl border border-red-200 p-5 flex flex-col items-center text-center">
          <Building2 className="text-red-600 w-8 h-8 mb-3" />
          <h3 className="font-semibold text-gray-800">会社名</h3>
          <p className="text-sm text-gray-600 mt-2">
            海外技能実習生・技術者派遣サービス株式会社（SULECO）
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl border border-red-200 p-5 flex flex-col items-center text-center">
          <User2 className="text-red-600 w-8 h-8 mb-3" />
          <h3 className="font-semibold text-gray-800">代表者</h3>
          <p className="text-sm text-gray-600 mt-2">
            会長兼社長 – <b>ファン・ヴー・トゥアン</b>
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl border border-red-200 p-5 flex flex-col items-center text-center">
          <Briefcase className="text-red-600 w-8 h-8 mb-3" />
          <h3 className="font-semibold text-gray-800">事業分野</h3>
          <p className="text-sm text-gray-600 mt-2">
            人材派遣、外国語教育、職業教育・訓練、職業紹介・仲介
          </p>
        </div>
      </div>

      {/* 詳細情報カード */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-red-100 shadow-sm rounded-xl p-5 flex items-start gap-3">
          <Calendar className="w-6 h-6 text-red-600 mt-1" />
          <div>
            <p className="font-semibold text-gray-800">設立日</p>
            <p className="text-sm text-gray-600">1981年12月19日</p>
          </div>
        </div>

        <div className="bg-white border border-red-100 shadow-sm rounded-xl p-5 flex items-start gap-3">
          <Layers className="w-6 h-6 text-red-600 mt-1" />
          <div>
            <p className="font-semibold text-gray-800">資本金</p>
            <p className="text-sm text-gray-600">5億8,000万円</p>
          </div>
        </div>

        <div className="bg-white border border-red-100 shadow-sm rounded-xl p-5 flex items-start gap-3">
          <MapPin className="w-6 h-6 text-red-600 mt-1" />
          <div>
            <p className="font-semibold text-gray-800">住所</p>
            <p className="text-sm text-gray-600">
              ホーチミン市フックロン坊3丁目165番地
            </p>
          </div>
        </div>

        <div className="bg-white border border-red-100 shadow-sm rounded-xl p-5 flex items-start gap-3">
          <Users className="w-6 h-6 text-red-600 mt-1" />
          <div>
            <p className="font-semibold text-gray-800">従業員数</p>
            <p className="text-sm text-gray-600">115名（2024年6月時点）</p>
          </div>
        </div>

        <div className="bg-white border border-red-100 shadow-sm rounded-xl p-5 flex items-start gap-3">
          <Building2 className="w-6 h-6 text-red-600 mt-1" />
          <div>
            <p className="font-semibold text-gray-800">拠点</p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>SULECO 専門学校</li>
              <li>日本（名古屋）駐在事務所</li>
              <li>中部支店（フエ）</li>
              <li>中部駐在事務所（ダナン）</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-red-100 shadow-sm rounded-xl p-5 flex items-start gap-3">
          <Network className="w-6 h-6 text-red-600 mt-1" />
          <div>
            <p className="font-semibold text-gray-800">子会社</p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>SULECO MANPOWER</li>
              <li>SULECO COFFEE</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
