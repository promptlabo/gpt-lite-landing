// VoiceSection.tsx - 体験者の声セクション
import React from "react";

export default function VoiceSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">体験者の声</h2>
      <blockquote className="border-l-4 border-blue-400 pl-4 text-gray-700 italic">
        教材作成にかかっていた時間が、たった数分に。<br />
        クイズも自動で、生徒の反応も上々です！<br />
        ― 個人塾講師 Mさん（40代）
      </blockquote>
    </section>
  );
}

