// HeroSection.tsx - ファーストビュー
import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="text-center space-y-4">
      <h1 className="text-3xl md:text-5xl font-bold">教材づくり、3分で終わる時代へ</h1>
      <p className="text-lg">教科・学年・単元を入れるだけ。GPTがあなたの教材を自動生成。</p>
      <div className="flex justify-center gap-4 mt-4">
        <Link href="https://gpt-tutor-lite.vercel.app/" className="bg-blue-600 text-white px-6 py-2 rounded-2xl shadow">
          GUI体験する
        </Link>
        <Link href="https://lin.ee/KGoZbJ9b" className="bg-green-600 text-white px-6 py-2 rounded-2xl shadow">
          LINE登録で特典受取
        </Link>
      </div>
    </section>
  );
}

