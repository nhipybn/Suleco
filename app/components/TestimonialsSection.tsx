"use client";

export default function PartnerVideoSection() {
  return (
    <section id="partner-video" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-noto">
            パートナーの声動画
          </h2>
          <p className="text-xl text-gray-600">
            Sulecoのサービスをご利用いただいた企業の感想
          </p>
        </div>

        <div className="flex justify-center">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/Zlj7HmdJHYQ?si=MLpvhd5q1XsK8sgN"
            title="Cảm nhận của đối tác"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
